---
title: "La méthode en quatre phases"
order: 4
phase: [donnees, intention, structuration, presentation]
lead: "Pour passer des données brutes à un message clair, on progresse en quatre phases. C'est la colonne vertébrale de tout le cours : chaque étape suivante en approfondit une."
objectives:
  - "Connaître les **quatre phases** du récit de données et leur ordre."
  - "Savoir **ce que l'on fait concrètement** dans chaque phase."
  - "Associer une action à la bonne phase."
takeaways:
  - "**Données** : on explore, on ne raconte pas encore."
  - "**Intention** : un objectif, une question, un message — avant tout graphique."
  - "**Structuration** : l'ordre de présentation fait partie du message."
  - "**Présentation** : la forme sert le message et le public."
components:
  - type: figure
    src: "/assets/images/figures/processus-recit-4-phases.jpg"
    alt: "Schéma en quatre étapes illustré par le suivi d'un cours d'eau : 1. Données (collecter niveau, débit, pluie), 2. Intention (comprendre si le niveau monte ou baisse), 3. Structuration (contexte, évolution, cause, action), 4. Présentation finale (un graphique simple et un message clé)."
    caption: "Le processus du récit de données, illustré par le suivi d'un cours d'eau."

  - type: heading
    text: "Ce que l'on fait dans chaque phase"

  - type: infotabs
    items:
      - title: "1 · Données"
        content: |
          **Collecter, explorer, vérifier.**

          On rassemble les sources et on les explore pour repérer ce qui est digne d'intérêt : tendances, anomalies, corrélations inattendues — mais aussi **problèmes de qualité** (valeurs manquantes, types incorrects).

          **Concrètement :**
          - rassembler les sources (fichiers, bases SQL, feuilles Google Sheets) ;
          - croiser les sources : relevés + informations sur les stations ;
          - vérifier les types et les valeurs aberrantes ;
          - noter les « trouvailles » : *« la station de Tours a gagné 6,6 °C en un mois »*.

          *À cette étape, vous ne racontez pas encore : vous explorez.* Dans Superset : **connexion, dataset, SQL Lab** (leçon 3).
      - title: "2 · Intention"
        content: |
          **Définir l'objectif, la question et le message.**

          Avant d'organiser votre récit, vous devez savoir où vous allez : un **objectif** principal, une ou deux **questions analytiques** précises, un **message clé** formulé en une phrase.

          **Concrètement :**
          - choisir un objectif : informer, comparer, expliquer, alerter, décider ou prédire ;
          - formuler la question : *« Comment la température maximale a-t-elle évolué ce printemps, et où ? »* ;
          - rédiger le message clé en une phrase ;
          - préciser ce que votre public doit retenir ou faire.

          *À cette étape, vous clarifiez le but avant de construire l'histoire.*
      - title: "3 · Structuration"
        content: |
          **Organiser l'histoire.**

          On décide de l'**ordre de présentation** et on choisit une **structure narrative** pour créer un fil logique du début à la fin.

          **Concrètement :**
          - choisir une structure : pyramide inversée, trois actes, verre à martini ou kabob ;
          - définir l'accroche : quel fait frappant ouvre le récit ?
          - ordonner les preuves (contexte → évolution → cause → action) ;
          - décider de ce qui entre dans le récit et de ce qui reste en annexe.

          *À cette étape, vous organisez les preuves pour rendre le message fluide.*
      - title: "4 · Présentation"
        content: |
          **Produire la forme visuelle et textuelle.**

          On met en forme le récit pour le rendre lisible, mémorable et adapté au public et au support (dashboard, slide, article, rapport).

          **Concrètement :**
          - choisir la visualisation adaptée à chaque message (courbe pour une évolution, barres pour une comparaison…) ;
          - rédiger des **titres qui expriment un message**, pas juste un sujet ;
          - ajouter des annotations pour guider la lecture ;
          - vérifier que le message clé ressort en **10 secondes** ;
          - adapter le niveau de détail au public.

          *À cette étape, vous finalisez la forme pour diffuser votre message.* Dans Superset : **Explore, dashboard, publication**.

  - type: classifier
    title: "À quelle phase appartient chaque action ?"
    instruction: "Projet PREVIZO : classez chaque action dans la phase de la méthode qui lui correspond."
    categories: ["Données", "Intention", "Structuration", "Présentation"]
    items:
      - text: "Vérifier que la colonne `tmax_c` contient bien des nombres exploitables."
        answer: 0
        explanation: "Contrôler la qualité et les types des données fait partie de l'exploration."
      - text: "Écrire : « Les maximales ont fortement augmenté en mai, surtout à Tours »."
        answer: 1
        explanation: "C'est le message clé : il fixe l'intention du récit."
      - text: "Placer l'indicateur clé en haut du dashboard, puis la courbe, puis le détail par station."
        answer: 2
        explanation: "On décide de l'ordre de lecture : c'est la structuration (ici, une pyramide inversée)."
      - text: "Mettre en couleur la seule station Tours et griser les autres."
        answer: 3
        explanation: "Un choix de mise en forme qui sert le message : c'est la présentation."
      - text: "Croiser la feuille *Climat* avec la feuille *stations* pour obtenir l'altitude."
        answer: 0
        explanation: "Relier les sources se fait dans la phase Données."
      - text: "Décider que le dashboard s'adresse aux gestionnaires du réseau et doit les aider à prioriser."
        answer: 1
        explanation: "Définir le public et l'objectif relève de l'intention."
---

Pour créer un bon récit, on progresse en **quatre phases**. Chacune aide à transformer les données en un message compréhensible pour l'audience.

1. **Données** : identifier les jeux de données, relier les sources, explorer les informations disponibles et relever les éléments importants.
2. **Intention** : définir l'objectif du récit, formuler les questions à analyser et choisir le message à transmettre.
3. **Structuration** : organiser l'histoire selon une suite logique, avec une introduction, des étapes et des liens clairs entre les idées.
4. **Présentation** : produire une forme visuelle et textuelle simple, lisible et adaptée au public.

Cette méthode permet de passer d'une simple exploration des données à une communication structurée, utile et facile à comprendre. Les trois étapes suivantes de cette leçon approfondissent l'**intention** (question et message) et la **structuration** (structures narratives) ; la leçon 3 met en œuvre les phases **Données** et **Présentation** dans Superset.
