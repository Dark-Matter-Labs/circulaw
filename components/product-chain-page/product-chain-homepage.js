import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { urlFor } from '@/lib/sanity';

export default function PCHomePage({ pcData }) {
  return (
    <>
      {' '}
      <ul className='hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4 w-full'>
        {pcData?.map((chain, id) => (
          <Link href={`/${chain.slug}`} key={id}>
            <li className='group h-[400px] rounded-cl flex flex-col justify-between relative overflow-hidden max-w-[250px]'>
              <Image
                src={urlFor(chain?.image).url()}
                alt={chain.alt}
                width={250}
                height={120}
                className='h-[37.5%] rounded-t-cl object-cover origin-center group-hover:scale-110 transition-transform duration-300'
              />
              <div className='bg-green-800 group-hover:bg-green-600 rounded-b-cl pb-4 pt-2 px-6 flex flex-col h-[72%] justify-between group-hover:translate-y-[20px] absolute bottom-0 left-0 transition-all duration-300'>
                <div className='divide-y-[0.5px] divide-green-600 group-hover:divide-gray-100 group-hover:-translate-y-[20px] transition-all duration-300 h-[180px] flex flex-col justify-center origin-center'>
                  <div className='p-3xl-semibold text-white h-1/2 pb-3 w-full flex items-end break-words transition duration-300'>
                    <div
                      className={`${
                        chain.pcName === 'Consumptiegoederen' ? 'max-w-[144px]' : ''
                      } [overflow-wrap:anywhere]`}
                    >
                      {chain.pcName === 'Consumptiegoederen' ? (
                        <span>Consumptie-goederen</span>
                      ) : (
                        <span>{chain.pcName}</span>
                      )}
                    </div>
                  </div>
                  <div className='text-green-200 p-base pt-3 h-1/2 transition duration-300'>
                    {chain.cardText}
                  </div>
                </div>
                <div className='grid justify-items-end group-hover:-translate-y-[20px] transition-all duration-300'>
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
        {pcData.map((chain, id) => (
          <Link key={id} href={`/${chain.slug}`} className='block sm:hidden'>
            <li className='h-32 w-full rounded-cl bg-green-800 shadow mb-6'>
              <div className='flex items-center justify-between'>
                <div className='h-32 w-28 flex items-center justify-center'>
                  <Image
                    src={urlFor(chain?.image).url()}
                    alt={chain.alt}
                    width={250}
                    height={120}
                    className='w-full h-full object-cover rounded-l-cl'
                  />
                </div>
                <div className='text-gray-100 break-words w-full max-w-[170px] ml-6 mr-3'>
                  <h3 className='p-4xl-semibold break-words w-full'>
                    {' '}
                    {chain.pcName === 'Consumptiegoederen' ? (
                      <span className='max-w-[144px]'>Consumptie-goederen</span>
                    ) : (
                      <span>{chain.pcName}</span>
                    )}
                  </h3>
                  <h4 className='text-green-200 p-sm'>{chain.themaCount} thema&apos;s</h4>
                </div>
                <div className='grid justify-items-end mr-6'>
                  <div className='h-10 w-10 rounded-full flex items-center justify-center border-2 text-white border-white bg-transparent group-hover:bg-green-200 group-hover:border-green-200 group-hover:text-green-600  active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end'>
                    <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
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
