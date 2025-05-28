import Link from 'next/link';

export default function ExpertisePageInstrument({ instrument }) {
  return (
    <>
      <Link
        href={`/${instrument?.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug}`}
        className=''
      >
        {/* DESKTOP */}
        <li className='hidden flex-row border-b transition duration-500 ease-in-out first:border-t-0 hover:cursor-pointer hover:bg-[#035E46] hover:bg-opacity-5 hover:text-cl-black sm:flex'>
          <div className='p-base ml-3 w-full basis-1/2 overflow-hidden border-black py-3'>
            {instrument.titel}
          </div>
          <div className='mr-3 flex max-w-[413px] basis-1/2 flex-row items-center justify-between'>
            <div className='mr-4 w-[60px]'></div>
            <div className='mr-4 w-[115px]'>
              {instrument.overheidslaag.includes('Gemeentelijk') && (
                <div className='h-4 w-4 rounded-full bg-green-300'></div>
              )}
            </div>
            <div className='mr-4 w-[100px]'>
              {instrument.overheidslaag.includes('Provinciaal') && (
                <div className='h-4 w-4 rounded-full bg-green-400'></div>
              )}
            </div>
            <div className='w-[90px]'>
              {instrument.overheidslaag.includes('Nationaal') && (
                <div className='h-4 w-4 rounded-full bg-green-500'></div>
              )}
            </div>
          </div>
        </li>
        {/* MOBILE */}
        <li className='border-b py-2 sm:hidden'>
          <div className='p-base mx-4 pb-2'>{instrument.titel}</div>
          <div className='mx-4 flex flex-row'>
            {instrument?.overheidslaag
              ?.filter((x) => x !== null)
              .map((lev) => (
                <div key={lev} className='p-xs-semibold text-green-500'>
                  {lev}&nbsp;{' '}
                  {instrument.overheidslaag.slice(-1)[0] !== lev && <span>-&nbsp;</span>}
                </div>
              ))}
          </div>
        </li>
      </Link>
    </>
  );
}
