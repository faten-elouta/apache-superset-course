# Site du cours "Apache Superset" — Design

Date : 2026-07-28
Source : `source/Apache Superset.html` (export Coursebox.ai, encodage mojibake UTF-8/Latin-1)

## Objectif

Transformer l'export HTML brut du cours Coursebox ("Apache Superset — data storytelling & dashboarding") en un site statique multi-pages, propre, avec encodage corrigé, quiz interactifs, et contenu complété là où l'export Coursebox est buggé ou incomplet.

## Décisions retenues

| Sujet | Décision |
|---|---|
| Type de site | Statique multi-pages, une page HTML par sous-section (15 pages + accueil) |
| Encodage | Corriger tout le mojibake (`donnÃ©es` → `données`) |
| Quiz | Interactifs : cases cochables, bouton "Vérifier", feedback bonne/mauvaise réponse, indice affiché si présent |
| Contenu buggé/placeholder | Nettoyé, doublons supprimés, sections incomplètes réécrites avec un contenu cohérent |
| Vidéos locales sans lien (2 sections) | Encadré placeholder "Vidéo à ajouter" à la place de la vidéo manquante |
| Stack | Node.js + script de build custom, pas de framework lourd |
| Templating | EJS |
| Contenu | Markdown + front-matter YAML (blocs structurés pour composants visuels) |
| Design visuel | Structure de composants Coursebox conservée (hero, quote, cards, accordion, infotabs, carousel), style modernisé, sommaire latéral, nav précédent/suivant, thème clair/sombre |
| Emplacement projet | `~/apache-superset-course` (nouveau repo git) |

## Architecture

```
apache-superset-course/
  source/
    Apache Superset.html       # export Coursebox original, référence en lecture seule
  content/
    01-introduction/
      01-bienvenue.md
    02-recit-de-donnees/
      01-art-communication-donnees.md
      02-comprendre-tableau-de-bord.md
      03-raconter-les-donnees.md
      04-mise-en-pratique.md
    03-superset/
      01-composants-apache-superset.md
      02-creation-jeu-de-donnee.md
      03-exemple-pratique.md
      04-choisir-la-bonne-visualisation.md
      05-quiz-cadrage-connexion-donnees.md
    04-informations-complementaires/
      01-types-des-graphiques.md
      02-bonnes-pratiques-recit-donnees.md
      03-meilleures-pratiques-recit-donnees.md
      04-pourquoi-visualisation-echoue.md
      05-resume.md
  templates/
    layout.ejs                 # squelette HTML commun (head, nav, footer)
    partials/
      toc.ejs                  # sommaire latéral, leçon/sous-section active
      prev-next.ejs             # navigation précédent/suivant
      hero.ejs
      quote.ejs
      summary-cards.ejs
      accordion.ejs
      infotabs.ejs
      carousel.ejs
      listing-cards.ejs
      quiz.ejs
      video-placeholder.ejs      # pour les 2 vidéos manquantes
  assets/
    css/style.css
    js/quiz.js                  # logique de vérification des quiz
  scripts/
    build.js                    # lit content/**/*.md, rend via templates, écrit dans dist/
  dist/                          # généré par le build, gitignored
  package.json
  .gitignore                    # dist/, node_modules/
```

### Dépendances

- `gray-matter` — parse le front-matter YAML de chaque fichier Markdown.
- `marked` — convertit le corps Markdown en HTML.
- `ejs` — rend les templates de layout et les partials de composants.

Pas de bundler, pas de framework front-end : le HTML/CSS/JS généré est servi tel quel.

## Modèle de contenu

Chaque fichier Markdown a :

```yaml
---
title: "Création d'un jeu de données"
lesson: "03-superset"
order: 2
hero:
  title: "..."
  text: "..."
quote:
  text: "..."
  author: "..."
summary_cards:
  - title: "..."
    content: "..."
quiz:
  - question: "..."
    hint: "..."          # optionnel
    choices: ["...", "..."]
    correct: [0]          # index des bonnes réponses (peut être multiple)
---

Corps en Markdown standard (titres, paragraphes, listes, tableaux, liens, images, blockquote).
```

Le script de build ne rend que les blocs présents dans le front-matter : une page sans `quiz:` n'affiche pas de section quiz, etc.

## Contenu à réécrire (vs. export Coursebox original)

- **2.4 Mise en pratique** — remplace le placeholder "Transition entre data story et superset elements" par un vrai contenu de transition/exercice reliant le storytelling et Superset.
- **3.2 Création d'un jeu de données** — remplace la bannière "Banner title / Add your banner content here" par un vrai titre + accroche.
- **3.3 Exemple pratique** — remplace le texte par défaut Coursebox par un exemple pratique concret ; la vidéo locale sans lien devient un placeholder "Vidéo à ajouter".
- **2.1 L'art de communication des données** — la vidéo locale `data_story_vs_dataviz_0_3m21.mp4` (sans lien) devient un placeholder "Vidéo à ajouter".
- **4.1 Types des graphiques** — la citation "~ Author's name" reçoit une attribution réelle ou est retirée si aucune source fiable.
- Tous les blocs "Assessment Criteria" qui dupliquent mot pour mot le texte juste au-dessus (bug d'export Coursebox) sont supprimés — ils n'apportent aucune information.
- Les flipcards à spinners de chargement jamais résolus (module 4.1) sont simplifiées : les images statiques correspondantes sont conservées, les spinners cassés retirés.

## Navigation & design

- Sommaire (TOC) fixe en barre latérale sur desktop (liste des 4 leçons + 15 sous-sections, avec la page active surlignée), menu déroulant sur mobile.
- Navigation "Précédent / Suivant" en bas de chaque page.
- Palette et typographie cohérentes sur tout le site, `prefers-color-scheme` pour le clair/sombre.
- Composants visuels repris de l'export Coursebox (hero, quote, cartes résumé, accordion, infotabs, carousel, listing-cards) mais restylés, sans les composants cassés (flipcards à spinners, doublons).

## Quiz interactifs

`assets/js/quiz.js` : au clic sur "Vérifier", chaque réponse cochée est comparée à la liste `correct` du front-matter ; feedback visuel par réponse (correct/incorrect), indice affiché si fourni. Pas de sauvegarde de progression (hors scope).

## Vérification

1. `node scripts/build.js` doit générer les 15 pages de sous-section + une page d'accueil sans erreur, pour les 4 leçons.
2. Contrôle manuel dans un navigateur (serveur statique local, ex. `npx serve dist`) : navigation TOC, précédent/suivant, quiz interactifs (bonne/mauvaise réponse), responsive, thème clair/sombre.
3. Contrôle qu'aucun caractère mojibake ne subsiste dans le texte généré.
