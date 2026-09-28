import { LLMS_FULL_QUERY, LLMS_TAGS } from '@/lib/agent-queries';
import { config } from '@/lib/config';
import { buildLlmsFullTxt } from '@/lib/llms-full-txt';
import { sanityFileUrl } from '@/lib/portable-text-markdown';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';

// Rendered once at build time and again only when the revalidate webhook
// invalidates one of LLMS_TAGS.
export const dynamic = 'force-static';

export async function GET() {
  const data = await sanityFetch({ query: LLMS_FULL_QUERY, tags: LLMS_TAGS });
  // Throwing keeps the previous version in place instead of caching an empty file.
  if (!data) {
    throw new Error('could not fetch llms-full.txt content');
  }
  const body = buildLlmsFullTxt(data, {
    siteUrl: globalMeta.siteUrl,
    fileUrl: (ref) => sanityFileUrl(ref, config),
  });
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Agents fetch it directly; in search results it would compete with the
      // pages it copies.
      'X-Robots-Tag': 'noindex',
    },
  });
}
