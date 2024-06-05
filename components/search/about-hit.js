import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

export default function AboutHit({ hit }) {
  return (
    <>
      <Link href={`/over/${hit.slug}`}>
        <article>
          <div className='max-w-[760px] '>
            <h2 className='heading-2xl-semibold mb-2'>
              <Highlight attribute='pageTitle' hit={hit} />
            </h2>
            <p className='line-clamp-3 p-base'>
              <Highlight attribute='content' hit={hit} />
            </p>
          </div>
        </article>
      </Link>
    </>
  );
}
