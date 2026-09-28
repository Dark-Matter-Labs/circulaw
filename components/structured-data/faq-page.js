import { buildFaqPage } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// content: FAQPageContent of the FAQ page (FAQ_PAGE_QUERY).
export default function FaqStructuredData({ content }) {
  return <JsonLd data={buildFaqPage(content, { siteUrl: globalMeta.siteUrl })} />;
}
