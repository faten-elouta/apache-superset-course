#!/usr/bin/env node
// Génère les schémas des structures narratives, les maquettes de dashboards Superset correspondantes
// et le schéma du modèle en quatre couches. Données d'exemple (fictives) inspirées de PREVIZO.
// Les zones <g class="zone" data-step="n"> sont animées par le bouton « Voir l'ordre de lecture ».
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'images', 'structures');
fs.mkdirSync(OUT, { recursive: true });

const FONT = "Inter, 'Segoe UI', Arial, sans-serif";
const C = {
  ink: '#1c1830', muted: '#6b6684', faint: '#a29dba', line: '#e3e0ee', bg: '#f6f5fb', card: '#ffffff',
  accent: '#c02d6b', accentSoft: '#fbe5ee', grey: '#c3bfd2', violet: '#6b3fd1', violetSoft: '#eee8fc',
  blue: '#1d5fc4', blueSoft: '#e3edfc', amber: '#9a5b00', amberSoft: '#fdf2d4', pinkSoft: '#fbe5ee',
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const T = (x, y, s, o = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size || 11}" fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}"${o.weight ? ` font-weight="${o.weight}"` : ''}${o.italic ? ' font-style="italic"' : ''}>${esc(s)}</text>`;
const R = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 8}" fill="${o.fill || C.card}" stroke="${o.stroke || C.line}" stroke-width="${o.sw || 1}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const svg = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><rect width="${w}" height="${h}" rx="14" fill="${C.bg}"/>${body}</svg>\n`;
const zone = (step, body, label) => `<g class="zone" data-step="${step}"${label ? ` data-label="${esc(label)}"` : ''}>${body}</g>`;
const badge = (x, y, n, color = C.ink) =>
  `<circle cx="${x}" cy="${y}" r="11" fill="${color}"/>${T(x, y + 4, n, { anchor: 'middle', size: 12, weight: 800, fill: '#fff' })}`;
const arrow = (x1, y1, x2, y2, color = C.faint, w = 2) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const hx = x2 - 9 * Math.cos(a - 0.45), hy = y2 - 9 * Math.sin(a - 0.45);
  const kx = x2 - 9 * Math.cos(a + 0.45), ky = y2 - 9 * Math.sin(a + 0.45);
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/><path d="M${x2},${y2} L${hx.toFixed(1)},${hy.toFixed(1)} L${kx.toFixed(1)},${ky.toFixed(1)} Z" fill="${color}"/>`;
};
const wrap = (x, y, text, width, o = {}) => {
  const size = o.size || 11;
  const maxChars = Math.floor(width / (size * 0.52));
  const words = String(text).split(' ');
  const lines = [];
  let cur = '';
  words.forEach((w) => { if ((cur + ' ' + w).trim().length > maxChars) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; });
  if (cur.trim()) lines.push(cur.trim());
  return lines.map((l, i) => T(x, y + i * (size + 4), l, o)).join('');
};

// ---------- Données PREVIZO (fictives) ----------
const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai'];
const series = [
  ['Tours', [8.1, 10.2, 13.9, 16.8, 23.4]],
  ['Blois', [7.8, 9.6, 13.1, 16.1, 20.2]],
  ['Orléans', [7.2, 9.1, 12.8, 15.7, 19.6]],
  ['Bourges', [8.4, 10.0, 13.5, 16.4, 20.5]],
  ['Chartres', [6.9, 8.7, 12.2, 15.1, 18.9]],
];
const mai = series.map(([n, v]) => [n, v[4]]).sort((a, b) => b[1] - a[1]);

// ---------- Composants de maquette ----------
function card(x, y, w, h, title) {
  return R(x, y, w, h) + (title ? T(x + 10, y + 17, title, { size: 10.5, weight: 700 }) : '');
}
function kpi(x, y, w, h, value, label, o = {}) {
  let s = card(x, y, w, h);
  s += T(x + 10, y + 16, label, { size: 9.5, fill: C.muted });
  s += T(x + 10, y + h - 14, value, { size: o.big || 22, weight: 800, fill: o.color || C.ink });
  if (o.trend) {
    const pts = o.trend.map((v, i) => `${(x + w - 70 + i * 14).toFixed(1)},${(y + h - 14 - (v - 8) * 1.4).toFixed(1)}`).join(' ');
    s += `<polyline points="${pts}" fill="none" stroke="${o.color || C.accent}" stroke-width="2"/>`;
  }
  return s;
}
function lineChart(x, y, w, h, title, o = {}) {
  let s = card(x, y, w, h, title);
  const l = x + 14, r = x + w - (o.labels ? 52 : 12), t = y + 28, b = y + h - 18;
  const X = (i) => l + (i / 4) * (r - l);
  const Y = (v) => b - ((v - 6) / 18) * (b - t);
  [10, 15, 20].forEach((g) => { s += `<line x1="${l}" x2="${r}" y1="${Y(g)}" y2="${Y(g)}" stroke="${C.line}"/>`; });
  months.forEach((m, i) => { s += T(X(i), b + 12, m, { size: 8, fill: C.faint, anchor: 'middle' }); });
  [...series.slice(1), series[0]].forEach(([n, v]) => {
    const hi = n === 'Tours';
    s += `<polyline points="${v.map((p, i) => `${X(i).toFixed(1)},${Y(p).toFixed(1)}`).join(' ')}" fill="none" stroke="${hi ? C.accent : C.grey}" stroke-width="${hi ? 2.6 : 1.4}"/>`;
  });
  if (o.labels) s += T(r + 6, Y(23.4) + 4, 'Tours', { size: 9, weight: 700, fill: C.accent }) + T(r + 6, Y(19.8) + 4, 'autres', { size: 9, fill: C.muted });
  if (o.annot) s += `<circle cx="${X(4)}" cy="${Y(23.4)}" r="3.5" fill="${C.accent}"/>` + T(X(4) - 6, Y(23.4) - 6, '+6,6 °C', { size: 9, weight: 700, fill: C.accent, anchor: 'end' });
  return s;
}
function barChart(x, y, w, h, title) {
  let s = card(x, y, w, h, title);
  const l = x + 62, r = x + w - 30, t = y + 30;
  const bh = Math.min(14, (h - 40) / mai.length - 4);
  mai.forEach(([n, v], i) => {
    const yy = t + i * (bh + 5);
    const hi = n === 'Tours';
    s += T(l - 6, yy + bh - 3, n, { size: 9, anchor: 'end', weight: hi ? 700 : null });
    s += `<rect x="${l}" y="${yy}" width="${(((v - 0) / 25) * (r - l)).toFixed(1)}" height="${bh}" rx="2" fill="${hi ? C.accent : C.grey}"/>`;
    s += T(l + ((v / 25) * (r - l)) + 4, yy + bh - 3, String(v).replace('.', ','), { size: 8.5, fill: hi ? C.accent : C.muted, weight: hi ? 700 : null });
  });
  return s;
}
function table(x, y, w, h, title) {
  let s = card(x, y, w, h, title);
  const cols = ['Station', 'Tmax mai', 'Évolution'];
  const cx = [x + 12, x + w * 0.45, x + w * 0.72];
  s += `<line x1="${x + 8}" x2="${x + w - 8}" y1="${y + 34}" y2="${y + 34}" stroke="${C.line}"/>`;
  cols.forEach((c, i) => { s += T(cx[i], y + 30, c, { size: 9, weight: 700, fill: C.muted }); });
  const rows = Math.max(1, Math.floor((h - 42) / 15));
  mai.slice(0, rows).forEach(([n, v], i) => {
    const ev = (v - series.find((sr) => sr[0] === n)[1][3]).toFixed(1).replace('.', ',');
    s += T(cx[0], y + 48 + i * 15, n, { size: 9 }) + T(cx[1], y + 48 + i * 15, `${String(v).replace('.', ',')} °C`, { size: 9 }) + T(cx[2], y + 48 + i * 15, `+${ev} °C`, { size: 9, fill: n === 'Tours' ? C.accent : C.ink });
  });
  return s;
}
function textBox(x, y, w, h, title, text, o = {}) {
  let s = R(x, y, w, h, { fill: o.fill || C.card, stroke: o.stroke || C.line });
  s += T(x + 10, y + 18, title, { size: o.titleSize || 10.5, weight: 800, fill: o.titleColor || C.ink });
  s += wrap(x + 10, y + 34, text, w - 20, { size: o.size || 9.5, fill: o.color || C.muted });
  return s;
}
function header(w, title, subtitle) {
  return `<rect x="16" y="14" width="${w - 32}" height="44" rx="10" fill="#1d1736"/>` +
    T(30, 33, title, { size: 13, weight: 800, fill: '#fff' }) + T(30, 49, subtitle, { size: 9.5, fill: '#c9c2ea' });
}
function filters(x, y, w) {
  return R(x, y, w, 26, { fill: C.violetSoft, stroke: C.violetSoft }) +
    T(x + 10, y + 17, '⚲ Filtres', { size: 10, weight: 700, fill: C.violet }) +
    R(x + 70, y + 5, 110, 16, { rx: 4 }) + T(x + 78, y + 17, 'Station : toutes ▾', { size: 9 }) +
    R(x + 188, y + 5, 130, 16, { rx: 4 }) + T(x + 196, y + 17, 'Période : janv.–mai ▾', { size: 9 });
}

// ---------- Maquettes de dashboards ----------
const W = 760, H = 480;
const mocks = {};

mocks['pyramide'] = svg(W, H,
  header(W, 'Tours : la plus forte hausse du réseau en mai', 'Dashboard PREVIZO — structure en pyramide inversée') +
  zone(1,
    kpi(16, 68, 236, 72, '23,4 °C', 'Tmax moyenne de mai à Tours', { color: C.accent, trend: series[0][1] }) +
    kpi(262, 68, 236, 72, '+6,6 °C', 'Hausse avril → mai à Tours', { color: C.accent }) +
    kpi(508, 68, 236, 72, '≈ +4 °C', 'Hausse des autres stations', { color: C.ink }) +
    badge(238, 82, '1', C.accent), 'L’essentiel : le message et les chiffres clés') +
  zone(2,
    lineChart(16, 150, 400, 190, 'Les maximales s’accélèrent en mai, surtout à Tours', { labels: true, annot: true }) +
    barChart(426, 150, 318, 190, 'Tours est la station la plus chaude en mai') +
    badge(400, 164, '2', C.violet), 'Les preuves : évolution et classement') +
  zone(3, table(16, 350, 728, 116, 'Détail par station (vérification)') + badge(728, 374, '3', C.blue), 'Les détails, pour vérifier'),
  'Maquette de dashboard en pyramide inversée');

mocks['trois-actes'] = svg(W, H,
  header(W, 'Le printemps 2026 sur le réseau PREVIZO', 'Dashboard PREVIZO — structure en trois actes (un onglet par acte)') +
  `<g>${R(16, 66, 728, 28, { fill: C.card })}${['Acte 1 · Contexte', 'Acte 2 · Analyse', 'Acte 3 · Recommandations'].map((t, i) =>
    R(22 + i * 160, 70, 152, 20, { rx: 6, fill: i === 0 ? '#1d1736' : C.bg, stroke: i === 0 ? '#1d1736' : C.line }) + T(98 + i * 160, 84, t, { size: 9.5, weight: 700, anchor: 'middle', fill: i === 0 ? '#fff' : C.muted })).join('')}</g>` +
  zone(1,
    R(16, 104, 236, 362, { fill: '#fbfaff' }) + T(28, 124, 'ONGLET 1 — CONTEXTE', { size: 9, weight: 800, fill: C.muted }) +
    textBox(26, 134, 216, 108, 'Pourquoi suivre la chaleur ?', 'Cinq stations mesurent les températures du réseau. Un printemps chaud annonce des risques pour l’été : sécheresse, vigilance canicule.') +
    kpi(26, 252, 216, 64, '5 stations', 'Réseau PREVIZO') +
    textBox(26, 326, 216, 128, 'Définitions', 'Tmax : température maximale journalière. Moyenne mensuelle par station, janvier à mai 2026.') +
    badge(236, 116, '1', C.accent), 'Acte 1 : poser le contexte') +
  zone(2,
    R(262, 104, 236, 362, { fill: '#fbfaff' }) + T(274, 124, 'ONGLET 2 — ANALYSE', { size: 9, weight: 800, fill: C.muted }) +
    lineChart(272, 134, 216, 160, 'Évolution des maximales', { annot: true }) +
    barChart(272, 302, 216, 152, 'Classement en mai') +
    badge(482, 116, '2', C.violet), 'Acte 2 : dérouler l’analyse') +
  zone(3,
    R(508, 104, 236, 362, { fill: '#fbfaff' }) + T(520, 124, 'ONGLET 3 — RECOMMANDATIONS', { size: 9, weight: 800, fill: C.muted }) +
    textBox(518, 134, 216, 120, 'Ce qu’il faut retenir', 'Tours connaît la plus forte hausse du réseau en mai (+6,6 °C), nettement au-dessus des autres stations.', { fill: C.accentSoft, stroke: C.accentSoft, titleColor: C.accent }) +
    textBox(518, 264, 216, 190, 'Actions proposées', '1. Renforcer le suivi de Tours dès juin.  2. Vérifier le capteur.  3. Préparer une alerte canicule.') +
    badge(728, 116, '3', C.blue), 'Acte 3 : conclure et recommander'),
  'Maquette de dashboard en trois actes');

mocks['question'] = svg(W, H,
  header(W, 'Le printemps 2026 a-t-il été anormalement chaud à Tours ?', 'Dashboard PREVIZO — question → preuves → retour à la question') +
  zone(1, R(16, 68, 728, 44, { fill: C.violetSoft, stroke: C.violetSoft }) + T(380, 95, '❓ La question posée au lecteur : Tours a-t-elle connu un printemps anormal ?', { size: 12, weight: 700, anchor: 'middle', fill: C.violet }) + badge(30, 90, '1', C.violet), 'La question ou l’affirmation de départ') +
  zone(2,
    kpi(16, 122, 236, 200, '+6,6 °C', 'Preuve 1 — hausse d’avril à mai', { big: 30, color: C.accent, trend: series[0][1] }) +
    lineChart(262, 122, 236, 200, 'Preuve 2 — elle décroche en mai', { annot: true }) +
    barChart(508, 122, 236, 200, 'Preuve 3 — la plus chaude') +
    badge(236, 138, '2', C.ink), 'Les preuves, une par une') +
  zone(3,
    R(16, 332, 728, 134, { fill: C.accentSoft, stroke: C.accent }) + T(32, 356, '✔ Réponse : oui.', { size: 13, weight: 800, fill: C.accent }) +
    wrap(32, 376, 'En mai, Tours gagne 6,6 °C quand les autres stations gagnent environ 4 °C : c’est la plus forte hausse et la station la plus chaude du réseau. Son suivi doit être renforcé.', 690, { size: 11, fill: C.ink }) +
    badge(730, 346, '3', C.accent), 'Le retour à la question : la réponse') +
  `<path d="M748,400 C772,400 772,90 748,90" fill="none" stroke="${C.accent}" stroke-width="2" stroke-dasharray="5 4"/>`,
  'Maquette de dashboard question, preuves, retour');

mocks['martini'] = svg(W, H,
  header(W, 'Chaleur du printemps 2026 : explorez par station', 'Dashboard PREVIZO — verre à martini (guidé, puis exploration libre)') +
  zone(1,
    R(196, 66, 368, 132, { fill: C.card, stroke: C.accent }) + T(380, 84, 'PARTIE GUIDÉE PAR L’AUTEUR', { size: 9, weight: 800, fill: C.accent, anchor: 'middle' }) +
    kpi(206, 92, 170, 96, '+6,6 °C', 'Tours, avril → mai', { color: C.accent }) +
    textBox(384, 92, 170, 96, 'Le message', 'Tours connaît la plus forte hausse du réseau en mai.', { size: 9.5 }) +
    badge(208, 78, '1', C.accent), 'Le pied du verre : une séquence guidée') +
  `<path d="M300,198 L300,214 M460,198 L460,214" stroke="${C.faint}" stroke-width="2"/>` +
  zone(2,
    R(16, 214, 728, 252, { fill: '#fbfaff', stroke: C.violet }) + T(380, 232, 'PARTIE GUIDÉE PAR LE LECTEUR : EXPLORATION LIBRE', { size: 9, weight: 800, fill: C.violet, anchor: 'middle' }) +
    filters(26, 240, 708) +
    lineChart(26, 274, 350, 182, 'Évolution — filtrable par station') +
    barChart(386, 274, 348, 182, 'Classement — filtrable par période') +
    T(300, 330, '☝', { size: 18, fill: C.violet }) + T(640, 400, '☝', { size: 18, fill: C.violet }) +
    badge(28, 222, '2', C.violet), 'Le bol du verre : filtres et exploration'),
  'Maquette de dashboard en verre à martini');

mocks['kabob'] = svg(W, H,
  header(W, 'Tours doit être équipée en priorité', 'Dashboard PREVIZO — kabob (un ancrage rappelé du début à la fin)') +
  `<line x1="40" y1="80" x2="40" y2="456" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>` +
  zone(1, `<circle cx="40" cy="104" r="14" fill="${C.accent}"/>` + kpi(66, 70, 678, 70, 'Tours : +6,6 °C en un mois', 'Ancrage — le fait marquant qui ouvre le récit', { big: 20, color: C.accent }) + badge(40, 104, '1', C.accent), 'L’ancrage') +
  zone(2,
    R(28, 162, 24, 24, { rx: 4, fill: C.grey, stroke: C.grey }) + R(28, 250, 24, 24, { rx: 4, fill: C.grey, stroke: C.grey }) + R(28, 330, 24, 24, { rx: 4, fill: C.grey, stroke: C.grey }) +
    lineChart(66, 150, 330, 170, 'Corps 1 — la hausse s’accélère en mai', { annot: true }) +
    barChart(406, 150, 338, 170, 'Corps 2 — la station la plus chaude') +
    textBox(66, 328, 678, 52, 'Corps 3 — un écart net', 'Les quatre autres stations gagnent environ 4 °C entre avril et mai : Tours se détache nettement du reste du réseau.') +
    badge(40, 174, '2', C.ink), 'Le corps : les preuves') +
  zone(3, `<circle cx="40" cy="420" r="14" fill="${C.accent}"/>` +
    R(66, 390, 678, 66, { fill: C.accentSoft, stroke: C.accent }) + T(80, 412, 'Retour à l’ancrage : +6,6 °C à Tours', { size: 12, weight: 800, fill: C.accent }) +
    T(80, 432, 'Recommandation : équiper Tours d’un second capteur et renforcer son suivi dès juin.', { size: 10.5 }) + badge(40, 420, '3', C.accent), 'Le rappel de l’ancrage et l’action'),
  'Maquette de dashboard en kabob');

// ---------- Schémas des structures ----------
const SW = 320, SH = 480;
const schemas = {};
const stitle = (t, s) => T(SW / 2, 34, t, { size: 15, weight: 800, anchor: 'middle' }) + T(SW / 2, 52, s, { size: 10, fill: C.muted, anchor: 'middle' });

schemas['pyramide'] = svg(SW, SH, stitle('Pyramide inversée', 'Kosara — le journalisme') +
  zone(1, `<path d="M30,80 L290,80 L247,190 L73,190 Z" fill="${C.accent}"/>` + T(160, 130, 'L’essentiel', { size: 14, weight: 800, fill: '#fff', anchor: 'middle' }) + T(160, 150, 'message + chiffres clés', { size: 10, fill: '#fff', anchor: 'middle' })) +
  zone(2, `<path d="M77,198 L243,198 L204,300 L116,300 Z" fill="${C.violet}"/>` + T(160, 248, 'Les preuves', { size: 13, weight: 800, fill: '#fff', anchor: 'middle' }) + T(160, 266, 'graphiques', { size: 10, fill: '#fff', anchor: 'middle' })) +
  zone(3, `<path d="M120,308 L200,308 L160,410 Z" fill="${C.blue}"/>` + T(160, 344, 'Détails', { size: 11, weight: 800, fill: '#fff', anchor: 'middle' })) +
  wrap(24, 438, 'Importance décroissante : le lecteur pressé s’arrête en haut.', 280, { size: 10.5, fill: C.muted }),
  'Schéma de la pyramide inversée');

schemas['trois-actes'] = svg(SW, SH, stitle('Trois actes', 'Pyramide de Freytag') +
  `<path d="M24,330 L110,330 Q190,330 210,150 Q226,210 296,300" fill="none" stroke="${C.ink}" stroke-width="3"/>` +
  `<circle cx="210" cy="150" r="7" fill="${C.accent}"/>` + T(210, 132, 'message principal', { size: 10, weight: 700, fill: C.accent, anchor: 'middle' }) +
  zone(1, R(18, 350, 92, 70, { fill: C.accentSoft, stroke: C.accent }) + T(64, 372, 'Acte 1', { size: 11, weight: 800, anchor: 'middle', fill: C.accent }) + T(64, 390, 'Exposition', { size: 10, anchor: 'middle' }) + T(64, 405, 'contexte', { size: 9, anchor: 'middle', fill: C.muted })) +
  zone(2, R(114, 350, 92, 70, { fill: C.violetSoft, stroke: C.violet }) + T(160, 372, 'Acte 2', { size: 11, weight: 800, anchor: 'middle', fill: C.violet }) + T(160, 390, 'Montée', { size: 10, anchor: 'middle' }) + T(160, 405, 'analyse', { size: 9, anchor: 'middle', fill: C.muted })) +
  zone(3, R(210, 350, 92, 70, { fill: C.blueSoft, stroke: C.blue }) + T(256, 372, 'Acte 3', { size: 11, weight: 800, anchor: 'middle', fill: C.blue }) + T(256, 390, 'Résolution', { size: 10, anchor: 'middle' }) + T(256, 405, 'recommandations', { size: 9, anchor: 'middle', fill: C.muted })) +
  wrap(24, 446, 'Une démonstration qui progresse vers le message, puis conclut.', 280, { size: 10.5, fill: C.muted }),
  'Schéma de la structure en trois actes');

schemas['question'] = svg(SW, SH, stitle('Question → preuves → retour', 'Kosara — inspiré du récit classique') +
  zone(1, R(60, 76, 200, 56, { fill: C.violetSoft, stroke: C.violet, rx: 28 }) + T(160, 100, 'Question', { size: 13, weight: 800, anchor: 'middle', fill: C.violet }) + T(160, 118, 'ou affirmation', { size: 10, anchor: 'middle', fill: C.muted })) +
  arrow(160, 134, 160, 160) +
  zone(2, [0, 1, 2].map((i) => R(40 + i * 84, 164, 72, 80, { fill: C.card }) + T(76 + i * 84, 200, `Preuve ${i + 1}`, { size: 10.5, weight: 700, anchor: 'middle' }) + `<rect x="${54 + i * 84}" y="${222 - i * 4}" width="10" height="${14 + i * 4}" fill="${C.grey}"/><rect x="${68 + i * 84}" y="${216 - i * 3}" width="10" height="${20 + i * 3}" fill="${i === 2 ? C.accent : C.grey}"/><rect x="${82 + i * 84}" y="220" width="10" height="16" fill="${C.grey}"/>`).join('')) +
  arrow(160, 248, 160, 274) +
  zone(3, R(60, 278, 200, 56, { fill: C.accentSoft, stroke: C.accent, rx: 28 }) + T(160, 302, 'Réponse', { size: 13, weight: 800, anchor: 'middle', fill: C.accent }) + T(160, 320, 'les preuves relient la fin au début', { size: 9.5, anchor: 'middle', fill: C.muted })) +
  `<path d="M262,306 C310,306 310,104 262,104" fill="none" stroke="${C.accent}" stroke-width="2" stroke-dasharray="5 4"/>` + arrow(272, 104, 263, 104, C.accent) +
  wrap(24, 380, 'On ne révèle pas tout d’emblée : on pose la question, on apporte les preuves, puis on y répond.', 280, { size: 10.5, fill: C.muted }),
  'Schéma question, preuves, retour');

schemas['martini'] = svg(SW, SH, stitle('Verre à martini', 'Segel et Heer — structure hybride') +
  zone(2, `<path d="M40,80 L280,80 L172,230 L148,230 Z" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="2"/>` +
    T(160, 112, 'Le bol', { size: 13, weight: 800, anchor: 'middle', fill: C.violet }) + T(160, 130, 'guidé par le lecteur :', { size: 10, anchor: 'middle' }) + T(160, 145, 'exploration libre, filtres', { size: 10, anchor: 'middle' }) +
    [[-70, 175], [-30, 190], [30, 190], [70, 175]].map(([dx, yy]) => arrow(160, 225, 160 + dx * 1.3, yy - 70, C.violet, 1.5)).join('')) +
  zone(1, `<rect x="150" y="230" width="20" height="150" fill="${C.accent}"/>` + `<path d="M100,380 L220,380 L220,394 L100,394 Z" fill="${C.accent}"/>` +
    T(184, 290, 'La tige', { size: 13, weight: 800, fill: C.accent }) + T(184, 308, 'guidée par l’auteur :', { size: 10 }) + T(184, 323, 'une séquence', { size: 10 }) + T(184, 338, 'de messages', { size: 10 }) + arrow(130, 375, 130, 245, C.accent, 2)) +
  wrap(24, 424, 'On lit d’abord la tige (de bas en haut), puis le récit s’ouvre à l’exploration.', 280, { size: 10.5, fill: C.muted }),
  'Schéma du verre à martini');

schemas['kabob'] = svg(SW, SH, stitle('Kabob', 'Récits d’entreprise') +
  `<line x1="90" y1="74" x2="90" y2="420" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` +
  zone(1, `<circle cx="90" cy="106" r="22" fill="${C.accent}"/>` + T(130, 102, 'Ancrage', { size: 12, weight: 800, fill: C.accent }) + T(130, 118, 'anecdote, fait marquant', { size: 10, fill: C.muted }) +
    R(70, 140, 40, 30, { rx: 4, fill: C.muted, stroke: C.muted }) + T(130, 160, 'Paragraphe clé', { size: 12, weight: 700 })) +
  zone(2, [0, 1, 2].map((i) => R(70, 188 + i * 46, 40, 34, { rx: 4, fill: '#8f1d3f', stroke: '#8f1d3f' }) + T(130, 210 + i * 46, `Corps ${i + 1}`, { size: 12, weight: 700 }) + T(196, 210 + i * 46, 'une preuve', { size: 10, fill: C.muted })).join('')) +
  zone(3, `<circle cx="90" cy="358" r="22" fill="${C.accent}"/>` + T(130, 354, 'Retour à l’ancrage', { size: 12, weight: 800, fill: C.accent }) + T(130, 370, '+ recommandation', { size: 10, fill: C.muted })) +
  wrap(24, 446, 'Le point central reste présent du début à la fin.', 280, { size: 10.5, fill: C.muted }),
  'Schéma du kabob');

// ---------- Schéma du modèle en quatre couches ----------
function layerRow(step, y, color, soft, name, sub, concepts, example) {
  let s = R(70, y, 674, 92, { fill: soft, stroke: color });
  s += T(84, y + 22, name, { size: 13, weight: 800, fill: color }) + T(84, y + 38, sub, { size: 9.5, fill: C.muted });
  let x = 84;
  concepts.forEach((c, i) => {
    const w = c.length * 6.4 + 18;
    s += R(x, y + 48, w, 24, { rx: 12, fill: C.card, stroke: color, sw: i === concepts.length - 1 ? 2 : 1 }) + T(x + w / 2, y + 64, c, { size: 10, anchor: 'middle', weight: i === concepts.length - 1 ? 800 : 600, fill: i === concepts.length - 1 ? color : C.ink });
    x += w + 8;
  });
  s += wrap(470, y + 22, example, 260, { size: 9.5, fill: C.ink, italic: true });
  return zone(step, s, `${name} — ${concepts.join(', ')}`);
}
const modelSvg = svg(760, 470,
  T(380, 30, 'Le modèle en quatre couches — exemple : la mortalité en Alsace (Rue89 Strasbourg)', { size: 13, weight: 800, anchor: 'middle' }) +
  `<path d="M56,52 L46,52 L46,240 L56,240" fill="none" stroke="${C.ink}" stroke-width="2"/>` + `<text x="34" y="146" font-family="${FONT}" font-size="12" font-weight="800" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 34 146)">HISTOIRE</text>` +
  `<path d="M56,250 L46,250 L46,438 L56,438" fill="none" stroke="${C.ink}" stroke-width="2"/>` + `<text x="34" y="344" font-family="${FONT}" font-size="12" font-weight="800" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 34 344)">DISCOURS</text>` +
  layerRow(1, 50, '#c02d6b', '#fbe5ee', 'Couche factuelle', 'forme du contenu · phase Explorer', ['Exploration', 'Collecteur', 'Constat'], 'Constat : 1 100 décès en moyenne en mars-avril 2010-2019 dans le Haut-Rhin, 2 347 en 2020.') +
  layerRow(2, 148, '#6b3fd1', '#eee8fc', 'Couche intentionnelle', 'substance du contenu · Répondre aux questions', ['Objectif', 'Question', 'Personnage', 'Mesure', 'Message'], 'Message : dans le Haut-Rhin, l’écart est sans doute largement lié au COVID-19 (validé par un expert).') +
  layerRow(3, 248, '#9a5b00', '#fdf2d4', 'Couche structurelle', 'forme de l’expression · Structurer les réponses', ['Intrigue', 'Acte', 'Épisode'], 'Six actes pour le grand public ; un épisode raconte le rôle du COVID-19 dans la hausse.') +
  layerRow(4, 346, '#1d5fc4', '#e3edfc', 'Couche présentationnelle', 'substance de l’expression · Présenter', ['Récit visuel', 'Dashboard', 'Composant'], 'Article web ; une courbe interactive des décès par jour, 2020 et 2010-2019.') +
  [142, 240, 338].map((y) => arrow(406, y, 406, y + 6, C.ink, 2)).join(''),
  'Schéma du modèle en quatre couches avec l’exemple de la mortalité en Alsace');

Object.entries(mocks).forEach(([k, v]) => fs.writeFileSync(path.join(OUT, `dashboard-${k}.svg`), v));
Object.entries(schemas).forEach(([k, v]) => fs.writeFileSync(path.join(OUT, `schema-${k}.svg`), v));
fs.writeFileSync(path.join(OUT, 'modele-quatre-couches.svg'), modelSvg);
console.log('Schémas et maquettes générés dans assets/images/structures/');
