import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconArrowRight, IconExternalLink } from '@tabler/icons-react';

import Badge from '../shared/new-badge';

const getBackgroundColor = (isFeatured, id, colour) => {
  if (isFeatured) {
    switch (id) {
      case 0:
        return 'bg-green-300';
      case 1:
        return 'bg-green-200';
      case 2:
        return 'bg-green-400';
      default:
        return 'bg-green-500';
    }
  } else {
    return `bg-${colour}`; // fallback to colour based on the prop
  }
};

const formatDate = (date) => {
  const event = new Date(date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return event.toLocaleDateString('nl-NL', options);
};

const renderLinkButton = (data) => {
  const linkClasses =
    (data.id === 1 && data.isFeatured) || (data.isFeatured === false && data.colour === 'green-200')
      ? 'hover:text-green-400 focus:text-green-400 focus:ring-2 focus:ring-green-400 active:text-green-400 group-hover:text-green-400 group-focus:text-green-400 group-focus:ring-2 group-focus:ring-green-400 group-active:text-green-400'
      : 'hover:text-white focus:text-white focus:ring-2 focus:ring-white active:text-white group-hover:text-white group-focus:text-white group-focus:ring-2 group-focus:ring-white group-active:text-white';

  return (
    <div
      className={`${linkClasses} heading-xl-semibold mt-auto flex items-center self-start text-cl-black`}
    >
      {data.linkText || 'Lees meer'}
      {data.isExternal ? (
        <IconExternalLink className='ml-1 size-5' />
      ) : (
        <IconArrowRight className='ml-1' />
      )}
    </div>
  );
};

export default function NewNewsCard({ data }) {
  const backgroundColor = getBackgroundColor(data.isFeatured, data.id, data.colour);
  const formattedDate = data.newsDate ? formatDate(data.newsDate) : null;

  const CardContent = () => (
    <div className={`${backgroundColor} flex h-full w-full flex-col rounded-cl`}>
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
          {formattedDate && <div className='p-xs-semibold text-cl-black'>{formattedDate}</div>}
        </div>

        {data.isFeatured === false && <div className='p-base text-cl-black'>{data.newsText}</div>}

        {(data.hasPage || data.linkText) && renderLinkButton(data)}
      </div>
    </div>
  );

  if (data.hasPage) {
    return (
      <Link href={`/nieuws/${data.slug?.current}`} className='group flex h-full w-full'>
        <CardContent />
      </Link>
    );
  } else if (data.linkUrl) {
    return (
      <Link
        href={data.linkUrl}
        target={data.isExternal ? '_blank' : ''}
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
