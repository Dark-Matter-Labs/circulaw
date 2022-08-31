import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../../components/layout';

import WindmillIcon from '../../public/windmill.svg';
import WindturbineHero from '../../public/windturbineHero.jpg';
import HoutbouwSection1 from '../../public/houtbouwsection1.png';
import HoutbouwSection2 from '../../public/houtbouwsection2.png';
import HoutbouwSection3 from '../../public/houtbouwsection3.png';

export default function Windturbine() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-2 gradient-bg'>
        <div className='mx-7 sm:mx-20 '>
          <div className='breadcrumb pt-8 text-greenLink'>
            <Link href='/'>
              <a>Home &gt; </a>
            </Link>
          </div>
          <div className='pb-14 pt-14 '>
            <div className='pr-4 inline-block'>
              <Image src={WindmillIcon} alt='Icon of Wood' width={48} />
            </div>
            <h1 className='text-green1 inline-block mobile sm:main'>Circulaire windturbines </h1>
            <p className='body-text-mobile sm:body-text pt-4'>
              Windenergie speelt een cruciale rol in onze duurzame energie-ambities. Daarom vind je
              hier maatregelen die de inzet van windturbines bevorderen en die sturen op
              ontwikkeling en inzet van windturbines die op zich zelf ook circulair zijn.
            </p>
          </div>
        </div>
        <div className='sm:justify-self-center lg:justify-self-end'>
          <Image src={WindturbineHero} alt='Icon of Wood' height={649} width={800} />
        </div>
      </div>

      <div className='pt-5 px-5 sm:px-20 bg-green3 bg-opacity-10'>
        <div className='border-b border-grey1 pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <h2 className='pt-10 mobile sm:main'>10 Circulaire windturbine maatregelen</h2>
              <div className='block py-4 sm:hidden'>
                <Image src={HoutbouwSection1} alt='Houtbuow section image' layout='responsive' />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                Weten waar kansen liggen om de transitie naar circulaire windturbines te versnellen?
                CircuLaw biedt je een overzicht van 10 maatregelen die je daarvoor kunt inzetten.
              </p>
              <Link href='/measures/windturbines'>
                <a>
                  <span className='text-greenLink link-mobile sm:link'>
                    Bekijk alle houtbouwmaatregelen →
                  </span>
                </a>
              </Link>
            </div>
            <div className='hidden sm:block'>
              <Image src={HoutbouwSection1} alt='Houtbuow section image' layout='responsive' />
            </div>
          </div>
        </div>
        <div className='border-b border-grey1 pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <h2 className='pt-10 mobile sm:main'>
                Bekijk circulaire windturbine maatregelen niet op zich, maar in samenhang
              </h2>
              <div className='block py-4 sm:hidden'>
                <Image src={HoutbouwSection2} alt='Houtbuow section image' layout='responsive' />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                CircuLaw heeft 10 maatregelen gedefinieerd die je kunt inzetten om circulaire
                windturbines te stimuleren. Als je meerdere maatregelen toepast, is je impact
                natuurlijk groter. Maar dan is het wel handig om te weten hoe die maatregelen met
                elkaar samenhangen. Daarom bieden we je ook inzicht in de relatie tussen de
                verschillende maatregelen.
              </p>
              <span className='text-greenLink link-mobile sm:link'>
                Samenhang circulaire windturbine maatregelen →
              </span>
            </div>
            <div className='hidden sm:block'>
              <Image src={HoutbouwSection2} alt='Houtbuow section image' layout='responsive' />
            </div>
          </div>
        </div>
        <div className='border-b border-grey1 pb-40 pt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <div className='block py-4 sm:hidden'>
                <Image src={HoutbouwSection3} alt='Houtbuow section image' layout='responsive' />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                Om een circulaire strategie volledig te implementeren, is samenwerking tussen
                overheden en stakeholders nodig. Om te weten wie waarvoor aan de lat staat, is
                inzicht nodig in bevoegdheden en verantwoordelijkheden. In dit overzicht wordt per
                maatregel duidelijk welke laag van de overheid betrokken is.
              </p>
              <span className='text-greenLink link-mobile sm:link'>
                Bekijk het bevoegdheden-overzicht →
              </span>
            </div>
            <div className='hidden sm:block'>
              <Image src={HoutbouwSection3} alt='Houtbuow section image' layout='responsive' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
