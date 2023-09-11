import RTooltip from './r-ladder-tooltip';
import JHTooltip from './juridische-houdbaarheid-tooltip';
import JITooltip from './juridische-invloed-tooltip';

export default function InstrumentMetaData({ data }) {
  console.log(data);
  return (
    <div className='sm:grid-cols-1 md:grid-cols-1 hidden sm:grid'>
      <div className='h-auto border-b border-t mb-6 flex flex-row justify-between items-center w-11/12 max-w-[854px] justify-self-center '>
        <div className='flex flex-col'>
          <h4 className='mobile sm:desktop py-1 text-black-white-600'>Juridische houdbaarheid</h4>
          <div className='flex items-center'>
          <h5 className='mobile sm:desktop text-green-500 pr-2'>
            {data?.measure?.juridischeHaalbaarheid}
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
        <div className='flex flex-col'>
          <h4 className='mobile sm:desktop py-1 text-black-white-600'>Invloed</h4>
          <div className='flex items-center'>

          <h5 className='mobile sm:desktop text-green-500 pr-2'>{data?.measure?.juridischInvloed}</h5>

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
        <div className='flex flex-col'>
          <h4 className='mobile sm:desktop py-1 text-black-white-600'>Overheidslaag</h4>
          <h5 className='mobile sm:desktop text-green-500'>
            {data?.measure?.overheidslaag?.map((level) => (
              <span key={level} className=''>
                {level} {data?.measure?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                &nbsp;
              </span>
            ))}
          </h5>
        </div>
        <div className='flex flex-col'>
          <h4 className='mobile sm:desktop py-1 text-black-white-600'>R-ladder</h4>
          <div className='flex items-center'>
            <div className='flex flex-row items-center'>
              {data?.measure?.rLadder.map((rValue) => (
                <h5 key={rValue} className='text-green-500 mobile sm:desktop'>
                  {rValue} {data?.measure?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                  &nbsp;
                </h5>
              ))}
            
            <RTooltip>
              <svg
                width='24'
                height='30'
                viewBox='0 0 24 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='ml-2'
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
        </div>
      </div>
    </div>
  );
}
