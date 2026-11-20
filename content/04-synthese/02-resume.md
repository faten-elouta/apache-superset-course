---
title: "Résumé et pour aller plus loin"
order: 2
lead: "Félicitations, vous avez terminé le parcours ! Voici l'essentiel à retenir, organisé selon les quatre phases du processus."
objectives:
  - "Revoir l'essentiel du cours en une page."
  - "Repartir avec des ressources pour continuer."
takeaways:
  - "Un dashboard réussi part d'une **question**, porte un **message** et suit une **structure**."
  - "Dans Superset : **connecter → dataset → vérifier → charts → dashboard → publier**."
  - "Avant de publier : **checklist** et **règle des 10 secondes**."
components:
  - type: method
    title: "Le processus, en une frise"
    details:
      donnees: "Collecteurs et constats : connexion, dataset, vérification des types, SQL Lab."
      intention: "Objectif, questions précises, messages (personnages, mesures), validation."
      structuration: "Audience, structure narrative, intrigue en actes et épisodes."
      presentation: "Un dashboard par acte, un chart par épisode, titres-messages, filtres, publication."

  - type: summary_cards
    title: "Ce que vous savez faire"
    items:
      - title: "Définir et analyser un récit"
        content: "Une composition structurée de messages ; ses quatre couches : factuelle, intentionnelle, structurelle, présentationnelle."
      - title: "Répondre aux questions"
        content: "Décliner un objectif en questions, tirer des messages des constats, les valider."
      - title: "Préparer les données"
        content: "Connecter Google Sheets, créer un dataset, corriger les types, explorer en SQL."
      - title: "Choisir les visualisations"
        content: "Associer chaque question à la bonne famille de graphiques."
      - title: "Construire un dashboard"
        content: "Assembler des charts selon une structure narrative, ajouter texte et filtres."
      - title: "Éviter les pièges"
        content: "Trop de catégories, axes trompeurs, absence de message."

  - type: worksheet
    id: fiche-recit
    mode: recall
    title: "Votre fiche récit, pour mémoire"
    fields:
      - { key: question, label: "Question analytique", phase: intention }
      - { key: message, label: "Message clé", phase: intention }
      - { key: structure, label: "Structure narrative", phase: structuration }

  - type: heading
    text: "Lectures complémentaires"
    intro: |
      - F. El Outa, [*A framework for crafting data narratives*](https://hal.science/tel-04505799), thèse de doctorat, Université de Tours, 2023 — le cadre de référence de la leçon 2.
      - E. Segel et J. Heer, *Narrative Visualization: Telling Stories with Data*, IEEE TVCG, 2010.
      - S. Chatman, *Story and Discourse: Narrative Structure in Fiction and Film*, Cornell University Press, 1978.
      - [Documentation officielle d'Apache Superset](https://superset.apache.org/)
      - [Le code source d'Apache Superset sur GitHub](https://github.com/apache/superset)
      - [Step-by-Step Guide to Data Visualization with Apache Superset](https://medium.com/@devcharlie2698619/step-by-step-guide-to-data-visualization-with-apache-superset-9cdeb25b001b)
      - [Apache Superset par Preset](https://preset.io/apache-superset/)
      - [Apache Superset — Next Decision](https://www.next-decision.fr/solutions/data-ai/restitution-dataviz/apache-superset)

  - type: callout
    kind: tip
    title: "Et maintenant ?"
    content: "Reprenez votre fiche récit avec **vos propres données** : un sujet, une question, un message, une structure. Puis construisez le dashboard dans Superset en suivant les quatre phases, et soumettez-le à la règle des 10 secondes."
---

Vous avez acquis les compétences pour connecter vos données, explorer des jeux de données, créer des visualisations et construire des dashboards efficaces, en appliquant les principes du data storytelling. Vous savez désormais concevoir des tableaux de bord qui ne se contentent pas d'afficher des données, mais qui **communiquent** l'histoire qu'elles racontent — une compétence précieuse pour toute personne qui travaille avec des données, en analyse comme en BI.
