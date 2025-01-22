'use client';
import Link from 'next/link';
import commentIcon from '@/public/comment-icon.svg';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';

export default function ForumPage() {
  return (
    <div>
      <div className='bg-green-600 h-72 my-3'>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <div className='bg-gray-100 h-6 mt-6 flex items-center rounded-clSm'>
            <Link
              href='/'
              className='p-2xs-bold flex pl-2 flex-row items-center text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold text-green-600 px-2'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-100 heading-2xl-semibold sm:heading-5xl-semibold'>
              lets talk about what we learnt!
            </h1>
          </div>
        </div>
      </div>
      <div className='min-h-60 global-margin'>
        <div className='max-w-[700px]'>
          <h2 className='heading-3xl-semibold my-10'>Come talk about round laws</h2>
          <p className='p-base mb-6'>Some text to explain the forum</p>
        </div>
      </div>

      <div className='global-margin my-16 text-center' id='comments'>
        <div className='flex justify-center items-center'>
          <Image src={commentIcon} alt='' />
          <h3 className='heading-xl-semibold sm:heading-2xl-semibold pl-2'>
            Kaart een nieuw onderwerp aan of discussieer mee
          </h3>
        </div>
        <DiscussionEmbed
          shortname='circulaw'
          config={{
            identifier: 'eLearning',
            title: 'eLearning',
          }}
        />
      </div>
    </div>
  );
}
