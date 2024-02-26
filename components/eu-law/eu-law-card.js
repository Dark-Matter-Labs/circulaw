import Link from 'next/link';
import Image from 'next/image';
import mobileStatus from '@/public/mobile.svg';

export default function EULawCard({ law }) {
  return (
    <>
      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='hidden sm:block'>
        <div className='flex flex-col group h-[516px]'>
          <div className='bg-grey-100 group-hover:bg-grey-150 rounded-cl shadow-md min-w-[460px] px-4 pb-6 pt-10 duration-300 transition-all border h-[506px] group-hover:h-[490px] group-hover:translate-y-[16px]'>
            <div className='group-hover:-translate-y-[16px] transition-all duration-300 z-10'>
              <h2 className='p-5xl-semibold mb-4'>{law?.title}</h2>
              <p className='p-base pb-6 border-b'>{law?.introText}</p>
              {/* STATUS bar */}
              <div>
                <div className='p-xs-semibold text-grey-800 my-6'>Status</div>
                <div className='w-full flex justify-center grow'>
                  <div className='p-base pt-6 pb-12 w-full'>
                    <div class='flex items-center w-10/12 mx-auto'>
                      <span class='bg-grey-100 border-[6px] border-green-500 rounded-full h-8 w-8'></span>
                      <div class='flex-1 border-t-2 border-green-500 mx-2'></div>
                      <span class='bg-grey-100 border-[6px] border-green-500 rounded-full h-8 w-8'></span>
                      <div class='flex-1 border-t-2 border-green-500 mx-2 border-dashed'></div>
                      <span class='bg-grey-100 border-[6px] border-grey-400 rounded-full h-8 w-8'></span>
                      <div class='flex-1 border-t border-grey-400 mx-2'></div>
                      <span class='bg-grey-100 border-[6px] border-grey-400 rounded-full h-8 w-8'></span>
                    </div>
                    <div class='flex items-center pt-4'>
                      <span class='text-grey-100 w-[132px] bg-green-500 p-2xs-semibold flex items-center justify-center px-1 py-1 rounded-cl'>
                        {' '}
                        Voorgesteld
                      </span>
                      <div class='flex-1'></div>
                      <span class='text-grey-100 w-[132px] bg-green-500 p-2xs-semibold flex items-center justify-center px-1 py-1 rounded-cl whitespace-nowrap	'>
                        In onderhandeling
                      </span>
                      <div class='flex-1'></div>
                      <span class='text-grey-800 w-[132px] bg-grey-200 p-2xs-semibold flex items-center justify-center px-1 py-1 rounded-cl'>
                        Aangenomen
                      </span>
                      <div class='flex-1'></div>
                      <span class='text-grey-800 w-[132px] bg-grey-200 p-2xs-semibold flex items-center justify-center px-1 py-1 rounded-cl'>
                        Doorgezet
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center pt-6 border-t p-base-semibold'>
                Bekijk deze wet {'>'}
              </div>
            </div>
          </div>
          <div className='gradient-eu-card h-[20px] -translate-y-[20px] group-hover:translate-y-[4px] -z-10 w-full rounded-b-cl transition-all duration-300'></div>
        </div>
      </Link>

      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='block sm:hidden'>
        <div className='border rounded-cl h-full py-6 px-5 flex flex-col'>
          <h2 className='p-5xl-semibold mb-2'>{law?.title}</h2>
          <p className='p-base pb-6 border-b'>{law?.introText}</p>
          <div className='pb-4'>
            <div className='p-lg-semibold my-4'>Status</div>

            <div className='flex items-center justify-center'>
              {/* need to export all potential components and conditionally render them based on status */}
              <Image src={mobileStatus} alt='' />
            </div>
          </div>

          <div className='flex items-center justify-center pt-4 border-t p-base-semibold'>
            Bekijk deze wet {'>'}
          </div>
        </div>
      </Link>
    </>
  );
}
