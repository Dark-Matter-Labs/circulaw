import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function BetaBanner() {
  return (
    <div className='lgNav:w-52 rounded-b-[16px] px-3 flex items-center justify-center bg-[#E6E6E6]'>
      <div className='text-grey-800'>
        <h5 className='inline font-bold mobile sm:desktop'>Beta</h5>{' '}
        <h5 className='inline mobile sm:desktop font-normal'>versie - </h5>
        <h5 className='link-interaction inline underline mobile sm:desktop'>
          <Link href='/beta'>Lees meer </Link>
          <ArrowRightIcon className='h-3 w-3 inline' />
        </h5>
      </div>
    </div>
  );
}
