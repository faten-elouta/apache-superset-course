---
title: "Structurer les réponses : intrigue, actes, épisodes"
order: 7
phase: structuration
lead: "Les messages sont prêts : il faut maintenant les organiser en une intrigue que le public peut suivre. Choisir une structure, c'est décider de ce que le lecteur voit d'abord, ensuite, et sur quoi il termine."
objectives:
  - "Mener les activités de la phase : **audience**, **sélection des messages**, **structure**, **actes et épisodes**."
  - "Connaître les principales **structures narratives** et les **niveaux d'interaction**."
  - "Traduire une intrigue en **mise en page de dashboard** dans Superset."
takeaways:
  - "Une **intrigue** = des **actes** (parties majeures) faits d'**épisodes** (un message chacun)."
  - "Structures : **trois actes**, **pyramide inversée**, **question → preuves → retour**, **verre à martini**…"
  - "Du **guidé par l'auteur** au **guidé par le lecteur** : le verre à martini est un hybride."
components:
  - type: numberlist
    title: "Les activités de la phase"
    items:
      - content: "**Déterminer l'audience** : à qui s'adresse le récit ? Grand public, décideurs, experts ?"
      - content: "**Sélectionner les messages** utiles à cette audience : tous les messages validés n'entrent pas forcément dans le récit."
      - content: "**Choisir une structure narrative** (voir ci-dessous)."
      - content: "**Associer les messages aux actes et aux épisodes** : chaque épisode raconte un message ; chaque acte regroupe des épisodes autour d'une information majeure."
      - content: "**Rédiger les actes et les épisodes** : un épisode annote son message avec le contexte, la portée et l'explication qui le rendent compréhensible."

  - type: heading
    text: "Structures narratives"
    intro: "La structure organise l'ensemble des messages ; l'**ordre** règle leur succession à l'intérieur de chaque partie. Plusieurs structures viennent de la fiction, d'autres du journalisme."

  - type: structures
    intro: "Pour chaque structure : son **schéma**, puis un **exemple de dashboard PREVIZO** construit avec cette structure. Cliquez sur **▶ Voir l'ordre de lecture** pour suivre, zone par zone, le chemin du regard du lecteur."
    items:
      - key: pyramide
        title: "Pyramide inversée"
        source: "Kosara — pratique du journalisme"
        content: "Selon Kosara, la plupart des récits de données journalistiques suivent la **pyramide inversée** : l'essentiel d'abord, puis les détails par ordre d'importance décroissante, sans fin marquée. Elle convient à un **public pressé** qui doit décider : le lecteur peut s'arrêter à tout moment, il aura lu le plus important."
        superset: "les indicateurs clés (*Big Number*, *Big Number with Trendline*) sur la première ligne, les graphiques de preuve au milieu, une *Table* de détail en bas ; le titre du dashboard énonce le message."
      - key: trois-actes
        title: "Trois actes"
        source: "Pyramide de Freytag — la fiction ; CineCubes"
        content: "Issue de la fiction : une **exposition** (contexte et concepts principaux), une **montée** où les constats s'enchaînent vers le message principal, une **résolution** qui conclut. Le système CineCubes organise de même un récit de données en actes : introduction, contexte, puis synthèse des points marquants. Idéal pour une **démonstration** complète."
        superset: "un onglet (*Tabs*) par acte — *Contexte*, *Analyse*, *Recommandations*. Chaque onglet est un dashboard du modèle : il rend un acte."
        figure: "/assets/images/figures/structure-trois-actes.jpg"
        figure_alt: "Structure en trois actes"
      - key: question
        title: "Question → preuves → retour"
        source: "Kosara — inspiré du récit classique"
        content: "Une structure qui ne révèle pas tout d'emblée : on **ouvre par une question ou une affirmation**, on **apporte les preuves** une à une, puis on **conclut en reliant les preuves** à la question initiale. Efficace pour **convaincre** ou pour éveiller la curiosité."
        superset: "un en-tête (*Header* ou *Markdown*) qui pose la question, une ligne de charts titrés « Preuve 1, 2, 3 », un bloc *Markdown* final qui répond explicitement."
      - key: martini
        title: "Verre à martini"
        source: "Segel et Heer (2010) — structure hybride"
        content: "Segel et Heer distinguent les récits **guidés par l'auteur** (chemin linéaire, beaucoup d'explications, pas d'interaction), **guidés par le lecteur** (pas d'ordre imposé, forte interactivité) et **hybrides**. Dans le **verre à martini**, la *tige* est une courte séquence guidée par l'auteur ; puis le récit s'ouvre comme le *bol* du verre, et le lecteur explore librement. *Variante journalistique :* le format « sablier » (figure d'origine ci-dessous) revient à une conclusion en fin de récit."
        superset: "un bloc guidé en haut (KPI + texte du message), puis une large zone d'exploration avec des **filtres natifs** (station, période) qui agissent sur tous les charts."
        figure: "/assets/images/figures/structure-martini.jpg"
        figure_alt: "Format sablier ou verre à martini : l'accroche et les idées clés en haut, la chronologie au milieu, la conclusion ou l'appel à l'action en bas"
      - key: kabob
        title: "Kabob"
        source: "Écriture de récits d'entreprise"
        content: "Une anecdote ou un fait d'**ancrage** ouvre le récit, un paragraphe clé en donne la portée, plusieurs blocs de **corps** apportent les preuves, puis le récit **revient à l'ancrage** pour conclure. Utile quand un point central doit rester présent du début à la fin : défendre une recommandation, évaluer une action."
        superset: "le KPI d'ancrage en pleine largeur en haut, trois à cinq charts qui l'éclairent, puis un bloc *Markdown* final qui rappelle le chiffre d'ancrage et formule la recommandation."
        figure: "/assets/images/figures/structure-kabob.jpg"
        figure_alt: "Le kabob : anecdote, paragraphe clé, trois blocs de corps, anecdote"

  - type: sorter
    title: "Reconstituez une pyramide inversée"
    instruction: "Vous construisez le dashboard PREVIZO pour la direction. Ordonnez ses zones de haut en bas."
    items:
      - "Le titre-message : *Tours, la plus forte hausse du réseau en mai*"
      - "Les KPI : 23,4 °C · +6,6 °C · ≈ +4 °C pour les autres stations"
      - "La courbe d'évolution et le classement par station"
      - "La table de détail par station"
    explanation: "L'importance décroît de haut en bas : le lecteur pressé s'arrête après les KPI, le lecteur curieux descend jusqu'à la table."

  - type: callout
    kind: info
    title: "Et l'ordre des messages ?"
    content: |
      À l'intérieur d'un acte, l'ordre compte aussi. La littérature étudie notamment l'ordre **chronologique** ou **non chronologique** des récits temporels (Lan et al. ont relevé six schémas sur 80 récits ; l'ordre non chronologique peut rendre le récit plus expressif sans nuire à sa compréhension), les **frises chronologiques** (14 choix de conception : représentation, échelle, disposition) et le coût cognitif des **transitions** entre graphiques (Hullman et al.) : regrouper les graphiques qui partagent une mesure, une période ou une zone facilite la lecture.

  - type: heading
    text: "Exemple : l'intrigue PREVIZO"
    intro: |
      | Acte | Épisodes (un message chacun) | Rendu dans Superset |
      |---|---|---|
      | **1. La situation** | Le réseau a connu un printemps nettement plus chaud | KPI *Big Number with Trendline* |
      | **2. L'évolution** | Les maximales montent depuis mars · Elles s'accélèrent en mai | Courbe mensuelle par station |
      | **3. Les stations** | Tours est la plus chaude et la plus en hausse · Les autres gagnent environ 4 °C | Barres triées · table de détail |

  - type: chooser
    id: chooser-structure
    question: "Quelle structure pour quelle situation ?"
    intro: "Choisissez une situation pour voir la structure recommandée."
    options:
      - label: "La direction veut savoir en 30 secondes si le réseau est en alerte."
        title: "Pyramide inversée"
        text: "Public pressé qui doit décider : le signal principal en premier, les détails ensuite."
      - label: "Vous présentez une étude complète sur la chaleur du printemps."
        title: "Trois actes"
        text: "Une démonstration qui progresse : contexte, analyse, puis recommandations — un onglet par acte."
      - label: "Des chargés d'études doivent pouvoir filtrer par station, mais retenir la même conclusion."
        title: "Verre à martini"
        text: "Une courte séquence guidée par l'auteur (la tige), puis une exploration libre avec les filtres (le bol)."
      - label: "Vous voulez convaincre que Tours doit être équipée en priorité."
        title: "Question → preuves → retour (ou kabob)"
        text: "Posez la question ou l'affirmation, apportez les preuves une à une, puis revenez à la question avec la recommandation."

  - type: quiz
    items:
      - question: "Dans le modèle, un **épisode**…"
        choices:
          - "regroupe plusieurs actes"
          - "raconte un message, avec son contexte et son explication"
          - "est une requête SQL"
        correct: [1]
      - question: "Quelle activité vient en **premier** dans la phase Structurer les réponses ?"
        choices: ["Rédiger les épisodes", "Déterminer l'audience", "Associer les messages aux actes", "Choisir les couleurs"]
        correct: [1]
        explanation: "L'audience conditionne la sélection des messages et le choix de la structure."
      - question: "Un récit sans ordre imposé, très interactif et peu commenté est…"
        choices: ["guidé par l'auteur", "guidé par le lecteur", "en pyramide inversée"]
        correct: [1]
---

Dans le processus, la phase **Structurer les réponses** porte la **couche structurelle** du modèle. À partir des messages validés, on construit une **intrigue** : on la découpe en **actes**, des parties majeures, eux-mêmes composés d'**épisodes**, qui racontent chacun un message.

L'enquête menée auprès des journalistes montre que cette phase est **souvent sous-estimée** : la structuration se cache dans l'écriture de l'article, ou n'est même pas mentionnée. L'expérience menée avec des étudiants montre pourtant que sa complétion est fortement liée à la qualité du récit (corrélation de 0,85).
