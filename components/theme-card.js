import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './custom-button';

{
  /* TO DO - fix bug on middle svg which does not resize */
}

export default function ThemeCard({ props, type }) {
  return (
    <div className='relative w-full overflow-hidden h-auto py-6 sm:py-10 md:py-0  '>
      <div className='grid grid-rows-6 border-transparent shadow-md rounded-md md:h-5/6 lg:h-[90%] max-w-[380px]'>
        <div className='row-span-3 bg-green-600 rounded-t-md'>
          <div className='gradient-pdf z-5 w-full rounded-t-md h-full flex items-center justify-center'>
            {type === 'list' && (
              <div className='w-5/6 h-5/6 relative'>
                <Image src='../list.svg' alt='' fill />
              </div>
            )}
            {type === 'samenhang' && (
              <div className='w-5/6 h-5/6 relative'>
                {' '}
                {/* cannot work out why this image is not resizing */}
                <Image src='../samenhang.svg' alt='' fill />
              </div>
            )}
            {type === 'waarvoor' && (
              <div className='w-5/6 h-5/6 relative'>
                <Image src='../waarvoor.svg' alt='' fill />
              </div>
            )}
          </div>
        </div>
        {type === 'list' && (
          <div className='row-span-3 px-10'>
            <h2 className='mobile sm:desktop pt-6'>{props.listTitle}</h2>
            <p className='body-new py-6'>{props.listText}</p>
          </div>
        )}
        {type === 'samenhang' && (
          <div className='row-span-3 px-10'>
            <h2 className='mobile sm:desktop pt-6'>{props.samenhangTitle}</h2>
            <p className='body-new py-6'>{props.samenhangText}</p>
          </div>
        )}
        {type === 'waarvoor' && (
          <div className='row-span-3 px-10'>
            <h2 className='mobile sm:desktop pt-6'>{props.waarvoorTitle}</h2>
            <p className='body-new py-6'>{props.waarvoorText}</p>
          </div>
        )}

        {type === 'list' && (
          <div className='pb-6 pl-8'>
            <Link href={props.cardLinkList}>
              <CustomButton color='whiteBackground'>
                <div>Naar de lijst</div>
                <span className='pl-2'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5  h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </CustomButton>
            </Link>
          </div>
        )}

        {type === 'samenhang' && (
          <div className='pb-6 pl-8'>
            <Link href={props.cardLinkSamenhang}>
              <CustomButton color='whiteBackground'>
                <div>Bekijk de samenhang</div>
                <span className='pl-2'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5  h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </CustomButton>
            </Link>
          </div>
        )}

        {type === 'waarvoor' && (
          <div className='pb-6 pl-8'>
            <Link href={props.cardLinkWaarvoor}>
              <CustomButton color='whiteBackground'>
                <div>Bekijk de bevoegdheden</div>
                <span className='pl-2'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5  h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </CustomButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
