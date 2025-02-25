'use client';

// import ScrollTabMobileMenu from './scroll-tab-mobile-menu';
import { useState } from 'react';
import { Element, Link } from 'react-scroll';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { CloseButton, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import { IconX } from '@tabler/icons-react';

export default function ScrollPagesTabContent({ content, title }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className='relative'>
        <div className='grid [&>*:nth-child(even)]:bg-green-50'>
          {content?.map((section, id) => (
            <Element key={id} className='w-[calc(100vw - 17px)]' id={`${section.title}`}>
              <div className='global-margin'>
                <div className='relative z-10 my-12 lgNav:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
                  <h2 className='heading-xl-semibold mb-6 text-green-800'>{title}</h2>
                  <h3 className='heading-3xl-semibold mb-6'>
                    {id + 1}. {section.title}
                  </h3>
                  <PortableText value={section.content} components={portableTextComponents} />
                </div>
              </div>
            </Element>
          ))}
        </div>
        <div className='absolute right-2 top-0 hidden h-full md:right-12 lgNav:block lg:right-20 xl:right-56'>
          <ul className='sticky top-48 my-12 min-w-[390px]'>
            <h4 className='heading-3xl-semibold mb-5 ml-3'>In deze pagina</h4>
            {content.map((section, id) => (
              <li key={id} className='my-4 text-green-800'>
                <Link
                  to={`${section.title}`}
                  smooth={true}
                  duration={500}
                  offset={-155}
                  spy={true}
                  activeClass='bg-green-500 !text-white font-semibold transition-all duration-100 min-w-[390px]'
                  className='p-base h-full min-w-[390px] cursor-pointer whitespace-nowrap break-words rounded-cl py-2 pl-4 pr-8'
                >
                  {id + 1}. {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute right-0 top-20 z-20 block h-full lgNav:hidden'>
          <button
            type='button'
            className='p-base sticky top-44 my-12 rounded-l-cl bg-green-800 px-4 py-2 text-white'
            onClick={openModal}
          >
            Index
          </button>
          <Dialog
            open={isOpen}
            onClose={closeModal}
            transition
            className='fixed inset-0 z-120 flex w-screen items-center justify-end bg-cl-grey/75 transition duration-500 ease-out data-[closed]:opacity-0'
          >
            <DialogPanel
              transition
              className='z-130 ml-10 min-h-[101vh] w-full max-w-sm bg-white p-8 pt-10 duration-500 ease-out data-[closed]:translate-x-[28rem] sm:max-w-md'
            >
              <CloseButton className='absolute right-0 top-0 float-right flex pr-8 pt-4 sm:-ml-10'>
                <span className='sr-only'>Close panel</span>
                <IconX className='h-6 w-6' aria-hidden='true' />
              </CloseButton>
              <DialogTitle className='heading-3xl-semibold'>In deze pagina</DialogTitle>
              <div className='relative mt-6 flex-1'>
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
                        className='p-base h-full cursor-pointer whitespace-nowrap break-words rounded-cl py-2 pl-4 pr-8'
                        onClick={closeModal}
                      >
                        {id + 1}. {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </>
  );
}
