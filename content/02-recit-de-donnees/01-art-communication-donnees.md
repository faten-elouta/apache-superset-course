---
title: "Data visualisation ou récit de données ?"
order: 1
lead: "Avant d'ouvrir Superset, une distinction essentielle : montrer des données et raconter une histoire avec elles, ce n'est pas la même chose."
objectives:
  - "Distinguer une **data visualisation** d'un **récit de données**."
  - "Connaître les trois questions auxquelles un récit doit répondre."
  - "Reconnaître, sur des exemples, ce qui relève de l'une ou de l'autre."
takeaways:
  - "La data visualisation répond à : **« Que voit-on ? »**"
  - "Le récit de données répond en plus à : **« Et alors ? »** et **« Que faire maintenant ? »**"
  - "Un dashboard efficace utilise des visualisations **au service d'un message**."
components:
  - type: summary_cards
    title: "Les trois questions d'un récit de données"
    items:
      - title: "1. Quoi ?"
        content: |
          Que montrent les données ?

          *Ex. : la température maximale moyenne a atteint 23,4 °C en mai à Tours.*
      - title: "2. Et alors ?"
        content: |
          Pourquoi est-ce important ?

          *Ex. : c'est +6,6 °C en un mois, la plus forte hausse du réseau.*
      - title: "3. Que faire ?"
        content: |
          Quelle décision ou action en découle ?

          *Ex. : renforcer le suivi des stations les plus exposées à la chaleur.*

  - type: heading
    text: "Comparer les deux approches"

  - type: markdown
    content: |
      | | Data visualisation | Récit de données |
      |---|---|---|
      | **Question principale** | Que voit-on dans les données ? | Que faut-il en comprendre, et que faire ? |
      | **Objectif** | Rendre visibles tendances, écarts, valeurs atypiques | Guider un public précis vers un message clair |
      | **Composants** | Graphiques, cartes, tableaux | Visualisations **+** contexte **+** texte **+** ordre de lecture |
      | **Titre type** | « Températures maximales par station » | « Tours : la plus forte hausse du réseau en mai » |
      | **Lecteur** | Explore librement | Est accompagné pas à pas |

  - type: video
    placeholder: true
    label: "Data story vs. dataviz (3 min 21) — vidéo d'origine non récupérée depuis l'export Coursebox."

  - type: classifier
    title: "Visualisation ou récit ?"
    instruction: "Pour chaque exemple, indiquez s'il s'agit d'une simple data visualisation ou d'un récit de données."
    categories: ["Data visualisation", "Récit de données"]
    items:
      - text: "Un graphique en courbes intitulé « Précipitations 2026 », sans commentaire."
        answer: 0
        explanation: "Il montre des données mais ne dit pas ce qu'il faut en retenir."
      - text: "Un dashboard qui s'ouvre sur « Mai 2026 : déficit de pluie de 30 % » puis montre les stations concernées et les mesures de vigilance."
        answer: 1
        explanation: "Message clé en tête, preuves ensuite, action à la fin : c'est un récit."
      - text: "Une carte des stations colorées selon leur altitude, avec légende."
        answer: 0
        explanation: "Une représentation utile, mais sans question ni message."
      - text: "La carte du BRGM des nappes au 15 mai, avec code couleur, tendances et texte expliquant les zones préoccupantes."
        answer: 1
        explanation: "Elle s'adresse à un public précis et l'aide à interpréter la situation."
      - text: "Un tableau exporté de toutes les mesures du mois."
        answer: 0
        explanation: "Ce sont des données brutes mises en forme, pas une histoire."

  - type: quiz
    items:
      - question: "Quel est l'objectif principal d'un dashboard efficace ?"
        choices:
          - "Rendre les graphiques esthétiques"
          - "Ajouter des animations aux données"
          - "Mettre en avant les informations importantes pour atteindre un objectif"
          - "Remplacer les rapports écrits"
        correct: [2]
        explanation: "Un dashboard est un outil d'aide à la décision : l'esthétique et l'interactivité sont au service de ce but, pas l'inverse."
      - question: "La data visualisation sert uniquement à rendre les graphiques beaux."
        hint: "Pensez à ce qu'apporte un graphique par rapport à un tableau de chiffres."
        choices: ["Vrai", "Faux"]
        correct: [1]
        explanation: "Elle sert d'abord à rendre les données **compréhensibles** : repérer une tendance, un écart, une valeur atypique."
      - question: "Une data story doit aider à passer de l'observation à l'action."
        hint: "C'est la troisième des trois questions d'un récit."
        choices: ["Vrai", "Faux"]
        correct: [0]
        explanation: "C'est ce qui la distingue d'une simple visualisation : elle répond aussi à « Que faire ? »."
---

Une **data visualisation** transforme des données en formes visuelles : graphiques, cartes, tableaux, courbes, diagrammes ou indicateurs. Son objectif est de rendre les tendances, les comparaisons, les valeurs atypiques et les relations plus faciles à voir. IBM et Tableau la définissent comme une représentation graphique de données permettant de mieux comprendre des informations complexes.

Un **récit de données**, ou **data storytelling**, va plus loin. Il combine les données, les visualisations, le contexte et une narration pour guider un public vers un message clair. Il ne montre pas seulement un graphique : il explique **ce qu'il faut comprendre**, **pourquoi c'est important** et **quelle décision peut être prise**.

Microsoft décrit le data storytelling comme une narration construite à partir de données et d'analyses pour informer ou influencer un public précis. Les travaux de Segel et Heer sur la visualisation narrative montrent aussi que raconter les données consiste à organiser graphiques, annotations, texte et interaction pour **guider le lecteur** dans sa compréhension.
