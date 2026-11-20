---
title: "Mise en pratique : votre fiche récit"
order: 7
phase: [intention, structuration]
lead: "Avant de passer à Superset, préparez votre récit sur papier. Cette fiche sera votre fil conducteur : vous la retrouverez au moment de construire votre dashboard."
objectives:
  - "Appliquer les phases **Intention** et **Structuration** à un cas concret."
  - "Produire une **fiche récit** réutilisable dans la leçon 3."
takeaways:
  - "On choisit la question, le message et la structure **avant** d'ouvrir Superset."
  - "La fiche est enregistrée dans votre navigateur : vous la retrouverez à l'étape « Du message au dashboard »."
components:
  - type: worksheet
    id: fiche-recit
    title: "Ma fiche récit"
    intro: "Travaillez sur les données PREVIZO ou sur un cas de votre choix. Vos réponses sont **enregistrées automatiquement** dans ce navigateur."
    fields:
      - key: public
        label: "Public visé"
        phase: intention
        placeholder: "Ex. : les gestionnaires du réseau de stations"
      - key: objectif
        label: "Objectif principal"
        phase: intention
        type: select
        options: ["Informer", "Comparer", "Expliquer", "Alerter", "Décider", "Prédire"]
      - key: question
        label: "Question analytique"
        phase: intention
        type: textarea
        help: "Quoi, où, quand, par rapport à quoi ?"
        placeholder: "Ex. : Comment la température maximale a-t-elle évolué de janvier à mai 2026, et quelles stations sont les plus chaudes ?"
      - key: message
        label: "Message clé (une phrase)"
        phase: intention
        type: textarea
        placeholder: "Ex. : Les maximales ont bondi en mai, surtout à Tours (+6,6 °C en un mois)."
      - key: pattern
        label: "Pattern narratif"
        phase: intention
        type: select
        options: ["Comparer", "Concrétiser", "Révéler progressivement", "Question rhétorique", "Appel à l'action", "Familiariser", "Répéter"]
      - key: structure
        label: "Structure narrative"
        phase: structuration
        type: select
        options: ["Pyramide inversée", "Trois actes", "Verre à martini", "Kabob"]
      - key: graphiques
        label: "Graphiques envisagés, dans l'ordre de lecture"
        phase: structuration
        type: textarea
        help: "Vous vérifierez ce choix à l'étape « Choisir la bonne visualisation »."
        placeholder: "Ex. : 1. KPI température max de mai  2. Courbe mensuelle  3. Barres par station"

  - type: accordion
    open_first: false
    items:
      - title: "Voir un exemple de fiche remplie (PREVIZO)"
        content: |
          | Rubrique | Exemple |
          |---|---|
          | **Public** | Gestionnaires du réseau de stations PREVIZO |
          | **Objectif** | Alerter |
          | **Question** | Comment la température maximale a-t-elle évolué de janvier à mai 2026, et quelles stations sont les plus chaudes ? |
          | **Message clé** | Les maximales ont bondi en mai, surtout à Tours (+6,6 °C en un mois) : le suivi de cette station doit être renforcé. |
          | **Pattern** | Comparer + Appel à l'action |
          | **Structure** | Pyramide inversée |
          | **Graphiques** | 1. KPI « température max moyenne de mai » avec tendance · 2. Courbe mensuelle par station, Tours mise en évidence · 3. Barres triées par station · 4. Table de détail |

          C'est exactement ce dashboard que vous construirez à l'étape « Du message au dashboard ».
---

Vous savez maintenant qu'un dashboard efficace ne se limite pas à afficher des chiffres : il raconte une histoire construite autour d'une **question** précise, d'un **message** et d'une **structure**.

Remplissez la fiche ci-dessous en reprenant ce que vous avez vu :

- l'**objectif** et la **question analytique** (étape « Formuler la question et le message clé ») ;
- le **pattern narratif** qui donne sa forme au message ;
- la **structure narrative** et l'ordre des graphiques (étape « Structurer le récit »).
