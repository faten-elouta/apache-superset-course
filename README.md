# Apache Superset — Data storytelling & dashboarding

Site statique du cours **Apache Superset**, centré sur le *data storytelling* : construire un récit à partir de données, puis le matérialiser dans un tableau de bord Superset.

Le fil rouge pratique est le projet **PREVIZO** : des données climatiques (feuilles *Climat*, *stations*, *capteurs*) connectées à Superset via Google Sheets.

## Logique du cours

Tout le parcours s'appuie sur une méthode en **quatre phases** : **Données → Intention → Structuration → Présentation**. Chaque page affiche la ou les phases qu'elle travaille.

| Leçon | Étapes |
|---|---|
| 1 — Introduction | Bienvenue (objectifs, méthode, fil rouge PREVIZO) |
| 2 — Récit de données : la méthode | Dataviz ou récit ? · Le tableau de bord · Trois exemples · La méthode en 4 phases · Question et message clé · Structures narratives · Fiche récit |
| 3 — Superset : de la donnée au dashboard | Composants · Connexion et dataset · SQL Lab · Choisir la visualisation · Du message au dashboard · Pourquoi une visualisation échoue |
| 4 — Évaluation et synthèse | Quiz final · Résumé |

## Activités interactives

Quiz avec explications et score, exercices de classement et de remise en ordre, comparaisons de graphiques, fiche récit enregistrée dans le navigateur (et rappelée dans la leçon 3), bac à sable SQL sur un échantillon de la table *Climat*, étapes Superset cochables, checklist avant publication, onglets, carrousels, cartes à retourner, progression et reprise de lecture, thème clair/sombre.

## Structure

```
content/      Pages du cours (Markdown + front-matter YAML : objectives, takeaways, phase, components)
templates/    Gabarits EJS (layout, accueil, un partial par composant)
assets/       CSS, JS (quiz et interactions), images (figures locales, SVG générés)
scripts/      build.js : rend content/ vers dist/
              make-figures.js : régénère les SVG de l'étape « Pourquoi une visualisation échoue »
source/       Export Coursebox original (référence en lecture seule)
docs/         Spécification de conception du site
```

## Lancer le site en local

Prérequis : Node.js 18+.

```bash
npm install
npm run build          # génère dist/ (16 étapes + accueil)
npx serve dist         # ou tout autre serveur statique servant dist/ à la racine
```

Le dossier `dist/` est généré et ignoré par git.

## Reste à faire

- Trois vidéos sont signalées par un encadré « Vidéo à ajouter » : *Data story vs. dataviz* (2.1), *Comprendre le tableau de bord* (2.2, la vidéo YouTube d'origine n'existe plus) et la démonstration Superset (3.5).
- Les données du bac à sable SQL et des graphiques de comparaison sont **fictives** (inspirées des stations PREVIZO).
