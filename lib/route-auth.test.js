import assert from 'node:assert/strict';
import { afterEach, beforeEach, describe, it, mock } from 'node:test';

import { hasValidBearerToken, readSecret } from './route-auth.js';

const requestWith = (authorization) =>
  new Request('https://example.test/api/algolia-indexing', {
    headers: authorization === undefined ? {} : { authorization },
  });

describe('readSecret', () => {
  beforeEach(() => mock.method(console, 'error', () => {}));
  afterEach(() => mock.restoreAll());

  it('returns the trimmed value when set', () => {
    assert.equal(readSecret('X', { X: '  s3cret \n' }), 's3cret');
    assert.equal(console.error.mock.callCount(), 0);
  });

  it('returns null and logs the variable name when unset or blank', () => {
    for (const env of [{}, { X: '' }, { X: '   ' }]) {
      assert.equal(readSecret('X', env), null);
    }
    assert.equal(console.error.mock.callCount(), 3);
    assert.match(console.error.mock.calls[0].arguments[0], /X is not set/);
  });
});

describe('hasValidBearerToken', () => {
  const secret = 'correct-horse-battery-staple';

  it('accepts the exact secret', () => {
    assert.equal(hasValidBearerToken(requestWith(`Bearer ${secret}`), secret), true);
    assert.equal(hasValidBearerToken(requestWith(`bearer ${secret}`), secret), true);
  });

  it('rejects a missing, malformed or wrong header', () => {
    for (const header of [
      undefined,
      '',
      secret,
      `Basic ${secret}`,
      'Bearer ',
      'Bearer wrong',
      `Bearer ${secret}x`,
    ]) {
      assert.equal(hasValidBearerToken(requestWith(header), secret), false, `header: ${header}`);
    }
  });

  it('fails closed when no secret is configured', () => {
    for (const missing of [null, undefined, '']) {
      assert.equal(hasValidBearerToken(requestWith('Bearer '), missing), false);
      assert.equal(hasValidBearerToken(requestWith('Bearer anything'), missing), false);
    }
  });
});
