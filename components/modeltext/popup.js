'use client';

import { Suspense, useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { modelTextPath } from '@/lib/site-paths';

import ModelTextCard from './modeltext-card';

const OVERVIEW_PATH = '/bouw/planregels/modelteksten';

// useSearchParams makes everything up to the nearest Suspense boundary render
// only in the browser. Reading the URL in this empty child keeps that boundary
// small, so the pillars and model text cards are in the server HTML. While a
// model text is open over the overview (its own URL, see @modal), the pillar
// behind it stays as it was.
function PillarParamSync({ onChange }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pillar = searchParams.get('pillar');
  const onOverview = pathname === OVERVIEW_PATH;
  useEffect(() => {
    if (onOverview) onChange(pillar);
  }, [onOverview, pillar, onChange]);
  return null;
}

export default function PopUp({ pillars, modelTexts }) {
  const router = useRouter();
  const [pillarParam, setPillarParam] = useState(null);
  const selectedPillar = pillarParam ?? pillars[0]?.slug;

  function selectPillar(pillar) {
    router.push(`${OVERVIEW_PATH}?${new URLSearchParams({ pillar })}`, { scroll: false });
  }

  return (
    <>
      <Suspense fallback={null}>
        <PillarParamSync onChange={setPillarParam} />
      </Suspense>
      <div className='max-w-[1280px]'>
        <ul
          id='pillars'
          className='no-scrollbar mt-14 flex snap-x snap-mandatory justify-between gap-x-2.5 overflow-x-scroll text-nowrap rounded-cl bg-green-100 p-4 sm:flex-row'
        >
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => selectPillar(p.slug)}
                className={`${
                  selectedPillar === p.slug
                    ? 'p-base-semibold border-b-2 border-b-green-500'
                    : 'p-base hover:text-green-400'
                } px-2 text-green-500`}
              >
                {p.title} {'('}
                {modelTexts.filter((text) => text.pillar === p.slug).length}
                {')'}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {pillars.map((p) => (
            <div key={p.slug} hidden={p.slug !== selectedPillar}>
              <h3 className='heading-xl-semibold mb-2 mt-8'>{p.title}</h3>
              <p className='p-xs max-w-[700px]'>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='min-h-screen'>
        {/* Every pillar's cards are rendered so crawlers see all model texts; only the selected pillar shows. */}
        {pillars.map((p) => (
          <div
            key={p.slug}
            hidden={p.slug !== selectedPillar}
            className='gap relative mt-14 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-8'
          >
            {modelTexts
              .filter((text) => text.pillar === p.slug)
              .map((text) => (
                <Link
                  className='w-[366px]'
                  key={text.slug}
                  href={modelTextPath(text.slug)}
                  scroll={false}
                >
                  <ModelTextCard text={text} />
                </Link>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
