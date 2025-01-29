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
        <table className='col-span-6 table-fixed sm:col-span-4 sm:m-0'>
          <tbody>
            <tr className='boder-gray-300 border-b border-t'>
              <td className='p-base w-1/3 py-3'>Rechtsgebied</td>
              <td className='p-base-semibold w-2/3 py-3 capitalize'>
                <span className='flex justify-end text-right sm:justify-start sm:text-left'>
                  {data?.rechtsgebied}
                  {' > '}
                  {data?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className='boder-gray-300 border-b'>
              <td className='p-base w-1/3 py-3'>Citeertitel</td>
              <td className='p-base-semibold w-2/3 py-3 first-letter:uppercase'>
                <span className='flex justify-end text-right sm:justify-start sm:text-left'>
                  {data?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='boder-gray-300 border-b'>
              <td className='p-base w-1/3 py-3'>Artikel</td>
              <td className='p-base-semibold w-2/3 py-3'>
                {data?.artikelLink ? (
                  <span className='link-interaction flex justify-end text-green-500 sm:justify-start'>
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
            <tr className='boder-gray-300 border-b'>
              <td className='p-base w-1/3 py-3'>Geldig vanaf</td>
              <td className='p-base-semibold w-2/3 py-3'>
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
