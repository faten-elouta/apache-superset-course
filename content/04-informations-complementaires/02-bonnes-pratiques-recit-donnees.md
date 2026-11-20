---
title: "Bonnes pratiques du récit des données"
lesson: "04-informations-complementaires"
order: 2
hero:
  title: "Raconter les données : passer du graphique au message"
  text: |
    Dans Apache Superset, un graphique ne suffit pas. Pour qu'il ait de
    l'impact, il doit être accompagné d'un message clair : informer,
    comparer, expliquer, alerter ou aider à décider.
components:
  - type: summary_cards
    items:
      - title: "Informer"
        content: |
          Partager un état des lieux factuel pour faire comprendre une situation.

          *Ex : montrer que les ventes ont augmenté de 18 % en mars.*
      - title: "Comparer"
        content: |
          Mettre deux données en regard pour faire ressortir leurs différences.

          *Ex : la région Nord dépasse la région Sud de 32 %.*
      - title: "Expliquer"
        content: |
          Montrer pourquoi un résultat apparaît et comment il s'enchaîne.

          *Ex : la baisse vient d'une rupture de stock sur deux produits.*
      - title: "Alerter"
        content: |
          Signaler un risque ou une anomalie qui demande une réaction rapide.

          *Ex : le taux d'erreur dépasse 5 %.*
      - title: "Décider"
        content: |
          Apporter les données nécessaires pour choisir une action.

          *Ex : renforcer les stocks dans la région Nord.*
      - title: "Prédire"
        content: |
          Projeter une tendance future pour anticiper et agir plus tôt.

          *Ex : les ventes pourraient dépasser l'objectif trimestriel.*
  - type: accordion
    items:
      - title: "Formuler une question analytique précise"
        content: |
          Une bonne question analytique est précise, utile pour l'action et directement ancrée dans les données disponibles.

          Elle ne demande pas simplement :
          **« Comment va le cours d'eau ? »**

          Elle cherche plutôt à comprendre une situation mesurable, par exemple :
          **« Pourquoi le niveau du cours d'eau a-t-il augmenté de 35 cm entre lundi et mardi à la station de Blois, alors que les précipitations locales sont restées faibles ? »**

          **Structure type :**
          - Pourquoi **[phénomène observé]** s'est-il produit pendant **[période]** ?
          - Comment évolue **[indicateur hydrologique]** selon **[station / bassin versant / période / condition météo]** ?
          - Quelle est la différence entre **[station A]** et **[station B]** en termes de **[niveau d'eau / débit / vitesse de montée / seuil atteint]** ?
          - Quel facteur explique le mieux **[résultat inattendu]** ?

          **Exemples de transformation :**
          - Vague → **« Comment va le cours d'eau ? »**
            Précise → **« Comment le niveau du cours d'eau a-t-il évolué sur les 7 derniers jours à la station de Blois, et a-t-il franchi un seuil de vigilance ? »**
          - Vague → **« Le niveau monte. »**
            Précise → **« À quelle vitesse le niveau du cours d'eau a-t-il augmenté au cours des dernières 24 heures, et cette hausse est-elle liée aux précipitations observées en amont ? »**
          - Vague → **« Il y a un risque de crue ? »**
            Précise → **« Quelles stations présentent un niveau supérieur au seuil de vigilance crue aujourd'hui, et quelle tendance est prévue pour les prochaines 48 heures ? »**
      - title: "Identifier le message clé"
        content: |
          Pour répondre à une question analytique, l'analyse des données doit permettre de formuler un **message clé clair, précis et directement lié aux résultats observés**. Ce message ne se limite pas à décrire les données : il doit aider l'audience à comprendre ce qui se passe, pourquoi cela compte et, si nécessaire, quelle action envisager.

          Plusieurs **patterns narratifs** peuvent vous aider à construire ce message, par exemple : comparer deux situations, rendre une donnée plus concrète, révéler progressivement l'information, poser une question pour attirer l'attention, ou orienter vers une action.

          | Pattern narratif | Utilisation pour le message clé | Exemple |
          |---|---|---|
          | **Compare** | Montrer une différence entre deux stations, périodes ou seuils. | Le niveau à Blois est 30 cm plus élevé que la semaine dernière ; cette hausse indique une évolution à surveiller. |
          | **Concretize** | Rendre une donnée technique plus compréhensible. | Le cours d'eau a monté de 40 cm en 24 h ; la montée est rapide et réduit le délai de réaction. |
          | **Gradual Reveal** | Présenter le message étape par étape. | Le niveau monte depuis hier, la hausse s'accélère en aval, certaines stations approchent du seuil de vigilance. |
          | **Rhetorical Question** | Attirer l'attention avec une question. | Le cours d'eau entre-t-il en phase de crue ? Le niveau augmente depuis 18 h et les pluies continuent en amont. |
          | **Call-to-Action** | Orienter vers une action concrète. | Le seuil de vigilance se rapproche ; les gestionnaires doivent renforcer la surveillance. |
          | **Familiarization** | Relier la donnée à un lieu connu. | Près du centre-ville, le niveau dépasse la moyenne récente ; les acteurs locaux doivent suivre les mises à jour. |
          | **Repetition** | Renforcer le message avec plusieurs signaux. | Le niveau monte, le débit augmente et les pluies persistent ; tous les signaux indiquent une situation à surveiller. |
  - type: carousel
    items:
      - title: "Pyramide inversée : message d'abord, preuves ensuite"
        content: |
          La pyramide inversée place la conclusion ou le signal principal en haut, puis déroule les preuves et le contexte en descendant. Convient quand le public veut une réponse rapide : direction, comité, tableau de bord opérationnel où une action doit être prise rapidement.

          En pratique pour un dashboard, commence par un ou deux KPI clés visibles en haut, puis propose des graphiques de soutien et enfin une table ou un export pour vérification. La pyramide inversée limite la charge cognitive : la lecture première donne la décision, les détails restent accessibles.
      - title: "Structure en trois actes (début, milieu, fin)"
        content: |
          Le modèle en trois actes organise la narration comme une histoire courte.

          ![Structure en trois actes](https://assets.coursebox.ai/public/coursebox/learning/c67bc411-9342-4c44-9f27-297ef4ad42bb.png)

          Acte 1 : poser la question et le contexte (contexte métier, période, souci). Acte 2 : présenter l'analyse et les découvertes intermédiaires. Acte 3 : conclure avec recommandations et prochaines étapes. Idéal pour une note d'analyse ou une présentation au format slide où le récit doit évoluer logiquement. Sur un dashboard interactif, réserve un premier onglet au contexte et aux définitions, un onglet d'exploration pour analyses détaillées, et un onglet final pour recommandations et actions. Superset permet d'organiser les visuels en onglets partageables, utile pour séquencer le récit et diriger l'orientation de lecture.
      - title: "Martini glass : teaser, exploration libre, conclusion forte"
        content: |
          Le Martini glass commence par un aperçu frappant, ouvre un espace d'exploration libre au milieu, puis revient à une conclusion nette à la fin. C'est parfait pour raconter une histoire de données lorsque l'on veut que le lecteur explore mais revienne avec la même interprétation.

          ![Martini glass](https://assets.coursebox.ai/public/coursebox/learning/8e1d0131-d727-4351-8d0a-8a6974aee722.png)

          Pour un dashboard, place un sommaire visuel ou un insight central en haut, propose des filtres et visualisations interactives au centre pour laisser explorer, puis ajoute une carte finale ou un encadré de synthèse en bas. Utilise le panneau de filtres de Superset et les Display Controls pour laisser l'exploration, tout en conservant un bloc de synthèse visible ou accessible pour ramener le message final.
      - title: "Kabob : ancrage, corps d'argument, rappel du point central"
        content: |
          Le Kabob commence par un ancrage qui capte l'attention, déroule des preuves ciblées, puis conclut en rappelant l'ancrage initial. C'est utile quand un point central doit rester présent pendant l'analyse, par exemple pour défendre une hypothèse métier ou évaluer une campagne.

          ![Kabob](https://assets.coursebox.ai/public/coursebox/learning/7b482a14-847d-484d-a349-04f9e70d1f17.png)

          Dans un dashboard, garde un KPI ancré en en-tête ou dans la barre de navigation, aligne trois à cinq graphiques qui lui apportent du contexte, puis termine par un call-to-action ou une recommandation. Les options de placement et la personnalisation des titres dans Superset aident à maintenir l'ancrage visible pendant la navigation.
  - type: infotabs
    items:
      - title: "Données"
        content: |
          Collecter, explorer, relever.

          La première phase consiste à rassembler toutes vos sources et à les explorer pour repérer ce qui est digne d'intérêt. Vous cherchez des tendances, des anomalies, des corrélations inattendues.

          **Ce qu'on fait concrètement :**
          - Rassembler les fichiers de données (exports CRM, fichiers Excel, bases SQL, rapports PDF)
          - Croiser les sources : ventes + retours clients + calendrier des promotions
          - Repérer les chiffres qui sortent de l'ordinaire
          - Noter les « trouvailles » : ex. « le taux de retour est 3× plus élevé le vendredi »

          À cette étape, vous ne racontez pas encore, vous explorez.
      - title: "Intention"
        content: |
          Définir l'objectif et les questions.

          Avant d'organiser votre récit, vous devez savoir où vous allez. Cette phase vous oblige à choisir un seul objectif principal et à formuler les questions auxquelles vos données vont répondre.

          **Ce qu'on fait concrètement :**
          - Choisir un objectif (informer / comparer / expliquer / alerter / décider / prédire)
          - Formuler 1 à 2 questions analytiques précises (ex. : « Pourquoi les ventes ont-elles baissé en février ? »)
          - Définir le message clé à transmettre en une phrase
          - Identifier ce que votre audience doit retenir ou faire après avoir lu votre récit

          À cette étape, vous clarifiez le but avant de construire l'histoire.
      - title: "Structuration"
        content: |
          Organiser l'histoire.

          C'est ici que vous décidez de l'ordre de présentation de vos données. Vous choisissez une structure narrative et organisez vos éléments pour créer un fil logique du début à la fin.

          **Ce qu'on fait concrètement :**
          - Choisir une structure (pyramide inversée / pile de blocs / Water Tower)
          - Définir l'accroche : quel fait frappant ouvre votre récit ?
          - Organiser les preuves dans un ordre logique (cause → effet → solution)
          - Prévoir les transitions entre chaque partie
          - Décider ce qui entre dans le récit et ce qui reste en annexe

          À cette étape, vous organisez les preuves pour rendre le message fluide.
      - title: "Présentation"
        content: |
          Produire la forme visuelle et textuelle.

          La dernière phase consiste à mettre en forme votre récit pour le rendre lisible, mémorable et adapté à votre public et à votre médium (dashboard, slide, article, rapport).

          **Ce qu'on fait concrètement :**
          - Choisir les visualisations adaptées à chaque message (courbe pour une tendance, camembert pour une proportion, barre pour une comparaison)
          - Rédiger des titres qui expriment un message, pas juste un sujet
          - Ajouter des annotations sur les graphiques pour guider la lecture
          - Vérifier que le message clé ressort en 10 secondes de lecture
          - Adapter le niveau de détail à l'audience (direction → équipe technique)

          À cette étape, vous finalisez la forme pour diffuser votre message efficacement.
---
