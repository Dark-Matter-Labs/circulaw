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
      } h-full w-full ${
        navData.slug === 'bouw'
          ? '3xl:pl-32 pl-4 pr-2 pt-8 lgNav:pl-10 xl:pl-20'
          : 'pl-3 pr-2 pt-8 lg:pl-6'
      } heading-xl-semibold first-letter:uppercase`}
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
              pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500'
            } p-xs active:p-xs-semibold cursor-pointer active:no-underline`}
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
                } absolute ml-1.5 mt-[2px] font-jakarta text-[8px] font-bold uppercase hover:no-underline`}
              >
                Nieuw
              </span>
            )}
          </Link>
        </div>
      ))}
      {navData.title === 'Bouw' && (
        <div
          className={`${pathname === '/' ? 'border-green-200' : 'border-green-400'} mt-3 border-t`}
        >
          <Link
            href='/bouw/planregels'
            onClick={() => {
              CustomEvent.trackEvent('Nav click', pathname, 'planregels');
              closeNav(false);
            }}
            className={`${
              pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500'
            } p-xs active:p-xs-semibold flex cursor-pointer flex-row items-center pt-2 active:no-underline`}
          >
            <span className='hover:underline'>Modelteksten voor het omgevingsplan</span>
          </Link>
        </div>
      )}
    </div>
  );
}
