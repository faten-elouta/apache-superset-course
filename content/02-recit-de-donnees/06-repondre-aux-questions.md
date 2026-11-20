---
title: "Répondre aux questions : objectif, question, message"
order: 6
phase: intention
lead: "La phase centrale du processus : formuler l'objectif et les questions, tirer des messages des constats, puis valider ces messages. C'est elle qui donne au récit son intention."
objectives:
  - "Décliner un **objectif d'analyse** en **questions analytiques** précises."
  - "Formuler un **message** à partir d'un constat, avec ses **personnages** et ses **mesures**."
  - "**Valider** un message avant de le structurer."
takeaways:
  - "Un objectif pose **une ou plusieurs questions** ; une question appelle **des messages** (parfois aucun)."
  - "Un message = **interprétation** d'un constat + **description** (analyse, implications, actions)."
  - "Un message se **valide** : avis d'expert, comparaison avec l'état de l'art, recoupement."
components:
  - type: heading
    text: "1. Formuler l'objectif et les questions"
    intro: |
      L'**objectif d'analyse** est l'information que le récit doit expliquer et transmettre : son thème global. Il fait souvent déjà apparaître des **personnages** (*le réseau PREVIZO*, *le printemps 2026*). Chaque **question analytique** en explore un aspect particulier.

      Cette activité peut **ouvrir** le processus, mais elle peut aussi survenir **après** une exploration (un graphique fait naître une question), après un message (qui en soulève une nouvelle), ou même pendant la structuration (quand on s'aperçoit qu'il manque un élément à l'intrigue).

  - type: markdown
    content: |
      **Exemple PREVIZO**

      - **Objectif** : rendre compte de la chaleur du printemps 2026 sur le réseau de stations.
      - **Question 1** : comment la température maximale a-t-elle évolué de janvier à mai ?
      - **Question 2** : quelles stations sont les plus chaudes en mai ?
      - **Question 3** : la hausse s'accompagne-t-elle d'un manque de pluie ?

  - type: accordion
    open_first: false
    items:
      - title: "Rendre une question précise : structures types et exemples"
        content: |
          Une bonne question analytique est précise, utile pour l'action et ancrée dans les données disponibles : **quoi, où, quand, par rapport à quoi ?**

          **Structures types :**
          - Pourquoi **[phénomène observé]** s'est-il produit pendant **[période]** ?
          - Comment évolue **[mesure]** selon **[station / zone / période / condition météo]** ?
          - Quelle est la différence entre **[personnage A]** et **[personnage B]** en termes de **[mesure]** ?
          - Quel facteur explique le mieux **[résultat inattendu]** ?

          **Exemples de transformation :**
          - Vague → *« Comment va le cours d'eau ? »*
            Précise → *« Comment le niveau a-t-il évolué sur les 7 derniers jours à Blois, et a-t-il franchi le seuil de vigilance ? »*
          - Vague → *« Il y a un risque de crue ? »*
            Précise → *« Quelles stations dépassent le seuil de vigilance crue aujourd'hui, et quelle tendance est prévue à 48 heures ? »*

  - type: classifier
    title: "Question vague ou question précise ?"
    instruction: "Une question précise dit quoi mesurer, où, quand et par rapport à quoi."
    categories: ["Vague", "Précise"]
    items:
      - text: "« Il fait chaud en ce moment ? »"
        answer: 0
        explanation: "Ni mesure, ni lieu, ni période, ni référence."
      - text: "« Quelles stations ont dépassé 30 °C de maximale plus de trois jours en mai 2026 ? »"
        answer: 1
        explanation: "Mesure, seuil, période et personnages sont définis."
      - text: "« Comment évoluent les précipitations ? »"
        answer: 0
        explanation: "Où ? Sur quelle période ? Comparées à quoi ?"
      - text: "« Le cumul de pluie d'avril à Tours est-il inférieur à celui d'avril 2025 ? »"
        answer: 1
        explanation: "Comparaison explicite à une référence : la réponse est mesurable."

  - type: heading
    text: "2. Formuler les messages"
    intro: |
      Pendant l'exploration, des constats apparaissent et sont validés. Ils sont alors **traduits en messages** pour le public. Un constat peut produire plusieurs messages, et un message peut s'appuyer sur plusieurs constats. Un message comprend :

      - l'**interprétation** du constat ;
      - sa **description** : l'analyse détaillée, ses **implications** et les **actions** recommandées ;
      - ses **personnages** (aspect qualitatif : *Tours*, *le réseau*) et ses **mesures** (aspect quantitatif : *température maximale moyenne*, *+6,6 °C*), qui doivent appartenir à l'univers compréhensible par le public.

  - type: markdown
    content: |
      | | Constat (couche factuelle) | Message (couche intentionnelle) |
      |---|---|---|
      | **Exemple** | La moyenne de `tmax_c` à Tours passe de 16,8 °C en avril à 23,4 °C en mai ; les autres stations gagnent environ 4 °C. | Tours connaît la plus forte hausse du réseau en mai (+6,6 °C) : son suivi doit être renforcé. |
      | **Répond à** | Une requête (collecteur) | Une question analytique, pour un public |
      | **Personnages / mesures** | — | *Tours*, *réseau* / *température maximale*, *+6,6 °C* |

  - type: callout
    kind: tip
    title: "Des patterns pour formuler le message"
    content: |
      Les **patterns narratifs** recensés par Bach et al. (2018) aident à donner une forme au message :

      | Pattern | Usage | Exemple |
      |---|---|---|
      | **Comparer** | Mettre deux personnages ou périodes en regard | Tours a gagné 6,6 °C, contre environ 4 °C pour les autres stations. |
      | **Concrétiser** | Rendre une mesure tangible | +6,6 °C en un mois, c'est passer d'un temps d'avril à un temps d'été. |
      | **Révéler progressivement** | Dévoiler le message étape par étape | Les maximales montent depuis mars, s'accélèrent en mai, et Tours décroche. |
      | **Question rhétorique** | Capter l'attention | Le printemps 2026 annonce-t-il un été caniculaire ? |
      | **Appel à l'action** | Orienter vers une décision | Le suivi de Tours doit être renforcé dès juin. |
      | **Familiariser** | Relier à un repère connu | À Tours, mai 2026 a été plus chaud qu'un mois de juin moyen. |
      | **Répéter** | Renforcer par plusieurs signaux | Chaleur, absence de pluie, hausse continue : tous les signaux convergent. |

  - type: heading
    text: "3. Valider les messages"
    intro: |
      Un message n'est publié qu'après **validation** : en demandant l'avis d'un **expert**, en le comparant à l'**état de l'art**, ou en le recoupant avec d'autres sources. On peut valider chaque message dès sa formulation, ou tous ensemble, notamment quand un expert extérieur intervient. Dans l'exemple de l'Alsace, le message sur la mortalité a été **confirmé par le doyen de la faculté de médecine de Strasbourg**.

      Après validation, plusieurs suites sont possibles : poser une nouvelle question, explorer davantage, ou passer à la phase **Structurer les réponses** quand les questions ont reçu une réponse satisfaisante.

  - type: sorter
    title: "Remettez la phase dans l'ordre"
    instruction: "Ordonnez les activités dans leur enchaînement le plus naturel."
    items:
      - "Formuler l'**objectif** : rendre compte de la chaleur du printemps sur le réseau"
      - "Poser la **question** : quelles stations sont les plus chaudes en mai ?"
      - "Obtenir et valider un **constat** dans SQL Lab : Tours, 23,4 °C de moyenne"
      - "Formuler le **message** : Tours est la station la plus chaude et la plus en hausse"
      - "Faire **valider** le message par une experte du climat"
    explanation: "Le constat relève de la phase Explorer : c'est l'aller-retour typique entre les deux premières phases. En pratique, on revient souvent en arrière — par exemple poser une nouvelle question après un message."

  - type: quiz
    items:
      - question: "Quelle est la différence entre un **constat** et un **message** ?"
        choices:
          - "Aucune, ce sont des synonymes."
          - "Le constat est un résultat de l'analyse ; le message en est l'interprétation, formulée pour répondre à une question et destinée à un public."
          - "Le message est toujours un nombre, le constat toujours une phrase."
        correct: [1]
      - question: "Dans le message « Tours connaît la plus forte hausse du réseau en mai (+6,6 °C) », quels sont les **personnages** ?"
        choices: ["Tours", "le réseau", "+6,6 °C", "mai"]
        correct: [0, 1]
        explanation: "*Tours* et *le réseau* sont les entités mises en avant (aspect qualitatif). *+6,6 °C* est une **mesure** ; *mai* situe la période."
      - question: "Comment valide-t-on un message ?"
        choices:
          - "En le mettant en couleur"
          - "Avec l'avis d'un expert, une comparaison à l'état de l'art ou un recoupement"
          - "En le répétant dans plusieurs graphiques"
        correct: [1]
---

Dans le processus, la phase **Répondre aux questions** porte la **couche intentionnelle** du modèle. Elle réunit trois activités : **formuler l'objectif et les questions**, **formuler les messages** et **valider les messages**.

Dans la littérature, cette phase est la grande absente. Les journalistes de données, eux, y consacrent beaucoup d'attention. L'expérience menée avec des étudiants de master montre aussi qu'elle pèse autant que les autres phases sur la qualité du récit. Les écrire noir sur blanc — l'objectif, les questions, les messages — aide d'ailleurs à se lancer.
