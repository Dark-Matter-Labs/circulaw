import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { useNextSanityImage } from 'next-sanity-image';
import { config } from '../config';
import CustomButton from '../../components/custom-button';
import { PortableText } from '@portabletext/react';

import {
  bulletComponent,
  numberComponent,
  bulletItemComponent,
  numberItemComponent,
} from './portable-text-lists';
import { normalTextComponent } from './portable-text-blocks';
import { linkComponent, linkComponentGreenBox } from '../portable-text/portable-text-marks';

// can delete this component
export const greenBoxComponent = ({ value }) => (
  <div className='my-10'>
    <div className='bg-green-300 w-full px-8 py-8 rounded-none sm:rounded-cl'>
      <h2 className='pb-6 mobile sm:desktop'>{value?.greenBoxTitle}</h2>
      <div className='p-lg'>{value?.greenBoxText}</div>
    </div>
  </div>
);

export const greenBoxPTComponent = ({ value }) => {
  const greenBoxPTComponents = {
    list: {
      bullet: bulletComponent,
      number: numberComponent,
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
    },
  };
  return (
    <div className='my-10'>
      <div className='bg-green-300 w-full px-8 py-8 rounded-none sm:rounded-cl'>
        <h2 className='pb-6 mobile sm:desktop'>{value.greenBoxTitle}</h2>
        <div>
          <PortableText value={value.greenBoxPText} components={greenBoxPTComponents} />
        </div>
      </div>
    </div>
  );
};

// add portable text instead of small para text
export const smallParaComponent = ({ value }) => (
  <div className='flex justify-left pl-8 sm:pl-12'>
    <div className='mb-10 pt-10 w-5/6'>
      <h4 className='mobile sm:desktop'>{value.smallParaTitle}</h4>
      <p className='p-base'>{value.smallParaText}</p>
    </div>
  </div>
);

export const smallParaPTComponent = ({ value }) => {
  const smallParaPTComponents = {
    list: {
      bullet: bulletComponent,
      number: numberComponent,
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
    },
  };
  return (
    <div className='flex justify-left pl-8 sm:pl-12'>
      <div className='mb-10 pt-10 w-5/6'>
        <h4 className='mobile sm:desktop'>{value.smallParaTitle}</h4>
        <div>
          <PortableText value={value.smallParaPText} components={smallParaPTComponents} />
        </div>
      </div>
    </div>
  );
};

export const pdfBlockComponentMeasurePage = ({ value }) => {
  // eslint-disable-next-line
  const [_file, id, extension] = value.asset._ref.split('-');
  return (
    <div className=''>
      <div className='bg-green-600 rounded-none sm:rounded-cl'>
        <div className='gradient-pdf p-10 my-10 relative overflow-hidden rounded-none sm:rounded-cl'>
          <div className='absolute -bottom-32 -right-12 rotate-50 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h2 className='pb-2 mobile sm:desktop text-white'>{value.pdfTitle}</h2>{' '}
          {/* need to change text white */}
          <p className='p-base sm:p-lg text-black-white-200 pb-4 w-4/5'>{value.pdfText}</p>{' '}
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

export const pdfBlockComponentAboutPage = ({ value }) => {
  // eslint-disable-next-line
  const [_file, id, extension] = value.asset._ref.split('-');
  return (
    <div className=''>
      <div className='bg-green-600 rounded-none sm:rounded-cl'>
        <div className=' gradient-pdf p-10 my-10 relative overflow-hidden rounded-none sm:rounded-cl'>
          <div className='absolute -bottom-32 -right-12 rotate-50 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h1 className='pb-2 mobile sm:desktop text-white'>{value.pdfTitle}</h1>
          <p className='p-base sm:p-lg text-black-white-200 pb-4 w-4/5'>{value.pdfText}</p>
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
            <div className='bg-black-white-200 border border-green-500 rounded-cl my-2'>
              <span className='block text-black-white-800 p-4 p-base sm:p-lg'>
                {value.dropDownTextText}
              </span>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </>
);

export const InlineImageComponent = ({ value }) => {
  const imageProps = useNextSanityImage(config, value.imageFile);
  return (
    <div className='relative w-full h-48 lg:h-96 my-6 rounded-cl'>
      <Image
        {...imageProps}
        className='w-full h-full object-cover rounded-cl'
        alt={value?.imageFile.altText}
      />
    </div>
  );
};
