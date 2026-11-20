---
title: "Composants d'Apache Superset"
lesson: "03-superset"
order: 1
components:
  - type: accordion
    items:
      - title: "Base de données"
        content: |
          La base de données représente la source initiale des données utilisées dans Superset. Elle peut correspondre à une base SQL classique, comme PostgreSQL ou SQLite, ou à une source externe comme Google Sheets.

          Dans Superset, il faut d'abord créer une connexion vers cette source de données afin de pouvoir interroger les tables, fichiers ou feuilles disponibles. Cette étape permet à Superset d'accéder aux données sans les stocker directement dans son propre système.
      - title: "Dataset"
        content: |
          Le dataset est la couche intermédiaire entre la base de données et les visualisations. Il correspond à une table, une feuille Google Sheets ou une requête SQL exposée dans Superset.

          Une fois la connexion à la base de données créée, l'utilisateur sélectionne une table ou une source spécifique pour créer un dataset. Ce dataset peut ensuite être configuré : choix des colonnes temporelles, définition des métriques, ajout de colonnes calculées, filtres, dimensions, etc.

          Le dataset sert donc de base structurée pour construire les graphiques.
      - title: "Chart"
        content: |
          Le chart correspond à une visualisation créée à partir d'un dataset. Dans Superset, l'utilisateur choisit un dataset, puis sélectionne un type de graphique : courbe, barre, carte, tableau, indicateur, diagramme circulaire, etc.

          À travers l'interface Explore, il est possible de configurer les axes, les métriques, les dimensions, les filtres, la période temporelle et l'apparence du graphique.

          Le chart permet de transformer les données brutes en information visuelle lisible et interprétable.
      - title: "Dashboards"
        content: |
          Le dashboard regroupe plusieurs charts dans une même interface. Il permet de construire une vue d'ensemble cohérente autour d'un sujet, d'un indicateur ou d'un cas d'usage métier.

          Dans Superset, les graphiques peuvent être ajoutés à un dashboard existant ou à un nouveau dashboard. L'utilisateur peut ensuite organiser la mise en page, redimensionner les graphiques, ajouter des filtres et structurer la lecture des données.

          Le dashboard facilite l'analyse globale et la communication des résultats.
      - title: "Administration"
        content: |
          L'administration concerne la gestion de l'environnement Superset. Elle inclut la gestion des connexions aux bases de données, des utilisateurs, des rôles, des permissions, de la sécurité et des paramètres d'accès aux dashboards et datasets.

          Cette étape est importante pour contrôler qui peut consulter, modifier ou publier les données et les visualisations.

          L'administration garantit une utilisation sécurisée, organisée et collaborative de Superset.
      - title: "Publication"
        content: |
          La publication correspond à la mise à disposition du dashboard auprès des utilisateurs concernés. Une fois les graphiques créés et organisés, le dashboard peut être publié afin d'être consulté par d'autres utilisateurs.

          La publication permet de partager les résultats d'analyse, de communiquer des indicateurs clés et de rendre les visualisations accessibles à un public cible.

          Selon les droits configurés, certains utilisateurs peuvent uniquement consulter le dashboard, tandis que d'autres peuvent le modifier ou l'administrer.
  - type: summary_cards
    items:
      - title: "Relier la source SQL"
        content: |
          Tout commence par la connexion à une base de données déjà existante. Superset a besoin d'accéder à une source fiable pour explorer les tables et préparer les analyses.
      - title: "Créer un dataset"
        content: |
          Une table ou une vue est ensuite exposée comme dataset dans Superset. C'est cette couche qui sert de base commune pour construire les visualisations sans repartir de zéro.
      - title: "Construire les charts"
        content: |
          À partir du dataset, vous choisissez un type de graphique adapté à la question posée. Chaque chart transforme les lignes de données en lecture visuelle plus rapide et plus claire.
      - title: "Composer et publier"
        content: |
          Les charts sont assemblés dans un dashboard pour raconter une histoire cohérente. Une fois le résultat vérifié, le tableau de bord peut être partagé avec les bonnes personnes.
---

### Apache Superset : du branchement à la publication

Apache Superset suit un parcours simple et lisible. On commence par connecter une base de données, on expose une table sous forme de **dataset**, puis on construit des **charts** avant d'assembler le tout dans un **dashboard**. Chaque étape prépare la suivante, sans détour inutile.

> **Repère visuel :** imaginez une frise en 6 blocs : base de données → dataset → chart → dashboard → publication → administration. C'est le fil conducteur des sections qui suivent.
