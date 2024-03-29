import { useEffect, useState } from 'react';
import LinkIcon from '../link-icon';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

export default function InstrumentTable({ data }) {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(data?.measure?.lawDate);
  }, [data?.measure?.lawDate]);

  return (
    <>
      <div className='grid grid-cols-6'>
        <table className='table-fixed col-span-6 sm:col-span-4 sm:m-0'>
          <tbody>
            <tr className='border-b boder-grey-300 border-t'>
              <td className='w-1/3 py-3 p-base'>Rechtsgebied</td>
              <td className='w-2/3 py-3 p-base-semibold capitalize'>
                <span className='flex justify-end sm:justify-start text-right sm:text-left'>
                  {data?.measure?.rechtsgebied}
                  {' > '}
                  {data?.measure?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className=' border-b boder-grey-300'>
              <td className='w-1/3 py-3 p-base'>Citeertitel</td>
              <td className='w-2/3 py-3 p-base-semibold first-letter:uppercase'>
                <span className='flex justify-end sm:justify-start text-right sm:text-left'>
                  {data?.measure?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-grey-300'>
              <td className='w-1/3 py-3 p-base'>Artikel</td>
              <td className='w-2/3 py-3 p-base-semibold'>
                {data?.measure?.artikelLink ? (
                  <span className='flex justify-end sm:justify-start link-interaction text-green-500'>
                    <a
                      className=''
                      target='_blank'
                      href={data?.measure?.artikelLink}
                      rel='noreferrer'
                    >
                      <span className='link-interaction'>
                        {data?.measure?.artikel}
                        <LinkIcon />
                      </span>
                    </a>
                  </span>
                ) : (
                  <span className='p-base-semibold'>nvt</span>
                )}
              </td>
            </tr>
            <tr className='border-b boder-grey-300'>
              <td className='w-1/3 py-3 p-base'>Geldig vanaf</td>
              <td className='w-2/3 py-3 p-base-semibold'>
                <span className='flex justify-end sm:justify-start'>
                  {!data?.measure?.lawDate ? (
                    <span className='p-base-semibold'>TBD</span>
                  ) : (
                    formatDate(date)
                  )}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
