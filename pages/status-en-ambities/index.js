import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function StatusEn() {
  return (
    <Layout>
      <div className='global-margin'>
        <div className='breadcrumb pt-8 text-greenLink'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='my-20 col-span-2 text-black1'>
            <h1 className='pb-5 mobile sm:main'>Wat vind je nu op de site van CircuLaw?</h1>
            <h2 className='mobile sm:main pb-2'>CircuLaw wordt stap voor stap ontwikkeld.</h2>
            <div className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Op dit moment biedt CircuLaw het volgende:
              <ul className='list-disc pl-6'>
                <li>
                  Een overzicht van wet- en regelgeving voor beleidsmakers die aan de slag willen
                  met maatregelen voor de thema’s houtbouw en circulaire windmolens
                </li>
                <li>
                  Per maatregel een indicatie van de juridische invloed en juridische houdbaarheid,
                  en een aanduiding van het effect op de R-ladder
                </li>
                <li>
                  De mogelijkheid om filters toe te passen op de maatregeloverzichten, bijvoorbeeld
                  op bevoegdheidsniveau of rechtsgebied
                </li>
                <li>
                  Drie ‘pasklare’ maatregelen om houtbouw te stimuleren, met een leidraad die je
                  direct op weg helpt
                </li>
                <li>
                  Overzichten die samenhang aangeven tussen de verschillende typen maatregelen
                  binnen de houtbouwketen en de windturbineketen
                </li>
                <li>
                  Overzichten die inzichtelijk maken hoe maatregelen verdeeld zijn over de
                  verschillende bevoegdheidsniveaus (rijk, provincies, gemeenten)
                </li>
              </ul>
            </div>
            <p className='body-text-mobile sm:body-text max-w-4xl '>
              {' '}
              Met deze versie van CircuLaw kunnen gebruikers al aan de slag. Mede op basis van hun
              bevindingen en hun wensen breiden wij CircuLaw geleidelijk uit. Een volgende versie
              bevat in ieder geval informatie over nieuwe thema’s of productgroepen, en een verdere
              doorontwikkeling van de huidige functionaliteiten en overzichten. De ambities van
              CircuLaw reiken ver.
            </p>
          </div>
          <div className='mx-20 my-20 max-w-sm'>
            <OverNav pagename='status' />
          </div>
        </div>
      </div>
    </Layout>
  );
}
