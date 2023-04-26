import Image from 'next/image';
import { urlFor } from '../lib/sanity';

export default function NewsItems({ newsItems }) {
  console.log(newsItems);
  return (
    <>
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-x-4 gap-y-8 overflow-hidden'>
        {newsItems?.map((item) => (
          <div
            key={item?._id}
            className={`${
              newsItems[1] === item || newsItems[3] === item ? 'bg-green-600' : 'bg-green-800'
            } h-[335px] w-full max-w-[310px] rounded-cl text-black-white-100 flex flex-col items-start`}
          >
            {item?.image && (
              <div className='h-32 w-full relative'>
                <Image
                  src={urlFor(item?.newsImage)?.url()}
                  alt={item?.title + 'image'}
                  fill
                  className='rounded-t-cl object-cover'
                />
              </div>
            )}
            <div className='p-6'>
              {item?.date && <div className='capitilize pb-1'>{item?.date}</div>}

              <div className='pb-4'>
                <h3 className='mobile sm:desctop'>{item?.title}</h3>
              </div>
              <div>
                <p className='mobile sm:desktop'>{item?.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
