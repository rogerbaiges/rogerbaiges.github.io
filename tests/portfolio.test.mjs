import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname } from 'node:path';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const exists = (path) => existsSync(new URL(path, root));
const portfolio = read('src/data/portfolio.ts');

const textExtensions = new Set(['.astro', '.css', '.js', '.json', '.md', '.mjs', '.ts']);

function readTextTree(path) {
  const url = new URL(path, root);

  return readdirSync(url, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => {
      const childPath = `${path.replace(/\/$/, '')}/${entry.name}`;
      if (entry.isDirectory()) return readTextTree(childPath);
      return textExtensions.has(extname(entry.name)) ? read(childPath) : '';
    })
    .join('\n');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('the current hero and navigation are exact', () => {
  const homeCopy = `${portfolio}\n${read('src/pages/index.astro')}`;
  for (const copy of [
    'AI Researcher & Engineer',
    'Hi, I’m Roger',
    'What excites me about AI is seeing a state-of-the-art idea leave the paper and change a real problem.',
    'I am an M.Sc. student at EPFL, where I am beginning Topoformer at LTS4, combining topology and foundation models for spatial biology.',
    'Explore experience',
    'View CV',
  ]) {
    assert.ok(homeCopy.includes(copy), `missing mandatory hero copy: ${copy}`);
  }

  const navigation = portfolio.match(/navigation:\s*\[([\s\S]*?)\n\s*\],/);
  assert.ok(navigation, 'site.navigation should be defined');
  const items = [...navigation[1].matchAll(/label:\s*['"]([^'"]+)['"][\s\S]*?href:\s*['"]([^'"]+)['"]/g)]
    .map((match) => [match[1], match[2]]);

  assert.deepEqual(items, [
    ['Home', '/'],
    ['Experience', '/experience/'],
    ['Projects', '/projects/'],
    ['Awards', '/awards/'],
    ['About', '/about/'],
    ['CV', '/cv/'],
  ]);
});

test('high-risk evidence keeps its verified scope', () => {
  assert.match(portfolio, /over 90% of lost performance in CLIP and DINO/i);
  assert.match(portfolio, /nearly 80% field-level automation/i);
  assert.match(portfolio, /required 98% accepted-field accuracy threshold/i);
  assert.match(portfolio, /(?:more than 3,500|3,500\+) applicants/i);
  assert.match(portfolio, /five-person team/i);
  assert.match(portfolio, /four-person team/i);
  assert.match(portfolio, /Jérémy Baffou/);
  assert.match(portfolio, /Joost van de Weijer/);
  assert.match(portfolio, /Feb\. 2026 – Jun\. 2026/);
  assert.match(portfolio, /insjoanguinjoan\/general\/acte-de-lliurament-de-les-distincions-pau-2022/);
  assert.doesNotMatch(portfolio, /Incoming M\.Sc\./i);
  assert.doesNotMatch(
    portfolio,
    /9\.10|97\.6|real-time use|production extractor|company-wide|breakthrough/i,
  );
});

test('principal routes exist and old work details are aliases only', () => {
  for (const route of [
    'src/pages/index.astro',
    'src/pages/experience.astro',
    'src/pages/projects.astro',
    'src/pages/awards.astro',
    'src/pages/about.astro',
    'src/pages/cv.astro',
    'src/pages/404.astro',
  ]) {
    assert.ok(exists(route), `${route} should exist`);
  }

  assert.equal(exists('src/pages/work/[slug].astro'), false);

  const workRouteFiles = readdirSync(new URL('src/pages/work/', root)).sort();
  assert.deepEqual(workRouteFiles, [
    'catgpt.astro',
    'foundation-model-repair.astro',
    'index.astro',
    'ipurdiar.astro',
    'laia.astro',
    'serimag-document-intelligence.astro',
  ]);

  for (const path of workRouteFiles.map((file) => `src/pages/work/${file}`)) {
    assert.match(read(path), /LegacyRedirect/);
  }

  assert.equal(exists('src/pages/design-lab'), false);
  assert.equal(exists('src/design-lab'), false);
});

test('legacy aliases are noindex and point to fragment-free canonicals', () => {
  const redirectComponent = read('src/components/site/LegacyRedirect.astro');
  assert.match(redirectComponent, /noindex, nofollow/);
  assert.match(redirectComponent, /http-equiv="refresh"/);
  assert.match(redirectComponent, /rel="canonical"/);

  const aliases = {
    'src/pages/recognition.astro': ['/awards/', '/awards/'],
    'src/pages/research.astro': ['/experience/#cvc', '/experience/'],
    'src/pages/contact.astro': ['/about/#contact', '/about/'],
    'src/pages/work/index.astro': ['/experience/', '/experience/'],
    'src/pages/work/foundation-model-repair.astro': ['/experience/#cvc', '/experience/'],
    'src/pages/work/serimag-document-intelligence.astro': ['/experience/#serimag', '/experience/'],
    'src/pages/work/ipurdiar.astro': ['/projects/#ipurdiar', '/projects/'],
    'src/pages/work/catgpt.astro': ['/projects/#catgpt', '/projects/'],
    'src/pages/work/laia.astro': ['/projects/#laia', '/projects/'],
  };

  for (const [path, [destination, canonicalPath]] of Object.entries(aliases)) {
    const source = read(path);
    assert.match(source, /LegacyRedirect/);
    assert.match(
      source,
      new RegExp(`const destination = ['"]${escapeRegExp(destination)}['"]`),
    );
    assert.match(
      source,
      new RegExp(`const canonicalPath = ['"]${escapeRegExp(canonicalPath)}['"]`),
    );
    assert.equal(canonicalPath.includes('#'), false, `${path} canonical must not contain a fragment`);
  }
});

test('the sitemap allowlist contains canonical routes only', () => {
  const config = read('astro.config.mjs');
  const allowlist = config.match(/canonicalSitemapPaths\s*=\s*new Set\(\[([\s\S]*?)\]\)/);
  assert.ok(allowlist, 'canonical sitemap allowlist should exist');

  const paths = [...allowlist[1].matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.deepEqual(paths, ['/', '/experience/', '/projects/', '/awards/', '/about/', '/cv/']);
  assert.match(config, /new URL\(page\)\.pathname/);
});

test('rejected positioning, numbering, and template residue are absent', () => {
  const source = `${readTextTree('src')}\n${read('public/manifest.json')}\n${read('public/images/og-card.svg')}\n${read('README.md')}`;

  for (const rejected of [
    'Understanding what foundation models forget',
    'Learn the research',
    'Find the gap',
    'Working on a difficult AI problem',
    'Interested in difficult AI problems',
    'Open profile',
    'Portfolio social card highlighting foundation-model research, reliable AI systems, CVC–LAMP, and EPFL.',
  ]) {
    assert.equal(source.includes(rejected), false, `rejected copy remains: ${rejected}`);
  }

  assert.doesNotMatch(source, /\bLumina\b|built with\s+(?:Astro|React)|powered by/i);
  assert.doesNotMatch(portfolio, /\bnumber\s*:/);
  assert.doesNotMatch(portfolio, /relatedWork\s*:/);
  assert.doesNotMatch(portfolio, /location\s*:\s*['"]Barcelona(?:, Spain)?['"]/i);
  assert.doesNotMatch(read('src/pages/index.astro'), />\s*Barcelona\s*</i);
  assert.doesNotMatch(source, /['"`]0[1-9]\s*·/);
  assert.doesNotMatch(source, /padStart\(\s*2\s*,/);

  for (const obsoleteComponent of [
    'src/components/site/WorkRow.astro',
    'src/components/site/ProjectMedia.astro',
    'src/components/site/RecognitionRow.astro',
  ]) {
    assert.equal(exists(obsoleteComponent), false, `${obsoleteComponent} should be removed`);
  }
});

test('CV navigation previews before the single explicit download', () => {
  const header = read('src/components/site/SiteHeader.astro');
  const home = read('src/pages/index.astro');
  const cv = read('src/pages/cv.astro');
  const source = readTextTree('src');

  assert.doesNotMatch(header, /\sdownload(?:\s|=|>)/);
  assert.doesNotMatch(home, /\sdownload(?:\s|=|>)/);
  assert.match(cv, /<object\b/i);
  assert.match(cv, /type=["']application\/pdf["']/i);
  assert.match(cv, /<object\b[\s\S]*?<a\b[\s\S]*?<\/object>/i);
  assert.match(cv, /Open full screen/);
  assert.match(cv, /Download PDF/);

  const downloadLinks = source.match(/<a\b[^>]*\sdownload(?:\s|=|>)/gi) ?? [];
  assert.equal(downloadLinks.length, 1, 'only the explicit Download PDF link should force a download');

  const notFound = read('src/pages/404.astro');
  assert.match(notFound, /canonicalPath=["']\/404\.html["']/);
  assert.doesNotMatch(notFound, /href=["']\/work\//);
});

test('portrait geometry and award identities cannot regress', () => {
  const home = read('src/pages/index.astro');
  const about = read('src/pages/about.astro');
  const styles = read('src/styles/site.css');

  assert.match(home, /class=["']portrait-frame["']/);
  assert.match(about, /class=["']portrait-frame["']/);
  assert.match(styles, /\.portrait-frame\s*\{[^}]*aspect-ratio:\s*4\s*\/\s*5/s);
  assert.match(
    styles,
    /\.portrait-frame img\s*\{[^}]*width:\s*100%[^}]*height:\s*100%[^}]*object-fit:\s*cover/s,
  );

  for (const organization of ['auditors', 'hackupc', 'generalitat']) {
    assert.match(
      portfolio,
      new RegExp(`organization:\\s*['"]${organization}['"]`),
      `${organization} should be connected to its award`,
    );
  }
});

test('projects stay content-led and logo stages are normalized', () => {
  const home = read('src/pages/index.astro');
  const projectCard = read('src/components/site/ProjectCard.astro');
  const styles = read('src/styles/site.css');

  assert.doesNotMatch(home, /ProjectVisual/);
  assert.doesNotMatch(projectCard, /ProjectVisual/);
  assert.equal(exists('src/components/site/ProjectVisual.astro'), false);
  assert.match(styles, /\.organization-mark--compact\s*\{[^}]*width:\s*min\(100%,\s*8\.75rem\)[^}]*height:\s*3rem/s);
});

test('primary navigation requests a top reset without overriding hash navigation', () => {
  const header = read('src/components/site/SiteHeader.astro');
  const layout = read('src/layouts/SiteLayout.astro');

  assert.match(header, /portfolio:navigation-scroll-target/);
  assert.match(header, /target\.hash/);
  assert.match(layout, /resetRequestedNavigationScroll/);
  assert.match(layout, /addEventListener\('pageshow'/);
  assert.match(layout, /history\.scrollRestoration = 'manual'/);
  assert.match(layout, /window\.scrollTo\(0, 0\)/);
});

test('critical PDF, organization marks, and contact identities exist', () => {
  const cv = readFileSync(new URL('public/files/RogerBaigesCV.pdf', root));
  assert.equal(cv.subarray(0, 4).toString(), '%PDF');

  const assets = [
    'public/images/logos/cvc.svg',
    'public/images/logos/serimag.png',
    'public/images/logos/upc.png',
    'public/images/logos/ku-leuven.svg',
    'public/images/logos/barca-innovation-hub.webp',
    'public/images/logos/aina.png',
    'public/images/logos/bsc.svg',
    'public/images/logos/epfl.png',
    'public/images/logos/auditors.svg',
    'public/images/logos/hackupc.svg',
    'public/images/logos/generalitat.webp',
    'public/images/icons/email.svg',
    'public/images/icons/linkedin.png',
    'public/images/icons/github.svg',
    'public/images/icons/hugging-face.png',
    'public/images/og-card.png',
    'public/fonts/instrument-sans-latin.woff2',
    'public/fonts/newsreader-latin.woff2',
  ];

  for (const asset of assets) {
    assert.ok(exists(asset), `${asset} should exist`);
    assert.ok(statSync(new URL(asset, root)).size > 0, `${asset} should not be empty`);
  }

  const contactCopy = `${portfolio}\n${read('src/pages/about.astro')}`;
  for (const identity of [
    'rogerbaigestrilla@gmail.com',
    'linkedin.com/in/rogerbaigestrilla',
    'github.com/rogerbaiges',
    'huggingface.co/baiges',
  ]) {
    assert.ok(contactCopy.includes(identity), `missing contact identity: ${identity}`);
  }

  const assetSources = read('docs/ASSET_SOURCES.md');
  for (const assetName of [
    'barca-innovation-hub.webp',
    'aina.png',
    'bsc.svg',
    'epfl.png',
    'auditors.svg',
    'hackupc.svg',
    'generalitat.webp',
    'email.svg',
    'linkedin.png',
    'github.svg',
    'hugging-face.png',
  ]) {
    assert.ok(assetSources.includes(assetName), `${assetName} source should be documented`);
  }
});
