---
title: "Bienvenue"
order: 1
lead: "Et si vous appreniez à créer des tableaux de bord qui racontent vraiment quelque chose, avec un outil gratuit, léger et open source ?"
objectives:
  - "Découvrir ce qu'est **Apache Superset** et ce que vous saurez faire à la fin du cours."
  - "Découvrir le **cadre de référence** du cours : un modèle en quatre couches et un processus en quatre phases."
  - "Faire connaissance avec le fil rouge : les données climatiques du projet **PREVIZO**."
takeaways:
  - "Superset relie une **source de données** à des **graphiques** puis à un **dashboard** publiable."
  - "Un bon dashboard part d'une **question** et d'un **message**, pas d'une liste de graphiques."
  - "Le cours suit quatre phases : **Explorer → Répondre aux questions → Structurer les réponses → Présenter**, avec des allers-retours."
components:
  - type: listing_cards
    title: "Ce que vous saurez faire à la fin du cours"
    items:
      - title: "Formuler un message à partir de données"
        text: "Transformer une question métier en question analytique précise, puis en un message clé que votre public retient."
      - title: "Préparer vos données dans Superset"
        text: "Connecter une source (ici Google Sheets), créer et vérifier un dataset, l'explorer en SQL dans SQL Lab."
      - title: "Choisir et construire les bons graphiques"
        text: "Sélectionner la visualisation adaptée à la question posée et la configurer dans l'interface Explore."
      - title: "Assembler et publier un dashboard qui raconte"
        text: "Organiser les graphiques selon une structure narrative, ajouter titres et filtres, puis publier."

  - type: heading
    text: "Un cadre issu de la recherche"
    intro: |
      Tout le cours s'appuie sur le cadre proposé dans la thèse de doctorat de **Faten El Outa**, *A framework for crafting data narratives* (Université de Tours, 2023 — [HAL tel-04505799](https://hal.science/tel-04505799)). Il comprend :

      - un **modèle conceptuel** en quatre couches — factuelle, intentionnelle, structurelle, présentationnelle — qui décrit de quoi est fait un récit de données ;
      - un **processus** en quatre phases qui décrit comment on l'élabore.

      On ne commence donc pas par choisir un graphique : on **explore** les données, on **répond aux questions** en formulant des messages, on **structure** ces réponses, puis on les **présente**. Chaque page du cours indique, par une pastille de couleur, la ou les phases qu'elle travaille.

  - type: method

  - type: heading
    text: "Le fil rouge : le projet PREVIZO"
    intro: |
      Pour que la pratique reste concrète, tous les exemples Superset utilisent les données du projet **PREVIZO** : des relevés climatiques (précipitations, températures minimales et maximales) mesurés par un réseau de stations, stockés dans des feuilles **Google Sheets** (*Climat*, *stations*, *capteurs*).

      Vous suivrez ces données de bout en bout : connexion à Superset, création du dataset, exploration en SQL, premiers graphiques, puis un dashboard complet qui répond à une question précise.

  - type: callout
    kind: info
    title: "Pour qui ? Avec quoi ?"
    content: |
      Ce cours s'adresse aux étudiantes et étudiants de niveau **débutant à intermédiaire**, avec ou sans connaissances préalables en SQL : les quelques requêtes utilisées sont expliquées pas à pas et peuvent être testées dans un bac à sable intégré au cours.

      Pour la partie pratique, il vous faut un accès à une instance **Apache Superset** (locale ou fournie par votre établissement) et à des feuilles Google Sheets partagées.

  - type: callout
    kind: tip
    title: "Comment suivre le cours"
    content: |
      Suivez les étapes dans l'ordre : chaque leçon prépare la suivante. Les activités (quiz, exercices de classement, fiche de travail…) sont faites pour être tentées **avant** de lire la solution. Utilisez le bouton **« Marquer comme terminé »** en bas de page pour suivre votre progression dans le sommaire.
---

**Apache Superset** est un outil de Business Intelligence open source et gratuit. Il permet de connecter des bases de données, de créer et gérer des jeux de données (*datasets*), de les explorer, de concevoir des visualisations, puis de regrouper ces graphiques dans des **dashboards** enrichis par une narration claire.

Les supports francophones sur cet outil restent encore rares : ce cours propose une introduction pratique à ses principales fonctionnalités, en les reliant aux fondamentaux du **data storytelling**. L'objectif n'est pas seulement de savoir *cliquer* dans Superset, mais de produire des tableaux de bord qui transforment des données brutes en messages compréhensibles, structurés et utiles à la décision.
