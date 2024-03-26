import Link from 'next/link';
import StatusThreeStep from './status/status-three-step';
import StatusTwoStep from './status/status-two-step';

export default function EULawCard({ law }) {
  return (
    <>
      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='hidden md:block h-full'>
        <div className='flex flex-col group h-full'>
          <div className='bg-gray-100 group-hover:bg-green-50 rounded-cl shadow-md  px-4 py-6 duration-300 transition-all border h-full'>
            <div className='flex flex-col h-full z-10'>
              <h2 className='p-5xl-semibold mb-4'>{law?.title}</h2>
              <p className='p-base pb-6 border-b flex grow justify-center items-center'>
                {law?.introText}
              </p>
              {/* STATUS bar */}
              <div>
                <div className='p-xs-semibold text-gray-800 mt-6'>Status</div>
                <div className='w-full flex justify-center items-center grow'>
                  {law.statusStep === 'Two Step' && <StatusTwoStep status={law.statusTwoStep} />}
                  {law.statusStep === 'Three Step' && (
                    <StatusThreeStep status={law.statusThreeStep} />
                  )}
                </div>
              </div>
              <div className='flex items-center justify-center pt-6 border-t p-base-semibold'>
                Bekijk deze wet {'>'}
              </div>
            </div>
          </div>
          <div className='gradient-600 h-[20px] -translate-y-[20px] group-hover:-translate-y-[10px] -z-10 w-full rounded-b-cl transition-all duration-300'></div>
        </div>
      </Link>

      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='block md:hidden'>
        <div className='border rounded-cl h-full py-6 px-5 flex flex-col'>
          <h2 className='p-5xl-semibold mb-2'>{law?.title}</h2>
          <p className='p-base pb-6 border-b'>{law?.introText}</p>
          <div className='pb-4'>
            <div className='p-lg-semibold my-4'>Status</div>

            <div className='flex items-center justify-center'>
              {law.statusStep === 'Two Step' && <StatusTwoStep status={law.statusTwoStep} />}
              {law.statusStep === 'Three Step' && <StatusThreeStep status={law.statusThreeStep} />}
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


