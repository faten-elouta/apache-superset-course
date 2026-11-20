---
title: "Comprendre le tableau de bord"
order: 2
lead: "Un tableau de bord n'est pas une page remplie de graphiques : c'est un outil de pilotage. Et il devient un récit de données lorsqu'il est clair et orienté vers une décision."
objectives:
  - "Définir ce qu'est un **tableau de bord** et à quoi il sert."
  - "Identifier les **indicateurs** utiles à suivre pour une activité."
  - "Distinguer les grands **types** de dashboards selon leur public."
takeaways:
  - "Un tableau de bord sert à **voir**, **décider** et **alerter**."
  - "Un indicateur n'a de sens que **comparé** : à un objectif, à un seuil ou à une période précédente."
  - "Le **public** détermine le type de dashboard et donc son niveau de détail."
components:
  - type: summary_cards
    title: "Les trois fonctions d'un tableau de bord"
    items:
      - title: "Voir"
        content: "Comprendre l'état actuel d'une situation en un coup d'œil."
      - title: "Décider"
        content: "Identifier les priorités et prendre rapidement une décision informée."
      - title: "Alerter"
        content: "Signaler les anomalies et les dépassements de seuil."

  - type: video
    placeholder: true
    label: "« Comprendre le tableau de bord » : la vidéo YouTube d'origine n'est plus disponible, une vidéo de remplacement est à choisir."
    watch_for:
      - "La définition d'un tableau de bord"
      - "Les principes de conception"
      - "Les éléments visuels et indicateurs utilisés"

  - type: heading
    text: "Trois types de tableaux de bord"
    intro: "Le même jeu de données peut alimenter des dashboards très différents selon la personne qui le lit et la décision qu'elle doit prendre."

  - type: infotabs
    items:
      - title: "Opérationnel"
        content: |
          **Pour qui :** les équipes de terrain, au quotidien.

          **Pour quoi :** suivre en temps (quasi) réel et réagir vite : seuils, alertes, valeurs du jour.

          *Exemple PREVIZO : les stations dont la température maximale dépasse 30 °C aujourd'hui.*
      - title: "Stratégique"
        content: |
          **Pour qui :** la direction, les décideurs.

          **Pour quoi :** suivre quelques indicateurs clés sur le moyen ou long terme et les comparer aux objectifs.

          *Exemple PREVIZO : l'évolution du cumul de précipitations par saison sur cinq ans.*
      - title: "Analytique"
        content: |
          **Pour qui :** les analystes, les chargés d'études.

          **Pour quoi :** explorer, filtrer, croiser les données pour comprendre un phénomène.

          *Exemple PREVIZO : la relation entre altitude des stations et températures, filtrable par période.*

  - type: quiz
    items:
      - question: "Un chiffre affiché seul sur un dashboard (par exemple « 47 mm ») est-il suffisant pour décider ?"
        choices:
          - "Oui, un chiffre précis suffit."
          - "Non, il faut le comparer à une référence : objectif, seuil ou période précédente."
        correct: [1]
        explanation: "« 47 mm » ne dit pas si c'est beaucoup ou peu. « 47 mm, soit 30 % de moins que la normale » permet d'interpréter et d'agir."
      - question: "Un responsable d'exploitation doit savoir chaque matin quelles stations sont en alerte. Quel type de dashboard lui faut-il ?"
        choices: ["Opérationnel", "Stratégique", "Analytique"]
        correct: [0]
        explanation: "Suivi quotidien, seuils et alertes : c'est le rôle d'un dashboard opérationnel."
---

On peut partir d'une question simple : **quand une personne doit gérer une activité, comment peut-elle savoir rapidement si tout fonctionne bien ou s'il y a un problème ?**

Un **tableau de bord** (ou *dashboard*) rassemble dans une même interface les indicateurs qui permettent de répondre à cette question : il aide un responsable à suivre une situation, à comparer les résultats avec les objectifs, à repérer les écarts et à prendre une décision.

Par exemple, dans une entreprise, un responsable peut vouloir suivre le chiffre d'affaires, le nombre de clients, les retards de livraison, les réclamations, les coûts ou les objectifs atteints. Dans le projet PREVIZO, on suivra plutôt les **températures**, les **précipitations** et les **stations** qui sortent de l'ordinaire.

Ces informations ne deviennent utiles que lorsqu'elles sont **organisées sous forme d'indicateurs** et **mises en contexte**. C'est exactement là que le tableau de bord rejoint le récit de données : *un tableau de bord est aussi un récit de données, s'il réussit à être clair et efficace.*
