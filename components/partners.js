import Link from 'next/link';
import Image from 'next/image';
import { fetcher } from '../utils/swr-fetcher';
import useSWR from 'swr';
import sanityLogo from '../public/logo_partners/sanity-logo.svg';
import { groq } from 'next-sanity';
import { urlFor } from '../lib/sanity';
import { partnersQuery } from '../lib/queries';

const bordersDesktop = 'lg:[&:nth-child(6)]:border-r-0 lg:[&:nth-child(14)]:border-r-0 lg:[&:nth-child(21)]:border-r-0 lg:[&:nth-child(29)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(8)]:border-r lg:[&:nth-child(12)]:border-r lg:[&:nth-child(17)]:border-r lg:[&:nth-child(26)]:border-r'
const bordersSmall = '[&:nth-child(3)]:border-r-0 [&:nth-child(8)]:border-r-0 [&:nth-child(12)]:border-r-0 [&:nth-child(17)]:border-r-0 [&:nth-child(21)]:border-r-0 [&:nth-child(26)]:border-r-0'
// fix query to receive the array and not an object 
export default function Partners() {
    const { data } = useSWR(groq`${partnersQuery}`, fetcher)
    const partners = data?.partners

  return (
    <div className='bg-green-800 pt-10 pb-2'>
      <div className='global-margin pb-12 px-4 lg:pb-16'>
        <div className='grid grid-cols-3 gap-x-0.5 gap-y-4 lg:grid-cols-5 '>
          {partners?.map((partner, index) => {
            return (
              <>
                <div
                  key={partner.partnerName}
                  className={`col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200  ${bordersDesktop} ${bordersSmall}`}
                >
                  <Link target='_blank' href={partner.partnerLink} rel='noopener noreferrer'>
                    <Image src={urlFor(partner.logo).url()} alt={partner.partnerName} width={190} height={190}/>
                  </Link>
                </div>

                {index === 2 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 4 && (
                    <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}

                {index === 5 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 8 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 9 && (
                    <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}

                {index === 11 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}  
                
                {partners.length > 15 && index === 14 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}
                 {partners.length > 15 && index === 14 && (
                    <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}
                 {partners.length > 15 && index === 17 && (
                    <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className='global-margin pb-2 text-black-white-200 p-base'>
        <p className='pb-8'>
          Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
          techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
          incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
          rechten kunnen worden ontleend. We horen graag wat je ervan vindt, wat je anders zou
          willen, wat je mist en natuurlijk horen we ook graag waar je blij van wordt.{' '}
          <Link href='/contact'>
            <span className='underline'>Stuur je feedback op deze testversie.</span>
          </Link>
        </p>
        <hr className='border-black-white-200 ' />
        <div className='text-center py-2'>
          <span className='text-black-white-100 p-sm'>
            Legal data & content managed with support from
          </span>
          <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
            <Image className='inline mx-2 my-2' src={sanityLogo} alt='Sanity logo' />
          </a>
        </div>
      </div>
    </div>
  );
}
