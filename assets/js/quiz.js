document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-card').forEach((card) => {
    const button = card.querySelector('.quiz-check-btn');
    if (!button) return;

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
    });
  });
});
