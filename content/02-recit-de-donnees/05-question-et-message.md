---
title: "Formuler la question et le message clé"
order: 5
phase: intention
lead: "Un graphique ne suffit pas : pour avoir de l'impact, il doit servir un objectif clair et porter un message. Tout commence par une bonne question."
objectives:
  - "Choisir l'**objectif** d'un récit parmi six intentions possibles."
  - "Transformer une question **vague** en question analytique **précise**."
  - "Formuler un **message clé** à l'aide d'un pattern narratif."
takeaways:
  - "Une bonne question est **précise**, **mesurable** et **utile pour l'action** : quoi, où, quand, par rapport à quoi."
  - "Le message clé tient en **une phrase** et se lit comme une conclusion, pas comme un sujet."
  - "Les **patterns narratifs** (comparer, concrétiser, appeler à l'action…) aident à formuler ce message."
components:
  - type: summary_cards
    title: "Six intentions possibles"
    items:
      - title: "Informer"
        content: |
          Partager un état des lieux factuel.

          *Ex. : les précipitations de mai sont inférieures de 30 % à la normale.*
      - title: "Comparer"
        content: |
          Mettre deux situations en regard.

          *Ex. : Tours a reçu 2,7 fois plus de pluie que Romorantin.*
      - title: "Expliquer"
        content: |
          Montrer pourquoi un résultat apparaît.

          *Ex. : la hausse des maximales coïncide avec l'absence de pluie.*
      - title: "Alerter"
        content: |
          Signaler un risque ou une anomalie.

          *Ex. : trois stations dépassent 30 °C depuis cinq jours.*
      - title: "Décider"
        content: |
          Apporter les éléments pour choisir une action.

          *Ex. : renforcer le suivi des stations les plus exposées.*
      - title: "Prédire"
        content: |
          Projeter une tendance pour anticiper.

          *Ex. : à ce rythme, le seuil de vigilance sera atteint fin juin.*

  - type: accordion
    items:
      - title: "Formuler une question analytique précise"
        content: |
          Une bonne question analytique est précise, utile pour l'action et directement ancrée dans les données disponibles.

          Elle ne demande pas simplement : **« Comment va le cours d'eau ? »**

          Elle cherche à comprendre une situation mesurable : **« Pourquoi le niveau du cours d'eau a-t-il augmenté de 35 cm entre lundi et mardi à la station de Blois, alors que les précipitations locales sont restées faibles ? »**

          **Structures types :**
          - Pourquoi **[phénomène observé]** s'est-il produit pendant **[période]** ?
          - Comment évolue **[indicateur]** selon **[station / zone / période / condition météo]** ?
          - Quelle est la différence entre **[station A]** et **[station B]** en termes de **[indicateur]** ?
          - Quel facteur explique le mieux **[résultat inattendu]** ?

          **Exemples de transformation :**
          - Vague → *« Comment va le cours d'eau ? »*
            Précise → *« Comment le niveau a-t-il évolué sur les 7 derniers jours à Blois, et a-t-il franchi le seuil de vigilance ? »*
          - Vague → *« Le niveau monte. »*
            Précise → *« À quelle vitesse le niveau a-t-il augmenté en 24 heures, et cette hausse est-elle liée aux pluies en amont ? »*
          - Vague → *« Il y a un risque de crue ? »*
            Précise → *« Quelles stations dépassent le seuil de vigilance crue aujourd'hui, et quelle tendance est prévue à 48 heures ? »*
      - title: "Identifier le message clé grâce aux patterns narratifs"
        content: |
          L'analyse doit permettre de formuler un **message clé clair, précis et directement lié aux résultats observés**. Ce message ne se limite pas à décrire : il aide l'audience à comprendre ce qui se passe, pourquoi cela compte et, si nécessaire, quelle action envisager.

          Plusieurs **patterns narratifs** aident à construire ce message :

          | Pattern narratif | Utilisation | Exemple |
          |---|---|---|
          | **Comparer** (*Compare*) | Montrer une différence entre deux stations, périodes ou seuils. | Le niveau à Blois est 30 cm plus élevé que la semaine dernière : une évolution à surveiller. |
          | **Concrétiser** (*Concretize*) | Rendre une donnée technique compréhensible. | Le cours d'eau a monté de 40 cm en 24 h : la montée est rapide et réduit le délai de réaction. |
          | **Révéler progressivement** (*Gradual Reveal*) | Présenter le message étape par étape. | Le niveau monte depuis hier, la hausse s'accélère en aval, certaines stations approchent du seuil. |
          | **Question rhétorique** (*Rhetorical Question*) | Attirer l'attention avec une question. | Le cours d'eau entre-t-il en phase de crue ? Le niveau augmente depuis 18 h et les pluies continuent. |
          | **Appel à l'action** (*Call-to-Action*) | Orienter vers une action concrète. | Le seuil de vigilance se rapproche : les gestionnaires doivent renforcer la surveillance. |
          | **Familiariser** (*Familiarization*) | Relier la donnée à un lieu connu. | Près du centre-ville, le niveau dépasse la moyenne récente. |
          | **Répéter** (*Repetition*) | Renforcer le message avec plusieurs signaux. | Le niveau monte, le débit augmente et les pluies persistent : tous les signaux indiquent une situation à surveiller. |

  - type: classifier
    title: "Question vague ou question précise ?"
    instruction: "Une question précise dit quoi mesurer, où, quand et par rapport à quoi."
    categories: ["Vague", "Précise"]
    items:
      - text: "« Il fait chaud en ce moment ? »"
        answer: 0
        explanation: "Ni indicateur, ni lieu, ni période, ni référence."
      - text: "« Quelles stations ont dépassé 30 °C de maximale plus de trois jours en mai 2026 ? »"
        answer: 1
        explanation: "Indicateur, seuil, période et périmètre sont définis."
      - text: "« Comment évoluent les précipitations ? »"
        answer: 0
        explanation: "Où ? Sur quelle période ? Comparées à quoi ?"
      - text: "« Le cumul de pluie d'avril à Tours est-il inférieur à celui d'avril 2025 ? »"
        answer: 1
        explanation: "Comparaison explicite à une référence : la réponse est mesurable."
      - text: "« Les données climatiques sont-elles intéressantes ? »"
        answer: 0
        explanation: "Ce n'est pas une question analytique : aucune réponse mesurable possible."

  - type: quiz
    items:
      - question: "Lequel de ces énoncés est un **message clé** plutôt qu'un simple sujet ?"
        choices:
          - "Températures maximales par station en mai"
          - "Tours : +6,6 °C en un mois, la plus forte hausse du réseau"
          - "Données climatiques 2026"
        correct: [1]
        explanation: "Un message clé est une **conclusion** que l'on peut lire et retenir ; les deux autres sont des intitulés de sujet."
      - question: "« Le seuil de vigilance se rapproche : les gestionnaires doivent renforcer la surveillance. » Quel pattern narratif est utilisé ?"
        choices: ["Comparer", "Concrétiser", "Appel à l'action", "Répéter"]
        correct: [2]
        explanation: "Le message se termine par une action attendue d'un public identifié."
---

Dans la méthode, la phase **Intention** se joue en trois temps : choisir l'**objectif** du récit, formuler la **question analytique**, puis rédiger le **message clé** qui y répond. C'est ce trio qui guidera ensuite tous vos choix dans Superset : quels graphiques créer, dans quel ordre, avec quels titres.
