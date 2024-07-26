import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client } from '@/lib/sanity';
import NewsDetailPageBody from '@/components/news-page/news-detail-page-body';


// TODO - leaving these two queries here
// need to refactor how news is built and then re-fetch the data in the new structure. 
// this will also improve passing newsPageContent.newsItems[0] to the components.
const NEWS_SLUGS_QUERY = `
*[_type == "newsPage"][0]{
    newsItems[slug != undefined]{
      "slug": slug.current
    }
 }
`;

const NEWS_DETAIL_PAGE_QUERY = `
*[_type == "newsPage"][0] {
    "newsItems" :newsItems[slug.current == $slug]{
      ...,
    }
}
`;

export async function generateStaticParams() {
  const newsPages = await client.fetch(NEWS_SLUGS_QUERY);
  return newsPages.newsItems.map((newsPage) => ({ slug: newsPage.slug }));
}

async function getNewsPageData(params) {
  const slug = params;
  const newsPageData = await client.fetch(NEWS_DETAIL_PAGE_QUERY, { slug });
  if (!newsPageData) {
    throw new Error('could not get news detail data');
  }
  return newsPageData;
}

export default async function NewsDetailPage({ params }) {
  const newsPageContent = await getNewsPageData(params.slug);
  console.log(newsPageContent);

  return (
    <>
      <NewsDetailPageHeader data={newsPageContent.newsItems[0]} />
      <NewsDetailPageBody data={newsPageContent.newsItems[0]} />
    </>
  );
}
