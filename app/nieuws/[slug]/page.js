import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client } from '@/lib/sanity';
import NewsDetailPageBody from '@/components/news-page/news-detail-page-body';
import { NEWS_SLUGS_QUERY, NEWS_DETAIL_PAGE_QUERY, NEWS_METADATA_QUERY } from '@/lib/queries';

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  // fetch data
  const newsPageMetaData = await client.fetch(
    NEWS_METADATA_QUERY,
    { slug },
    {
      next: { tags: ['newsItem'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;
  return {
    title: newsPageMetaData.metaTitle || newsPageMetaData.title + ' - CircuLaw',
    description: newsPageMetaData.metaDescribe || generic.description,
    alternates: {
      canonical: `/nieuws/${newsPageMetaData.slug}`,
    },
    openGraph: {
      images: previousImages,
      title: newsPageMetaData.metaTitle || newsPageMetaData.title,
      description: newsPageMetaData.metaDescribe || generic.description,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const newsPages = await client.fetch(NEWS_SLUGS_QUERY, { next: { tags: ['newsItem'] } });
  return newsPages.map((newsPage) => ({ slug: newsPage }));
}

export const dynamicParams = false;

async function getNewsPageData(params) {
  const slug = params;
  const newsPageData = await client.fetch(
    NEWS_DETAIL_PAGE_QUERY,
    { slug },
    { next: { tags: ['newsItem'] } },
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
      <NewsDetailPageHeader data={newsPageContent} />
      <NewsDetailPageBody data={newsPageContent} />
    </>
  );
}
