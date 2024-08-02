import { client } from '@/lib/sanity';
import { ABOUT_PAGE_PATHS_QUERY, ABOUT_PAGE_QUERY } from '@/lib/queries';
import AboutPageComponent from '@/components/about-page';

const ABOUT_PAGE_METADATA_QUERY = `
*[_type == 'aboutPage' && slug.current == $slug][0] {
  pageTitle,
  metaTitle,
  metaDescribe,
  'slug': slug.current
}
`

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const aboutPageMetaData = await client.fetch(
    ABOUT_PAGE_METADATA_QUERY,
    { slug },
    {
      next: { tags: ['aboutPage'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  return {
    title: aboutPageMetaData.metaTitle || aboutPageMetaData.pageTitle + ' - CircuLaw',
    description: aboutPageMetaData.metaDescribe || generic.description,
    alternates: {
      canonical: `/over/${aboutPageMetaData.slug}`,
    },
    openGraph: {
      images: previousImages,
      title: aboutPageMetaData.metaTitle || aboutPageMetaData.pageTitle,
      description: aboutPageMetaData.metaDescribe || generic.description,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(ABOUT_PAGE_PATHS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function getPageData(params) {
  const slug = params;
  const aboutPageContent = await client.fetch(
    ABOUT_PAGE_QUERY,
    { slug },
    { next: { tags: ['aboutPage'] } },
  );
  if (!aboutPageContent) {
    throw new Error('could not fetch content');
  }

  return aboutPageContent;
}

export default async function Page({ params }) {
  const data = await getPageData(params.slug);
  return <AboutPageComponent data={data} />;
}
