
import Link from 'next/link'

export default function ExpertisePageInstrument({instrument}) {
    return (
        <>
       <li className='flex flex-row justify-between first:border-t-0 border-b hover:bg-green-100 hover:text-green-800 hover:cursor-pointer hover:font-semibold'>
                  <Link href={`/measures/${instrument.slug}`} className='py-3'>
                  <div className=' border-black basis-1/2 ml-3 overflow-hidden w-full'>{instrument.titel}</div>
                  </Link>
                  <div className='flex flex-row items-center justify-between basis-1/2 mr-3 max-w-[413px]'>
                    <div className='w-[60px] mr-4'></div>
                    <div className='w-[115px] mr-4'>
                    {instrument.overheidslaag.includes('Gemeentelijk') && 
                    <div className='h-4 w-4 bg-green-600 rounded-full'></div>}
                    </div>
                    <div className='w-[100px] mr-4'>
                     {instrument.overheidslaag.includes('Provinciaal') && 
                    <div className='h-4 w-4 bg-green-400 rounded-full'></div>}
                    </div>
                    <div className='w-[90px]'>
                    {instrument.overheidslaag.includes('Nationaal') && 
                    <div className='h-4 w-4 bg-green-200 rounded-full'></div>}
                    </div>
                  </div>
                </li>
        </>
    )
}