const { io } = require("socket.io-client");
const axios = require("axios");
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
app.get("/codeABCZ", auth, (req, res) => {
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

async function sendDiscord(classroom, code) {
    await axios.post(DISCORD_WEBHOOK, {
        content: `🚨 **NOUVEAU CODE DÉTECTÉ**\n📍 Salle : **${classroom}**\n🔑 Code  : **${code}**\n🕐 ${new Date().toLocaleTimeString()}`
    });
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
        status.lastSeen = new Date().toLocaleTimeString();
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
