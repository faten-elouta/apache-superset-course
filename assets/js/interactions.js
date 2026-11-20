(function () {
  const PREFIX = 'superset-course:';

  // localStorage peut être indisponible (navigation privée, données bloquées) : on dégrade sans erreur.
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(PREFIX + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* session seulement */ }
    },
    remove(key) {
      try { localStorage.removeItem(PREFIX + key); } catch (e) { /* rien */ }
    },
  };

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoursePage = () => document.body.dataset.page && document.body.dataset.page !== 'progression';

  /* ---------- Enregistrement des résultats (lu par la page « Ma progression ») ---------- */
  // Activités notées : on garde le meilleur résultat obtenu.
  function recordActivity(id, result) {
    if (!id) return;
    const all = store.get('activities', {});
    const prev = all[id] || {};
    all[id] = {
      ...prev,
      ...result,
      ok: !!(prev.ok || result.ok),
      attempts: (prev.attempts || 0) + 1,
      at: new Date().toISOString(),
    };
    store.set('activities', all);
  }
  // Quiz : score courant et meilleur score.
  function recordQuiz(id, good, answered, total) {
    if (!id) return;
    const all = store.get('quiz', {});
    const prev = all[id] || {};
    const complete = answered >= total;
    all[id] = {
      good, answered, total,
      best: complete ? Math.max(prev.best || 0, good) : prev.best,
      completedAt: complete ? new Date().toISOString() : prev.completedAt,
    };
    store.set('quiz', all);
  }
  window.courseStore = store;
  window.courseRecord = { activity: recordActivity, quiz: recordQuiz };

  // Temps passé (page visible uniquement) et jours d'activité.
  function initTimeTracking() {
    if (!isCoursePage()) return;
    const key = document.body.dataset.page;
    const today = new Date().toISOString().slice(0, 10);
    const days = store.get('days', []);
    if (!days.includes(today)) { days.push(today); store.set('days', days.slice(-120)); }
    if (!store.get('firstVisit', null)) store.set('firstVisit', new Date().toISOString());
    let pending = 0;
    let last = Date.now();
    const flush = () => {
      if (!pending) return;
      const t = store.get('time', {});
      t[key] = (t[key] || 0) + Math.round(pending / 1000);
      store.set('time', t);
      pending = 0;
    };
    setInterval(() => {
      const now = Date.now();
      // On ignore les pauses longues (onglet en veille, ordinateur suspendu).
      if (document.visibilityState === 'visible' && now - last < 60000) pending += now - last;
      last = now;
      if (pending >= 15000) flush();
    }, 5000);
    document.addEventListener('visibilitychange', () => { last = Date.now(); if (document.visibilityState === 'hidden') flush(); });
    addEventListener('pagehide', flush);
  }

  /* ---------- Thème ---------- */
  function initTheme() {
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const root = document.documentElement;
        const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try { localStorage.setItem(PREFIX + 'theme', next); } catch (e) { /* rien */ }
      });
    });
  }

  /* ---------- Progression ---------- */
  function initProgress() {
    const pageKey = document.body.dataset.page;
    const done = new Set(store.get('done', []));
    if (isCoursePage()) store.set('last', { key: pageKey, url: location.pathname, title: document.title.split(' — ')[0] });

    const tocLinks = Array.from(document.querySelectorAll('.toc a[data-page]'));
    const bar = document.querySelector('.progress-fill');
    const label = document.querySelector('.progress-label');
    const doneBtn = document.querySelector('.done-btn');

    function render() {
      tocLinks.forEach((a) => a.parentElement.classList.toggle('is-done', done.has(a.dataset.page)));
      const count = tocLinks.filter((a) => done.has(a.dataset.page)).length;
      if (bar) bar.style.width = (tocLinks.length ? (count / tocLinks.length) * 100 : 0) + '%';
      if (label) label.textContent = `${count} / ${tocLinks.length} étapes terminées`;
      if (doneBtn && pageKey) {
        const isDone = done.has(pageKey);
        doneBtn.classList.toggle('is-done', isDone);
        doneBtn.setAttribute('aria-pressed', String(isDone));
        doneBtn.textContent = isDone ? '✓ Étape terminée' : 'Marquer comme terminé';
      }
      // Accueil : progression par leçon
      document.querySelectorAll('.lesson-card').forEach((card) => {
        const links = Array.from(card.querySelectorAll('a[data-page]'));
        const n = links.filter((a) => done.has(a.dataset.page)).length;
        links.forEach((a) => a.parentElement.classList.toggle('is-done', done.has(a.dataset.page)));
        const fill = card.querySelector('.lesson-card-progress span');
        if (fill) fill.style.width = (links.length ? (n / links.length) * 100 : 0) + '%';
      });
    }

    if (doneBtn && pageKey) {
      doneBtn.addEventListener('click', () => {
        if (done.has(pageKey)) done.delete(pageKey);
        else { done.add(pageKey); burst(doneBtn); }
        store.set('done', Array.from(done));
        render();
      });
    }

    // Accueil : bouton « Reprendre »
    const resume = document.querySelector('.resume-btn');
    const last = store.get('last', null);
    if (resume && last && last.url && last.url !== resume.dataset.first) {
      resume.href = last.url;
      resume.textContent = `Reprendre : ${last.title} →`;
    }
    render();
  }

  /* ---------- Petits effets ---------- */
  function burst(el) {
    if (reduceMotion || !el) return;
    const r = el.getBoundingClientRect();
    const colors = ['#0a9fb0', '#6b3fd1', '#d6337a', '#f5a94a', '#12805c'];
    for (let i = 0; i < 26; i++) {
      const p = document.createElement('span');
      p.className = 'burst';
      p.style.left = r.left + r.width / 2 + 'px';
      p.style.top = r.top + r.height / 2 + 'px';
      p.style.background = colors[i % colors.length];
      const angle = (Math.PI * 2 * i) / 26;
      const dist = 60 + Math.random() * 70;
      p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  }
  window.courseBurst = burst;

  function initReadingProgress() {
    const bar = document.querySelector('.reading-progress span');
    if (!bar) return;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (max > 0 ? Math.min(1, scrollY / max) * 100 : 0) + '%';
    };
    addEventListener('scroll', update, { passive: true });
    update();
  }

  function initReveal() {
    if (!('IntersectionObserver' in window) || reduceMotion) return;
    const items = Array.from(document.querySelectorAll('.content > *:not(.page-meta):not(h1):not(.lead):not(.prev-next)'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return; // déjà visible : pas d'animation
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  function initCopyButtons() {
    document.querySelectorAll('.content pre:not(.sqlb-query)').forEach((pre) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copier';
      btn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(pre.querySelector('code') ? pre.querySelector('code').innerText.trim() : pre.innerText.trim()); btn.textContent = 'Copié ✓'; }
        catch (e) { btn.textContent = 'Échec'; }
        setTimeout(() => { btn.textContent = 'Copier'; }, 1500);
      });
      pre.appendChild(btn);
    });
  }

  function initMobileToc() {
    const toggle = document.getElementById('toc-toggle');
    if (!toggle) return;
    document.querySelectorAll('.toc a').forEach((a) => a.addEventListener('click', () => { toggle.checked = false; }));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle.checked = false; });
    // Recentre le sommaire sur l'étape active sans faire défiler la page elle-même.
    const toc = document.querySelector('.toc');
    const active = document.querySelector('.toc li.is-active');
    if (toc && active) toc.scrollTop = active.offsetTop - toc.clientHeight / 2;
  }

  function initLightbox() {
    document.querySelectorAll('a.zoomable').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const box = document.createElement('div');
        box.className = 'lightbox';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-label', 'Image agrandie — cliquer pour fermer');
        const img = document.createElement('img');
        img.src = a.getAttribute('href');
        img.alt = (a.querySelector('img') || {}).alt || '';
        box.appendChild(img);
        const close = () => { box.remove(); removeEventListener('keydown', onKey); a.focus(); };
        const onKey = (ev) => { if (ev.key === 'Escape') close(); };
        box.addEventListener('click', close);
        addEventListener('keydown', onKey);
        document.body.appendChild(box);
        box.tabIndex = -1;
        box.focus();
      });
    });
  }

  function initVideos() {
    document.querySelectorAll('.video-card[data-youtube]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.className = 'video-frame';
        iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.youtube}?autoplay=1&rel=0`;
        iframe.title = btn.getAttribute('aria-label') || 'Vidéo';
        iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        btn.replaceWith(iframe);
      });
    });
  }

  /* ---------- Cases persistantes (checklists, étapes) ---------- */
  function initPersistentChecks() {
    const saved = store.get('checks', {});
    document.querySelectorAll('input[type="checkbox"][data-persist]').forEach((cb) => {
      cb.checked = !!saved[cb.dataset.persist];
      cb.addEventListener('change', () => {
        const s = store.get('checks', {});
        if (cb.checked) s[cb.dataset.persist] = 1; else delete s[cb.dataset.persist];
        store.set('checks', s);
        updateNumberlists();
      });
    });
    updateNumberlists();
  }
  function updateNumberlists() {
    document.querySelectorAll('.numberlist-wrap.is-checkable').forEach((wrap) => {
      const boxes = wrap.querySelectorAll('input[type="checkbox"]');
      const n = Array.from(boxes).filter((b) => b.checked).length;
      const out = wrap.querySelector('.numberlist-progress');
      if (out) out.textContent = n ? (n === boxes.length ? `✓ Les ${n} étapes sont faites` : `${n} / ${boxes.length} étapes faites`) : '';
    });
    document.querySelectorAll('.checklist-box').forEach((box) => {
      const boxes = box.querySelectorAll('input[type="checkbox"]');
      const n = Array.from(boxes).filter((b) => b.checked).length;
      const out = box.querySelector('.checklist-progress');
      if (out) out.textContent = n === boxes.length ? '✓ Tout est vérifié : vous pouvez publier.' : `${n} / ${boxes.length} points vérifiés`;
    });
  }

  /* ---------- Onglets ---------- */
  function initTabs() {
    document.querySelectorAll('.infotabs').forEach((box) => {
      const tabs = Array.from(box.querySelectorAll('[role="tab"]'));
      const panels = Array.from(box.querySelectorAll('[role="tabpanel"]'));
      const select = (i, focus) => {
        tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
        panels.forEach((p, j) => p.classList.toggle('is-active', i === j));
        if (focus) tabs[i].focus();
      };
      tabs.forEach((t, i) => {
        t.addEventListener('click', () => select(i));
        t.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
          if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true);
        });
      });
    });
  }

  /* ---------- Carrousel ---------- */
  function initCarousels() {
    document.querySelectorAll('.carousel').forEach((box) => {
      const track = box.querySelector('.carousel-track');
      const slides = Array.from(box.querySelectorAll('.carousel-slide'));
      const dots = Array.from(box.querySelectorAll('.carousel-dot'));
      const [prev, next] = box.querySelectorAll('.carousel-btn');
      let index = 0;
      const go = (i) => {
        index = Math.max(0, Math.min(slides.length - 1, i));
        track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
        paint();
      };
      const paint = () => {
        dots.forEach((d, j) => d.classList.toggle('is-active', j === index));
        prev.disabled = index === 0;
        next.disabled = index === slides.length - 1;
      };
      prev.addEventListener('click', () => go(index - 1));
      next.addEventListener('click', () => go(index + 1));
      dots.forEach((d, j) => d.addEventListener('click', () => go(j)));
      let t;
      track.addEventListener('scroll', () => {
        clearTimeout(t);
        t = setTimeout(() => { index = Math.round(track.scrollLeft / track.clientWidth); paint(); }, 80);
      }, { passive: true });
      paint();
    });
  }

  /* ---------- Cartes à retourner ---------- */
  function initFlipcards() {
    document.querySelectorAll('.flipcard').forEach((card) => {
      card.addEventListener('click', () => card.setAttribute('aria-pressed', String(card.getAttribute('aria-pressed') !== 'true')));
    });
  }

  /* ---------- Choisir ---------- */
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

  /* ---------- Remettre dans l'ordre ---------- */
  function initSorters() {
    document.querySelectorAll('.sorter').forEach((box) => {
      const list = box.querySelector('.sorter-list');
      const feedback = box.querySelector('.activity-feedback');
      const explanation = box.querySelector('.activity-explanation');
      const items = () => Array.from(list.children);
      const clearMarks = () => items().forEach((li) => li.classList.remove('is-correct', 'is-incorrect'));
      const paint = () => {
        items().forEach((li, i, all) => {
          li.querySelector('.sorter-rank').textContent = i + 1;
          li.querySelector('.sorter-up').disabled = i === 0;
          li.querySelector('.sorter-down').disabled = i === all.length - 1;
        });
      };
      list.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const li = btn.closest('.sorter-item');
        if (btn.classList.contains('sorter-up') && li.previousElementSibling) list.insertBefore(li, li.previousElementSibling);
        if (btn.classList.contains('sorter-down') && li.nextElementSibling) list.insertBefore(li.nextElementSibling, li);
        clearMarks();
        feedback.hidden = true;
        li.classList.remove('is-moved'); void li.offsetWidth; li.classList.add('is-moved');
        paint();
        btn.focus();
      });
      box.querySelector('.sorter-check').addEventListener('click', () => {
        let good = 0;
        items().forEach((li, i) => {
          const ok = Number(li.dataset.pos) === i;
          li.classList.toggle('is-correct', ok);
          li.classList.toggle('is-incorrect', !ok);
          if (ok) good++;
        });
        const all = good === items().length;
        feedback.hidden = false;
        feedback.className = 'activity-feedback ' + (all ? 'is-success' : 'is-error');
        feedback.textContent = all ? 'Parfait, l’ordre est correct !' : `${good} élément(s) sur ${items().length} sont bien placés. Déplacez les éléments en rouge.`;
        if (all) { if (explanation) explanation.hidden = false; burst(feedback); }
        if (!box.dataset.revealed) recordActivity(box.id, { ok: all, score: good, total: items().length });
      });
      box.querySelector('.sorter-solution').addEventListener('click', () => {
        items().sort((a, b) => a.dataset.pos - b.dataset.pos).forEach((li) => list.appendChild(li));
        items().forEach((li) => { li.classList.add('is-correct'); li.classList.remove('is-incorrect'); });
        paint();
        feedback.hidden = false;
        feedback.className = 'activity-feedback is-success';
        feedback.textContent = 'Voici l’ordre attendu.';
        if (explanation) explanation.hidden = false;
        box.dataset.revealed = '1';
        recordActivity(box.id, { ok: false, revealed: true });
      });
      paint();
    });
  }

  /* ---------- Classer ---------- */
  function initClassifiers() {
    document.querySelectorAll('.classifier').forEach((box) => {
      const items = Array.from(box.querySelectorAll('.classifier-item'));
      const score = box.querySelector('.classifier-score');
      const update = () => {
        const answered = items.filter((i) => i.dataset.done);
        const good = answered.filter((i) => i.dataset.done === 'ok').length;
        score.textContent = answered.length ? `${good} / ${answered.length} bonne(s) réponse(s)${answered.length === items.length ? ' — terminé' : ''}` : '';
        if (answered.length === items.length && good === items.length) burst(score);
        if (answered.length === items.length) recordActivity(box.id, { ok: good === items.length, score: good, total: items.length });
      };
      items.forEach((item) => {
        item.querySelectorAll('.classifier-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            if (item.dataset.done) return;
            const ok = btn.dataset.choice === item.dataset.answer;
            item.dataset.done = ok ? 'ok' : 'ko';
            item.classList.add(ok ? 'is-correct' : 'is-incorrect');
            item.querySelectorAll('.classifier-btn').forEach((b) => {
              b.disabled = true;
              if (b.dataset.choice === item.dataset.answer) b.classList.add('is-right');
            });
            if (!ok) btn.classList.add('is-wrong');
            const exp = item.querySelector('.classifier-explanation');
            if (exp) exp.hidden = false;
            update();
          });
        });
      });
      box.querySelector('.classifier-reset').addEventListener('click', () => {
        items.forEach((item) => {
          delete item.dataset.done;
          item.classList.remove('is-correct', 'is-incorrect');
          item.querySelectorAll('.classifier-btn').forEach((b) => { b.disabled = false; b.classList.remove('is-right', 'is-wrong'); });
          const exp = item.querySelector('.classifier-explanation');
          if (exp) exp.hidden = true;
        });
        update();
      });
    });
  }

  /* ---------- Comparer ---------- */
  function initCompares() {
    document.querySelectorAll('.compare').forEach((box) => {
      const correct = box.dataset.correct;
      const feedback = box.querySelector('.activity-feedback');
      const explanation = box.querySelector('.activity-explanation');
      const options = Array.from(box.querySelectorAll('.compare-option'));
      options.forEach((opt) => {
        opt.addEventListener('click', () => {
          const ok = opt.dataset.choice === correct;
          options.forEach((o) => {
            o.disabled = true;
            if (o.dataset.choice === correct) o.classList.add('is-right');
          });
          if (!ok) opt.classList.add('is-wrong');
          feedback.hidden = false;
          feedback.className = 'activity-feedback ' + (ok ? 'is-success' : 'is-error');
          feedback.textContent = ok ? 'Exactement : cette version communique mieux le message.' : 'Pas celle-ci : regardez pourquoi l’autre version est plus efficace.';
          explanation.hidden = false;
          recordActivity(box.id, { ok, score: ok ? 1 : 0, total: 1 });
        });
      });
    });
  }

  /* ---------- Fiche de travail ---------- */
  function initWorksheets() {
    document.querySelectorAll('.worksheet').forEach((box) => {
      const key = 'sheet:' + box.dataset.sheet;
      const status = box.querySelector('.worksheet-status');
      const data = store.get(key, {});
      const recall = box.dataset.mode === 'recall';

      if (recall) {
        box.querySelectorAll('.worksheet-value').forEach((el) => {
          if (data[el.dataset.key]) el.textContent = data[el.dataset.key];
        });
        const filled = Object.values(data).filter(Boolean).length;
        status.textContent = filled ? '' : 'Votre fiche est vide : remplissez-la dans « Mise en pratique » (leçon 2).';
      } else {
        let timer;
        box.querySelectorAll('[data-key]').forEach((field) => {
          if (data[field.dataset.key]) field.value = data[field.dataset.key];
          field.addEventListener('input', () => {
            data[field.dataset.key] = field.value;
            store.set(key, data);
            status.textContent = 'Enregistré ✓';
            clearTimeout(timer);
            timer = setTimeout(() => { status.textContent = 'Enregistrement automatique dans ce navigateur.'; }, 1500);
          });
        });
        const clear = box.querySelector('.worksheet-clear');
        if (clear) {
          let armed = false;
          clear.addEventListener('click', () => {
            if (!armed) { armed = true; clear.textContent = 'Confirmer l’effacement'; setTimeout(() => { armed = false; clear.textContent = 'Effacer'; }, 3000); return; }
            store.remove(key);
            Object.keys(data).forEach((k) => delete data[k]);
            box.querySelectorAll('[data-key]').forEach((f) => { f.value = ''; });
            clear.textContent = 'Effacer';
            armed = false;
            status.textContent = 'Fiche effacée.';
          });
        }
      }

      box.querySelector('.worksheet-copy').addEventListener('click', async (e) => {
        const lines = [box.querySelector('.component-title').textContent.trim(), ''];
        box.querySelectorAll('.worksheet-field').forEach((f) => {
          const label = f.querySelector('label').textContent.trim();
          const el = f.querySelector('[data-key]');
          lines.push(`${label} : ${(recall ? data[el.dataset.key] : el.value) || '—'}`);
        });
        try { await navigator.clipboard.writeText(lines.join('\n')); e.target.textContent = 'Copiée ✓'; }
        catch (err) { e.target.textContent = 'Copie impossible'; }
        setTimeout(() => { e.target.textContent = 'Copier la fiche'; }, 1500);
      });
    });
  }

  /* ---------- Bac à sable SQL ---------- */
  function initSqlBuilders() {
    document.querySelectorAll('.sqlbuilder').forEach((box) => {
      const table = box.dataset.table;
      const rows = JSON.parse(box.dataset.rows);
      const textNumeric = JSON.parse(box.dataset.textNumeric);
      const q = (s) => box.querySelector(s);
      const codeEl = q('.sqlb-query code');
      const meta = q('.sqlb-meta');
      const tableEl = q('.sqlb-table');
      const isNum = (col, v) => textNumeric.includes(col) || typeof rows[0][col] === 'number' || (v !== '' && !isNaN(Number(v)) && /^-?\d/.test(v));
      const colExpr = (col) => (textNumeric.includes(col) ? `CAST(${col} AS REAL)` : col);
      const cmp = { '=': (a, b) => a === b, '>': (a, b) => a > b, '<': (a, b) => a < b, '>=': (a, b) => a >= b, '<=': (a, b) => a <= b };

      function run() {
        const groupBy = q('.sqlb-groupby').checked;
        const cols = Array.from(box.querySelectorAll('.sqlb-col:checked')).map((c) => c.value);
        box.querySelectorAll('.sqlb-col').forEach((c) => { c.disabled = groupBy; });
        const wCol = q('.sqlb-where-col').value;
        const wOp = q('.sqlb-where-op').value;
        const wVal = q('.sqlb-where-val').value.trim();
        const oCol = q('.sqlb-order-col').value;
        const oDir = q('.sqlb-order-dir').value;
        const limit = Math.max(1, Math.min(1000, Number(q('.sqlb-limit').value) || 10));
        const notes = [];

        // Construction du texte SQL
        let select;
        if (groupBy) select = 'nom_station,\n       ROUND(AVG(CAST(tmax_c AS REAL)), 1) AS tmax_moyenne';
        else select = cols.length === Object.keys(rows[0]).length || cols.length === 0 ? '*' : cols.join(', ');
        if (!groupBy && cols.length === 0) notes.push('Aucune colonne cochée : SELECT * par défaut.');
        let sql = `SELECT ${select}\nFROM ${table}`;
        let where = null;
        if (wCol && wVal !== '') {
          const numeric = isNum(wCol, wVal);
          sql += `\nWHERE ${numeric ? colExpr(wCol) : wCol} ${wOp} ${numeric ? Number(wVal) : `'${wVal.replace(/'/g, "''")}'`}`;
          where = (r) => {
            const a = numeric ? Number(r[wCol]) : String(r[wCol]);
            const b = numeric ? Number(wVal) : wVal;
            return cmp[wOp](a, b);
          };
        }
        if (groupBy) sql += '\nGROUP BY nom_station';
        let orderKey = null;
        if (oCol) {
          if (groupBy && oCol !== 'nom_station') {
            if (oCol === 'tmax_c') { orderKey = 'tmax_moyenne'; sql += `\nORDER BY tmax_moyenne ${oDir}`; }
            else notes.push(`Avec GROUP BY, on ne peut trier que sur nom_station ou tmax_moyenne : tri sur « ${oCol} » ignoré.`);
          } else {
            orderKey = oCol;
            sql += `\nORDER BY ${groupBy ? oCol : colExpr(oCol)} ${oDir}`;
          }
        }
        sql += `\nLIMIT ${limit};`;
        codeEl.textContent = sql;

        // Exécution sur l'échantillon
        let out = where ? rows.filter(where) : rows.slice();
        if (groupBy) {
          const groups = new Map();
          out.forEach((r) => {
            const g = groups.get(r.nom_station) || [];
            g.push(Number(r.tmax_c));
            groups.set(r.nom_station, g);
          });
          out = Array.from(groups, ([nom, vals]) => ({ nom_station: nom, tmax_moyenne: Math.round((vals.reduce((s, v) => s + v, 0) / vals.length) * 10) / 10 }));
        }
        if (orderKey) {
          const numeric = groupBy ? orderKey === 'tmax_moyenne' : isNum(orderKey, '');
          out.sort((a, b) => {
            const x = numeric ? Number(a[orderKey]) : String(a[orderKey]);
            const y = numeric ? Number(b[orderKey]) : String(b[orderKey]);
            return (x > y ? 1 : x < y ? -1 : 0) * (oDir === 'DESC' ? -1 : 1);
          });
        }
        const total = out.length;
        out = out.slice(0, limit);
        const shown = groupBy ? ['nom_station', 'tmax_moyenne'] : cols.length ? cols : Object.keys(rows[0]);

        const thead = document.createElement('thead');
        const hr = document.createElement('tr');
        shown.forEach((c) => { const th = document.createElement('th'); th.textContent = c; hr.appendChild(th); });
        thead.appendChild(hr);
        const tbody = document.createElement('tbody');
        out.forEach((r) => {
          const tr = document.createElement('tr');
          shown.forEach((c) => { const td = document.createElement('td'); td.textContent = r[c]; tr.appendChild(td); });
          tbody.appendChild(tr);
        });
        tableEl.replaceChildren(thead, tbody);
        meta.classList.toggle('is-error', total === 0);
        meta.textContent = `${out.length} ligne(s) affichée(s)` + (total > out.length ? ` sur ${total} (LIMIT)` : '') + (total === 0 ? ' — aucun résultat : vérifiez le filtre.' : '') + (notes.length ? ' · ' + notes.join(' ') : '');
      }

      box.addEventListener('input', run);
      box.addEventListener('change', () => { run(); store.set('sqlUsed', true); });
      run();
    });
  }

  /* ---------- Lecture guidée des schémas et maquettes (zones numérotées) ---------- */
  function initReadings() {
    document.querySelectorAll('[data-reading]').forEach((box) => {
      const btn = box.querySelector('.reading-play');
      const caption = box.querySelector('.reading-caption');
      if (!btn) return;
      const zones = Array.from(box.querySelectorAll('.zone'));
      const steps = Array.from(new Set(zones.map((z) => Number(z.dataset.step)))).sort((a, b) => a - b);
      const label = (s) => {
        const z = zones.find((el) => Number(el.dataset.step) === s && el.dataset.label);
        return `Étape ${s} / ${steps.length}${z ? ' — ' + z.dataset.label : ''}`;
      };
      let timer = null;
      const stop = () => {
        clearTimeout(timer);
        timer = null;
        box.classList.remove('is-reading');
        zones.forEach((z) => z.classList.remove('is-lit'));
      };
      const show = (i) => {
        if (i >= steps.length) {
          stop();
          caption.textContent = 'Lecture terminée : tout le récit est visible.';
          btn.textContent = '↺ Revoir l’ordre de lecture';
          return;
        }
        box.classList.add('is-reading');
        zones.forEach((z) => z.classList.toggle('is-lit', Number(z.dataset.step) === steps[i]));
        caption.textContent = label(steps[i]);
        timer = setTimeout(() => show(i + 1), 2200);
      };
      btn.addEventListener('click', () => {
        if (timer) { stop(); caption.textContent = ''; btn.textContent = '▶ Voir l’ordre de lecture'; return; }
        btn.textContent = '■ Arrêter';
        show(0);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTimeTracking();
    initReadings();
    initTheme();
    initProgress();
    initReadingProgress();
    initMobileToc();
    initCopyButtons();
    initLightbox();
    initVideos();
    initPersistentChecks();
    initTabs();
    initCarousels();
    initFlipcards();
    initChoosers();
    initSorters();
    initClassifiers();
    initCompares();
    initWorksheets();
    initSqlBuilders();
    initReveal();
  });
})();
