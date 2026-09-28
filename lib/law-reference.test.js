import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { lawArticleName } from './law-reference.js';

describe('lawArticleName', () => {
  it('names the law and the article number', () => {
    assert.equal(
      lawArticleName({ citeertitel: 'Omgevingswet', artikel: '5.21' }),
      'Omgevingswet, artikel 5.21',
    );
  });

  it('keeps article text that already says what it is', () => {
    assert.equal(
      lawArticleName({ citeertitel: 'Burgerlijk Wetboek ', artikel: 'Artikel 6:217 ' }),
      'Burgerlijk Wetboek, Artikel 6:217',
    );
    assert.equal(
      lawArticleName({ citeertitel: 'Omgevingswet', artikel: 'Afdeling 3.2' }),
      'Omgevingswet, Afdeling 3.2',
    );
  });

  it('leaves out "nvt" and URLs pasted into the article field', () => {
    assert.equal(lawArticleName({ citeertitel: 'nvt', artikel: 'nvt' }), null);
    assert.equal(lawArticleName({ citeertitel: 'Woningwet', artikel: 'nvt' }), 'Woningwet');
    assert.equal(
      lawArticleName({
        citeertitel: 'Aanbestedingswet 2012',
        artikel: 'https://wetten.overheid.nl/x',
      }),
      'Aanbestedingswet 2012',
    );
  });

  it('returns null without a law', () => {
    assert.equal(lawArticleName({ artikel: '5.21' }), null);
    assert.equal(lawArticleName({}), null);
  });
});
