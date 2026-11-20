---
title: "Types des graphiques"
lesson: "04-informations-complementaires"
order: 1
hero:
  title: "Créer des graphiques efficaces avec Apache Superset"
  text: |
    Dans ce module, vous allez apprendre à créer un graphique dans **Apache
    Superset** avec l'interface **Explore**, puis à choisir le type de
    visualisation le plus adapté selon les données, le message à transmettre
    et le public visé.

    Superset propose deux interfaces principales : **Explore**, un
    constructeur de visualisations sans code, et **SQL Lab**, un
    environnement SQL pour préparer, nettoyer ou joindre les données avant
    leur visualisation.
components:
  - type: summary_cards
    items:
      - title: "Comprendre rapidement"
        content: "Un graphique permet de repérer plus vite une tendance, une rupture ou une valeur inhabituelle qu'un tableau brut."
      - title: "Explorer"
        content: "Dans Superset, l'utilisateur peut tester plusieurs vues, modifier les métriques, les dimensions et les filtres, puis cliquer sur **Run** pour observer le résultat."
      - title: "Communiquer"
        content: "Une bonne dataviz ne montre pas seulement des chiffres : elle transmet un message clair, adapté à son public."
  - type: quote
    text: "Une bonne visualisation ne consiste pas à « faire joli », mais à rendre une information compréhensible, fiable et utile pour la décision."
  - type: infotabs
    items:
      - title: "Données catégorielles"
        content: |
          Ce sont des valeurs regroupées en catégories, sans ordre naturel.

          **Exemples :** pays, genre, type de produit, couleur, secteur d'activité.
          **Graphiques adaptés :** bar chart, pie chart avec prudence, treemap, tableau croisé.
      - title: "Données ordinales"
        content: |
          Ce sont des catégories avec un ordre.

          **Exemples :** faible / moyen / fort, niveau de satisfaction, rang, priorité.
          **Graphiques adaptés :** bar chart ordonné, bar chart empilé, heatmap.
      - title: "Données numériques"
        content: |
          Elles représentent des quantités mesurables.

          **Exemples :** ventes, température, prix, revenu, temps de réaction.
          **Graphiques adaptés :** histogramme, boxplot, scatter plot, line chart.
      - title: "Données temporelles"
        content: |
          Elles décrivent une évolution dans le temps.

          **Exemples :** ventes par mois, température par jour, trafic horaire.
          **Graphiques adaptés :** line chart, time-series bar chart, area chart.
      - title: "Données géographiques"
        content: |
          Elles sont liées à des lieux ou territoires.

          **Exemples :** pays, régions, villes, coordonnées GPS.
          **Graphiques adaptés :** carte choroplèthe, point map, heatmap géographique.
  - type: infotabs
    items:
      - title: "Corrélation"
        image: "https://assets.coursebox.ai/public/coursebox/learning/f37c585d-fd10-4823-bcc0-9b00de04c3ec.png"
        content: |
          - **Scatter Plot** : relation entre température et consommation d'eau.
          - **Bubble Chart** : comme Scatter Plot, mais avec une 3ᵉ variable représentée par la taille de la bulle.
          - **Heatmap** : voir rapidement les relations fortes ou faibles.
      - title: "Distribution"
        image: "https://assets.coursebox.ai/public/coursebox/learning/63709e5e-3911-4894-a16b-9051d68a1c48.png"
        content: " "
      - title: "Évolution"
        image: "https://assets.coursebox.ai/public/coursebox/learning/c5c3f545-275b-49ef-9678-3b84de5657f4.png"
        content: " "
      - title: "Flow"
        image: "https://assets.coursebox.ai/public/coursebox/learning/f2d4342b-b2f5-4c0d-99a4-89779f99b0d9.png"
        content: " "
      - title: "KPI"
        image: "https://assets.coursebox.ai/public/coursebox/learning/fbeaa5d5-d3de-4d02-9b33-4dc6fcd6323d.png"
        content: " "
      - title: "Map"
        image: "https://assets.coursebox.ai/public/coursebox/learning/8c70b4de-7c24-4564-a2c7-3956a12dc8e1.png"
        content: " "
      - title: "Part of whole"
        image: "https://assets.coursebox.ai/public/coursebox/learning/3de14586-1fb2-4c7b-98be-4237f855219e.png"
        content: " "
      - title: "Ranking"
        image: "https://assets.coursebox.ai/public/coursebox/learning/4153672f-23bb-414f-8ff0-9dc54a8c763a.png"
        content: " "
      - title: "Table"
        image: "https://assets.coursebox.ai/public/coursebox/learning/2bed75fe-427b-4b94-91c5-890296572134.png"
        content: " "
  - type: flipcards
    items:
      - front: "Courbe / time-series chart"
        image: "https://assets.coursebox.ai/public/coursebox/learning/7e10439f-ca84-440d-9660-e0e7d059c023.png"
        back: "Je veux voir une évolution dans le temps"
      - front: "Pie chart / donut chart"
        image: "https://assets.coursebox.ai/public/coursebox/learning/00e46d43-5028-4288-b080-936763a75b67.png"
        back: "Je veux représenter une part dans un total"
      - front: "Carte choroplèthe / point map"
        back: "Je veux montrer une donnée par territoire"
      - front: "Bar chart"
        back: "Je veux comparer des catégories"
---

### Objectifs pédagogiques

À la fin de cette partie, l'apprenant sera capable de :

1. **Comprendre** le rôle de la visualisation de données.
2. Identifier les principaux types de données : catégorielles, ordinales, numériques, temporelles et géographiques.
3. Choisir un graphique adapté à une question analytique.
4. Créer un graphique dans Superset depuis l'onglet **Datasets**.
5. Sauvegarder un graphique et l'ajouter à un dashboard.
6. Éviter les erreurs courantes : mauvais choix de graphique, couleurs excessives, axes trompeurs, surcharge visuelle.

*La **datavisualisation** sert à rendre les données plus lisibles, à synthétiser des informations complexes et à guider l'utilisateur dans la compréhension des résultats. L'Insee rappelle aussi que la simplicité, les métadonnées, la rigueur statistique et la lisibilité sont essentielles pour une bonne communication des données.*
