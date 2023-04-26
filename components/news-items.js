import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import LinkIcon  from '../components/link-icon';
import CustomButton from './custom-button';




export default function NewsItems({ newsItems }) {

    const formatDate = (date) => {
        let dateObject = new Date(date);
        return dateObject.toLocaleDateString('nl', {day:'numeric' , month:'short', year:'numeric'});
      };
  return (
    <>
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-x-4 gap-y-8 overflow-hidden'>
        {newsItems?.map((item) => (
          <div
            key={item?._id}
            className={`${
              newsItems[1] === item || newsItems[3] === item ? 'bg-green-600' : 'bg-green-800'
            } h-[335px] w-full max-w-[310px] rounded-cl text-black-white-100 flex flex-col items-start p-6`}
          >
            {/*  
            {item?.image && (
              <div className='h-32 w-full relative'>
                <Image
                  src={urlFor(item?.newsImage)?.url()}
                  alt={item?.title + 'image'}
                  fill
                  className='rounded-t-cl object-cover'
                />
              </div>
            )} */}

              {item?.date && <div className='capitilize pb-1'>{formatDate(item?.date)}</div>}
              <div className='pb-4'>
                <h3 className='mobile sm:desctop'>{item?.title}</h3>
              </div>
              <div>
                <p className='mobile sm:desktop pb-4'>{item?.text}</p>
              </div>
              {item?.internalLink && 
              <div>
                <Link href={item?.internalLink}>
                <CustomButton color='home'>{item?.internalLinkText}<ArrowRightIcon className='inline-block h-4 w-4 ml-1 place-self-end' aria-hidden='true' />
                
                </CustomButton>
                </Link>
              </div>}
              {item.externalLink && 
                <div>
                    <Link href={item.externalLink} target='_blank'>
                        <span className='text-green-500 inline link-base sm:link-lg link-interaction break-words'>{item.externalLinkText}
                        <LinkIcon />
                        </span>
                    </Link>
                </div>
              }
            </div>
        ))}
      </div>
    </>
  );
}
