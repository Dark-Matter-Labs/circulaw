import { useEffect } from 'react';

import Script from 'next/script';

import {
  GOOGLE_TRANSLATE_CALLBACK,
  GOOGLE_TRANSLATE_ELEMENT_ID,
  GOOGLE_TRANSLATE_SCRIPT_SRC,
  initGoogleTranslate,
} from '@/lib/google-translate';
import { IconX } from '@tabler/icons-react';

// Rendered once by the nav: it owns the only #google_translate_element and loads
// Google's script a single time. The LangSwitch buttons only toggle it.
export default function TranslatePanel({ open, onClose, ref }) {
  useEffect(() => {
    window[GOOGLE_TRANSLATE_CALLBACK] = () => initGoogleTranslate();
    // next/script does not reload a cached script, so a remounted panel builds the widget itself.
    initGoogleTranslate();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        open ? 'block' : 'hidden'
      } fixed left-5 right-5 top-20 z-999 rounded-cl bg-white p-5 sm:left-auto sm:right-0`}
    >
      <Script id='google-translate' src={GOOGLE_TRANSLATE_SCRIPT_SRC} strategy='afterInteractive' />
      <IconX
        onClick={onClose}
        className='float-right h-6 w-6 cursor-pointer text-cl-black hover:text-green-900'
      />
      <h3 className='heading-2xl-semibold max-w-xs text-cl-black'>
        Let Google translate this website
      </h3>
      <div id={GOOGLE_TRANSLATE_ELEMENT_ID} className=''>
        <p className='p-xs max-w-xs py-4 italic'>
          Irrespective of the language of your choice this website is focusing on Dutch and European
          law in a Dutch context. Moreover, since all translations are automatic, we cannot be
          responsible for any mistakes in the translation. Please, contact us if you have any
          questions.
        </p>
      </div>
    </div>
  );
}
