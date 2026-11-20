---
title: "Choisir la bonne visualisation dans Apache Superset"
lesson: "03-superset"
order: 4
hero:
  title: "Choisir la bonne visualisation dans Apache Superset"
  text: |
    Apprenez à sélectionner le graphique le plus adapté selon votre objectif
    d'analyse.
components:
  - type: quote
    text: "Le meilleur graphique n'est pas le plus beau, mais celui qui répond le plus rapidement à une question."
  - type: chooser
    id: chooser-visualisation
    question: "Quelle question voulez-vous poser à vos données ?"
    options:
      - label: "Comment une valeur évolue-t-elle dans le temps ?"
        title: "Courbe (Line Chart)"
        text: "Idéale pour une évolution temporelle, par exemple la température moyenne par mois. Placez la date sur l'axe X."
      - label: "Comment comparer des catégories entre elles ?"
        title: "Barres (Bar Chart)"
        text: "Pour comparer ou classer des catégories, par exemple les précipitations totales par station. Triez les barres pour faciliter la lecture."
      - label: "Quelle part chaque élément représente-t-il dans un total ?"
        title: "Graphique circulaire (Pie Chart) ou barres empilées"
        text: "Le camembert ne convient qu'à 3 à 5 parts maximum. Au-delà, préférez des barres triées."
      - label: "Existe-t-il un lien entre deux variables ?"
        title: "Nuage de points (Scatter Plot)"
        text: "Par exemple l'altitude et la température : chaque point représente une station de mesure."
      - label: "Quel est le chiffre clé à suivre ?"
        title: "Indicateur (Big Number with Trendline)"
        text: "Un seul chiffre, accompagné de sa tendance si possible : par exemple la température moyenne de la semaine."
  - type: summary_cards
    items:
      - title: "Corrélation"
        content: "Découvrir les relations entre variables."
      - title: "Distribution"
        content: "Comprendre la répartition des données."
      - title: "Évolution"
        content: "Analyser les changements dans le temps."
      - title: "Flow"
        content: "Visualiser les flux et transferts."
      - title: "KPI"
        content: "Suivre les indicateurs de performance."
      - title: "Map"
        content: "Analyser les données géographiques."
      - title: "Part of Whole"
        content: "Montrer la composition d'un ensemble."
      - title: "Ranking"
        content: "Comparer et classer."
      - title: "Table"
        content: "Explorer les données détaillées."
---
