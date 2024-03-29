// import { urlFor } from '@/lib/sanity';
import bannerImage from '@/public/banner.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemePageHeader({ pageTitle }) {
  return (
    <div className='hidden sm:block w-full h-[360px]'>
      <div className='relative object-cover w-full h-full mt-3'>
        <Image src={bannerImage} alt={'hero image'} fill className='z-0 bg-cover' priority />
        <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

        <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
          <div className='pt-8'>
            <Link
              className='rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group'
              href='/'
            >
              <span className='p-2xs-bold align-middle group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>

          <div className='pb-8 max-w-3xl'>
            <div className=''>
              <div className='heading-2xl-semibold text-green-300'>Productketen</div>
              <h1 className='heading-5xl-semibold text-gray-100 inline-block'>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
