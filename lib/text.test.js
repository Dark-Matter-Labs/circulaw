import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toMetaDescription } from './text.js';

describe('toMetaDescription', () => {
  it('collapses whitespace and keeps short text as is', () => {
    assert.equal(toMetaDescription('  Wat is\n\nde  EU Taxonomie? '), 'Wat is de EU Taxonomie?');
  });

  it('cuts long text at a word boundary and marks the cut', () => {
    const text = 'woord '.repeat(60);
    const description = toMetaDescription(text, 40);
    assert.ok(description.length <= 40, description);
    assert.ok(description.endsWith('…'));
    assert.ok(!description.includes('woor…'), 'must not cut inside a word');
  });

  it('returns undefined for empty input so callers can fall back', () => {
    for (const empty of [undefined, null, '', '   \n ']) {
      assert.equal(toMetaDescription(empty), undefined);
    }
  });
});
