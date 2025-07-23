import { PortableText } from 'next-sanity';
import Image from 'next/image';

import NewButton from '@/components/shared/new-button';

import { aboutPageReducedPortableTextComponents } from '../../../lib/portable-text/pt-components';

export default function Urgency({ data }) {
  return (
    <div className='mb-[60px] flex flex-col sm:mb-[120px]'>
      <div className='relative mb-10 ml-auto flex basis-2/3 sm:mr-10'>
        <video
          className='h-[200px] w-full rounded-cl object-cover sm:h-[500px]'
          autoPlay
          loop
          muted
          playsInline
          src='/urgencyImage.mp4'
        />
        <div className='absolute right-6 hidden h-full min-w-[85px] flex-col justify-between sm:flex sm:py-10'>
          <Image
            src='/urgencyIcon1.svg'
            width={85}
            height={89}
            alt='Urgency Icon 1'
            className='opacity-70'
          />
          <Image
            src='/urgencyIcon2.svg'
            width={85}
            height={89}
            alt='Urgency Icon 2'
            className='opacity-70'
          />{' '}
          <Image
            src='/urgencyIcon3.svg'
            width={85}
            height={89}
            alt='Urgency Icon 3'
            className='opacity-70'
          />
        </div>
        <div className='absolute right-4 flex h-full min-w-[42px] flex-col justify-between py-4 sm:hidden'>
          <Image
            src='/urgencyIcon1.svg'
            width={85 / 2}
            height={89 / 2}
            alt='Urgency Icon 1'
            className='opacity-70'
          />
          <Image
            src='/urgencyIcon2.svg'
            width={85 / 2}
            height={89 / 2}
            alt='Urgency Icon 2'
            className='opacity-70'
          />{' '}
          <Image
            src='/urgencyIcon3.svg'
            width={85 / 2}
            height={89 / 2}
            alt='Urgency Icon 3'
            className='opacity-70'
          />
        </div>
      </div>
      <div className='mb-10 flex flex-col gap-x-10 gap-y-6 sm:flex-row'>
        <div className='rounded-cl bg-green-200 px-8 py-8 sm:basis-10/12 sm:px-20'>
          <h3 className='heading-3xl-semibold mb-2 text-green-500'>{data?.title}</h3>
          <PortableText value={data?.content} components={aboutPageReducedPortableTextComponents} />
        </div>
      </div>
      <div className='flex flex-col items-center gap-x-[160px] sm:flex-row'>
        <div className='mb-4 max-w-[350px] sm:mb-0'>
          <Image
            src='/impactReport.png'
            width={356}
            height={341}
            alt='Urgency CTA Image'
            className='rounded-cl'
          />
        </div>
        <div className='flex max-w-[500px] flex-col'>
          <p className='heading-xl sm:heading-2xl mb-6 sm:mb-10'>{data?.ctaContent}</p>
          <NewButton
            href='/CircuLaw_Impact_Report_2024_NLversie.pdf'
            newTab={true}
            variant='primaryDark'
            icon='download'
          >
            Download impactreport
          </NewButton>
        </div>
      </div>
    </div>
  );
}
