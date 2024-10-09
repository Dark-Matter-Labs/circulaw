import Image from 'next/image';
import Link from 'next/link';

export default function ScrollyTellingPage() {
  return (
    <>
      <div>
        <div className='w-full bg-green-600 relative h-[260px] sm:h-[360px] mt-3 flex'>
          <Image
            src='/modeltext-header.png'
            alt='homepage decoration'
            fill
            sizes='100vw'
            className='z-10 object-cover'
            priority={true}
            quality={100}
          />
          <div className='z-20 w-full h-full global-margin flex flex-col justify-between'>
            <div className='pt-6 sm:pt-10'>
              <span className='p-2xs-bold align-middle rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                <Link
                  className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                  href='/'
                >
                  {' '}
                  Home <span className='ml-2'>{'>'}</span>
                </Link>
              </span>
            </div>
            <div className='mb-6 sm:mb-10 flex flex-col gap-2'>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>
                Circulair bouwen: meer effect met een mix van instrumenten
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='global-margin'></div>
    </>
  );
}
