// An Algolia requester (algoliasearch v4 `requester` option) that sends
// requests through fetch with a short Next.js data-cache lifetime. Used on the
// server only, so the server-rendered instrument lists reuse a search for up to
// ALGOLIA_CACHE_SECONDS instead of calling Algolia on every page view. The
// response contract matches @algolia/requester-node-http: status 0 on network
// errors and timeouts, so Algolia's transporter retries its other hosts.
export const ALGOLIA_CACHE_SECONDS = 60;
export const ALGOLIA_CACHE_TAG = 'algolia';

export function createCachedFetchRequester({
  revalidate = ALGOLIA_CACHE_SECONDS,
  fetchImpl = (...args) => fetch(...args),
} = {}) {
  return {
    async send({ method, url, headers, data, connectTimeout, responseTimeout }) {
      const controller = new AbortController();
      // The Node requester times connecting and responding separately; fetch
      // exposes one signal, so allow both together. Algolia gives seconds.
      const timer = setTimeout(() => controller.abort(), (connectTimeout + responseTimeout) * 1000);
      try {
        const response = await fetchImpl(url, {
          method,
          headers,
          body: data,
          signal: controller.signal,
          next: { revalidate, tags: [ALGOLIA_CACHE_TAG] },
        });
        return { content: await response.text(), status: response.status, isTimedOut: false };
      } catch (error) {
        return controller.signal.aborted
          ? { content: 'Request timeout', status: 0, isTimedOut: true }
          : { content: error.message, status: 0, isTimedOut: false };
      } finally {
        clearTimeout(timer);
      }
    },
    destroy() {
      return Promise.resolve();
    },
  };
}
