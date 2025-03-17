import Image from 'next/image';
import Link from 'next/link';
import Badge from '../shared/new-badge';
import { urlFor } from '@/lib/sanity';

import LinkIcon from '../link-icon';

export default function NewsCard({ data }) {
  const event = new Date(data.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  if (data.createPage === true) {
    return (
      <Link href={`/nieuws/${data?.slug?.current}`} className='group'>
        <div
          className={`${data.colour === 'lightGreen' ? 'bg-green-400' : ''} ${data.colour === 'green' ? 'bg-green-500' : ''} ${data.colour === 'darkGreen' ? 'bg-green-500' : ''} ${
            data.colour === 'extraDarkGreen' ? 'bg-cl-black' : ''
          } flex flex-col items-start justify-between rounded-cl`}
        >
          {data.image && (
            <div className='relative h-80 w-full rounded-t-cl'>
              <Image
                src={urlFor(data?.image).url()}
                alt={data?.title + 'image'}
                priority={true}
                fill
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                className='relative h-full w-full rounded-t-cl object-cover'
                placeholder='blur'
                blurDataURL={data?.metadata.lqip}
              />
            </div>
          )}
          <div
            className={`${
              data.linkText || data.createPage === true ? 'justify-between' : ''
            } flex h-full w-full flex-col gap-y-3 px-8 py-6`}
          >
            <div className=''>
              <div className='flex grow-0'>
                <Badge variant='green'>
                {data.category}
                </Badge>
              </div>
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
                } heading-2xl-semibold py-0.5`}
              >
                {data.title}
              </div>
              {data.newsDate && (
                <div
                  className={`${
                    data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
                  } p-xs-semibold`}
                >
                  {event.toLocaleDateString('nl-NL', options)}
                </div>
              )}
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
              } p-base`}
            >
              {data.newsText}
            </div>
            {data.createPage === true && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-cl-black focus:right-2 focus:text-green-200 focus:ring-white active:text-green-200 group-hover:text-green-300 group-hover:underline'
                    : 'text-green-100 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-400 group-hover:text-green-300 group-hover:underline'
                } heading-xl-semibold self-end`}
              >
                Lees meer {'>'}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  } else if (data.linkUrl !== undefined) {
    return (
      <Link
        href={data.linkUrl}
        target={`${data.internalExternal === true ? '_blank' : ''}`}
        className='group'
      >
        <div
          className={`${data.colour === 'lightGreen' ? 'bg-green-400' : ''} ${data.colour === 'green' ? 'bg-green-500' : ''} ${data.colour === 'darkGreen' ? 'bg-green-500' : ''} ${
            data.colour === 'extraDarkGreen' ? 'bg-cl-black' : ''
          } flex flex-col items-start justify-between rounded-cl`}
        >
          {data.image && (
            <div className='relative h-80 w-full rounded-t-cl'>
              <Image
                src={urlFor(data?.image).url()}
                alt={data?.title + 'image'}
                fill
                priority={true}
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                className='relative h-full w-full rounded-t-cl object-cover'
                placeholder='blur'
                blurDataURL={data?.metadata.lqip}
              />
            </div>
          )}
          <div
            className={`${
              data.linkText || data.createPage === true ? 'justify-between' : ''
            } flex h-full w-full flex-col gap-y-3 px-8 py-6`}
          >
            <div className=''>
              <div className='flex grow-0'>
              <Badge variant='green'>
              {data.category}
              </Badge>
                
              </div>
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
                } heading-2xl-semibold py-0.5`}
              >
                {data.title}
              </div>
              {data.newsDate && (
                <div
                  className={`${
                    data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
                  } p-xs-semibold`}
                >
                  {event.toLocaleDateString('nl-NL', options)}
                </div>
              )}
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
              } p-base`}
            >
              {data.newsText}
            </div>
            {data.linkText && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-cl-black focus:right-2 focus:text-green-200 focus:ring-white active:text-green-200 group-hover:text-green-300 group-hover:underline'
                    : 'text-green-100 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-400 group-hover:text-green-300 group-hover:underline'
                } heading-xl-semibold itmes-center inline-flex flex-row self-end`}
              >
                {data.linkText}{' '}
                {data.internalExternal === true ? <LinkIcon /> : <span>&nbsp;{'>'}</span>}
              </div>
            )}
            {data.createPage === true && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-cl-black hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-200'
                    : 'text-green-100 hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-400'
                } heading-xl-semibold self-end`}
              >
                Lees meer {'>'}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`${data.colour === 'lightGreen' ? 'bg-green-400' : ''} ${data.colour === 'green' ? 'bg-green-500' : ''} ${data.colour === 'darkGreen' ? 'bg-green-500' : ''} ${
          data.colour === 'extraDarkGreen' ? 'bg-cl-black' : ''
        } flex flex-col items-start justify-between rounded-cl`}
      >
        {data.image && (
          <div className='relative h-80 w-full rounded-t-cl'>
            <Image
              src={urlFor(data?.image).url()}
              alt={data?.title + 'image'}
              fill
              priority={true}
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
              className='relative h-full w-full rounded-t-cl object-cover'
              placeholder='blur'
              blurDataURL={data?.metadata.lqip}
            />
          </div>
        )}
        <div
          className={`${
            data.linkText || data.createPage === true ? 'justify-between' : ''
          } flex h-full w-full flex-col gap-y-3 px-8 py-6`}
        >
          <div className=''>
            <div className='flex grow-0'>
              <Badge>
              {data.category}
              </Badge>
                
            
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
              } heading-2xl-semibold py-0.5`}
            >
              {data.title}
            </div>
            {data.newsDate && (
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
                } p-xs-semibold`}
              >
                {event.toLocaleDateString('nl-NL', options)}
              </div>
            )}
          </div>
          <div
            className={`${
              data.colour === 'lightGreen' ? 'text-cl-black' : 'text-green-100'
            } p-base`}
          >
            {data.newsText}
          </div>
          {data.linkText && (
            <div
              className={`${
                data.colour === 'lightGreen'
                  ? 'text-cl-black hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-200'
                  : 'text-green-100 hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-400'
              } heading-xl-semibold itmes-center inline-flex flex-row self-end`}
            >
              {data.linkText}{' '}
              {data.internalExternal === true ? <LinkIcon /> : <span>&nbsp;{'>'}</span>}
            </div>
          )}
          {data.createPage === true && (
            <div
              className={`${
                data.colour === 'lightGreen'
                  ? 'text-cl-black hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-200'
                  : 'text-green-100 hover:text-green-300 focus:right-2 focus:text-green-200 focus:ring-white active:text-green-400'
              } heading-xl-semibold self-end`}
            >
              Lees meer {'>'}
            </div>
          )}
        </div>
      </div>
    );
  }
}
