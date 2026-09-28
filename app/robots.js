import { config } from '@/lib/config';
import { buildRobots, isIndexableDataset } from '@/lib/seo';
import globalMeta from '@/utils/global-meta';

export default function robots() {
  return buildRobots({
    indexable: isIndexableDataset(config.dataset),
    siteUrl: globalMeta.siteUrl,
  });
}
