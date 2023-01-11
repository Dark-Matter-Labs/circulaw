import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

const components = {
  list: {
    bullet: ({ children }) => (
      <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
        <ul className='list-disc pl-6 pb-4 mobile sm:main'>{children}</ul>
      </div>
    ),
  },
  block: {
    // need to add other styles here
    normal: ({ children }) => (
      <p className='newlineDisplay body-text-mobile sm:body-text pb-4'>{children}</p>
    ),
  },
};

export default function MeasureTable({ data }) {
  return (
    <>
      <div className='grid grid-cols-6'>
        <div className='col-span-6 sm:col-span-4'>
          <div className='pb-5'>
            <h2 className='pt-6 pb-4 mob-new sm:urban'>Juridische toelichting</h2>
            {data?.measure?.juridischeToelichting && (
              <PortableText components={components} value={data?.measure?.juridischeToelichting} />
            )}
          </div>
        </div>
        <table className='table-fixed col-span-6 sm:col-span-4 -m-3'>
          <tbody>
            <tr className='my-10 border-b boder-grey2 border-t'>
              <td className='w-1/3 py-1.5 body-small'>Rechtsgebied</td>
              <td className='w-2/3 py-1.5 table-right capitalize'>
                <span className='flex justify-end sm:justify-start'>
                {data?.measure?.rechtsgebied} - {data?.measure?.subrechtsgebied}
                </span>
              </td>
            </tr>
            <tr className=' border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Citeertitel</td>
              <td className='w-2/3 py-1.5 table-right first-letter:uppercase'>
              <span className='flex justify-end sm:justify-start'>
                {data?.measure?.citeertitel}
                </span>
              </td>
            </tr>
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Artikel</td>
              <td className='w-2/3 py-1.5 table-right'>
              <span className='flex justify-end sm:justify-start'>
                <a
                  className='text-greenLink underline'
                  target='_blank'
                  href={data?.measure?.artikelLink}
                  rel='noreferrer'
                >
                  {data?.measure?.artikel}
                  <span className='pl-0.5 inline-block h-4 w-4 relative'>
                  <Image className='' alt='new tab' src='/icons/Vectorlink-icon.svg' layout='fill' objectFit="cover" />
                  </span>
                </a>
                </span>
              </td>
            </tr>
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Geldig vanaf</td>
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
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Overheidslaag</td>
              <td className='w-2/3 py-1.5 table-right'>
              <span className='flex justify-end sm:justify-start'>

                {data?.measure?.overheidslaag?.map((level) => (
                  <span key={level} className='table-right capitalize'>
                    {level} {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                  </span>
                ))}
                </span>
              </td>
            </tr>
            {/* DELETE 
            <tr className='my-10 border-b-2'>
              <td className='w-1/2 font-manrope text-base font-normal'>Type document</td>
              <td className='w-1/2 font-manrope text-base font-bold'>{data.measure?.type_document}</td>
            </tr>
            <tr>
              <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
              <td className='font-manrope text-base font-bold'>{data.measure?.type_beleidsinstrument}</td>
            </tr>
            */}
          </tbody>
        </table>
      </div>
    </>
  );
}
