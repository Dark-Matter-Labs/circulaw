'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import AgendaCard from '@/components/news-page/agenda-card';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

import Header from '../headers';
import Badge from '../shared/new-badge';
import TitleDecorator from '../title-decorator';
import FeaturedNewsSection from './featured-section';
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
    <>
      <Header title='Nieuws' bgColor='bg-green-500' />
      <div className='global-margin mt-20 flex flex-col'>
        <div className='mb-6 w-1/2'>
          <h3 className='heading-5xl-semibold text-green-500'>Uitgelichte nieuwsberichten</h3>
          <TitleDecorator width='w-1/4' />
        </div>
        <div className='py-10'>
          <FeaturedNewsSection items={featuresNewsItems} />
        </div>
        <div className=''>
          <div className='mt-20 flex flex-col justify-between pb-6 sm:flex-row sm:items-center'>
            <div className='w-1/2'>
              <h3 className='heading-5xl-semibold text-green-500'>Uitgelichte nieuwsberichten</h3>
              <TitleDecorator width='w-1/4' />
            </div>
            <div className='flex flex-row items-center justify-between place-self-start'>
              <div className='heading-xl-semibold sm:heading-2xl-semibold pr-4'>Bekijk:</div>
              <Listbox value={articleType} onChange={setArticleType}>
                <ListboxButton className='p-base-bold flex h-10 w-64 items-center justify-between rounded-cl border-2 border-green-500 px-4 text-black sm:w-80'>
                  {articleType.name}
                  <IconChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor='bottom'
                  transition
                  className='w-64 rounded-cl border-2 border-green-500 transition duration-100 ease-in [--anchor-gap:2px] data-[leave]:data-[closed]:opacity-0 sm:w-80'
                >
                  {articleTypes.map((type) => (
                    <ListboxOption
                      key={type.name}
                      value={type}
                      className={`${type.id === 5 ? '' : 'border-b-2 border-green-500'} p-base hover:p-base-semibold flex h-10 cursor-pointer items-center bg-white px-4`}
                    >
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
              <div className='w-1/2'>
                <h3 className='heading-5xl-semibold mt-20 text-green-500'>Archief</h3>
                <TitleDecorator width='w-1/4' />
              </div>
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
    </>
  );
}
