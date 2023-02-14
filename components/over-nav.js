import useSWR from 'swr';
import { groq } from 'next-sanity';
import { fetcher } from '../utils/swr-fetcher';
import { siteSettingsQuerys } from '../lib/querys';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function OverNav(props) {
  const {data: aboutPageSlugs} = useSWR(groq`${siteSettingsQuerys.overCirulaw}`, fetcher )
  const aboutSlugs = aboutPageSlugs?.slugs
  
  return (
    <nav className='space-y-1 sticky top-40' aria-label='Sidebar'>
      {aboutSlugs?.map((slug) => (
        <a
          key={slug}
          href={`/about/${encodeURIComponent(slug)}`}
          className={classNames(
            slug === props.pagename
              ? 'text-black-white-800'
              : 'text-green-500 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 breadcrumb bg-black-white-200',
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
