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