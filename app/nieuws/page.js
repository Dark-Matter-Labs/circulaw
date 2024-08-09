import { client } from '@/lib/sanity';
import NewsOverview from '@/components/news-page/news-overview';

export const metadata = {
  title: 'Nieuws - CircuLaw',
};

const FEATURED_NEWS_ITEMS_QUERY = `
*[_type == 'newsItem' && featured == true] {
  "image": newsImage.asset->.url,
  ...
}
`;

const NON_FEATURED_NEWS_ITEMS_QUERY = `
*[_type == 'newsItem' && featured == false] {
  "image": newsImage.asset->.url,
  ...
}
`;

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
