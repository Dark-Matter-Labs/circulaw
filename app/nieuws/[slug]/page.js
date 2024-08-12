import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client } from '@/lib/sanity';
import NewsDetailPageBody from '@/components/news-page/news-detail-page-body';

// re do this when re-structing news page
const NEWS_METADATA_QUERY = `
*[_type == "newsPage"][0] {
    "newsItems" :newsItems[slug.current == $slug]{
      newsTitle, 
      'slug': slug.current
    }
}
`;
export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const newsPageMetaData = await client.fetch(
    NEWS_METADATA_QUERY,
    { slug },
    {
      next: { tags: ['newsPage'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  return {
    title:
      newsPageMetaData.newsItems[0].metaTitle ||
      newsPageMetaData.newsItems[0].newsTitle + ' - CircuLaw',
    description: newsPageMetaData.newsItems[0].metaDescribe || generic.description,
    alternates: {
      canonical: `/nieuws/${newsPageMetaData.newsItems[0].slug}`,
    },
    openGraph: {
      images: previousImages,
      title: newsPageMetaData.newsItems[0].metaTitle || newsPageMetaData.newsItems[0].newsTitle,
      description: newsPageMetaData.newsItems[0].metaDescribe || generic.description,
      type: 'website',
    },
  };
}

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
  const newsPages = await client.fetch(NEWS_SLUGS_QUERY, { next: { tags: ['newsPage'] } });
  return newsPages.newsItems.map((newsPage) => ({ slug: newsPage.slug }));
}

export const dynamicParams = false;

async function getNewsPageData(params) {
  const slug = params;
  const newsPageData = await client.fetch(
    NEWS_DETAIL_PAGE_QUERY,
    { slug },
    { next: { tags: ['newsPage'] } },
  );
  if (!newsPageData) {
    throw new Error('could not get news detail data');
  }
  return newsPageData;
}

export default async function NewsDetailPage({ params }) {
  const newsPageContent = await getNewsPageData(params.slug);

  return (
    <>
      <NewsDetailPageHeader data={newsPageContent.newsItems[0]} />
      <NewsDetailPageBody data={newsPageContent.newsItems[0]} />
    </>
  );
}
