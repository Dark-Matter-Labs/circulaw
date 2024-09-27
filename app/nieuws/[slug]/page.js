import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client, sanityFetch } from '@/lib/sanity';
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

  if (newsPageMetaData) {
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
}

export async function generateStaticParams() {
  const newsPages = await client.fetch(NEWS_SLUGS_QUERY, { next: { tags: ['newsItem'] } });
  return newsPages.map((newsPage) => ({ slug: newsPage }));
}

export const dynamicParams = false;

export default async function NewsDetailPage({ params }) {
  const newsPageContent = await sanityFetch({
    query: NEWS_DETAIL_PAGE_QUERY,
    qParams: params,
    tags: ['newsItem'],
  });
  return (
    <>
      <NewsDetailPageHeader data={newsPageContent} />
      <NewsDetailPageBody data={newsPageContent} />
    </>
  );
}
