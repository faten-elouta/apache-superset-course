(function () {
  const DONE_KEY = 'superset-course:done';

  // localStorage peut être indisponible (navigation privée, données bloquées) : on dégrade sans erreur.
  function readDone() {
    try {
      return new Set(JSON.parse(localStorage.getItem(DONE_KEY)) || []);
    } catch (e) {
      return new Set();
    }
  }

  function writeDone(done) {
    try {
      localStorage.setItem(DONE_KEY, JSON.stringify(Array.from(done)));
    } catch (e) {
      /* stockage indisponible : la progression reste valable pour la session */
    }
  }

  function initProgress() {
    const links = Array.from(document.querySelectorAll('.toc a[data-page]'));
    const bar = document.querySelector('.progress-fill');
    const label = document.querySelector('.progress-label');
    const doneBtn = document.querySelector('.done-btn');
    const pageKey = document.body.dataset.page;
    const done = readDone();

    function render() {
      links.forEach((a) => {
        a.parentElement.classList.toggle('is-done', done.has(a.dataset.page));
      });
      const total = links.length;
      const count = links.filter((a) => done.has(a.dataset.page)).length;
      if (bar) bar.style.width = (total ? (count / total) * 100 : 0) + '%';
      if (label) label.textContent = `${count} / ${total} pages terminées`;
      if (doneBtn && pageKey) {
        const isDone = done.has(pageKey);
        doneBtn.classList.toggle('is-done', isDone);
        doneBtn.setAttribute('aria-pressed', String(isDone));
        doneBtn.textContent = isDone ? '✓ Page terminée' : 'Marquer comme terminé';
      }
    }

    if (doneBtn && pageKey) {
      doneBtn.addEventListener('click', () => {
        if (done.has(pageKey)) done.delete(pageKey);
        else done.add(pageKey);
        writeDone(done);
        render();
      });
    }
    render();
  }

  function initCopyButtons() {
    document.querySelectorAll('.content pre').forEach((pre) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copier';
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(pre.innerText.trim());
          btn.textContent = 'Copié ✓';
        } catch (e) {
          btn.textContent = 'Échec';
        }
        setTimeout(() => {
          btn.textContent = 'Copier';
        }, 1500);
      });
      pre.appendChild(btn);
    });
  }

  function initReveal() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduceMotion) return;

    const items = Array.from(document.querySelectorAll('.content > *:not(.prev-next)'));
    items.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
  }

  function initChoosers() {
    document.querySelectorAll('.chooser').forEach((box) => {
      const options = JSON.parse(box.dataset.results);
      const result = box.querySelector('.chooser-result');

      box.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', () => {
          const item = options[Number(radio.value)];
          const title = document.createElement('strong');
          title.textContent = item.title;
          const text = document.createElement('p');
          text.textContent = item.text;
          result.replaceChildren(title, text);
          result.hidden = false;
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProgress();
    initCopyButtons();
    initReveal();
    initChoosers();
  });
})();
