---
title: "Le modèle en quatre couches"
order: 2
phase: [donnees, intention, structuration, presentation]
lead: "Des données brutes jusqu'à ce que voit le lecteur, les faits traversent quatre couches. Les connaître, c'est savoir quoi préparer pour construire un récit — et pouvoir analyser n'importe quel récit existant."
objectives:
  - "Connaître les **quatre couches** du modèle et leur lien avec la théorie du récit."
  - "Définir les **concepts** de chaque couche : collecteur, constat, objectif, question, message, personnage, mesure, intrigue, acte, épisode, dashboard…"
  - "Comprendre pourquoi le **message** est la clé de voûte du modèle."
takeaways:
  - "**Factuelle** : explorer les données avec des collecteurs pour obtenir des constats (objectif)."
  - "**Intentionnelle** : un objectif, des questions, et des messages qui y répondent (subjectif)."
  - "**Structurelle** : une intrigue faite d'actes et d'épisodes ; **un épisode raconte un message**."
  - "**Présentationnelle** : un récit visuel ; **un dashboard rend un acte**, **un composant rend un épisode**."
components:
  - type: heading
    text: "Du récit au récit de données"
    intro: |
      Le modèle reprend les quatre niveaux de Chatman (forme et substance de l'histoire et du discours) et les traduit pour les données. Les deux premières couches constituent l'**histoire**, les deux dernières le **discours**.

  - type: markdown
    content: |
      | Niveau chez Chatman | Couche du modèle | Ce qu'elle modélise | Concept clé |
      |---|---|---|---|
      | Forme du contenu (histoire) | **Factuelle** | L'exploration des données | **Constat** |
      | Substance du contenu (histoire) | **Intentionnelle** | L'intention du narrateur | **Message** |
      | Forme de l'expression (discours) | **Structurelle** | L'organisation du récit | **Épisode** |
      | Substance de l'expression (discours) | **Présentationnelle** | Le rendu visuel | **Composant de dashboard** |

  - type: diagram
    src: "/assets/images/structures/modele-quatre-couches.svg"
    caption: "Les quatre couches et leurs concepts (le concept clé est encadré), illustrés par le récit de Rue89 Strasbourg. Cliquez pour parcourir les couches une à une, des données jusqu'au lecteur."
    button: "▶ Parcourir les couches"

  - type: infotabs
    title: "Les concepts de chaque couche"
    items:
      - title: "1 · Factuelle"
        content: |
          *Les récits de données ont besoin de données.* Cette couche modélise la recherche, l'analyse et l'obtention de résultats à partir des sources. Elle est **objective**.

          - **Exploration** : l'ensemble des actions menées pour analyser les données et en tirer des enseignements. Elle garde la trace des collecteurs essayés.
          - **Collecteur** : la requête, l'algorithme ou l'outil qui récupère et manipule les données — par exemple **une requête SQL**. Un collecteur peut aussi filtrer, regrouper, calculer des corrélations, détecter des valeurs aberrantes.
          - **Constat** (*finding*) : parmi les faits obtenus, ceux qui sont **frappants, surprenants ou pertinents** et méritent d'être racontés. C'est le concept clé de la couche.
      - title: "2 · Intentionnelle"
        content: |
          Cette couche modélise la **substance** de l'histoire à partir de l'objectif de l'auteur. Elle est **subjective** : c'est le travail éditorial qui transforme des constats en messages.

          - **Objectif d'analyse** : le thème global que le récit veut traiter, l'information à transmettre au lecteur.
          - **Question analytique** : un aspect particulier de l'objectif ; un objectif pose une ou plusieurs questions.
          - **Message** : à la fois (a) une **réponse partielle** à une question et (b) la **traduction** d'un ou plusieurs constats en information destinée au public. C'est le concept clé.
          - **Personnage** : l'aspect **qualitatif** d'un message — l'entité ou le concept mis en avant (une station, une région, une population).
          - **Mesure** : l'aspect **quantitatif** — ce qui se mesure ou se compte (une température, un nombre de décès, un taux).
      - title: "3 · Structurelle"
        content: |
          Cette couche concerne la **forme du discours** : les messages doivent être transmis au public de façon organisée.

          - **Intrigue** (*plot*) : l'agencement des messages pour qu'ils soient facilement compris par le public. Une intrigue répond à un objectif.
          - **Acte** : une partie majeure de l'intrigue, qui transmet une information importante. Une intrigue compte un ou plusieurs actes.
          - **Épisode** : le fragment le plus fin du récit ; **il raconte un message**, avec les annotations, descriptions et explications qui le rendent interprétable. C'est le concept clé.
      - title: "4 · Présentationnelle"
        content: |
          Cette couche concerne la **substance du discours** : comment le récit structuré est montré au public.

          - **Récit visuel** : l'intrigue rendue par des moyens visuels (diaporama, notebook, article, page web, dashboard…).
          - **Dashboard** : une interface qui présente l'information de façon condensée. **Un dashboard rend un acte.**
          - **Composant de dashboard** : graphique, carte, tableau, texte… **Un composant rend un épisode.** C'est le concept clé.

          Le terme *dashboard* est pris au sens large : un tableau de bord BI, une infographie, une section de notebook ou de page web.

  - type: callout
    kind: info
    title: "Le message, clé de voûte du modèle"
    content: |
      Un message est **ancré dans les faits analysés** (il transmet des constats), il **répond à une question** (et peut en soulever de nouvelles), il est **raconté par un épisode** et **rendu par un composant de dashboard**. Changer l'ordre des épisodes change l'intrigue : **un même ensemble de messages peut donner plusieurs récits**.

  - type: heading
    text: "Constat ou message ?"
    intro: |
      Un **constat** est un résultat significatif de l'analyse. Un **message** est l'**interprétation** de ce constat, formulée pour répondre à une question et destinée à un public. Deux exemples tirés de la thèse :

      - **Constat :** en comparant les infections quotidiennes en France à la moyenne européenne, on trouve des valeurs similaires. → **Message :** la mesure *infections quotidiennes* du personnage *France* est « similaire » à celle du personnage *Europe*.
      - **Constat :** la corrélation entre l'authenticité des informations et le média qui les publie n'est pas significative. → **Message :** un média ne peut pas, à lui seul, déterminer l'existence de fausses informations.

  - type: heading
    text: "Exemple guidé : la mortalité en Alsace au printemps 2020"
    intro: |
      La thèse analyse (« rétro-ingénierie ») un récit publié par **Rue89 Strasbourg**, à partir de l'article et du notebook Python du journaliste. Voici ce que donne chaque couche.

  - type: accordion
    items:
      - title: "Couche factuelle — les données et les constats"
        content: |
          - **Données** : les fichiers des personnes décédées publiés sur *data.gouv.fr*.
          - **Collecteurs** : plusieurs scripts Python ; le journaliste essaie aussi plusieurs visualisations pour comprendre les données.
          - **Constat** : *entre 2010 et 2019, on comptait en moyenne 1 100 décès en mars-avril dans le Haut-Rhin ; en 2020, on en compte 2 347 sur la même période.*
      - title: "Couche intentionnelle — objectif, question, message"
        content: |
          - **Objectif** : *analyser les chiffres de mortalité dans les départements alsaciens* (formulé dès le début du notebook).
          - **Question** : *comparer la mortalité 2020 à celle des années précédentes entre le 1er mars et le 24 avril.*
          - **Message** : *dans le Haut-Rhin, l'écart du nombre de décès est sans doute largement lié au COVID-19.*
          - **Validation** : le message est confirmé par un expert, le doyen de la faculté de médecine de Strasbourg.
          - **Personnages** : *Haut-Rhin*, *COVID-19*. **Mesure** : *nombre de décès*.
      - title: "Couche structurelle — l'intrigue"
        content: |
          Destiné au **grand public**, le récit est organisé en **six actes**, chacun composé d'un ou plusieurs **épisodes**. Un épisode raconte que le COVID-19 explique en grande partie la hausse de la mortalité en mars-avril 2020, avec la validation et l'explication du doyen.
      - title: "Couche présentationnelle — le rendu"
        content: |
          Un **article web** dont chaque section est un **dashboard** ; chaque section contient des **composants** — du texte, souvent accompagné d'une visualisation. Pour la hausse de mortalité, un **graphique en courbes interactif** montre le nombre de décès par jour et sa moyenne mobile, pour 2020 et les années 2010 à 2019.

  - type: classifier
    title: "À quelle couche appartient chaque concept ?"
    instruction: "Projet PREVIZO : rattachez chaque élément à sa couche du modèle."
    categories: ["Factuelle", "Intentionnelle", "Structurelle", "Présentationnelle"]
    items:
      - text: "`SELECT nom_station, AVG(CAST(tmax_c AS REAL)) FROM Climat GROUP BY nom_station`"
        answer: 0
        explanation: "Une requête SQL est un **collecteur**."
      - text: "« Tours a la température maximale moyenne la plus élevée du réseau en mai : 23,4 °C. »"
        answer: 0
        explanation: "Un résultat significatif de l'analyse : c'est un **constat**."
      - text: "« Le suivi de la station de Tours doit être renforcé : elle connaît la plus forte hausse du réseau. »"
        answer: 1
        explanation: "L'interprétation du constat, destinée à un public, qui répond à une question : c'est un **message**."
      - text: "*Tours* et *réseau PREVIZO*"
        answer: 1
        explanation: "Les entités mises en avant par le message : ce sont des **personnages**."
      - text: "La partie du récit consacrée à « l'évolution des températures depuis janvier »"
        answer: 2
        explanation: "Une partie majeure de l'intrigue : c'est un **acte**."
      - text: "Le graphique en courbes de Superset qui montre l'évolution de Tours"
        answer: 3
        explanation: "Il rend un épisode : c'est un **composant de dashboard**."

  - type: quiz
    items:
      - question: "Quel est le concept clé de la couche **intentionnelle** ?"
        choices: ["Le constat", "Le message", "L'épisode", "Le collecteur"]
        correct: [1]
        explanation: "Le message est aussi la clé de voûte de tout le modèle : il relie les constats, les questions, les épisodes et les composants."
      - question: "Dans le modèle, que rend un **dashboard** ?"
        choices: ["Un message", "Un épisode", "Un acte", "Une question"]
        correct: [2]
        explanation: "Un dashboard rend un acte ; chacun de ses composants rend un épisode."
      - question: "Pourquoi la couche factuelle est-elle dite « objective » et la couche intentionnelle « subjective » ?"
        choices:
          - "Parce que les données sont toujours exactes."
          - "Parce que l'une décrit l'exploration des données, l'autre le travail éditorial qui transforme les constats en messages."
          - "Parce que la couche intentionnelle ne contient pas de données."
        correct: [1]
---

Pour comprendre et construire un récit de données, la thèse propose un **modèle conceptuel** organisé en **quatre couches**. Il décrit le chemin des faits jusqu'au lecteur : les données sont **explorées** pour en tirer des **constats**, transformés en **messages** selon l'intention de l'auteur, **organisés** en actes et en épisodes, puis **présentés** visuellement.

Ce modèle a un double usage : il aide le narrateur à **préparer** tous les éléments nécessaires à un récit, et il permet d'**analyser** un récit existant pour en comprendre la construction, le réutiliser ou le partager.
