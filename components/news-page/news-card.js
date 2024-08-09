import LinkIcon from '../link-icon';
import Tag from '@/components/tag';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

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
          className={`${data.colour === 'lightGreen' ? 'bg-green-300' : ''}
                    ${data.colour === 'green' ? 'bg-green-500' : ''}
                    ${data.colour === 'darkGreen' ? 'bg-green-600' : ''}
                    ${
                      data.colour === 'extraDarkGreen' ? 'bg-green-800' : ''
                    } rounded-cl flex flex-col justify-between items-start`}
        >
          {data.image && (
            <div className='w-full h-80 relative rounded-t-cl'>
              <Image
                src={urlFor(data?.image).url()}
                alt={data?.title + 'image'}
                priority={true}
                fill
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                className='w-full h-full relative object-cover rounded-t-cl '
              />
            </div>
          )}
          <div
            className={`${
              data.linkText || data.createPage === true ? 'justify-between' : ''
            } px-8 py-6 flex flex-col h-full w-full gap-y-3`}
          >
            <div className=''>
              <div className='flex grow-0'>
                <Tag
                  classes={`${
                    data.colour === 'extraDarkGreen'
                      ? 'text-green-300 border border-green-300 bg-transparent'
                      : 'text-white bg-green-800 border border-green-800'
                  }`}
                >
                  {data.category}
                </Tag>
              </div>
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
                } heading-2xl-semibold py-0.5`}
              >
                {data.title}
              </div>
              {data.newsDate && (
                <div
                  className={`${
                    data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
                  } p-xs-semibold`}
                >
                  {event.toLocaleDateString('nl-NL', options)}
                </div>
              )}
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
              } p-base`}
            >
              {data.newsText}
            </div>
            {data.createPage === true && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-green-800 group-hover:text-green-200 group-hover:underline active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                    : 'text-gray-100 group-hover:text-green-200 group-hover:underline active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '
                } self-end heading-xl-semibold`}
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
          className={`${data.colour === 'lightGreen' ? 'bg-green-300' : ''}
                    ${data.colour === 'green' ? 'bg-green-500' : ''}
                    ${data.colour === 'darkGreen' ? 'bg-green-600' : ''}
                    ${
                      data.colour === 'extraDarkGreen' ? 'bg-green-800' : ''
                    } rounded-cl flex flex-col justify-between items-start`}
        >
          {data.image && (
            <div className='w-full h-80 relative rounded-t-cl'>
              <Image
                src={urlFor(data?.image).url()}
                alt={data?.title + 'image'}
                fill
                priority={true}
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                className='w-full h-full relative object-cover rounded-t-cl '
              />
            </div>
          )}
          <div
            className={`${
              data.linkText || data.createPage === true ? 'justify-between ' : ''
            } px-8 py-6 flex flex-col gap-y-3 h-full w-full`}
          >
            <div className=''>
              <div className='flex grow-0'>
                <Tag
                  classes={`${
                    data.colour === 'extraDarkGreen'
                      ? 'text-green-300 border border-green-300 bg-transparent'
                      : 'text-white bg-green-800 border border-green-800'
                  }`}
                >
                  {data.category}
                </Tag>
              </div>
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
                } heading-2xl-semibold py-0.5`}
              >
                {data.title}
              </div>
              {data.newsDate && (
                <div
                  className={`${
                    data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
                  } p-xs-semibold`}
                >
                  {event.toLocaleDateString('nl-NL', options)}
                </div>
              )}
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
              } p-base`}
            >
              {data.newsText}
            </div>
            {data.linkText && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-green-800 group-hover:text-green-200 group-hover:underline active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                    : 'text-gray-100 group-hover:text-green-200 group-hover:underline active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '
                } self-end heading-xl-semibold inline-flex flex-row itmes-center`}
              >
                {data.linkText}{' '}
                {data.internalExternal === true ? <LinkIcon /> : <span>&nbsp;{'>'}</span>}
              </div>
            )}
            {data.createPage === true && (
              <div
                className={`${
                  data.colour === 'lightGreen'
                    ? 'text-green-800 hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                    : 'text-gray-100 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '
                } self-end heading-xl-semibold`}
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
        className={`${data.colour === 'lightGreen' ? 'bg-green-300' : ''}
                    ${data.colour === 'green' ? 'bg-green-500' : ''}
                    ${data.colour === 'darkGreen' ? 'bg-green-600' : ''}
                    ${
                      data.colour === 'extraDarkGreen' ? 'bg-green-800' : ''
                    } rounded-cl flex flex-col justify-between items-start`}
      >
        {data.image && (
          <div className='w-full h-80 relative rounded-t-cl'>
            <Image
              src={urlFor(data?.image).url()}
              alt={data?.title + 'image'}
              fill
              priority={true}
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
              className='w-full h-full relative object-cover rounded-t-cl '
            />
          </div>
        )}
        <div
          className={`${
            data.linkText || data.createPage === true ? 'justify-between ' : ''
          } px-8 py-6 flex gap-y-3 flex-col h-full w-full`}
        >
          <div className=''>
            <div className='flex grow-0'>
              <Tag
                classes={`${
                  data.colour === 'extraDarkGreen'
                    ? 'text-green-300 border border-green-300 bg-transparent'
                    : 'text-white bg-green-800 border border-green-800'
                }`}
              >
                {data.category}
              </Tag>
            </div>
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
              } heading-2xl-semibold py-0.5`}
            >
              {data.title}
            </div>
            {data.newsDate && (
              <div
                className={`${
                  data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
                } p-xs-semibold`}
              >
                {event.toLocaleDateString('nl-NL', options)}
              </div>
            )}
          </div>
          <div
            className={`${
              data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
            } p-base`}
          >
            {data.newsText}
          </div>
          {data.linkText && (
            <div
              className={`${
                data.colour === 'lightGreen'
                  ? 'text-green-800 hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                  : 'text-gray-100 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '
              } self-end heading-xl-semibold inline-flex flex-row itmes-center`}
            >
              {data.linkText}{' '}
              {data.internalExternal === true ? <LinkIcon /> : <span>&nbsp;{'>'}</span>}
            </div>
          )}
          {data.createPage === true && (
            <div
              className={`${
                data.colour === 'lightGreen'
                  ? 'text-green-800 hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                  : 'text-gray-100 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '
              } self-end heading-xl-semibold`}
            >
              Lees meer {'>'}
            </div>
          )}
        </div>
      </div>
    );
  }
}
