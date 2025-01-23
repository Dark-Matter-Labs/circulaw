import StatusThreeStep from './status/status-three-step';
import StatusTwoStep from './status/status-two-step';
import Link from 'next/link';

export default function EULawCard({ law }) {
  return (
    <>
      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='hidden h-full md:block'>
        <div className='group flex h-full flex-col'>
          <div className='h-full rounded-cl border bg-gray-100 shadow-md transition-all duration-300 group-hover:bg-green-50'>
            <div className='z-10 flex h-full flex-col justify-between'>
              <h3 className='heading-2xl-semibold min-h-[85px] p-4'>{law?.title}</h3>
              {/* STATUS bar */}
              <div>
                <div className='mb-2 mt-4 flex max-h-[100px] w-full grow items-center justify-center px-4'>
                  {law.statusStep === 'Two Step' && <StatusTwoStep status={law.statusTwoStep} />}
                  {law.statusStep === 'Three Step' && (
                    <StatusThreeStep status={law.statusThreeStep} />
                  )}
                </div>
              </div>
              <div className='p-base-semibold flex h-full min-h-[42px] items-center justify-center rounded-b-cl bg-green-50 text-green-500'>
                Bekijk deze wet {'>'}
              </div>
            </div>
          </div>
          <div className='gradient-600 -z-10 h-[20px] w-full -translate-y-[20px] rounded-b-cl transition-all duration-300 group-hover:-translate-y-[10px]'></div>
        </div>
      </Link>

      <Link href={`/eu-wetgeving/${law?.slug?.current}`} className='block md:hidden'>
        <div className='flex h-full flex-col rounded-cl border px-5 py-6'>
          <h3 className='heading-2xl-semibold mb-2'>{law?.title}</h3>
          <p className='p-base border-b pb-6'>{law?.introText}</p>
          <div className='pb-4'>
            <div className='p-base-semibold my-4'>Status</div>

            <div className='flex items-center justify-center'>
              {law.statusStep === 'Two Step' && <StatusTwoStep status={law.statusTwoStep} />}
              {law.statusStep === 'Three Step' && <StatusThreeStep status={law.statusThreeStep} />}
            </div>
          </div>

          <div className='p-base-semibold flex items-center justify-center border-t pt-4'>
            Bekijk deze wet {'>'}
          </div>
        </div>
      </Link>
    </>
  );
}
