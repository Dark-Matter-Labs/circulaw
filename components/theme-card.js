import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './custom-button';

export default function ThemeCard({ props, type }) {
  return (
    <div className='relative shadow rounded-md overflow-hidden h-auto my-6 md:py-0 md:h-5/6 lg:h-[95%] max-w-[380px] min-h-[550px] '>
      <div className='grid grid-rows-6 shadow rounded-md h-full w-full'>
        <div className='row-span-3 shadow bg-green-600 rounded-t-md'>
          <div className='gradient-pdf shadow z-5 w-full rounded-t-md h-full flex items-center justify-center'>
            {type === 'list' && (
              <div className='w-5/6 h-5/6 relative'>
                <Link href={props.cardLinkList}>
                  <Image src='../list.svg' alt='' fill />
                </Link>
              </div>
            )}
            {type === 'samenhang' && (
              <div className='w-5/6 h-5/6 relative'>
                <Link href={props.cardLinkSamenhang}>
                  <Image src='../samenhang.svg' alt='' fill />
                </Link>
              </div>
            )}
            {type === 'waarvoor' && (
              <div className='w-5/6 h-5/6 relative'>
                <Link href={props.cardLinkWaarvoor}>
                  <Image src='../waarvoor.svg' alt='' fill />
                </Link>
              </div>
            )}
          </div>
        </div>
        {type === 'list' && (
          <div className='row-span-3'>
            <Link href={props.cardLinkList} className='w-full h-full'>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{props.listTitle}</h3>
                <p className='body-new py-6'>{props.listText}</p>
              </div>
            </Link>
          </div>
        )}
        {type === 'samenhang' && (
          <div className='row-span-3'>
            <Link href={props.cardLinkSamenhang} className='w-full h-full'>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{props.samenhangTitle}</h3>
                <p className='body-new py-6'>{props.samenhangText}</p>
              </div>
            </Link>
          </div>
        )}
        {type === 'waarvoor' && (
          <div className='row-span-3'>
            <Link href={props.cardLinkWaarvoor}>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{props.waarvoorTitle}</h3>
                <p className='body-new py-6'>{props.waarvoorText}</p>
              </div>
            </Link>
          </div>
        )}

        {type === 'list' && (
          <Link href={props.cardLinkList}>
            <div className='pb-6 pl-8'>
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
            </div>
          </Link>
        )}

        {type === 'samenhang' && (
          <Link href={props.cardLinkSamenhang}>
            <div className='pb-6 pl-8'>
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
            </div>
          </Link>
        )}

        {type === 'waarvoor' && (
          <Link href={props.cardLinkWaarvoor}>
            <div className='pb-6 pl-8'>
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
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
