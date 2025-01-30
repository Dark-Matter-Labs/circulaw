import NewsOverview from '@/components/news-page/news-overview';
import { FEATURED_NEWS_ITEMS_QUERY, NON_FEATURED_NEWS_ITEMS_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'Nieuws - CircuLaw',
};

export default async function NewsOverviewPage() {
  const featuresNewsItems = await sanityFetch({
    query: FEATURED_NEWS_ITEMS_QUERY,
    tags: ['newsItem'],
  });
  const nonFeaturedNewsItems = await sanityFetch({
    query: NON_FEATURED_NEWS_ITEMS_QUERY,
    tags: ['newsItem'],
  });
  return (
    <NewsOverview
      featuresNewsItems={featuresNewsItems}
      nonFeaturedNewsItems={nonFeaturedNewsItems}
    />
  );
}
