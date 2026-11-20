---
title: "Connecter les données et créer un dataset"
order: 2
phase: donnees
lead: "Première mise en pratique : relier Superset aux feuilles Google Sheets du projet PREVIZO, puis exposer la feuille Climat comme dataset prêt à l'emploi."
objectives:
  - "Créer une **connexion** Google Sheets dans Superset."
  - "Créer le **dataset** *Climat* à partir de cette connexion."
  - "**Vérifier et corriger les types** de colonnes avant toute visualisation."
takeaways:
  - "La connexion se configure **une seule fois** ; on peut ensuite créer autant de datasets que nécessaire."
  - "Un schéma (ici **main**) regroupe les tables disponibles dans une base."
  - "Des nombres stockés en **TEXT** doivent être convertis (`CAST`) avant de calculer une moyenne ou de tracer une courbe."
components:
  - type: heading
    text: "1. Connecter la source de données"
    intro: "Avant de créer un dataset, Superset doit être connecté à une source. Les feuilles ajoutées à cette étape deviennent ensuite disponibles comme tables."

  - type: numberlist
    checkable: true
    items:
      - content: "**Accéder aux connexions** — dans le menu **Settings** (en haut à droite), section **Data**, cliquer sur **Database Connections**."
      - content: "**Ajouter une base de données** — sur la page **Databases**, cliquer sur **+ Database**."
      - content: "**Choisir le type de source** — à l'étape *Select a database to connect*, dérouler **Supported databases** et sélectionner **Google Sheets**. Superset prend aussi en charge PostgreSQL, MySQL, BigQuery et de nombreux autres moteurs."
      - content: "**Nommer la connexion et ajouter les feuilles** — donner un nom (par exemple **PREVIZO**), puis pour chaque feuille : un **Google Sheet Name** (*Climat*, *stations*, *capteurs*…) et l'**URL** de la feuille. Cliquer sur **+ Add sheet** pour chaque feuille supplémentaire."
      - content: "**Terminer** — cliquer sur **Connect** puis **Finish**. La connexion apparaît dans la liste des **Databases**."

  - type: heading
    text: "2. Créer le dataset Climat"
    intro: "Une fois la source configurée, on sélectionne la table à rendre disponible pour l'analyse : c'est le **dataset**."

  - type: numberlist
    checkable: true
    items:
      - content: "**Datasets** — dans le menu supérieur, cliquer sur **Datasets**, puis sur **+ Dataset**."
      - content: "**Base de données** — sélectionner la connexion créée (**PREVIZO**, de type Google Sheets)."
      - content: "**Schéma** — choisir **main**. Un schéma est un espace d'organisation dans une base de données : il regroupe les tables et indique à Superset où chercher."
      - content: "**Table** — sélectionner **Climat**."
      - content: "**Vérifier les colonnes** — le panneau **Table columns** liste les colonnes détectées et leur type : `departement` (REAL), `code_station` (REAL), `nom_station` (TEXT), `latitude` (TEXT), `longitude` (TEXT), `altitude_m` (REAL), `date_mesure` (DATE), `timestamp_mesure` (REAL), `precip_mm` (TEXT), `tmin_c` (TEXT), `tmax_c` (TEXT)."
      - content: "**Créer** — cliquer sur **Create and explore dataset**. Le dataset apparaît désormais dans la liste **Datasets** ; avant de construire un graphique, on va d'abord le vérifier."

  - type: heading
    text: "3. Vérifier et préparer le dataset"

  - type: callout
    kind: warning
    title: "Des nombres stockés comme du texte"
    content: |
      Regardez les types détectés : `tmin_c`, `tmax_c`, `precip_mm`, `latitude` et `longitude` sont en **TEXT**. Pour Superset, ce sont des chaînes de caractères : impossible d'en calculer une **moyenne**, de les **trier** numériquement ou de les placer sur une **carte** sans les convertir.

      C'est typique de la phase *Données* : **on vérifie avant de visualiser**, sinon les graphiques seront faux ou impossibles à construire.

  - type: numberlist
    checkable: true
    items:
      - content: "Dans la liste des datasets, ouvrir **Climat** avec l'icône **Edit** (crayon)."
      - content: "Onglet **Columns** : vérifier que `date_mesure` est cochée **Is temporal** (colonne temporelle) et la définir comme **Default datetime**."
      - content: |
          Onglet **Calculated columns** : ajouter une colonne par mesure numérique, par exemple :

          ```sql
          CAST(tmax_c AS REAL)
          ```
          nommée `tmax`, et de même `tmin` = `CAST(tmin_c AS REAL)`, `precip` = `CAST(precip_mm AS REAL)`.
      - content: "Onglet **Metrics** (facultatif) : créer une métrique réutilisable `tmax_moyenne` = `AVG(CAST(tmax_c AS REAL))`, puis **Save**."

  - type: quiz
    items:
      - question: "Pourquoi convertir `tmax_c` avant de construire un graphique ?"
        choices:
          - "Pour que la colonne s'affiche en couleur."
          - "Parce qu'elle est stockée en TEXT : sans conversion, Superset ne peut pas en calculer la moyenne."
          - "Parce que Superset ne lit pas les colonnes dont le nom finit par `_c`."
        correct: [1]
        explanation: "Une agrégation numérique (`AVG`, `SUM`, `MAX`…) nécessite une colonne numérique. `CAST(tmax_c AS REAL)` effectue la conversion."
      - question: "Dans quel ordre fait-on les opérations ?"
        choices:
          - "Créer le dataset, puis la connexion."
          - "Créer la connexion, puis le dataset, puis vérifier les types."
          - "Créer un graphique, puis le dataset."
        correct: [1]
        explanation: "La connexion donne accès aux tables ; le dataset expose une table ; la vérification vient avant toute visualisation."
---

La connexion à une source se configure **une seule fois** : les feuilles ou tables ajoutées à cette étape deviennent ensuite disponibles pour créer autant de datasets que nécessaire.

Cette étape relève entièrement de la phase **Données** de la méthode : on rend les données accessibles, puis on **vérifie** qu'elles sont exploitables. Cochez chaque étape au fur et à mesure dans Superset : votre progression est enregistrée.
