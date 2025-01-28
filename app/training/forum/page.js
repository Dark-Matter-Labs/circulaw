'use client';
import Link from 'next/link';
import commentIcon from '@/public/comment-icon.svg';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';

export default function ForumPage() {
  return (
    <div>
      <div className='bg-green-600 h-56 sm:h-72 my-3'>
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
            <h1 className='text-gray-100 heading-2xl-semibold sm:heading-5xl-semibold max-w-4xl'>
              Verder praten over circulaire houtbouw? Dat kan!
            </h1>
          </div>
        </div>
      </div>
      <div className='global-margin my-16'>
        <div className='max-w-[700px]'>
          <p className='p-base mb-6'>
            Heb je onze e-learning{' '}
            <Link href='/traning'><span className='p-base-semibold'>&apos;Circulaire houtbouw onder de Omgevingswet&apos;</span></Link>{' '}
            afgerond? En wil je graag verder praten of je inzichten delen? Of heb je een specifieke
            casus? Dan ben je hier op de juiste plek! Hier vind je experts, collega&apos;s en andere
            gelijkgestemden die zich net als jij bezighouden met houtbouw.
          </p>
          <p className='p-base mb-6'>
            Heb je de e-learning nog niet gedaan? Dan raden we je aan dat eerst te doen.{' '}
            <Link href='/training' className='link-base link-interaction'>
            Lees meer over de e-learning circulaire houtbouw!
            </Link>{' '}
          </p>
        </div>
        <div className='my-16 text-center max-w-[700px]' id='comments'>
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
    </div>
  );
}
