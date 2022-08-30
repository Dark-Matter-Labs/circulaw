import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WetAnalyse() {
  return (
    <Layout>
      <div className='breadcrumb ml-5 sm:ml-20 pt-8 text-greenLink'>
        <Link href='/'>
          <a>Home &gt; </a>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        <div className='mx-7 sm:mx-20 my-20 col-span-2 text-black1'>
          <h1 className='pb-5 mobile sm:main'>Wetsanalyse vanuit circulaire blik</h1>
          <h2 className='mobile sm:main'>Hoe CircuLaw juristen de wet analyseren</h2>
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            Vernieuwend aan CircuLaw is dat wetsanalyses worden uitgevoerd vanuit transitiedoelen.
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            Per productgroep en ketenfase worden operationele doelen geformuleerd. Vervolgens wordt
            met een speciaal ontwikkelde methode het juridische werkgebied afgebakend: van de
            duizenden bestaande wetten, besluiten en regelingen wordt een selectie gemaakt van
            wetten die mogelijk relevant zijn.
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            Deze wetten worden op artikelniveau geanalyseerd vanuit de vraag: kan dit artikel
            bijdragen aan het gestelde operationele doel; kan hier circulariteit in worden gelezen?
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            Om de juridische analist hier zo creatief en vanuit zo veel mogelijk verschillende
            perspectieven naar te laten kijken, is een analysesleutel ontwikkeld. Voor de
            maatregelen die uit deze analyse rollen is een rankingsysteem ontwikkeld, waarbij
            maatregelen een score krijgen op juridische houdbaarheid en invloed.
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
            Ook laten we zien wat het verband is tussen de gevonden maatregelen. Hiermee geven we
            beleidsmakers een indicatie mee van de toepasbaarheid van een maatregel, en helpen we
            hen een goede selectie te maken.
          </p>

          <h2 className='mobile sm:main'>Wetsanalyse laten uitvoeren door CircuLaw?</h2>
          <p className='body-text-mobile sm:body-text max-w-4xl pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non faucibus dolor.
            Phasellus facilisis quis nibh id vehicula. Vestibulum ut dolor metus. Nulla lobortis
            tortor eu urna elementum, vel cursus nibh ullamcorper. Pellentesque quam odio, tempor
            eget aliquam sit amet, scelerisque eget eros. Praesent suscipit nisl in nibh gravida,
            nec condimentum arcu congue.
          </p>

          <div className='flex bg-green2 bg-opacity-20 p-10 justify-between flex-wrap'>
            <div>
              <p className='body-text-mobile sm:body-text'>
                Meer weten? Of wil je een wetsanalyse laten uitvoeren op een circulair thema?
              </p>
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
        <div className='mx-7 sm:mx-20 my-20 max-w-sm'>
          <OverNav pagename='wet' />
        </div>
      </div>
    </Layout>
  );
}
