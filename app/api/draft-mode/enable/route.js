import { defineEnableDraftMode } from 'next-sanity/draft-mode';

import { client } from '@/lib/sanity';

// Called by the Studio's Preview tab with a short-lived secret the Studio
// stored in the dataset. validatePreviewUrl checks it with the read token,
// then draft mode is switched on and the request is sent to the preview path.
const { GET: enableDraftMode } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});

export async function GET(request) {
  if (!process.env.SANITY_API_READ_TOKEN) {
    console.error('Draft mode: SANITY_API_READ_TOKEN is not set');
    return new Response('Preview is not configured: SANITY_API_READ_TOKEN is missing.', {
      status: 500,
    });
  }
  return enableDraftMode(request);
}
