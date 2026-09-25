import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  GOOGLE_TRANSLATE_ELEMENT_ID,
  GOOGLE_TRANSLATE_SCRIPT_SRC,
  initGoogleTranslate,
} from './google-translate.js';

const fakeWindow = ({ withGoogle = true, withContainer = true } = {}) => {
  const container = { dataset: {} };
  const constructed = [];
  class TranslateElement {
    constructor(options, elementId) {
      constructed.push({ options, elementId });
    }
  }
  return {
    constructed,
    container,
    win: {
      google: withGoogle ? { translate: { TranslateElement } } : undefined,
      document: {
        getElementById: (id) =>
          withContainer && id === GOOGLE_TRANSLATE_ELEMENT_ID ? container : null,
      },
    },
  };
};

describe('GOOGLE_TRANSLATE_SCRIPT_SRC', () => {
  it('loads the element script over https with the init callback', () => {
    assert.equal(
      GOOGLE_TRANSLATE_SCRIPT_SRC,
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    );
  });
});

describe('initGoogleTranslate', () => {
  it('builds the widget into the translate element', () => {
    const { win, constructed } = fakeWindow();

    assert.equal(initGoogleTranslate(win), true);
    assert.deepEqual(constructed, [
      {
        options: { pageLanguage: 'auto', autoDisplay: false },
        elementId: GOOGLE_TRANSLATE_ELEMENT_ID,
      },
    ]);
  });

  it('builds the widget only once when called repeatedly', () => {
    const { win, constructed } = fakeWindow();

    initGoogleTranslate(win);
    assert.equal(initGoogleTranslate(win), false);
    assert.equal(constructed.length, 1);
  });

  it('does nothing before the Google script has loaded', () => {
    const { win, container } = fakeWindow({ withGoogle: false });

    assert.equal(initGoogleTranslate(win), false);
    assert.deepEqual(container.dataset, {});
  });

  it('does nothing when the translate element is not in the page', () => {
    const { win, constructed } = fakeWindow({ withContainer: false });

    assert.equal(initGoogleTranslate(win), false);
    assert.equal(constructed.length, 0);
  });
});
