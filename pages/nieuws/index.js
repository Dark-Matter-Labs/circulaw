import Layout from '@/components/layouts/layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { client } from '@/lib/sanity';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';
import AgendaCard from '@/components/news-page/agenda-card';
import NewsCard from '@/components/news-page/news-card';

const newsItems = `
*[_type == 'newsPage'][0] {
    "featured": newsItems[featured == true]{
      ...,
      "image": newsImage.asset->.url
    },
      "notFeatured": newsItems[featured != true]{
        ...,
        "image": newsImage.asset->.url
    },
  }
`;

export default function NewsPage({ data }) {
  const [articleType, setArticleType] = useState('Alles');
  const [notFeatured, setNotFeatured] = useState(data.notFeatured)
    
  
  useEffect(() => {
    if (data.notFeatured) {
      let notFeatured = data.notFeatured
      if (articleType === 'Nieuw op de site') {
        setNotFeatured(notFeatured?.filter((item) => item.category === 'Nieuw op de site'))
      } else if (articleType === 'Agenda') {
        setNotFeatured(notFeatured?.filter((item) => item._type === 'agendaItem'))
      } else if (articleType === 'Artikelen') {
        setNotFeatured(notFeatured?.filter((item) => item.category === 'Artikelen'))
      } else if (articleType === 'Circulair nieuws') {
        setNotFeatured(notFeatured?.filter((item) => item.category === 'Circulair nieuws'))
      } else {
        setNotFeatured(notFeatured)
      }
    }
    
  },[articleType, data.notFeatured]);
  
  return (
    <Layout>
      <div className='flex flex-col global-margin mt-4'>
        <div className='mt-10'>
          <Link href='/' className='text-green-500 p-2xs-bold'>
            {'<'} Home
          </Link>
        </div>

        <div className='mt-10'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Uitgelichte nieuwsberichten
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-6 py-10 overflow-hidden'>
            {data.featured.map((item, id) => (
              <div
                className={`${
                  item.image
                    ? 'col-span-1 flex-col sm:col-span-2 sm:flex-cols-2'
                    : 'col-span-1 flex-col gap-3'
                }`}
                key={id}
              >
                {item._type === 'agendaItem' && <FeaturedAgendaCard data={item} />}
                {item._type === 'newsCard' && <FeaturedCard data={item} />}
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <div className='flex flex-row justify-between items-center border-b-2 pb-5 border-green-800'>
            <h1 className='p-2xl-semibold sm:p-5xl-semibold'>Laatste nieuws </h1>
            <div className='flex flex-row items-center'>
              <div className='p-3xl-semibold pr-4'>Bekijk:</div>
              <div>
                {articleType === 'Alles' && (
                  <Popover className='w-80 relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                        >
                          <span className='inline text-left p-base-bold text-green-500'>Alles</span>
                        </div>
                        <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-white z-10`}
                          />
                        </div>
                      </Popover.Button>
                      <Popover.Panel className='absolute z-20'>
                        <Popover.Button
                          className='w-80'
                          as='div'
                          onClick={() => setArticleType('Agenda')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Agenda</span>
                          </div>
                        </Popover.Button>
                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Circulair nieuws')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Circulair nieuws</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Nieuw op de site')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Nieuw op de site</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Artikelen')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Artikelen</span>
                          </div>
                        </Popover.Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
                )}
                 {articleType === 'Agenda' && (
                  <Popover className='w-80 relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                        >
                          <span className='inline text-left p-base-bold text-green-500'>Agenda</span>
                        </div>
                        <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-white z-10`}
                          />
                        </div>
                      </Popover.Button>
                      <Popover.Panel className='absolute z-20'>
                        <Popover.Button
                          className='w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Alles</span>
                          </div>
                        </Popover.Button>
                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Circulair nieuws')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Circulair nieuws</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Nieuw op de site')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Nieuw op de site</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Artikelen')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Artikelen</span>
                          </div>
                        </Popover.Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
                )}

                {articleType === 'Circulair nieuws' && (
                  <Popover className='w-80 relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                        >
                          <span className='inline text-left p-base-bold text-green-500'>Circulair nieuws</span>
                        </div>
                        <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-white z-10`}
                          />
                        </div>
                      </Popover.Button>
                      <Popover.Panel className='absolute z-20'>
                        <Popover.Button
                          className='w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Alles</span>
                          </div>
                        </Popover.Button>
                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Agenda')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Agenda</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Nieuw op de site')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Nieuw op de site</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Artikelen')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Artikelen</span>
                          </div>
                        </Popover.Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
                )}
                {articleType === 'Nieuw op de site' && (
                  <Popover className='w-80 relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                        >
                          <span className='inline text-left p-base-bold text-green-500'>Nieuw op de site</span>
                        </div>
                        <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-white z-10`}
                          />
                        </div>
                      </Popover.Button>
                      <Popover.Panel className='absolute z-20'>
                        <Popover.Button
                          className='w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Alles</span>
                          </div>
                        </Popover.Button>
                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Agenda')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Agenda</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Circulair nieuws')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Circulair nieuws</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Artikelen')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Artikelen</span>
                          </div>
                        </Popover.Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
                )}
                 {articleType === 'Artikelen' && (
                  <Popover className='w-80 relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                        >
                          <span className='inline text-left p-base-bold text-green-500'>Artikelen</span>
                        </div>
                        <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-white z-10`}
                          />
                        </div>
                      </Popover.Button>
                      <Popover.Panel className='absolute z-20'>
                        <Popover.Button
                          className='w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Alles</span>
                          </div>
                        </Popover.Button>
                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Agenda')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Agenda</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Circulair nieuws')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Circulair nieuws</span>
                          </div>
                        </Popover.Button>

                        <Popover.Button
                          as='div'
                          onClick={() => setArticleType('Nieuw op de site')}
                        >
                          <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600 hover:cursor-pointer'>
                            <span className='block pl-3 truncate p-base'>Nieuw op de site</span>
                          </div>
                        </Popover.Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
                )}
              </div>
            </div>
          </div>

          <div className='columns-1 sm:columns-2 lg:columns-4 py-10'>
            {notFeatured.map((item, id) => (
              <div key={id} className='relative mb-6 break-inside-avoid-column min-h'>
                {item._type === 'agendaItem' && <AgendaCard data={item} />}
                {item._type === 'newsCard' && <NewsCard data={item} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(newsItems);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}