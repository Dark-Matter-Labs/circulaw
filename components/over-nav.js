import useSWR from 'swr';
import { groq } from 'next-sanity';
import { fetcher } from '../utils/swr-fetcher';
import { siteSettingsQuerys } from '../lib/queries';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function OverNav(props) {
  const { data: aboutPageSlugs } = useSWR(groq`${siteSettingsQuerys.overCirulaw}`, fetcher);
  const aboutSlugs = aboutPageSlugs;
  return (
    <nav className='space-y-1 sticky top-64' aria-label='Sidebar'>
      <h3 className='mobile sm:desktop text-green-500 pl-5 pb-2'>Over Circulaw</h3>
      {aboutSlugs?.map((slug) => (
        <a
          key={slug.slug}
          href={`/about/${encodeURIComponent(slug.slug)}`}
          className={classNames(
            slug.slug === props.pagename
              ? 'text-black-white-800'
              : 'text-green-500 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 breadcrumb bg-black-white-200',
          )}
          aria-current={slug.slug ? 'page' : undefined}
        >
          <span className='truncate'>
            {'>'}
            {slug.title.replaceAll('-', ' ')}
          </span>
        </a>
      ))}
    </nav>
  );
}
