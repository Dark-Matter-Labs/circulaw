'use client';

import { usePathname } from 'next/navigation';

// Rendered by the root layout only while draft mode is on, so editors can
// tell they are looking at unpublished content and get back out of it.
export default function DraftModeBanner() {
  const pathname = usePathname();
  const exitHref = `/api/draft-mode/disable?redirect=${encodeURIComponent(pathname)}`;

  return (
    // Fixed at the bottom, above everything: the site's sticky nav owns the top.
    <div
      role='status'
      className='rounded-cl bg-cl-black fixed bottom-4 left-1/2 z-1000 flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-4 px-4 py-2 text-sm text-white shadow-lg'
    >
      <span>Voorbeeldweergave: je ziet ook ongepubliceerde wijzigingen.</span>
      {/* A plain link: the route handler must run, not a client-side navigation. */}
      <a href={exitHref} className='font-semibold underline'>
        Sluiten
      </a>
    </div>
  );
}
