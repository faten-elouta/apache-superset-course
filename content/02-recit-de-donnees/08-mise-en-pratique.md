---
title: "Mise en pratique : votre fiche récit"
order: 8
phase: [intention, structuration]
lead: "Avant de passer à Superset, instanciez le modèle sur votre propre sujet. Cette fiche sera votre fil conducteur : vous la retrouverez au moment de construire votre dashboard."
objectives:
  - "Appliquer les phases **Répondre aux questions** et **Structurer les réponses** à un cas concret."
  - "Renseigner les concepts du modèle : objectif, question, constat, message, personnages, mesures, audience, structure, actes."
takeaways:
  - "On fixe objectif, questions, messages et structure **avant** de construire le dashboard — quitte à y revenir."
  - "La fiche est enregistrée dans votre navigateur : vous la retrouverez à l'étape « Du message au dashboard »."
components:
  - type: worksheet
    id: fiche-recit
    title: "Ma fiche récit"
    intro: "Travaillez sur les données PREVIZO ou sur un cas de votre choix. Les rubriques suivent les concepts du modèle. Vos réponses sont **enregistrées automatiquement** dans ce navigateur."
    fields:
      - key: objectif_analyse
        label: "Objectif d'analyse"
        phase: intention
        placeholder: "Ex. : rendre compte de la chaleur du printemps 2026 sur le réseau PREVIZO"
      - key: question
        label: "Question(s) analytique(s)"
        phase: intention
        type: textarea
        help: "Quoi, où, quand, par rapport à quoi ?"
        placeholder: "Ex. : Comment la température maximale a-t-elle évolué de janvier à mai 2026, et quelles stations sont les plus chaudes ?"
      - key: constat
        label: "Constat attendu ou obtenu"
        phase: donnees
        type: textarea
        help: "Ce que l'exploration (SQL Lab) montre ou devrait montrer."
        placeholder: "Ex. : Tours passe de 16,8 °C en avril à 23,4 °C en mai ; les autres stations gagnent environ 4 °C."
      - key: message
        label: "Message clé"
        phase: intention
        type: textarea
        placeholder: "Ex. : Tours connaît la plus forte hausse du réseau en mai (+6,6 °C) : son suivi doit être renforcé."
      - key: personnages
        label: "Personnages et mesures"
        phase: intention
        placeholder: "Ex. : personnages : Tours, réseau · mesures : température maximale moyenne, +6,6 °C"
      - key: validation
        label: "Validation du message"
        phase: intention
        placeholder: "Ex. : comparaison avec Météo-France, relecture par une climatologue"
      - key: audience
        label: "Audience"
        phase: structuration
        placeholder: "Ex. : les gestionnaires du réseau de stations"
      - key: structure
        label: "Structure narrative"
        phase: structuration
        type: select
        options: ["Pyramide inversée", "Trois actes", "Question → preuves → retour", "Verre à martini", "Kabob"]
      - key: graphiques
        label: "Actes et épisodes (dans l'ordre de lecture)"
        phase: structuration
        type: textarea
        help: "Un épisode = un message = un futur chart. Vous vérifierez le choix des graphiques à l'étape « Choisir la bonne visualisation »."
        placeholder: "Ex. : Acte 1 – KPI température max de mai · Acte 2 – courbe mensuelle · Acte 3 – barres par station + table"

  - type: accordion
    open_first: false
    items:
      - title: "Voir un exemple de fiche remplie (PREVIZO)"
        content: |
          | Concept | Exemple |
          |---|---|
          | **Objectif d'analyse** | Rendre compte de la chaleur du printemps 2026 sur le réseau PREVIZO |
          | **Question** | Comment la température maximale a-t-elle évolué de janvier à mai 2026, et quelles stations sont les plus chaudes ? |
          | **Constat** | Tours passe de 16,8 °C en avril à 23,4 °C en mai ; les autres stations gagnent environ 4 °C |
          | **Message** | Tours connaît la plus forte hausse du réseau en mai (+6,6 °C) : son suivi doit être renforcé |
          | **Personnages / mesures** | Tours, réseau / température maximale moyenne, +6,6 °C |
          | **Validation** | Recoupement avec une source externe et relecture par une experte |
          | **Audience** | Gestionnaires du réseau |
          | **Structure** | Pyramide inversée |
          | **Actes et épisodes** | 1. KPI de mai avec tendance · 2. Courbe mensuelle, Tours mise en évidence · 3. Barres triées par station + table de détail |

          C'est exactement ce dashboard que vous construirez à l'étape « Du message au dashboard ».
---

Vous connaissez maintenant le **modèle** (quatre couches) et le **processus** (quatre phases). Instanciez-les sur un cas concret en remplissant la fiche ci-dessous :

- l'**objectif**, les **questions**, le **message** et sa **validation** (étape « Répondre aux questions ») ;
- l'**audience**, la **structure** et les **actes et épisodes** (étape « Structurer les réponses »).

Le **constat** relève de la phase Explorer : si vous ne l'avez pas encore, indiquez ce que vous vous attendez à trouver. Vous le vérifierez dans **SQL Lab**, puis vous reviendrez éventuellement sur votre message : c'est l'aller-retour normal du processus.
