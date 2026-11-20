# Apache Superset — Data storytelling & dashboarding

Site statique du cours **Apache Superset**, centré sur le *data storytelling* : construire un récit à partir de données, puis le matérialiser dans un tableau de bord Superset.

Le fil conducteur pratique est le projet **PREVIZO** : des données de climat (feuilles *Climat*, *stations*, *capteurs*) connectées à Superset via Google Sheets.

## Contenu

| Leçon | Sujet |
|---|---|
| 01 — Introduction | Bienvenue dans le cours |
| 02 — Récit de données | Art de la communication des données, tableaux de bord, raconter les données, mise en pratique |
| 03 — Superset | Composants, création d'un jeu de données, exemple pratique, choix de la visualisation, quiz |
| 04 — Informations complémentaires | Types de graphiques, bonnes pratiques, pourquoi une visualisation échoue, résumé |

## Structure

```
content/      Pages du cours (Markdown + front-matter YAML)
templates/    Gabarits EJS (layout, partials de composants)
assets/       CSS, JS (quiz interactifs), images
scripts/      build.js : rend content/ vers dist/
source/       Export Coursebox original (référence en lecture seule)
docs/         Spécification de conception du site
```

## Lancer le site en local

Prérequis : Node.js 18+.

```bash
npm install
npm run build          # génère dist/ (15 pages)
npx serve dist         # ou tout autre serveur statique
```

Le dossier `dist/` est généré et ignoré par git.

## Notes sur la source

Le contenu est adapté de l'export Coursebox. Les points buggés de l'export (encodage, doublons, vidéos manquantes, sections placeholder) ont été corrigés ou remplacés. Les vidéos absentes sont signalées par un encadré « Vidéo à ajouter ».
