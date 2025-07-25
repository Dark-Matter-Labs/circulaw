import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import { IconChevronRight } from '@tabler/icons-react';

export default function DesktopNavCard({ navData, closeNav }) {
  const pathname = usePathname();
  const { CustomEvent } = usePiwikPro();
  return (
    <div
      className={`${
        pathname === '/' ? 'bg-green-500 text-green-300' : 'bg-green-100 text-cl-black'
      } flex w-full flex-col pb-12 ${
        navData.slug === 'bouw'
          ? '3xl:pl-32 pl-4 pr-2 pt-8 lgNav:pl-10 xl:pl-20'
          : 'pl-3 pr-2 pt-8 lg:pl-6'
      } heading-xl-semibold first-letter:uppercase`}
    >
      <Link
        id='navClick'
        href={`/${navData.slug}`}
        className='flex items-center hover:underline'
        onClick={() => {
          closeNav(false);
          CustomEvent.trackEvent('Nav click', pathname, navData.title);
        }}
      >
        {navData.title} <IconChevronRight className='ml-1 mt-1 size-4' />
      </Link>
      {navData.title === 'Bouw' && (
        <div
          className={`${
            pathname === '/' ? 'border-green-100 text-green-100' : 'border-green-500 text-green-500'
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
              pathname === '/' ? 'text-white' : 'text-green-500 hover:text-green-500'
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
                  pathname === '/' ? 'text-green-300' : 'text-cl-black'
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
              pathname === '/'
                ? 'border-green-100 text-green-100'
                : 'border-green-500 text-green-500'
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
                pathname === '/' ? 'text-white' : 'text-green-500 hover:text-green-500'
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
                pathname === '/' ? 'text-white' : 'text-green-500 hover:text-green-500'
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
                pathname === '/' ? 'text-white' : 'text-green-500 hover:text-green-500'
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
