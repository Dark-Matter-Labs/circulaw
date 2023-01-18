import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
import useSWR from 'swr';
import client, { urlFor } from '../lib/sanity';

export default function ThemeBottomSection({ props }) {
  const { data } = useSWR(
    groq`*[_type == "measure" && thema == "${props.thema}" && isFeatured == true]`,
    (query) => client.fetch(query),
  );
  return (
    <div>
      <div className='pb-10 pt-6 global-margin'>
        <h2 className='mobile sm:desktop'>Uitgelicht: {data?.length} instrumenten om houtbouw te bevorderen</h2>
        <h4 className='mobile sm:desktop'>Mét voorbeelden en een handige leidraad</h4>
      </div>

      <div className='bg-green3 bg-opacity-10'>
        <div className='pt-5 global-margin  '>
          {data?.map((measure) => (
            <div key={measure._id} className='border-b border-black-white-600 pb-10'>
              <div className='grid grid-cols-1 sm:flex items-center'>
                <div className='hidden sm:block pt-6 pr-10'>
                  <div className='w-[33rem] h-[16rem]'>
                  <Image
                    src={urlFor(measure.featuredImage).url()}
                    alt={measure.featuredImage.altText}
                    width={530}
                    height={400}
                  />
                  </div>
                </div>
                <div className='pl-4'>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={urlFor(measure.featuredImage).url()}
                      alt={measure.featuredImage.altText}
                      width={200}
                      height={200}
                    />
                  </div>

                  <h3 className='pt-6 mobile sm:desktop'>{measure.titel}</h3>
                  <p className='body-text-mobile sm:body-new py-3 max-w-2xl'>
                    {measure.introText}
                  </p>
                  <div className='flex justify-between pt-20'>
                    <div>
                      {measure?.extraContent && (
                        <div className='flex'>
                          <div className='border-green-600 bg-green-600 text-white r-category py-0.5 px-2 rounded-md'>
                            {measure.extraContent[0]}
                          </div>
                          <div className='border-green33 bg-green33 text-white r-category p-0.5 px-2 rounded-md ml-4'>
                            {measure.extraContent[1]}
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <Link href={`/measures/${measure.slug.current}`}>
                        <span className='text-greenLink link-mobile sm:link'>
                          Bekijk het instrument{'>'}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
