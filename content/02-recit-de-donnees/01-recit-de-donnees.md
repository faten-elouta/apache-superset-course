---
title: "Qu'est-ce qu'un récit de données ?"
order: 1
lead: "Des récits traditionnels aux récits de données : ce qui change quand l'histoire que l'on raconte est tirée de l'analyse de données."
objectives:
  - "Connaître la **définition** d'un récit de données proposée dans la thèse de référence du cours."
  - "Distinguer l'**histoire** (ce qui est raconté) du **discours** (comment c'est raconté)."
  - "Distinguer une simple **data visualisation** d'un **récit de données**, et en reconnaître les principales formes."
takeaways:
  - "Un récit de données est une **composition structurée de messages** qui transmettent des **constats** tirés des données, généralement par des **moyens visuels**, à une **audience visée**."
  - "Comme tout récit, il a une **histoire** (le contenu) et un **discours** (la mise en forme)."
  - "Le **récit de données** est le résultat ; la **narration de données** est l'activité qui le produit."
components:
  - type: callout
    kind: method
    title: "Définition de référence"
    content: |
      **Un récit de données est une composition structurée de messages qui (a) transmettent des constats issus des données et (b) sont généralement communiqués par des moyens visuels afin de faciliter leur réception par une audience visée.**

      — F. El Outa, *A framework for crafting data narratives*, thèse de doctorat, Université de Tours, 2023, § 3.2.2.

  - type: heading
    text: "Des récits aux récits de données"
    intro: |
      Les théoriciens du récit s'accordent sur au moins deux niveaux dans toute narration : des événements se produisent (**ce qui est raconté**), et ils sont transmis à un public d'une certaine manière (**comment c'est raconté**). Dans la terminologie structuraliste, la réponse au « quoi » est l'**histoire**, la réponse au « comment » est le **discours**.

      Seymour Chatman (1978) précise que l'histoire comme le discours ont chacun une **forme** et une **substance**, soit quatre niveaux. Ces modèles ne prévoient cependant aucune place pour les **données** : c'est ce que le cadre présenté dans ce cours vient ajouter, en décrivant comment le contenu de l'histoire est **dérivé de l'analyse des données**.

  - type: markdown
    content: |
      | | Récit traditionnel | Récit de données |
      |---|---|---|
      | **Matière première** | Événements, personnages, lieux | **Constats** tirés de l'exploration de données |
      | **Ce qu'on transmet** | Une histoire, une expérience | Des **messages** appuyés par des faits vérifiables |
      | **Moyens** | Langage, image, son | Visualisations, texte, annotations, interaction |
      | **Force** | L'émotion, l'imagination | L'émotion **et** la preuve : le cœur et la raison |

  - type: heading
    text: "Data visualisation ou récit de données ?"
    intro: |
      Une **data visualisation** transforme des données en formes visuelles pour rendre visibles tendances, écarts et valeurs atypiques : elle répond surtout à « **que voit-on ?** ». Un **récit de données** sélectionne les constats intéressants, les traduit en **messages** destinés à un public, les **ordonne** et les **met en forme** visuellement : il répond aussi à « **qu'est-ce que cela veut dire, et pour qui ?** ».

      Pour Segel et Heer (2010), la différence tient aussi au potentiel **interactif** du récit de données et à l'enchaînement **causal** des éléments présentés.

  - type: classifier
    title: "Visualisation ou récit ?"
    instruction: "Pour chaque exemple, indiquez s'il s'agit d'une simple data visualisation ou d'un récit de données."
    categories: ["Data visualisation", "Récit de données"]
    items:
      - text: "Un graphique en courbes intitulé « Précipitations 2026 », sans commentaire."
        answer: 0
        explanation: "Il montre des données, mais ne formule aucun message pour un public."
      - text: "Un article qui compare la mortalité de mars-avril 2020 en Alsace aux années précédentes, conclut au rôle du COVID-19 et cite un expert."
        answer: 1
        explanation: "Des constats, des messages validés, un ordre de lecture, un public : c'est un récit de données (Rue89 Strasbourg, analysé dans la thèse)."
      - text: "Une carte des stations colorées selon leur altitude, avec légende."
        answer: 0
        explanation: "Une représentation utile, sans question ni message."
      - text: "La carte du BRGM des nappes au 15 mai, avec code couleur, tendances et texte expliquant les zones préoccupantes."
        answer: 1
        explanation: "Elle s'adresse au grand public et l'aide à interpréter la situation."
      - text: "Un tableau exporté de toutes les mesures du mois."
        answer: 0
        explanation: "Ce sont des données mises en forme, pas une composition de messages."

  - type: heading
    text: "Les formes d'un récit visuel"
    intro: "Un récit de données peut prendre de nombreuses formes. La littérature, synthétisée dans la thèse (§ 2.2.4), en distingue sept, selon leur degré narratif, leur complexité et leur capacité d'explication."

  - type: flipcards
    items:
      - front: "Dashboard"
        back: "Plusieurs visualisations réunies dans une interface : **la forme travaillée dans Superset**."
      - front: "Graphique annoté"
        back: "Un seul graphique enrichi de titres, flèches et commentaires."
      - front: "Infographie"
        back: "Composition graphique statique mêlant chiffres, pictogrammes et texte."
      - front: "Scrollytelling"
        back: "Le récit se déroule au défilement de la page."
      - front: "Bande dessinée de données"
        back: "Des cases successives qui racontent les données."
      - front: "Frise / storyline"
        back: "Les messages s'ordonnent le long du temps."
      - front: "Vidéo de données"
        back: "Un récit animé et commenté (ex. : Hans Rosling)."

  - type: video
    placeholder: true
    label: "Data story vs. dataviz (3 min 21) — vidéo d'origine non récupérée depuis l'export Coursebox."

  - type: quiz
    items:
      - question: "Selon la définition de référence, un récit de données est avant tout…"
        choices:
          - "un ensemble de graphiques esthétiques"
          - "une composition structurée de messages qui transmettent des constats issus des données"
          - "un tableau de bord interactif"
          - "un rapport écrit sans visualisation"
        correct: [1]
        explanation: "Les visualisations sont le moyen habituel de transmission, pas l'essentiel : le cœur du récit, ce sont les **messages**."
      - question: "Dans un récit, à quoi correspond le **discours** ?"
        choices:
          - "Au contenu : ce qui est raconté"
          - "À la manière dont le contenu est structuré et transmis au public"
        correct: [1]
        explanation: "L'histoire répond au « quoi », le discours au « comment » (Chatman)."
      - question: "« Récit de données » et « narration de données » désignent exactement la même chose."
        choices: ["Vrai", "Faux"]
        correct: [1]
        explanation: "Le **récit** est le résultat ; la **narration** est le processus qui le produit. Les deux termes sont toutefois souvent employés l'un pour l'autre."
---

Les récits sont depuis toujours un outil de communication puissant : ils organisent les connaissances, font ressentir, rapprochent les points de vue. Quand un récit s'appuie sur des **données**, il gagne en crédibilité : les faits apportent une base de preuve et créent un mélange d'émotion et de logique qui parle à la fois au cœur et à la raison.

Dans un monde saturé d'informations, savoir **communiquer les résultats d'une analyse** devient essentiel. Le récit de données (*data narrative*, *data storytelling*) fait le pont entre l'analyse de données et la narration : il est utilisé par les journalistes, les scientifiques, les équipes décisionnelles ou encore les acteurs de santé publique pour transmettre des messages à un public précis, y compris non technique.

Cette leçon s'appuie sur la thèse de doctorat de **Faten El Outa**, *A framework for crafting data narratives* (Université de Tours, 2023), qui propose un **cadre** pour élaborer des récits de données : un **modèle conceptuel** et un **processus**.
