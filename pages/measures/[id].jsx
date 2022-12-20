import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layouts/layout';
import LinkIcon from '../../components/link-icon';
import MeasureOverview from '../../components/measure-overview';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

const checkURL = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
  );

  if (match === null) {
    return [];
  }
  return match;
};

const URLReplacer = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
  );
  let linkFormattedText = text;
  match.map((url) => {
    linkFormattedText = linkFormattedText.replace(
      url,
      '<a class="text-greenLink link-mobile wrap inline-block sm:link" href="' +
        url +
        '"  target="_BLANK">' +
        url +
        '<img class="pl-1 inline" alt = "new tab" src = "/icons/Vectorlink-icon.svg" width = {16} height ={16}/>' +
        '</a>',
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

export default function Law() {
  const { query } = useRouter();

  const { data, error } = useSWR(() => query.id && `/api/laws/${query.id}`, fetcher);

  if (error) return <div>{error.message} </div>;
  if (!data) return <div>Loading...</div>;
  console.log(data.casus);
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

          <MeasureOverview data={data} viewport='desktop' />

          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>{data.titel}</h1>

              <div className='py-4 m'>
                <h2 className='pb-2 mobile sm:main'>
                  {data.kop_1_samenvatting_juridische_maatregel}
                </h2>
                <p className='newlineDisplay body-text-mobile sm:body-text'>
                  {checkURL(data.introductie_juridische_maatregel).length > 0 ? (
                    <span
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
                  <a
                    className='link-mobile sm:link text-greenLink'
                    href={data.voorbeeld_link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {data.voorbeeld_link_teks}
                    <LinkIcon />
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

              {/* refactor table to have different design on mobile */}
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
                      <a
                        className='text-greenLink underline'
                        target='_blank'
                        href={data.link_naar_wetsartikel}
                        rel='noreferrer'
                      >
                        {data.artikel}
                        <span className='pl-2'>
                          <Image
                            alt='new tab'
                            src='/icons/Vectorlink-icon.svg'
                            width={13}
                            height={13}
                          />
                        </span>
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

            <MeasureOverview data={data} viewport='mobile' />
          </div>
        </div>
      </div>
    </Layout>
  );
}
