import Image from 'next/image';
import IcontWood from '../public/icons/houtbouwIconBg.svg';
import WindmillIcon from '../public/winturbines.svg';
import Link from 'next/link';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const viewportType = {
  desktop: 'block lg:hidden',
  mobile: 'hidden lg:block float-right',
};
export default function MeasureOverviewTest({ viewport, children, data, ...props }) {
  let viewportClasses = viewportType[viewport];
  return (
    <div {...props} className={`${viewportClasses}`}>
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
          <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()}>
            <a>
              <span className='font-openSans font-bold pl-2 text-greenLink first-letter:uppercase block'>
                {data?.measure?.thema}
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className='py-5 border-t-2 border-grey2 '>
        <div className='flex pb-2'>
          <span className='font-manrope font-semibold text-lg text-black1'>R-ladder</span>
          <RTooltip>
            <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
              <circle cx='12' cy='15' r='10' fill='#979797' />
              <path
                d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                fill='black'
              />
            </svg>
          </RTooltip>
        </div>
        <span className='block-inline font-semibold text-base text-gray-900'>
          {data?.measure?.rLadder.map((rValue) => (
            <span key={rValue} className='bg-green2 text-white rounded-full p-1 mr-2'>
              {rValue}
            </span>
          ))}
        </span>
      </div>

      <div className='py-5'>
        <div className='relative border-t-2 border-grey2 pt-4'>
          <div className='font-manrope font-semibold text-lg text-black1 pb-2'>Subrechtsgebied</div>
        </div>

        <div className='font-manrope font-normal text-base first-letter:capitalize'>
          <p>{data?.measure?.subrechtsgebied}</p>
        </div>
      </div>

      <div className='py-5'>
        <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
          <div className='flex pb-2'>
            <span className='font-manrope font-semibold text-lg text-black1'>
              Juridisch invloed
            </span>
            <JITooltip>
              <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                <circle cx='12' cy='15' r='10' fill='#979797' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='black'
                />
              </svg>
            </JITooltip>
          </div>
        </div>

        <div className='mt-3 flex items-center'>
          <span className='pr-4 font-manrope font-normal text-base'>LAAG</span>
          {[0, 1, 2].map((rating) => (
            <div
              key={rating}
              className={classNames(
                Number(data?.measure?.juridischInvloed) > rating ? 'score-true' : 'score-false',
                'mr-4 h-6 w-6 flex-shrink-0 rounded-full',
              )}
              aria-hidden='true'
            />
          ))}
          <span className='font-manrope font-normal text-base'>HOOG</span>
        </div>
      </div>

      <div className='py-5'>
        <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
          <div className='flex pb-2'>
            <span className='font-manrope font-semibold text-lg text-black1 '>
              Juridisch houdbaarheid
            </span>
            <JHTooltip>
              <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                <circle cx='12' cy='15' r='10' fill='#979797' />
                <path
                  d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                  fill='black'
                />
              </svg>
            </JHTooltip>
          </div>
        </div>

        <div className='mt-3 flex items-center w-10/12'>
          <span className='pr-4 font-manrope font-normal text-base'> LAAG</span>
          {[0, 1, 2].map((rating) => (
            <span
              key={rating}
              className={classNames(
                Number(data?.measure?.juridischHaalbaarheid) > rating ? 'score-true' : 'score-false',
                'mr-4 h-6 w-6 flex-shrink-0 rounded-full',
              )}
              aria-hidden='true'
            />
          ))}
          <span className='font-manrope font-normal text-base'>HOOG</span>
        </div>
      </div>
    </div>
  );
}
