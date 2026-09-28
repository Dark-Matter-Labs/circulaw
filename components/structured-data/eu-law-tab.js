import { buildEuLawTabGraph } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// law: the euLaw document (LAW_SUMMARY_QUERY); tab: { slug, name } of the sub-tab.
export default function EuLawTabStructuredData({ law, tab, description, dateModified }) {
  return (
    <JsonLd
      data={buildEuLawTabGraph(law, tab, {
        siteUrl: globalMeta.siteUrl,
        description,
        dateModified,
      })}
    />
  );
}
