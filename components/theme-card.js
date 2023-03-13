import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './custom-button';
import waarvoor from '../public/thema-card-background/waarvoor.svg';
import samenhang from '../public/thema-card-background/samenhang.svg';
import list from '../public/thema-card-background/list.svg';

export default function ThemeCard({ props, type }) {
  const cardData = props.thema;
  return (
    <div className='relative shadow rounded-md overflow-hidden h-auto my-6 md:py-0 md:h-5/6 lg:h-[95%] max-w-[380px] min-h-[550px] '>
      <div className='grid grid-rows-6 shadow rounded-md h-full w-full'>
        <div className='row-span-3 shadow rounded-t-md'>
          <div className=' shadow z-5 w-full rounded-t-md h-full flex items-center justify-center'>
            {type === 'list' && (
              <div className='bg-list-card bg-cover bg-center shadow z-5 w-full rounded-t-md h-full flex items-center justify-center'>
                <div className='w-5/6 h-5/6 relative'>
                  <Link href={cardData.listLink}>
                    <Image src={list} alt='' fill />
                  </Link>
                </div>
              </div>
            )}
            {type === 'samenhang' && (
              <div className='bg-samenhang-card bg-cover bg-center shadow z-5 w-full rounded-t-md h-full flex items-center justify-center'>
                <div className='w-5/6 h-5/6 relative'>
                  <Link href={cardData.samenhangLink}>
                    <Image src={samenhang} alt='' fill />
                  </Link>
                </div>
              </div>
            )}
            {type === 'waarvoor' && (
              <div className='bg-waarvoor-card bg-cover bg-center shadow z-5 w-full rounded-t-md h-full flex items-center justify-center'>
                <div className='w-5/6 h-5/6 relative'>
                  <Link href={cardData.welkeLink}>
                    <Image src={waarvoor} alt='' fill />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {type === 'list' && (
          <div className='row-span-3'>
            <Link href={cardData.listLink} className='w-full h-full'>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{props.listTitle}</h3>
                <p className='body-new py-6'>{cardData.listText}</p>
              </div>
            </Link>
          </div>
        )}
        {type === 'samenhang' && (
          <div className='row-span-3'>
            <Link href={cardData.samenhangLink} className='w-full h-full'>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{cardData.samenhangTitle}</h3>
                <p className='body-new py-6'>{cardData.samenhangText}</p>
              </div>
            </Link>
          </div>
        )}
        {type === 'waarvoor' && (
          <div className='row-span-3'>
            <Link href={cardData.welkeLink}>
              <div className='row-span-3 px-10'>
                <h3 className='mobile sm:desktop pt-6'>{cardData?.welkeTitle}</h3>
                <p className='body-new py-6'>{cardData?.welkeText}</p>
              </div>
            </Link>
          </div>
        )}

        {type === 'list' && (
          <Link href={cardData.listLink}>
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
          <Link href={cardData.samenhangLink}>
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
          <Link href={cardData.welkeLink}>
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
