---
title: "Choisir la bonne visualisation"
order: 4
phase: presentation
lead: "Le meilleur graphique n'est pas le plus beau, mais celui qui répond le plus rapidement à la question posée. Le choix dépend de deux choses : le type de données, et ce que vous voulez montrer."
objectives:
  - "Identifier le **type** des données : catégorielles, ordinales, numériques, temporelles, géographiques."
  - "Associer une **question** à une **famille** de graphiques."
  - "Retrouver les graphiques correspondants dans **Superset**."
takeaways:
  - "Évolution → **courbe** ; comparaison ou classement → **barres triées** ; part d'un tout → **camembert** (3 à 5 parts max)."
  - "Relation entre deux variables → **nuage de points** ; chiffre clé → **Big Number**."
  - "Commencez toujours par la **question**, jamais par le type de graphique."
components:
  - type: heading
    text: "1. Quel type de données avez-vous ?"

  - type: infotabs
    items:
      - title: "Catégorielles"
        content: |
          Des valeurs regroupées en catégories, **sans ordre naturel**.

          **Exemples :** station, département, type de capteur.
          **Graphiques adaptés :** barres, camembert avec prudence, treemap, tableau croisé.
      - title: "Ordinales"
        content: |
          Des catégories **avec un ordre**.

          **Exemples :** niveau de vigilance (vert, jaune, orange, rouge), faible / moyen / fort.
          **Graphiques adaptés :** barres ordonnées, barres empilées, heatmap.
      - title: "Numériques"
        content: |
          Des **quantités mesurables**.

          **Exemples :** température, précipitations, altitude.
          **Graphiques adaptés :** histogramme, box plot, nuage de points.
      - title: "Temporelles"
        content: |
          Des mesures qui décrivent une **évolution dans le temps**.

          **Exemples :** température par jour, cumul de pluie par mois.
          **Graphiques adaptés :** courbe (*Line Chart*), barres temporelles, aire.
      - title: "Géographiques"
        content: |
          Des données liées à des **lieux**.

          **Exemples :** coordonnées des stations (`latitude`, `longitude`), départements.
          **Graphiques adaptés :** carte choroplèthe (*Country Map*), carte de points (*deck.gl Scatterplot*).

  - type: heading
    text: "2. Quelle question posez-vous ?"

  - type: chooser
    id: chooser-visualisation
    question: "Quelle question voulez-vous poser à vos données ?"
    options:
      - label: "Comment une valeur évolue-t-elle dans le temps ?"
        title: "Courbe (Line Chart)"
        text: "Idéale pour une évolution temporelle, par exemple la température maximale moyenne par mois. Placez la date sur l'axe X."
      - label: "Comment comparer ou classer des catégories ?"
        title: "Barres (Bar Chart)"
        text: "Pour comparer ou classer, par exemple le cumul de précipitations par station. Triez les barres pour faciliter la lecture."
      - label: "Quelle part chaque élément représente-t-il dans un total ?"
        title: "Camembert (Pie Chart) ou barres empilées"
        text: "Le camembert ne convient qu'à 3 à 5 parts maximum. Au-delà, préférez des barres triées."
      - label: "Existe-t-il un lien entre deux variables ?"
        title: "Nuage de points (Scatter Plot)"
        text: "Par exemple l'altitude et la température : chaque point représente une station."
      - label: "Comment les valeurs sont-elles réparties ?"
        title: "Histogramme ou Box Plot"
        text: "Pour voir la forme d'une distribution et repérer les valeurs extrêmes, par exemple les maximales journalières du mois."
      - label: "Quel est le chiffre clé à suivre ?"
        title: "Indicateur (Big Number with Trendline)"
        text: "Un seul chiffre, accompagné de sa tendance : par exemple la température maximale moyenne du mois."
      - label: "Où se situe le phénomène ?"
        title: "Carte (deck.gl Scatterplot ou Country Map)"
        text: "Pour positionner les stations ou comparer des territoires. Attention : latitude et longitude doivent être numériques."

  - type: heading
    text: "3. Les neuf familles de graphiques dans Superset"
    intro: "Superset classe ses graphiques par famille. Chaque famille répond à un type de question."

  - type: infotabs
    items:
      - title: "Corrélation"
        image: "/assets/images/figures/famille-correlation.jpg"
        alt: "Exemples de Scatter Plot, Bubble Chart et Heatmap de corrélation."
        content: |
          **Question : deux variables sont-elles liées ?**
          - **Scatter Plot** : relation entre altitude et température.
          - **Bubble Chart** : idem, avec une 3ᵉ variable représentée par la taille de la bulle.
          - **Heatmap** : voir d'un coup d'œil les relations fortes ou faibles.
      - title: "Distribution"
        image: "/assets/images/figures/famille-distribution.jpg"
        alt: "Exemples d'histogramme, de box plot et de horizon chart."
        content: |
          **Question : comment les valeurs sont-elles réparties ?**
          - **Histogram** : quelles valeurs sont fréquentes.
          - **Box Plot** : médiane, dispersion, valeurs extrêmes.
          - **Horizon Chart** : comparer beaucoup de séries dans le temps.
      - title: "Évolution"
        image: "/assets/images/figures/famille-evolution.jpg"
        alt: "Exemples de graphiques d'évolution temporelle."
        content: |
          **Question : comment une valeur change-t-elle dans le temps ?**
          - **Line Chart** : la référence pour une évolution.
          - **Area Chart** : évolution avec une notion de volume ou de cumul.
          - **Bar Chart** temporel : comparer des périodes (mois, trimestres).
          - **Mixed Chart** : deux indicateurs ensemble (pluie en barres, température en courbe).
          - **Waterfall Chart** : hausses et baisses successives.
      - title: "Flux"
        image: "/assets/images/figures/famille-flux.jpg"
        alt: "Exemples de Sankey Chart, Chord Diagram et Graph Chart."
        content: |
          **Question : comment les éléments circulent-ils ?**
          - **Sankey Chart** : flux entre étapes.
          - **Chord Diagram** : échanges entre groupes.
          - **Graph Chart** : réseau de relations.
      - title: "KPI"
        image: "/assets/images/figures/famille-kpi.jpg"
        alt: "Exemples de Big Number, Big Number with Trendline, Gauge Chart et Funnel Chart."
        content: |
          **Question : quel est le résultat clé ?**
          - **Big Number** : une valeur principale.
          - **Big Number with Trendline** : la valeur et son évolution.
          - **Gauge Chart** : progression vers un objectif.
          - **Funnel Chart** : étapes d'un parcours.
      - title: "Carte"
        image: "/assets/images/figures/famille-carte.jpg"
        alt: "Exemples de Country Map, deck.gl Scatterplot, deck.gl Heatmap et deck.gl Arc."
        content: |
          **Question : où se passe le phénomène ?**
          - **World Map / Country Map** : comparer des zones.
          - **deck.gl Scatterplot** : des points sur une carte (les stations).
          - **deck.gl Heatmap** : les zones les plus denses.
          - **deck.gl Arc / Path** : trajets et flux géographiques.
      - title: "Part du tout"
        image: "/assets/images/figures/famille-part-du-tout.jpg"
        alt: "Exemples de graphiques de part d'un tout."
        content: |
          **Question : quelle est la part de chaque élément dans un total ?**
          - **Pie Chart** : peu de catégories (3 à 5 parts maximum).
          - **Treemap** : beaucoup de catégories.
          - **Sunburst** : composition sur plusieurs niveaux hiérarchiques.
      - title: "Classement"
        image: "/assets/images/figures/famille-classement.jpg"
        alt: "Exemples de graphiques de classement."
        content: |
          **Question : qui est le plus haut, le plus bas, le plus important ?**
          - **Bar Chart** trié : la forme la plus lisible pour classer sur un seul critère.
          - **Radar Chart** : comparer plusieurs critères à la fois.
          - **Parallel Coordinates** : comparer plusieurs dimensions.
          - **Word Cloud** : montrer les mots les plus fréquents.
      - title: "Tableau"
        image: "/assets/images/figures/famille-tableau.jpg"
        alt: "Exemples de tableau et de tableau croisé."
        content: |
          **Question : ai-je besoin de voir le détail ?**
          - **Table** : les données ligne par ligne, avec recherche et tri.
          - **Pivot Table** : un tableau croisé (stations × mois), avec totaux.
          - **Time-series Table** : lire des indicateurs période par période.
          - À placer en bas d'un dashboard, pour vérification.

  - type: flipcards
    title: "Révision express"
    intro: "Lisez le besoin, devinez le graphique, puis retournez la carte."
    items:
      - front: "Je veux voir une évolution dans le temps"
        back: "Courbe — **Line Chart**"
      - front: "Je veux comparer des catégories"
        back: "Barres triées — **Bar Chart**"
      - front: "Je veux représenter une part dans un total"
        back: "**Pie Chart** (3 à 5 parts) ou barres empilées"
      - front: "Je veux montrer une donnée par territoire"
        back: "**Country Map** ou **deck.gl Scatterplot**"
      - front: "Je veux afficher un seul chiffre clé et sa tendance"
        back: "**Big Number with Trendline**"
      - front: "Je veux savoir si l'altitude influence la température"
        back: "Nuage de points — **Scatter Plot**"

  - type: quiz
    items:
      - question: "Vous voulez comparer le cumul de pluie de 9 stations. Quel graphique choisir ?"
        choices: ["Un camembert à 9 parts", "Des barres triées", "Une jauge"]
        correct: [1]
        explanation: "Neuf parts rendent un camembert illisible ; les barres triées permettent de comparer et de classer d'un coup d'œil."
      - question: "Vous voulez placer les stations sur une carte, mais `latitude` et `longitude` sont en TEXT. Que faire d'abord ?"
        choices:
          - "Choisir un camembert à la place."
          - "Les convertir en nombres (colonnes calculées avec CAST) dans le dataset."
          - "Rien, Superset les convertit toujours automatiquement."
        correct: [1]
        explanation: "On revient à la phase Données : une carte a besoin de coordonnées numériques."
---

Une bonne visualisation ne consiste pas à « faire joli » : elle rend une information **compréhensible, fiable et utile pour la décision**. Un graphique permet de repérer plus vite qu'un tableau brut une tendance, une rupture ou une valeur inhabituelle — à condition d'être adapté à la question.

Pour choisir, posez-vous deux questions dans l'ordre : **quel est le type de mes données ?** puis **que veux-je montrer ?** Reprenez la liste de graphiques de votre fiche récit et vérifiez vos choix au fil de cette page.
