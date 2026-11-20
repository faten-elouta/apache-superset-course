---
title: "Analyser des récits existants"
order: 4
lead: "Un récit de données peut tenir dans une seule carte, s'étendre sur un tableau de bord ou prendre la forme d'une animation. Lisons trois exemples avec les lunettes du modèle en quatre couches."
objectives:
  - "Reconnaître trois formes de récit : **visualisation unique**, **dashboard**, **vidéo**."
  - "Identifier, dans un récit existant, son **objectif**, ses **messages**, sa **structure** et sa **présentation**."
  - "Comprendre l'intérêt de la **rétro-ingénierie** de récits."
takeaways:
  - "Analyser un récit existant (« rétro-ingénierie ») aide à **comprendre**, **réutiliser** et **partager** les bonnes constructions."
  - "Le support compte moins que la **construction** : messages, ordre de lecture, public."
  - "Code couleur, annotations et titres sont des **outils narratifs**, pas des décorations."
components:
  - type: quote
    text: "Un récit de données est un ensemble structuré de messages appuyés par des données et présentés visuellement sous une forme claire et organisée. Il est destiné à une audience précise et a pour objectif d'informer, d'expliquer, de mettre en évidence des tendances, de faciliter la compréhension ou encore d'aider à la prise de décision."
    author: "EL OUTA Faten"

  - type: callout
    kind: method
    title: "Pourquoi « rétro-ingénierer » un récit ?"
    content: |
      La thèse montre que l'analyse d'un récit existant permet de : **comprendre** comment il est construit et comment ses messages s'enchaînent ; **réutiliser** des constructions qui fonctionnent ; **collaborer** entre analystes, designers et experts du domaine ; **indexer** les récits pour les retrouver. Méthode : partir du **récit visuel** (dashboards, composants), y repérer les **messages**, puis la **structure**, enfin remonter aux **constats** et aux **collecteurs** dans les documents d'analyse.

  - type: heading
    text: "Exemple 1 — Une seule visualisation : la carte des nappes du BRGM"

  - type: figure
    src: "/assets/images/brgm-nappes-15-mai-2026.webp"
    alt: "Carte de France du BRGM montrant le niveau des nappes d'eau souterraine au 15 mai 2026, avec un code couleur du niveau très haut au niveau très bas et des symboles de tendance."
    caption: "Situation des nappes d'eau souterraine au 15 mai 2026 — source : BRGM."
    size: medium

  - type: markdown
    content: |
      Cette carte publiée par le **BRGM** vise à **informer** le **grand public** sur la situation des nappes d'eau souterraine en France à une date donnée. Un **code couleur** indique le niveau (de très haut à très bas), des **symboles** montrent l'évolution (hausse, stable, baisse). Des mesures techniques deviennent une information claire et interprétable.

      | Couche | Dans cet exemple |
      |---|---|
      | Intentionnelle | Objectif : informer sur l'état des nappes ; message : où la situation est préoccupante |
      | Structurelle | Un seul acte, une lecture d'ensemble |
      | Présentationnelle | Une carte : couleur = niveau, symbole = tendance |

  - type: heading
    text: "Exemple 2 — Un dashboard : la situation COVID-19 de l'ECDC"

  - type: markdown
    content: |
      La thèse reproduit avec un prototype le récit publié par le **Centre européen de prévention et de contrôle des maladies (ECDC)** sur la situation mondiale du COVID-19 au 21 mai 2020. C'est un excellent modèle pour un dashboard Superset.

      - **Objectif** : rendre compte de la situation mondiale au 21 mai 2020.
      - **Questions** : quelle est la situation actuelle ? comment évoluent les courbes quotidiennes ? quelle est la répartition géographique des cas et des décès ?
      - **Un message** : *5 776 934 cas et 360 089 décès signalés au 21 mai 2020* (personnage : le monde ; mesures : cas, décès).
      - **Collecteurs** : de simples **requêtes SQL**, par exemple :

      ```sql
      SELECT daterep, continentexp, SUM(cases)
      FROM covid19
      GROUP BY daterep, continentexp
      ORDER BY daterep;
      ```

      - **Intrigue en 3 actes** : (1) synthèse par continent — 3 épisodes ; (2) courbes épidémiologiques quotidiennes — 2 épisodes ; (3) répartition géographique — 4 épisodes.
      - **Présentation** : une page web, **un dashboard par acte**, des composants variés : texte mis en forme, diagrammes en barres commentés, cartes et un tableau.

  - type: heading
    text: "Exemple 3 — Une vidéo : Hans Rosling"

  - type: video
    youtube_id: "SQnTjSIFT2M"
    label: "Les 200 pays, 200 ans et 4 minutes de Hans Rosling — The Joy of Stats (sous-titré en français)"
    watch_for:
      - "Les deux mesures représentées sur les axes"
      - "Les personnages : que représentent les bulles, leur taille, leur couleur ?"
      - "Comment le commentaire transforme chaque mouvement en message"

  - type: markdown
    content: |
      Dans *The Joy of Stats* (BBC, 2010), **Hans Rosling** raconte 200 ans d'évolution du monde en quatre minutes, à partir d'un graphique animé croisant espérance de vie et revenu par habitant depuis 1810. Le graphique seul n'est qu'une visualisation ; c'est le **commentaire** qui en fait un récit, en reliant chaque mouvement à un événement historique, économique ou sanitaire, dans un ordre **chronologique** et progressif.

  - type: video
    youtube_id: "xacPHFq9AOc"
    label: "Récit de données : donner du sens aux chiffres"

  - type: quiz
    items:
      - question: "Dans le récit de l'ECDC, que représente chacun des trois dashboards de la page ?"
        choices: ["Un message", "Un acte de l'intrigue", "Une requête SQL", "Un personnage"]
        correct: [1]
        explanation: "Un dashboard rend un acte ; ici : synthèse, courbes quotidiennes, répartition géographique."
      - question: "Dans quel ordre la thèse propose-t-elle de rétro-ingénierer un récit ?"
        choices:
          - "Collecteurs → constats → messages → récit visuel"
          - "Récit visuel → messages → structure → constats et collecteurs"
          - "Structure → récit visuel → collecteurs → messages"
        correct: [1]
        explanation: "On part de ce qui est visible (le récit publié) pour remonter jusqu'à l'analyse qui le soutient."
      - question: "Quels éléments permettent à Hans Rosling de transformer un graphique en récit ?"
        choices:
          - "L'animation dans le temps"
          - "Le commentaire qui relie les données à des événements"
          - "La progression étape par étape"
          - "Le nombre de pays affichés"
        correct: [0, 1, 2]
        explanation: "Ce n'est pas la quantité de données qui crée le récit, mais sa **mise en scène**."
---

Analyser des récits existants est le meilleur moyen d'apprendre à en construire. La thèse appelle cela la **rétro-ingénierie** : retrouver, dans un récit publié, les concepts du modèle — son objectif, ses questions, ses messages, ses actes et épisodes, ses dashboards et composants.

Les trois exemples ci-dessous vont du plus simple au plus élaboré. Pour chacun, demandez-vous : **quel est le message ? pour quel public ? dans quel ordre ? sous quelle forme ?**
