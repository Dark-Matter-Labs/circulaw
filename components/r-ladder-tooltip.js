import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import LinkIcon from './link-icon';

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
            className='text-grey-600 w-5 h-5'
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
                          <h2 className='mobile sm:desktop'>
                            R-ladder: strategieën van circulariteit
                          </h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <div className='absolute inset-0 px-4 sm:px-6'>
                          <p className='p-base'>
                            Met de R-ladder geven we per instrument een schatting van de mate van
                            circulariteit aan. De R-ladder heeft 6 tredes (R1 tot en met R6) die
                            verschillende strategieën van circulariteit weergeven. Strategieën hoger
                            op de ladder besparen meer grondstoffen. R1 is de hoogste trede. De
                            strategieën kunnen samengaan met innovaties in de vorm van vernieuwende
                            productontwerpen, technologieën of businessmodellen.
                          </p>
                          <p className='p-base py-6'>
                            De 6 tredes zijn:
                            <ul className='list-disc pl-6 pt-2'>
                              <li>
                                R1. Refuse en rethink: afzien van producten of producten intensiever
                                gebruiken
                              </li>
                              <li>
                                R2. Reduce: producten efficiënter fabriceren of efficiënter maken in
                                het gebruik
                              </li>
                              <li>R3. Reuse: hergebruik van een product</li>
                              <li>
                                R4. Repair, refurbish, remanufacturing en repurpose: reparatie en
                                hergebruik van productonderdelen
                              </li>
                              <li>R5. Recycling: verwerken en hergebruiken van materialen</li>
                              <li>R6. Recover: energie terugwinnen uit materialen</li>
                            </ul>
                          </p>
                          <span className='p-base py-2'>
                            Bron en meer over de de R-ladder op de{' '}
                            <Link
                              href='https://www.rvo.nl/onderwerpen/r-ladder'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span className='link-lg underline text-green-500 link-interaction'>
                                website van RVO
                              </span>
                              <LinkIcon />
                            </Link>
                          </span>
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
