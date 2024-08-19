'use client';
import Link from 'next/link';


export default function AboutPageNav({ currentSlug, slugs }) {
  return (
    <nav className='sticky top-48 my-12 min-w-[390px]' aria-label='Sidebar'>
      <h3 className='heading-3xl-semibold mb-5 ml-3'>
        Over Circulaw
      </h3>
      <ul className=''>
      {slugs?.map((slug) => (
        <li key={slug.slug} className='my-4'>
        <Link
          key={slug.slug}
          href={`/over/${slug.slug}`}
          className={`${
            slug.slug === currentSlug
              ? 'bg-green-500 text-white font-semibold transition-all duration-100 min-w-[390px]'
              : ''
          } p-base py-2 pl-4 pr-8 h-full break-words min-w-[390px] rounded-cl whitespace-nowrap cursor-pointer text-green-800`}
          aria-current={slug.slug ? 'page' : undefined}
        >
          <span className='truncate'>
            {slug.pageTitle}
          </span>
        </Link>
        </li>
      ))}
      </ul>
    </nav>
  );
}
