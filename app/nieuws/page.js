import { client } from '@/lib/sanity';
import NewsOverview from '@/components/news-page/news-overview';
import { FEATURED_NEWS_ITEMS_QUERY, NON_FEATURED_NEWS_ITEMS_QUERY } from '@/lib/queries';

export const metadata = {
  title: 'Nieuws - CircuLaw',
};

async function getFeaturedNewsItems() {
  const featuredNewsData = await client.fetch(FEATURED_NEWS_ITEMS_QUERY, {
    next: { tags: ['newsItem'] },
  });

  if (!featuredNewsData) {
    throw new Error('could not get news items');
  }
  return featuredNewsData;
}

async function getNonFeaturedNewsItems() {
  const nonFeaturedNewsData = await client.fetch(NON_FEATURED_NEWS_ITEMS_QUERY, {
    next: { tags: ['newsItem'] },
  });

  if (!nonFeaturedNewsData) {
    throw new Error('could not get news items');
  }
  return nonFeaturedNewsData;
}

export default async function NewsOverviewPage() {
  const featuresNewsItems = await getFeaturedNewsItems();
  const nonFeaturedNewsItems = await getNonFeaturedNewsItems();
  return (
    <NewsOverview
      featuresNewsItems={featuresNewsItems}
      nonFeaturedNewsItems={nonFeaturedNewsItems}
    />
  );
}
