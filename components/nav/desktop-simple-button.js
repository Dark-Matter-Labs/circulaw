import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { usePiwikPro } from '@piwikpro/next-piwik-pro';

export default function DesktopSimpleButton({ name, url }) {
  const pathname = usePathname();
  const { CustomEvent } = usePiwikPro();
  return (
    <div
      className={`${
        pathname === '/' ? 'text-white hover:text-green-200' : 'text-cl-black hover:text-green-500'
      } ${
        name === 'Contact' ? '' : 'mr-6 lg:mr-8'
      } p-base relative z-100 flex h-full cursor-pointer flex-row items-center hover:underline`}
    >
      <Link
        onClick={() => CustomEvent.trackEvent('Nav click', pathname, name)}
        id='navClick'
        href={url}
      >
        {name}
      </Link>
    </div>
  );
}
