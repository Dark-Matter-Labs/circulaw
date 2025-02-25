'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

export default function Tabs({ summaryData, initialTab }) {
  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    if (initialTab !== undefined) {
      setSelectedTab(initialTab);
    } else {
      setSelectedTab('overzicht');
    }
  }, [initialTab]);

  return (
    <div className='sticky top-16 z-50 shadow-lg lgNav:top-24'>
      <div className='no-scrollbar -mt-12 flex snap-x snap-mandatory overflow-x-scroll bg-cl-black pt-4 sm:-mt-[72px] lgNav:block'>
        <div className='global-margin'>
          <div className='p-2xs-semibold flex h-[57px] max-w-3xl flex-row justify-start gap-x-2 text-green-500'>
            <Link
              className={`${
                selectedTab === 'overzicht'
                  ? 'bg-green-100 text-green-500'
                  : 'bg-green-500 text-white'
              } flex h-full w-[73px] items-start justify-center rounded-t-cl px-3 py-2`}
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
                  : 'bg-green-500 text-white'
              } flex h-full w-[140px] items-start justify-center rounded-t-cl px-3 py-2`}
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
                  : 'bg-green-500 text-white'
              } flex h-full w-[170px] items-start justify-center rounded-t-cl px-3 py-2`}
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
                  : 'bg-green-500 text-white'
              } flex h-full w-[140px] items-start justify-center rounded-t-cl px-3 py-2`}
              href={{
                pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                query: { tab: 'relevantie-voor-de-circulaire-economie' },
              }}
              onClick={() => setSelectedTab('relevantie-voor-de-circulaire-economie')}
            >
              Relevantie voor de circulaire economie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
