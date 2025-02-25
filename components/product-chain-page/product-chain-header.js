import Image from 'next/image';
import Link from 'next/link';

// TODO: try and make these image load on the server/optimise them as they are slow
export default function ThemePageHeader({ pageTitle }) {
  return (
    <div className='block h-[260px] w-full sm:h-[360px]'>
      <div className='relative mt-3 h-full w-full bg-green-500 object-cover'>
        <Image
          src='/modeltext-header.png'
          alt='homepage decoration'
          fill
          sizes='100vw'
          className='object-cover'
          priority={true}
          quality={100}
        />
        <div className='absolute z-0 h-full w-full bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>
        <div className='global-margin z-5 relative flex h-[260px] flex-col justify-between sm:h-[360px]'>
          <div className='pt-8'>
            <Link
              className='group inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-500'
              href='/'
            >
              <span className='p-2xs-bold align-middle group-hover:text-green-400 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>
          <div className='max-w-3xl pb-8'>
            <div className=''>
              <div className='p-base sm:heading-2xl-semibold text-green-400'>Productketen</div>
              <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-gray-100'>
                {pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
