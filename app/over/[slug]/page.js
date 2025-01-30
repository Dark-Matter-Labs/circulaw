import AboutPageComponent from '@/components/about-page';
import { ABOUT_PAGE_PATHS_QUERY, ABOUT_PAGE_QUERY } from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';

const ABOUT_PAGE_METADATA_QUERY = `
*[_type == 'aboutPage' && slug.current == $slug][0] {
  pageTitle,
  metaTitle,
  metaDescribe,
  'slug': slug.current
}
`;

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

  if (aboutPageMetaData) {
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
}

export async function generateStaticParams() {
  const slugs = await client.fetch(ABOUT_PAGE_PATHS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const data = await sanityFetch({ query: ABOUT_PAGE_QUERY, qParams: params, tags: ['aboutPage'] });
  return <AboutPageComponent data={data} />;
}
