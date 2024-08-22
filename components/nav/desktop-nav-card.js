import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';

export default function DesktopNavCard({ navData, closeNav }) {
  const pathname = usePathname();

  const { CustomEvent } = usePiwikPro();
  return (
    <div
      className={`${
        pathname === '/' ? 'bg-green-600 text-green-200' : 'bg-green-50 text-green-800'
      } w-full h-full  ${
        navData.slug === 'bouw'
          ? 'pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2'
          : 'pl-3 lg:pl-6 pt-8 pr-2'
      }  heading-xl-semibold first-letter:uppercase `}
    >
      <Link
        id='navClick'
        href={`/${navData.slug}`}
        className='hover:underline'
        onClick={() => {
          closeNav(false);
          CustomEvent.trackEvent('Nav click', pathname, navData.title);
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
              pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500 '
            } p-xs active:p-xs-semibold active:no-underline cursor-pointer`}
            onClick={() => {
              CustomEvent.trackEvent('Nav click', pathname, thema.themaName);
              closeNav(false);
            }}
          >
            <span className='hover:underline'> {thema.themaName} </span>

            {thema.new && (
              <span
                className={`${
                  pathname === '/' ? 'text-green-200' : 'text-green-800'
                } font-jakarta text-[8px] font-bold ml-1.5 absolute mt-[2px] hover:no-underline uppercase`}
              >
                Nieuw
              </span>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
