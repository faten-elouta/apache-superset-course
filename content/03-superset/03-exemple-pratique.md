---
title: "Exemple pratique"
lesson: "03-superset"
order: 3
components:
  - type: video
    placeholder: true
    label: "Connexion à la base de données (démonstration filmée)"
  - type: numberlist
    items:
      - content: |
          **Ouvrez le dataset Climat créé précédemment**, puis cliquez sur **Create chart** depuis SQL Lab ou depuis la liste des datasets.
      - content: |
          **Choisissez le type de graphique** *Line Chart* (courbe), qui convient bien à une évolution dans le temps.
      - content: |
          **Configurez l'axe temporel** en sélectionnant la colonne `date`, et la **métrique** en choisissant `AVG(temperature)`.
      - content: |
          Cliquez sur **Run** dans le panneau Explore pour afficher la courbe, puis ajustez la période affichée si nécessaire.
      - content: |
          **Enregistrez le graphique** avec un titre explicite, par exemple « Évolution de la température moyenne », puis ajoutez-le à un nouveau dashboard.
---

Reprenons le dataset **Climat** connecté dans la section précédente pour construire un premier graphique de bout en bout, depuis SQL Lab jusqu'à l'interface Explore.

L'objectif de cet exemple est simple : répondre à la question **« Comment la température a-t-elle évolué au fil du temps ? »** avec un graphique en courbe (*line chart*), le type de visualisation le plus adapté pour montrer une évolution temporelle — un choix que vous approfondirez dans la section suivante consacrée au choix de la bonne visualisation.
