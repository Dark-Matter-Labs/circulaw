import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';



export default function AreaPlanning({params}) {
    if (params.productChain === 'bouw') {
        return (
            <>
            <div className="block h-[260px] w-full sm:h-[360px] bg-green-500">
                  <div className='global-margin z-5 relative flex h-[260px] flex-col justify-between sm:h-[360px]'>
          <div className='pt-8'>
            <Link
              className='group inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-600'
              href='/'
            >
              <span className='p-2xs-bold align-middle group-hover:text-green-300 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-green-800'>
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>
          <div className='max-w-5xl pb-8'>
            <div className=''>
              <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-gray-100'>
              Stimuleer houtbouw in circulaire gebiedsontwikkeling
              </h1>
            </div>
          </div>
        </div>
            </div>

            <div className='global-margin'>
                <div className='relative w-full my-16 pt-10 flex items-center'>
                    <Image 
                        src='/area-planning-image.png'
                        alt='infographique'
                        width={900}
                        height={900 * (555 / 1160)}
                        sizes='
                              (max-width: 768px) 95vw,
                              (max-width: 1200px) 60vw,
                              40vw'
                              className='w-full'
                    />
                </div>
                <div>
                  <h2 className='heading-xl-semibold sm:heading-2xl-semibold'>
                  Het circulaire gebiedsontwikkelingsproces
                  </h2>
                  <div className='my-16'>
                <Disclosure className='' as='div'>
                  <>
                    <DisclosureButton className='group flex w-full items-center justify-between rounded-clSm bg-green-50 px-6 py-6 text-gray-800 sm:px-10'>
                      <div className='flex flex-col'>
                        <h3 className='heading-xl-semibold sm:heading-2xl-semibold mb-2.5 text-left'>
                        Alle fasen kort uitgelegd
                        </h3>
                      </div>
                      <IconChevronDown className='h-6 w-6 place-self-start text-gray-800 group-data-[open]:rotate-180' />
                    </DisclosureButton>
                    <DisclosurePanel className='-mt-6 rounded-b-clSm bg-green-50 px-6 pb-4 sm:px-10'>
                      <div className='flex flex-col gap-8 py-6'>
                          <h4 className='heading-xl-semibold'>
                          Alle fasen kort uitgelegd
                          </h4>
                          <ul className=''>
                            <li>
                              <span className='p-base-semibold'></span>
                            </li>
                          </ul>
                      </div>
                    </DisclosurePanel>
                  </>
                </Disclosure>
              </div>
                </div>
            </div>
            </>
        )
    } else return notFound()
    
}