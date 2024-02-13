import { Link, Element } from 'react-scroll';
import { PortableText } from '@portabletext/react';
import { euPageComponents } from '@/lib/portable-text/pt-components';

export default function ScrollPagesTabContent({ content }) {
  return (
    <>
      <div className='relative'>
        <div className='[&>*:nth-child(even)]:bg-blue-500 grid'>
          {content.map((section, id) => (
            <Element key={id} className='w-[calc(100vw - 17px)]' id={`${section.title}`}>
              <div className='global-margin'>
                <div className='my-12 max-w-lg lg:max-w-2xl relative z-10'>
                  <h2 className='p-6xl-semibold mb-6'>
                    {id + 1}. {section.title}
                  </h2>
                  <PortableText value={section.content} components={euPageComponents} />
                </div>
              </div>
            </Element>
          ))}
        </div>

        <div className='absolute top-0 right-2 md:right-12 lg:right-20 xl:right-56 h-full'>
          <ul className='sticky top-32 my-12'>
            {content.map((section, id) => (
              <li key={id} className='my-2'>
                <Link
                  to={`${section.title}`}
                  smooth={true}
                  duration={500}
                  offset={-98}
                  spy={true}
                  activeClass='bg-red-300'
                >
                  {id + 1}. {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
