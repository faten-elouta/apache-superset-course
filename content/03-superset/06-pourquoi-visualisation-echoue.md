---
title: "Pourquoi une belle visualisation peut échouer"
order: 6
phase: presentation
lead: "Une visualisation peut être soignée et pourtant ne rien dire, ou pire, induire en erreur. Trois erreurs fréquentes, à repérer par vous-même."
objectives:
  - "Reconnaître trois erreurs courantes : **trop de catégories**, **axe trompeur**, **absence de message**."
  - "Savoir **corriger** chacune dans Superset."
  - "Relire un dashboard avec une **checklist** avant de le publier."
takeaways:
  - "Plus de 5 parts : remplacez le camembert par des **barres triées**."
  - "Un axe de barres qui ne part pas de zéro **exagère** les écarts."
  - "La couleur sert à **mettre en évidence**, et le titre à **dire le message**."
components:
  - type: compare
    title: "Erreur n° 1 — Trop de catégories"
    question: "Les deux graphiques montrent les mêmes données. Lequel permet de comparer les stations le plus vite ?"
    correct: 1
    options:
      - image: "/assets/images/echecs/camembert-9-parts.svg"
        alt: "Camembert à neuf parts multicolores représentant les précipitations de mai par station, non trié."
        caption: "Camembert, 9 parts, couleurs arc-en-ciel"
      - image: "/assets/images/echecs/barres-triees.svg"
        alt: "Barres horizontales triées des précipitations de mai par station, Tours et Romorantin mis en évidence, avec titre-message."
        caption: "Barres triées, valeurs affichées, titre-message"
    explanation: |
      L'œil compare mal des **angles** et doit faire des allers-retours avec la légende. Les **barres triées** se lisent immédiatement : on voit l'ordre, l'écart, et les valeurs extrêmes.

      **Dans Superset :** passez de *Pie Chart* à *Bar Chart*, triez par valeur décroissante, et réservez le camembert aux compositions de 3 à 5 parts.

  - type: compare
    title: "Erreur n° 2 — Un axe trompeur"
    question: "Quelle version représente honnêtement l'écart entre les stations ?"
    correct: 1
    options:
      - image: "/assets/images/echecs/axe-tronque.svg"
        alt: "Diagramme en barres dont l'axe vertical commence à 21 °C, donnant l'impression que Bourges est quatre fois plus chaude que Blois."
        caption: "Axe de 21 à 22,8 °C"
      - image: "/assets/images/echecs/axe-zero.svg"
        alt: "Diagramme en barres avec un axe à partir de zéro : les quatre stations ont des barres presque identiques, entre 21,2 et 22,6 °C."
        caption: "Axe à partir de 0 °C, valeurs affichées"
    explanation: |
      Dans un diagramme en barres, la **longueur** de la barre représente la valeur : si l'axe ne part pas de zéro, une différence de 1,4 °C paraît énorme. La version honnête montre que l'écart est **faible** — et c'est cela, le vrai message.

      **Dans Superset :** vérifiez les bornes de l'axe Y dans l'onglet **Customize** (*Y Axis Bounds*). Pour une **courbe**, un axe resserré est acceptable, car on y lit une évolution et non une longueur.

  - type: compare
    title: "Erreur n° 3 — Pas de message"
    question: "Quel graphique fait passer le message « Tours connaît la plus forte hausse » ?"
    correct: 1
    options:
      - image: "/assets/images/echecs/lignes-arc-en-ciel.svg"
        alt: "Cinq courbes de températures de couleurs vives différentes, avec légende et titre descriptif « Températures maximales par station »."
        caption: "Cinq couleurs, titre descriptif"
      - image: "/assets/images/echecs/lignes-mise-en-evidence.svg"
        alt: "Cinq courbes grises, sauf celle de Tours en couleur avec l'annotation +6,6 °C en un mois, titre-message « Tours : la plus forte hausse du réseau en mai »."
        caption: "Une couleur de mise en évidence, annotation, titre-message"
    explanation: |
      Avec cinq couleurs d'égale importance, le lecteur ne sait pas où regarder. **Griser le contexte** et **colorer l'essentiel**, ajouter une **annotation** et un **titre-message** : le graphique dit enfin quelque chose.

      **Dans Superset :** choisissez un schéma de couleurs sobre, renommez le chart avec un titre-message, et complétez le dashboard par un bloc **Markdown** qui énonce la conclusion.

  - type: heading
    text: "Checklist avant de publier"
    intro: "Relisez votre dashboard en cochant chaque point. Vos réponses sont enregistrées."

  - type: checklist
    items:
      - "Le dashboard a un **titre-message**, pas seulement un sujet."
      - "Le **message clé** est énoncé en toutes lettres (bloc Markdown ou en-tête)."
      - "La disposition suit la **structure narrative** choisie."
      - "Chaque chart répond à **une** question, avec un titre explicite et des unités."
      - "Le type de graphique est **adapté** à la question (évolution, comparaison, part, relation…)."
      - "Pas plus de **5 parts** dans un camembert ; barres **triées**."
      - "Les axes des diagrammes en barres **partent de zéro**."
      - "La **couleur** met en évidence l'essentiel au lieu de décorer."
      - "Les **filtres** utiles sont présents, sans surcharger."
      - "Les **données** ont été vérifiées (types, valeurs manquantes, période)."

  - type: callout
    kind: tip
    title: "La règle des 10 secondes"
    content: "Montrez votre dashboard à quelqu'un pendant 10 secondes, puis cachez-le. Si cette personne ne peut pas formuler le message clé, retravaillez les titres, l'ordre ou la mise en évidence."

  - type: quiz
    items:
      - question: "Selon vous, quel élément est essentiel pour qu'une visualisation soit efficace ?"
        choices:
          - "Une palette de couleurs variée"
          - "La clarté et la simplicité de la présentation des données"
          - "L'utilisation de graphiques complexes"
          - "Un grand nombre de données affichées"
        correct: [1]
        explanation: "Variété des couleurs, complexité et volume de données augmentent la charge cognitive ; c'est la **clarté** qui fait passer le message."
      - question: "Dans un diagramme en barres, l'axe vertical commence à 21 au lieu de 0. Quel est le risque ?"
        choices:
          - "Aucun, c'est plus lisible."
          - "Les écarts entre les barres paraissent beaucoup plus grands qu'ils ne le sont."
          - "Les valeurs négatives disparaissent."
        correct: [1]
---

Dans cette étape, on voit pourquoi une visualisation de données ne doit pas seulement être esthétique. Une bonne visualisation aide l'utilisateur à **comprendre rapidement** une information, **comparer** des éléments, **repérer** une tendance ou **prendre une décision**.

Pour chacun des trois cas ci-dessous, les deux versions utilisent **exactement les mêmes données** (fictives, inspirées des stations PREVIZO). Choisissez celle qui communique le mieux, puis lisez l'explication.
