import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  ALGOLIA_CACHE_SECONDS,
  ALGOLIA_CACHE_TAG,
  createCachedFetchRequester,
} from './algolia-cached-requester.js';

const request = {
  method: 'POST',
  url: 'https://example-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=test',
  headers: { 'x-algolia-application-id': 'APP' },
  data: '{"requests":[{"indexName":"instruments"}]}',
  connectTimeout: 0.05,
  responseTimeout: 0.05,
};

describe('createCachedFetchRequester', () => {
  it('sends the Algolia request through fetch with a short, tagged Next cache', async () => {
    const calls = [];
    const fetchImpl = async (url, init) => {
      calls.push({ url, init });
      return new Response('{"results":[]}', { status: 200 });
    };
    const response = await createCachedFetchRequester({ fetchImpl }).send(request);

    assert.deepEqual(response, { content: '{"results":[]}', status: 200, isTimedOut: false });
    assert.equal(calls[0].url, request.url);
    assert.equal(calls[0].init.method, 'POST');
    assert.deepEqual(calls[0].init.headers, request.headers);
    assert.equal(calls[0].init.body, request.data);
    assert.deepEqual(calls[0].init.next, {
      revalidate: ALGOLIA_CACHE_SECONDS,
      tags: [ALGOLIA_CACHE_TAG],
    });
    assert.equal(ALGOLIA_CACHE_SECONDS, 60);
  });

  it('passes Algolia error statuses through so its retry logic can act on them', async () => {
    const fetchImpl = async () => new Response('{"message":"Invalid"}', { status: 403 });
    const response = await createCachedFetchRequester({ fetchImpl }).send(request);
    assert.deepEqual(response, {
      content: '{"message":"Invalid"}',
      status: 403,
      isTimedOut: false,
    });
  });

  it('reports a network error as status 0, like the Node requester', async () => {
    const fetchImpl = async () => {
      throw new Error('getaddrinfo ENOTFOUND');
    };
    const response = await createCachedFetchRequester({ fetchImpl }).send(request);
    assert.deepEqual(response, { content: 'getaddrinfo ENOTFOUND', status: 0, isTimedOut: false });
  });

  it('gives up after the connect plus response timeout and reports it as timed out', async () => {
    const fetchImpl = (url, init) =>
      new Promise((resolve, reject) => {
        init.signal.addEventListener('abort', () => reject(init.signal.reason));
      });
    const started = Date.now();
    const response = await createCachedFetchRequester({ fetchImpl }).send(request);
    assert.equal(response.isTimedOut, true);
    assert.equal(response.status, 0);
    assert.ok(Date.now() - started < 1000);
  });
});
