'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

export default function Tabs({ summaryData, initialTab, tabsRef, isSticky, navbarHeight }) {
  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    if (initialTab !== undefined) {
      setSelectedTab(initialTab);
    } else {
      setSelectedTab('overzicht');
    }
  }, [initialTab]);

  return (
    <>
      <div
        ref={tabsRef}
        className={`${isSticky ? '' : ''} sticky z-20 mb-10 content-end bg-white py-4 sm:mb-16`}
        style={{ top: navbarHeight }}
      >
        <div className='global-margin'>
          <div
            className={`${isSticky ? 'rounded-cl' : '-translate-y-4 rounded-b-cl'} transiton no-scrollbar flex h-[87px] snap-x snap-mandatory flex-row content-end justify-start gap-x-3 overflow-x-scroll bg-green-500 px-6 sm:px-16 duration-300 lgNav:block`}
          >
            <div className='p-base-semibold flex h-[76px] max-w-3xl flex-row justify-start gap-x-2 self-end text-green-500'>
              <Link
                className={`${
                  selectedTab === 'overzicht'
                    ? 'bg-green-100 text-green-500'
                    : 'text-green-100'
                } flex h-full w-auto items-start justify-center rounded-t-cl px-2 py-3 border-x-2 border-t-2 border-green-100`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'overzicht' },
                }}
                onClick={() => setSelectedTab('overzicht')}
              >
                Overzicht
              </Link>
              <Link
                className={`${
                  selectedTab === 'verplichtingen-voor-europese-lidstaten'
                    ? 'bg-green-100 text-green-500'
                    : 'text-green-100'
                } flex h-full w-[180px] text-wrap items-start justify-center rounded-t-cl px-2 py-3 border-x-2 border-t-2 border-green-100`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'verplichtingen-voor-europese-lidstaten' },
                }}
                onClick={() => setSelectedTab('verplichtingen-voor-europese-lidstaten')}
              >
                Verplichtingen voor Europese lidstaten
              </Link>
              <Link
                className={`${
                  selectedTab === 'relevantie-voor-regionale-en-lokale-overheden'
                    ? 'bg-green-100 text-green-500'
                    : 'text-green-100'
                } flex h-full w-[220px] items-start justify-center rounded-t-cl px-2 py-3 border-x-2 border-t-2 border-green-100`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' },
                }}
                onClick={() => setSelectedTab('relevantie-voor-regionale-en-lokale-overheden')}
              >
                Relevantie voor regionale en lokale overheden{' '}
              </Link>
              <Link
                className={`${
                  selectedTab === 'relevantie-voor-de-circulaire-economie'
                    ? 'bg-green-100 text-green-500'
                    : 'text-green-100'
                } flex h-full w-[180px] items-start justify-center rounded-t-cl px-2 py-3 border-x-2 border-t-2 border-green-100`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'relevantie-voor-de-circulaire-economie' },
                }}
                onClick={() => setSelectedTab('relevantie-voor-de-circulaire-economie')}
              >
                Relevantie voor de circulaire economie
              </Link>
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
