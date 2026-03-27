const { io } = require("socket.io-client");
const axios = require("axios");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1487064311330377829/EASOkoB2C6mw7BGHptwFNOwyF6z8uqcjAihyZv3ZM-haKqxtLWzQKK5elUmF3BQxl3wO";
const SERVER_URL = "https://milkyway.strasbourg.epitech.eu";

const app = express();
const httpServer = http.createServer(app);
const ioServer = new Server(httpServer);

let status = { connected: false, lastSeen: null, codes: [] };

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

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
