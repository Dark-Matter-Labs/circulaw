import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { STATIC_PATHS, buildRobots, buildSitemapEntries, isIndexableDataset } from './seo.js';

const SITE = 'https://www.circulaw.nl';

describe('isIndexableDataset', () => {
  it('only lets the production dataset be indexed', () => {
    assert.equal(isIndexableDataset('production'), true);
    for (const dataset of ['staging', 'dev', undefined, '']) {
      assert.equal(isIndexableDataset(dataset), false);
    }
  });
});

describe('buildRobots', () => {
  it('opens the whole site to every crawler, except the Studio and API routes', () => {
    const robots = buildRobots({ indexable: true, siteUrl: SITE });
    assert.deepEqual(robots.rules, [
      { userAgent: '*', allow: ['/', '/api/og'], disallow: ['/studio', '/api/'] },
    ]);
    assert.equal(robots.sitemap, `${SITE}/sitemap.xml`);
  });

  it('closes a non-production site so it does not compete with www.circulaw.nl', () => {
    const robots = buildRobots({
      indexable: false,
      siteUrl: 'https://circulaw-staging.vercel.app',
    });
    assert.deepEqual(robots.rules, [{ userAgent: '*', disallow: '/' }]);
    assert.equal(robots.sitemap, undefined);
  });
});

describe('buildSitemapEntries', () => {
  const data = {
    instrument: [{ URL: '/bouw/houtbouw/instrumenten/a', updatedAt: '2026-01-02T00:00:00Z' }],
    about: [{ URL: '/over/wat-is-circulaw', updatedAt: '2026-01-03T00:00:00Z' }],
    eu: [{ URL: '/eu-wetgeving/eu-taxonomie', updatedAt: '2026-01-04T00:00:00Z' }],
    pcs: [{ URL: '/bouw', updatedAt: '2026-01-05T00:00:00Z' }],
    themas: [
      { URL: '/bouw/houtbouw', updatedAt: '2026-01-06T00:00:00Z' },
      { URL: '/bouw/woningen', updatedAt: '2026-01-07T00:00:00Z' },
    ],
    fullThemas: [{ URL: '/bouw/houtbouw', updatedAt: '2026-01-06T00:00:00Z' }],
    news: [{ URL: '/nieuws/iets', updatedAt: '2026-01-08T00:00:00Z' }],
  };
  const entries = buildSitemapEntries(data, SITE);
  const urls = entries.map((entry) => entry.url);

  it('lists every static page, with the homepage as the bare site URL', () => {
    assert.ok(urls.includes(SITE));
    for (const path of STATIC_PATHS.filter((p) => p !== '/')) {
      assert.ok(urls.includes(SITE + path), `missing ${path}`);
    }
  });

  it('lists every Sanity document page with its last-modified date', () => {
    const byUrl = Object.fromEntries(entries.map((entry) => [entry.url, entry]));
    assert.equal(
      byUrl[`${SITE}/bouw/houtbouw/instrumenten/a`].lastModified,
      '2026-01-02T00:00:00Z',
    );
    assert.equal(byUrl[`${SITE}/over/wat-is-circulaw`].lastModified, '2026-01-03T00:00:00Z');
    assert.equal(byUrl[`${SITE}/eu-wetgeving/eu-taxonomie`].lastModified, '2026-01-04T00:00:00Z');
    assert.equal(byUrl[`${SITE}/bouw`].lastModified, '2026-01-05T00:00:00Z');
    assert.equal(byUrl[`${SITE}/bouw/woningen`].lastModified, '2026-01-07T00:00:00Z');
    assert.equal(byUrl[`${SITE}/nieuws/iets`].lastModified, '2026-01-08T00:00:00Z');
  });

  it('adds the three sub-pages of full themes only', () => {
    for (const sub of ['instrumenten', 'categorie', 'overheidsbevoegdheid']) {
      assert.ok(urls.includes(`${SITE}/bouw/houtbouw/${sub}`), `missing houtbouw/${sub}`);
      assert.ok(!urls.includes(`${SITE}/bouw/woningen/${sub}`), `woningen/${sub} does not exist`);
    }
  });

  it('adds a URL for each sub-tab of every EU law', () => {
    const byUrl = Object.fromEntries(entries.map((entry) => [entry.url, entry]));
    for (const tab of [
      'verplichtingen-voor-europese-lidstaten',
      'relevantie-voor-regionale-en-lokale-overheden',
      'relevantie-voor-de-circulaire-economie',
    ]) {
      const entry = byUrl[`${SITE}/eu-wetgeving/eu-taxonomie/${tab}`];
      assert.ok(entry, `missing eu-taxonomie/${tab}`);
      assert.equal(entry.lastModified, '2026-01-04T00:00:00Z');
    }
    assert.ok(!urls.includes(`${SITE}/eu-wetgeving/eu-taxonomie/overzicht`));
  });

  it('never lists a URL twice', () => {
    assert.equal(new Set(urls).size, urls.length);
  });

  it('skips documents without a URL and copes with missing groups', () => {
    const sparse = buildSitemapEntries({ instrument: [{ URL: null }], news: null }, SITE);
    assert.deepEqual(
      sparse.map((entry) => entry.url),
      STATIC_PATHS.map((path) => (path === '/' ? SITE : SITE + path)),
    );
  });
});
