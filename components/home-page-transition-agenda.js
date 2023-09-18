import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
// dummy component to delete.

export default function TransitionAgendas() {
  const transitionAgendas = [
    'Bouw',
    'Biomassa en voedsel',
    'Kunststoffen',
    'Consumptiegoederen',
    'Maakindustrie',
  ];

  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 max-w-8xl relative z-0'
        >
          {transitionAgendas.map((agenda) => (
            <li
              key={agenda}
              className='relative drop-shadow-sm bg-white w-full rounded-cl h-auto min-h-[25rem]'
            >
              <div className='object-cover rounded-cl w-full max-h-[200px]'></div>
              <div className='group block w-full p-4 bg-white rounded-cl'>
                <div className='inline-block'>
                  <Link href='/bouw'>
                    <h3 className='desktop mt-2 text-black pointer-events-none pb-4 hidden sm:inline'>
                      {agenda}
                    </h3>
                    <h2 className='mobile mt-2 text-black pointer-events-none pb-4 inline sm:hidden'>
                      {agenda}
                    </h2>
                  </Link>
                </div>
                <Link href='/bouw'>
                  <p className='p-base block text-black pointer-events-none py-4 w-full'>
                    {agenda}
                  </p>
                </Link>
                <div className='group flex justify-end w-full pb-4 pr-4 bg-white absolute inset-x-0 bottom-0 right-0 rounded-cl'>
                  <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 border-green-600 bg-transparent hover:bg-green-200 text-green-600 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end'>
                    <Link href='/'>
                      <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='block sm:hidden'>
        {transitionAgendas.map((agenda) => (
          <Link key={agenda} href='/'>
            <div className='h-24 w-full rounded-cl bg-black-white-100 shadow my-6'>
              <div className='flex items-center justify-start'>
                <div className='h-24 w-24 relative'></div>
                <div className='text-black-white-800 pl-4'>
                  <h3 className='mobile sm:desktop'>{agenda}</h3>
                  <ArrowRightIcon
                    className='block h-4 w-4 text-green-600 mt-1'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
