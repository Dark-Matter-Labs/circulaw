import LinkIcon from '../link-icon';
import { useEffect, useState } from 'react';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

// TODO: get the redisgn of this prioritised by Andrea, update schema and front end.
export default function InstrumentTable({ data }) {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(data?.lawDate);
  }, [data?.lawDate]);

  return (
    <>
      <div className='grid grid-cols-6'>
        <table className='table-fixed col-span-6 sm:col-span-4 sm:m-0'>
          <tbody>
            <tr className='border-b boder-gray-300 border-t'>
              <td className='w-1/3 py-3 p-base'>Rechtsgebied</td>
              <td className='w-2/3 py-3 p-base-semibold capitalize'>
                <span className='flex justify-end sm:justify-start text-right sm:text-left'>
                  {data?.rechtsgebied}
                  {' > '}
                  {data?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className=' border-b boder-gray-300'>
              <td className='w-1/3 py-3 p-base'>Citeertitel</td>
              <td className='w-2/3 py-3 p-base-semibold first-letter:uppercase'>
                <span className='flex justify-end sm:justify-start text-right sm:text-left'>
                  {data?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-gray-300'>
              <td className='w-1/3 py-3 p-base'>Artikel</td>
              <td className='w-2/3 py-3 p-base-semibold'>
                {data?.artikelLink ? (
                  <span className='flex justify-end sm:justify-start link-interaction text-green-500'>
                    <a className='' target='_blank' href={data?.artikelLink} rel='noreferrer'>
                      <span className='link-interaction'>
                        {data?.artikel}
                        <LinkIcon />
                      </span>
                    </a>
                  </span>
                ) : (
                  <span className='p-base-semibold'>nvt</span>
                )}
              </td>
            </tr>
            <tr className='border-b boder-gray-300'>
              <td className='w-1/3 py-3 p-base'>Geldig vanaf</td>
              <td className='w-2/3 py-3 p-base-semibold'>
                <span className='flex justify-end sm:justify-start'>
                  {!data?.lawDate ? <span className='p-base-semibold'>TBD</span> : formatDate(date)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
