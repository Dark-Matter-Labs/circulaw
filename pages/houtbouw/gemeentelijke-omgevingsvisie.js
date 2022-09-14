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
      <div className='gradient-bg'>
        <div className='global-margin pt-10 '>
          <div className='block lg:hidden'>
            <h1 className='my-9 text-green1 mobile sm:main'>Gemeentelijke omgevingsvisie</h1>
            <div className='container pb-2'>
              <div className='container-image'>
                <Image src={IcontWood} alt='Icon of a Wood Log' />
              </div>
              <div className=''>
                <Link href={'/houtbouw'}>
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
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
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
                      3 > rating ? 'score-true' : 'score-false',
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
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>
                Gemeentelijke omgevingsvisie
              </h1>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  De gemeentelijke omgevingsvisie: wat is het?
                </h2>
                <p className='newlineDisplay body-text-mobile sm:body-text'>
                  Een gemeente legt in een omgevingsvisie vast wat de maatschappelijke opgaven zijn
                  op het gebied van de fysieke leefomgeving en hoe taken ingevuld worden om ambities
                  en beleidsdoeleinden te behalen. Hierin staat op wat voor manier beleid doorwerkt
                  en welke instrumenten daarvoor worden ingezet. Een omgevingsvisie gaat in op de
                  kernkwaliteiten van ruimte, milieu en natuur, water, infrastructuur, verkeer en
                  vervoer, landschap en cultureel erfgoed, én op de samenhang daartussen Een
                  omgevingsvisie is vormvrij. Dat betekent dat de gemeenteraad het detailniveau, de
                  gebieden, sectoren en thema’s zelf bepaalt.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  Hoe kan een gemeentelijke omgevingsvisie houtbouw bevorderen?{' '}
                </h2>
                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  De omgevingsvisie is een beleidsmatige basis voor inzet van juridische, financiële
                  of andere instrumenten om beleidsdoelen na te streven. Het expliciet opnemen van
                  houtbouw in de gemeentelijke omgevingsvisie zorgt voor een inbedding van houtbouw
                  in de beleidscyclus van de Omgevingswet. Dit maakt het mogelijk om beleid ter
                  bevordering van houtbouw binnen de gemeente te maken en uit te voeren. De
                  omgevingsvisie dient als het ware ter onderbouwing van het te vormen beleid en
                  zorgt voor doorwerking naar andere instrumenten die kunnen worden ingezet voor
                  houtbouw.
                </p>
              </div>
              <div className='bg-green1 px-4 py-4'>
                <h2 className='pb-2 mobile sm:main text-white1'>
                  Zelf aan de slag met de omgevingsvisie?
                </h2>
                <p className='body-text-mobile sm:body-text text-white1 pb-4'>
                  Check hoe je de omgevingsvisie in jouw organisatie kunt gebruiken om houtbouw te
                  bevorderen.
                </p>
                <a href='/Leidraad-Omgevingsvisie-CircuLaw.pdf'>
                  <button
                    type='button'
                    className='inline-flex rounded-full items-center px-4 py-2 border border-green2 button text-white1 bg-green2'
                  >
                    Bekijk de leidraad →
                  </button>
                </a>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Uit de praktijk</h2>
                <p className='body-text-mobile sm:body-text'>
                  Het is mogelijk om vooruitlopend op de Omgevingswet al een omgevingsvisie te
                  maken. Zo staat in{' '}
                  <a
                    href='https://amsterdam2050.nl/wp-content/uploads/2021/06/OPM%20Omgevingsvisie-2050-20210613-200dpi.pdf'
                    className='text-greenLink link-mobile sm:link'
                  >
                    de omgevingsvisie van gemeente Amsterdam
                  </a>{' '}
                  het opschalen van bouwen met hout benoemd als beleidsambitie.{' '}
                </p>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Verder lezen/andere bronnen</h2>
                <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
                  <ul className='list-disc pl-6'>
                    <li>
                      <a
                        href='https://iplo.nl/regelgeving/instrumenten/omgevingsvisie-gemeente/staat-erin/#:~:text=Iedere%20gemeente%20in%20Nederland%20stelt,vervoer%2C%20infrastructuur%20en%20cultureel%20erfgoed.'
                        className='text-greenLink link-mobile sm:link'
                      >
                        Juridische informatie
                      </a>{' '}
                      over de gemeentelijke omgevingsvisie
                    </li>
                    <li>
                      De voormalige gemeente Weesp heeft houtbouw opgenomen in haar{' '}
                      <a
                        href='https://assets.amsterdam.nl/publish/pages/1007002/definitief_vrm21_670_omgevingsvisie_weesp_14dec2021_spread_tg.pdf'
                        className='text-greenLink link-mobile sm:link'
                      >
                        omgevingsvisie{' '}
                      </a>
                    </li>
                    <li>
                      Ook in de{' '}
                      <a
                        href='https://www.denationaleomgevingsvisie.nl/publicaties/novi-stukken+publicaties/handlerdownloadfiles.ashx?idnv=1760380'
                        className='text-greenLink link-mobile sm:link'
                      >
                        nationale omgevingsvisie
                      </a>{' '}
                      is houtbouw opgenomen
                    </li>
                    <li>
                      Hier lees je meer over een{' '}
                      <a
                        href='https://vng.nl/sites/default/files/2020-06/praktijkproef-afwegingskader-omgevingsvisie_20200529.pdf'
                        className='text-greenLink link-mobile sm:link'
                      >
                        praktijkproef van een afwegingskader
                      </a>{' '}
                      voor het opstellen van een omgevingsvisie
                    </li>
                  </ul>
                </div>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Beleid en andere instrumenten</h2>
                <p className='body-text-mobile sm:body-text'>
                  De ambities die in de omgevingsvisie worden beschreven werken door in het
                  omgevingsplan, de omgevingsprogramma’s en de vergunningverlening. Ook andere,
                  niet-juridische maatregelen zoals communicatie-instrumenten of financiële
                  instrumenten kunnen hiervoor worden ingezet. Om te zorgen dat de beleidsvisies uit
                  de omgevingsvisie met deze instrumenten behaald worden is het belangrijk om de
                  omgevingsvisie te monitoren en evalueren. De omgevingsvisie hoeft dan niet in zijn
                  geheel te worden aangepast maar dit kan modulair en op elk moment gebeuren,
                  bijvoorbeeld jaarlijks of tegelijk met het coalitieakkoord.
                </p>
                <p className='body-text-mobile sm:body-text'>
                  Ook is het belangrijk dat rekening wordt gehouden met de nationale en provinciale
                  omgevingsvisies. Dit is een wettelijke eis. Omgevingsvisies zijn zelfbindend, wat
                  betekent dat het document alleen verplichtingen schept voor de maker ervan. De
                  omgevingsvisie kan dus geen verplichting opleggen aan andere bestuursorganen. Het
                  kennen van de omgevingsvisies van naastliggende gemeenten of provincies is echter
                  wel belangrijk voor het versnellen van beleidsdoeleinden zoals de circulaire
                  bouwtransitie met houtbouw.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  Gemeentelijke omgevingsvisie: eisen en beperkingen
                </h2>
                <div className='body-text-mobile sm:body-text'>
                  <ul className='list-disc pl-6'>
                    <li>
                      Bij het opstellen van de omgevingsvisie houdt de gemeente rekening met het
                      voorzorgsbeginsel, het beginsel van preventief handelen, het beginsel dat
                      milieuaantastingen bij voorrang aan de bron bestreden moeten worden en het
                      beginsel dat de vervuiler betaalt.
                    </li>
                    <li>
                      Gemeenten moeten rekening houden met de samenhang van de relevante onderdelen
                      en aspecten van de fysieke leefomgeving en van de rechtstreeks daarbij
                      betrokken belangen. Gemeenten moeten dus altijd een afweging maken tussen het
                      beschermen en benutten van alle relevante onderdelen en aspecten van de
                      fysieke leefomgeving.
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
                      <td className='w-1/2 font-manrope text-base font-bold'>Omgevingswet</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>3.1, eerste lid</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        Nog niet in werking getreden
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
                      <td className='w-1/2 font-manrope text-base font-bold'>Wet in formele zin</td>
                    </tr>
                    <tr>
                      <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
                      <td className='font-manrope text-base font-bold'>Juridisch</td>
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
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
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
                        3 > rating ? 'score-true' : 'score-false',
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
