import {
  LLMS_FULL_BASE_QUERY,
  LLMS_FULL_EU_LAWS_QUERY,
  LLMS_FULL_THEMA_INSTRUMENTS_QUERY,
  LLMS_TAGS,
} from '@/lib/agent-queries';
import { config } from '@/lib/config';
import { mergeLlmsFullData, themaIds } from '@/lib/llms-full-data';
import { buildLlmsFullTxt } from '@/lib/llms-full-txt';
import { sanityFileUrl } from '@/lib/portable-text-markdown';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';

// Rendered once at build time and again only when the revalidate webhook
// invalidates one of LLMS_TAGS.
export const dynamic = 'force-static';

const fetchPiece = (query, qParams) => sanityFetch({ query, qParams, tags: LLMS_TAGS });

export async function GET() {
  const [base, euLaws] = await Promise.all([
    fetchPiece(LLMS_FULL_BASE_QUERY),
    fetchPiece(LLMS_FULL_EU_LAWS_QUERY),
  ]);
  // Throwing keeps the previous version in place instead of caching an empty file.
  if (!base || !euLaws) {
    throw new Error('could not fetch llms-full.txt content');
  }
  const ids = themaIds(base);
  const instrumentLists = await Promise.all(
    ids.map((themaId) => fetchPiece(LLMS_FULL_THEMA_INSTRUMENTS_QUERY, { themaId })),
  );
  if (instrumentLists.some((instruments) => !Array.isArray(instruments))) {
    throw new Error('could not fetch llms-full.txt instruments');
  }
  const instrumentsByThema = Object.fromEntries(ids.map((id, i) => [id, instrumentLists[i]]));

  const body = buildLlmsFullTxt(mergeLlmsFullData({ base, euLaws, instrumentsByThema }), {
    siteUrl: globalMeta.siteUrl,
    fileUrl: (ref) => sanityFileUrl(ref, config),
  });
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
