import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../../components/layout';
import SectionTypes from '/components/section-types-list';

import WoodIcon from '../../public/icons/wood.svg';
import HoutbouwHero from '../../public/houtbouwHero.jpeg';
import HoutbouwSection1 from '../../public/Measures_Teaser.png';
import HoutbouwSection2 from '../../public/Timber_Process_Teaser.png';
import HoutbouwSection3 from '../../public/Timber_Measures_Teaser.png';

export default function Houtbouw() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <div className='gradient-bg'>
        <div className='max-w-7xl mx-7 sm:mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className='max-w-2xl'>
              <div className='breadcrumb pt-8 text-greenLink'>
                <Link href='/'>
                  <a>Home &gt; </a>
                </Link>
              </div>
              <div className='pb-14 pt-14 '>
                <div className='pr-4 inline-block'>
                  <Image src={WoodIcon} alt='Icon of Wood' width={48} />
                </div>
                <h1 className='text-green1 inline-block mobile sm:main'>Houtbouw stimuleren </h1>
                <p className='pt-4 body-text-mobile sm:body-text'>
                  De manier waarop wij nu in Nederland bouwen is zeer belastend voor het milieu. Er
                  is een eenvoudige oplossing: vervang beton deels door hout.
                </p>
                <p className='body-text-mobile sm:body-text'>
                  Bosbouw is steeds duurzamer geworden en er zijn veel nieuwe houtproducten
                  ontwikkeld die grote mogelijkheden bieden.
                  <br />
                </p>
                <p className='body-text-mobile sm:body-text'>
                  Daardoor kan houtbouw een goede bijdrage leveren om binnen planetaire grenzen te
                  opereren.
                </p>
              </div>

              <span className='text-greenLink link-mobile sm:link pt-10'>
                <a
                  href='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Meer over nut van houtbouw →
                </a>
              </span>
            </div>
            <div className='sm:justify-self-center lg:justify-self-end'>
              <div className='hidden lg:block'>
                <Image src={HoutbouwHero} alt='Icon of Wood' height='649px' width='597px' />
              </div>
              <div className='block lg:hidden'>
                <Image src={HoutbouwHero} alt='Icon of Wood' height='649px' width='597px' />
              </div>
            </div>
          </div>

          <div className=' my-20'>
            <h2 className='pb-8 mobile sm:main'>
              Meer weten over hoe je maatregelen kunt toepassen? Hier vind je 3 voorbeelden uit de
              praktijk:
            </h2>
            <SectionTypes type='houtbouw' />
          </div>
        </div>
        <div className='bg-green3 bg-opacity-10'>
          <div className='pt-5 max-w-7xl mx-7 sm:mx-auto '>
            <div className='border-b border-grey1 pb-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <h2 className='pt-10 mobile sm:main'>35 Houtbouwmaatregelen</h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={HoutbouwSection1}
                      alt='Houtbuow section image'
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    Weten waar kansen liggen om de houtbouwtransitie te versnellen? CircuLaw biedt
                    je nu een overzicht van 35 maatregelen die je daarvoor kunt inzetten.
                  </p>
                  <Link href='/measures/houtbouw'>
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
                  <h2 className='pt-10 mobile sm:main'>Bekijk houtbouwmaatregelen in samenhang</h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={HoutbouwSection2}
                      alt='Houtbuow section image'
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    CircuLaw heeft 35 maatregelen gedefinieerd die je kunt inzetten om houtbouw te
                    stimuleren. Als je meerdere maatregelen toepast, is je impact natuurlijk groter.
                    Maar dan is het wel handig om te weten hoe maatregelen met elkaar samenhangen.
                    Daarom bieden we je hier bij wijze van voorbeeld inzicht in de relatie tussen
                    een aantal maatregelen.
                  </p>
                  <Link href='/houtbouw/samenhang-aantal-houtbouwmaatregelen'>
                    <a>
                      <span className='text-greenLink link-mobile sm:link'>
                        Samenhang aantal houtbouwmaatregelen →
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <Image src={HoutbouwSection2} alt='Houtbuow section image' layout='responsive' />
                </div>
              </div>
            </div>
            <div className='border-b border-grey1 pb-40 pt-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <h2 className='pt-10 mobile sm:main'>
                    Bevoegdheden overheid voor houtbouwmaatregelen
                  </h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={HoutbouwSection3}
                      alt='Houtbuow section image'
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    Om een circulaire strategie volledig te implementeren, is samenwerking tussen
                    overheden en stakeholders nodig. Om te weten wie waarvoor aan de lat staat, is
                    inzicht nodig in bevoegdheden en verantwoordelijkheden. In dit overzicht wordt
                    per maatregel duidelijk welke laag van de overheid betrokken is.
                  </p>
                  <Link href='/houtbouw/welke-overheid'>
                    <a>
                      <span className='text-greenLink link-mobile sm:link'>
                        Bekijk overzicht bevoegdheden maatregelen →
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <Image src={HoutbouwSection3} alt='Houtbuow section image' layout='responsive' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
