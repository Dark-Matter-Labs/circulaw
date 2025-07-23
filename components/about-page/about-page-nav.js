'use client';

import Link from 'next/link';

export default function AboutPageNav({ currentSlug, slugs }) {
  return (
    <nav className='sticky top-48 mb-12 min-w-[390px]' aria-label='Sidebar'>
      <h3 className='heading-3xl-semibold mb-5 ml-3'>Over Circulaw</h3>
      <ul className=''>
        {slugs?.map((slug) => (
          <li key={slug.slug} className='my-4'>
            <Link
              key={slug.slug}
              href={`/over/${slug.slug}`}
              className={`${
                slug.slug === currentSlug
                  ? 'min-w-[390px] bg-green-500 font-semibold text-white transition-all duration-100'
                  : ''
              } p-base h-full min-w-[390px] cursor-pointer whitespace-nowrap break-words rounded-cl py-2 pl-4 pr-8 text-cl-black`}
              aria-current={slug.slug ? 'page' : undefined}
            >
              <span className='truncate'>{slug.pageTitle}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
