import { PortableText } from 'next-sanity';

import EULawCard from '@/components/eu-law/eu-law-card';
import DomainTabs from '@/components/eu-law/overview/domain-tabs';
import MoreInfo from '@/components/eu-law/overview/more-info';
import PdfIntro from '@/components/eu-law/overview/pdf-intro';
import Header from '@/components/headers';
import FeaturedNewsSection from '@/components/news-page/featured-section';
import { aboutPageReducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { EU_LAW_OVERVIEW_QUERY, EU_OVERVIEW_PAGE_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';

export const metadata = {
  title: 'EU wetgeving - CircuLaw',
  description:
    'Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt onder de Green Deal, met als tussendoel Fit for 55.',
  alternates: {
    canonical: '/eu-wetgeving',
  },
  openGraph: {
    images: globalMeta.siteLogo,
    title: 'EU wetgeving - CircuLaw',
    description:
      'Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt onder de Green Deal, met als tussendoel Fit for 55.',
    type: 'website',
  },
};

export default async function Page() {
  const [data, page] = await Promise.all([
    sanityFetch({ query: EU_LAW_OVERVIEW_QUERY, tags: ['euLaw'] }),
    sanityFetch({ query: EU_OVERVIEW_PAGE_QUERY, tags: ['euOverviewPage', 'newsItem'] }),
  ]);
  const domains = page?.domains?.filter((domain) => domain.title) ?? [];
  const articles = page?.articles?.filter(Boolean) ?? [];

  return (
    <>
      <Header
        title='EU wet- en regelgeving voor een circulaire economie'
        imageURL='/big-decoration.png'
        bgColor='bg-green-500'
        subtitle='Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de
              verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt
              onder de Green Deal, met als tussendoel Fit for 55.'
        pageType='euOverview'
        length={data.length}
      />
      <div className='global-margin'>
        <PdfIntro data={page} />
        {page?.moreInfo?.length > 0 && <MoreInfo sections={page.moreInfo} />}
        {domains.length > 0 && (
          <section className='mt-16 sm:mt-24' aria-labelledby='domains-title'>
            <div className='p-base mb-8 max-w-2xl'>
              <h2 id='domains-title' className='heading-2xl-semibold mb-4'>
                {page.domainsTitle ?? 'Methode'}
              </h2>
              {page.domainsIntro && (
                <PortableText
                  value={page.domainsIntro}
                  components={aboutPageReducedPortableTextComponents}
                />
              )}
            </div>
            <DomainTabs domains={domains} />
          </section>
        )}
        {articles.length > 0 && (
          <section className='mt-16 sm:mt-24' aria-labelledby='articles-title'>
            <h2 id='articles-title' className='heading-2xl-semibold mb-8'>
              {page.articlesTitle ?? 'Analyses en artikelen'}
            </h2>
            <FeaturedNewsSection items={articles} />
          </section>
        )}
        <div className='p-base mb-4 flex max-w-2xl flex-col'>
          <h2 className='heading-2xl-semibold mb-8 mt-10'>
            Relevante EU-wetgeving voor lokale overheden
          </h2>
          <p className='mb-2'>
            Lokale overheden zijn vaak niet op de hoogte van de verplichtingen en kansen die
            voortvloeien uit Europese wet- en regelgeving. CircuLaw brengt daar verandering in. Wij
            brengen de toepasbaarheid voor de circulaire economie in kaart van richtlijnen en
            verordeningen. Op dit moment hebben we {data?.length} analyses gereed; je vindt ze
            hieronder.
          </p>
          <p>
            We blijven nieuwe analyses toevoegen, en de status van de verschillende wet- en
            regelgeving updaten. Neem dus regelmatig even een kijkje. Heb je feedback voor ons, of
            informatie over circulaire wetgeving? Laat het ons weten!
          </p>
        </div>
      </div>
      <div
        className='global-margin relative my-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lgNav:grid-cols-3'
        id='laws'
      >
        {data?.map((law, id) => (
          <div key={id} className=''>
            <EULawCard law={law} />
          </div>
        ))}
      </div>
    </>
  );
}
