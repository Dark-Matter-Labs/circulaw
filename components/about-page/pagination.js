'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Pagination({ pages }) {
  const pathname = usePathname();
  console.log(pathname, 'pathname');
  // Find the current page index based on the current URL
  const currentPageIndex = pages.findIndex((page) => page.href === pathname);
  // Determine the previous and next pages
  const previousPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

  return (
    <div className='global-margin mt-10 flex flex-row items-center justify-between px-8'>
      {/* Render the previous link if it exists */}
      {previousPage ? (
        <Link
          href={previousPage.href}
          className='p-base flex flex-row text-black hover:text-green-400'
        >
          <IconChevronLeft />
          <span className='p-base-semibold'>Volgende:&nbsp;</span>
          {previousPage.name}
        </Link>
      ) : (
        <div /> // Empty div to maintain spacing
      )}

      {/* Render the next link if it exists */}
      {nextPage ? (
        <Link href={nextPage.href} className='flex flex-row text-green-500 hover:text-green-400'>
          <span className='p-base-semibold'>Volgende:&nbsp;</span>
          {nextPage.name} <IconChevronRight />
        </Link>
      ) : (
        <div /> // Empty div to maintain spacing
      )}
    </div>
  );
}
