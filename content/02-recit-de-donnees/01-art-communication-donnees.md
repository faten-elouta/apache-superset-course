---
title: "L'art de communication des données"
lesson: "02-recit-de-donnees"
order: 1
components:
  - type: carousel
    items:
      - title: "Pourquoi les ventes augmentent-elles ?"
        content: " "
      - title: "Depuis quand ?"
        content: " "
      - title: "Quelle action faut-il prendre ?"
        content: " "
  - type: video
    placeholder: true
    label: "Data story vs. dataviz (3m21)"
  - type: video
    youtube_id: "xacPHFq9AOc"
    label: "Récit de données : donner du sens"
  - type: quiz
    items:
      - question: "**Quel est l'objectif principal d'un dashboard efficace ?**"
        choices:
          - "Rendre les graphiques esthétiques"
          - "Ajouter des animations aux données"
          - "Afficher des informations importantes pour atteindre des objectifs"
          - "Remplacer les rapports écrits"
        correct: [2]
      - question: "La data visualisation sert uniquement à rendre les graphiques beaux."
        hint: "Elle sert surtout à rendre les données compréhensibles."
        choices: ["Vrai", "Faux"]
        correct: [1]
      - question: "Une data story doit aider à passer de l'observation à l'action."
        hint: "C'est ce qui la distingue d'une simple visualisation."
        choices: ["Vrai", "Faux"]
        correct: [0]
---

## Comprendre la différence entre data visualisation et récit de données

Avant de créer un dashboard dans Apache Superset, il est important de comprendre une différence essentielle : **visualiser des données** et **raconter une histoire avec les données** ne sont pas la même chose.

Une **data visualisation** transforme des données en formes visuelles : graphiques, cartes, tableaux, courbes, diagrammes ou indicateurs. Son objectif est de rendre les tendances, les comparaisons, les valeurs atypiques et les relations plus faciles à voir. IBM et Tableau définissent la data visualisation comme une représentation graphique de données permettant de mieux comprendre des informations complexes.

Un **récit de données**, ou **data storytelling**, va plus loin. Il utilise les données, les visualisations, le contexte et une narration pour guider un public vers un message clair. Autrement dit, il ne montre pas seulement un graphique : il explique **ce qu'il faut comprendre**, **pourquoi c'est important** et **quelle décision peut être prise**. Microsoft décrit le data storytelling comme une narration construite à partir de données et d'analyses pour informer ou influencer un public précis. Les travaux de Segel et Heer sur la visualisation narrative montrent aussi que raconter les données consiste à organiser les graphiques, les annotations, le texte et l'interaction pour guider le lecteur dans la compréhension.

## 1. Data visualisation ou récit de données ?

**Message simple :** la data visualisation répond surtout à la question : « Que voit-on dans les données ? »
