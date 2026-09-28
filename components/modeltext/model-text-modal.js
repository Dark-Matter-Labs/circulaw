'use client';

import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IconX } from '@tabler/icons-react';

import ModelTextBody from './model-text-body';

// Matches the panel's duration-300 leave transition.
const CLOSE_DURATION_MS = 300;

// A model text opened from the overview: rendered by the @modal intercepting
// route, so the URL is the model text's own page while the overview stays
// behind it. Closing plays the leave transition, then goes back to the overview.
export default function ModelTextModal({ modelText }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const closing = useRef(false);

  // Intercepted routes don't set metadata, so name the tab after the model text.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${modelText.title} - Modeltekst omgevingsplan - CircuLaw`;
    return () => {
      document.title = previousTitle;
    };
  }, [modelText.title]);

  function close() {
    // Escape pressed twice, or X then Escape, must not go back two entries.
    if (closing.current) return;
    closing.current = true;
    setOpen(false);
    setTimeout(() => router.back(), CLOSE_DURATION_MS);
  }

  return (
    <Dialog open={open} as='div' className='relative z-120 focus:outline-hidden' onClose={close}>
      <DialogBackdrop
        transition
        className='bg-cl-grey/75 fixed inset-0 transition duration-500 ease-out data-closed:opacity-0'
      />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-0 sm:px-4 sm:py-10'>
          <DialogPanel
            transition
            className='no-scrollbar sm:rounded-cl min-h-screen w-screen border bg-green-100 px-4 py-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 sm:h-auto sm:max-h-[800px] sm:min-h-0 sm:max-w-3xl sm:overflow-scroll sm:px-10'
          >
            <div className='mb-4 flex w-full flex-row items-center justify-between'>
              <div className='flex flex-row gap-x-2'>
                <div className='p-2xs-semibold rounded-cl max-w-min border border-green-400 px-2 py-1 text-nowrap text-green-400 first-letter:uppercase'>
                  {modelText.pillar}
                </div>
              </div>
              <Button onClick={close} aria-label='Sluiten'>
                <IconX className='text-cl-black h-6 w-6' />
              </Button>
            </div>
            <DialogTitle as='h3' className='heading-2xl-semibold mb-8'>
              {modelText.title}
            </DialogTitle>
            <ModelTextBody modelText={modelText} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
