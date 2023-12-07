import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import LinkIcon from '../link-icon'


export default function ThemePageHeader({themaData}) {
    return (

        <div className='hidden sm:block w-full h-[360px]'>
        <div className='relative object-cover w-full h-full mt-3'>
          <Image
            src={urlFor(themaData?.heroImage).url()}
            alt={`${themaData.themaName} + 'hero image'`}
            fill
            className='z-0 bg-cover'
            priority
          />

          <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
            <div className='pt-8'>
              <Link
                className='rounded-clSm bg-breadcrumb px-4 pt-0.5 pb-1.5 w-auto text-gray-100'
                href='/'
              >
                <span className='p-2xs-bold link-interaction align-middle'>Home &nbsp; &gt;</span>
              </Link>
            </div>

            <div className='pb-8 max-w-3xl'>
              <div className=''>
                <h1 className='mobile sm:desktop text-grey-100 inline-block lg mobile sm:desktop'>
                  {themaData?.themaName}
                </h1>
              </div>
              <div className='col-span-7'>
                <p className='pt-4 text-grey-100 p-lg '>
                  {themaData?.themaSubtitle}{' '}
                  {themaData?.linkText && (
                    <span className='text-green-200 link-base inline-block hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white group'>
                      <a href={themaData?.headerLink} target='_blank' rel='noopener noreferrer'>
                        {themaData?.linkText}
                        <LinkIcon />
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}