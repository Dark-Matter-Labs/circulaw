import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LangSwitch({ background }) {
  const router = useRouter();
  return (
    <div
      className={`${
        background === 'dark' ? 'text-grey-100' : 'text-green-800'
      } flex justify-center items-center`}
    >
      <span
        className={`${background === 'dark' ? 'link-interaction-dark-bg' : 'link-interaction'}`}
      >
        <Link className={router.pathname === '/en' ? '' : 'font-semibold'} href='/'>
          NL
        </Link>
      </span>
      <span className='px-1 enLink'>|</span>
      <span
        className={`${background === 'dark' ? 'link-interaction-dark-bg' : 'link-interaction'}`}
      >
        <Link className={router.pathname === '/en' ? 'font-semibold' : ''} href='/en'>
          EN
        </Link>
      </span>
    </div>
  );
}
