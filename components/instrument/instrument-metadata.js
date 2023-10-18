import RTooltip from '../tooltip-r-ladder';
import JHTooltip from '../tooltip-juridische-houdbaarheid';
import JITooltip from '../tooltip-juridische-invloed';

export default function InstrumentMetaData({ data }) {
  return (
    <>
      <div className='hidden sm:block'>
        <div className='h-auto border-b border-t mb-6 flex flex-row justify-between items-center justify-self-center py-1'>
          <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>Juridische houdbaarheid</h4>
            <div className='flex items-center'>
              <h5 className='mobile sm:desktop text-green-500 pr-2'>
                {data?.measure?.juridischeHaalbaarheid}
                {data?.juridischeHaalbaarheid}
              </h5>
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
          <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>Invloed</h4>
            <div className='flex items-center'>
              <h5 className='mobile sm:desktop text-green-500 pr-2'>
                {data?.measure?.juridischInvloed}
                {data?.juridischInvloed}
              </h5>
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
          <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>Overheidslaag</h4>
            <h5 className='mobile sm:desktop text-green-500'>
              {data?.measure?.overheidslaag?.map((level) => (
                <span key={level} className=''>
                  {level} {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
              {data?.overheidslaag?.map((level) => (
                <span key={level} className=''>
                  {level} {data?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
            </h5>
          </div>
          <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>R-ladder</h4>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.measure?.rLadder?.map((rValue) => (
                  <h5 key={rValue} className='text-green-500 mobile sm:desktop'>
                    {rValue} {data?.measure?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </h5>
                ))}
                {data?.rLadder?.map((rValue) => (
                  <h5 key={rValue} className='text-green-500 mobile sm:desktop'>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </h5>
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
        <div
          className='flex flex-col sm:flex-row justify-between h-auto sm:h-[4.5rem] py-1 border-t border-grey-500'
        >
          <div className='flex flex-col justify-center border-b border-grey-500 pb-2'>
            <h4 className='mobile sm:desktop sm:py-1 text-grey-600'>Juridische houdbaarheid</h4>
            <div className='flex items-center'>
              <h5 className='mobile sm:desktop text-green-500 pr-2'>
                {data?.measure?.juridischeHaalbaarheid}
                {data?.juridischeHaalbaarheid}
              </h5>
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
          <div className='flex flex-col justify-center border-b border-grey-500 pb-2'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>Invloed</h4>
            <div className='flex items-center'>
              <h5 className='mobile sm:desktop text-green-500 pr-2'>
                {data?.measure?.juridischInvloed}
                {data?.juridischInvloed}
              </h5>
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
        <div
          className='border-b border-grey-500 flex h-[4.5rem] py-1'>
          <div className='flex flex-col justify-center'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>Overheidslaag</h4>
            <h5 className='mobile sm:desktop text-green-500'>
              {data?.measure?.overheidslaag?.map((level) => (
                <span key={level} className=''>
                  {level} {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
              {data?.overheidslaag?.map((level) => (
                <span key={level} className=''>
                  {level} {data?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                  &nbsp;
                </span>
              ))}
            </h5>
          </div>
        </div>
        <div className='flex h-[4.5rem] py-1 border-b border-grey-500'>
          <div className='flex flex-col justify-center'>
            <h4 className='mobile sm:desktop py-1 text-grey-600'>R-ladder</h4>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.measure?.rLadder?.map((rValue) => (
                  <h5 key={rValue} className='text-green-500 mobile sm:desktop'>
                    {rValue} {data?.measure?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </h5>
                ))}
                {data?.rLadder?.map((rValue) => (
                  <h5 key={rValue} className='text-green-500 mobile sm:desktop'>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </h5>
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
