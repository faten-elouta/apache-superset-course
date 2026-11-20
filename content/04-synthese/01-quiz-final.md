---
title: "Quiz final"
order: 1
lead: "Douze questions pour vérifier vos acquis sur l'ensemble du parcours : le cadre du récit de données, Superset, et les bonnes pratiques de visualisation."
objectives:
  - "Évaluer votre maîtrise des **quatre phases** de la méthode."
  - "Vérifier les étapes clés dans **Superset**."
  - "Identifier les points à revoir grâce aux explications."
takeaways:
  - "Moins de 8 / 11 (70 %) ? Revenez aux étapes indiquées dans les explications avant de passer au résumé. Votre meilleur score est conservé dans « Ma progression »."
components:
  - type: quiz
    title: "Évaluation finale"
    items:
      - question: "Quelles sont les quatre phases du processus d'élaboration d'un récit de données ?"
        choices:
          - "Présenter → Explorer → Structurer → Répondre aux questions, dans cet ordre strict"
          - "Explorer, Répondre aux questions, Structurer les réponses, Présenter — avec des allers-retours possibles"
          - "Collecter, Nettoyer, Modéliser, Déployer"
        correct: [1]
        explanation: "Le processus n'est pas linéaire et peut démarrer par un jeu de données ou par une question. *À revoir : « Le processus en quatre phases ».*"
      - question: "Dans le modèle en quatre couches, quel concept est la **clé de voûte** ?"
        choices: ["Le collecteur", "Le message", "Le dashboard", "L'acte"]
        correct: [1]
        explanation: "Le message s'appuie sur des constats, répond à une question, est raconté par un épisode et rendu par un composant. *À revoir : « Le modèle en quatre couches ».*"
      - question: "« Tours passe de 16,8 °C à 23,4 °C entre avril et mai » est…"
        choices: ["un constat", "un message", "un épisode", "un personnage"]
        correct: [0]
        explanation: "C'est un résultat de l'analyse. Le message en serait l'interprétation pour un public : *Tours connaît la plus forte hausse du réseau, son suivi doit être renforcé.* *À revoir : « Répondre aux questions ».*"
      - question: "Laquelle de ces questions est une **question analytique précise** ?"
        choices:
          - "« Comment va le climat ? »"
          - "« Quelles stations ont dépassé 30 °C de maximale plus de trois jours en mai 2026 ? »"
          - "« Les données sont-elles intéressantes ? »"
        correct: [1]
        explanation: "Mesure, seuil, période et personnages sont définis. *À revoir : « Répondre aux questions ».*"
      - question: "Quelle structure narrative place l'essentiel en premier, puis les détails par ordre d'importance ?"
        choices: ["Trois actes", "Kabob", "Pyramide inversée", "Verre à martini"]
        correct: [2]
        explanation: "*À revoir : « Structurer les réponses ».*"
      - question: "Quel est l'ordre correct dans Superset ?"
        choices:
          - "Chart → Dataset → Base de données → Dashboard"
          - "Base de données → Dataset → Chart → Dashboard"
          - "Dataset → Dashboard → Chart → Base de données"
        correct: [1]
        explanation: "*À revoir : « Les composants d'Apache Superset ».*"
      - question: "La colonne `tmax_c` est de type TEXT. Que faut-il faire pour en calculer la moyenne ?"
        choices:
          - "Rien, `AVG(tmax_c)` fonctionne directement."
          - "La convertir, par exemple avec une colonne calculée `CAST(tmax_c AS REAL)`."
          - "Supprimer la colonne du dataset."
        correct: [1]
        explanation: "*À revoir : « Connecter les données et créer un dataset ».*"
      - question: "Quelle requête renvoie la température maximale moyenne **de chaque station** ?"
        choices:
          - "`SELECT AVG(CAST(tmax_c AS REAL)) FROM Climat;`"
          - "`SELECT nom_station, AVG(CAST(tmax_c AS REAL)) FROM Climat GROUP BY nom_station;`"
          - "`SELECT * FROM Climat ORDER BY tmax_c;`"
        correct: [1]
        explanation: "Sans `GROUP BY`, on obtient une seule moyenne globale. *À revoir : « Explorer le dataset dans SQL Lab ».*"
      - question: "Quel graphique choisir pour montrer l'**évolution** de la température de janvier à mai ?"
        choices: ["Pie Chart", "Line Chart", "Word Cloud", "Pivot Table"]
        correct: [1]
        explanation: "*À revoir : « Choisir la bonne visualisation ».*"
      - question: "Quelles pratiques améliorent un graphique ? (plusieurs réponses)"
        choices:
          - "Un titre qui énonce le message"
          - "Griser le contexte et colorer l'essentiel"
          - "Une couleur différente pour chaque catégorie, par principe"
          - "Démarrer l'axe d'un diagramme en barres à zéro"
        correct: [0, 1, 3]
        explanation: "Multiplier les couleurs disperse l'attention. *À revoir : « Pourquoi une belle visualisation peut échouer ».*"
      - question: "Comment rendre un dashboard visible pour les autres utilisateurs ?"
        choices:
          - "Le passer du statut Draft à Published"
          - "Cliquer sur Run dans SQL Lab"
          - "L'exporter en CSV"
        correct: [0]
        explanation: "*À revoir : « Du message au dashboard ».*"
      - question: "Décrivez en quelques lignes les étapes pour connecter une feuille Google Sheets dans Superset et en faire un dataset."
        type: text
        model_answer: |
          *Settings → Database Connections → + Database*, choisir **Google Sheets**, nommer la connexion, renseigner pour chaque feuille un nom et son URL (**+ Add sheet**), puis **Connect / Finish**. Ensuite *Datasets → + Dataset* : choisir la base, le schéma **main** et la table, vérifier les types de colonnes, et cliquer sur **Create and explore dataset**. Enfin, corriger les types si nécessaire (colonnes calculées avec `CAST`).
---

Prenez le temps de répondre sans revenir aux pages précédentes, puis lisez les explications : chacune indique l'étape à revoir en cas d'erreur. La dernière question est ouverte : rédigez votre réponse, puis comparez-la avec la réponse modèle.
