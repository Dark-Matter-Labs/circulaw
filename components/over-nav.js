import useSWR from 'swr';
import { groq } from 'next-sanity';
import client from '../lib/sanity';
import { useState, useEffect } from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function OverNav(props) {
  const { data } = useSWR(groq`*[_type == "aboutPage"]`, (query) => client.fetch(query));

 
  const [slugs, setSlugs] =useState()
  useEffect(() => setSlugs(data?.map((page) => page.slug.current)), [data] )

  return (
    <nav className='space-y-1 sticky top-40' aria-label='Sidebar'>
      {slugs?.map((slug) => (
        <a
          key={slug}
          href={`/about/${slug}`}
          className={classNames(
            slug === props.pagename
              ? 'text-black1'
              : 'text-greenLink hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 breadcrumb bg-white1',
          )}
          aria-current={slug.current ? 'page' : undefined}
        >
          <span className='truncate'>
            {'>'}
            {slug.replaceAll('-', ' ')}
          </span>
        </a>
      ))}
    </nav>
  );
}
