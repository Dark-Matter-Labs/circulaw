import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { juridischeToelichtingComponernts } from '../lib/portable-text/pt-components';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

export default function MeasureTable({ data }) {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(data?.measure?.lawDate);
  }, [data?.measure?.lawDate]);

  return (
    <>
      <div className='grid grid-cols-6'>
        <div className='col-span-6 sm:col-span-6'>
          <div className='pb-5'>
            <h2 className='pt-6 pb-4 mobile sm:desktop'>Juridische toelichting</h2>
            {data?.measure?.juridischeToelichting && (
              <PortableText
                components={juridischeToelichtingComponernts}
                value={data?.measure?.juridischeToelichting}
              />
            )}
          </div>
        </div>
        <table className='table-fixed col-span-6 sm:col-span-4 -m-3 sm:m-0'>
          <tbody>
            <tr className='my-10 border-b boder-black-white-300 border-t'>
              <td className='w-1/3 py-1.5 p-base'>Rechtsgebied</td>
              <td className='w-2/3 py-1.5 table-base capitalize'>
                <span className='flex justify-end sm:justify-start'>
                  {data?.measure?.rechtsgebied}
                  {'>'}
                  {data?.measure?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className=' border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5  p-base'>Citeertitel</td>
              <td className='w-2/3 py-1.5 table-base first-letter:uppercase'>
                <span className='flex justify-end sm:justify-start'>
                  {data?.measure?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-base'>Artikel</td>
              <td className='w-2/3 py-1.5 table-base'>
                <span className='flex justify-end sm:justify-start link-interaction text-green-500'>
                  <a
                    className=''
                    target='_blank'
                    href={data?.measure?.artikelLink}
                    rel='noreferrer'
                  >
                    {data?.measure?.artikel}
                    <span className='pl-0.5 inline-block -mb-0.5 h-5 w-5 relative'>
                    <svg className="stroke-current" width="20" height="20" viewBox="0 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                    </span>
                  </a>
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5  p-base'>Geldig vanaf</td>
              <td className='w-2/3 py-1.5 table-base'>
                <span className='flex justify-end sm:justify-start'>
                  {!data?.measure?.lawDate ? (
                    <span className='table-base'>TBD</span>
                  ) : (
                    formatDate(date)
                  )}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-base'>Overheidslaag</td>
              <td className='w-2/3 py-1.5 table-base'>
                <div className='flex justify-end sm:justify-start flex-wrap'>
                  {data?.measure?.overheidslaag?.map((level) => (
                    <span key={level} className='table-base capitalize'>
                      {level}{' '}
                      {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                      &nbsp;
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
