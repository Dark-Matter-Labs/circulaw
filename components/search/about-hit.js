import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

export default function AboutHit({ hit }) {
  return (
    <>
      <Link href={`/over/${hit.slug}`} onClick={() => sessionStorage.clear()}>
        <article>
          <div className='max-w-[690px] shadow-lg p-4 rounded-cl'>
            <h2 className='heading-2xl-semibold mb-4'>
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
