import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import CustomButton from '../../components/custom-button';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { urlFor } from '../sanity';
import { useEffect, useState } from 'react';

// TYPES
export const greenBoxComponent = ({ value }) => (
  <div className='my-10'>
    <div className='bg-green-300 w-full px-8 py-8'>
      <h2 className='pb-6 mobile sm:desktop'>{value?.greenBoxTitle}</h2>
      <div className=' p-lg'>{value?.greenBoxText}</div>
    </div>
  </div>
);

export const hoverTextComponent = ({ value, isInline }) => (
  <>
    <button
      type='button'
      className='group inline-flex static'
      style={{ display: isInline ? 'inline-block' : 'block' }}
    >
      <svg
        className='inline'
        width='24'
        height='24'
        viewBox='0 0 24 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='15' r='12' fill='#676868' />
        <path
          d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
          fill='#F8FAF8'
        />
      </svg>
      <div className='inline-block text-left max-w-xs absolute invisible group-hover:visible z-10 py-3 px-6 bg-black-white-300 text-black-white-800  popup-base opacity-0 group-hover:opacity-100 transition tooltip'>
        {value.hoverText}
      </div>
    </button>
  </>
);

export const pdfBlockComponentMeasurePage = ({ value }) => {
  // eslint-disable-next-line
  const [_file, id, extension] = value.asset._ref.split('-');
  return (
    <div className=''>
      <div className='bg-green-600 '>
        <div className='gradient-pdf p-10 my-10 relative overflow-hidden'>
          <div className='absolute -bottom-44 -right-44 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h2 className='pb-2 mobile sm:desktop text-white'>{value.pdfTitle}</h2>{' '}
          {/* need to change text white */}
          <p className=' p-lg text-black-white-200 pb-4'>{value.pdfText}</p>{' '}
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
      <div className='bg-green-600 '>
        <div className=' gradient-pdf p-10 my-10 relative overflow-hidden'>
          <div className='absolute -bottom-44 -right-44 h-96 w-96 invisible md:visible'>
            <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
          </div>
          <h1 className='pb-2 mobile sm:desktop text-white'>{value.pdfTitle}</h1>
          <p className=' p-lg text-black-white-200 pb-4'>{value.pdfText}</p>
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

export const smallParaComponent = ({ value }) => (
  <div className='flex justify-left pl-8 sm:pl-12'>
    <div className='mb-10 pt-10 w-5/6'>
      <h4 className='mobile sm:desktop'>{value.smallParaTitle}</h4>
      <p className='p-base'>{value.smallParaText}</p>
    </div>
  </div>
);

export const dropDownComponent = ({ value }) => (
  <>
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='text-black hover:text-green-300 justify-between items-center inline-flex'>
            <span className='inline'>{value.dropDownWord} </span>
            <ChevronUpIcon
              className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-green-300`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className='bg-black-white-300 my-2'>
              <span className='block text-black-white-800 p-4'>{value.dropDownTextText}</span>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </>
);

export const InlineImageComponent = ({value}) => {
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    setImgSrc(urlFor(value?.imageFile))
  },[value.imageFile])
  console.log(imgSrc)
  return (
  <div className='relative w-full h-96 my-6 rounded-md'>
    {console.log(value.imageFile)}
      {value.imageFile && 
  <Image src={imgSrc} 
    className='w-full h-full object-cover rounded-md'
    alt ={value.imageFile.altText}
    fill
    />}
  </div>
  )
}