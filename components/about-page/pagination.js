'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Pagination({ pages, position }) {
  const pathname = usePathname();

  // Find the current page index based on the current URL
  const currentPageIndex = pages.findIndex((page) => page.href === pathname);

  // Handle looping for previous and next pages
  const previousPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
  const nextPageIndex = (currentPageIndex + 1) % pages.length;

  const previousPage = pages[previousPageIndex];
  const nextPage = pages[nextPageIndex];

  return (
    <div
      className={`${position === 'top' ? 'mt-4 sm:mt-10' : ''} global-margin flex flex-row gap-x-8 items-center justify-between sm:px-8`}
    >
      {/* Render the previous link */}
        <Link
          href={previousPage.href}
          className='p-2xs sm:p-base flex flex-row text-black hover:text-green-400 items-center min-w-0'
        >
          <IconChevronLeft />
          <span className='p-2xs-semibold sm:p-base-semibold whitespace-nowrap'>Vorige:&nbsp;</span>
          <span className="truncate whitespace-nowrap overflow-hidden max-w-[100px] sm:max-w-none">{previousPage.name}</span>
        </Link>

        <Link
          href={nextPage.href}
          className='p-2xs sm:p-base flex flex-row text-green-500 hover:text-green-400 items-center min-w-0'
        >
          <span className='p-2xs-semibold sm:p-base-semibold whitespace-nowrap'>Volgende:&nbsp;</span>
          <span className="truncate whitespace-nowrap overflow-hidden max-w-[100px] sm:max-w-none">{nextPage.name}</span>
          <IconChevronRight />
        </Link>
    </div>
  );
}
