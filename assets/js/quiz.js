// Quiz : vérification par question, indice, explication, score global et réponse modèle pour les questions ouvertes.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((quiz) => {
    const cards = Array.from(quiz.querySelectorAll('.quiz-card')).filter((card) => card.querySelector('.quiz-check-btn'));
    const scoreBox = quiz.querySelector('.quiz-score');
    const resetBtn = quiz.querySelector('.quiz-reset-btn');
    const results = new Map();

    const updateScore = () => {
      if (!scoreBox || cards.length === 0) return;
      const good = Array.from(results.values()).filter(Boolean).length;
      scoreBox.hidden = false;
      const done = results.size;
      scoreBox.textContent =
        done < cards.length
          ? `${done} / ${cards.length} question(s) vérifiée(s) · ${good} juste(s)`
          : `Score final : ${good} / ${cards.length}${good === cards.length ? ' — parfait !' : ''}`;
      scoreBox.classList.toggle('is-success', done === cards.length && good === cards.length);
      if (done === cards.length && good === cards.length && window.courseBurst) window.courseBurst(scoreBox);
    };

    cards.forEach((card) => {
      const button = card.querySelector('.quiz-check-btn');
      const choicesWrap = card.querySelector('.quiz-choices');
      const feedback = card.querySelector('.quiz-feedback');
      const explanation = card.querySelector('.quiz-explanation');
      const hintBtn = card.querySelector('.quiz-hint-btn');
      const hint = card.querySelector('.quiz-hint');
      const correct = JSON.parse(choicesWrap.dataset.correct);

      if (hintBtn && hint) hintBtn.addEventListener('click', () => { hint.hidden = !hint.hidden; });

      button.addEventListener('click', () => {
        const inputs = Array.from(choicesWrap.querySelectorAll('.quiz-checkbox'));
        if (!inputs.some((i) => i.checked)) {
          feedback.hidden = false;
          feedback.textContent = 'Sélectionnez au moins une réponse.';
          feedback.className = 'quiz-feedback is-error';
          return;
        }
        let allCorrect = true;
        inputs.forEach((input) => {
          const index = Number(input.dataset.choiceIndex);
          const shouldBeChecked = correct.includes(index);
          const label = input.closest('.quiz-choice');
          label.classList.remove('is-correct', 'is-incorrect');
          if (input.checked && shouldBeChecked) label.classList.add('is-correct');
          else if (input.checked && !shouldBeChecked) { label.classList.add('is-incorrect'); allCorrect = false; }
          else if (!input.checked && shouldBeChecked) { allCorrect = false; }
        });

        feedback.hidden = false;
        feedback.textContent = allCorrect
          ? 'Bonne réponse !'
          : correct.length > 1
            ? 'Pas tout à fait : il manque une bonne réponse ou une réponse est en trop.'
            : "Ce n'est pas la bonne réponse. Relisez l'explication ou réessayez.";
        feedback.className = 'quiz-feedback ' + (allCorrect ? 'is-success' : 'is-error');
        if (explanation) explanation.hidden = false;

        if (!results.has(card)) results.set(card, allCorrect);
        updateScore();
      });
    });

    quiz.querySelectorAll('.quiz-reveal-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const model = btn.parentElement.querySelector('.quiz-model');
        model.hidden = !model.hidden;
        btn.textContent = model.hidden ? 'Comparer avec une réponse modèle' : 'Masquer la réponse modèle';
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        quiz.querySelectorAll('.quiz-checkbox').forEach((cb) => { cb.checked = false; });
        quiz.querySelectorAll('.quiz-choice').forEach((l) => l.classList.remove('is-correct', 'is-incorrect'));
        quiz.querySelectorAll('.quiz-feedback, .quiz-explanation, .quiz-hint').forEach((el) => { el.hidden = true; });
        results.clear();
        if (scoreBox) scoreBox.hidden = true;
      });
    }
  });
});
