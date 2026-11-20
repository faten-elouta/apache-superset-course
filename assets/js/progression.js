// Page « Ma progression » : tableau de bord personnel calculé à partir du localStorage.
(function () {
  const PREFIX = 'superset-course:';
  const store = window.courseStore;
  const course = JSON.parse(document.getElementById('course-data').textContent);
  const BASE = (document.querySelector('.toc-home') || { getAttribute: () => '/index.html' }).getAttribute('href').replace(/index\.html$/, '');
  const url = (u) => BASE + u.replace(/^\//, '');
  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  };
  const fmtTime = (s) => {
    if (!s) return '0 min';
    const m = Math.round(s / 60);
    return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')}`;
  };

  function load() {
    return {
      done: new Set(store.get('done', [])),
      quiz: store.get('quiz', {}),
      acts: store.get('activities', {}),
      time: store.get('time', {}),
      days: store.get('days', []),
      sheet: store.get('sheet:fiche-recit', {}),
      sqlUsed: store.get('sqlUsed', false),
    };
  }

  function render() {
    const d = load();
    const pages = course.lessons.flatMap((l) => l.pages.map((p) => ({ ...p, lesson: l })));
    const doneCount = pages.filter((p) => d.done.has(p.key)).length;
    const pct = pages.length ? Math.round((doneCount / pages.length) * 100) : 0;

    // ----- Vue d'ensemble
    const allQuizzes = pages.flatMap((p) => p.quizzes.map((q) => ({ ...q, page: p })));
    const doneQuizzes = allQuizzes.filter((q) => d.quiz[q.id] && d.quiz[q.id].best !== undefined);
    const qGood = doneQuizzes.reduce((s, q) => s + d.quiz[q.id].best, 0);
    const qTotal = doneQuizzes.reduce((s, q) => s + q.total, 0);
    const allActs = pages.flatMap((p) => p.activities);
    const actsOk = allActs.filter((a) => d.acts[a.id] && d.acts[a.id].ok).length;
    const totalTime = Object.values(d.time).reduce((s, v) => s + v, 0);

    $('.ring-fg').style.strokeDasharray = `${pct} 100`;
    $('[data-stat="percent"]').textContent = `${pct} %`;
    $('[data-stat="steps"]').textContent = `${doneCount} / ${pages.length}`;
    $('[data-stat="quiz"]').textContent = qTotal ? `${Math.round((qGood / qTotal) * 100)} %` : '—';
    $('[data-stat="quiz"]').parentElement.querySelector('span').textContent = `réussite aux quiz (${doneQuizzes.length} / ${allQuizzes.length} faits)`;
    $('[data-stat="activities"]').textContent = `${actsOk} / ${allActs.length}`;
    $('[data-stat="time"]').textContent = fmtTime(totalTime);

    const next = pages.find((p) => !d.done.has(p.key));
    const nextBtn = $('[data-next]');
    if (next) {
      nextBtn.href = url(next.url);
      nextBtn.textContent = `${doneCount ? 'Continuer' : 'Commencer'} : ${next.title} →`;
    } else {
      nextBtn.href = url(pages[pages.length - 1].url);
      nextBtn.textContent = 'Parcours terminé — revoir le résumé →';
    }

    // ----- Par leçon
    const lessonsBox = $('[data-lessons]');
    lessonsBox.replaceChildren();
    course.lessons.forEach((l) => {
      const n = l.pages.filter((p) => d.done.has(p.key)).length;
      const card = el('article', 'prog-lesson');
      const head = el('div', 'prog-lesson-head');
      head.append(el('span', 'lesson-card-num', String(l.number)), el('h3', '', l.title), el('span', 'prog-lesson-count', `${n} / ${l.pages.length}`));
      const bar = el('div', 'prog-bar');
      const fill = el('span');
      fill.style.width = `${(n / l.pages.length) * 100}%`;
      bar.append(fill);
      const list = el('ol', 'prog-steps');
      l.pages.forEach((p) => {
        const li = el('li');
        const isDone = d.done.has(p.key);
        const started = !isDone && ((d.time[p.key] || 0) > 0 || p.quizzes.some((q) => d.quiz[q.id]) || p.activities.some((a) => d.acts[a.id]));
        li.className = isDone ? 'is-done' : started ? 'is-started' : '';
        const icon = el('span', 'prog-icon', isDone ? '✓' : started ? '◐' : '○');
        icon.title = isDone ? 'Terminée' : started ? 'Commencée' : 'À faire';
        const a = el('a', '', p.title);
        a.href = url(p.url);
        const meta = el('span', 'prog-meta');
        if (d.time[p.key]) meta.append(el('span', 'prog-chip', `⏱ ${fmtTime(d.time[p.key])}`));
        p.quizzes.forEach((q) => {
          const r = d.quiz[q.id];
          const chip = el('span', 'prog-chip', r && r.best !== undefined ? `Quiz ${r.best}/${q.total}` : `Quiz –/${q.total}`);
          if (r && r.best === q.total) chip.classList.add('is-good');
          meta.append(chip);
        });
        if (p.activities.length) {
          const ok = p.activities.filter((x) => d.acts[x.id] && d.acts[x.id].ok).length;
          const chip = el('span', 'prog-chip', `Activités ${ok}/${p.activities.length}`);
          if (ok === p.activities.length) chip.classList.add('is-good');
          meta.append(chip);
        }
        li.append(icon, a, meta);
        list.append(li);
      });
      card.append(head, bar, list);
      lessonsBox.append(card);
    });

    // ----- Par phase
    const phasesBox = $('[data-phases]');
    phasesBox.replaceChildren();
    Object.entries(course.phases).forEach(([key, ph]) => {
      const ps = pages.filter((p) => p.phases.includes(key));
      const n = ps.filter((p) => d.done.has(p.key)).length;
      const row = el('div', `prog-phase phase-${key}`);
      const label = el('div', 'prog-phase-label');
      label.append(el('strong', '', `${ph.n} · ${ph.label}`), el('span', '', `${n} / ${ps.length} étapes`));
      const bar = el('div', 'prog-bar');
      const fill = el('span');
      fill.style.width = ps.length ? `${(n / ps.length) * 100}%` : '0';
      bar.append(fill);
      row.append(label, bar);
      phasesBox.append(row);
    });

    // ----- Quiz
    const table = $('[data-quizzes]');
    const thead = el('thead');
    const hr = el('tr');
    ['Étape', 'Meilleur score', 'Statut', ''].forEach((h) => hr.append(el('th', '', h)));
    thead.append(hr);
    const tbody = el('tbody');
    allQuizzes.forEach((q) => {
      const r = d.quiz[q.id];
      const tr = el('tr');
      const best = r && r.best !== undefined ? r.best : null;
      const status = best === null ? (r ? 'En cours' : 'À faire') : best === q.total ? 'Sans faute' : best / q.total >= 0.7 ? 'Réussi' : 'À revoir';
      const a = el('a', '', best === null ? 'Faire le quiz →' : 'Refaire →');
      a.href = url(q.page.url) + '#' + q.id;
      const stat = el('td', '', status);
      stat.className = 'prog-status prog-status-' + status.toLowerCase().replace(/[^a-z]/g, '');
      tr.append(el('td', '', q.page.title), el('td', '', best === null ? '—' : `${best} / ${q.total}`), stat);
      const td = el('td');
      td.append(a);
      tr.append(td);
      tbody.append(tr);
    });
    table.replaceChildren(thead, tbody);

    // ----- Fiche récit
    const sheetBox = $('[data-sheet]');
    sheetBox.replaceChildren();
    const fields = course.worksheetFields;
    const filled = fields.filter((f) => (d.sheet[f.key] || '').trim()).length;
    const sheetHead = el('p', 'prog-help', `${filled} / ${fields.length} rubriques renseignées.`);
    const ul = el('ul', 'prog-sheet-list');
    fields.forEach((f) => {
      const ok = (d.sheet[f.key] || '').trim();
      const li = el('li', ok ? 'is-done' : '');
      li.append(el('span', 'prog-icon', ok ? '✓' : '○'), el('span', '', f.label));
      ul.append(li);
    });
    const sheetPage = pages.find((p) => p.worksheet);
    const link = el('a', 'btn', filled ? 'Compléter ma fiche →' : 'Remplir ma fiche →');
    if (sheetPage) link.href = url(sheetPage.url);
    sheetBox.append(sheetHead, ul, link);

    // ----- Badges
    const lessonDone = (i) => course.lessons[i] && course.lessons[i].pages.every((p) => d.done.has(p.key));
    const finalQuiz = allQuizzes[allQuizzes.length - 1];
    const finalBest = finalQuiz && d.quiz[finalQuiz.id] ? d.quiz[finalQuiz.id].best : undefined;
    const badges = [
      ['🚀', 'Premier pas', 'Terminer une première étape', doneCount >= 1],
      ['🧭', 'Cadre maîtrisé', 'Terminer la leçon 2 (récit de données)', lessonDone(1)],
      ['📝', 'Fiche récit complète', 'Renseigner toutes les rubriques de la fiche', fields.length && filled === fields.length],
      ['⌨', 'Exploration SQL', 'Utiliser le bac à sable SQL', d.sqlUsed],
      ['📊', 'Superset en main', 'Terminer la leçon 3 (Superset)', lessonDone(2)],
      ['🎯', 'Sans faute', 'Réussir un quiz sans erreur', allQuizzes.some((q) => d.quiz[q.id] && d.quiz[q.id].best === q.total)],
      ['🧩', 'Activités réussies', 'Réussir la moitié des activités', allActs.length && actsOk >= allActs.length / 2],
      ['🏅', 'Évaluation réussie', 'Obtenir au moins 70 % au quiz final', finalBest !== undefined && finalBest / finalQuiz.total >= 0.7],
      ['📅', 'Régularité', 'Travailler le cours sur 3 jours différents', d.days.length >= 3],
      ['🎓', 'Parcours terminé', 'Terminer toutes les étapes', doneCount === pages.length],
    ];
    const badgesBox = $('[data-badges]');
    badgesBox.replaceChildren();
    badges.forEach(([icon, name, how, got]) => {
      const b = el('div', 'prog-badge' + (got ? ' is-earned' : ''));
      b.append(el('span', 'prog-badge-icon', icon), el('strong', '', name), el('span', '', got ? 'Obtenu' : how));
      badgesBox.append(b);
    });

    // ----- Jours d'activité (28 derniers jours)
    const daysBox = $('[data-days]');
    daysBox.replaceChildren();
    const set = new Set(d.days);
    const grid = el('div', 'prog-days-grid');
    for (let i = 27; i >= 0; i--) {
      const day = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      const cell = el('span', set.has(day) ? 'is-on' : '');
      cell.title = new Date(day).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) + (set.has(day) ? ' — activité' : '');
      grid.append(cell);
    }
    const first = store.get('firstVisit', null);
    daysBox.append(grid, el('p', 'prog-help', `${d.days.length} jour(s) d’activité au total` + (first ? ` · première visite le ${new Date(first).toLocaleDateString('fr-FR')}` : '')));
  }

  // ----- Sauvegarde, import, réinitialisation
  function snapshot() {
    const data = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k.startsWith(PREFIX) && k !== PREFIX + 'theme') data[k] = localStorage.getItem(k);
      }
    } catch (e) { /* stockage indisponible */ }
    return btoa(unescape(encodeURIComponent(JSON.stringify({ v: 1, data }))));
  }
  const status = $('.prog-tools-status');
  $('[data-export]').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(snapshot()); status.textContent = 'Code copié : collez-le dans « Importer » sur votre autre appareil.'; }
    catch (e) { $('#prog-import').value = snapshot(); status.textContent = 'Copie automatique impossible : le code est affiché ci-dessus, copiez-le manuellement.'; }
  });
  let importArmed = false;
  $('[data-import]').addEventListener('click', (e) => {
    const raw = $('#prog-import').value.trim();
    let parsed;
    try { parsed = JSON.parse(decodeURIComponent(escape(atob(raw)))); } catch (err) { status.textContent = 'Code invalide : vérifiez qu’il a été copié en entier.'; return; }
    if (!parsed || parsed.v !== 1 || !parsed.data) { status.textContent = 'Code non reconnu.'; return; }
    if (!importArmed) { importArmed = true; e.target.textContent = 'Confirmer : remplacer ma progression actuelle'; return; }
    try { Object.entries(parsed.data).forEach(([k, v]) => { if (k.startsWith(PREFIX)) localStorage.setItem(k, v); }); } catch (err) { status.textContent = 'Import impossible : stockage du navigateur indisponible.'; return; }
    importArmed = false;
    e.target.textContent = 'Importer';
    status.textContent = 'Progression importée ✓';
    render();
  });
  let resetArmed = false;
  $('[data-reset]').addEventListener('click', (e) => {
    if (!resetArmed) {
      resetArmed = true;
      e.target.textContent = 'Confirmer : tout effacer';
      setTimeout(() => { resetArmed = false; e.target.textContent = 'Réinitialiser'; }, 4000);
      return;
    }
    try {
      Object.keys(localStorage).filter((k) => k.startsWith(PREFIX) && k !== PREFIX + 'theme').forEach((k) => localStorage.removeItem(k));
    } catch (err) { /* rien */ }
    resetArmed = false;
    e.target.textContent = 'Réinitialiser';
    status.textContent = 'Progression effacée.';
    render();
  });
  $('[data-print]').addEventListener('click', () => window.print());

  document.addEventListener('DOMContentLoaded', render);
})();
