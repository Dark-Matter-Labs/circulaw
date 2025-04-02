import NewNewsCard from './new-news-card';

export default function FeaturedNewsSection({ items }) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
      {items.map((item, id) => (
        <li key={id} className='flex h-full'>
          <NewNewsCard data={{ ...item, isFeatured: true }} />
        </li>
      ))}
    </ul>
  );
}
