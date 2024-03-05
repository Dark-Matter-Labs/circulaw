import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import bouw from '@/public/product-chain/pcplaceholder.png'

// import data
const productChains = [
  {
    title: 'Bouw',
    slug: 'bouw',
    description: 'Lorem ipsum mooi verhaaltje over deze product chaina',
  },
  {
    title: 'Voedsel en biomassa',
    slug: 'biomassa-en-voedsel',
    description: 'Lorem ipsum mooi verhaaltje over deze product chaina',
  },
  {
    title: 'Maakindustrie',
    slug: 'maakindustrie',
    description: 'Lorem ipsum mooi verhaaltje over deze product chaina',
  },
  {
    title: 'Consumptiegoederen',
    slug: 'consumptiegoederen',
    description: 'Lorem ipsum mooi verhaaltje over deze product chaina',
  },
  {
    title: 'Kunststoffen',
    slug: 'kunststoffen',
    description: 'Lorem ipsum mooi verhaaltje over deze product chaina',
  },
];

export default function PCHomePage() {
  return (
    <>
      {' '}
      <ul className='hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4 w-full'>
        {productChains.map((chain, id) => (
          <Link href={`/${chain.slug}`} key={id}>
            <li className='group h-96 rounded-cl flex flex-col justify-between relative overflow-hidden max-w-[250px]'>
             
                <Image src={bouw} alt='image of wood' className='h-[37.5%] rounded-t-cl object-cover origin-center group-hover:scale-110 transition-transform duration-300'/>

              <div className='bg-green-800 group-hover:bg-green-600 rounded-b-cl py-4 px-6 flex flex-col h-[70%] justify-between group-hover:translate-y-[25px] absolute bottom-0 left-0 transition-all duration-300'>
              
              <div className='divide-y divide-green-600 group-hover:divide-green-800 group-hover:-translate-y-[25px] transition-all duration-300 h-[180px] flex flex-col justify-center origin-center'>
                <div className='p-3xl-semibold text-white h-1/2 pb-3 w-full flex items-end break-words transition duration-300'>
                  <div className='[overflow-wrap:anywhere]'>{chain.title}</div>
                </div>
                <div className='text-green-200 p-md pt-3 h-1/2 transition duration-300'>
                  Lorem ipsum mooi verhaaltje over deze product chaina
                </div>
              </div>


              <div className='grid justify-items-end group-hover:-translate-y-[25px] transition-all duration-300'>
                <div className='h-10 w-10 rounded-full flex items-center justify-center border-2 text-white border-white bg-transparent group-hover:bg-green-200 group-hover:border-green-200 group-hover:text-green-600  active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end'>
                  <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </div>
              </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <ul className='sm:hidden flex flex-col w-full'>
        {productChains.map((chain, id) => (
          <Link key={id} href={`/${chain.slug}`} className='block sm:hidden'>
            <li className='h-24 w-full rounded-cl bg-green-800 shadow mb-2'>
              <div className='flex items-center justify-between'>
                <div className='h-24 w-24 mx-3 relative flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='60'
                    height='61'
                    viewBox='0 0 60 61'
                    fill='none'
                    className='group-hover:fill-green-200 fill-white'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M22.1739 60.4316C22.8937 60.4316 23.4781 59.8475 23.4781 59.1274V40.8661C23.4781 40.146 24.0626 39.5619 24.7826 39.5619H35.2174C35.9374 39.5619 36.5219 40.146 36.5219 40.8661V59.1274C36.5219 59.8475 37.106 60.4316 37.8261 60.4316H48.2608C51.8621 60.4316 54.7825 57.5112 54.7825 53.9099V36.8217C56.8773 36.3952 58.6643 34.9537 59.5032 32.9268C60.5126 30.4903 59.9556 27.6845 58.0905 25.8194L34.6122 2.34108C32.065 -0.204839 27.9352 -0.204839 25.3879 2.34108L1.90962 25.8194C0.0445482 27.6845 -0.512687 30.4903 0.496982 32.9268C1.33582 34.9537 3.12252 36.3951 5.21741 36.8217V53.9099C5.21741 57.5112 8.13814 60.4316 11.7395 60.4316H22.1742H22.1739ZM20.8694 57.8229H11.7387C9.57721 57.8229 7.82547 56.0711 7.82547 53.91V35.6486C7.82547 34.9289 7.24133 34.3444 6.52128 34.3444C4.93904 34.3444 3.51224 33.391 2.90538 31.9286C2.30019 30.4665 2.63547 28.7839 3.75457 27.6648L27.2329 4.18652C28.7601 2.65773 31.2384 2.65773 32.7659 4.18652L56.2442 27.6648C57.3633 28.7839 57.6986 30.4664 57.093 31.9286C56.4866 33.391 55.0597 34.3444 53.4775 34.3444C52.7574 34.3444 52.1733 34.9289 52.1733 35.6486V53.91C52.1733 56.0712 50.4215 57.8229 48.26 57.8229H39.1294V40.8664C39.1294 38.7052 37.3775 36.9535 35.2161 36.9535H24.7814C22.6199 36.9535 20.8682 38.7053 20.8682 40.8664L20.8694 57.8229Z'
                    />
                  </svg>
                </div>
                <div className='text-grey-100 w-full break-words max-w-[180px] mr-3'>
                  <h3 className='p-4xl-semibold break-words w-full'>{chain.title}</h3>
                </div>
                <div className='grid justify-items-end mr-6'>
                  <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 text-white border-white bg-transparent group-hover:bg-green-200 group-hover:border-green-200 group-hover:text-green-600  active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end'>
                    <ArrowRightIcon className='inline-block h-5 w-5' aria-hidden='true' />
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
