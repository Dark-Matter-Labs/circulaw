import { Highlight } from 'react-instantsearch';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

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
          <article className='hidden h-full flex-col rounded-cl sm:flex'>
            <div className='h-full rounded-cl'>
              <div className='flex flex-row'>
                <div className='relative mr-6 h-[160px] min-w-[160px]'>
                  {hit.searchImage ? (
                    <Image
                      src={urlFor(hit.searchImage).url()}
                      alt='eu icon'
                      fill
                      priority={true}
                      className='object-fil'
                      sizes='15vw'
                    />
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='p-2xs-semibold mb-6 flex h-[52px] max-w-[524px] flex-row justify-start gap-x-2'>
                      <div className='flex h-full min-w-[73px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Overzicht
                      </div>
                      <div className='box-border flex h-full min-w-[132px] items-start justify-center rounded-t-cl border border-green-500 px-2 py-3 text-green-500'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='flex h-full min-w-[164px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='flex h-full min-w-[131px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold transition-all duration-300 group-hover:text-green-400'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </h2>
                    <p className='p-xl line-clamp-2'>
                      <Highlight
                        attribute='eu1Content'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='flex flex-col gap-y-3 sm:hidden'>
            <div className='relative h-[160px] w-[160px]'>
              {hit.searchImage ? (
                <Image
                  src={urlFor(hit.searchImage).url()}
                  alt='eu icon'
                  fill
                  priority={true}
                  className='object-fil'
                  sizes='15vw'
                />
              ) : null}
            </div>
            <div>
              <div className='p-2xs-semibold flex h-[52px] w-[132px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                Verplichtingen voor Europese lidstaten
              </div>
            </div>
            <h2 className='p-base-semibold'>
              <Highlight
                attribute='lawTitle'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-400 bg-green-400/20',
                }}
              />
            </h2>
            <p className='p-xl line-clamp-4'>
              <Highlight
                attribute='eu1Content'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-400 bg-green-400/20',
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
          <article className='hidden h-full flex-col rounded-cl sm:flex'>
            <div className='h-full rounded-cl'>
              <div className='flex flex-row'>
                <div className='relative mr-6 h-[160px] min-w-[160px]'>
                  {hit.searchImage ? (
                    <Image
                      src={urlFor(hit.searchImage).url()}
                      alt='eu icon'
                      fill
                      priority={true}
                      className='object-fil'
                      sizes='15vw'
                    />
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='p-2xs-semibold mb-6 flex h-[52px] max-w-[524px] flex-row justify-start gap-x-2'>
                      <div className='flex h-full min-w-[73px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Overzicht
                      </div>
                      <div className='flex h-full min-w-[132px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='box-border flex h-full min-w-[164px] items-start justify-center rounded-t-cl border border-green-500 px-2 py-3 text-green-500'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='flex h-full min-w-[131px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold transition-all duration-300 group-hover:text-green-400'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </h2>
                    <p className='p-xl line-clamp-2'>
                      <Highlight
                        attribute='localContent1'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
        <article className='flex flex-col gap-y-3 sm:hidden'>
          <div className='relative h-[160px] w-[160px]'>
            {hit.searchImage ? (
              <Image
                src={urlFor(hit.searchImage).url()}
                alt='eu icon'
                fill
                priority={true}
                className='object-fil'
                sizes='15vw'
              />
            ) : null}
          </div>
          <div>
            <div className='p-2xs-semibold flex h-[52px] w-[164px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
              Relevantie voor regionale en lokale overheden{' '}
            </div>
          </div>
          <h2 className='p-base-semibold'>
            <Highlight
              attribute='lawTitle'
              hit={hit}
              classNames={{
                highlighted: 'text-green-400 bg-green-400/20',
              }}
            />
          </h2>
          <p className='p-xl line-clamp-4'>
            <Highlight
              attribute='localContent1'
              hit={hit}
              classNames={{
                highlighted: 'text-green-400 bg-green-400/20',
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
          <article className='hidden h-full flex-col rounded-cl sm:flex'>
            <div className='h-full rounded-cl'>
              <div className='flex flex-row'>
                <div className='relative mr-6 h-[160px] min-w-[160px]'>
                  {hit.searchImage ? (
                    <Image
                      src={urlFor(hit.searchImage).url()}
                      alt='eu icon'
                      fill
                      priority={true}
                      className='object-fil'
                      sizes='15vw'
                    />
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='p-2xs-semibold mb-6 flex h-[52px] max-w-[524px] flex-row justify-start gap-x-2'>
                      <div className='flex h-full min-w-[73px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Overzicht
                      </div>
                      <div className='flex h-full min-w-[132px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='flex h-full min-w-[164px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='box-border flex h-full min-w-[133px] items-start justify-center rounded-t-cl border border-green-500 px-2 py-3 text-green-500'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold transition-all duration-300 group-hover:text-green-400'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </h2>
                    <p className='p-xl line-clamp-2'>
                      <Highlight
                        attribute='ceContent'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
        <article className='flex flex-col gap-y-3 sm:hidden'>
          <div className='relative h-[160px] w-[160px]'>
            {hit.searchImage ? (
              <Image
                src={urlFor(hit.searchImage).url()}
                alt='eu icon'
                fill
                priority={true}
                className='object-fil'
                sizes='15vw'
              />
            ) : null}
          </div>
          <div>
            <div className='p-2xs-semibold flex h-[52px] w-[131px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
              Relevantie voor de circulaire economie
            </div>
          </div>
          <h2 className='p-base-semibold'>
            <Highlight
              attribute='lawTitle'
              hit={hit}
              classNames={{
                highlighted: 'text-green-400 bg-green-400/20',
              }}
            />
          </h2>
          <p className='p-xl line-clamp-4'>
            <Highlight
              attribute='ceContent'
              hit={hit}
              classNames={{
                highlighted: 'text-green-400 bg-green-400/20',
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
          <article className='hidden h-full flex-col rounded-cl sm:flex'>
            <div className='h-full rounded-cl'>
              <div className='flex flex-row'>
                <div className='relative mr-6 h-[160px] min-w-[160px]'>
                  {hit.searchImage ? (
                    <Image
                      src={urlFor(hit.searchImage).url()}
                      alt='eu icon'
                      fill
                      priority={true}
                      className='object-fil'
                      sizes='15vw'
                    />
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <div>
                    <div className='p-2xs-semibold mb-6 flex h-[52px] max-w-[524px] flex-row justify-start gap-x-2'>
                      <div className='box-border flex h-full min-w-[73px] items-start justify-center rounded-t-cl border border-green-500 px-2 py-3 text-green-500'>
                        Overzicht
                      </div>
                      <div className='flex h-full min-w-[132px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Verplichtingen voor Europese lidstaten
                      </div>
                      <div className='flex h-full min-w-[164px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor regionale en lokale overheden{' '}
                      </div>
                      <div className='flex h-full min-w-[131px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                        Relevantie voor de circulaire economie
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[524px]'>
                    <h2 className='heading-xl-semibold transition-all duration-300 group-hover:text-green-400'>
                      <Highlight
                        attribute='lawTitle'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </h2>
                    <p className='p-xl line-clamp-2'>
                      <Highlight
                        attribute='introText'
                        hit={hit}
                        classNames={{
                          highlighted: 'text-green-400 bg-green-400/20',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='flex flex-col gap-y-3 sm:hidden'>
            <div className='relative h-[160px] w-[160px]'>
              {hit.searchImage ? (
                <Image
                  src={urlFor(hit.searchImage).url()}
                  alt='eu icon'
                  fill
                  priority={true}
                  className='object-fil'
                  sizes='15vw'
                />
              ) : null}
            </div>
            <div>
              <div className='p-2xs-semibold flex h-[52px] w-[73px] items-start justify-center rounded-t-cl bg-green-100/30 px-2 py-3 text-cl-grey/30'>
                Overzicht
              </div>
            </div>
            <h2 className='p-base-semibold'>
              <Highlight
                attribute='lawTitle'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-400 bg-green-400/20',
                }}
              />
            </h2>
            <p className='p-xl line-clamp-4'>
              <Highlight
                attribute='ceContent'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-400 bg-green-400/20',
                }}
              />
            </p>
          </article>
        </Link>
      </>
    );
  }
}
