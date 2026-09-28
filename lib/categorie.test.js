import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  CATEGORIES,
  countInSubcategories,
  defaultCategory,
  filterInstruments,
  groupBySubcategory,
  isCategory,
} from './categorie.js';

const a = {
  titel: 'A',
  beleid: true,
  beleidSubCategory: ['strategie'],
  overheidslaag: ['Gemeentelijk'],
};
const b = {
  titel: 'B',
  beleid: true,
  inkoop: true,
  beleidSubCategory: ['strategie', 'beleidsuitvoering'],
  inkoopSubCategory: ['gunningscriteria'],
  overheidslaag: ['Provinciaal', 'Nationaal'],
};
const c = { titel: 'C', subsidie: true, overheidslaag: ['Nationaal'] };
const all = [a, b, c];

describe('isCategory', () => {
  it('accepts the five categories only', () => {
    assert.deepEqual(CATEGORIES, ['beleid', 'inkoop', 'grondpositie', 'subsidie', 'fiscaal']);
    assert.equal(isCategory('inkoop'), true);
    for (const value of ['alle', null, undefined, 'Beleid']) {
      assert.equal(isCategory(value), false);
    }
  });
});

describe('defaultCategory', () => {
  it('opens on beleid when the theme has beleid instruments, else on inkoop', () => {
    assert.equal(defaultCategory(all), 'beleid');
    assert.equal(defaultCategory([c]), 'inkoop');
    assert.equal(defaultCategory(undefined), 'inkoop');
  });
});

describe('filterInstruments', () => {
  it('keeps the instruments in a category', () => {
    assert.deepEqual(filterInstruments(all, 'beleid'), [a, b]);
    assert.deepEqual(filterInstruments(all, 'subsidie'), [c]);
    assert.deepEqual(filterInstruments(all, 'fiscaal'), []);
  });

  it('narrows to one government level unless it is "alle"', () => {
    assert.deepEqual(filterInstruments(all, 'beleid', 'alle'), [a, b]);
    assert.deepEqual(filterInstruments(all, 'beleid', 'Gemeentelijk'), [a]);
    assert.deepEqual(filterInstruments(all, 'beleid', 'Nationaal'), [b]);
  });

  it('copes with missing data', () => {
    assert.deepEqual(filterInstruments(undefined, 'beleid'), []);
  });
});

describe('groupBySubcategory', () => {
  it('lists every subcategory of the category in order, with its instruments', () => {
    assert.deepEqual(groupBySubcategory([a, b], 'beleid'), [
      { subCategory: 'strategie', instruments: [a, b] },
      { subCategory: 'beleidsdoorwerking', instruments: [] },
      { subCategory: 'beleidsuitvoering', instruments: [b] },
    ]);
  });

  it('has no groups for categories without subcategories', () => {
    assert.deepEqual(groupBySubcategory([c], 'subsidie'), []);
  });
});

describe('countInSubcategories', () => {
  it('counts an instrument once per subcategory it appears under, as the list shows it', () => {
    assert.equal(countInSubcategories([a, b], 'beleid'), 3);
    assert.equal(countInSubcategories([b], 'inkoop'), 1);
  });
});
