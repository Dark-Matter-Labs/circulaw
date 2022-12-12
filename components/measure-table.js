import Image from 'next/image'; 

const formatDate = (date) => {
    let dateObject = new Date(date);
    return dateObject.toLocaleDateString();
  };  

export default function MeasureTable({data}) {
    return (
        <>
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
        </>
    )
}