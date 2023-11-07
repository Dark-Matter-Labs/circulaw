import Link from 'next/link';

export default function ExpertisePageInstrument({ instrument }) {
  return (
    <>
      <Link href={`/measures/${instrument.slug}`} className=''>
        <li className='hidden sm:block flex flex-row first:border-t-0 border-b hover:bg-[#035E46] hover:bg-opacity-5  hover:text-green-800 hover:cursor-pointer hover:font-semibold'>
          <div className='border-black basis-1/2 ml-3 overflow-hidden w-full py-3'>
            {instrument.titel}
          </div>
          <div className='flex flex-row items-center justify-between basis-1/2 mr-3 max-w-[413px]'>
            <div className='w-[60px] mr-4'></div>
            <div className='w-[115px] mr-4'>
              {instrument.overheidslaag.includes('Gemeentelijk') && (
                <div className='h-4 w-4 bg-green-600 rounded-full'></div>
              )}
            </div>
            <div className='w-[100px] mr-4'>
              {instrument.overheidslaag.includes('Provinciaal') && (
                <div className='h-4 w-4 bg-green-400 rounded-full'></div>
              )}
            </div>
            <div className='w-[90px]'>
              {instrument.overheidslaag.includes('Nationaal') && (
                <div className='h-4 w-4 bg-green-200 rounded-full'></div>
              )}
            </div>
          </div>
        </li>
        <li className='sm:hidden'> 
        <div className=''>
            {instrument.titel}
          </div>
          <div className=''>
            <div className=''></div>
            <div className=''>
              {instrument.overheidslaag.includes('Gemeentelijk') && (
                <div className=''>Gemeentelijk</div>
              )}
            </div>
            <div className=''>
              {instrument.overheidslaag.includes('Provinciaal') && (
                <div className=''>Provinciaal</div>
              )}
            </div>
            <div className=''>
              {instrument.overheidslaag.includes('Nationaal') && (
                <div className=''>Nationaal</div>
              )}
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}
