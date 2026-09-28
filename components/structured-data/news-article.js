import { urlFor } from '@/lib/sanity-image';
import { buildNewsArticle } from '@/lib/structured-data';
import globalMeta from '@/utils/global-meta';

import JsonLd from './json-ld';

// news: the newsItem document of a news page (NEWS_DETAIL_PAGE_QUERY).
export default function NewsArticleStructuredData({ news }) {
  const imageUrl = news?.newsImage?.asset ? urlFor(news.newsImage).width(1200).url() : undefined;
  return <JsonLd data={buildNewsArticle(news, { siteUrl: globalMeta.siteUrl, imageUrl })} />;
}
