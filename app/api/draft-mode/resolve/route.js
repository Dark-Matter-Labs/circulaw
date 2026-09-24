import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import { previewPathFor, publishedId } from '@/lib/preview-path';
import { previewClient } from '@/lib/sanity';

const PREVIEW_DOC_QUERY = `
*[_id == $id][0]{
  _type,
  "slug": slug.current,
  hasPage,
  "productChain": transitionAgenda->slug.current,
  "thema": thema->slug.current
}
`;

const DOC_ID = /^[\w.-]+$/;

function textResponse(message, status) {
  return new Response(message, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

// The Studio's preview path. Instruments and themes only reference their
// theme and product chain, so the page URL is looked up here, on the drafts.
export async function GET(request) {
  const { isEnabled } = await draftMode();
  if (!isEnabled) {
    return textResponse('Preview is only available from Sanity Studio.', 401);
  }

  const id = new URL(request.url).searchParams.get('id');
  if (!id || !DOC_ID.test(id)) {
    return textResponse('Missing or invalid document id.', 400);
  }

  let doc;
  try {
    doc = await previewClient.fetch(
      PREVIEW_DOC_QUERY,
      { id: publishedId(id) },
      { cache: 'no-store' },
    );
  } catch (err) {
    console.error('Draft mode: could not load document for preview', id, err);
    return textResponse('Could not load this document from Sanity.', 502);
  }

  const path = previewPathFor(doc);
  if (!path) {
    return textResponse(
      'Nog geen voorbeeld beschikbaar. Vul eerst de slug in (en bij instrumenten en thema’s ook het thema en de productketen).',
      404,
    );
  }
  redirect(path);
}
