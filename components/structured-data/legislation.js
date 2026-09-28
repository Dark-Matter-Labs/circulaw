import { buildLegislationGraph } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// law: the euLaw document of an EU law page (LAW_SUMMARY_QUERY).
export default function LegislationStructuredData({ law }) {
  return <JsonLd data={buildLegislationGraph(law, { siteUrl: globalMeta.siteUrl })} />;
}
