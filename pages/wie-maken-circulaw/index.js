import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WieMaken() {
  return (
    <Layout>
      <div className='breadcrumb ml-5 sm:ml-20 pt-8 text-greenLink'>
        <Link href='/'>
          <a>Home &gt; </a>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        <div className='mx-5 sm:mx-20 my-20 col-span-2'>
          <h1 className='pb-5 mobile sm:main'>Wie maken CircuLaw?</h1>
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            Eind 2020 startte gemeente Amsterdam in samenwerking met Dark Matter Labsen
            verschillende universiteiten en mede-overheden het project ‘Activerende regelgeving voor
            een circulaire samenleving’. De ontwikkeling van de tool ‘CircuLaw’ is een van de
            speerpunten van dit project. Het doel van CircuLaw: het versnellen van de transitie naar
            een circulaire economie door beter gebruik te maken van het instrument wet- en
            regelgeving. In de ontwikkeling van CircuLaw werkt een breed consortium aan publieke en
            academische kennispartners van verschillende disciplines samen. Zo brengen we de laatste
            staat van kennis bij elkaar en kunnen we samen innoveren, experimenteren en grenzen
            verleggen. Zodat we een service maken die optimaal aansluit bij het werkproces van de
            circulaire beleidsmaker.
          </p>
          <br />

          <h2 className='mobile sm:main'>Gemeente Amsterdam, Stedelijke Innovatie</h2>
          <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
            Gemeente Amsterdam is al jaren koploper in de circulaire economie. Het doel van de stad
            is om in 2050 volledig circulair te zijn, en het grondstoffengebruik in 2030 gehalveerd
            te hebben. Het stedelijk innovatieteam van Amsterdam heeft CircuLaw in 2020 geïnitieerd.
            Dit team werkt samen met partners in en buiten de stad aan innovaties die de transitie
            naar een circulaire, veilige en bereikbare stad versnellen. Binnen dit publieke
            innovatieteam is expertise aanwezig op het gebied van sociale en technologische
            innovatie, transitiemanagement, digitalisering en moderne overheid. Vanuit de gemeente
            dragen daarnaast ervaren circulaire experts en juristen van beleidsafdelingen bij aan de
            ontwikkeling van de tool.
          </p>

          <div className='flex bg-green2 bg-opacity-20 p-10 justify-between flex-wrap'>
            <div>
              <p className='body-text-mobile sm:body-text'>Bijdragen aan CircuLaw?</p>
            </div>
            <div>
              <button
                type='button'
                className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-white bg-green1 hover:bg-greenLink focus:outline-none '
              >
                <Link href='/contact'>
                  <a>Neem contact op →</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='mx-5 sm:mx-20 my-20 max-w-sm'>
          <OverNav pagename='wie' />
        </div>
      </div>
    </Layout>
  );
}
