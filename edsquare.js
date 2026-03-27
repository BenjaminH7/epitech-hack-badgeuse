const { io } = require("socket.io-client");
const axios = require("axios");

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1487064311330377829/EASOkoB2C6mw7BGHptwFNOwyF6z8uqcjAihyZv3ZM-haKqxtLWzQKK5elUmF3BQxl3wO";
const SERVER_URL = "https://milkyway.strasbourg.epitech.eu";

async function sendDiscord(classroom, code) {
    await axios.post(DISCORD_WEBHOOK, {
        content: `🚨 **NOUVEAU CODE DÉTECTÉ**\n📍 Salle : **${classroom}**\n🔑 Code  : **${code}**\n🕐 ${new Date().toLocaleTimeString()}`
    });
}

function connect() {
    const socket = io(SERVER_URL, {
        extraHeaders: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Origin": SERVER_URL,
            "Referer": SERVER_URL + "/"
        }
    });

    let heartbeat;

    socket.on("connect", () => {
        console.log(`[${new Date().toLocaleTimeString()}] ✅ Connecté - En attente des codes...`);
        heartbeat = setInterval(() => {
            if (!socket.connected) {
                clearInterval(heartbeat);
                socket.disconnect();
                connect();
            }
        }, 10000);
    });

    socket.on("codeChange", async (data) => {
        console.log(`🚨 Code détecté : ${data.code} | Salle : ${data.classroom}`);
        try {
            await sendDiscord(data.classroom, data.code);
            console.log("✅ Message envoyé sur Discord");
        } catch (err) {
            console.error("❌ Erreur Discord :", err.message);
        }
    });

    socket.on("disconnect", (reason) => {
        clearInterval(heartbeat);
        console.log(`[${new Date().toLocaleTimeString()}] ❌ Déconnecté : ${reason} — Reconnexion dans 5s...`);
        setTimeout(connect, 5000);
    });

    socket.on("connect_error", (err) => {
        console.error("Erreur de connexion :", err.message);
    });
}

console.log("🚀 Démarrage du script...");
connect();
