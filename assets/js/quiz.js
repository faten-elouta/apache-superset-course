document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((quiz) => {
    const cards = Array.from(quiz.querySelectorAll('.quiz-card')).filter((card) =>
      card.querySelector('.quiz-check-btn')
    );
    const scoreBox = quiz.querySelector('.quiz-score');
    const resetBtn = quiz.querySelector('.quiz-reset-btn');
    const results = new Map();

    const updateScore = () => {
      if (!scoreBox || results.size < cards.length || cards.length === 0) return;
      const good = Array.from(results.values()).filter(Boolean).length;
      scoreBox.hidden = false;
      scoreBox.textContent = `Score : ${good} / ${cards.length} bonne(s) réponse(s)`;
      scoreBox.classList.toggle('is-success', good === cards.length);
    };

    cards.forEach((card) => {
      const button = card.querySelector('.quiz-check-btn');
      const choicesWrap = card.querySelector('.quiz-choices');
      const feedback = card.querySelector('.quiz-feedback');
      const correct = JSON.parse(choicesWrap.dataset.correct);

      button.addEventListener('click', () => {
        const checkboxes = Array.from(choicesWrap.querySelectorAll('.quiz-checkbox'));
        let allCorrect = true;

        checkboxes.forEach((checkbox) => {
          const index = Number(checkbox.dataset.choiceIndex);
          const shouldBeChecked = correct.includes(index);
          const label = checkbox.closest('.quiz-choice');
          label.classList.remove('is-correct', 'is-incorrect');

          if (checkbox.checked && shouldBeChecked) {
            label.classList.add('is-correct');
          } else if (checkbox.checked && !shouldBeChecked) {
            label.classList.add('is-incorrect');
            allCorrect = false;
          } else if (!checkbox.checked && shouldBeChecked) {
            label.classList.add('is-incorrect');
            allCorrect = false;
          }
        });

        feedback.hidden = false;
        feedback.textContent = allCorrect ? 'Bonne réponse !' : "Ce n'est pas tout à fait ça, réessayez.";
        feedback.classList.toggle('is-success', allCorrect);
        feedback.classList.toggle('is-error', !allCorrect);

        results.set(card, allCorrect);
        updateScore();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        quiz.querySelectorAll('.quiz-checkbox').forEach((cb) => {
          cb.checked = false;
        });
        quiz.querySelectorAll('.quiz-choice').forEach((label) => {
          label.classList.remove('is-correct', 'is-incorrect');
        });
        quiz.querySelectorAll('.quiz-feedback').forEach((fb) => {
          fb.hidden = true;
          fb.textContent = '';
          fb.classList.remove('is-success', 'is-error');
        });
        results.clear();
        if (scoreBox) scoreBox.hidden = true;
      });
    }
  });
});
