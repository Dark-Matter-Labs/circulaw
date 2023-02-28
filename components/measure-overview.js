import Image from 'next/image';
import Link from 'next/link';

import IconWood from '../public/icons/woodIcon.svg';
import WindmillIcon from '../public/icons/windmill.png';
import MatrassenIcon from '../public/icons/matressIcon.svg';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';

const viewportType = {
  mobile: 'block sm:hidden bg-black-white-200 h-[26rem] pb-12 my-4 bg-black-white-200',
  desktop:
    'hidden sm:block float-right px-8 ml-6 bg-black-white-200 h-[26rem] sticky top-40 mb-20 bg-black-white-200',
};

export default function MeasureOverview({ viewport, children, data, ...props }) {
  let viewportClasses = viewportType[viewport];
  return (
    <div {...props} className={`${viewportClasses}`}>
      <div className='px-8 pb-10 sm:pb-0 sm:px-0 py-6 block h-[26rem]'>
        {children}

        <div className='container pb-12 sm:pb-1 flex justify-between'>
          <div className=''>
            <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()} passHref>
              <h2 className='link-base text-green-500 first-letter:uppercase block underline'>
                {data?.measure?.thema.replace('-', ' ')}
              </h2>
            </Link>
          </div>
          {data?.measure?.thema === 'houtbouw' && (
            <div className='container-image h-10 w-10'>
              <Image src={IconWood} alt='Icon of a Wood Log' />
            </div>
          )}
          {data?.measure?.thema === 'circulaire-windturbines' && (
            <div className='container-image h-10 w-10'>
              <Image src={WindmillIcon} alt='Icon of a Wood Log' />
            </div>
          )}
          {data?.measure?.thema === 'matrassen' && (
            <div className='container-image h-10 w-10'>
              <Image src={MatrassenIcon} alt='Icon of a Wood Log' />
            </div>
          )}
        </div>
        <div className='-mt-8 sm:mt-0 pt-2 pb-1 border-t border-black-white-600'>
          <div className='flex pb-2 justify-between items-center'>
            <div className='flex justify-left items-center'>
              <h5 className='text-black-white-500 pr-3 mobile sm:desktop'>R-ladder</h5>
              <RTooltip>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#1F2223'
                  />
                </svg>
              </RTooltip>
            </div>
          </div>
          <span className='block-inline grid grid-rows-1 grid-cols-6 w-5/6 sm:w-full lg:w-5/6'>
            {data?.measure?.rLadder.map((rValue) => (
              <h5
                key={rValue}
                className='bg-green-500 text-black-white-200 mr-2 rounded-full p-1 h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center mobile sm:desktop'
              >
                {rValue}
              </h5>
            ))}
          </span>
        </div>

        <div className='pt-2 pb-1'>
          <div className='relative border-t border-black-white-600 '>
            <h5 className='text-black-white-500 mobile sm:desktop py-2'>Subrechtsgebied</h5>
          </div>

          <div className='p-lg pb-2 first-letter:capitalize flex items-center justify-start'>
            <h5 className='px-2 mobile sm:desktoop border rounded-md border-black-white-300 bg-black-white-300 text-black-white-800'>
              {data?.measure?.subrechtsgebied}
            </h5>
          </div>
        </div>

        <div className=' pb-1'>
          <div className='relative flex justify-between border-t border-black-white-600'>
            <div className='flex'>
              <h5 className='text-black-white-500 mobile sm:desktop py-2 pr-3'>Invloed</h5>
              <JITooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#1F2223'
                  />
                </svg>
              </JITooltip>
            </div>
          </div>

          <div className='flex items-center'>
            <h4 className='mobile sm:desktop text-green-500 uppercase'>
              {data?.measure?.juridischInvloed}
            </h4>
          </div>
        </div>

        <div className='pb-1 border-b border-black-white-600'>
          <div className='relative flex justify-between border-t border-black-white-600'>
            <div className='flex'>
              <h5 className='text-black-white-500 mobile sm:desktop py-2 pr-3'>
                Juridische haalbaarheid
              </h5>
              <JHTooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#1F2223'
                  />
                </svg>
              </JHTooltip>
            </div>
          </div>
          <div className='flex items-center w-10/12'>
            <h4 className='mobile sm:desktop text-green-500 uppercase'>
              {data?.measure?.juridischeHaalbaarheid}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
