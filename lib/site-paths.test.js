import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  EU_LAW_TABS,
  aboutPath,
  absoluteUrl,
  euLawPath,
  euLawTabPath,
  instrumentPath,
  newsPath,
  productChainPath,
  themaPath,
} from './site-paths.js';

const SITE = 'https://www.circulaw.nl';

describe('site paths', () => {
  it('builds the route of every content type', () => {
    assert.equal(productChainPath('bouw'), '/bouw');
    assert.equal(themaPath('bouw', 'houtbouw'), '/bouw/houtbouw');
    assert.equal(instrumentPath('bouw', 'houtbouw', 'x'), '/bouw/houtbouw/instrumenten/x');
    assert.equal(euLawPath('eu-taxonomie'), '/eu-wetgeving/eu-taxonomie');
    assert.equal(aboutPath('wat-is-circulaw'), '/over/wat-is-circulaw');
    assert.equal(newsPath('iets'), '/nieuws/iets');
  });

  it('builds EU law tab routes from the tab slugs', () => {
    assert.deepEqual(
      EU_LAW_TABS.map((tab) => tab.slug),
      [
        'verplichtingen-voor-europese-lidstaten',
        'relevantie-voor-regionale-en-lokale-overheden',
        'relevantie-voor-de-circulaire-economie',
      ],
    );
    assert.equal(
      euLawTabPath('eu-taxonomie', EU_LAW_TABS[0].slug),
      '/eu-wetgeving/eu-taxonomie/verplichtingen-voor-europese-lidstaten',
    );
  });

  it('returns null when a segment is missing, so no broken URL is emitted', () => {
    assert.equal(instrumentPath('bouw', undefined, 'x'), null);
    assert.equal(themaPath(null, 'houtbouw'), null);
    assert.equal(newsPath(''), null);
  });
});

describe('absoluteUrl', () => {
  it('uses the bare site URL for the homepage', () => {
    assert.equal(absoluteUrl(SITE, '/'), SITE);
  });

  it('prefixes paths and keeps parentheses like the canonical URLs do', () => {
    assert.equal(
      absoluteUrl(SITE, '/eu-wetgeving/single-use-plastics-directive-(sup)'),
      `${SITE}/eu-wetgeving/single-use-plastics-directive-(sup)`,
    );
  });

  it('percent-encodes spaces and non-ASCII characters', () => {
    assert.equal(absoluteUrl(SITE, '/over/café bar'), `${SITE}/over/caf%C3%A9%20bar`);
  });

  it('returns null without a path', () => {
    assert.equal(absoluteUrl(SITE, null), null);
  });
});
