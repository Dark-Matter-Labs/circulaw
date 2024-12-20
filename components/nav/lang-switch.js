import { useState, useEffect } from 'react';
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
          'fixed  sm:right-0 top-20 z-[999] bg-white p-5  rounded-cl',
        )}
      >
        <IconX
          onClick={() => {
            setTranslateOpen(false);
          }}
          className='h-6 w-6 text-green-800 hover:text-green-900 float-right cursor-pointer'
        />
        <h3 className='heading-2xl-semibold text-green-800 max-w-xs'>
          Let Google translate this website
        </h3>
        <div id='google_translate_element' className=''>
          <p className='p-xs italic max-w-xs py-4'>
            Irrespective of the language of your choice this website is focusing on Dutch and
            European law in a Dutch context. Moreover, since all translations are automatic, we
            cannot be responsible for any mistakes in the translation. Please, contact us if you
            have any questions.
          </p>
        </div>
      </div>
      <div className=''>
        <button
          className='h-full relative p-sm group z-100 flex-row items-center justify-center text-green-50 ml-5 lg:ml-4 rounded-clSm flex sm:hidden'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='heading-xl-semibold text-green-800 mr-2'>Vertaling</span>
          <span className='flex items-center justify-center rounded-clSm h-6 w-7 bg-green-800'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>

      <div
        className={`${
          background === 'dark' ? 'bg-green-50 text-green-600' : 'bg-green-600 text-green-50'
        }  ml-4 lg:ml-4 rounded-clSm hidden sm:block`}
      >
        <button
          className='h-full relative p-sm group z-100 flex-row items-center hidden sm:flex'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='flex items-center justify-center rounded-clSm h-6 w-7'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>
    </>
  );
}
