export default function AboutPageNav({ currentSlug, slugs }) {
  return (
    <nav className='space-y-1 sticky top-64' aria-label='Sidebar'>
      <h3 className='heading-xl-semibold sm:heading-2xl-semibold text-green-500 pl-5 pb-2'>Over Circulaw</h3>
      {slugs?.map((slug) => (
        <a
          key={slug.slug}
          href={`/over/${encodeURIComponent(slug.slug)}`}
          className={`${
            slug.slug === currentSlug
              ? 'text-gray-800'
              : 'text-green-500 hover:bg-green-50 hover:text-gray-800'
          } flex items-center px-3 py-2 p-2xs-bold text-green-600 link-interaction bg-gray-100`}
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
