import { useEffect, useState } from 'react';

import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

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
            <tr className='boder-cl-grey border-b border-t'>
              <td className='p-base w-1/3 py-3'>Rechtsgebied</td>
              <td className='p-base-semibold w-2/3 py-3 capitalize'>
                <span className='flex justify-end text-right sm:justify-start sm:text-left'>
                  {data?.rechtsgebied}
                  {' > '}
                  {data?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className='boder-cl-grey border-b'>
              <td className='p-base w-1/3 py-3'>Citeertitel</td>
              <td className='p-base-semibold w-2/3 py-3 first-letter:uppercase'>
                <span className='flex justify-end text-right sm:justify-start sm:text-left'>
                  {data?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='boder-cl-grey border-b'>
              <td className='p-base w-1/3 py-3'>Artikel</td>
              <td className='p-base-semibold w-2/3 py-3'>
                {data?.artikelLink ? (
                  <span className='link-interaction flex items-center justify-end text-green-500 sm:justify-start'>
                    <Link className='' target='_blank' href={data?.artikelLink} rel='noreferrer'>
                      <span className='link-interaction flex items-center'>
                        {data?.artikel}
                        <IconExternalLink className='ml-1 inline-block size-5' />
                      </span>
                    </Link>
                  </span>
                ) : (
                  <span className='p-base-semibold'>nvt</span>
                )}
              </td>
            </tr>
            <tr className='boder-cl-grey border-b'>
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
