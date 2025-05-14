'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Pagination({ pages }) {
  const pathname = usePathname();
  console.log(pathname, 'pathname');

  // Find the current page index based on the current URL
  const currentPageIndex = pages.findIndex((page) => page.href === pathname);

  // Handle looping for previous and next pages
  const previousPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
  const nextPageIndex = (currentPageIndex + 1) % pages.length;

  const previousPage = pages[previousPageIndex];
  const nextPage = pages[nextPageIndex];

  return (
    <div className="global-margin mt-10 flex flex-row items-center justify-between px-8">
      {/* Render the previous link */}
      <Link
        href={previousPage.href}
        className="p-base flex flex-row text-black hover:text-green-400"
      >
        <IconChevronLeft />
        <span className="p-base-semibold">Vorige:&nbsp;</span>
        {previousPage.name}
      </Link>

      {/* Render the next link */}
      <Link
        href={nextPage.href}
        className="flex flex-row text-green-500 hover:text-green-400"
      >
        <span className="p-base-semibold">Volgende:&nbsp;</span>
        {nextPage.name} <IconChevronRight />
      </Link>
    </div>
  );
}