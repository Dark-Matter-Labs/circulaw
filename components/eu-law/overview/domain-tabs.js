'use client';

import { useRef, useState } from 'react';

import { PortableText } from 'next-sanity';

import { euOverviewPortableTextComponents } from '@/lib/portable-text/pt-components';

export default function DomainTabs({ domains }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const handleKeyDown = (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + domains.length) % domains.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div className='no-scrollbar overflow-x-auto rounded-t-cl bg-green-500 px-4 pt-4 sm:px-8'>
        <div
          role='tablist'
          aria-label='Domeinen'
          className='p-base-semibold flex min-w-max flex-row gap-x-2 lg:min-w-0 lg:flex-wrap lg:gap-y-2'
          onKeyDown={handleKeyDown}
        >
          {domains.map((domain, index) => (
            <button
              key={domain._key}
              ref={(el) => (tabRefs.current[index] = el)}
              id={`domain-tab-${domain._key}`}
              role='tab'
              type='button'
              aria-selected={active === index}
              aria-controls={`domain-panel-${domain._key}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              className={`${
                active === index
                  ? 'bg-green-100 text-green-500'
                  : 'text-green-100 hover:bg-green-400'
              } rounded-t-cl border-x-2 border-t-2 border-green-100 px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
            >
              {domain.title}
            </button>
          ))}
        </div>
      </div>
      {domains.map((domain, index) => (
        <div
          key={domain._key}
          id={`domain-panel-${domain._key}`}
          role='tabpanel'
          aria-labelledby={`domain-tab-${domain._key}`}
          hidden={active !== index}
          tabIndex={0}
          className='rounded-b-cl bg-green-100 p-6 sm:p-10'
        >
          <h3 className='heading-xl-semibold mb-4 text-green-500'>{domain.title}</h3>
          <div className='max-w-3xl'>
            <PortableText value={domain.body} components={euOverviewPortableTextComponents} />
          </div>
        </div>
      ))}
    </div>
  );
}
