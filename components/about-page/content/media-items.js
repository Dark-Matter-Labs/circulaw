import Image from 'next/image';

import TitleDecorator from '@/components/title-decorator';
import { urlFor } from '@/lib/sanity';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

export default function MediaItems({ data }) {
  return (
    <div className='mb-[60px] sm:mb-[120px]'>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className={`group flex w-full items-center justify-between rounded-cl bg-orange-300 px-4 py-4 text-orange-100 sm:px-6 sm:py-10 ${open ? 'rounded-b-none' : ''}`}
            >
              <h4 className='heading-2xl-semibold sm:heading-4xl-semibold text-left'>
                CircuLaw in de media
              </h4>
              <IconChevronDown
                className={`size-8 text-orange-100 transition-transform ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </DisclosureButton>
            <DisclosurePanel className='rounded-b-cl bg-orange-100 px-6 py-10 sm:p-[60px]'>
              <p className='heading-xl sm:heading-2xl max-w-[650px] text-black'>
                Over de circulaire economie raken we nooit uitgepraat. En al helemaal niet over onze
                bijdrage eraan. Gelukkig zien steeds meer media het belang van wat wij doen. We
                treden regelmatig op in podcasts, we worden uitgenodigd om artikelen te schrijven,
                we worden geinterviewd... Op deze pagina vind je een selectie!
              </p>
              <div className='max-w-sm'>
                <h3 className='heading-2xl-semibold sm:heading-3xl-semibold mb-4 mt-6 text-orange-300'>
                  Podcasts
                </h3>
                <TitleDecorator width='w-1/4' colour='bg-orange-300' />
              </div>
              <ul className='mt-10 flex gap-4 overflow-x-auto sm:flex-wrap'>
                {data?.mediaItems
                  ?.filter((item) => item.type === 'podcast')
                  .map((podcast, index) => (
                    <Podcast key={index} podcast={podcast} />
                  ))}
              </ul>
              <div className='max-w-sm'>
                <h3 className='heading-2xl-semibold sm:heading-3xl-semibold mb-4 mt-6 text-orange-300'>
                  Publiciteit
                </h3>
                <TitleDecorator width='w-1/4' colour='bg-orange-300' />
              </div>
              <ul className='mt-10 flex gap-4 overflow-x-auto sm:flex-wrap'>
                {data?.mediaItems
                  ?.filter((item) => item.type === 'video')
                  .map((item, index) => (
                    <Video key={index} video={item} />
                  ))}
              </ul>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function Podcast({ podcast }) {
  return (
    <li className=''>
      <a
        href={podcast.link}
        target='_blank'
        rel='noopener noreferrer'
        className='block h-[200px] w-[200px] overflow-hidden rounded-cl'
      >
        <Image
          src={urlFor(podcast?.image).url() ?? ''}
          alt={podcast.name}
          width={200}
          height={200}
          className='h-full w-full object-cover'
        />
      </a>
    </li>
  );
}

function Video({ video }) {
  return (
    <li className=''>
      <a
        href={video.link}
        target='_blank'
        rel='noopener noreferrer'
        className='block overflow-hidden rounded-cl sm:h-[260px] sm:w-[390px]'
      >
        <Image
          src={urlFor(video?.image).url() ?? ''}
          alt={video.name}
          width={390}
          height={260}
          className='h-full w-full object-cover'
        />
      </a>
    </li>
  );
}
