import { config } from '../config';
import {
  linkComponent,
  linkComponentGreenBox,
  internalLink,
  bold,
  italic,
} from '../portable-text/portable-text-marks';
import { normalTextComponent } from './portable-text-blocks';
import {
  bulletItemComponent,
  numberItemComponent,
  bulletComponentGrayBox,
  numberComponentGrayBox,
} from './portable-text-lists';
import CustomButton from '@/components/custom-button';
import { Disclosure } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const grayBoxPTComponent = ({ value }) => {
  const grayBoxPTComponents = {
    list: {
      bullet: bulletComponentGrayBox,
      number: numberComponentGrayBox,
    },
    listItem: {
      bullet: bulletItemComponent,
      number: numberItemComponent,
    },
    block: {
      normal: normalTextComponent,
    },
    marks: {
      link: linkComponentGreenBox,
      internalLink: internalLink,
      strong: bold,
      em: italic,
    },
  };
  return (
    <div className='my-6'>
      <Disclosure className='w-full'>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'rounded-t-clSm' : 'rounded-clSm'
              } text-gray-800 bg-gray-200 flex justify-between items-center w-full px-8 py-6`}
            >
              <h4 className='p-base-semibold sm:headling-xl-semibold'>{value.greenBoxTitle}</h4>
              <FiChevronDown
                className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='bg-gray-200 -mt-6 px-8 pb-4 rounded-b-clSm'>
              <div>
                <PortableText value={value.greenBoxPText} components={grayBoxPTComponents} />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export const smallParaPTComponent = ({ value }) => {
  const smallParaPTComponents = {
    list: {
      bullet: bulletComponentGrayBox,
      number: numberComponentGrayBox,
    },
    listItem: {
      bullet: bulletItemComponent,
      number: numberItemComponent,
    },
    block: {
      normal: normalTextComponent,
    },
    marks: {
      link: linkComponent, // need to make a link component that works on this bg
      internalLink: internalLink,
      strong: bold,
      em: italic,
    },
  };
  return (
    <div className='my-6'>
      <div className='text-gray-800 bg-gray-200 rounded-clSm w-full'>
        <h4 className='p-base-semibold sm:headling-xl-semibold px-8 py-6'>
          {value.smallParaTitle}
        </h4>
        <div className='-mt-4 px-8 pb-4'>
          <PortableText value={value.smallParaPText} components={smallParaPTComponents} />
        </div>
      </div>
    </div>
  );
};

// TODO: update icon to icon library and combine the instrument page + about page pdf blocks.
export const pdfBlockComponentinstrumentPage = ({ value }) => {
  // eslint-disable-next-line
  const [_file, id, extension] = value?.asset?._ref.split('-');
  return (
    <div className=''>
      <div className='bg-green-600 rounded-clSm'>
        <div className='gradient-pdf p-10 my-10 relative overflow-hidden rounded-clSm'>
          <div className='absolute -bottom-32 -right-12 rotate-50 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h2 className='pb-2 heading-xl-semibold sm:heading-3xl-semibold text-white'>
            {value.pdfTitle}
          </h2>{' '}
          {/* need to change text white */}
          <p className='p-base text-gray-100 pb-4 w-4/5'>{value.pdfText}</p>{' '}
          {/* need to change body text */}
          <a
            href={`https://cdn.sanity.io/files/${
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
            }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
            target='_blank'
            rel='noreferrer'
          >
            <CustomButton color='toPdf'>
              {value.buttonText ? (
                <span>{value.buttonText} &nbsp;</span>
              ) : (
                <span>Bekijk de leidraad &nbsp;</span>
              )}
              <Image
                src='/icons/pdf-icon.svg'
                width={23}
                height={23}
                alt='icon of pdf'
                className='ml-2'
              />
            </CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

// TODO: update icon to icon library and combine the instrument page + about page pdf blocks.
export const pdfBlockComponentAboutPage = ({ value }) => {
  // eslint-disable-next-line
  const [_file, id, extension] = value?.asset?._ref.split('-');
  return (
    <div className=''>
      <div className='bg-green-600 rounded-clSm'>
        <div className=' gradient-pdf p-10 my-10 relative overflow-hidden rounded-clSm'>
          <div className='absolute -bottom-32 -right-12 rotate-50 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pb-2 text-white'>
            {value.pdfTitle}
          </h1>
          <p className='p-base text-gray-100 pb-4 w-4/5'>{value.pdfText}</p>
          <a
            href={`https://cdn.sanity.io/files/${
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
            }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
            target='_blank'
            rel='noreferrer'
          >
            <CustomButton color='toPdf'>
              {value.buttonText ? (
                <span>{value.buttonText} &nbsp;</span>
              ) : (
                <span>Bekijk de methodiek &nbsp;</span>
              )}
              <Image
                src='/icons/pdf-icon.svg'
                width={23}
                height={23}
                alt='icon of pdf'
                className='ml-2'
              />
            </CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export const dropDownComponent = ({ value }) => (
  <>
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='text-black hover:text-green-500 justify-between items-center inline-flex'>
            <span className='inline'>{value.dropDownWord} </span>
            <IoMdArrowDropdownCircle
              className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-green-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className='bg-gray-100 border border-green-500 rounded-cl my-2'>
              <span className='block text-gray-800 p-4 p-base'>{value.dropDownTextText}</span>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </>
);

export const InlineImageComponent = ({ value }) => {
  const imageProps = useNextSanityImage(config, value.imageFile);
  console.log(imageProps)
  return (
    <div className='relative w-full my-6 rounded-cl'>
      <Image
        {...imageProps}
        className='w-full object-cover rounded-cl'
        alt={value?.imageFile.altText}
        width={900}
        height={900 * (imageProps.height / imageProps.width)}
        sizes='
              (max-width: 768px) 95vw,
              (max-width: 1200px) 60vw,
              40vw'
      />
    </div>
  );
};

// this is a rough example of how we can use a table within portable text.
// it uses the official table plugin by sanity with a custom component to render a preview
// inside the portable text editor.

export const Table = ({ value }) => {
  const rows = value.table.rows;
  return (
    <>
      <table>
        {rows.map((row, id) => (
          <tr key={id}>
            {row.cells.map((cell, id) => (
              <td key={id}>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export const YTComponent = ({ value }) => {
  return (
    <>
      <ReactPlayer url={value?.url} />
    </>
  );
};
