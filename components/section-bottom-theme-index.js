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
      <div className='pb-10 global-margin'>
        <h2 className='urban'>Uitgelicht: {data?.length} instrumenten om houtbouw te bevorderen</h2>
        <h4 className='urban'>Mét voorbeelden en een handige leidraad</h4>
      </div>

      <div className='bg-green3 bg-opacity-10'>
        <div className='pt-5 global-margin  '>
          {data?.map((measure) => (
            <div key={measure._id} className='border-b border-grey1 pb-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='hidden sm:block pt-6 pr-10'>
                  <Image
                    src={urlFor(measure.featuredImage).url()}
                    alt={measure.featuredImage.altText}
                    width={530}
                    height={256}
                  />
                </div>
                <div className='col-span-2'>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={urlFor(measure.featuredImage).url()}
                      alt={measure.featuredImage.altText}
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2 className='pt-10 mobile sm:main'>{measure.titel}</h2>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    {measure.introText}
                  </p>
                  <div className='flex justify-between pt-14'>
                    <div>
                      {measure?.extraContent && (
                        <div className='flex'>
                          <div className='border-green1 bg-green1 text-white r-category py-0.5 px-2 rounded-md'>
                            {measure.extraContent[0]}
                          </div>
                          <div className='border-green3 bg-green3 text-white r-category p-0.5 px-2 rounded-md ml-4'>
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
