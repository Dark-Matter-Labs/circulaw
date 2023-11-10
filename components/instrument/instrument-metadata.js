import { useRouter } from 'next/router';
import RTooltip from '../tooltip-r-ladder';
import JHTooltip from '../tooltip-juridische-houdbaarheid';
import JITooltip from '../tooltip-juridische-invloed';

export default function InstrumentMetaData({ data }) {
  const router = useRouter();

  return (
    <>
      <div className='hidden sm:block'>
        <div
          className={`${
            (router.pathname === '/measures/houtbouw') |
            (router.pathname === '/measures/windturbines') |
            (router.pathname === '/measures/matrassen')
              ? 'border-y border-gray-300'
              : 'pt-5 pb-3'
          } h-auto flex flex-row gap-x-6 grow-0 items-center justify-self-center max-w-[860px]`}
        >
          <div className='flex flex-col basis-houdbaarheid'>
            <div className='p-xs-semibold text-grey-600'>Juridische houdbaarheid</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.measure?.juridischeHaalbaarheid}
                {data?.juridischeHaalbaarheid}
              </div>
              {data?.measure?.slug && (
                <JHTooltip data={data}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#676868' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#FDFDFD'
                    />
                  </svg>
                </JHTooltip>
              )}
            </div>
          </div>
          <div className='flex flex-col basis-invloed'>
            <div className='p-xs-semibold text-grey-600'>Invloed</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.measure?.juridischInvloed}
                {data?.juridischInvloed}
              </div>
              {data?.measure?.slug && (
                <JITooltip data={data}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#676868' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#FDFDFD'
                    />
                  </svg>
                </JITooltip>
              )}
            </div>
          </div>
          <div className='flex flex-col basis-overheidslaag'>
            <div className='p-xs-semibold text-grey-600'>Overheidslaag</div>
            <div className='p-xs-semibold text-green-500'>
              {data?.measure?.overheidslaag?.filter(x => x !== null).map((level) => (
                <span key={level} className=''>
                  {level} {data?.measure?.overheidslaag?.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
              {data?.overheidslaag?.filter(x => x !== null).map((level) => (
                <span key={level} className=''>
                  {level} {data?.overheidslaag?.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
            </div>
          </div>
          <div className='flex flex-col basis-rladder'>
            <div className='p-xs-semibold text-grey-600'>R-ladder</div>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.measure?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500 '>
                    {rValue} {data?.measure?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500 '>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.measure?.slug && (
                  <RTooltip>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-2'
                    >
                      <circle cx='12' cy='15' r='12' fill='#676868' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='#FDFDFD'
                      />
                    </svg>
                  </RTooltip>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className='flex flex-col sm:hidden justify-center mb-4'>
        <div className='flex flex-row justify-between h-auto py-2 border-b border-t-2 border-grey-400'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold sm:py-1 text-grey-600'>Juridische houdbaarheid</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.measure?.juridischeHaalbaarheid}
                {data?.juridischeHaalbaarheid}
              </div>
              {data?.measure?.slug && (
                <JHTooltip data={data}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#676868' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#FDFDFD'
                    />
                  </svg>
                </JHTooltip>
              )}
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-grey-600'>Invloed</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.measure?.juridischInvloed}
                {data?.juridischInvloed}
              </div>
              {data?.measure?.slug && (
                <JITooltip data={data}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#676868' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#FDFDFD'
                    />
                  </svg>
                </JITooltip>
              )}
            </div>
          </div>
        </div>
        <div className='border-b border-grey-400 flex h-auto py-2'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-grey-600'>Overheidslaag</div>
            <div className='p-xs-semibold text-green-500'>
              {data?.measure?.overheidslaag?.filter(x => x !== null).map((level) => (
                <span key={level} className=''>
                  {level} {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
              {data?.overheidslaag?.filter(x => x !== null).map((level) => (
                <span key={level} className=''>
                  {level} {data?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='flex py-2 border-b-2 border-grey-400'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-grey-600'>R-ladder</div>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.measure?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500'>
                    {rValue} {data?.measure?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500'>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.measure?.slug && (
                  <RTooltip>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-2'
                    >
                      <circle cx='12' cy='15' r='12' fill='#676868' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='#FDFDFD'
                      />
                    </svg>
                  </RTooltip>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
