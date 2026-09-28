import Link from 'next/link';

import { EU_LAW_TABS, euLawTabHref } from '@/lib/eu-law-tabs';

const TAB_WIDTHS = {
  overzicht: 'w-auto',
  'verplichtingen-voor-europese-lidstaten': 'w-[180px] text-wrap',
  'relevantie-voor-regionale-en-lokale-overheden': 'w-[220px]',
  'relevantie-voor-de-circulaire-economie': 'w-[180px]',
};

export default function Tabs({ summaryData, activeTab, tabsRef, isSticky, navbarHeight }) {
  return (
    <>
      <div
        ref={tabsRef}
        className={`${isSticky ? '' : ''} sticky z-20 mb-10 content-end bg-white py-4 sm:mb-16`}
        style={{ top: navbarHeight }}
      >
        <div className='global-margin'>
          <div
            className={`${isSticky ? 'rounded-cl' : 'rounded-b-cl -translate-y-4'} transiton no-scrollbar lgNav:block flex h-[87px] snap-x snap-mandatory flex-row content-end justify-start gap-x-3 overflow-x-scroll bg-green-500 px-6 duration-300 sm:px-16`}
          >
            <div className='p-base-semibold flex h-[76px] max-w-3xl flex-row justify-start gap-x-2 self-end text-green-500'>
              {EU_LAW_TABS.map((tab) => (
                <Link
                  key={tab.slug}
                  className={`${
                    activeTab === tab.slug ? 'bg-green-100 text-green-500' : 'text-green-100'
                  } flex h-full ${TAB_WIDTHS[tab.slug]} rounded-t-cl items-start justify-center border-x-2 border-t-2 border-green-100 px-2 py-3`}
                  href={euLawTabHref(summaryData?.slug?.current, tab.slug)}
                  aria-current={activeTab === tab.slug ? 'page' : undefined}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
