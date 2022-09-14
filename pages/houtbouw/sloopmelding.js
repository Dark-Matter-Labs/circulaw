import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import RTooltip from '../../components/r_ladder_tooltip';
import JHTooltip from '../../components/juridische_houdbaarheid_tooltip';
import JITooltip from '../../components/juridische_invloed_tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Law() {
  return (
    <Layout>
      <div className='gradient-bg '>
        <div className='global-margin pt-10 '>
          <div className='block lg:hidden'>
            <h1 className='my-9 text-green1 mobile sm:main'>Sloopmelding</h1>
            <div className='container pb-2'>
              <div className='container-image'>
                <Image src={IcontWood} alt='Icon of a Wood Log' />
              </div>
              <div className=''>
                <Link href={'/houtbuow'}>
                  <a>
                    <span className='font-openSans font-bold pl-2 text-greenLink'>Houtbouw</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='py-5 border-t-2 border-grey2 '>
              <div className='flex pb-2'>
                <span className='font-manrope font-semibold text-lg text-black1'>R-ladder</span>
                <RTooltip>
                  <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                    <circle cx='12' cy='15' r='10' fill='#979797' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='black'
                    />
                  </svg>
                </RTooltip>
              </div>
              <span className='block-inline font-semibold text-base text-gray-900'>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R6</span>
              </span>
            </div>

            <div className='py-5'>
              <div className='relative border-t-2 border-grey2 pt-4'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Subrechtsgebied
                </div>
              </div>

              <div className='font-manrope font-normal text-base'>
                <p>Omgevingsrecht</p>
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1'>
                    Juridisch invloed
                  </span>
                  <JITooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </JITooltip>
                </div>
              </div>

              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      1 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1 pb-2'>
                    Juridisch houdbaarheid
                  </span>
                  <JHTooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </JHTooltip>
                </div>
              </div>
              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      5 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2'>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>Sloopmelding</h1>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>De sloopmelding: wat is het?</h2>
                <p className='newlineDisplay body-text-mobile sm:body-text'>
                  Een initiatiefnemer van sloop moet een melding doen bij het Omgevingsloket om
                  inzichtelijk te maken of er veilig wordt gesloopt en of er verantwoord wordt
                  omgegaan met restmaterialen en afvalscheiding. Door de sloopmelding weten
                  gemeenten waar en wanneer er wordt gesloopt. Ook moet een initiatiefnemer een
                  schatting geven van de aard en hoeveelheid van de vrijkomende materialen bij de
                  sloopwerkzaamheden en aangeven waar hij dat materiaal naar afvoert.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  Hoe kan een sloopmelding houtbouw bevorderen?
                </h2>
                <p className='body-text-mobile sm:body-text'>
                  Door een sloopmelding kunnen gemeenten in de gaten houden welke gebouwen er binnen
                  de gemeente worden gesloopt en op welke manier dit gebeurt. Voor gemeentes wordt
                  zo inzichtelijk welke materialen in het algemeen beschikbaar komen en in het
                  bijzonder hoeveel hout er beschikbaar komt voor hergebruik in de bouw
                </p>
                <div className='py-5 body-text-mobile sm:body-text'>
                  Het inzichtelijk maken van deze data bevordert twee circulaire aspecten:
                  <ul className='list-disc pl-6'>
                    <li>
                      gemeenten kunnen vraag en aanbod van reststromen beter reguleren en op elkaar
                      afstemmen. Dit kan bijvoorbeeld gebeuren door een platform waar sloopmeldingen
                      worden verbonden aan initiatiefnemers van nog te ontwikkelen gebouwen.
                      Daarnaast ontwikkelen en bouwen gemeenten zelf ook veel en kunnen zijn de
                      vrijgekomen materialen zelf inkopen.{' '}
                    </li>
                    <li>
                      gemeenten kunnen zo digitaal en kwantitatief bijhouden in hoeverre hun
                      circulaire beleid aansluit bij materiaalstromen in de stad.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='bg-green1 px-10 py-10'>
                <h2 className='pb-2 mobile sm:main text-white1'>
                  Zelf aan de slag met sloopmeldingen
                </h2>
                <p className='body-text-mobile sm:body-text text-white1 pb-4'>
                  Waar moet je aan denken om in jouw organisatie sloopmeldingen te gebruiken voor
                  circulaire doeleinden?
                </p>
                <a href='/Leidraad-Sloopmelding-CircuLaw.pdf'>
                  <button
                    type='button'
                    className='inline-flex rounded-full items-center px-4 py-2 border border-green2 button text-white1 bg-green2'
                  >
                    Bekijk de leidraad →
                  </button>
                </a>
              </div>

              <div className='pb-4 pt-8'>
                <h2 className='pb-2 mobile sm:main'>Uit de praktijk</h2>
                <p className='body-text-mobile sm:body-text'>
                  De sloopmelding is onderdeel van de regelgeving van de Omgevingswet; omdat de
                  Omgevingswet nog niet in werking is getreden is er nog geen praktijkvoorbeeld: ga
                  ermee aan de slag, je bent de eerste!
                </p>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Verder lezen/andere bronnen</h2>
                <div className='newlineDisplay body-text-mobile sm:body-text'>
                  <ul className='list-disc pl-6'>
                    <li>
                      Juridische informatie over sloopmeldingen:
                      <a
                        href='https://iplo.nl/regelgeving/regels-voor-activiteiten/sloopactiviteit/rijksregels-sloopactiviteit/informatieplicht-sloopactiviteit/'
                        className='text-greenLink link-mobile sm:link'
                      >
                        Informatieplicht sloopactiviteit - Informatiepunt Leefomgeving (iplo.nl)
                      </a>
                    </li>
                    <li>
                      Informatie over circulair slopen:
                      <a
                        href='https://www.allesovercirculairslopen.nl/'
                        className='text-greenLink link-mobile sm:link'
                      >
                        Alles over circulair slopen | powered by VERAS
                      </a>
                    </li>
                    <li>
                      Een overzichtelijke artikel met een stappenplan om circulaire sloop binnen je
                      eigen gemeente mogelijk te maken:
                      <a
                        href='https://openresearch.amsterdam/nl/page/86336/circular-demolition'
                        className='text-greenLink link-mobile sm:link'
                      >
                        Circular demolition - openresearch.amsterdam
                      </a>{' '}
                    </li>
                    <li>
                      Praktijkvoorbeelden van circulair slopen in het algemeen:
                      <a
                        href='https://circulairebouweconomie.nl/nieuws/praktijkvoorbeeld-succesvolle-circulaire-sloop-schoolgebouw-hattem/'
                        className='text-greenLink link-mobile sm:link'
                      >
                        Praktijkvoorbeeld - Succesvolle circulaire sloop schoolgebouw Hattem |
                        Circulaire Bouweconomie
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Beleid en andere instrumenten</h2>
                <p className='body-text-mobile sm:body-text'>
                  Gemeenten kunnen strengere eisen stellen voor initiatiefnemers van sloop. Dit
                  worden maatwerkvoorschriften genoemd. Met een maatwerkvoorschrift kan onder andere
                  worden bepaald dat de initiatiefnemer na het slopen een opgave moet doen van de
                  daadwerkelijke bij de sloop vrijgekomen materiaalstromen. Met een ander
                  maatwerkvoorschrift kan van initiatiefnemers worden gevraagd om in extra fracties
                  te slopen. Fracties zijn groepen materiaalstromen zoals betonvloeren,
                  isolatiemateriaal en hout. Door het verplichten van sloop in meerdere fracties
                  kunnen sloopwerkzaamheden tot kleinere productgroepen worden verwerkt waardoor
                  deze materiaalstromen gemakkelijker kunnen worden doorverkocht aan afnemers.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  Gemeentelijke omgevingsvisie: eisen en beperkingen
                </h2>
                <div className='body-text-mobile sm:body-text'>
                  <ul className='list-disc pl-6'>
                    <li>
                      De sloopmelding moet ten minste vier weken voor het begin van de
                      sloopwerkzaamheden worden ingediend. Dan hebben gemeenten genoeg tijd om de
                      sloopmelding te verwerken en inventariseren.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Juridische toelichting</h2>
                <table className='table-fixed w-full mt-5'>
                  <tbody>
                    <tr className='my-10 border-b-2 border-t-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Rechtsgebied</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        Publiekrecht - Omgevingsrecht
                      </td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Citeertitel</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        Besluit bouwwerken leefomgeving
                      </td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>7.10</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        nog niet in werking getreden
                      </td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>
                        Bevoegdheidsniveau
                      </td>
                      <td className='w-1/2 font-manrope text-base font-bold'>Gemeentelijk</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Type document</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        Algemene Maatregel van Bestuur
                      </td>
                    </tr>
                    <tr>
                      <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
                      <td className='font-manrope text-base font-bold'>Facilitair</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='hidden lg:block float-right'>
              <div className='container pb-2'>
                <div className='container-image'>
                  <Image src={IcontWood} alt='Icon of a Wood Log' />
                </div>
                <div className=''>
                  <Link href='/houtbouw'>
                    <a>
                      <span className='font-openSans font-bold pl-2 text-greenLink'>Houtbouw</span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='py-5 border-t-2 border-grey2 '>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1'>R-ladder</span>
                  <RTooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </RTooltip>
                </div>
                <span className='block-inline font-semibold text-base text-gray-900'>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R6</span>
                </span>
              </div>

              <div className='py-5'>
                <div className='relative border-t-2 border-grey2 pt-4'>
                  <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                    Subrechtsgebied
                  </div>
                </div>

                <div className='font-manrope font-normal text-base'>
                  <p>Omgevingsrecht</p>
                </div>
              </div>

              <div className='py-5'>
                <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                  <div className='flex pb-2'>
                    <span className='font-manrope font-semibold text-lg text-black1'>
                      Juridisch invloed
                    </span>
                    <JITooltip>
                      <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                        <circle cx='12' cy='15' r='10' fill='#979797' />
                        <path
                          d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                          fill='black'
                        />
                      </svg>
                    </JITooltip>
                  </div>
                </div>

                <div className='mt-3 flex items-center'>
                  <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <div
                      key={rating}
                      className={classNames(
                        1 > rating ? 'score-true' : 'score-false',
                        'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                      )}
                      aria-hidden='true'
                    />
                  ))}
                  HOOG
                </div>
              </div>

              <div className='py-5'>
                <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                  <div className='flex pb-2'>
                    <span className='font-manrope font-semibold text-lg text-black1'>
                      Juridisch houdbaarheid
                    </span>
                    <JHTooltip>
                      <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                        <circle cx='12' cy='15' r='10' fill='#979797' />
                        <path
                          d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                          fill='black'
                        />
                      </svg>
                    </JHTooltip>
                  </div>
                </div>
                <div className='mt-3 flex items-center'>
                  <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <div
                      key={rating}
                      className={classNames(
                        5 > rating ? 'score-true' : 'score-false',
                        'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                      )}
                      aria-hidden='true'
                    />
                  ))}
                  HOOG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
