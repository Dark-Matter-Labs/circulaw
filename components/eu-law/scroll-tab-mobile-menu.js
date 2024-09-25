'use client';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  CloseButton,
  DialogTitle,
  useClose,
} from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, useState, memo } from 'react';
import { Link } from 'react-scroll';
// import Link from 'next/link';

const ScrollTabMobileMenu = memo(function ScrollTabMobileMenu({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  let close = useClose();
  return (
    <>
      <button
        type='button'
        className={`${
          isOpen ? 'hidden' : 'block'
        } sticky top-44 my-12 py-2 px-4 bg-green-800 rounded-l-cl text-white p-base`}
        onClick={() => setIsOpen(true)}
      >
        Index
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed z-120 inset-0 flex w-screen items-center justify-end'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition duration-500 ease-out data-[closed]:opacity-0'
        />
        <div className='fixed inset-0 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-end'>
            <DialogPanel
              transition
              className='w-full max-w-md ml-10 min-h-[101vh] bg-white p-8 pt-10 z-130 duration-500 ease-out data-[closed]:translate-x-[28rem] '
            >
              <CloseButton className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
                <span className='sr-only'>Close panel</span>
                <XIcon className='h-6 w-6' aria-hidden='true' />
              </CloseButton>
              <DialogTitle className='heading-3xl-semibold'>TITLE</DialogTitle>
              <div className='relative mt-6 flex-1'>
                <ul className=''>
                  {content.map((section, id) => (
                    <li key={id} className='my-4 text-green-800'>
                      <Link
                        href={`#${section.title}`}
                        smooth={true}
                        duration={500}
                        offset={-135}
                        spy={true}
                        activeClass='bg-green-500 !text-white font-semibold transition-all duration-100'
                        className='p-base  py-2 pl-4 pr-8 h-full break-words rounded-cl whitespace-nowrap cursor-pointer'
                        onClick={() => close()}
                      >
                        {id + 1}. {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
});

export default ScrollTabMobileMenu;

{
  /*
  
      <ul className=''>
                          {content.map((section, id) => (
                            <li key={id} className='my-4 text-green-800'>
                              <Link
                                to={`${section.title}`}
                                smooth={true}
                                duration={500}
                                offset={-135}
                                spy={true}
                                activeClass='bg-green-500 !text-white font-semibold transition-all duration-100'
                                className='p-base  py-2 pl-4 pr-8 h-full break-words rounded-cl whitespace-nowrap cursor-pointer'
                                onClick={() => setOpen(false)}
                              >
                                {id + 1}. {section.title}
                              </Link>
                            </li>
                          ))}
                </ul>
  
  */
}
