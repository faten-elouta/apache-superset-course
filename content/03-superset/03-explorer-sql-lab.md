---
title: "Explorer le dataset dans SQL Lab"
order: 3
phase: donnees
lead: "Avant de dessiner le moindre graphique, on regarde les données : quelles valeurs, quelles périodes, quelles stations, quelles anomalies ? SQL Lab sert à cela."
objectives:
  - "Ouvrir **SQL Lab** et interroger le dataset *Climat*."
  - "Lire et écrire les requêtes de base : `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, `GROUP BY`."
  - "Enregistrer le résultat d'une requête comme **nouveau dataset**."
takeaways:
  - "SQL Lab sert à **comprendre et vérifier** les données avant de les visualiser."
  - "`LIMIT` permet d'explorer vite sans charger toute la table."
  - "Les colonnes numériques stockées en TEXT s'utilisent avec `CAST(… AS REAL)`."
components:
  - type: numberlist
    checkable: true
    title: "Interroger le dataset dans SQL Lab"
    items:
      - content: "**Ouvrir SQL Lab** — dans la barre supérieure, menu **SQL** → **SQL Lab** (les autres entrées, *Saved Queries* et *Query History*, retrouvent vos requêtes passées)."
      - content: "**Choisir la source** — dans le panneau de gauche : base **PREVIZO**, schéma **main**, puis la table **Climat** pour afficher ses colonnes."
      - content: "**Nommer l'onglet de requête** — double-cliquer sur le titre de l'onglet pour lui donner un nom explicite."
      - content: "**Écrire la requête** — par exemple `SELECT * FROM Climat`. `SELECT *` sélectionne toutes les colonnes ; `FROM Climat` indique la table interrogée."
      - content: "**Exécuter** — cliquer sur **Run** (ou Ctrl + Entrée). Le sélecteur **Limit** fixe le nombre maximal de lignes renvoyées, par exemple 1 000."
      - content: "**Lire les résultats** — le tableau permet de vérifier le contenu des colonnes, les valeurs manquantes ou étranges, la période couverte."
      - content: "**Enregistrer comme dataset** (facultatif) — flèche à côté de **Save** → **Save dataset**. Le résultat de la requête devient un nouveau dataset réutilisable dans Explore."

  - type: sqlbuilder
    title: "Entraînez-vous sur un échantillon de la table Climat"
    intro: "Composez une requête avec les contrôles : le SQL est généré et exécuté en direct sur un **petit échantillon fictif** de 12 lignes."
    table: Climat
    text_numeric: [tmin_c, tmax_c, precip_mm]
    note: "Remarquez que les filtres et tris sur `tmin_c`, `tmax_c` et `precip_mm` utilisent `CAST(… AS REAL)` : ces colonnes sont stockées en TEXT dans la feuille Google Sheets."
    rows:
      - { nom_station: "Tours", date_mesure: "2026-05-01", tmin_c: "11.2", tmax_c: "22.8", precip_mm: "0.0" }
      - { nom_station: "Tours", date_mesure: "2026-05-02", tmin_c: "12.5", tmax_c: "24.1", precip_mm: "0.0" }
      - { nom_station: "Tours", date_mesure: "2026-05-03", tmin_c: "13.0", tmax_c: "23.3", precip_mm: "4.2" }
      - { nom_station: "Blois", date_mesure: "2026-05-01", tmin_c: "10.1", tmax_c: "19.7", precip_mm: "1.4" }
      - { nom_station: "Blois", date_mesure: "2026-05-02", tmin_c: "10.8", tmax_c: "20.9", precip_mm: "0.0" }
      - { nom_station: "Blois", date_mesure: "2026-05-03", tmin_c: "11.6", tmax_c: "20.0", precip_mm: "6.8" }
      - { nom_station: "Orléans", date_mesure: "2026-05-01", tmin_c: "9.4", tmax_c: "19.1", precip_mm: "2.0" }
      - { nom_station: "Orléans", date_mesure: "2026-05-02", tmin_c: "10.2", tmax_c: "20.3", precip_mm: "0.0" }
      - { nom_station: "Orléans", date_mesure: "2026-05-03", tmin_c: "10.9", tmax_c: "19.4", precip_mm: "8.1" }
      - { nom_station: "Bourges", date_mesure: "2026-05-01", tmin_c: "10.6", tmax_c: "20.2", precip_mm: "0.6" }
      - { nom_station: "Bourges", date_mesure: "2026-05-02", tmin_c: "11.3", tmax_c: "21.4", precip_mm: "0.0" }
      - { nom_station: "Bourges", date_mesure: "2026-05-03", tmin_c: "11.8", tmax_c: "19.9", precip_mm: "3.5" }

  - type: callout
    kind: tip
    title: "Défis"
    content: |
      1. Affichez uniquement `nom_station`, `date_mesure` et `tmax_c`, triés par `tmax_c` décroissant. Quelle est la journée la plus chaude ?
      2. Filtrez les jours de pluie (`precip_mm > 0`). Combien y en a-t-il ?
      3. Cochez **GROUP BY** et triez par `tmax_c` décroissant : quelle station a la moyenne la plus élevée ?

  - type: carousel
    title: "Les requêtes de base, adaptées à la table Climat"
    items:
      - title: "Afficher toutes les colonnes"
        content: |
          ```sql
          SELECT *
          FROM Climat;
          ```
          `SELECT *` sélectionne toutes les colonnes ; `FROM Climat` indique que les données viennent de la table **Climat**.
      - title: "Afficher seulement certaines colonnes"
        content: |
          ```sql
          SELECT nom_station, date_mesure, tmax_c, precip_mm
          FROM Climat;
          ```
          On se concentre sur les variables utiles à la question posée.
      - title: "Limiter le nombre de lignes"
        content: |
          ```sql
          SELECT *
          FROM Climat
          LIMIT 1000;
          ```
          `LIMIT` permet d'explorer rapidement sans charger toute la table.
      - title: "Trier les données"
        content: |
          ```sql
          SELECT *
          FROM Climat
          ORDER BY date_mesure DESC;
          ```
          `ORDER BY … DESC` classe les résultats du plus récent au plus ancien.
      - title: "Filtrer selon une condition"
        content: |
          ```sql
          SELECT nom_station, date_mesure, tmax_c
          FROM Climat
          WHERE CAST(tmax_c AS REAL) > 30;
          ```
          `WHERE` filtre les lignes : ici, les journées à plus de 30 °C. Le `CAST` est nécessaire car `tmax_c` est stockée en TEXT.
      - title: "Calculer une moyenne par station"
        content: |
          ```sql
          SELECT nom_station,
                 ROUND(AVG(CAST(tmax_c AS REAL)), 1) AS tmax_moyenne
          FROM Climat
          GROUP BY nom_station
          ORDER BY tmax_moyenne DESC;
          ```
          `AVG` calcule une moyenne, `GROUP BY` la calcule **pour chaque station**, `AS` donne un nom clair au résultat.

  - type: quiz
    items:
      - question: "Que fait `LIMIT 1000` ?"
        choices:
          - "Il filtre les valeurs supérieures à 1 000."
          - "Il renvoie au maximum 1 000 lignes."
          - "Il arrondit les résultats à 1 000 près."
        correct: [1]
      - question: "Quelle clause permet de calculer une moyenne **pour chaque station** ?"
        choices: ["WHERE", "ORDER BY", "GROUP BY", "LIMIT"]
        correct: [2]
        explanation: "`GROUP BY nom_station` regroupe les lignes par station ; la fonction `AVG` s'applique alors à chaque groupe."
---

Une fois le dataset créé, il est tentant de passer directement aux graphiques. C'est pourtant le moment d'**explorer** : vérifier la structure, les valeurs, la période couverte et les éventuels problèmes de qualité. Superset propose pour cela **SQL Lab**, un éditeur SQL connecté à vos bases.

On y écrit des requêtes pour analyser le dataset, filtrer les données, contrôler leur qualité ou créer un nouveau dataset à partir d'un résultat. C'est souvent là que naissent les **« trouvailles »** qui deviendront le message de votre récit.
