# Projet de Cybersécurité — Vérification de la Sécurité des Données

> ⚠️ **À des fins pédagogiques uniquement.**

## Description

Ce projet est un exercice de cybersécurité conçu pour analyser et vérifier la sécurité des données dans un environnement contrôlé. Il a pour objectif d'identifier les vulnérabilités potentielles et de sensibiliser aux bonnes pratiques de sécurité informatique.

## Objectifs pédagogiques

- Comprendre les mécanismes d'authentification et leurs failles
- Identifier les risques liés à la gestion des données
- Appliquer les bonnes pratiques de sécurisation des applications web

## Avertissement

Ce projet est strictement réservé à un usage éducatif. Toute utilisation à des fins malveillantes ou non autorisées est illégale et contraire à l'éthique.


## Exemples de requêtes :
 
 fetch("https://api.badger.epihub.eu/api/sessions/date/2026-03-30")
  .then(res => res.json())
  .then(data => {
    console.log("🚨 FUITE DE DONNÉES CONFIRMÉE !");
    console.table(data); // Affiche les sessions sous forme de joli tableau
  });

 Maintenant qu'un attaquant a une liste d'IDs de sessions valides, il peut lancer des scripts automatisés pour tester toutes les autres routes de l'API (ex: /api/sessions/729/students, /api/sessions/729/delete, etc.).

Si ces autres routes sont aussi mal protégées, la fuite de données "moyenne" devient une catastrophe critique (fuite des noms, emails, ou suppression de données).

### Conclusion de cette route :


L'absence d'authentification sur la lecture des sessions permet une fuite d'informations (Information Leakage) qui facilite les attaques par ingénierie sociale et la reconnaissance pré-attaque. Elle expose également la structure organisationnelle de l'école à des tiers non autorisés."


## 🌌 MilkyWay Code Notifier
Ce script Node.js est un utilitaire de monitoring en temps réel pour la plateforme MilkyWay d'Epitech Strasbourg. Il intercepte les changements de codes de présence via WebSockets et les relaie instantanément sur un salon Discord via un Webhook.

🚀 Fonctionnalités
Connexion WebSocket Temps Réel : Utilise socket.io-client pour rester à l'écoute permanente du serveur.

Filtrage Intelligent : Le script ne relaie que les codes contenant "2026", évitant ainsi le spam de données obsolètes.

Relais Discord : Intégration via Webhook pour recevoir les alertes sur mobile/desktop.

Auto-Healing : Système de heartbeat et de reconnexion automatique en cas de coupure réseau ou de timeout serveur.

Mimétisme Navigateur : Headers configurés pour simuler une connexion provenant d'un navigateur Chrome standard.

🛠️ Installation
Prérequis : Assurez-vous d'avoir Node.js installé.

Installation des dépendances :

Bash
npm install socket.io-client axios
Configuration :

Ouvrez le script.

Remplacez DISCORD_WEBHOOK par votre propre URL de webhook si nécessaire.

Lancement :

Bash
node index.js
🧠 Fonctionnement Technique
1. La Connexion (Socket.io)
Le script se connecte au serveur milkyway.strasbourg.epitech.eu. Pour éviter d'être bloqué par d'éventuelles protections, il injecte des extraHeaders (User-Agent, Origin, Referer) pour se faire passer pour un client web légitime.

2. Le Listener codeChange
C'est le cœur du bot. Dès que le serveur émet l'événement codeChange, le script :

Récupère l'objet data (contenant le code et la salle).

Vérifie la présence de la chaîne "2026" pour filtrer les sessions actuelles.

Déclenche la fonction d'envoi Discord.

3. Résilience et Heartbeat
Un setInterval vérifie l'état de la connexion toutes les 10 secondes. Si le socket tombe sans déclencher l'événement de déconnexion standard, le script force une reconnexion propre.

⚠️ Sécurité & Éthique
[!CAUTION]
Données Sensibles : L'URL du Webhook Discord est une clé d'accès. Ne partagez jamais ce script publiquement sans avoir retiré cette URL, sous peine de voir votre salon Discord spammé par des tiers.

[!IMPORTANT]
Usage Pédagogique : Ce script est conçu dans un but d'étude des protocoles WebSockets et de l'automatisation de flux de données au sein de l'écosystème Epitech.

📦 Dépendances
socket.io-client : Pour la communication bidirectionnelle.

axios : Pour les requêtes HTTP POST vers Discord.