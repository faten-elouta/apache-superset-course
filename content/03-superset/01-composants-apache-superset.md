---
title: "Les composants d'Apache Superset"
order: 1
lead: "Superset suit un parcours simple : on connecte une source, on en expose une table comme dataset, on construit des graphiques, puis on les assemble dans un dashboard que l'on publie."
objectives:
  - "Connaître les **composants** de Superset et leur rôle."
  - "Retenir l'**ordre** du parcours, de la base de données à la publication."
  - "Relier chaque composant à un **concept du modèle** et à une **phase du processus**."
takeaways:
  - "**Base de données → Dataset → Chart → Dashboard → Publication** ; l'administration encadre l'ensemble."
  - "Deux interfaces de travail : **SQL Lab** (requêtes SQL) et **Explore** (graphiques sans code)."
  - "Superset **interroge** la source : il ne stocke pas les données lui-même."
components:
  - type: markdown
    content: |
      | Composant Superset | Rôle | Concept du modèle | Phase du processus | Où dans Superset |
      |---|---|---|---|---|
      | **Base de données** | Connexion à la source | Données (couche factuelle) | Explorer | *Settings → Database Connections* |
      | **Dataset** + **SQL Lab** | Table exposée et interrogée | **Collecteur** → **constats** | Explorer | *Datasets*, *SQL → SQL Lab* |
      | **Chart** | Une visualisation = un message | **Composant de dashboard** (rend un épisode) | Présenter | *Charts* / interface **Explore** |
      | **Dashboard** (ou onglet) | Assemblage ordonné des charts | **Dashboard** (rend un acte) | Structurer + Présenter | *Dashboards* |
      | **Publication** | Mise à disposition du public | **Récit visuel** | Présenter | Statut *Draft / Published* |
      | **Administration** | Utilisateurs, rôles, droits | — | Transversal | *Settings → Security* |

  - type: accordion
    title: "Le détail de chaque composant"
    items:
      - title: "Base de données"
        content: |
          La base de données est la source initiale des données. Elle peut être une base SQL classique (PostgreSQL, MySQL…) ou une source externe comme **Google Sheets**.

          Dans Superset, on crée d'abord une **connexion** vers cette source afin de pouvoir interroger les tables ou feuilles disponibles. Superset **accède** aux données sans les stocker dans son propre système.
      - title: "Dataset"
        content: |
          Le dataset est la couche intermédiaire entre la base de données et les visualisations. Il correspond à une table, une feuille Google Sheets ou une requête SQL exposée dans Superset.

          Une fois créé, il peut être configuré : colonne temporelle, **types**, **métriques**, **colonnes calculées**. Il sert de base structurée et réutilisable pour tous les graphiques.
      - title: "Chart"
        content: |
          Le chart est une visualisation créée à partir d'un dataset : courbe, barres, carte, tableau, indicateur…

          Dans l'interface **Explore**, on configure les axes, les métriques, les dimensions, les filtres et la période. Un bon chart répond à **une** question.
      - title: "Dashboard"
        content: |
          Le dashboard regroupe plusieurs charts dans une même interface, autour d'un sujet ou d'un cas d'usage.

          On y organise la mise en page (lignes, colonnes, onglets), on ajoute des textes (*Markdown*), des titres et des **filtres**. C'est là que la **structure narrative** prend forme.
      - title: "Publication"
        content: |
          La publication met le dashboard à disposition des utilisateurs concernés. Un dashboard est d'abord en **brouillon** (*Draft*) ; une fois vérifié, il passe en **publié** (*Published*) et devient visible dans la liste des dashboards.

          Selon les droits configurés, certains utilisateurs pourront seulement consulter le dashboard, d'autres le modifier.
      - title: "Administration"
        content: |
          L'administration gère l'environnement Superset : connexions, utilisateurs, rôles, permissions et sécurité. Elle détermine **qui peut consulter, modifier ou publier** données et visualisations.

          Elle n'est pas une étape du parcours mais un cadre qui l'accompagne du début à la fin.

  - type: callout
    kind: superset
    title: "Deux interfaces de travail"
    content: |
      **SQL Lab** est un environnement SQL pour interroger, vérifier, nettoyer ou joindre les données avant de les visualiser. **Explore** est un constructeur de graphiques sans code. Vous utiliserez les deux, dans cet ordre.

  - type: sorter
    title: "Remettez le parcours Superset dans l'ordre"
    instruction: "Utilisez les flèches pour ordonner les étapes, puis vérifiez."
    items:
      - "Connecter la **base de données** (ici, les feuilles Google Sheets PREVIZO)"
      - "Créer le **dataset** *Climat* à partir de la table"
      - "Explorer et vérifier les données dans **SQL Lab**"
      - "Construire un **chart** dans Explore"
      - "Assembler les charts dans un **dashboard**"
      - "**Publier** le dashboard"
    explanation: "Chaque étape prépare la suivante : pas de dataset sans connexion, pas de chart sans dataset, pas de dashboard sans charts. La vérification dans SQL Lab vient **avant** les graphiques : c'est la phase Explorer du processus."
---

Apache Superset s'organise autour de quelques **composants** qui s'enchaînent. Les comprendre avant de commencer évite de se perdre dans les menus : chaque étape de la pratique correspond à l'un d'eux.

Ces composants s'alignent aussi sur le modèle vu en leçon 2. La **base de données**, le **dataset** et les requêtes SQL (des **collecteurs**) relèvent de la **couche factuelle** : phase *Explorer*. Le **dashboard** rend un **acte** de votre intrigue et chaque **chart** rend un **épisode**, donc un message : **couche présentationnelle**, phase *Présenter*.
