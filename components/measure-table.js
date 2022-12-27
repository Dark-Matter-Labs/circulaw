import Image from 'next/image';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

export default function MeasureTable({ data }) {
  return (
    <>
      <div className='grid grid-cols-6 mt-2'>
        <div className='col-span-4'>
          <div>
            <h2 className='pt-10 pb-4 mobile sm:urban'>Juridische toelichting</h2>
            {data?.measure?.juridischeToelichting && (
              <p className='newlineDisplay body-text-mobile sm:body-text pb-4'>
                {data?.measure?.juridischeToelichting}
              </p>
            )}
          </div>
        </div>
        <table className='table-fixed col-span-4'>
          <tbody>
            <tr className='my-10 border-b boder-grey2 border-t'>
              <td className='w-1/3 py-1.5 body-small'>Rechtsgebied</td>
              <td className='w-2/3 py-1.5 table-right capitalize'>
                {data?.measure?.rechtsgebied} - {data?.measure?.subrechtsgebied}
              </td>
            </tr>
            <tr className=' border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Citeertitel</td>
              <td className='w-2/3 py-1.5 table-right first-letter:uppercase'>
                {data?.measure?.citeertitel}
              </td>
            </tr>
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Artikel</td>
              <td className='w-2/3 py-1.5 table-right'>
                <a
                  className='text-greenLink underline'
                  target='_blank'
                  href={data?.measure?.artikelLink}
                  rel='noreferrer'
                >
                  {data?.measure?.artikel}
                  <span className='pl-1'>
                    <Image alt='new tab' src='/icons/Vectorlink-icon.svg' width={13} height={13} />
                  </span>
                </a>
              </td>
            </tr>
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Geldig vanaf</td>
              <td className='w-2/3 py-1.5 table-right'>
                {!data?.measure?.lawDate ? (
                  <span className='table-right'>TBD</span>
                ) : (
                  formatDate(data?.measure?.lawDate)
                )}
              </td>
            </tr>
            <tr className='border-b boder-grey2'>
              <td className='w-1/3 py-1.5 body-small'>Bevoegdheidsniveau</td>
              <td className='w-2/3 py-1.5 table-right'>
                {data?.measure?.governmentLevel.map((level) => (
                  <span key={level} className='table-right capitalize'>
                    {level}{' '}
                    {data?.measure?.governmentLevel.slice(-1)[0] !== level && <span>- </span>}
                  </span>
                ))}
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
