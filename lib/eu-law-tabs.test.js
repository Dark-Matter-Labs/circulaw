import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import nextConfig from '../next.config.js';
import {
  EU_LAW_SUBTABS,
  EU_LAW_TABS,
  euLawTabHref,
  findEuLawSubtab,
  subtabSlugForType,
} from './eu-law-tabs.js';

describe('EU_LAW_TABS', () => {
  it('starts with the overview, followed by the three sub-tabs in display order', () => {
    assert.deepEqual(
      EU_LAW_TABS.map((tab) => tab.slug),
      [
        'overzicht',
        'verplichtingen-voor-europese-lidstaten',
        'relevantie-voor-regionale-en-lokale-overheden',
        'relevantie-voor-de-circulaire-economie',
      ],
    );
    assert.deepEqual(EU_LAW_SUBTABS, EU_LAW_TABS.slice(1));
  });

  it('maps each sub-tab to the Sanity document and field that hold its content', () => {
    assert.deepEqual(
      EU_LAW_SUBTABS.map((tab) => [tab.type, tab.field, tab.sections]),
      [
        ['euEuropeTab', 'europeContent', true],
        ['euLocalTab', 'localContent', true],
        ['euCircularEconomyTab', 'ceContent', false],
      ],
    );
  });
});

describe('euLawTabHref', () => {
  it('gives the overview the law URL itself and each sub-tab its own path', () => {
    assert.equal(euLawTabHref('eu-taxonomie', 'overzicht'), '/eu-wetgeving/eu-taxonomie');
    assert.equal(
      euLawTabHref('eu-taxonomie', 'relevantie-voor-de-circulaire-economie'),
      '/eu-wetgeving/eu-taxonomie/relevantie-voor-de-circulaire-economie',
    );
  });

  it('returns null without a law slug instead of a broken URL', () => {
    assert.equal(euLawTabHref(undefined, 'overzicht'), null);
    assert.equal(euLawTabHref('', 'relevantie-voor-de-circulaire-economie'), null);
  });
});

describe('subtabSlugForType', () => {
  it('finds the route slug of the sub-tab stored as a Sanity type', () => {
    assert.equal(subtabSlugForType('euLocalTab'), 'relevantie-voor-regionale-en-lokale-overheden');
    assert.equal(subtabSlugForType('euLaw'), undefined);
  });
});

describe('next.config.js redirect for the old ?tab= links', () => {
  it('covers exactly the sub-tabs, so a renamed tab cannot be missed', async () => {
    const redirects = await nextConfig.redirects();
    const tabRedirect = redirects.find((r) => r.destination === '/eu-wetgeving/:law/:tab');
    const pattern = tabRedirect.has.find((h) => h.key === 'tab').value;
    const slugs = pattern.match(/^\(\?<tab>(.*)\)$/)[1].split('|');
    assert.deepEqual(
      slugs,
      EU_LAW_SUBTABS.map((tab) => tab.slug),
    );
  });
});

describe('findEuLawSubtab', () => {
  it('finds a sub-tab by slug and rejects the overview and unknown slugs', () => {
    assert.equal(findEuLawSubtab('verplichtingen-voor-europese-lidstaten').type, 'euEuropeTab');
    assert.equal(findEuLawSubtab('overzicht'), undefined);
    assert.equal(findEuLawSubtab('bestaat-niet'), undefined);
  });
});
