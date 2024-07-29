import bannerImage from '@/public/banner.png';
import Image from 'next/image';
import Link from 'next/link';

// TODO: try and make these image load on the server/optimise them as they are slow
export default function ThemePageHeaderMobile({ pageTitle }) {
  return (
    <div className='h-[300px] mt-3 sm:hidden'>
      <div className='flex items-center h-full w-full relative z-0 object-cover'>
        <Image src={bannerImage} alt={'hero image'} fill className=' absolute' />
        <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

        <div className='w-full h-full z-10 flex flex-col justify-between global-margin'>
          <div>
            <div className='pt-8'>
              <Link
                className='rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group'
                href='/'
              >
                <span className='p-2xs-bold align-middle group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                  Home<span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
          </div>
          <div className='mb-6'>
            <div className='p-base-semibold text-green-300'>Productketen</div>
            <h1 className='heading-4xl-semibold text-gray-100 pb-1'>{pageTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
