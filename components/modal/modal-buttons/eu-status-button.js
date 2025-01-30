import StatusThreeStep from '@/components/eu-law/status/status-three-step';
import StatusTwoStep from '@/components/eu-law/status/status-two-step';
import { IconArrowRight } from '@tabler/icons-react';

export default function EULawButton({ lawData }) {
  return (
    <div className='group flex flex-col gap-6 rounded-cl border p-4 shadow-card sm:max-w-[380px]'>
      <h3 className='heading-2xl-semibold'>Status</h3>
      <div>
        {' '}
        {lawData?.statusStep === 'Two Step' && <StatusTwoStep status={lawData?.statusTwoStep} />}
        {lawData?.statusStep === 'Three Step' && (
          <StatusThreeStep status={lawData?.statusThreeStep} />
        )}
      </div>
      <div className='p-base-semibold flex flex-row items-center justify-start text-green-600 group-hover:text-green-300'>
        <div>Bekijk de tijdlijn van deze regelgeving</div>{' '}
        <IconArrowRight className='ml-1 h-5 w-5' />
      </div>
    </div>
  );
}
