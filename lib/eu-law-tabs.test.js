import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { EU_LAW_SUBTABS, EU_LAW_TABS, euLawTabHref, findEuLawSubtab } from './eu-law-tabs.js';

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

  it('maps each sub-tab to the Sanity document type that holds its content', () => {
    assert.deepEqual(
      EU_LAW_SUBTABS.map((tab) => [tab.type, tab.field]),
      [
        ['euEuropeTab', 'europeContent'],
        ['euLocalTab', 'localContent'],
        ['euCircularEconomyTab', 'ceContent'],
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
});

describe('findEuLawSubtab', () => {
  it('finds a sub-tab by slug and rejects the overview and unknown slugs', () => {
    assert.equal(findEuLawSubtab('verplichtingen-voor-europese-lidstaten').type, 'euEuropeTab');
    assert.equal(findEuLawSubtab('overzicht'), undefined);
    assert.equal(findEuLawSubtab('bestaat-niet'), undefined);
  });
});
