export default function OverNav({ currentSlug, slugs }) {
  return (
    <nav className='space-y-1 sticky top-64' aria-label='Sidebar'>
      <h3 className='mobile sm:desktop text-green-500 pl-5 pb-2'>Over Circulaw</h3>
      {slugs?.map((slug) => (
        <a
          key={slug.slug}
          href={`/about/${encodeURIComponent(slug.slug)}`}
          className={`${
            slug.slug === currentSlug
              ? 'text-black-white-800'
              : 'text-green-500 hover:bg-gray-50 hover:text-gray-900'
          } flex items-center px-3 py-2 breadcrumb bg-black-white-200`}
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
