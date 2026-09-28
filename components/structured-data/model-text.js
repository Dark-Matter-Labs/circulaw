import { buildModelTextGraph } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// modelText: the result of MODEL_TEXT_PAGE_QUERY.
export default function ModelTextStructuredData({ modelText }) {
  return <JsonLd data={buildModelTextGraph(modelText, { siteUrl: globalMeta.siteUrl })} />;
}
