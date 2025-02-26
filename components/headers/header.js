import Image from 'next/image';
import Link from 'next/link';

export default function Header({ imageURL, bgColor, title, pageType, subtitle}) {
    console.log(pageType)
  return (
    <div className={`${bgColor} global-margin`}>
      <div className='relative h-full w-full object-cover'>
        {imageURL && (
          <Image
            src={imageURL}
            alt='homepage decoration'
            fill
            sizes='100vw'
            className='object-cover'
            priority={true}
            quality={100}
          />
        )}
        <div className='absolute z-0 h-full w-full bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>
        <div className='z-5 relative flex flex-col justify-between'>
        {/* Breadcrumb */}
          <div className='pt-8 mb-20'>
            <Link
              className='group inline-flex flex-row items-center justify-center rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 text-green-500'
              href='/'
            >
              <span className='p-2xs-bold align-middle group-hover:text-green-400 group-focus:text-green-300 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>
          <div className='max-w-3xl pb-8'>
            <div className=''>
              <div className='p-base sm:heading-2xl-semibold text-green-400'>{subtitle}</div>
              <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-green-100'>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
