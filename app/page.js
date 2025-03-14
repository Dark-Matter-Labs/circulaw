import HomePageEUSection from '@/components/homepage/home-page-eu-section';
import PCHomePage from '@/components/homepage/product-chain-homepage';
import InlineLink from '@/components/inline-link';
import NewsCard from '@/components/news-page/news-card';
import TitleDecorator from '@/components/title-decorator';
import { HOME_PAGE_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';


export default async function Page() {
  const data = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ['siteConfig', 'transitionAgenda', 'thema', 'newsItem'],
  });
  return (
    <>
      <div className='global-margin'>
        <div className='mb-20 flex flex-row xl:gap-x-32' name='thema'>
          {/* TODO: Make title component that can be used widely */}
          <div className='flex basis-1/2 flex-col'>
            <h2 className='heading-5xl-semibold text-green-500'>Ontdek direct onze instrumenten</h2>
            <TitleDecorator width='w-1/4' />
          </div>
          <div className='basis-1/2'>
            <p className='heading-2xl whitespace-normal'>
              De overheid heeft 5 productketens gekozen voor het
              <InlineLink
                href='https://www.rijksoverheid.nl/documenten/beleidsnotas/2023/02/03/nationaal-programma-circulaire-economie-2023-2030'
                isExternal={true}
              >
                Nationaal Programma Circulaire Economie 2023-2030
              </InlineLink>
              Deze ketens zijn belangrijk voor de economie, maar belasten ook het milieu. In
              transitieagenda&apos;s staat hoe deze ketens in 2050 circulair kunnen zijn.
            </p>
          </div>
        </div>
        <div className='mb-52'>
          <PCHomePage pcData={data.pcHomePage} />
        </div>
        <div className='mb-52'>
          <HomePageEUSection euData={data.euData} />
        </div>
        <div className='mb-40'>
          <div className='mb-20 w-1/2'>
            <h3 className='heading-5xl-semibold text-green-500'>Uitgelichte nieuwsberichten</h3>
            <TitleDecorator width='w-1/4' />
          </div>
          <ul className='grid grid-cols-3 gap-x-3 overflow-hidden'>
            {data.newsItems.map((item, id) => (
              <li key={id}>{item.newsOrAgenda === false && <NewsCard data={item} />}</li>
            ))}
          </ul>
        </div>
        {/*
        <div>
          <HomePageAboutSection aboutSection={data.aboutSection} />
        </div> */}
      </div>
    </>
  );
}
