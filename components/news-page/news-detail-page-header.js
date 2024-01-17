import { ArrowLeftIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Tag from '../tag';

export default function NewsDetailPageHeader({ cardColour, data }) {
  const router = useRouter();
  const event = new Date(data.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <>
      <div className={`${cardColour} h-72 my-3`}>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <button
            onClick={() => router.back()}
            className='mt-6 breadcrumb flex flex-row items-center text-gray-100 underline hover:text-green-300 active:text-green-800'
          >
            <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> TERUG
          </button>
          <div className='mb-6'>
            <div className='flex flex-grow-0'>
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
            <h1 className='p-5xl-semibold sm:p-7xl-semibold text-gray-100'>{data.newsTitle}</h1>
            {data.newsDate && (
              <div className='text-gray-100'> {event.toLocaleDateString('nl-NL', options)}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
