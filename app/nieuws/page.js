import { NEWS_ITEMS_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import NewsOverview from '@/components/news-page/news-overview';

async function getNewsOverviewData() {
  const newsOverviewData = await client.fetch(NEWS_ITEMS_QUERY);

  if (!newsOverviewData) {
    throw new Error('could not get news items');
  }
  return newsOverviewData;
}

export default async function NewsOverviewPage() {
  const newsOverviewContent = await getNewsOverviewData();
  return <NewsOverview data={newsOverviewContent} />;
}