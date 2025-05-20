import { FiChevronDown } from 'react-icons/fi';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

import { useNextSanityImage } from 'next-sanity-image';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import NewButton from '@/components/shared/new-button';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { PortableText } from '@portabletext/react';

import { config } from '../config';
import {
  bold,
  internalLink,
  italic,
  linkComponent,
  linkComponentGreenBox,
} from '../portable-text/portable-text-marks';
import { normalTextComponent } from './portable-text-blocks';
import {
  bulletComponentGrayBox,
  bulletItemComponent,
  numberComponentGrayBox,
  numberItemComponent,
} from './portable-text-lists';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const dropDownHighlightComponent = ({ value }) => {
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
        <>
          <DisclosureButton className='group flex w-full items-center justify-between rounded-clSm bg-green-100 px-8 py-6 text-gray-800 data-[open]:rounded-t-clSm'>
            <h4 className='p-base-semibold sm:headling-xl-semibold text-left'>{value.title}</h4>
            <FiChevronDown className='h-6 w-6 text-gray-800 group-data-[open]:rotate-180' />
          </DisclosureButton>
          <DisclosurePanel className='-mt-6 rounded-b-clSm bg-green-100 px-8 pb-4'>
            <div>
              <PortableText value={value.content} components={grayBoxPTComponents} />
            </div>
          </DisclosurePanel>
        </>
      </Disclosure>
    </div>
  );
};

export const highlightBlockComponent = ({ value }) => {
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
      <div className='w-full rounded-clSm bg-green-100 text-gray-800'>
        <h4 className='p-base-semibold sm:headling-xl-semibold px-8 py-6'>{value.title}</h4>
        <div className='-mt-4 px-8 pb-4'>
          <PortableText value={value.content} components={smallParaPTComponents} />
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
      <div className='rounded-clSm bg-green-500'>
        <div className='gradient-pdf relative my-10 overflow-hidden rounded-clSm p-10'>
          <div className='rotate-50 invisible absolute -bottom-32 -right-12 h-96 w-96 md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h2 className='heading-xl-semibold sm:heading-3xl-semibold pb-2 text-white'>
            {value.pdfTitle}
          </h2>{' '}
          {/* need to change text white */}
          <p className='p-base w-4/5 pb-4 text-green-100'>{value.pdfText}</p>{' '}
          {/* need to change body text */}
          <NewButton
            variant='primaryLight'
            icon='download'
            href={`https://cdn.sanity.io/files/${
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
            }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
            newTab={true}
          >
            {value.buttonText ? (
              <span>{value.buttonText} &nbsp;</span>
            ) : (
              <span>Bekijk de leidraad &nbsp;</span>
            )}
          </NewButton>
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
      <div className='rounded-clSm bg-green-500'>
        <div className='gradient-pdf relative my-10 overflow-hidden rounded-clSm p-10'>
          <div className='rotate-50 invisible absolute -bottom-32 -right-12 h-96 w-96 md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pb-2 text-white'>
            {value.pdfTitle}
          </h1>
          <p className='p-base w-4/5 pb-4 text-green-100'>{value.pdfText}</p>
          <NewButton
            variant='primaryLight'
            icon='download'
            href={`https://cdn.sanity.io/files/${
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
            }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
            newTab={true}
          >
            {value.buttonText ? (
              <span>{value.buttonText} &nbsp;</span>
            ) : (
              <span>Bekijk de leidraad &nbsp;</span>
            )}
          </NewButton>
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
          <DisclosureButton className='inline-flex items-center justify-between text-black hover:text-green-500'>
            <span className='inline'>{value.dropDownWord} </span>
            <IoMdArrowDropdownCircle
              className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-green-500`}
            />
          </DisclosureButton>
          <DisclosurePanel>
            <div className='my-2 rounded-cl border border-green-500 bg-green-100'>
              <span className='p-base block p-4 text-cl-black'>{value.dropDownTextText}</span>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  </>
);

export const InlineImageComponent = (props) => {
  const value = props.data || props.value;
  const imageProps = useNextSanityImage(config, value?.imageFile);
  const aspectRatio =
    imageProps?.width && imageProps?.height ? imageProps.height / imageProps.width : 9 / 16; // Default to 16:9 aspect ratio

  const imageHeight = 900 * aspectRatio;
  return (
    <div className='relative mb-[120px] w-full rounded-cl'>
      <Image
        {...imageProps}
        className='w-full rounded-cl object-cover'
        alt={value?.imageFile?.altText || ''}
        width={900}
        height={imageHeight}
        sizes='
              (max-width: 768px) 95vw,
              (max-width: 1200px) 95vw,
              95vw'
      />
    </div>
  );
};

export const YTComponent = ({ data }) => {
  return (
    <div className='mb-[120px] rounded-cl bg-green-100 px-40 py-20'>
      <div className='player-wrapper'>
        <ReactPlayer className='react-player' url={data.url} width='100%' height='100%' />
      </div>
    </div>
  );
};
