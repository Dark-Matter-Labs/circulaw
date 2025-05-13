import Link from 'next/link';

import { IconArrowRight } from '@tabler/icons-react';

export default function BetaBanner() {
  return (
    <div className='flex items-center justify-center rounded-b-[16px] bg-[#E6E6E6] px-3 lgNav:w-52'>
      <div className='text-cl-black'>
        <h5 className='p-2xs-bold sm:p-xs-bold inline'>Beta</h5>{' '}
        <h5 className='p-2xs sm:p-xs inline'>versie - </h5>
        <h5 className='link-interaction p-2xs sm:p-xs inline underline'>
          <Link href='/beta'>Lees meer </Link>
          <IconArrowRight className='inline h-4 w-4' />
        </h5>
      </div>
    </div>
  );
}
