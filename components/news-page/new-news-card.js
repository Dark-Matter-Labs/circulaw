import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconArrowRight, IconExternalLink } from '@tabler/icons-react';

import Badge from '../shared/new-badge';

export default function NewNewsCard({ data }) {
  const event = new Date(data.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const CardContent = () => (
    <div
      className={`${
        data.isFeatured
          ? data.id === 0
            ? 'bg-green-300'
            : data.id === 1
              ? 'bg-green-200'
              : data.id === 2
                ? 'bg-green-400'
                : 'bg-green-500' // default background if featured and id does not match 0, 1, or 2
          : `bg-${data.colour}` // background based on data.colour if not featured
      } flex h-full w-full flex-col rounded-cl`}
    >
      {data.image && (
        <div className='relative h-64 w-full rounded-t-cl'>
          <Image
            src={urlFor(data?.image).url() || '/placeholder.svg'}
            alt={`${data?.title} image`}
            priority={true}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw'
            className='relative h-full w-full rounded-t-cl object-cover'
            placeholder='blur'
            blurDataURL={data?.metadata?.lqip}
          />
        </div>
      )}
      <div className='flex flex-grow flex-col justify-between gap-y-4 px-6 py-6 md:px-8'>
        <div>
          <div className='flex'>
            <Badge variant='black'>{data.category}</Badge>
          </div>
          <h3 className='heading-2xl-semibold line-clamp-4 pb-0.5 pt-4 text-cl-black'>
            {data.title}
          </h3>
          {data.newsDate && (
            <div className='p-xs-semibold text-cl-black'>
              {event.toLocaleDateString('nl-NL', options)}
            </div>
          )}
        </div>

        {data.isFeatured === false && <div className='p-base text-cl-black'>{data.newsText}</div>}

        {(data.hasPage === true || data.linkText) && (
          <div
            className={`${data.colour === 'green-200' ? 'hover:text-green-400 focus:text-green-400 focus:ring-2 focus:ring-green-400 active:text-green-400 group-hover:text-green-400 group-focus:text-green-400 group-focus:ring-2 group-focus:ring-green-400 group-active:text-green-400' : 'hover:text-white focus:text-white focus:ring-2 focus:ring-white active:text-white group-hover:text-white group-focus:text-white group-focus:ring-2 group-focus:ring-white group-active:text-white'} heading-xl-semibold mt-auto flex items-center self-start text-cl-black`}
          >
            {data.linkText || 'Lees meer'}
            {data.isExternal === true ? (
              <IconExternalLink className='ml-1 size-5' />
            ) : (
              <IconArrowRight className='ml-1' />
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (data.hasPage === true) {
    return (
      <Link href={`/nieuws/${data?.slug?.current}`} className='group flex h-full w-full'>
        <CardContent />
      </Link>
    );
  } else if (data?.linkUrl) {
    return (
      <Link
        href={data.linkUrl || '#'}
        target={data.isExternal === true ? '_blank' : ''}
        className='group flex h-full w-full'
      >
        <CardContent />
      </Link>
    );
  } else {
    return (
      <div className='group flex h-full w-full'>
        <CardContent />
      </div>
    );
  }
}
