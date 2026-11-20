---
title: "Du message au dashboard : l'exemple PREVIZO"
order: 5
phase: [donnees, intention, structuration, presentation]
lead: "On assemble tout : à partir de la fiche récit, on construit dans Superset un dashboard complet qui répond à une question précise. Les quatre phases de la méthode, de bout en bout."
objectives:
  - "Construire trois charts dans **Explore** : un indicateur, une courbe et des barres."
  - "Les assembler dans un **dashboard** organisé selon une structure narrative."
  - "Ajouter titres-messages, texte et filtres, puis **publier**."
takeaways:
  - "Chaque chart répond à **une** question et porte un **titre-message**."
  - "La **disposition** du dashboard traduit la structure narrative choisie (ici, la pyramide inversée)."
  - "On publie seulement après avoir vérifié que le message ressort **en 10 secondes**."
components:
  - type: worksheet
    id: fiche-recit
    mode: recall
    title: "Votre fiche récit"
    intro: "Voici ce que vous avez préparé à l'étape « Mise en pratique ». Vous pouvez suivre l'exemple ci-dessous ou l'adapter à votre propre fiche."
    fields:
      - { key: question, label: "Question analytique", phase: intention }
      - { key: message, label: "Message clé", phase: intention }
      - { key: structure, label: "Structure narrative", phase: structuration }
      - { key: graphiques, label: "Graphiques envisagés", phase: structuration }

  - type: heading
    text: "Phase 1 · Données — le point de départ"
    intro: |
      On part du dataset **Climat** préparé à l'étape « Connecter les données » : `date_mesure` est la colonne temporelle et les colonnes calculées `tmax`, `tmin` et `precip` sont numériques. Si ce n'est pas le cas, revenez à cette étape : **aucun graphique fiable sans données vérifiées**.

  - type: heading
    text: "Phase 2 · Intention — la question et le message"
    intro: |
      - **Question :** *Comment la température maximale a-t-elle évolué de janvier à mai 2026, et quelles stations sont les plus chaudes ?*
      - **Message clé :** *Les maximales ont bondi en mai, surtout à Tours (+6,6 °C en un mois) : le suivi de cette station doit être renforcé.*
      - **Public :** les gestionnaires du réseau, qui doivent **prioriser** leurs actions.

  - type: heading
    text: "Phase 3 · Structuration — une pyramide inversée"
    intro: |
      Le public est pressé et doit décider : on place la conclusion en haut, les preuves ensuite, le détail en bas.

      | Zone du dashboard | Contenu | Rôle dans le récit |
      |---|---|---|
      | **En-tête** | Titre-message + bloc texte | Annonce la conclusion |
      | **Ligne 1** | KPI *Big Number with Trendline* | Le chiffre clé, en un coup d'œil |
      | **Ligne 2** | Courbe mensuelle par station | Preuve n° 1 : l'évolution |
      | **Ligne 3** | Barres triées par station | Preuve n° 2 : le classement |
      | **Bas de page** | Table de détail | Vérification |

  - type: heading
    text: "Phase 4 · Présentation — construire dans Superset"

  - type: video
    placeholder: true
    label: "Démonstration filmée : de la création du premier chart à la publication du dashboard."

  - type: numberlist
    checkable: true
    title: "Chart 1 — La courbe d'évolution"
    items:
      - content: "Dans **Datasets**, cliquer sur **Climat** : Superset ouvre l'interface **Explore**. Dans le sélecteur de visualisation, choisir **Line Chart**."
      - content: "**X-axis** : `date_mesure`. **Time grain** : *Month* pour une valeur par mois."
      - content: "**Metrics** : `AVG(tmax)` (ou la métrique `tmax_moyenne` créée dans le dataset)."
      - content: "**Dimensions** : `nom_station` pour obtenir une courbe par station."
      - content: "Cliquer sur **Update chart** (ou **Run**) pour afficher la courbe, puis ajuster la période dans **Filters → Time range** (janvier à mai 2026)."
      - content: "Donner un **titre-message** : *« Tours : la plus forte hausse du réseau en mai »*, puis **Save** → **Add to dashboard** → créer un nouveau dashboard *« PREVIZO — Chaleur du printemps 2026 »*."

  - type: numberlist
    checkable: true
    title: "Chart 2 — Le classement par station"
    items:
      - content: "Depuis le dataset **Climat**, choisir **Bar Chart**."
      - content: "**X-axis** : `nom_station`. **Metrics** : `AVG(tmax)`. Filtrer la période sur **mai 2026**."
      - content: "Dans **Customize** (ou les options du X-axis), trier par valeur **décroissante**."
      - content: "Titre-message : *« En mai, Tours est la station la plus chaude »*. **Save** et ajouter au même dashboard."

  - type: numberlist
    checkable: true
    title: "Chart 3 — L'indicateur clé"
    items:
      - content: "Choisir **Big Number with Trendline**. **Temporal X-axis** : `date_mesure`, **Time grain** : *Month*. **Metric** : `AVG(tmax)`."
      - content: "Le grand chiffre affiche la dernière période (mai) ; la courbe miniature montre la tendance. Ajouter un sous-titre explicite : *« Température maximale moyenne du réseau (°C) »*."
      - content: "**Save** et ajouter au dashboard."

  - type: numberlist
    checkable: true
    title: "Assembler, filtrer et publier le dashboard"
    items:
      - content: "Ouvrir le dashboard puis cliquer sur **Edit dashboard**."
      - content: "Depuis l'onglet **Layout elements**, glisser un **Header** (titre-message du dashboard) et un bloc **Markdown** de deux ou trois phrases qui énonce le message clé et l'action attendue."
      - content: "Disposer les charts selon la pyramide : KPI en haut, courbe, puis barres. Ajouter une **Table** de détail en bas si besoin."
      - content: "Ajouter des **filtres natifs** (*Add or edit filters*) : un filtre **Value** sur `nom_station` et un filtre **Time range** sur `date_mesure`."
      - content: "Cliquer sur **Save**. Relire le dashboard comme si vous le découvriez : le message ressort-il en 10 secondes ?"
      - content: "Cliquer sur le badge **Draft** à côté du titre pour passer le dashboard en **Published** : il devient visible pour les utilisateurs autorisés."

  - type: callout
    kind: method
    title: "Si votre structure est différente"
    content: |
      - **Trois actes** → créez trois **Tabs** : *Contexte*, *Analyse*, *Recommandations*.
      - **Verre à martini** → message en haut, filtres et graphiques interactifs au centre, bloc Markdown de synthèse en bas.
      - **Kabob** → gardez le KPI d'ancrage dans l'en-tête et terminez par une recommandation.

  - type: sorter
    title: "Ordre de lecture du dashboard"
    instruction: "Selon la pyramide inversée, dans quel ordre le lecteur doit-il rencontrer ces éléments ?"
    items:
      - "Le titre-message : *Les maximales ont bondi en mai, surtout à Tours*"
      - "Le KPI : température maximale moyenne de mai, avec sa tendance"
      - "La courbe mensuelle par station"
      - "Les barres triées par station"
      - "La table de détail"
    explanation: "Conclusion d'abord, preuves ensuite, détail en dernier : le lecteur pressé s'arrête après le KPI, le lecteur curieux descend jusqu'à la table."
---

Cette étape met en œuvre **toute la méthode** sur un cas réel. Suivez les quatre phases dans l'ordre : vous constaterez que la plupart des décisions (quels graphiques, dans quel ordre, avec quels titres) ont déjà été prises **avant** d'ouvrir Explore, grâce à la fiche récit.
