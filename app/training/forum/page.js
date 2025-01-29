'use client';
import Link from 'next/link';
import commentIcon from '@/public/comment-icon.svg';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';

export default function ForumPage() {
  return (
    <div>
      <div className='my-3 h-56 bg-green-600 sm:h-72'>
        <div className='global-margin flex h-full flex-col items-start justify-between'>
          <div className='mt-6 flex h-6 items-center rounded-clSm bg-gray-100'>
            <Link
              href='/'
              className='p-2xs-bold flex flex-row items-center pl-2 text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold px-2 text-green-600'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold max-w-4xl text-gray-100'>
              Verder praten over circulaire houtbouw? Dat kan!
            </h1>
          </div>
        </div>
      </div>
      <div className='global-margin my-16'>
        <div className='max-w-[700px]'>
          <p className='p-base mb-6'>
            Ben je bezig met de e-learning{' '}
            <Link href='/traning'>
              <span className='p-base-semibold'>
                &apos;Circulaire houtbouw onder de Omgevingswet&apos;
              </span>
            </Link>
            ? En wil je graag verder praten of je inzichten delen? Of heb je een specifieke casus?
            Dan ben je hier op de juiste plek! Hier vind je experts, collega&apos;s en andere
            gelijkgestemden die zich net als jij bezighouden met houtbouw.
          </p>
          <p className='p-base mb-6'>
            Ben je nog niet met de e-learning begonnen? Dan raden we je aan dat eerst te doen.{' '}
            <Link href='/training' className='link-base link-interaction'>
              Lees meer over de e-learning circulaire houtbouw!
            </Link>{' '}
          </p>
        </div>
        <div className='my-16 max-w-[700px] text-center' id='comments'>
          <div className='flex items-center justify-center'>
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
    </div>
  );
}
