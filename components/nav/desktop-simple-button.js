import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';

export default function DesktopSimpleButton({ name, url }) {
  const router = useRouter();
  const { CustomEvent } = usePiwikPro();
  return (
    <div
      className={`${
        router.pathname === '/'
          ? 'text-white hover:text-green-200'
          : 'text-green-800 hover:text-green-500'
      } ${
        name === 'Contact' ? '' : 'mr-6 lg:mr-8'
      } h-full relative p-base hover:underline z-100  flex flex-row items-center cursor-pointer`}
    >
      <Link
        onClick={() => CustomEvent.trackEvent('Nav click', router.asPath, name)}
        id='navClick'
        href={url}
      >
        {name}
      </Link>
    </div>
  );
}
