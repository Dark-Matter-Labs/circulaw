import { LLMS_INDEX_QUERY, LLMS_TAGS } from '@/lib/agent-queries';
import { buildLlmsTxt } from '@/lib/llms-txt';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';

// Rendered once at build time and again only when the revalidate webhook
// invalidates one of LLMS_TAGS.
export const dynamic = 'force-static';

export async function GET() {
  const data = await sanityFetch({ query: LLMS_INDEX_QUERY, tags: LLMS_TAGS });
  // Throwing keeps the previous version in place instead of caching an empty index.
  if (!data) {
    throw new Error('could not fetch llms.txt content');
  }
  return new Response(buildLlmsTxt(data, { siteUrl: globalMeta.siteUrl }), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
