'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/headers';
import commentIcon from '@/public/comment-icon.svg';
import { DiscussionEmbed } from 'disqus-react';

export default function ForumPage() {
  return (
    <div>
      <Header
        title='Verder praten over circulaire houtbouw? Dat kan!'
        bgColor='bg-green-500'
        imageURL='/big-decoration.png'
      />
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
