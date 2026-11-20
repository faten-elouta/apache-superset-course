---
title: "Le tableau de bord, forme de récit"
order: 3
phase: presentation
lead: "Un tableau de bord n'est pas une page remplie de graphiques : c'est l'une des formes de récit visuel les plus répandues — et celle que vous construirez dans Superset."
objectives:
  - "Définir un **tableau de bord** et ses fonctions."
  - "Situer le dashboard et ses composants dans le **modèle en quatre couches**."
  - "Connaître les **questions à se poser** pour choisir les composants."
takeaways:
  - "Dans le modèle : **un dashboard rend un acte**, **un composant rend un épisode**, donc un message."
  - "Avant de choisir un composant : quels indicateurs ? quelle représentation ? faut-il du contexte ?"
  - "« **Vue d'ensemble d'abord, zoom et filtre, puis détails à la demande** » (Shneiderman)."
components:
  - type: summary_cards
    title: "Les trois fonctions d'un tableau de bord"
    items:
      - title: "Voir"
        content: "Repérer d'un coup d'œil tendances, motifs et anomalies."
      - title: "Décider"
        content: "Fonder une décision sur des constats issus des données."
      - title: "Suivre"
        content: "Contrôler et analyser la performance dans le temps."

  - type: heading
    text: "Le dashboard dans le modèle"
    intro: |
      Dans le modèle conceptuel, le dashboard appartient à la **couche présentationnelle**. Le lien avec les autres couches est direct :

      | Couche structurelle | Couche présentationnelle | Dans Superset |
      |---|---|---|
      | **Intrigue** | **Récit visuel** | Un ou plusieurs dashboards (ou onglets) |
      | **Acte** | **Dashboard** | Un dashboard, ou un onglet (*Tab*) |
      | **Épisode** (= un message) | **Composant de dashboard** | Un chart, un bloc *Markdown*, un titre |

      Conséquence pratique : **chaque graphique de votre dashboard doit porter un message**. Un graphique qui n'en porte aucun n'a pas sa place dans le récit.

  - type: heading
    text: "Choisir les composants : trois questions"

  - type: numberlist
    items:
      - content: "**Quels indicateurs (KPI) le public doit-il voir ?** — ceux qui répondent aux questions analytiques, pas tous ceux disponibles."
      - content: "**Quelle est la représentation visuelle adaptée à chaque indicateur ?** — choisir par défaut le graphique le plus courant peut induire en erreur (par exemple une courbe pour des catégories discrètes)."
      - content: "**Les indicateurs ont-ils besoin de contexte ?** — une référence (objectif, seuil, période précédente), une annotation, un texte d'explication."

  - type: callout
    kind: tip
    title: "Le mantra de Shneiderman"
    content: "« *Overview first, zoom and filter, then details-on-demand* » : donnez d'abord une **vue d'ensemble**, permettez de **zoomer et filtrer** sur ce qui intéresse, puis proposez les **détails à la demande**. Dans Superset : indicateurs en haut, filtres natifs, table de détail en bas."

  - type: heading
    text: "Trois types de tableaux de bord selon le public"

  - type: infotabs
    items:
      - title: "Opérationnel"
        content: |
          **Pour qui :** les équipes de terrain, au quotidien.

          **Pour quoi :** suivre en temps (quasi) réel et réagir vite : seuils, alertes, valeurs du jour.

          *Exemple PREVIZO : les stations dont la température maximale dépasse 30 °C aujourd'hui.*
      - title: "Stratégique"
        content: |
          **Pour qui :** la direction, les décideurs.

          **Pour quoi :** suivre quelques indicateurs clés sur le moyen ou long terme et les comparer aux objectifs.

          *Exemple PREVIZO : l'évolution du cumul de précipitations par saison sur cinq ans.*
      - title: "Analytique"
        content: |
          **Pour qui :** les analystes, les chargés d'études.

          **Pour quoi :** explorer, filtrer, croiser les données pour comprendre un phénomène.

          *Exemple PREVIZO : la relation entre altitude des stations et températures, filtrable par période.*

  - type: video
    placeholder: true
    label: "« Comprendre le tableau de bord » : la vidéo YouTube d'origine n'est plus disponible, une vidéo de remplacement est à choisir."
    watch_for:
      - "La définition d'un tableau de bord"
      - "Les principes de conception"
      - "Les éléments visuels et indicateurs utilisés"

  - type: quiz
    items:
      - question: "Dans le modèle en quatre couches, un **composant** de dashboard (un graphique) rend…"
        choices: ["une question analytique", "un épisode, c'est-à-dire un message", "un acte entier", "un collecteur"]
        correct: [1]
        explanation: "D'où la règle pratique : chaque graphique doit porter un message."
      - question: "Un chiffre affiché seul (« 47 mm ») suffit-il pour décider ?"
        choices:
          - "Oui, un chiffre précis suffit."
          - "Non, il faut le mettre en contexte : objectif, seuil ou période précédente."
        correct: [1]
        explanation: "C'est la troisième question à se poser : *les indicateurs ont-ils besoin de contexte ?*"
---

Selon la littérature recensée dans la thèse, un tableau de bord est un **outil interactif** qui fournit à ses utilisateurs une information à jour et ciblée pour **suivre et analyser** une activité. Il regroupe plusieurs tableaux et graphiques, permet de prendre des **décisions fondées sur les données**, et agit comme un **outil cognitif** qui aide à repérer visuellement tendances, motifs et anomalies.

Dans le projet PREVIZO, on suivra les **températures**, les **précipitations** et les **stations** qui sortent de l'ordinaire. Mais ces informations ne deviennent utiles que lorsqu'elles sont **organisées**, **mises en contexte** et **porteuses de messages** : c'est alors que le tableau de bord devient un récit de données.
