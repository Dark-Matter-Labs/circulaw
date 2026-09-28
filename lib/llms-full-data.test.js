import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { mergeLlmsFullData, themaIds } from './llms-full-data.js';

const base = {
  productChains: [
    {
      name: 'Bouw',
      slug: 'bouw',
      themas: [
        { _id: 't1', name: 'Houtbouw', slug: 'houtbouw', description: 'Hout' },
        { _id: 't2', name: 'Woningen', slug: 'woningen', description: null },
      ],
    },
    { name: 'Leeg', slug: 'leeg', themas: [] },
  ],
  aboutPages: [{ title: 'Over' }],
  faq: { content: [] },
  pillars: [],
  modelTexts: [],
  news: [],
};

describe('themaIds', () => {
  it('lists the id of every theme, in order', () => {
    assert.deepEqual(themaIds(base), ['t1', 't2']);
    assert.deepEqual(themaIds(null), []);
  });
});

describe('mergeLlmsFullData', () => {
  const merged = mergeLlmsFullData({
    base,
    euLaws: [{ title: 'EU Taxonomie' }],
    instrumentsByThema: { t1: [{ title: 'A' }, { title: 'B' }] },
  });

  it('puts each theme’s instruments back under it, in the shape buildLlmsFullTxt reads', () => {
    assert.deepEqual(merged.productChains[0].themas, [
      {
        name: 'Houtbouw',
        slug: 'houtbouw',
        description: 'Hout',
        instruments: [{ title: 'A' }, { title: 'B' }],
      },
      { name: 'Woningen', slug: 'woningen', description: null, instruments: [] },
    ]);
    assert.deepEqual(merged.productChains[1].themas, []);
  });

  it('adds the EU laws and keeps the other sections', () => {
    assert.deepEqual(merged.euLaws, [{ title: 'EU Taxonomie' }]);
    assert.deepEqual(merged.aboutPages, base.aboutPages);
    assert.deepEqual(merged.faq, base.faq);
  });

  it('does not modify its input', () => {
    assert.equal(base.productChains[0].themas[0]._id, 't1');
    assert.equal(base.productChains[0].themas[0].instruments, undefined);
  });
});
