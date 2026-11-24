import { PortableText } from 'next-sanity';

import { aboutPageReducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { IconChevronDown } from '@tabler/icons-react';

// Native <details> keeps these fold-outs server-rendered and keyboard accessible.
export default function MoreInfo({ sections }) {
  return (
    <div className='mt-10 flex flex-col'>
      {sections.map((section) => (
        <details key={section._key} className='group border-b-2 border-green-500 first:border-t-2'>
          <summary className='heading-xl-semibold flex cursor-pointer list-none items-center justify-between py-5 text-green-500 [&::-webkit-details-marker]:hidden'>
            {section.title}
            <IconChevronDown
              className='size-6 shrink-0 transition-transform group-open:rotate-180'
              aria-hidden='true'
            />
          </summary>
          <div className='p-base max-w-3xl pb-8'>
            <PortableText
              value={section.body}
              components={aboutPageReducedPortableTextComponents}
            />
          </div>
        </details>
      ))}
    </div>
  );
}
