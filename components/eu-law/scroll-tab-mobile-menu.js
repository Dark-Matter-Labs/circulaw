import { Fragment, useState } from 'react';
import { Link } from 'react-scroll';

import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';


export default function ScrollTabMobileMenu({content}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className={`${open ? 'hidden' : 'block'} sticky top-44 my-12 py-2 px-4 bg-green-800 rounded-l-cl text-white p-base`}
        onClick={() => setOpen(true)}
      >
       Index
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-120' onClose={setOpen}>
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
                  <Dialog.Panel className='pointer-events-auto relative w-full max-w-md'>
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
                          <h2 className='p-6xl-semibold my-4'>Obligations</h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>

                      <ul className='sticky top-32 my-12 min-w-[390px]'>
            <h4 className='p-6xl-semibold mb-5 ml-3'>Obligations</h4>
            {content.map((section, id) => (
              <li key={id} className='my-4'>
                <Link
                  to={`${section.title}`}
                  smooth={true}
                  duration={500}
                  offset={-30}
                  spy={true}
                  activeClass='bg-green-500 text-grey-100 font-semibold transition-all duration-100'
                  className='p-base text-green-800 py-2 pl-4 pr-8 h-full break-words rounded-cl whitespace-nowrap cursor-pointer'
                  onClick={() => setOpen(false)}
                >
                  {id + 1}. {section.title}
                </Link>
              </li>
            ))}
          </ul>

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