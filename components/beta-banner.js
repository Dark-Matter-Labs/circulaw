import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function BetaBanner() {
  return (
    <div className='w-52 rounded-b-[16px] px-2 flex items-center justify-center bg-[#E6E6E6]'>
      <div
        className='text-black-white-800'>
        <h5 className='inline bold'>Beta</h5> <h5 className='inline mobile'>versie - </h5>
        <h5 className='link-interaction inline underline mobile'>
          <Link href='/beta'>Lees meer </Link>
          <ArrowRightIcon className='h-3 w-3 inline' />
        </h5>
      </div>
    </div>
  );
}
