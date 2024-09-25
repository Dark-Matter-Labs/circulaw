'use client';
// import ScrollTabMobileMenu from './scroll-tab-mobile-menu';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import { Link, Element } from 'react-scroll';
import { Dialog, DialogPanel, DialogTitle, CloseButton } from '@headlessui/react';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

export default function ScrollPagesTabContent({ content }) {
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
        <div className='[&>*:nth-child(even)]:bg-green-50 grid'>
          {content?.map((section, id) => (
            <Element key={id} className='w-[calc(100vw - 17px)]' id={`${section.title}`}>
              <div className='global-margin'>
                <div className='my-12 lgNav:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative z-10'>
                  <h2 className='heading-3xl-semibold mb-6'>
                    {id + 1}. {section.title}
                  </h2>
                  <PortableText value={section.content} components={portableTextComponents} />
                </div>
              </div>
            </Element>
          ))}
        </div>

        <div className='absolute top-0 right-2 md:right-12 lg:right-20 xl:right-56 h-full hidden lgNav:block'>
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
                  className='p-base py-2 pl-4 pr-8 h-full break-words min-w-[390px] rounded-cl whitespace-nowrap cursor-pointer'
                >
                  {id + 1}. {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute top-20 right-0 h-full block lgNav:hidden z-20'>
          <button
            type='button'
            className='sticky top-44 my-12 py-2 px-4 bg-green-800 rounded-l-cl text-white p-base'
            onClick={openModal}
          >
            Index
          </button>
          <Dialog
            open={isOpen}
            onClose={closeModal}
            transition
            className='fixed z-120 inset-0 flex w-screen items-center justify-end bg-gray-500/75 transition duration-500 ease-out data-[closed]:opacity-0'
          >
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
                        to={`${section.title}`}
                        smooth={true}
                        duration={500}
                        offset={-135}
                        spy={true}
                        activeClass='bg-green-500 !text-white font-semibold transition-all duration-100'
                        className='p-base  py-2 pl-4 pr-8 h-full break-words rounded-cl whitespace-nowrap cursor-pointer'
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
