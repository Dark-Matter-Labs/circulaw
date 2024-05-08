import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';

export default function DesktopNavCard({ navData, closeNav }) {
  const router = useRouter();
  const { CustomEvent } = usePiwikPro();
  return (
    <div
      className={`${
        router.pathname === '/' ? 'bg-green-600 text-green-200' : 'bg-green-100 text-green-800'
      } w-full h-full  ${
        navData.slug === 'bouw'
          ? 'pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2'
          : 'pl-3 lg:pl-6 pt-8 pr-2'
      }  p-lg-semibold first-letter:uppercase `}
    >
      <Link
        id='navClick'
        href={`/${navData.slug}`}
        className='hover:underline'
        onClick={() => {
          closeNav(false);
          CustomEvent.trackEvent('Nav click', router.asPath, navData.title);
        }}
      >
        {navData.title} {'>'}
      </Link>
      {navData?.themas?.map((thema, id) => (
        <div className='mt-2' key={id}>
          <Link
            id='navClick'
            href={`/${navData.slug}/${thema.slug}`}
            className={`${
              router.pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500 '
            } p-xs hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
            onClick={() => {
              CustomEvent.trackEvent('Nav click', router.asPath, thema.themaName);
              closeNav(false);
            }}
          >
            {thema.themaName}
          </Link>
        </div>
      ))}
    </div>
  );
}
