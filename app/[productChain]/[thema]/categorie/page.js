import { THEME_PATHS_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';
import TabGroupComponent from '@/components/expertise-page/expertise-layout';
import OverviewPageHeader from '@/components/theme-page/overview-page-header';


export async function generateMetadata({ params }, parent) {
  // read route params
  const thema = params.thema;
  // fetch data
  const themaMetaData = await client.fetch(
    THEME_METADATA_QUERY,
    { thema },
    {
      next: { tags: ['thema', 'simpleThema'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (themaMetaData) {
    return {
      title: themaMetaData.themaName + ' - instrumenten per categorie - CircuLaw',
      description: themaMetaData.metaDescribe || generic.description,
      alternates: {
        canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}/categorie`,
      },
      openGraph: {
        images: previousImages,
        title: themaMetaData.themaName + ' - instrumenten per categorie - CircuLaw',
        description: generic.description,
        type: 'website',
      },
    };
  }
}

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY, {
    next: { tags: ['thema', 'simpleThema'] },
  });
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

export default async function CategoriePage({ params }) {
  // TODO: update this to only fetch the themaName using the params
  const THEME_NAME_QUERY = `
    *[_type == 'thema' && slug.current == $thema][0] {
      themaName
    }
  `;

  const themaName = await sanityFetch({
    query: THEME_NAME_QUERY,
    qParams: params,
    tags: ['instrument', 'thema', 'simpleThema'],
  });

  return (
    <>
      <div className='sm:bg-gradient-to-t sm:from-[#F8FAF8] sm:to-[#F8FAF8]'>
        <div className='-mt-10'>
          <div className='h-[310px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
            <OverviewPageHeader
              thema={params?.thema}
              productChain={params?.productChain}
              title={`${themaName.themaName} instrumenten per categorie`}
              page='samenhang'
            />
          </div>
        </div>
      </div>
      <div className='min-h-screen'>
          <TabGroupComponent thema={params.thema} />        
      </div>
    </>
  );
}
