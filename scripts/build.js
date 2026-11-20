#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked: baseMarked } = require('marked');

// Enveloppe chaque tableau dans un conteneur défilant pour éviter tout débordement sur mobile.
const wrapTables = (html) => html.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, '</table></div>');
const marked = {
  parse: (src) => wrapTables(baseMarked.parse(String(src))),
  parseInline: (src) => baseMarked.parseInline(String(src)),
};
const ejs = require('ejs');

const ROOT_DIR = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Chemin de base du site : « / » en local, « /apache-superset-course/ » sur GitHub Pages.
// Usage : BASE_PATH=/apache-superset-course/ npm run build
const BASE_PATH = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const withBase = (html) => (BASE_PATH === '/' ? html : html.replace(/(href|src|data-first)="\/(?!\/)/g, `$1="${BASE_PATH}`));

// Les leçons suivent la logique du cours : fondements → méthode → mise en œuvre dans Superset → évaluation.
const LESSONS = {
  '01-introduction': {
    title: 'Introduction',
    subtitle: 'Le cours, ses objectifs et le fil rouge PREVIZO.',
  },
  '02-recit-de-donnees': {
    title: 'Récit de données : le cadre',
    subtitle: 'Un modèle en quatre couches et un processus en quatre phases (El Outa, 2023).',
  },
  '03-superset': {
    title: 'Superset : de la donnée au dashboard',
    subtitle: 'Appliquer la méthode dans Apache Superset, pas à pas.',
  },
  '04-synthese': {
    title: 'Évaluation et synthèse',
    subtitle: 'Vérifier vos acquis et garder l’essentiel.',
  },
};

// Les quatre phases du processus d'élaboration d'un récit de données (El Outa, 2023, chap. 4),
// chacune associée à une couche du modèle conceptuel (chap. 3). Colonne vertébrale du cours.
const PHASES = {
  donnees: { n: 1, label: 'Explorer', layer: 'couche factuelle', verb: 'Collecter les données, essayer des collecteurs, formuler et valider des constats' },
  intention: { n: 2, label: 'Répondre aux questions', layer: 'couche intentionnelle', verb: 'Formuler objectif et questions, tirer et valider des messages' },
  structuration: { n: 3, label: 'Structurer les réponses', layer: 'couche structurelle', verb: 'Choisir l’audience et la structure, organiser actes et épisodes' },
  presentation: { n: 4, label: 'Présenter', layer: 'couche présentationnelle', verb: 'Choisir la forme visuelle et l’interactivité, réaliser les dashboards' },
};

const PARTIAL_BY_TYPE = {
  quote: 'quote',
  summary_cards: 'summary-cards',
  listing_cards: 'listing-cards',
  accordion: 'accordion',
  infotabs: 'infotabs',
  carousel: 'carousel',
  numberlist: 'numberlist',
  flipcards: 'flipcards',
  video: 'video',
  quiz: 'quiz',
  chooser: 'chooser',
  sorter: 'sorter',
  classifier: 'classifier',
  compare: 'compare',
  worksheet: 'worksheet',
  sqlbuilder: 'sqlbuilder',
  method: 'method',
  figure: 'figure',
  callout: 'callout',
  heading: 'heading',
  checklist: 'checklist',
  structures: 'structures',
  diagram: 'diagram',
  markdown: 'markdown',
};

function slugFromFilename(filename) {
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
}

// Mélange déterministe (même ordre à chaque build) pour les exercices de remise en ordre.
function seededShuffle(items, seedText) {
  let seed = 0;
  for (const ch of String(seedText)) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const out = items.map((item, index) => ({ item, index }));
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // Évite de présenter l'ordre déjà correct.
  if (out.every((o, i) => o.index === i) && out.length > 1) out.push(out.shift());
  return out;
}

function countWords(text) {
  return (String(text).match(/[\p{L}\p{N}]+/gu) || []).length;
}

function readAllPages() {
  const pages = [];
  for (const lessonSlug of Object.keys(LESSONS)) {
    const lessonPath = path.join(CONTENT_DIR, lessonSlug);
    if (!fs.existsSync(lessonPath)) throw new Error(`Dossier de leçon manquant : ${lessonSlug}`);
    const files = fs.readdirSync(lessonPath).filter((f) => f.endsWith('.md')).sort();
    for (const file of files) {
      const raw = fs.readFileSync(path.join(lessonPath, file), 'utf8');
      const { data, content } = matter(raw);
      if (!data.title) throw new Error(`Front-matter "title" manquant dans ${file}`);
      if (typeof data.order !== 'number') throw new Error(`Front-matter "order" manquant dans ${file}`);
      const phases = [].concat(data.phase || []);
      phases.forEach((p) => {
        if (!PHASES[p]) throw new Error(`Phase inconnue "${p}" dans ${file}`);
      });
      const slug = slugFromFilename(file);
      const words = countWords(raw);
      pages.push({
        ...data,
        phases,
        slug,
        lessonSlug,
        key: `${lessonSlug}/${slug}`,
        url: `/${lessonSlug}/${slug}.html`,
        bodyHtml: marked.parse(content),
        minutes: data.minutes || Math.max(3, Math.round(words / 160)),
      });
    }
  }
  return pages;
}

function groupByLesson(pages) {
  return Object.entries(LESSONS).map(([lessonSlug, meta], i) => ({
    slug: lessonSlug,
    number: i + 1,
    ...meta,
    pages: pages.filter((p) => p.lessonSlug === lessonSlug).sort((a, b) => a.order - b.order),
  }));
}

// Insère un SVG du dossier assets directement dans la page (nécessaire pour animer ses zones).
function inlineSvg(src) {
  const file = path.join(ASSETS_DIR, src.replace(/^\/assets\//, ''));
  if (!fs.existsSync(file)) throw new Error(`SVG introuvable : ${src}`);
  return fs.readFileSync(file, 'utf8').replace(/^<\?xml[^>]*>\s*/, '');
}

function renderComponents(components = [], page) {
  return components
    .map((component, i) => {
      const partialName = PARTIAL_BY_TYPE[component.type];
      if (!partialName) throw new Error(`Type de composant inconnu : "${component.type}" (${page.key})`);
      const partialPath = path.join(TEMPLATES_DIR, 'partials', `${partialName}.ejs`);
      const uid = `${page.slug}-${component.type}-${i}`;
      return ejs.render(
        fs.readFileSync(partialPath, 'utf8'),
        { data: component, marked, uid, PHASES, seededShuffle, inlineSvg },
        { filename: partialPath }
      );
    })
    .join('\n');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function build() {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });
  copyDir(ASSETS_DIR, path.join(DIST_DIR, 'assets'));

  const pages = readAllPages();
  const lessons = groupByLesson(pages);
  const flatPages = lessons.flatMap((l) => l.pages);
  const totalMinutes = flatPages.reduce((s, p) => s + p.minutes, 0);

  const layoutPath = path.join(TEMPLATES_DIR, 'layout.ejs');
  flatPages.forEach((page, index) => {
    const lesson = lessons.find((l) => l.slug === page.lessonSlug);
    const step = lesson.pages.indexOf(page) + 1;
    const prev = flatPages[index - 1] || null;
    const next = flatPages[index + 1] || null;
    const html = ejs.render(
      fs.readFileSync(layoutPath, 'utf8'),
      {
        page,
        lesson,
        step,
        lessons,
        prev,
        next,
        PHASES,
        componentsHtml: renderComponents(page.components, page),
        marked,
      },
      { filename: layoutPath }
    );
    const outDir = path.join(DIST_DIR, page.lessonSlug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, `${page.slug}.html`), withBase(html));
  });

  const indexPath = path.join(TEMPLATES_DIR, 'index.ejs');
  const indexHtml = ejs.render(
    fs.readFileSync(indexPath, 'utf8'),
    { lessons, PHASES, totalMinutes, firstPage: flatPages[0] },
    { filename: indexPath }
  );
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), withBase(indexHtml));
  // Pages GitHub : pas de traitement Jekyll
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');

  console.log(`Build terminé : ${flatPages.length} pages + accueil générées dans dist/ (≈ ${totalMinutes} min de lecture)`);
}

build();
