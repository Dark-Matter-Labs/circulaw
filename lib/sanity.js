import { draftMode } from 'next/headers';

import { client } from './sanity-client';

export { client };

// Used only while draft mode is on (enabled from the Studio's Preview tab):
// reads unpublished drafts, which needs a token.
export const previewClient = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'drafts',
  useCdn: false,
});

// draftMode() throws outside a request (generateStaticParams, build-time
// sitemap). There is no preview session in that case, so it is off.
async function isDraftMode() {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

export async function sanityFetch({ query, qParams = {}, tags }) {
  if (await isDraftMode()) {
    return previewClient.fetch(query, qParams, { cache: 'no-store' });
  }
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}
