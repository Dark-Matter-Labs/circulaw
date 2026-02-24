import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopSimpleButton({ name, url }) {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname === '/' ? 'text-white hover:text-green-300' : 'text-cl-black hover:text-green-500'
      } ${
        name === 'Contact' ? '' : 'mr-6 lg:mr-8'
      } p-base relative z-100 flex h-full cursor-pointer flex-row items-center hover:underline`}
    >
      <Link id='navClick' href={url}>
        {name}
      </Link>
    </div>
  );
}
