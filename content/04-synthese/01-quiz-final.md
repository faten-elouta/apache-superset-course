---
title: "Quiz final"
order: 1
lead: "Dix questions pour vérifier vos acquis sur l'ensemble du parcours : la méthode, Superset, et les bonnes pratiques de visualisation."
objectives:
  - "Évaluer votre maîtrise des **quatre phases** de la méthode."
  - "Vérifier les étapes clés dans **Superset**."
  - "Identifier les points à revoir grâce aux explications."
takeaways:
  - "Moins de 7 / 9 ? Revenez aux étapes indiquées dans les explications avant de passer au résumé."
components:
  - type: quiz
    title: "Évaluation finale"
    items:
      - question: "Dans quel ordre se déroulent les quatre phases du récit de données ?"
        choices:
          - "Présentation → Données → Intention → Structuration"
          - "Données → Intention → Structuration → Présentation"
          - "Intention → Présentation → Données → Structuration"
        correct: [1]
        explanation: "On explore d'abord les données, on fixe l'intention, on structure, puis on met en forme. *À revoir : « La méthode en quatre phases ».*"
      - question: "Laquelle de ces questions est une **question analytique précise** ?"
        choices:
          - "« Comment va le climat ? »"
          - "« Quelles stations ont dépassé 30 °C de maximale plus de trois jours en mai 2026 ? »"
          - "« Les données sont-elles intéressantes ? »"
        correct: [1]
        explanation: "Indicateur, seuil, période et périmètre sont définis. *À revoir : « Formuler la question et le message clé ».*"
      - question: "Quelle structure narrative place la conclusion en premier, puis les preuves, puis le détail ?"
        choices: ["Trois actes", "Kabob", "Pyramide inversée", "Verre à martini"]
        correct: [2]
        explanation: "*À revoir : « Structurer le récit ».*"
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
