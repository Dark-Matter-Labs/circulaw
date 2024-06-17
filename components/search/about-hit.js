import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

export default function AboutHit({ hit }) {
  return (
    <>
      <Link href={`/over/${hit.slug}`} onClick={() => sessionStorage.clear()}>
        <article className='group shadow-card rounded-cl'>
          <div className='max-w-[690px] p-4 '>
            <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300'>
              <Highlight attribute='pageTitle' hit={hit} />
            </h2>
            <p className='line-clamp-4 p-base'>
              <Highlight attribute='content' hit={hit} />
            </p>
          </div>
        </article>
      </Link>
    </>
  );
}
