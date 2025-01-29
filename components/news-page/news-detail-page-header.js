'use client';
import Tag from '@/components/tag';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
      setCardColour('bg-green-600');
    } else setCardColour('bg-green-800');
  }, [data]);

  return (
    <>
      <div className={`${cardColour} my-3 h-72`}>
        <div className='global-margin flex h-full flex-col items-start justify-between'>
          <div className='mt-6 flex h-6 items-center rounded-clSm bg-gray-100'>
            <Link
              href='/'
              className='p-2xs-bold flex flex-row items-center pl-2 text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold px-2 text-green-600'>{'>'}</span>
            <Link
              href='/nieuws'
              className='p-2xs-bold pr-2 text-green-600 hover:text-green-300 active:text-green-800'
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
                    : 'text-white bg-green-800 border border-green-800'
                }`}
              >
                {data?.category}
              </Tag>
            </div>
            <h1
              className={`${
                cardColour === 'bg-green-300' ? 'text-green-800' : 'text-gray-100'
              } heading-2xl-semibold sm:heading-5xl-semibold`}
            >
              {data?.title}
            </h1>
            {data?.newsDate && (
              <div
                className={`${
                  cardColour === 'bg-green-300' ? 'text-green-800' : 'text-gray-100'
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
