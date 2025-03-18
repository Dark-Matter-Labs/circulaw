'use client';

import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Link from 'next/link';

import AgendaCard from '@/components/news-page/agenda-card';
import NewsCard from '@/components/news-page/news-card';
import Tag from '@/components/tag';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

// TODO: replace Popover with headless UI Listbox
export default function NewsOverview({ featuresNewsItems, nonFeaturedNewsItems }) {
  const [articleType, setArticleType] = useState('Alles');
  const [notFeatured, setNotFeatured] = useState();

  useEffect(() => {
    if (articleType === 'Nieuw op de site') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.category === 'Nieuw op de site'),
      );
    } else if (articleType === 'Agenda') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.newsOrAgenda === true),
      );
    } else if (articleType === 'Artikelen') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.category === 'Artikelen'),
      );
    } else if (articleType === 'Circulair nieuws') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.category === 'Circulair nieuws'),
      );
    } else {
      setNotFeatured(nonFeaturedNewsItems?.slice(0, 12));
    }
  }, [articleType, nonFeaturedNewsItems]);

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return (
    <div className='global-margin mt-4 flex flex-col'>
      <div className='mt-10'>
        <Link href='/' className='p-2xs-bold'>
          <span className='text-green-500 hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'>
            Home<span className='p-2xs-bold px-2'>{'>'}</span>
          </span>
        </Link>
      </div>
      <div className='mt-10'>
        <h1 className='heading-xl-semibold sm:heading-2xl-semibold w-full border-b-2 border-cl-black pb-5'>
          Uitgelichte nieuwsberichten
        </h1>
        <div className='grid grid-cols-1 grid-rows-1 gap-6 overflow-hidden py-10 sm:grid-cols-2 md:grid-cols-3'>
          {featuresNewsItems.map((item, id) => (
            <div key={id}>{item.newsOrAgenda === false && <NewsCard data={item} />}</div>
          ))}
        </div>
      </div>
      <div className=''>
        <div className='flex flex-col justify-between border-b-2 border-cl-black pb-5 sm:flex-row sm:items-center'>
          <h2 className='heading-xl-semibold sm:heading-2xl-semibold pb-4 sm:pb-0'>
            Laatste nieuws{' '}
          </h2>
          <div className='flex flex-row items-center justify-between'>
            <div className='heading-xl-semibold sm:heading-2xl-semibold pr-4'>Bekijk:</div>
            <div>
              {articleType === 'Alles' && (
                <Popover className='relative w-64 sm:w-80'>
                  {({ open }) => (
                    <>
                      <PopoverButton
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                        >
                          <span className='p-base-bold inline text-left text-green-500'>Alles</span>
                        </div>
                        <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                          <IconChevronDown
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } z-10 h-6 w-6 text-white`}
                          />
                        </div>
                      </PopoverButton>
                      <PopoverPanel className='absolute z-20'>
                        <PopoverButton
                          className='w-64 sm:w-80'
                          as='div'
                          onClick={() => setArticleType('Agenda')}
                        >
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Agenda</span>
                          </div>
                        </PopoverButton>
                        <PopoverButton as='div' onClick={() => setArticleType('Circulair nieuws')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Circulair nieuws</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Nieuw op de site')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Nieuw op de site</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Artikelen')}>
                          <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Artikelen</span>
                          </div>
                        </PopoverButton>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )}
              {articleType === 'Agenda' && (
                <Popover className='relative w-64 sm:w-80'>
                  {({ open }) => (
                    <>
                      <PopoverButton
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                        >
                          <span className='p-base-bold inline text-left text-green-500'>
                            Agenda
                          </span>
                        </div>
                        <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                          <IconChevronDown
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } z-10 h-6 w-6 text-white`}
                          />
                        </div>
                      </PopoverButton>
                      <PopoverPanel className='absolute z-20'>
                        <PopoverButton
                          className='w-64 sm:w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Alles</span>
                          </div>
                        </PopoverButton>
                        <PopoverButton as='div' onClick={() => setArticleType('Circulair nieuws')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Circulair nieuws</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Nieuw op de site')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Nieuw op de site</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Artikelen')}>
                          <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Artikelen</span>
                          </div>
                        </PopoverButton>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )}

              {articleType === 'Circulair nieuws' && (
                <Popover className='relative w-64 sm:w-80'>
                  {({ open }) => (
                    <>
                      <PopoverButton
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                        >
                          <span className='p-base-bold inline text-left text-green-500'>
                            Circulair nieuws
                          </span>
                        </div>
                        <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                          <IconChevronDown
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } z-10 h-6 w-6 text-white`}
                          />
                        </div>
                      </PopoverButton>
                      <PopoverPanel className='absolute z-20'>
                        <PopoverButton
                          className='w-64 sm:w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Alles</span>
                          </div>
                        </PopoverButton>
                        <PopoverButton as='div' onClick={() => setArticleType('Agenda')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Agenda</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Nieuw op de site')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Nieuw op de site</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Artikelen')}>
                          <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Artikelen</span>
                          </div>
                        </PopoverButton>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )}
              {articleType === 'Nieuw op de site' && (
                <Popover className='relative w-64 sm:w-80'>
                  {({ open }) => (
                    <>
                      <PopoverButton
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                        >
                          <span className='p-base-bold inline text-left text-green-500'>
                            Nieuw op de site
                          </span>
                        </div>
                        <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                          <IconChevronDown
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } z-10 h-6 w-6 text-white`}
                          />
                        </div>
                      </PopoverButton>
                      <PopoverPanel className='absolute z-20'>
                        <PopoverButton
                          className='w-64 sm:w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Alles</span>
                          </div>
                        </PopoverButton>
                        <PopoverButton as='div' onClick={() => setArticleType('Agenda')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Agenda</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Circulair nieuws')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Circulair nieuws</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Artikelen')}>
                          <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Artikelen</span>
                          </div>
                        </PopoverButton>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )}
              {articleType === 'Artikelen' && (
                <Popover className='relative w-64 sm:w-80'>
                  {({ open }) => (
                    <>
                      <PopoverButton
                        className={`${
                          open ? 'rounded-t-cl' : 'rounded-cl'
                        } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                      >
                        <div
                          className={`${
                            open ? 'rounded-tl-cl' : 'rounded-l-cl'
                          } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                        >
                          <span className='p-base-bold inline text-left text-green-500'>
                            Artikelen
                          </span>
                        </div>
                        <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                          <IconChevronDown
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } z-10 h-6 w-6 text-white`}
                          />
                        </div>
                      </PopoverButton>
                      <PopoverPanel className='absolute z-20'>
                        <PopoverButton
                          className='w-64 sm:w-80'
                          as='div'
                          onClick={() => setArticleType('Alles')}
                        >
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Alles</span>
                          </div>
                        </PopoverButton>
                        <PopoverButton as='div' onClick={() => setArticleType('Agenda')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Agenda</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Circulair nieuws')}>
                          <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Circulair nieuws</span>
                          </div>
                        </PopoverButton>

                        <PopoverButton as='div' onClick={() => setArticleType('Nieuw op de site')}>
                          <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:cursor-pointer hover:text-green-500'>
                            <span className='p-base block truncate pl-3'>Nieuw op de site</span>
                          </div>
                        </PopoverButton>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              )}
            </div>
          </div>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }} className='py-10'>
          <Masonry gutter='24px'>
            {notFeatured?.map((item, id) => (
              <div key={id} className='min-h relative mb-4 break-inside-avoid-column'>
                {item.newsOrAgenda === true && <AgendaCard data={item} />}
                {item.newsOrAgenda === false && <NewsCard data={item} />}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {nonFeaturedNewsItems.length > 12 && (
          <div className='mb-10'>
            <h2 className='heading-xl-semibold sm:heading-2xl-semibold w-full border-b-2 border-cl-black pb-5'>
              Archief
            </h2>
            <div className='py-10'>
              {nonFeaturedNewsItems.slice(13, 30)?.map((item, id) => (
                <div
                  key={id}
                  className='heading-xl-semibold mb-3 flex flex-row items-center text-cl-black'
                >
                  {item.newsOrAgenda !== true && (
                    <Tag classes='text-white bg-cl-black border border-cl-black mr-3'>
                      {item.category}
                    </Tag>
                  )}
                  {item.newsOrAgenda === true && (
                    <Tag classes='text-white bg-cl-black border border-cl-black mr-3'>Agenda</Tag>
                  )}

                  <div>
                    {item.createPage === true && (
                      <Link className='link-interaction' href={`/nieuws/${item.slug.current}`}>
                        {item.title}
                      </Link>
                    )}
                    {item.linkUrl !== undefined && (
                      <Link
                        href={item.linkUrl}
                        target={`${item.internalExternal === true ? '_blank' : ''}`}
                        className='link-interaction'
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.link && item.newsOrAgenda === true && (
                      <Link className='link-interaction' href={item.link}>
                        {item.title}
                      </Link>
                    )}
                    {item.link === undefined && item.newsOrAgenda === true && (
                      <div>{item.title}</div>
                    )}
                  </div>
                  {item.newsDate && (
                    <>
                      <div className='mx-2 h-2 w-2 rounded-full bg-cl-grey'></div>
                      <span className='p-base text-cl-black' suppressHydrationWarning>
                        {' '}
                        {new Date(item.newsDate).toLocaleDateString('nl-NL', options)}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
