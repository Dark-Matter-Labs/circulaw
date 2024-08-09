import { Highlight } from 'react-instantsearch';
import Link from 'next/link';

export default function EUHit({ hit }) {
  if (hit.title === 'EU Europe Tab') {
    return (
      <>
        <Link
          href={{
            pathname: `/eu-wetgeving/${hit.slug}`,
            query: { tab: 'verplichtingen-voor-europese-lidstaten' },
          }}
        >
          <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
            <div className='shadow-card rounded-cl h-full p-4'>
              <div className='max-w-[690px]'>
                <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                  <Highlight
                    attribute='searchTitle'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='line-clamp-5 p-base'>
                  <Highlight
                    attribute='eu1Content'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </article>
        </Link>
      </>
    );
  } else if (hit.title === 'Local Tab') {
    return (
      <>
        <Link
          href={{
            pathname: `/eu-wetgeving/${hit.slug}`,
            query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' },
          }}
        >
          <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
            <div className='shadow-card rounded-cl h-full p-4'>
              <div className='max-w-[690px]'>
                <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                  <Highlight
                    attribute='searchTitle'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='line-clamp-5 p-base'>
                  <Highlight
                    attribute='localContent1'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </article>
        </Link>
      </>
    );
  } else if (hit.title === 'Circular economy Tab') {
    return (
      <>
        <Link
          href={{
            pathname: `/eu-wetgeving/${hit.slug}`,
            query: { tab: 'relevantie-voor-de-circulaire-economie' },
          }}
        >
          <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
            <div className='shadow-card rounded-cl h-full p-4'>
              <div className='max-w-[690px]'>
                <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                  <Highlight
                    attribute='searchTitle'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='line-clamp-5 p-base'>
                  <Highlight
                    attribute='ceContent'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </article>
        </Link>
      </>
    );
  } else {
    return (
      <Link
        href={{
          pathname: `/eu-wetgeving/${hit.slug}`,
          query: { tab: 'overzicht' },
        }}
      >
        <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
          <div className='shadow-card rounded-cl h-full p-4'>
            <div className='max-w-[690px]'>
              <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                <Highlight
                  attribute='title'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-300 bg-green-300/20',
                  }}
                />
              </h2>
              <p className='line-clamp-5 p-base'>
                <Highlight
                  attribute='introText'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-300 bg-green-300/20',
                  }}
                />
              </p>
            </div>
          </div>
        </article>
      </Link>
    );
  }
}
