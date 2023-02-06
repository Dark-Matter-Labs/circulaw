import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Layout from '../../components/layouts/layout';
import beleIcon from '../../public/icons/Beleidsvorming.svg';
import planIcon from '../../public/icons/plan.svg';
import subIcon from '../../public/icons/sub.svg';
import grandIcon from '../../public/icons/grand.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';
import WindmillIcon from '../../public/windmill.svg';

export default function InfoPage() {
  return (
    <Layout>
      <SamenhangLayout
        casus='houtbouw'
        title='Samenhang instrumenten houtbouw'
        icon={WindmillIcon}
        p1='Beleid rondom circulaire windturbines kun je opnemen in een omgevingsvisie, zodat je een subsidie daarvoor kunt vaststellen. Ook kun je als overheden proberen meer grond te kopen om die vervolgens uit te geven met circulaire eisen. Verder kun je als overheid met het omgevingsplan of een projectbesluit vergunningen verlenen voor circulaire windturbines. Afspraken over de kosten van circulaire windturbines op grond van het omgevingsplan kun je vastleggen in een anterieure overeenkomst.'
      />
      <div className='bg-green-800'>
        <div className='grid grid-cols-1 lg:grid-cols-3 bg-green-800 py-20 gap-0 global-margin'>
          <div>
            <div className='samenhangLine ml-80 pt-20 mt-20'></div>
            <div className='rounded-[40px] bg-white px-4 mr-8 pt-1 pb-16'>
              <div className='rounded-full bg-green-300 text-center mb-1 relative'>
                <Image
                  className='absolute samenhangIcon'
                  src={planIcon}
                  alt='Gemeente Amsterdam logo'
                />

                <h2 className='desktop text-black py-4 '>Planvorming</h2>
              </div>
              <p className='p-base text-black-white-800 py-4'>
                Dit zijn regels waar je je aan moet houden
              </p>
              <Link href='/measures/projectbesluit'>
                <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Projectbesluit</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/projectbesluit'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Projectbesluit</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/circulaire-windturbines-via-de-omgevingsverordening'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Omgevingsverordening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/circulaire-windturbines-via-het-omgevingsplan'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Omgevingsplan</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className='rounded-[40px] bg-white pb-8 px-4 h-3/5 '>
            <div className='rounded-full bg-green-300 text-center mb-1 relative'>
              <Image
                className='absolute samenhangIcon'
                src={beleIcon}
                alt='Gemeente Amsterdam logo'
              />

              <h2 className='desktop text-black py-4 '>Beleidsvorming</h2>
            </div>
            <p className='p-base text-black-white-800 py-4'>
              Het opnemen van circulaire windturbines in de omgevingsvisie maakt het mogelijk later
              in de beleidscyclus windturbines te verankeren
            </p>

            <Link href='/measures/circulaire-windturbines-in-de-omgevingsvisie'>
              <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                  <h5 className='mobile sm:desktop'>Nat</h5>
                </div>
                <div className='flex items-center ml-4'>
                  <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                  <h4 className='mobile sm:desktop'>Omgevingsvisie</h4>
                </div>
              </div>
            </Link>

            <Link href='/measures/circulaire-windturbines-in-de-omgevingsvisie'>
              <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                  <h5 className='mobile sm:desktop'>Pr</h5>
                </div>
                <div className='flex items-center ml-4'>
                  <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                  <h4 className='mobile sm:desktop'>Omgevingsvisie</h4>
                </div>
              </div>
            </Link>

            <Link href='/measures/circulaire-windturbines-in-de-omgevingsvisie'>
              <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                  <h5 className='mobile sm:desktop'>Gem</h5>
                </div>
                <div className='flex items-center ml-4'>
                  <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                  <h4 className='mobile sm:desktop'>Omgevingsvisie</h4>
                </div>
              </div>
            </Link>
            <div className='samenhangLine3 pb-52 mx-auto max-w-0'></div>
          </div>

          <div>
            <div className='samenhangLine2 mr-80 pt-20 mt-20'></div>
            <div className='rounded-[40px] bg-white pb-4 px-4 ml-8 pt-1'>
              <div className='rounded-full bg-green-300 text-center mb-1 relative'>
                <Image
                  className='absolute samenhangIcon'
                  src={subIcon}
                  alt='Gemeente Amsterdam logo'
                />
                <h2 className='desktop text-black py-4'>Subsidie</h2>
              </div>
              <p className='p-base text-black-white-800 py-4'>
                Het gebruik van subsidies kan een gelijk speelveld creëren voor de business case van
                circulaire windturbines
              </p>

              <Link href='/measures/subsidie-voor-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Subsidie</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/subsidie-voor-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Subsidie</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/subsidie-voor-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Subsidie</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className='samenhangLine3 py-10 mx-auto max-w-0'></div>
            <div className='rounded-[40px] bg-white pb-4 px-4 mr-8 pt-1'>
              <div className='rounded-full bg-green-300 text-center mb-1 relative'>
                <Image
                  className='absolute samenhangIcon'
                  src={subIcon}
                  alt='Gemeente Amsterdam logo'
                />
                <h2 className='desktop text-black pl-4 py-4'>Financiering</h2>
              </div>
              <p className='p-base text-black-white-800 py-4'>
                Beleidsmakers en initiatiefnemers kunnen het eens worden over circulaire eisen in
                een overeenkomst
              </p>

              <Link href='/measures/duurzaamheidseisen-in-een-anterieure-overeenkomst'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Anterieure overeenkomst</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className='flex justify-center'>
              <div className='samenhangLine3 py-20 ml-80 '></div>
              <div className='samenhangLine4 px-40 my-10'></div>
            </div>
            <div className='grid grid-cols-12 items-center '>
              <div className='rounded-[40px] bg-white pb-4 px-4 pt-1 col-span-11'>
                <div className='rounded-full bg-green-300 text-center mb-1 flex items-center'>
                  <Image className='' src={grandIcon} alt='Gemeente Amsterdam logo' />
                  <h2 className='desktop text-black pl-4'>Grond kopen</h2>
                </div>
                <p className='p-base text-black-white-800 py-4'>
                  Het actief opkopen van grond zorgt ervoor dat grond opnieuw circulair kan worden
                  uitgegeven
                </p>

                <Link href='/measures/onteigening-en-circulaire-windturbines'>
                  <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                    <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                      <h5 className='mobile sm:desktop'>Nat</h5>
                    </div>
                    <div className='flex items-center ml-4'>
                      <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                      <h4 className='mobile sm:desktop'>Onteigening</h4>
                    </div>
                  </div>
                </Link>

                <Link href='/measures/onteigening-en-circulaire-windturbines'>
                  <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                    <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                      <h5 className='mobile sm:desktop'>Pr</h5>
                    </div>
                    <div className='flex items-center ml-4'>
                      <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                      <h4 className='mobile sm:desktop'>Onteigening</h4>
                    </div>
                  </div>
                </Link>

                <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                  <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                    <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                      <h5 className='mobile sm:desktop'>Pr</h5>
                    </div>
                    <div className='flex items-center ml-4'>
                      <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                      <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                    </div>
                  </div>
                </Link>

                <Link href='/measures/onteigening-en-circulaire-windturbines'>
                  <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left mb-2'>
                    <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                      <h5 className='mobile sm:desktop'>Gem</h5>
                    </div>
                    <div className='flex items-center ml-4'>
                      <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                      <h4 className='mobile sm:desktop'>Onteigening</h4>
                    </div>
                  </div>
                </Link>

                <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                  <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                    <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                      <h5 className='mobile sm:desktop'>Gem</h5>
                    </div>
                    <div className='flex items-center ml-4'>
                      <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                      <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='samenhangLine4 pr-40'></div>
            </div>
          </div>

          <div>
            <div className='samenhangLine2 py-16 mt-10 mr-80 pr-20'></div>
            <div className='rounded-[40px] bg-white pb-4 px-4 ml-8 pt-1'>
              <div className='rounded-full bg-green-300 text-center mb-1 flex items-center'>
                <Image className='' src={grandIcon} alt='Gemeente Amsterdam logo' />
                <h2 className='desktop text-black pl-4'>Grond uitgeven</h2>
              </div>
              <p className='p-base text-black-white-800 py-4'>
                Grond kan worden uitgegeven met circulaire subgunningscriteria
              </p>

              <Link href='/measures/onteigening-en-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Onteigening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/onteigening-en-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Onteigening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/onteigening-en-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Onteigening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/onteigening-en-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Onteigening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/onteigening-en-circulaire-windturbines'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Onteigening</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left mb-2'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                  </div>
                </div>
              </Link>

              <Link href='/measures/een-voorkeursrecht-vestigen-om-circulaire-windturbines-te-bevorderen'>
                <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
                  <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                  <div className='flex items-center ml-4'>
                    <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                    <h4 className='mobile sm:desktop'>Voorkeursrecht</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
