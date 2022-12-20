import Image from 'next/image';

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

export default function MeasureTable({ data }) {
  return (
    <>
      <table className='table-fixed w-full mt-5'>
        <tbody>
          <tr className='my-10 border-b-2 border-t-2'>
            <td className='w-1/2 font-manrope text-base font-normal'>Rechtsgebied</td>
            <td className='w-1/2 font-manrope text-base font-bold capitalize'>
              {data?.measure?.rechtsgebied} - {data?.measure?.subrechtsgebied}
            </td>
          </tr>
          <tr className='my-10 border-b-2'>
            <td className='w-1/2 font-manrope text-base font-normal'>Citeertitel</td>
            <td className='w-1/2 font-manrope text-base font-bold first-letter:uppercase'>
              {data?.measure?.citeertitel}
            </td>
          </tr>
          <tr className='my-10 border-b-2'>
            <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
            <td className='w-1/2 font-manrope text-base font-bold'>
              <a
                className='text-greenLink underline'
                target='_blank'
                href={data?.measure?.link_naar_wetsartikel}
                rel='noreferrer'
              >
                {data?.measure?.artikel}
                <span className='pl-2'>
                  <Image alt='new tab' src='/icons/Vectorlink-icon.svg' width={13} height={13} />
                </span>
              </a>
            </td>
          </tr>
          <tr className='my-10 border-b-2'>
            <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
            <td className='w-1/2 font-manrope text-base font-bold'>
              {!data?.measure?.lawDate ? <span>TBD</span> : formatDate(data?.measure?.lawDate)}
            </td>
          </tr>
          <tr className='my-10 border-b-2'>
            <td className='w-1/2 font-manrope text-base font-normal'>Bevoegdheidsniveau</td>
            <td className='w-1/2 font-manrope text-base font-bold'>
              {data?.measure?.governmentLevel.map((level) => (
                <span key={level} className='capitalize'>
                  {level} {data?.measure?.governmentLevel.slice(-1)[0] !== level && <span>- </span>}
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
    </>
  );
}
