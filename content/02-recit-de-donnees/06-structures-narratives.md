---
title: "Structurer le récit"
order: 6
phase: structuration
lead: "Le même message peut être raconté dans des ordres différents. Choisir une structure narrative, c'est décider de ce que votre public voit en premier, puis ensuite, et sur quoi il termine."
objectives:
  - "Connaître quatre **structures narratives** : pyramide inversée, trois actes, verre à martini, kabob."
  - "Savoir **traduire** chacune en mise en page de dashboard dans Superset."
  - "Choisir la structure adaptée à un **public** et à une **situation**."
takeaways:
  - "**Pyramide inversée** : la conclusion d'abord, pour un public pressé."
  - "**Trois actes** : contexte → analyse → recommandations, pour une démonstration."
  - "**Verre à martini** : message, exploration libre, puis retour au message."
  - "**Kabob** : un point central rappelé du début à la fin."
components:
  - type: carousel
    items:
      - title: "Pyramide inversée : le message d'abord, les preuves ensuite"
        content: |
          La pyramide inversée place la conclusion ou le signal principal en haut, puis déroule les preuves et le contexte en descendant. Elle convient quand le public veut une **réponse rapide** : direction, comité, tableau de bord opérationnel.

          **Dans un dashboard Superset :** un ou deux KPI clés (*Big Number*) en haut, des graphiques de soutien au milieu, une table ou un export pour vérification en bas. La première lecture donne la décision ; les détails restent accessibles.
      - title: "Trois actes : début, milieu, fin"
        content: |
          Le modèle en trois actes organise la narration comme une histoire courte.

          ![Structure en trois actes](/assets/images/figures/structure-trois-actes.jpg)

          **Acte 1** : poser la question et le contexte. **Acte 2** : présenter l'analyse et les découvertes intermédiaires. **Acte 3** : conclure avec des recommandations. Idéal pour une note d'analyse ou une présentation.

          **Dans un dashboard Superset :** utilisez des **onglets** (*Tabs*) : un premier onglet pour le contexte et les définitions, un deuxième pour l'analyse détaillée, un dernier pour les recommandations.
      - title: "Verre à martini : accroche, exploration libre, conclusion"
        content: |
          Le verre à martini commence par un aperçu frappant, ouvre un espace d'exploration au milieu, puis revient à une conclusion nette. Utile quand on veut que le lecteur **explore** mais **reparte avec la même interprétation**.

          ![Format sablier ou verre à martini : l'accroche et les idées clés en haut, la chronologie au milieu, la conclusion ou l'appel à l'action en bas](/assets/images/figures/structure-martini.jpg)

          **Dans un dashboard Superset :** un message central en haut (bloc *Markdown* ou KPI), des **filtres natifs** et des graphiques interactifs au centre, un encadré de synthèse en bas.
      - title: "Kabob : ancrage, preuves, rappel du point central"
        content: |
          Le kabob commence par une anecdote ou un ancrage qui capte l'attention, déroule des preuves ciblées, puis conclut en rappelant l'ancrage initial. Utile quand un point central doit rester présent pendant toute l'analyse : défendre une hypothèse, évaluer une campagne.

          ![Le kabob : anecdote, paragraphe clé, trois blocs de corps, anecdote](/assets/images/figures/structure-kabob.jpg)

          **Dans un dashboard Superset :** gardez le KPI d'ancrage dans l'en-tête, alignez trois à cinq graphiques qui l'éclairent, et terminez par une recommandation.

  - type: chooser
    id: chooser-structure
    question: "Quelle structure pour quelle situation ?"
    intro: "Choisissez une situation pour voir la structure recommandée."
    options:
      - label: "La direction veut savoir en 30 secondes si le réseau est en alerte."
        title: "Pyramide inversée"
        text: "Le public est pressé et doit décider : le signal principal (KPI d'alerte) en premier, les détails ensuite."
      - label: "Vous présentez une étude complète sur la sécheresse du printemps."
        title: "Trois actes"
        text: "Une démonstration qui progresse : contexte, analyse, puis recommandations — un onglet par acte."
      - label: "Des chargés d'études doivent pouvoir filtrer par station, mais retenir la même conclusion."
        title: "Verre à martini"
        text: "Message en haut, filtres et exploration libre au milieu, synthèse en bas pour ramener la conclusion."
      - label: "Vous défendez l'idée que la station de Tours doit être équipée en priorité."
        title: "Kabob"
        text: "Un point central (Tours) posé au début, étayé par plusieurs preuves, puis rappelé à la fin avec la recommandation."

  - type: callout
    kind: method
    title: "Lien avec la suite"
    content: "Gardez en tête la structure choisie : c'est elle qui déterminera la **disposition des graphiques** de votre dashboard Superset (leçon 3, « Du message au dashboard »)."

  - type: quiz
    items:
      - question: "Pourquoi la pyramide inversée convient-elle aux tableaux de bord de direction ?"
        choices:
          - "Parce qu'elle montre toutes les données en premier."
          - "Parce que le message principal est lisible immédiatement, les détails restant accessibles."
          - "Parce qu'elle cache les détails."
        correct: [1]
        explanation: "Elle limite la charge cognitive : la première lecture donne la décision."
      - question: "Quel élément de Superset permet de séquencer un récit en trois actes ?"
        choices: ["Les onglets (Tabs) du dashboard", "Le bouton Run", "Le menu Settings"]
        correct: [0]
        explanation: "Les onglets permettent de découper le dashboard en parties lues l'une après l'autre."
---

Dans la phase **Structuration**, on organise les éléments du récit pour créer un fil logique : une **accroche**, des **preuves** dans un ordre qui fait sens (contexte → évolution → cause → action), et une **conclusion**. Ce qui ne sert pas le message passe en annexe.

Les structures ci-dessous viennent du journalisme et de la communication. Chacune correspond à un besoin différent, et chacune peut se traduire en une **mise en page de dashboard** dans Superset.
