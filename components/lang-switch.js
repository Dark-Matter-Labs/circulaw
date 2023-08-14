import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LangSwitch() {
  const router = useRouter();
  return (
    <div
      className={`hidden sm:block flex justify-center items-center min-w-[10%] pt-2 ${
        router.pathname === '/en' || router.pathname === '/' ? 'text-black-white-200' : 'text-black'
      }`}
    >
      <span
        className={`link-interaction ${router.pathname === '/en' ? 'enLink' : 'enLinkSelected'}`}
      >
        <Link href='/'>NL</Link>
      </span>
      <span className='px-1 enLink'>|</span>
      <span
        className={`link-interaction ${router.pathname === '/en' ? 'enLinkSelected' : 'enLink'}`}
      >
        <Link href='/en'>EN</Link>
      </span>
    </div>
  );
}
