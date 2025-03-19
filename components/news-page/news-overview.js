'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import AgendaCard from '@/components/news-page/agenda-card';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

import Badge from '../shared/new-badge';
import { MasonryGrid } from './masonry';
import NewNewsCard from './new-news-card';

const articleTypes = [
  { id: 1, name: 'Alles' },
  { id: 2, name: 'Nieuw op de site' },
  { id: 3, name: 'Agenda' },
  { id: 4, name: 'Artikelen' },
  { id: 5, name: 'Circulair nieuws' },
];
export default function NewsOverview({ featuresNewsItems, nonFeaturedNewsItems }) {
  const [articleType, setArticleType] = useState(articleTypes[0]);
  const [notFeatured, setNotFeatured] = useState();

  useEffect(() => {
    if (articleType.name === 'Nieuw op de site') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.category === 'Nieuw op de site'),
      );
    } else if (articleType.name === 'Agenda') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.isAgendaItem === true),
      );
    } else if (articleType.name === 'Artikelen') {
      setNotFeatured(
        nonFeaturedNewsItems?.slice(0, 12)?.filter((item) => item.category === 'Artikelen'),
      );
    } else if (articleType.name === 'Circulair nieuws') {
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
        <div className='grid grid-cols-1 grid-rows-1 gap-6 overflow-hidden py-10 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresNewsItems.map((item, id) => (
            <div key={id}>{item.isFeatured === true && <NewNewsCard data={item} />}</div>
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
            <Listbox value={articleType} onChange={setArticleType} >
              <ListboxButton className='rounded-cl p-base-bold w-64 sm:w-80 flex h-10 items-center justify-between border-2 border-green-500 text-black px-4'>
                {articleType.name}
                <IconChevronDown />
              </ListboxButton>

              <ListboxOptions anchor='bottom' transition className='border-2 border-green-500 rounded-cl [--anchor-gap:2px] w-64 sm:w-80 transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'>
                {articleTypes.map((type) => (
                  <ListboxOption key={type.name} value={type} className={`${type.id === 5 ? '': 'border-b-2 border-green-500'} flex h-10 items-center px-4 p-base bg-white hover:p-base-semibold cursor-pointer `}>
                    {type.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
        <div className='py-10'>
          <MasonryGrid>
            {notFeatured?.map((item, id) => {
              return (
                <>
                  {item.isAgendaItem === true ? (
                    <AgendaCard data={item} key={id} />
                  ) : (
                    <NewNewsCard data={item} key={id} />
                  )}
                </>
              );
            })}
          </MasonryGrid>
        </div>
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
                  {item.isAgendaItem !== true && <Badge variant='black'>{item.category}</Badge>}
                  {item.isAgendaItem === true && <Badge variant='black'>Agenda</Badge>}
                  <div className='ml-3'>
                    {item.hasPage === true && (
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
                    {item.link && item.isAgendaItem === true && (
                      <Link className='link-interaction' href={item.link}>
                        {item.title}
                      </Link>
                    )}
                    {item.link === undefined && item.isAgendaItem === true && (
                      <div>{item.title}</div>
                    )}
                  </div>
                  {item.newsDate && (
                    <>
                      <div className='mx-2 h-2 w-2 rounded-full bg-cl-grey' />
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
