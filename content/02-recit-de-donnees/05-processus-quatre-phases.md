---
title: "Le processus en quatre phases"
order: 5
phase: [donnees, intention, structuration, presentation]
lead: "Comment élabore-t-on un récit de données ? En croisant la littérature et les pratiques des journalistes de données, la thèse propose un processus en quatre phases — et des chemins pour les parcourir."
objectives:
  - "Connaître les **quatre phases** du processus et leurs **activités**."
  - "Comprendre que le processus **n'est pas linéaire** : allers-retours, plusieurs points de départ, plusieurs scénarios."
  - "Savoir pourquoi la phase **Répondre aux questions** mérite autant d'attention que les autres."
takeaways:
  - "**Explorer** → **Répondre aux questions** → **Structurer les réponses** → **Présenter**, avec des allers-retours libres."
  - "On peut partir d'un **jeu de données** à explorer ou d'une **question** à laquelle répondre."
  - "La complétion de chaque phase est **corrélée à la qualité** du récit final."
components:
  - type: method
    title: "Les quatre phases et leur couche du modèle"

  - type: heading
    text: "Les activités de chaque phase"

  - type: infotabs
    items:
      - title: "1 · Explorer"
        content: |
          Couche **factuelle**. Une phase longue : les journalistes la comptent en jours, voire en mois.

          1. **Collecter les jeux de données** : choisir les sources, extraire, intégrer, prétraiter.
          2. **Essayer et réutiliser des collecteurs** : requêtes, outils de profilage ou de fouille de données.
          3. **Essayer différentes visualisations** (tableaux croisés, graphiques, regroupements) pour faire émerger des constats.
          4. **Formuler les constats** et leurs relations.
          5. **Valider les constats** : tests statistiques, recoupement avec d'autres sources, confrontation à l'état de l'art.

          *Dans Superset : connexion, dataset, SQL Lab (leçon 3).*
      - title: "2 · Répondre aux questions"
        content: |
          Couche **intentionnelle**. Une phase **négligée par la littérature** mais centrale chez les praticiens.

          1. **Formuler l'objectif et les questions** analytiques.
          2. **Formuler des messages** à partir des constats, en identifiant leurs **personnages** et leurs **mesures**.
          3. **Valider les messages** : avis d'expert, comparaison avec l'état de l'art.

          *Détaillée à l'étape « Répondre aux questions ».*
      - title: "3 · Structurer les réponses"
        content: |
          Couche **structurelle**. Une phase **souvent sous-estimée** par les journalistes.

          1. **Déterminer l'audience.**
          2. **Sélectionner** éventuellement un sous-ensemble de messages pour cette audience.
          3. **Choisir une structure narrative.**
          4. **Associer les messages aux actes et aux épisodes.**
          5. **Rédiger les actes et les épisodes** : un épisode annote un message avec son contexte, sa portée, son explication.

          *Détaillée à l'étape « Structurer les réponses ».*
      - title: "4 · Présenter"
        content: |
          Couche **présentationnelle**.

          1. **Choisir le type de récit visuel** (dashboard, article, notebook, vidéo…).
          2. **Choisir le mode d'interactivité.**
          3. **Réaliser les dashboards** : un par acte, un composant par épisode.

          *Dans Superset : Explore, dashboard, publication (leçon 3).*

  - type: figure
    src: "/assets/images/figures/processus-recit-4-phases.jpg"
    alt: "Schéma en quatre étapes illustré par le suivi d'un cours d'eau : 1. Données (collecter niveau, débit, pluie), 2. Intention (comprendre si le niveau monte ou baisse), 3. Structuration (contexte, évolution, cause, action), 4. Présentation finale (un graphique simple et un message clé)."
    caption: "Illustration du processus sur le suivi d'un cours d'eau : Données ≈ Explorer, Intention ≈ Répondre aux questions, Structuration ≈ Structurer les réponses, Présentation ≈ Présenter."
    size: medium

  - type: heading
    text: "Un processus non linéaire"
    intro: |
      Les activités ne sont pas des étapes à exécuter l'une après l'autre : beaucoup se mènent en parallèle, et l'on peut **revenir à tout moment** à une activité antérieure — reformuler un message, poser une nouvelle question, explorer un autre jeu de données. Le processus **démarre au choix** par un jeu de données à explorer ou par une question à laquelle répondre. Selon la situation, quatre **scénarios** reviennent souvent.

  - type: chooser
    id: chooser-scenario
    question: "Quel scénario correspond à votre situation ?"
    options:
      - label: "Je découvre un jeu de données et n'ai qu'une vague idée du sujet."
        title: "Scénario exploratoire"
        text: "Nombreux allers-retours entre Explorer et Répondre aux questions jusqu'à des questions claires et des messages validés ; puis on structure et on présente de façon plus linéaire. C'est le scénario le plus fréquent dans les processus documentés."
      - label: "Je refais une étude périodique (ex. : bilan climatique mensuel) avec des questions connues."
        title: "Scénario préétabli"
        text: "Objectif et questions sont définis dès le départ ; les phases s'enchaînent directement, et la structure et la présentation sont souvent réutilisées."
      - label: "Je traite les questions une par une, jusqu'à la présentation, avant de passer à la suivante."
        title: "Scénario question par question"
        text: "Toutes les phases sont enchaînées pour chaque question. Fréquent chez les débutants ; les professionnels formulent plutôt la plupart des questions tôt."
      - label: "Une autre équipe se chargera de la mise en forme finale."
        title: "Scénario à présentation déléguée"
        text: "La phase Présenter est confiée à une équipe spécialisée en fin de processus, rapporté par plusieurs journalistes interrogés."

  - type: heading
    text: "Ce que disent les données de terrain"

  - type: summary_cards
    items:
      - title: "18 journalistes de données"
        content: "Enquête dans 14 régions : le sujet naît d'une **idée à confirmer** (68 %), d'un **jeu de données à explorer** (68 %), ou s'**affine pendant l'exploration** (48 %)."
      - title: "Un écart pratique / théorie"
        content: "Les journalistes investissent beaucoup l'**intention** et peu la **structure** ; la littérature fait l'inverse. Le processus réunit les deux."
      - title: "44 étudiants de master"
        content: "La qualité des récits est **corrélée** à la complétion de chaque phase : 0,70 (Répondre), 0,85 (Structurer), 0,87 (Présenter)."

  - type: classifier
    title: "À quelle phase appartient chaque activité ?"
    instruction: "Projet PREVIZO : classez chaque activité dans la phase du processus."
    categories: ["Explorer", "Répondre aux questions", "Structurer", "Présenter"]
    items:
      - text: "Vérifier, en comparant avec Météo-France, que la hausse observée à Tours n'est pas une erreur de capteur."
        answer: 0
        explanation: "Valider un **constat** en le recoupant avec une autre source relève de l'exploration."
      - text: "Écrire : « Les maximales ont bondi en mai, surtout à Tours (+6,6 °C en un mois) »."
        answer: 1
        explanation: "Formuler un **message** à partir d'un constat."
      - text: "Faire relire ce message par une climatologue avant publication."
        answer: 1
        explanation: "La **validation des messages** fait partie de la phase Répondre aux questions."
      - text: "Décider que le récit s'adresse aux gestionnaires du réseau et comptera trois actes."
        answer: 2
        explanation: "Déterminer l'audience et organiser les actes : c'est la structuration."
      - text: "Croiser la feuille *Climat* avec la feuille *stations* pour obtenir l'altitude."
        answer: 0
        explanation: "Collecter et intégrer les jeux de données."
      - text: "Choisir un dashboard Superset avec filtres plutôt qu'un rapport PDF."
        answer: 3
        explanation: "Le type de récit visuel et le mode d'interactivité relèvent de la présentation."

  - type: quiz
    items:
      - question: "Quelle phase la thèse identifie-t-elle comme **négligée par la littérature** ?"
        choices: ["Explorer", "Répondre aux questions", "Structurer les réponses", "Présenter"]
        correct: [1]
        explanation: "Les travaux portent surtout sur l'exploration et la visualisation ; l'intention du narrateur y est rarement modélisée."
      - question: "Un récit de données doit-il toujours commencer par une question ?"
        choices:
          - "Oui, toujours."
          - "Non : il peut aussi commencer par l'exploration d'un jeu de données."
        correct: [1]
        explanation: "Le processus démarre au choix par un jeu de données ou par une question, comme l'a montré l'enquête auprès des journalistes."
---

La littérature s'accorde sur trois grandes phases pour élaborer un récit de données : **analyser**, **structurer**, **présenter**. Mais l'enquête menée auprès de journalistes de données montre qu'ils consacrent aussi beaucoup de temps à une activité que la littérature décrit peu : **formuler l'intention** — l'objectif, les questions et les messages.

Le processus proposé dans la thèse comble ce manque en distinguant **quatre phases**, chacune associée à une couche du modèle. Il couvre l'ensemble du cycle, de l'exploration des données à la présentation visuelle, et accueille la diversité des pratiques observées sur le terrain.
