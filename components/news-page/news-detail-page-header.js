import Link from 'next/link';
import Tag from '../tag';

export default function NewsDetailPageHeader({ cardColour, data }) {
  const event = new Date(data?.newsDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <>
      <div className={`${cardColour} h-72 my-3`}>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <div className='bg-green-100 h-6 mt-6 flex items-center rounded-clSm'>
            <Link
              href='/'
              className='p-2xs-bold flex pl-2 flex-row items-center text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold text-green-600 px-2'>{'>'}</span>
            <Link
              href='/nieuws'
              className='p-2xs-bold text-green-600 hover:text-green-300 active:text-green-800 pr-2'
            >
              Nieuws
            </Link>
          </div>
          <div className='mb-6'>
            <div className='flex flex-grow-0'>
              <Tag
                classes={`${
                  data?.colour === 'extraDarkGreen'
                    ? 'text-green-300 border border-green-300 bg-transparent'
                    : 'text-white bg-green-800 border border-green-800'
                }`}
              >
                {data?.category}
              </Tag>
            </div>
            <h1
              className={`${
                cardColour === 'bg-green-300' ? 'text-green-800' : 'text-gray-100'
              } p-5xl-semibold sm:p-7xl-semibold `}
            >
              {data?.newsTitle}
            </h1>
            {data?.newsDate && (
              <div
                className={`${
                  cardColour === 'bg-green-300' ? 'text-green-800' : 'text-gray-100'
                } p-base`}
              >
                {' '}
                {event.toLocaleDateString('nl-NL', options)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
