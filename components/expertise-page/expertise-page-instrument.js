import Link from 'next/link';

export default function ExpertisePageInstrument({ instrument }) {
  return (
    <>
      <Link href={`/measures/${instrument.slug}`} className=''>
        {/* DESKTOP */}
        <li className='hidden sm:flex flex-row first:border-t-0 border-b hover:bg-[#035E46] hover:bg-opacity-5  hover:text-green-800 hover:cursor-pointer transition duration-500 ease-in-out'>
          <div className='border-black basis-1/2 ml-3 overflow-hidden w-full py-3 p-base'>
            {instrument.titel}
          </div>
          <div className='flex flex-row items-center justify-between basis-1/2 mr-3 max-w-[413px]'>
            <div className='w-[60px] mr-4'></div>
            <div className='w-[115px] mr-4'>
              {instrument.overheidslaag.includes('Gemeentelijk') && (
                <div className='h-4 w-4 bg-green-200 rounded-full'></div>
              )}
            </div>
            <div className='w-[100px] mr-4'>
              {instrument.overheidslaag.includes('Provinciaal') && (
                <div className='h-4 w-4 bg-green-400 rounded-full'></div>
              )}
            </div>
            <div className='w-[90px]'>
              {instrument.overheidslaag.includes('Nationaal') && (
                <div className='h-4 w-4 bg-green-600 rounded-full'></div>
              )}
            </div>
          </div>
        </li>
        {/* MOBILE */}
        <li className='sm:hidden border-b py-2'>
          <div className='p-base mx-4 pb-2'>{instrument.titel}</div>
          <div className='flex flex-row mx-4'>
            {instrument?.overheidslaag?.reverse().map((lev) => (
              <div key={lev} className='p-xs-semibold text-green-500'>
                {lev}&nbsp; {instrument.overheidslaag.slice(-1)[0] !== lev && <span>-&nbsp;</span>}
              </div>
            ))}
          </div>
        </li>
      </Link>
    </>
  );
}
