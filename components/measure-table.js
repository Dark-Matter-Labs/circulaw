import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

const components = {
  list: {
    bullet: ({ children }) => (
      <div className='newlineDisplay p-mobile-bg sm:p-desktop-bg truncate'>
        <ul className='list-disc pl-6 pb-4 mobile sm:main'>{children}</ul>
      </div>
    ),
  },
  block: {
    // need to add other styles here
    normal: ({ children }) => (
      <p className='newlineDisplay p-mobile-bg sm:p-desktop-bg pb-4'>{children}</p>
    ),
  },
};

export default function MeasureTable({ data }) {
  return (
    <>
      <div className='grid grid-cols-6'>
        <div className='col-span-6 sm:col-span-4'>
          <div className='pb-5'>
            <h3 className='pt-6 pb-4 mobile sm:desktop'>Juridische toelichting</h3>
            {data?.measure?.juridischeToelichting && (
              <PortableText components={components} value={data?.measure?.juridischeToelichting} />
            )}
          </div>
        </div>
        <table className='table-fixed col-span-6 sm:col-span-4 -m-3 sm:m-0'>
          <tbody>
            <tr className='my-10 border-b boder-black-white-300 border-t'>
              <td className='w-1/3 py-1.5 p-mobile-md sm:p-desktop-md'>Rechtsgebied</td>
              <td className='w-2/3 py-1.5 table-right capitalize'>
                <span className='justify-end sm:justify-start'>
                  {data?.measure?.rechtsgebied}
                  {'>'}
                  {data?.measure?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className=' border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-mobile-md sm:p-desktop-md'>Citeertitel</td>
              <td className='w-2/3 py-1.5 table-right first-letter:uppercase'>
                <span className='flex justify-end sm:justify-start'>
                  {data?.measure?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-mobile-md sm:p-desktop-md'>Artikel</td>
              <td className='w-2/3 py-1.5 table-right'>
                <span className='flex justify-end sm:justify-start'>
                  <a
                    className='text-green-500'
                    target='_blank'
                    href={data?.measure?.artikelLink}
                    rel='noreferrer'
                  >
                    {data?.measure?.artikel}
                    <span className='pl-0.5 inline-block h-4 w-4 relative'>
                      <Image
                        className=''
                        alt='new tab'
                        src='/icons/Vectorlink-icon.svg'
                        layout='fill'
                        objectFit='cover'
                      />
                    </span>
                  </a>
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-mobile-md sm:p-desktop-md'>Geldig vanaf</td>
              <td className='w-2/3 py-1.5 table-right'>
                <span className='flex justify-end sm:justify-start'>
                  {!data?.measure?.lawDate ? (
                    <span className='table-right'>TBD</span>
                  ) : (
                    formatDate(data?.measure?.lawDate)
                  )}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-black-white-300'>
              <td className='w-1/3 py-1.5 p-mobile-md sm:p-desktop-md'>Overheidslaag</td>
              <td className='w-2/3 py-1.5 table-right'>
                <span className='flex justify-end sm:justify-start'>
                  {data?.measure?.overheidslaag?.map((level) => (
                    <span key={level} className='table-right capitalize'>
                      {level}{' '}
                      {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                    </span>
                  ))}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
