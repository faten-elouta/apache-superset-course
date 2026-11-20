---
title: "Raconter les données : trois exemples"
order: 3
lead: "Un récit de données peut tenir dans une seule carte, s'étendre sur un tableau de bord entier ou prendre la forme d'une animation. Trois exemples pour voir ce qui les rend efficaces."
objectives:
  - "Retenir une **définition** opérationnelle du récit de données."
  - "Analyser trois formes de récit : une **visualisation unique**, un **dashboard**, une **animation**."
  - "Repérer ce qui guide le lecteur dans chacun de ces exemples."
takeaways:
  - "Un récit de données est **destiné à une audience précise** et poursuit un **objectif** (informer, expliquer, décider…)."
  - "Le support compte moins que la **construction** : contexte, message, ordre de lecture."
  - "Code couleur, annotations et titres sont des **outils narratifs**, pas des décorations."
components:
  - type: quote
    text: "Un récit de données est un ensemble structuré de messages appuyés par des données et présentés visuellement sous une forme claire et organisée. Il est destiné à une audience précise et a pour objectif d'informer, d'expliquer, de mettre en évidence des tendances, de faciliter la compréhension ou encore d'aider à la prise de décision."
    author: "EL OUTA Faten"

  - type: video
    youtube_id: "xacPHFq9AOc"
    label: "Récit de données : donner du sens aux chiffres"

  - type: heading
    text: "Exemple 1 — Une seule visualisation : la carte des nappes du BRGM"

  - type: figure
    src: "/assets/images/brgm-nappes-15-mai-2026.webp"
    alt: "Carte de France du BRGM montrant le niveau des nappes d'eau souterraine au 15 mai 2026, avec un code couleur du niveau très haut au niveau très bas et des symboles de tendance."
    caption: "Situation des nappes d'eau souterraine au 15 mai 2026 — source : BRGM."
    size: medium

  - type: markdown
    content: |
      Cette carte publiée par le **BRGM** vise à **informer** le **grand public** sur la situation des nappes d'eau souterraine en France. Elle ne se limite pas à représenter des données géographiques : elle raconte l'état des nappes à un moment donné en combinant plusieurs informations.

      - un **code couleur** indique le niveau des nappes, de très haut à très bas ;
      - des **symboles** montrent l'évolution : en hausse, stable ou en baisse ;
      - le lecteur repère ainsi immédiatement les régions favorables, moyennes ou préoccupantes.

      Des mesures techniques issues de points de suivi hydrogéologique deviennent une information claire, synthétique et facilement interprétable.

  - type: heading
    text: "Exemple 2 — Plusieurs visualisations : un tableau de bord"

  - type: markdown
    content: |
      **Un récit de données ne se limite pas nécessairement à un seul graphique.** Un tableau de bord de suivi de l'empreinte carbone, par exemple, combine cartes, jauges, courbes d'évolution, diagrammes circulaires et tableaux comparatifs pour donner une vision globale de la consommation de carburant, de l'usage de l'électricité et des émissions de CO₂.

      Bien construit, il guide la compréhension : il présente d'abord les indicateurs essentiels, explique ensuite les tendances ou les écarts, puis aide à identifier les points sur lesquels agir. **C'est ce type de récit que vous construirez dans Superset.**

  - type: heading
    text: "Exemple 3 — Une mise en scène animée : Hans Rosling"

  - type: video
    youtube_id: "SQnTjSIFT2M"
    label: "Les 200 pays, 200 ans et 4 minutes de Hans Rosling — The Joy of Stats (sous-titré en français)"
    watch_for:
      - "Les deux variables représentées sur les axes"
      - "Ce que représentent la taille et la couleur des bulles"
      - "Comment le commentaire guide le regard à chaque étape"

  - type: markdown
    content: |
      Dans le documentaire de la BBC *The Joy of Stats* (2010), le statisticien suédois **Hans Rosling** raconte **200 ans d'évolution du monde en quatre minutes**, à partir d'un graphique animé croisant l'espérance de vie et le revenu par habitant depuis 1810.

      L'intérêt ne réside pas seulement dans le graphique, mais dans la façon dont Rosling l'utilise : il relie les mouvements des pays à des événements historiques, économiques ou sanitaires, et construit une narration progressive et accessible. Comme il le souligne, disposer des données ne suffit pas : il faut savoir les présenter de manière **intéressante, vivante et facile à comprendre**.

  - type: quiz
    items:
      - question: "Qu'est-ce qui fait de la carte du BRGM un récit de données, et pas seulement une carte ?"
        choices:
          - "Elle utilise beaucoup de couleurs."
          - "Elle cible un public précis et l'aide à interpréter une situation à une date donnée."
          - "Elle contient beaucoup de points de mesure."
        correct: [1]
        explanation: "Public identifié (grand public), objectif clair (informer), et des codes visuels qui guident l'interprétation : niveau et tendance."
      - question: "Quels éléments permettent à Hans Rosling de transformer un graphique en récit ?"
        choices:
          - "L'animation dans le temps"
          - "Le commentaire qui relie les données à des événements"
          - "La progression étape par étape"
          - "Le nombre de pays affichés"
        correct: [0, 1, 2]
        explanation: "Le nombre de pays n'est pas ce qui crée le récit. C'est la **mise en scène** : temporalité, commentaire et progression."
---

Un **dashboard** rassemble plusieurs indicateurs, graphiques et informations clés dans une même interface. Mais pour être vraiment utile, il ne doit pas se contenter de juxtaposer des chiffres : il doit organiser l'information de manière claire, logique et adaptée à son public. C'est à ce niveau que **le récit de données intervient**.

Selon l'objectif poursuivi, un récit peut **informer** rapidement, **expliquer** un phénomène, **comparer** des situations ou **mettre en valeur** des tendances. Les trois exemples ci-dessous montrent trois formes différentes, de la plus simple à la plus élaborée.
