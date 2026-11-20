---
title: "Structurer les réponses : intrigue, actes, épisodes"
order: 7
phase: structuration
lead: "Les messages sont prêts : il faut maintenant les organiser en une intrigue que le public peut suivre. Choisir une structure, c'est décider de ce que le lecteur voit d'abord, ensuite, et sur quoi il termine."
objectives:
  - "Mener les activités de la phase : **audience**, **sélection des messages**, **structure**, **actes et épisodes**."
  - "Connaître les principales **structures narratives** et les **niveaux d'interaction**."
  - "Traduire une intrigue en **mise en page de dashboard** dans Superset."
takeaways:
  - "Une **intrigue** = des **actes** (parties majeures) faits d'**épisodes** (un message chacun)."
  - "Structures : **trois actes**, **pyramide inversée**, **question → preuves → retour**, **verre à martini**…"
  - "Du **guidé par l'auteur** au **guidé par le lecteur** : le verre à martini est un hybride."
components:
  - type: numberlist
    title: "Les activités de la phase"
    items:
      - content: "**Déterminer l'audience** : à qui s'adresse le récit ? Grand public, décideurs, experts ?"
      - content: "**Sélectionner les messages** utiles à cette audience : tous les messages validés n'entrent pas forcément dans le récit."
      - content: "**Choisir une structure narrative** (voir ci-dessous)."
      - content: "**Associer les messages aux actes et aux épisodes** : chaque épisode raconte un message ; chaque acte regroupe des épisodes autour d'une information majeure."
      - content: "**Rédiger les actes et les épisodes** : un épisode annote son message avec le contexte, la portée et l'explication qui le rendent compréhensible."

  - type: heading
    text: "Structures narratives"
    intro: "La structure organise l'ensemble des messages ; l'**ordre** règle leur succession à l'intérieur de chaque partie. Plusieurs structures viennent de la fiction, d'autres du journalisme."

  - type: carousel
    items:
      - title: "Trois actes (pyramide de Freytag)"
        content: |
          Issue de la fiction : une **exposition** (contexte et concepts principaux), une **montée** où les constats s'enchaînent vers le message principal, une **résolution** qui conclut. Le système CineCubes organise de même un récit de données en actes : introduction, contexte, puis synthèse des points marquants.

          ![Structure en trois actes](/assets/images/figures/structure-trois-actes.jpg)

          **Dans Superset :** trois **onglets** (*Tabs*) — Contexte, Analyse, Recommandations.
      - title: "Pyramide inversée"
        content: |
          Selon Kosara, la plupart des récits de données journalistiques suivent la **pyramide inversée** : l'essentiel d'abord, puis les détails par ordre d'importance décroissante, sans fin marquée. Elle convient à un public pressé.

          **Dans Superset :** les indicateurs clés (*Big Number*) en haut, les graphiques de soutien au milieu, une table de détail en bas.
      - title: "Question → preuves → retour à la question"
        content: |
          Kosara propose une structure inspirée du récit classique : on **ouvre par une question ou une affirmation**, sans tout révéler, on **apporte les preuves**, puis on **conclut en reliant les preuves** à la question initiale.

          **Dans Superset :** un en-tête qui pose la question, des charts qui apportent chacun une preuve, un bloc *Markdown* final qui répond.
      - title: "Verre à martini (structure hybride)"
        content: |
          Segel et Heer distinguent les récits **guidés par l'auteur** (chemin linéaire, beaucoup d'explications, pas d'interaction), **guidés par le lecteur** (pas d'ordre imposé, forte interactivité) et **hybrides**. Le **verre à martini** en est l'exemple type : une séquence guidée au départ, puis plusieurs chemins d'exploration.

          ![Format verre à martini : accroche et idées clés en haut, chronologie au milieu, conclusion ou appel à l'action en bas](/assets/images/figures/structure-martini.jpg)

          **Dans Superset :** un message en haut, des **filtres natifs** et graphiques interactifs au centre.
      - title: "Kabob : un point central rappelé"
        content: |
          Une structure d'écriture d'entreprise : une anecdote d'ancrage, un paragraphe clé, des preuves, puis le rappel de l'ancrage. Utile quand un point central doit rester présent du début à la fin.

          ![Le kabob : anecdote, paragraphe clé, trois blocs de corps, anecdote](/assets/images/figures/structure-kabob.jpg)

          **Dans Superset :** le KPI d'ancrage dans l'en-tête, trois à cinq charts qui l'éclairent, une recommandation finale.

  - type: callout
    kind: info
    title: "Et l'ordre des messages ?"
    content: |
      À l'intérieur d'un acte, l'ordre compte aussi. La littérature étudie notamment l'ordre **chronologique** ou **non chronologique** des récits temporels (Lan et al. ont relevé six schémas sur 80 récits ; l'ordre non chronologique peut rendre le récit plus expressif sans nuire à sa compréhension), les **frises chronologiques** (14 choix de conception : représentation, échelle, disposition) et le coût cognitif des **transitions** entre graphiques (Hullman et al.) : regrouper les graphiques qui partagent une mesure, une période ou une zone facilite la lecture.

  - type: heading
    text: "Exemple : l'intrigue PREVIZO"
    intro: |
      | Acte | Épisodes (un message chacun) | Rendu dans Superset |
      |---|---|---|
      | **1. La situation** | Le réseau a connu un printemps nettement plus chaud | KPI *Big Number with Trendline* |
      | **2. L'évolution** | Les maximales montent depuis mars · Elles s'accélèrent en mai | Courbe mensuelle par station |
      | **3. Les stations** | Tours est la plus chaude et la plus en hausse · Les autres gagnent environ 4 °C | Barres triées · table de détail |

  - type: chooser
    id: chooser-structure
    question: "Quelle structure pour quelle situation ?"
    intro: "Choisissez une situation pour voir la structure recommandée."
    options:
      - label: "La direction veut savoir en 30 secondes si le réseau est en alerte."
        title: "Pyramide inversée"
        text: "Public pressé qui doit décider : le signal principal en premier, les détails ensuite."
      - label: "Vous présentez une étude complète sur la chaleur du printemps."
        title: "Trois actes"
        text: "Une démonstration qui progresse : contexte, analyse, puis recommandations — un onglet par acte."
      - label: "Des chargés d'études doivent pouvoir filtrer par station, mais retenir la même conclusion."
        title: "Verre à martini"
        text: "Un début guidé par l'auteur, puis une exploration libre avec les filtres."
      - label: "Vous voulez convaincre que Tours doit être équipée en priorité."
        title: "Question → preuves → retour (ou kabob)"
        text: "Posez la question ou l'affirmation, apportez les preuves une à une, puis revenez à la question avec la recommandation."

  - type: quiz
    items:
      - question: "Dans le modèle, un **épisode**…"
        choices:
          - "regroupe plusieurs actes"
          - "raconte un message, avec son contexte et son explication"
          - "est une requête SQL"
        correct: [1]
      - question: "Quelle activité vient en **premier** dans la phase Structurer les réponses ?"
        choices: ["Rédiger les épisodes", "Déterminer l'audience", "Associer les messages aux actes", "Choisir les couleurs"]
        correct: [1]
        explanation: "L'audience conditionne la sélection des messages et le choix de la structure."
      - question: "Un récit sans ordre imposé, très interactif et peu commenté est…"
        choices: ["guidé par l'auteur", "guidé par le lecteur", "en pyramide inversée"]
        correct: [1]
---

Dans le processus, la phase **Structurer les réponses** porte la **couche structurelle** du modèle. À partir des messages validés, on construit une **intrigue** : on la découpe en **actes**, des parties majeures, eux-mêmes composés d'**épisodes**, qui racontent chacun un message.

L'enquête menée auprès des journalistes montre que cette phase est **souvent sous-estimée** : la structuration se cache dans l'écriture de l'article, ou n'est même pas mentionnée. L'expérience menée avec des étudiants montre pourtant que sa complétion est fortement liée à la qualité du récit (corrélation de 0,85).
