import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LangSwitch({ background }) {
  const pathname = usePathname();
  return (
    <div
      className={`${
        background === 'dark' ? 'text-gray-100' : 'text-green-800'
      } flex justify-center items-center`}
    >
      <span
        className={`${background === 'dark' ? 'link-interaction-dark-bg' : 'link-interaction'}`}
      >
        <Link className={pathname === '/en' ? '' : 'font-semibold'} href='/'>
          NL
        </Link>
      </span>
      <span className='px-1 enLink'>|</span>
      <span
        className={`${background === 'dark' ? 'link-interaction-dark-bg' : 'link-interaction'}`}
      >
        <Link className={pathname === '/en' ? 'font-semibold' : ''} href='/en'>
          EN
        </Link>
      </span>
    </div>
  );
}
