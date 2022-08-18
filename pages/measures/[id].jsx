import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import Tooltip from '../../components/tooltip';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

const checkURL = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
  );

  if (match === null) {
    return [];
  }
  return match;
};

const URLReplacer = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
  );
  let linkFormattedText = text;
  match.map((url) => {
    linkFormattedText = linkFormattedText.replace(
      url,
      `<a class="text-greenLink mobile-link wrap sm:link" href=\"` +
        url +
        '"  target="_BLANK">' +
        url +
        `</a>`,
    );
  });
  return linkFormattedText;
};

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Law() {
  const { query } = useRouter();

  const { data, error } = useSWR(() => query.id && `/api/laws/${query.id}`, fetcher);

  if (error) return <div>{error.message} </div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className='px-5 sm:px-20 pt-10 gradient-bg '>
        {data.casus === 'Houtbouw' ? (
          <Link href='/measures/houtbouw' className=''>
            <a className='text-greenLink breadcrumb'>← Terug</a>
          </Link>
        ) : (
          <Link href='/measures/windmolens' className=''>
            <a className='text-greenLink breadcrumb'>← Terug</a>
          </Link>
        )}
        <div className='flex'>
          <div className='w-11/12 sm:w-2/3 p-6 pb-20'>
            <h1 className='my-9 text-green1 mobile sm:main'>{data.titel}</h1>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>
                {data.kop_1_samenvatting_juridische_maatregel}
              </h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                {checkURL(data.introductie_juridische_maatregel).length > 0 ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: URLReplacer(data.introductie_juridische_maatregel),
                    }}
                    className=''
                  />
                ) : (
                  data.introductie_juridische_maatregel
                )}
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>{data.kop_2_toepassing_juridische_maatregel}</h2>
              <div className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                {checkURL(data.toepassing_juridische_maatregel).length > 0 ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: URLReplacer(data.toepassing_juridische_maatregel),
                    }}
                  />
                ) : (
                  data.toepassing_juridische_maatregel
                )}
              </div>
            </div>
            {data.is_er_een_praktijk_voorbeeld && (
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>{data.kop_3_uit_de_praktijk}</h2>
                <p className='body-text-mobile sm:body-text'>{data.uit_de_praktijk}</p>
                <a className='link-mobile sm:link text-greenLink' href={data.voorbeeld_link}>
                  {data.voorbeeld_link_teks}
                </a>
              </div>
            )}
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>{data.kop_4_eisen_en_beperkingen}</h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                {data.eisen_en_beperkingen}
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>{data.kop_5_juridische_toelichting}</h2>
              <p className='body-text-mobile sm:body-text'>{data.juridische_toelichting}</p>
            </div>
            <table className='table-fixed w-full mt-5'>
              <tbody>
                <tr className='my-10 border-b-2 border-t-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Rechtsgebied</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>
                    {data.rechtsgebied} - {data.subrechtsgebied}
                  </td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Citeertitel</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>{data.citeertitel}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>
                    <a className='text-greenLink' href={data.link_naar_wetsartikel}>
                      {data.artikel}
                    </a>
                  </td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>
                    {formatDate(data.geldend_vanaf)}
                  </td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Bevoegdheidsniveau</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>
                    {data.europees && <span>Europees </span>}
                    {data.nationaal && <span>Nationaal </span>}
                    {data.provinciaal && <span>Provinciaal </span>}
                    {data.waterschappen && <span>Waterschappen </span>}
                    {data.gemeentelijk && <span>Gemeentelijk</span>}
                  </td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2 font-manrope text-base font-normal'>Type document</td>
                  <td className='w-1/2 font-manrope text-base font-bold'>{data.type_document}</td>
                </tr>
                <tr>
                  <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
                  <td className='font-manrope text-base font-bold'>
                    {data.type_beleidsinstrument}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='hidden sm:block w-1/3'>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Rating(data) {
  {
    /* TODO: @Will make the ratings system a component which supports diff values (3,5,10) + shapes */
  }
  return <>Future Rating Systems</>;
}
