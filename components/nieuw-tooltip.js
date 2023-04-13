import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function NieuwToolTip() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='inline-flex rounded-full px-4 py-1 items-centershadow border button border-green-600 bg-green-500 hover:bg-black-white-200 text-black-white-200 hover:text-green-600 focus:outline-none'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Open ToolTip</span>
        NIEUW
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
                        <button
                          type='button'
                          className='rounded-md text-green-600'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-gray-900'>
                          {' '}
                          <h2 className='mobile sm:desktop'>Nieuw in CircuLaw</h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <div className='absolute inset-0 px-4 sm:px-6'>
                          <h3 className='mobile sm:desktop'>Nieuwe voorbeelden</h3>
                          <p className='p-base pb-6'>
                            Waar loop je nou in de praktijk tegen aan als je de circulariteit van de
                            matrasketen wilt bevorderen? We hebben{' '}
                            <a
                              className='link-base'
                              href='https://cdn.sanity.io/files/2vfoxb3h/production/947637ee3b34288c1b68867902c339ad28641756.pdf'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              2 voorbeelden toegevoegd die duidelijk maken welke beslissingen een
                              rol kunnen spelen bij inkoop.
                            </a>
                          </p>
                          <h3 className='mobile sm:desktop'>Methodiek voor wetsanalyse</h3>
                          <p className='p-base pb-6'>
                            CircuLaw volgt voor de analyse van wet-en regelgeving en het
                            identificeren van juridische instrumenten een standaard werkwijze: deze{' '}
                            <Link
                              className='link-base'
                              href='about/Wetsanalyse-vanuit-circulaire-blik'
                            >
                              CircuLaw-methodiek voor wetsanalyse
                            </Link>{' '}
                            is nu ook voor iedereen beschikbaar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
