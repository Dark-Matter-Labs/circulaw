import { client } from '@/lib/sanity';
import { ABOUT_PAGE_PATHS_QUERY, ABOUT_PAGE_QUERY } from '@/lib/queries';

export async function generateStaticParams() {
  const slugs = await client.fetch(ABOUT_PAGE_PATHS_QUERY);

  return slugs.map((slug) => ({ slug }));
}

async function getPageData(params) {
  const slug = params;
  const aboutPageContent = await client.fetch(ABOUT_PAGE_QUERY, { slug });

  if (!aboutPageContent) {
    throw new Error('could not fetch content');
  }

  return aboutPageContent;
}

export default async function Page({ params }) {
  const data = await getPageData(params.slug);
    console.log(data)
  return <></>;
}
