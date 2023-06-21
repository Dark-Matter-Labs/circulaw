import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function BetaBanner({ scrollEffect }) {
  const router = useRouter()
  return (
    <div
      className={`${
        scrollEffect
          ? 'bg-transparent transition-colors duration-300'
          : 'bg-[#E6E6E6] transition-colors duration-300'
      } w-52 rounded-b-[16px] px-2 flex items-center justify-center`}
    >
      <div
        className={`${
          scrollEffect
            ?  `${router.pathname === '/' ? 'text-green-600' : 'text-black-white-200'} transition-colors duration-300`
            : 'text-black-white-800 transition-colors duration-300'
        }`}
      >
        <h5 className='inline bold'>Beta</h5> <h5 className='inline mobile'>versie - </h5>
        <h5 className={`${scrollEffect ? '' : 'link-interaction'} inline underline mobile`}>
          <Link href='/beta'>Lees meer </Link>
          <ArrowRightIcon className='h-3 w-3 inline' />
        </h5>
      </div>
    </div>
  );
}
