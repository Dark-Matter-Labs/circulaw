import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WetAnalyse() {
  return (
    <Layout>
      <div className='mx-7 max-w-7xl lg:mx-auto'>
        <div className='breadcrumb pt-8 text-greenLink'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='my-20 col-span-2 text-black1'>
            <h1 className='pb-5 mobile sm:main'>Wetsanalyse vanuit circulaire blik</h1>
            <p className='body-text-mobile sm:body-text max-w-4xl'>
              Vernieuwend aan CircuLaw is dat wetsanalyses worden uitgevoerd vanuit transitiedoelen.
              Om de meest geschikte maatregelen met betrekking tot een casus of productgroep te
              identificeren, doet het juridische team uitgebreid onderzoek naar zowel de direct als
              de indirect relevante beleidsdoelen. We onderzoeken eerst de vijf circulaire fasen van
              een productgroep: ontwerp, productie, aankoop, gebruik en einde van de levensduur.
              Voor deze fasen stellen we samen met experts operationele doelen vast. Vervolgens
              bakenen we met een speciaal ontwikkelde methode het juridische werkgebied af: van de
              duizenden wetten, besluiten en regelingen wordt een selectie gemaakt van wetten die
              relevant zijn. Binnen deze geselecteerde wetten wordt per artikel gekeken of er ruimte
              of mogelijkheden in zit waarmee circulariteit kan worden bevorderd.
            </p>
            <br />
            <div className='body-text-mobile sm:body-text max-w-4xl'>
              Om te zorgen dat de juridische analist hier zo creatief en vanuit zoveel mogelijk
              verschillende perspectieven naar kijkt, is een analysesleutel ontwikkeld. De wet- en
              regelgeving wordt op artikelniveau geanalyseerd vanuit de volgende vragen:
              <ul className='list-disc pl-6'>
                <li>kan dit artikel bijdragen aan de gestelde operationele doelen?</li>
                <li>kan hier circulariteit in worden gelezen? </li>
                <li>is deze wettelijke bepaling circulair toepasbaar?</li>
              </ul>
            </div>
            <br />
            <p className='body-text-mobile sm:body-text max-w-4xl'>
              De geïdentificeerde maatregelen waarderen we op basis van afbreukrisico en invloed.
              Hiermee geven we beleidsmedewerkers een indicatie mee van de toepasbaarheid van een
              maatregel, en helpen we hen een goede selectie te maken.
            </p>
          </div>
          <div className='mx-20 my-20 max-w-sm'>
            <OverNav pagename='wet' />
          </div>
        </div>
      </div>
    </Layout>
  );
}
