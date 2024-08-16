import { Highlight } from 'react-instantsearch';
import Link from 'next/link';
import Image from 'next/image';

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
          <article className='hidden sm:flex flex-col h-full rounded-cl'>
            <div className='rounded-cl h-full'>
              <div className='flex flex-row'>
                <div className='h-[160px] min-w-[160px] relative mr-4'>
                  <Image
                    src='/icon.png'
                    alt='eu icon'
                    fill
                    priority={true}
                    className='object-cover'
                    sizes='15vw'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='flex flex-row gap-x-2 justify-start p-2xs-semibold text-green-500 h-[52px] max-w-[524px] mb-6'>
                      <div className='h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[73px] bg-green-600/30 text-white'>
                        Overzicht
                      </div>
                      <div className='text-green-800 h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[132px]'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[164px]'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[131px]'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold group-hover:text-green-300 transition-all duration-300'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-300 bg-green-300/20',
                        }}
                      />
                    </h2>
                    <p className='line-clamp-2 p-xl'>
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
              </div>
            </div>
          </article>
          <article className='flex flex-col sm:hidden gap-y-3'>
            <div className='h-[160px] w-[160px] relative'>
              <Image
                src='/icon.png'
                alt='eu icon'
                fill
                priority={true}
                className='object-fil'
                sizes='15vw'
              />
            </div>
            <div>
              <div className='bg-green-600/30 text-white p-2xs-semibold h-[52px] rounded-t-cl px-2 py-3 flex items-start justify-center w-[132px]'>
                Verplichtingen voor Europese lidstaten
              </div>
            </div>
            <h2 className='p-base-semibold'>
              <Highlight
                attribute='lawTitle'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-300 bg-green-300/20',
                }}
              />
            </h2>
            <p className='line-clamp-4 p-xl'>
              <Highlight
                attribute='eu1Content'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-300 bg-green-300/20',
                }}
              />
            </p>
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
          <article className='hidden sm:flex flex-col h-full rounded-cl'>
            <div className='rounded-cl h-full'>
              <div className='flex flex-row'>
                <div className='h-[160px] min-w-[160px] relative mr-4'>
                  <Image
                    src='/icon.png'
                    alt='eu icon'
                    fill
                    priority={true}
                    className='object-cover'
                    sizes='15vw'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='flex flex-row gap-x-2 justify-start p-2xs-semibold text-green-500 h-[52px] max-w-[524px] mb-6'>
                      <div className='h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[73px] bg-green-600/30 text-white'>
                        Overzicht
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[132px]'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className=' text-green-800 h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[164px]'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[131px]'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold group-hover:text-green-300 transition-all duration-300'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-300 bg-green-300/20',
                        }}
                      />
                    </h2>
                    <p className='line-clamp-2 p-xl'>
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
              </div>
            </div>
          </article>
        </Link>
        <article className='flex flex-col sm:hidden gap-y-3'>
          <div className='h-[160px] w-[160px] relative'>
            <Image
              src='/icon.png'
              alt='eu icon'
              fill
              priority={true}
              className='object-fil'
              sizes='15vw'
            />
          </div>
          <div>
            <div className='bg-green-600/30 text-white p-2xs-semibold h-[52px] rounded-t-cl px-2 py-3 flex items-start justify-center w-[164px]'>
              Relevantie voor regionale en lokale overheden{' '}
            </div>
          </div>
          <h2 className='p-base-semibold'>
            <Highlight
              attribute='lawTitle'
              hit={hit}
              classNames={{
                highlighted: 'text-green-300 bg-green-300/20',
              }}
            />
          </h2>
          <p className='line-clamp-4 p-xl'>
            <Highlight
              attribute='localContent1'
              hit={hit}
              classNames={{
                highlighted: 'text-green-300 bg-green-300/20',
              }}
            />
          </p>
        </article>
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
          <article className='hidden sm:flex flex-col h-full rounded-cl'>
            <div className='rounded-cl h-full'>
              <div className='flex flex-row'>
                <div className='h-[160px] min-w-[160px] relative mr-4'>
                  <Image
                    src='/icon.png'
                    alt='eu icon'
                    fill
                    priority={true}
                    className='object-cover'
                    sizes='15vw'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='flex flex-row gap-x-2 justify-start p-2xs-semibold text-green-500 h-[52px] max-w-[524px] mb-6'>
                      <div className='h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[73px] bg-green-600/30 text-white'>
                        Overzicht
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[132px]'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[164px]'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='text-green-800 h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[131px]'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold group-hover:text-green-300 transition-all duration-300'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-300 bg-green-300/20',
                        }}
                      />
                    </h2>
                    <p className='line-clamp-2 p-xl'>
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
              </div>
            </div>
          </article>
        </Link>
        <article className='flex flex-col sm:hidden gap-y-3'>
          <div className='h-[160px] w-[160px] relative'>
            <Image
              src='/icon.png'
              alt='eu icon'
              fill
              priority={true}
              className='object-fil'
              sizes='15vw'
            />
          </div>
          <div>
            <div className='bg-green-600/30 text-white p-2xs-semibold h-[52px] rounded-t-cl px-2 py-3 flex items-start justify-center w-[131px]'>
              Relevantie voor de circulaire economie
            </div>
          </div>
          <h2 className='p-base-semibold'>
            <Highlight
              attribute='lawTitle'
              hit={hit}
              classNames={{
                highlighted: 'text-green-300 bg-green-300/20',
              }}
            />
          </h2>
          <p className='line-clamp-4 p-xl'>
            <Highlight
              attribute='ceContent'
              hit={hit}
              classNames={{
                highlighted: 'text-green-300 bg-green-300/20',
              }}
            />
          </p>
        </article>
      </>
    );
  } else {
    return (
      <>
        <Link
          href={{
            pathname: `/eu-wetgeving/${hit.slug}`,
            query: { tab: 'overzicht' },
          }}
        >
          <article className='hidden sm:flex flex-col h-full rounded-cl'>
            <div className='rounded-cl h-full'>
              <div className='flex flex-row'>
                <div className='h-[160px] min-w-[160px] relative mr-4'>
                  <Image
                    src='/icon.png'
                    alt='eu icon'
                    fill
                    priority={true}
                    className='object-cover'
                    sizes='15vw'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='flex flex-row gap-x-2 justify-start p-2xs-semibold text-green-500 h-[52px] max-w-[524px] mb-6'>
                      <div className='text-green-800 h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[73px]'>
                        Overzicht
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[132px]'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[164px]'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='bg-green-600/30 text-white h-full rounded-t-cl px-2 py-3 flex items-start justify-center min-w-[131px]'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold group-hover:text-green-300 transition-all duration-300'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-300 bg-green-300/20',
                        }}
                      />
                    </h2>
                    <p className='line-clamp-2 p-xl'>
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
              </div>
            </div>
          </article>
          <article className='flex flex-col sm:hidden gap-y-3'>
            <div className='h-[160px] w-[160px] relative'>
              <Image
                src='/icon.png'
                alt='eu icon'
                fill
                priority={true}
                className='object-fil'
                sizes='15vw'
              />
            </div>
            <div>
              <div className='bg-green-600/30 text-white p-2xs-semibold h-[52px] rounded-t-cl px-2 py-3 flex items-start justify-center w-[73px]'>
                Overzicht
              </div>
            </div>
            <h2 className='p-base-semibold'>
              <Highlight
                attribute='lawTitle'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-300 bg-green-300/20',
                }}
              />
            </h2>
            <p className='line-clamp-4 p-xl'>
              <Highlight
                attribute='ceContent'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-300 bg-green-300/20',
                }}
              />
            </p>
          </article>
        </Link>
      </>
    );
  }
}
