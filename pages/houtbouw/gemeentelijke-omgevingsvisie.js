import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import Tooltip from '../../components/tooltip';

export default function Law() {
  return (
    <Layout>
      <div className='px-5 sm:px-20 pt-10 gradient-bg '>
        <Link href='/measures/houtbouw' className=''>
          <a className='text-greenLink breadcrumb'>← Terug</a>
        </Link>
        <div className='flex'>
          <div className='w-11/12 sm:w-2/3 p-6 pb-20'>
            <h1 className='my-9 text-green1 mobile sm:main'>Gemeentelijke omgevingsvisie</h1>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>De gemeentelijke omgevingsvisie: wat is het?</h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                Een gemeente legt in een omgevingsvisie vast wat de maatschappelijke opgaven zijn op
                het gebied van de fysieke leefomgeving en hoe taken ingevuld worden om ambities en
                beleidsdoeleinden te behalen. Hierin staat op wat voor manier beleid doorwerkt en
                welke instrumenten daarvoor worden ingezet. Een omgevingsvisie gaat in op de
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
                houtbouw in de gemeentelijke omgevingsvisie zorgt voor een inbedding van houtbouw in
                de beleidscyclus van de Omgevingswet. Dit maakt het mogelijk om beleid ter
                bevordering van houtbouw binnen de gemeente te maken en uit te voeren. De
                omgevingsvisie dient als het ware ter onderbouwing van het te vormen beleid en zorgt
                voor doorwerking naar andere instrumenten die kunnen worden ingezet voor houtbouw.
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Uit de praktijk</h2>
              <p className='body-text-mobile sm:body-text'>
                Het is mogelijk om vooruitlopend op de Omgevingswet al een omgevingsvisie te maken.
                Zo staat in{' '}
                <a
                  href='https://amsterdam2050.nl/wp-content/uploads/2021/06/OPM%20Omgevingsvisie-2050-20210613-200dpi.pdf'
                  className='text-greenLink'
                >
                  de omgevingsvisie van gemeente Amsterdam
                </a>{' '}
                het opschalen van bouwen met hout benoemd als beleidsambitie.{' '}
              </p>
            </div>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Verder lezen/andere bronnen</h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                <ul className='list-disc pl-6'>
                  <li>
                    Juridische informatie over de gemeentelijke omgevingsvisie:{' '}
                    <a
                      href='https://iplo.nl/regelgeving/instrumenten/omgevingsvisie-gemeente/staat-erin/#:~:text=Iedere%20gemeente%20in%20Nederland%20stelt,vervoer%2C%20infrastructuur%20en%20cultureel%20erfgoed.'
                      className='text-greenLink'
                    >
                      Gemeentelijke omgevingsvisie: dit staat er in - Informatiepunt Leefomgeving
                      (iplo.nl)
                    </a>
                  </li>
                  <li>
                    De voormalige gemeente Weesp heeft houtbouw opgenomen in haar omgevingsvisie:{' '}
                    <a
                      href='https://assets.amsterdam.nl/publish/pages/1007002/definitief_vrm21_670_omgevingsvisie_weesp_14dec2021_spread_tg.pdf'
                      className='text-greenLink'
                    >
                      https://assets.amsterdam.nl/publish/pages/1007002/definitief_vrm21_670_omgevingsvisie_weesp_14dec2021_spread_tg.pdf{' '}
                    </a>
                  </li>
                  <li>
                    Ook in de nationale omgevingsvisie is houtbouw opgenomen:{' '}
                    <a
                      href='https://www.denationaleomgevingsvisie.nl/publicaties/novi-stukken+publicaties/handlerdownloadfiles.ashx?idnv=1760380'
                      className='text-greenLink'
                    >
                      Ministerie van Binnenlandse Zaken en Koninkrijksrelaties | Nationale
                      Omgevingsvisie (denationaleomgevingsvisie.nl)
                    </a>{' '}
                  </li>
                  <li>
                    Hier lees je meer over een praktijkproef van een afwegingskader voor het
                    opstellen van een omgevingsvisie:{' '}
                    <a
                      href='https://vng.nl/sites/default/files/2020-06/praktijkproef-afwegingskader-omgevingsvisie_20200529.pdf'
                      className='text-greenLink'
                    >
                      praktijkproef-afwegingskader-omgevingsvisie_20200529.pdf (vng.nl)
                    </a>
                  </li>
                </ul>
              </p>
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
              <p className='body-text-mobile sm:body-text'>
                <ul className='list-disc pl-6'>
                  <li>
                    Bij het opstellen van de omgevingsvisie houdt de gemeente rekening met het
                    voorzorgsbeginsel, het beginsel van preventief handelen, het beginsel dat
                    milieuaantastingen bij voorrang aan de bron bestreden moeten worden en het
                    beginsel dat de vervuiler betaalt.
                  </li>
                  <li>
                    Gemeenten moeten rekening houden met de samenhang van de relevante onderdelen en
                    aspecten van de fysieke leefomgeving en van de rechtstreeks daarbij betrokken
                    belangen. Gemeenten moeten dus altijd een afweging maken tussen het beschermen
                    en benutten van alle relevante onderdelen en aspecten van de fysieke
                    leefomgeving.
                  </li>
                </ul>
              </p>
            </div>

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
                  <td className='w-1/2 font-manrope text-base font-normal'>Bevoegdheidsniveau</td>
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
          {/* <div className='hidden sm:block w-1/3'>
            <div className='container pb-2'>
              <div className='container-image'>
                <Image src={IcontWood} alt='Icon of a Wood Log' />
              </div>
              <div className=''>
                <Link href={'/' + data.casus.replace(/\s+/g, '-').toLowerCase()}>
                  <a>
                    <span className='font-openSans font-bold pl-2 text-greenLink'>
                      {data.casus}
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='py-5 border-t-2 border-grey2 '>
              <p className='font-manrope font-semibold text-lg text-black1 pb-2'>R-ladder </p>
              <span className='block-inline font-semibold text-base text-gray-900'>
                {data.R1 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R1</Tooltip>
                  </span>
                )}
                {data.R2 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R2</Tooltip>
                  </span>
                )}
                {data.R3 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R3</Tooltip>
                  </span>
                )}
                {data.R4 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R4</Tooltip>
                  </span>
                )}
                {data.R5 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R5</Tooltip>
                  </span>
                )}
                {data.R6 && (
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                    <Tooltip icon='false'>R6</Tooltip>
                  </span>
                )}
              </span>
            </div>

            <div className='py-5'>
              <div className='relative border-t-2 border-grey2 pt-4'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Subrechtsgebied
                </div>
              </div>

              <div className='font-manrope font-normal text-base'>
                <p>{data.subrechtsgebied}</p>
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Juridisch invloed
                </div>
              </div>

              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.juridische_invloed > rating ? 'score-true' : 'score-false',
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
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Juridisch houdbaarheid
                </div>
                <Tooltip data={data.JuridischAfbreukrisicoToolTip} />
              </div>
              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.juridische_houdbaarheid > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>

            {data.kop_6_ministappenplan && (
              <div className='px-4 py-4 border-2 rounded bg-[#d8edfb]'>
                <div className='font-bold pb-4 '>{data.kop_6_ministappenplan}</div>
                <div className=''>
                  <div className='pb-4'>{data.ministappenplan}</div>
                </div>
                <div className='w-full px-4 py-4'>
                  <a href={data.links_ministappenplan}>
                    <button className='px-4 py-4 border-2 rounded text-white bg-[#0088d9]'>
                      HOUD ME OP DE HOOGTE
                    </button>
                  </a>
                </div>{' '}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
