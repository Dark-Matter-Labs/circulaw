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
      {navData.title === 'Bouw' && (
        <div
          className={`${
            pathname === '/' ? 'border-gray-100 text-gray-100' : 'border-green-600 text-green-600'
          } p-base-semibold mr-8 mt-6 border-b-2 pb-2`}
        >
          Instrumenten
        </div>
      )}
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
        <>
          <div
            className={`${
              pathname === '/' ? 'border-gray-100 text-gray-100' : 'border-green-600 text-green-600'
            } p-base-semibold mr-8 mt-6 border-b-2 pb-2`}
          >
            Toepassing
          </div>
          <div>
            <Link
              href='/bouw/planregels'
              onClick={() => {
                CustomEvent.trackEvent('Nav click', pathname, 'planregels');
                closeNav(false);
              }}
              className={`${
                pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500'
              } p-xs active:p-xs-semibold mt-2 flex cursor-pointer flex-row items-center active:no-underline`}
            >
              <span className='hover:underline'>Modelteksten voor het omgevingsplan</span>
            </Link>
          </div>
          <div className='mt-[2px]'>
            <Link
              href='/training'
              onClick={() => {
                CustomEvent.trackEvent('Nav click', pathname, 'training');
                closeNav(false);
              }}
              className={`${
                pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500'
              } p-xs active:p-xs-semibold flex cursor-pointer flex-row items-center pt-2 active:no-underline`}
            >
              <span className='hover:underline'>E-learning &apos;Circulaire houtbouw&apos;</span>
            </Link>
          </div>
          <div className='mt-[2px]'>
            <Link
              href='/bouw/gebiedsontwikkeling'
              onClick={() => {
                CustomEvent.trackEvent('Nav click', pathname, 'gebiedsontwikkeling');
                closeNav(false);
              }}
              className={`${
                pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500'
              } p-xs active:p-xs-semibold flex cursor-pointer flex-row items-center pt-2 active:no-underline`}
            >
              <span className='hover:underline'>Houtbouw in gebiedsontwikkeling</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
