#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const ejs = require('ejs');

const ROOT_DIR = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const LESSON_TITLES = {
  '01-introduction': 'Introduction',
  '02-recit-de-donnees': 'Récit de données',
  '03-superset': 'Superset',
  '04-informations-complementaires': 'Informations complémentaires',
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
};

function slugFromFilename(filename) {
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
}

function readAllPages() {
  const lessonDirs = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory())
    .sort();

  const pages = [];
  for (const lessonSlug of lessonDirs) {
    const lessonPath = path.join(CONTENT_DIR, lessonSlug);
    const files = fs.readdirSync(lessonPath).filter((f) => f.endsWith('.md')).sort();
    for (const file of files) {
      const raw = fs.readFileSync(path.join(lessonPath, file), 'utf8');
      const { data, content } = matter(raw);
      if (!data.title) throw new Error(`Front-matter "title" manquant dans ${file}`);
      if (typeof data.order !== 'number') throw new Error(`Front-matter "order" manquant dans ${file}`);
      const slug = slugFromFilename(file);
      pages.push({
        ...data,
        slug,
        lessonSlug,
        url: `/${lessonSlug}/${slug}.html`,
        bodyHtml: marked.parse(content),
      });
    }
  }
  return pages;
}

function groupByLesson(pages) {
  return Object.entries(LESSON_TITLES).map(([lessonSlug, title]) => ({
    slug: lessonSlug,
    title,
    pages: pages.filter((p) => p.lessonSlug === lessonSlug).sort((a, b) => a.order - b.order),
  }));
}

function renderComponents(components = []) {
  return components
    .map((component) => {
      const partialName = PARTIAL_BY_TYPE[component.type];
      if (!partialName) throw new Error(`Type de composant inconnu : "${component.type}"`);
      const partialPath = path.join(TEMPLATES_DIR, 'partials', `${partialName}.ejs`);
      return ejs.render(fs.readFileSync(partialPath, 'utf8'), { data: component, marked }, {
        filename: partialPath,
      });
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

  const layoutPath = path.join(TEMPLATES_DIR, 'layout.ejs');
  flatPages.forEach((page, index) => {
    const prev = flatPages[index - 1] || null;
    const next = flatPages[index + 1] || null;
    const html = ejs.render(
      fs.readFileSync(layoutPath, 'utf8'),
      { page, lessons, prev, next, componentsHtml: renderComponents(page.components), marked },
      { filename: layoutPath }
    );
    const outDir = path.join(DIST_DIR, page.lessonSlug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, `${page.slug}.html`), html);
  });

  const indexPath = path.join(TEMPLATES_DIR, 'index.ejs');
  const indexHtml = ejs.render(fs.readFileSync(indexPath, 'utf8'), { lessons }, { filename: indexPath });
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), indexHtml);

  console.log(`Build terminé : ${flatPages.length} pages générées dans dist/`);
}

build();
