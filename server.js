const { io } = require("socket.io-client");
const axios = require("axios");
const fs = require("fs");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const bcrypt = require("bcrypt");
const session = require("express-session");

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1487064311330377829/EASOkoB2C6mw7BGHptwFNOwyF6z8uqcjAihyZv3ZM-haKqxtLWzQKK5elUmF3BQxl3wO";
const SERVER_URL = "https://milkyway.strasbourg.epitech.eu";

const ADMIN_USER = "ADMIN";
const ADMIN_HASH = "$2b$12$o91Qlibpp.xvDTdVu7/5n.66dj879Cy.eNFAmyDPmv.bsTJTdajgy";
const SESSION_SECRET = require("crypto").randomBytes(32).toString("hex");
const LAST_MSG_FILE = __dirname + "/last_discord_message.json";

const app = express();
const httpServer = http.createServer(app);
const ioServer = new Server(httpServer);

const sessionMiddleware = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "strict" }
});

app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(sessionMiddleware);

const auth = (req, res, next) => req.session.auth ? next() : res.redirect("/login");

let status = { connected: false, lastSeen: null, codes: [] };

app.get("/login", (req, res) => res.sendFile(__dirname + "/login.html"));
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USER && await bcrypt.compare(password, ADMIN_HASH)) {
        req.session.auth = true;
        return res.redirect("/");
    }
    res.redirect("/login?error=1");
});
app.post("/logout", (req, res) => { req.session.destroy(); res.redirect("/login"); });
app.get("/", auth, (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/calendar.html", auth, (req, res) => res.sendFile(__dirname + "/calendar.html"));
app.post("/badge", auth, async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Champs manquants" });
    try {
        const { data } = await axios.post("https://api.badger.epihub.eu/api/auth/login", { email, password }, {
            headers: {
                "accept": "application/json, text/plain, */*",
                "content-type": "application/json",
                "origin": "https://badger.epihub.eu",
                "referer": "https://badger.epihub.eu/"
            }
        });
        const token = data.token || data.jwt || data.access_token;
        const { data: me } = await axios.get("https://api.badger.epihub.eu/api/users/me", {
            headers: { authorization: `Bearer ${token}`, accept: "application/json, text/plain, */*", referer: "https://badger.epihub.eu/" }
        });
        res.json({ token, userId: me.id, cardId: me.cardId, email: me.email, promo: me.promo });
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.response?.data || err.message });
    }
});

app.post("/badge/snipe", auth, async (req, res) => {
    const { token, userId, cardId, sessionType } = req.body;
    if (!token || !userId || !cardId || !sessionType) return res.status(400).json({ error: "Champs manquants" });
    const bearer = `Bearer ${token}`;
    const today = new Date().toLocaleDateString("en-CA");
    try {
        const { data: sessions } = await axios.get("https://api.badger.epihub.eu/api/sessions/with-presences", {
            headers: { authorization: bearer }
        });
        const session = sessions.find(s => s.date === today && s.sessionType === sessionType);
        if (!session) return res.json({ found: false, message: `Aucune session "${sessionType}" ouverte aujourd'hui (${today})` });
        const { data: result } = await axios.post("https://api.badger.epihub.eu/api/presences", {
            sessionId: session.id,
            userId: Number(userId),
            cardId,
            is_present: true
        }, { headers: { authorization: bearer, "content-type": "application/json" } });
        res.json({ found: true, session: { id: session.id, date: session.date, type: session.sessionType }, result });
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.response?.data || err.message });
    }
});

app.get("/codeABCZ", (req, res) => {
    const latest = status.codes[0] || null;
    res.json({ latest });
});

ioServer.use((sock, next) => {
    sessionMiddleware(sock.request, sock.request.res || {}, () => {
        sock.request.session?.auth ? next() : next(new Error("Unauthorized"));
    });
});
ioServer.on("connection", (sock) => sock.emit("init", status));

function broadcast(event, data) {
    ioServer.emit(event, data);
}

function loadLastMessageId() {
    try {
        const raw = fs.readFileSync(LAST_MSG_FILE, "utf8");
        const data = JSON.parse(raw);
        return typeof data.id === "string" ? data.id : null;
    } catch (err) {
        return null;
    }
}

function saveLastMessageId(id) {
    try {
        fs.writeFileSync(LAST_MSG_FILE, JSON.stringify({ id }), "utf8");
    } catch (err) {
        console.error("Erreur sauvegarde message Discord :", err.message);
    }
}

function getWebhookParts(webhookUrl) {
    const u = new URL(webhookUrl);
    const parts = u.pathname.split("/").filter(Boolean);
    const webhookId = parts[2];
    const webhookToken = parts[3];
    return { webhookId, webhookToken, baseUrl: `${u.protocol}//${u.host}` };
}

async function sendDiscord(classroom, code) {
    const lastId = loadLastMessageId();
    if (lastId) {
        try {
            const { webhookId, webhookToken, baseUrl } = getWebhookParts(DISCORD_WEBHOOK);
            const delUrl = `${baseUrl}/api/webhooks/${webhookId}/${webhookToken}/messages/${lastId}`;
            await axios.delete(delUrl);
        } catch (err) {
            console.error("Erreur suppression message Discord :", err.message);
        }
    }

    const { data } = await axios.post(`${DISCORD_WEBHOOK}?wait=true`, {
        content: `${code}`
    });
    if (data && data.id) saveLastMessageId(data.id);
}

function connect() {
    const socket = io(SERVER_URL, {
        transports: ["websocket"],
        upgrade: false,
        extraHeaders: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            "Origin": SERVER_URL,
            "Referer": SERVER_URL + "/",
            "Accept-Language": "fr-FR,fr;q=0.9",
            "Accept-Encoding": "gzip, deflate, br"
        }
    });

    let heartbeat;

    socket.on("connect", () => {
        status.connected = true;
        status.lastSeen = new Date().toLocaleString("fr-FR");
        broadcast("status", { connected: true, lastSeen: status.lastSeen });
        console.log(`[${status.lastSeen}] ✅ Connecté`);

        heartbeat = setInterval(() => {
            if (!socket.connected) {
                clearInterval(heartbeat);
                socket.disconnect();
                connect();
            }
        }, 10000);
    });

    socket.on("codeChange", async (data) => {
        const entry = { classroom: data.classroom, code: data.code, time: new Date().toLocaleTimeString() };
        status.codes.unshift(entry);
        if (status.codes.length > 50) status.codes.pop();
        broadcast("code", entry);
        console.log(`🚨 Code : ${data.code} | Salle : ${data.classroom}`);
        const promo = JSON.stringify(data);
        if (!promo.includes("2026")) return;
        try {
            await sendDiscord(data.classroom, data.code);
        } catch (err) {
            console.error("❌ Erreur Discord :", err.message);
        }
    });

    socket.on("disconnect", (reason) => {
        clearInterval(heartbeat);
        status.connected = false;
        broadcast("status", { connected: false });
        console.log(`[${new Date().toLocaleTimeString()}] ❌ Déconnecté : ${reason} — Reconnexion dans 5s...`);
        setTimeout(connect, 5000);
    });

    socket.on("connect_error", (err) => {
        console.error("Erreur de connexion :", err.message);
    });
}

httpServer.listen(3000, () => console.log("🌐 Dashboard : http://localhost:3000"));
connect();
