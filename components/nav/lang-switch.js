import { useEffect, useState } from 'react';

import { IconWorld, IconX } from '@tabler/icons-react';

const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'auto',
      autoDisplay: false,
    },
    'google_translate_element',
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LangSwitch({ background }) {
  const [translateOpen, setTranslateOpen] = useState(false);
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
      <div
        className={classNames(
          translateOpen ? 'block' : 'hidden',
          'fixed top-20 z-[999] rounded-cl bg-white p-5 sm:right-0',
        )}
      >
        <IconX
          onClick={() => {
            setTranslateOpen(false);
          }}
          className='float-right h-6 w-6 cursor-pointer text-cl-black hover:text-green-900'
        />
        <h3 className='heading-2xl-semibold max-w-xs text-cl-black'>
          Let Google translate this website
        </h3>
        <div id='google_translate_element' className=''>
          <p className='p-xs max-w-xs py-4 italic'>
            Irrespective of the language of your choice this website is focusing on Dutch and
            European law in a Dutch context. Moreover, since all translations are automatic, we
            cannot be responsible for any mistakes in the translation. Please, contact us if you
            have any questions.
          </p>
        </div>
      </div>
      <div className=''>
        <button
          className='p-sm group relative z-100 ml-5 flex h-full flex-row items-center justify-center rounded-clSm text-green-50 sm:hidden lg:ml-4'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='heading-xl-semibold mr-2 text-cl-black'>Vertaling</span>
          <span className='flex h-6 w-7 items-center justify-center rounded-clSm bg-cl-black'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>

      <div
        className={`${
          background === 'dark' ? 'bg-green-50 text-green-500' : 'bg-green-500 text-green-50'
        } ml-4 hidden rounded-clSm sm:block lg:ml-4`}
      >
        <button
          className='p-sm group relative z-100 hidden h-full flex-row items-center sm:flex'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='flex h-6 w-7 items-center justify-center rounded-clSm'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>
    </>
  );
}
