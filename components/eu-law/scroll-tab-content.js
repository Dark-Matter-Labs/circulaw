'use client';
import ScrollTabMobileMenu from './scroll-tab-mobile-menu';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import { Link, Element } from 'react-scroll';

export default function ScrollPagesTabContent({ content }) {
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
          <ScrollTabMobileMenu content={content}></ScrollTabMobileMenu>
        </div>
      </div>
    </>
  );
}
