#!/usr/bin/env node
// Génère les graphiques SVG des exercices « Comparer » (leçon 3.6).
// Données d'exemple (fictives) inspirées du réseau de stations PREVIZO.
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'assets', 'images', 'echecs');
fs.mkdirSync(OUT, { recursive: true });

const W = 560;
const H = 360;
const FONT = "font-family='Inter, Segoe UI, Arial, sans-serif'";
const INK = '#1c1830';
const MUTED = '#6b6684';
const GRID = '#e6e3ef';
const ACCENT = '#c02d6b';
const GREY = '#b9b5c8';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const svg = (body, h = H) =>
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${h}' width='${W}' height='${h}'><rect width='100%' height='100%' fill='#ffffff'/>${body}</svg>\n`;
const text = (x, y, s, o = {}) =>
  `<text x='${x}' y='${y}' ${FONT} font-size='${o.size || 12}' fill='${o.fill || INK}' text-anchor='${o.anchor || 'start'}'${o.weight ? ` font-weight='${o.weight}'` : ''}>${esc(s)}</text>`;

// ---------- 1. Camembert à 9 parts vs barres triées ----------
const precip = [
  ['Tours', 78], ['Blois', 64], ['Orléans', 59], ['Chartres', 52], ['Bourges', 47],
  ['Vierzon', 41], ['Amboise', 38], ['Châteaudun', 33], ['Romorantin', 29],
];
const rainbow = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45'];
{
  const total = precip.reduce((s, [, v]) => s + v, 0);
  const cx = 180, cy = 200, r = 130;
  let a0 = -Math.PI / 2;
  let body = text(24, 34, 'Précipitations de mai par station', { size: 17, weight: 700 });
  // Ordre volontairement non trié, comme souvent dans un export brut
  const shuffled = [precip[4], precip[0], precip[7], precip[2], precip[5], precip[1], precip[8], precip[3], precip[6]];
  shuffled.forEach(([name, v], i) => {
    const a1 = a0 + (v / total) * Math.PI * 2;
    const large = a1 - a0 > Math.PI ? 1 : 0;
    const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    body += `<path d='M${cx},${cy} L${p(a0)} A${r},${r} 0 ${large} 1 ${p(a1)} Z' fill='${rainbow[i]}' stroke='#fff' stroke-width='1.5'/>`;
    body += `<rect x='352' y='${78 + i * 28}' width='14' height='14' rx='3' fill='${rainbow[i]}'/>`;
    body += text(374, 90 + i * 28, name, { size: 13 });
    a0 = a1;
  });
  fs.writeFileSync(path.join(OUT, 'camembert-9-parts.svg'), svg(body));

  let bars = text(24, 34, 'Tours reçoit 2,7 fois plus de pluie que Romorantin', { size: 17, weight: 700 });
  bars += text(24, 56, 'Précipitations de mai (mm), stations triées', { size: 12, fill: MUTED });
  const x0 = 110, bw = 400, max = 80;
  precip.forEach(([name, v], i) => {
    const y = 76 + i * 30;
    const w = (v / max) * bw;
    const hi = i === 0 || i === precip.length - 1;
    bars += text(x0 - 10, y + 15, name, { anchor: 'end', size: 13, weight: hi ? 700 : null });
    bars += `<rect x='${x0}' y='${y}' width='${w.toFixed(1)}' height='20' rx='3' fill='${hi ? ACCENT : GREY}'/>`;
    bars += text(x0 + w + 6, y + 15, `${v}`, { size: 12, fill: hi ? ACCENT : MUTED, weight: hi ? 700 : null });
  });
  fs.writeFileSync(path.join(OUT, 'barres-triees.svg'), svg(bars));
}

// ---------- 2. Axe tronqué vs axe à zéro ----------
const tmax = [['Blois', 21.2], ['Tours', 21.8], ['Orléans', 22.1], ['Bourges', 22.6]];
function barChart({ title, subtitle, yMin, yMax, ticks, file, labels }) {
  const left = 70, right = 520, top = 80, bottom = 310;
  const y = (v) => bottom - ((v - yMin) / (yMax - yMin)) * (bottom - top);
  let body = text(24, 34, title, { size: 17, weight: 700 });
  if (subtitle) body += text(24, 56, subtitle, { size: 12, fill: MUTED });
  ticks.forEach((t) => {
    body += `<line x1='${left}' x2='${right}' y1='${y(t)}' y2='${y(t)}' stroke='${GRID}'/>`;
    body += text(left - 8, y(t) + 4, String(t).replace('.', ','), { anchor: 'end', size: 11, fill: MUTED });
  });
  const step = (right - left) / tmax.length;
  tmax.forEach(([name, v], i) => {
    const x = left + i * step + step * 0.2;
    const w = step * 0.6;
    body += `<rect x='${x.toFixed(1)}' y='${y(v).toFixed(1)}' width='${w.toFixed(1)}' height='${(bottom - y(v)).toFixed(1)}' fill='#5b3fd1' rx='2'/>`;
    body += text(x + w / 2, bottom + 18, name, { anchor: 'middle', size: 12 });
    if (labels) body += text(x + w / 2, y(v) - 6, String(v).replace('.', ',') + ' °C', { anchor: 'middle', size: 12, weight: 700 });
  });
  body += `<line x1='${left}' x2='${right}' y1='${bottom}' y2='${bottom}' stroke='${INK}'/>`;
  fs.writeFileSync(path.join(OUT, file), svg(body));
}
barChart({
  title: 'Bourges, bien plus chaude que Blois ?', subtitle: 'Température maximale moyenne (°C)',
  yMin: 21, yMax: 22.8, ticks: [21, 21.4, 21.8, 22.2, 22.6], file: 'axe-tronque.svg',
});
barChart({
  title: 'Moins de 1,5 °C d’écart entre les stations', subtitle: 'Température maximale moyenne (°C), axe à partir de zéro',
  yMin: 0, yMax: 25, ticks: [0, 5, 10, 15, 20, 25], file: 'axe-zero.svg', labels: true,
});

// ---------- 3. Arc-en-ciel sans message vs mise en évidence + titre-message ----------
const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai'];
const series = [
  ['Tours', [8.1, 10.2, 13.9, 16.8, 23.4]],
  ['Blois', [7.8, 9.6, 13.1, 16.1, 20.2]],
  ['Orléans', [7.2, 9.1, 12.8, 15.7, 19.6]],
  ['Bourges', [8.4, 10.0, 13.5, 16.4, 20.5]],
  ['Chartres', [6.9, 8.7, 12.2, 15.1, 18.9]],
];
function lineChart({ highlight, title, subtitle, file }) {
  const left = 60, right = 470, top = 80, bottom = 310, yMin = 5, yMax = 25;
  const x = (i) => left + (i / (months.length - 1)) * (right - left);
  const y = (v) => bottom - ((v - yMin) / (yMax - yMin)) * (bottom - top);
  let body = text(24, 34, title, { size: 17, weight: 700 });
  if (subtitle) body += text(24, 56, subtitle, { size: 12, fill: MUTED });
  [5, 10, 15, 20, 25].forEach((t) => {
    body += `<line x1='${left}' x2='${right}' y1='${y(t)}' y2='${y(t)}' stroke='${GRID}'/>`;
    body += text(left - 8, y(t) + 4, `${t}`, { anchor: 'end', size: 11, fill: MUTED });
  });
  months.forEach((m, i) => { body += text(x(i), bottom + 18, m, { anchor: 'middle', size: 12, fill: MUTED }); });
  const order = highlight ? [...series.filter((s) => s[0] !== 'Tours'), series[0]] : series;
  order.forEach(([name, vals]) => {
    const i = series.findIndex((s) => s[0] === name);
    const hi = highlight && name === 'Tours';
    const color = highlight ? (hi ? ACCENT : GREY) : rainbow[i];
    const d = vals.map((v, k) => `${k ? 'L' : 'M'}${x(k).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    body += `<path d='${d}' fill='none' stroke='${color}' stroke-width='${hi ? 3.5 : highlight ? 1.8 : 2.5}'${!highlight && i % 2 ? " stroke-dasharray='5 4'" : ''}/>`;
    const last = vals[vals.length - 1];
    if (hi) body += text(right + 8, y(last) + 4, name, { size: 12, fill: ACCENT, weight: 700 });
  });
  // Les autres stations sont regroupées sous une seule étiquette pour éviter les chevauchements
  if (highlight) body += text(right + 8, y(19.8) + 4, '4 autres stations', { size: 11, fill: MUTED });
  if (highlight) {
    body += `<circle cx='${x(4)}' cy='${y(23.4)}' r='5' fill='${ACCENT}'/>`;
    body += text(x(3) - 8, y(23.4) - 10, '+6,6 °C en un mois', { size: 12, fill: ACCENT, weight: 700, anchor: 'end' });
  } else {
    series.forEach(([name], i) => {
      body += `<rect x='${486}' y='${92 + i * 22}' width='12' height='12' rx='2' fill='${rainbow[i]}'/>`;
      body += text(504, 103 + i * 22, name, { size: 12 });
    });
  }
  fs.writeFileSync(path.join(OUT, file), svg(body));
}
lineChart({ highlight: false, title: 'Températures maximales par station', subtitle: 'Moyenne mensuelle (°C)', file: 'lignes-arc-en-ciel.svg' });
lineChart({ highlight: true, title: 'Tours : la plus forte hausse du réseau en mai', subtitle: 'Température maximale moyenne mensuelle (°C)', file: 'lignes-mise-en-evidence.svg' });

console.log('Figures générées dans assets/images/echecs/');
