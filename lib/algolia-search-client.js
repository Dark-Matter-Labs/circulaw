/**
 * Algolia client config for client-side search.
 *
 * IMPORTANT for production:
 * - NEXT_PUBLIC_* vars are inlined at BUILD time. Set them in your host's
 *   build environment (e.g. Vercel → Project → Settings → Environment Variables)
 *   for Production (and Preview if you use branch deploys).
 * - In Algolia Dashboard → API Keys → Search-Only API Key → ensure "Allowed
 *   referrers" includes your production domain (e.g. https://yourdomain.com/*).
 *   If only localhost is allowed, production requests will be blocked.
 */

const apiId = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;
const apiKey = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;

const isConfigured = typeof apiId === 'string' && apiId.length > 0 && typeof apiKey === 'string' && apiKey.length > 0;

if (typeof window !== 'undefined' && !isConfigured) {
  console.error(
    '[Algolia] Search not configured: NEXT_PUBLIC_AGOLIA_APPLICATION_ID and NEXT_PUBLIC_AGOLIA_SEARCH_KEY must be set at build time. In production, add them in your host’s environment (e.g. Vercel project settings). Also check Algolia Dashboard → API Keys → Allowed referrers for your production domain.'
  );
}

export const algoliaConfig = {
  apiId: apiId || '',
  apiKey: apiKey || '',
  isConfigured,
};
