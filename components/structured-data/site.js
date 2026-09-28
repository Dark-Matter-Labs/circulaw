import { buildSiteGraph } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

const siteGraph = buildSiteGraph({
  siteUrl: globalMeta.siteUrl,
  name: 'CircuLaw',
  alternateName: globalMeta.siteName,
  description: globalMeta.description,
  email: globalMeta.email,
  logo: `${globalMeta.siteUrl}/circulaw_logotype2.png`,
  sameAs: ['https://www.linkedin.com/company/circulaw/'],
});

// Organization and WebSite, on every page via the root layout.
export default function SiteStructuredData() {
  return <JsonLd data={siteGraph} />;
}
