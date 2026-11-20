---
title: "Création d'un jeu de données"
lesson: "03-superset"
order: 2
hero:
  title: "Créer un jeu de données dans Apache Superset"
  text: |
    De la base de données connectée jusqu'au dataset prêt à être exploré dans
    SQL Lab.
components:
  - type: numberlist
    items:
      - content: |
          **Accéder aux connexions de bases de données** — dans le menu **Settings** (en haut à droite), sous la section **Data**, cliquer sur **Database Connections**.
      - content: |
          **Ajouter une base de données** — sur la page **Databases**, cliquer sur **+ Database** (en haut à droite).
      - content: |
          **Choisir le type de source** — à l'étape *Step 1 of 3 : Select a database to connect*, dérouler la liste **Supported databases** et sélectionner **Google Sheets** (Superset prend aussi en charge PostgreSQL, SQLite, Shillelagh et d'autres moteurs).
      - content: |
          **Nommer la connexion et ajouter les feuilles** — donner un nom à la connexion (par exemple **PREVIZO**), puis pour chaque feuille à connecter : renseigner un **Google Sheet Name** (par exemple **Climat**, **stations**, **capteurs**...) et l'**URL** de la feuille Google Sheets correspondante. Cliquer sur **+ Add sheet** pour ajouter une nouvelle ligne à chaque fois qu'une feuille supplémentaire doit être connectée.
      - content: |
          **Terminer** — une fois toutes les feuilles renseignées, cliquer sur **Finish** pour valider la connexion. Elle apparaît alors dans la liste des **Databases**, prête à être utilisée pour créer des datasets.
  - type: numberlist
    items:
      - content: |
          **Datasets** — depuis la page d'accueil, cliquer sur **Datasets** dans le menu supérieur.
      - content: |
          **Ajouter un dataset** — dans la page **Datasets**, cliquer sur **+ Dataset**.
      - content: |
          **Sélectionner une base de données** — sélectionner la base de données déjà connectée, par exemple **Google Sheets**.
      - content: |
          **Schéma** — choisir le **schéma**, par exemple **main**. Un schéma est un espace d'organisation à l'intérieur d'une base de données : il regroupe les tables disponibles et permet à Superset de savoir où chercher les données. Dans cet exemple, le schéma **main** contient les tables accessibles depuis la base connectée. Après avoir choisi ce schéma, Superset peut afficher les tables disponibles, comme la table **Climat**.
      - content: |
          **Table** — sélectionner la table à utiliser, par exemple **Climat**.
      - content: |
          **Vérification** — le panneau **Table columns** liste les colonnes détectées par Superset avec leur type de donnée. Pour la table **Climat**, on retrouve par exemple `departement` (REAL), `code_station` (REAL), `nom_station` (TEXT), `latitude` (TEXT), `longitude` (TEXT), `altitude_m` (REAL), `date_mesure` (DATE), `timestamp_mesure` (REAL), `precip_mm` (TEXT), `tmin_c` (TEXT) et `tmax_c` (TEXT).
      - content: |
          **Création du jeu de données** — cliquer sur **Create and explore dataset** pour créer le jeu de données et commencer l'exploration.
  - type: numberlist
    items:
      - content: |
          **Accéder à SQL Lab** — depuis la liste des datasets, cliquer sur le menu **SQL** dans la barre supérieure. Il propose trois options : **SQL Lab**, **Saved Queries** et **Query History**. Choisir **SQL Lab**, le point d'entrée pour interroger les données en SQL, explorer le contenu du dataset et préparer les analyses avant la création des visualisations.
      - content: |
          **Sélectionner le jeu de données** — dans SQL Lab, choisissez la base de données utilisée, ici **Google Sheets**. Sélectionnez ensuite le schéma correspondant, ici **main**, puis choisissez le dataset à explorer, par exemple **Climat**.
      - content: |
          **Titre de requête** — nommez votre requête afin de pouvoir l'identifier facilement par la suite.
      - content: |
          **Requête** — dans SQL Lab, une requête simple comme `SELECT * FROM Climat` permet d'afficher les premières lignes du dataset. Ici, `SELECT *` signifie que l'on sélectionne toutes les colonnes de la table, tandis que `FROM Climat` indique que les données sont récupérées depuis le dataset nommé **Climat**.
      - content: |
          **Exécuter** — dès que la requête est prête, cliquez sur **Run** pour l'exécuter. Vous pouvez également choisir le nombre de lignes à afficher dans le résultat en utilisant l'option **Limit**. Par exemple, avec **Limit : 1000**, la requête retournera au maximum **1 000 lignes** dans le tableau de résultats.
      - content: |
          **Résultats de la requête** — les résultats s'affichent sous forme de tableau. Ce tableau permet de visualiser les données retournées par la requête SQL, de vérifier le contenu des colonnes, d'observer les premières lignes du dataset et de s'assurer que la requête fonctionne correctement avant de passer à la création des visualisations. À partir de cette étape, vous pouvez cliquer sur **Create chart** pour commencer à créer des graphiques.
      - content: |
          **Enregistrer un jeu de données** — on peut également enregistrer une partie des données, ou des données modifiées par la requête, comme un nouveau jeu de données. Pour cela, cliquer sur la flèche à côté du bouton **Save**, puis sélectionner **Save dataset**. Cela permet de créer un nouveau dataset à partir du résultat de la requête SQL, afin de le réutiliser ensuite pour l'exploration ou la création de visualisations.
  - type: carousel
    items:
      - title: "Afficher toutes les colonnes du dataset"
        content: |
          ```sql
          SELECT *
          FROM Climat;
          ```
          Cette requête permet d'afficher toutes les colonnes du dataset **Climat**. Ici, `SELECT *` signifie que l'on sélectionne toutes les colonnes, tandis que `FROM Climat` indique que les données sont récupérées depuis le dataset nommé **Climat**.
      - title: "Afficher seulement certaines colonnes"
        content: |
          ```sql
          SELECT date, temperature, humidite
          FROM Climat;
          ```
          Cette requête permet d'afficher uniquement les colonnes **date**, **temperature** et **humidite**. Elle est utile lorsque l'on souhaite se concentrer sur quelques variables spécifiques du dataset.
      - title: "Limiter le nombre de lignes affichées"
        content: |
          ```sql
          SELECT *
          FROM Climat
          LIMIT 1000;
          ```
          Cette requête permet d'afficher au maximum **1 000 lignes** du dataset **Climat**. L'option `LIMIT` est utile pour explorer rapidement les données sans charger tout le dataset.
      - title: "Trier les données"
        content: |
          ```sql
          SELECT *
          FROM Climat
          ORDER BY date DESC;
          ```
          Cette requête permet de trier les données par **date**, de la plus récente à la plus ancienne. Ici, `ORDER BY date DESC` indique que les résultats sont classés par ordre décroissant.
      - title: "Filtrer les données selon une condition"
        content: |
          ```sql
          SELECT *
          FROM Climat
          WHERE temperature > 30;
          ```
          Cette requête permet d'afficher uniquement les lignes où la **température est supérieure à 30**. La clause `WHERE` sert à filtrer les données selon une condition précise.
      - title: "Calculer une moyenne"
        content: |
          ```sql
          SELECT AVG(temperature) AS temperature_moyenne
          FROM Climat;
          ```
          Cette requête permet de calculer la **température moyenne** dans le dataset **Climat**. Ici, `AVG(temperature)` calcule la moyenne de la colonne **temperature**, et `AS temperature_moyenne` donne un nom plus clair au résultat.
---

### Connexion à une base de données

Avant de pouvoir créer un dataset, Superset doit d'abord être connecté à une source de données. Cette connexion se configure une seule fois : les feuilles ou tables ajoutées à cette étape deviennent ensuite disponibles pour créer autant de datasets que nécessaire.

### Créer un jeu de données

Une fois la source de données configurée dans Apache Superset, il faut sélectionner les tables que l'on souhaite rendre disponibles pour l'analyse. Dans Superset, ces tables sont appelées **Datasets**.

Pour créer un dataset, on va dans **Data > Datasets**, puis on clique sur **+ Dataset**. Il faut ensuite choisir la **base de données**, le **schéma** et la **table** à utiliser. Le dataset pourra ensuite servir à interroger les données, créer des graphiques et construire des tableaux de bord.

Une fois le dataset créé, il peut être exploité pour construire des graphiques et les intégrer dans un dashboard. Avant cette étape, il est important d'**explorer le jeu de données** afin de vérifier sa structure, ses valeurs et ses types de données. Superset propose pour cela l'interface **SQL Lab**, qui permet d'écrire des requêtes SQL pour analyser le dataset, filtrer les données, contrôler leur qualité ou créer un nouveau dataset à partir du jeu de données existant. Cette étape permet de mieux comprendre les données disponibles et de préparer les visualisations qui seront ensuite utilisées dans le dashboard.
