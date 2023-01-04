import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';

import R1 from '../public/r1.png';

export default function ToolTips({ children, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Open ToolTip</span>
        {icon > 0 && (
          <svg
            className='text-gray-300 w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
              clipRule='evenodd'
            />
          </svg>
        )}
        <div className='text-white'>{children}</div>
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
                      <div className='absolute float-right top-0 right-0 flex pt-4 pr-2 sm:-ml-10'>
                        <button
                          type='button'
                          className='rounded-md text-green1'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          {' '}
                          R-ladder: strategieën van circulariteit
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <div className='absolute inset-0 px-4 sm:px-6'>
                          <p className='tooltip-body'>
                            CircuLaw heeft voor elke maatregel een inschatting gemaakt binnen welke
                            circulaire strategie deze past op de zogenaamde R-ladder.
                          </p>
                          <p className='tooltip-body'>
                            Deze R-ladder geeft de mate van circulariteit aan: hoe hoger een
                            strategie op de R-ladder staat, hoe efficiënter met materiaal wordt
                            omgegaan.
                          </p>
                          <p className='tooltip-body'>
                            De R-ladder heeft 6 treden: R1 is de hoogste, R6 de laagste.
                            <br />
                            Een paar voorbeelden:
                            <ul className='list-disc pl-6'>
                              <li>
                                Neem je je eigen biobakje mee naar een afhaalrestaurant? Dat scoort
                                R1.
                              </li>
                              <li>Draag je tweedehands kleding? Dat scoort R3. </li>
                              <li>
                                Het recyclen van glas kost veel energie en is niet erg efficiënt.
                                Het scoort daarom R5.
                              </li>
                            </ul>
                          </p>
                          <div className='py-4'>
                            <Image src={R1} alt='Picture of the author' />
                          </div>
                          <div className='card-body'>
                            Bron: PBL (Planbureau voor de Leefomgeving)
                          </div>
                          <Link
                            href='https://www.rvo.nl/onderwerpen/duurzaam-ondernemen/circulaire-economie/r-ladder'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span className='text-greenLink link-mobile sm:link'>
                              Meer over de R ladder op de website van RVO
                            </span>
                          </Link>
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
