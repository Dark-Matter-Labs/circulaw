import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import WindmillIcon from '../../public/winturbines.svg';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import RTooltip from '../../components/r_ladder_tooltip';
import JHTooltip from '../../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../../components/juridische_invloed_tooltip';

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
      <div className='gradient-bg'>
        <div className='global-margin pt-10 overflow-x-hidden'>
          {data.casus === 'Houtbouw' ? (
            <Link href='/measures/houtbouw' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          ) : (
            <Link href='/measures/windturbines' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          )}
          <div className='block lg:hidden'>
            <h1 className='my-9 text-green1 mobile sm:main'>{data.titel}</h1>
            <div className='container pb-2'>
              <div className='container-image'>
                {data.casus === 'Houtbouw' ? (
                  <div className='container-image'>
                    <Image src={IcontWood} alt='Icon of a Wood Log' />
                  </div>
                ) : (
                  <div className='container-image'>
                    <Image src={WindmillIcon} alt='Icon of a Wood Log' />
                  </div>
                )}
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
                {data.R1 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>}
                {data.R2 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>}
                {data.R3 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R3</span>}
                {data.R4 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R4</span>}
                {data.R5 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>}
                {data.R6 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R6</span>}
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
                      data.juridische_houdbaarheid > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>{data.titel}</h1>
              <div className='py-4 m'>
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
                <h2 className='pb-2 mobile sm:main'>
                  {data.kop_2_toepassing_juridische_maatregel}
                </h2>
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
            <div className='hidden lg:block float-right'>
              <div className='container pb-2'>
                {data.casus === 'Houtbouw' ? (
                  <div className='container-image'>
                    <Image src={IcontWood} alt='Icon of a Wood Log' />
                  </div>
                ) : (
                  <div className='container-image'>
                    <Image src={WindmillIcon} alt='Icon of a Wood Log' />
                  </div>
                )}
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
                  {data.R1 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>
                  )}
                  {data.R2 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>
                  )}
                  {data.R3 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R3</span>
                  )}
                  {data.R4 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R4</span>
                  )}
                  {data.R5 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
                  )}
                  {data.R6 && (
                    <span className='bg-green2 text-white rounded-full p-1 mr-2'>R6</span>
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
                  <div className='flex pb-2'>
                    <span className='font-manrope font-semibold text-lg text-black1 '>
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
                        data.juridische_houdbaarheid > rating ? 'score-true' : 'score-false',
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

export function Rating(data) {
  {
    /* TODO: @Will make the ratings system a component which supports diff values (3,5,10) + shapes */
  }
  return <>Future Rating Systems</>;
}
