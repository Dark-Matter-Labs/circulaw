import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='lgNav:w-52 rounded-b-[16px] px-3 flex items-center justify-center bg-[#E6E6E6]'>
      <div className='text-gray-800'>
        <h5 className='inline p-2xs-bold sm:p-xs-bold'>Beta</h5>{' '}
        <h5 className='inline p-2xs sm:p-xs'>versie - </h5>
        <h5 className='link-interaction inline underline p-2xs sm:p-xs'>
          <Link href='/beta'>Lees meer </Link>
          <IconArrowRight className='h-4 w-4 inline' />
        </h5>
      </div>
    </div>
  );
}
