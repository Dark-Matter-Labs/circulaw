'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import Tag from '@/components/tag';

export default function NewsDetailPageHeader({ data }) {
  const event = new Date(data?.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const [cardColour, setCardColour] = useState();

  useEffect(() => {
    if (data?.colour === 'lightGreen') {
      setCardColour('bg-green-300');
    } else if (data?.colour === 'green') {
      setCardColour('bg-green-500');
    } else if (data?.colour === 'darkGreen') {
      setCardColour('bg-green-500');
    } else setCardColour('bg-cl-black');
  }, [data]);

  return (
    <>
      <div className={`${cardColour} my-3 h-72`}>
        <div className='global-margin flex h-full flex-col items-start justify-between'>
          <div className='mt-6 flex h-6 items-center rounded-clSm bg-gray-100'>
            <Link
              href='/'
              className='p-2xs-bold flex flex-row items-center pl-2 text-green-500 hover:text-green-300 active:text-cl-black'
            >
              Home
            </Link>
            <span className='p-2xs-bold px-2 text-green-500'>{'>'}</span>
            <Link
              href='/nieuws'
              className='p-2xs-bold pr-2 text-green-500 hover:text-green-300 active:text-cl-black'
            >
              Nieuws
            </Link>
          </div>
          <div className='mb-6'>
            <div className='flex flex-grow-0'>
              <Tag
                classes={`${
                  data?.colour === 'extraDarkGreen'
                    ? 'text-green-300 border border-green-300 bg-transparent'
                    : 'text-white bg-cl-black border border-cl-black'
                }`}
              >
                {data?.category}
              </Tag>
            </div>
            <h1
              className={`${
                cardColour === 'bg-green-300' ? 'text-cl-black' : 'text-gray-100'
              } heading-2xl-semibold sm:heading-5xl-semibold`}
            >
              {data?.title}
            </h1>
            {data?.newsDate && (
              <div
                className={`${
                  cardColour === 'bg-green-300' ? 'text-cl-black' : 'text-gray-100'
                } p-base`}
              >
                {' '}
                {event.toLocaleDateString('nl-NL', options)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
