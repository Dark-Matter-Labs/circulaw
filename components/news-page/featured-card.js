import Tag from '../tag';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
// if image make col span two.
// if featured make h-80 if not make height auto

// link: if create new page === true link == slug
// link internal: if create new page === false,
// link external: if cleate new page === false

export default function FeaturedCard({ data }) {
  const event = new Date(data.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div
      className={`${data.colour === 'lightGreen' ? 'bg-green-300' : ''}
                    ${data.colour === 'green' ? 'bg-green-500' : ''}
                    ${data.colour === 'darkGreen' ? 'bg-green-600' : ''}
                    ${
                      data.colour === 'extraDarkGreen' ? 'bg-green-800' : ''
                    } h-80 rounded-cl flex   justify-between items-start`}
    >
      <div
        className={`${
          data.linkText ? 'justify-between' : 'gap-y-3'
        } px-8 py-6 flex flex-col  h-full w-full`}
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
            } p-4xl-semibold py-0.5`}
          >
            {data.newsTitle}
          </div>
          {data.newsDate && (
            <div
              className={`${
                data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
              } p-xs-semibold`}
            >
              {event.toLocaleDateString('de-DE', options)}
            </div>
          )}
        </div>
        <div
          className={`${
            data.colour === 'lightGreen' ? 'text-green-800' : 'text-gray-100'
          } p-base line-clamp-4`}
        >
          {data.newsText}
        </div>
        {data.linkText && (
          <Link
            href={data.link}
            className={`${
              data.colour === 'lightGreen' ? 'text-green-800 link-interaction' : 'text-gray-100'
            } self-end p-lg-semibold`}
          >
            {data.linkText} {'>'}
          </Link>
        )}
      </div>
      {data.image && (
        <div className='w-full h-80 pl-14 relative object-cover rounded-r-cl'>
          <Image
            src={urlFor(data?.image)?.url()}
            alt={data?.newsTitle + 'image'}
            fill
            className='w-full h-full absolute rounded-r-cl '
          />
        </div>
      )}
    </div>
  );
}
