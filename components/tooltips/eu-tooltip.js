'use client';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import StatusTwoStep from '../eu-law/status/status-two-step';
import StatusThreeStep from '../eu-law/status/status-three-step';

// TODO: make one tooltip component that works for all cases.
export default function EUTooltip({ children, title, lawData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type='button'
        className='border p-4 shadow-card rounded-cl flex flex-col gap-6 sm:max-w-[380px] group'
      >
        <h3 className='heading-2xl-semibold'>Status</h3>
        <div>
          {' '}
          {lawData?.statusStep === 'Two Step' && <StatusTwoStep status={lawData?.statusTwoStep} />}
          {lawData?.statusStep === 'Three Step' && (
            <StatusThreeStep status={lawData?.statusThreeStep} />
          )}
        </div>
        <div className='p-base-semibold flex flex-row items-center justify-start text-green-600 group-hover:text-green-300'>
          <div>Bekijk de tijdlijn van deze regelgeving</div>{' '}
          <ArrowRightIcon className='h-5 w-5 ml-1' />
        </div>
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
                    <div className='flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-gray-900'>
                          {' '}
                          <h2 className='heading-3xl-semibold'>{title}</h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>{children}</div>
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
