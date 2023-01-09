import Image from 'next/image';
import IcontWood from '../public/icons/houtbouwIconBg.svg';
import WindmillIcon from '../public/winturbines.svg';
import Link from 'next/link';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';

const viewportType = {
  mobile: 'block lg:hidden',
  desktop: 'hidden lg:block float-right pl-4 pr-28 gradient-overview h-[38rem]',
};
export default function MeasureOverview({ viewport, children, data, ...props }) {
  let viewportClasses = viewportType[viewport];
  return (
    <div {...props} className={`${viewportClasses}`}>
      <div className='py-12 block h-[38rem]'>
        {children}
        <div className='container pb-2'>
          {data?.measure?.thema === 'houtbouw' ? (
            <div className='container-image'>
              <Image src={IcontWood} alt='Icon of a Wood Log' />
            </div>
          ) : (
            <div className='container-image'>
              <Image src={WindmillIcon} alt='Icon of a Wood Log' />
            </div>
          )}
          <div className=''>
            <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()} passHref>
                <span className='overview-thema underline pl-2 text-green1 first-letter:uppercase block'>
                  {data?.measure?.thema}
                </span>
            </Link>
          </div>
        </div>

        <div className='pt-5 pb-1 border-t border-grey1'>
          <div className='flex pb-2 justify-left items-center'>
            <span className='overview-titles text-black1 pr-3'>R-ladder</span>
            <RTooltip>
              <svg
                width='24'
                height='30'
                viewBox='0 0 24 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='12' cy='15' r='12' fill='#676868' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='#F8FAF8'
                />
              </svg>
            </RTooltip>
          </div>
          <span className='block-inline grid grid-rows-1 grid-cols-6 w-4/5'>
            {data?.measure?.rLadder.map((rValue) => (
              <span
                key={rValue}
                className='bg-green1 text-white1 r-category rounded-full p-1 mr-2 h-8 w-8 flex justify-center items-center'
              >
                {rValue}
              </span>
            ))}
          </span>
        </div>

        <div className='pt-5 pb-1'>
          <div className='relative border-t border-grey1 pt-4'>
            <div className='overview-titles text-black1 py-2'>Subrechtsgebied</div>
          </div>

          <div className='overview-text first-letter:capitalize'>
            <p>{data?.measure?.subrechtsgebied}</p>
          </div>
        </div>

        <div className='pt-5 pb-1'>
          <div className='relative flex justify-between border-t border-grey1 pt-2'>
            <div className='flex py-2'>
              <span className='overview-titles text-black1 py-2 pr-3'>Juridisch invloed</span>
              <JITooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#676868' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#F8FAF8'
                  />
                </svg>
              </JITooltip>
            </div>
          </div>

          <div className='flex items-center'>
            <span className='overview-text border border-black rounded-xl uppercase px-2'>
              {data?.measure?.juridischInvloed}
            </span>
          </div>
        </div>

        <div className='pt-5 pb-5 border-b border-grey1'>
          <div className='relative flex justify-between border-t border-grey1 pt-2'>
            <div className='flex py-2'>
              <span className='overview-titles text-black1 py-2 pr-3'>Juridisch houdbaarheid</span>
              <JHTooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#676868' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#F8FAF8'
                  />
                </svg>
              </JHTooltip>
            </div>
          </div>
          <div className='flex items-center w-10/12'>
            <span className='overview-text border border-black rounded-xl px-2 uppercase'>
              {data?.measure?.juridischeHaalbaarheid}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
