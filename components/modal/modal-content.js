import { CloseButton, DialogPanel, DialogTitle } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';

export default function ModalContent({ title, children, ptContent }) {
  return (
    <DialogPanel
      transition
      className='w-full max-w-md min-h-screen bg-white p-8 pt-10 z-130 duration-500 ease-out data-[closed]:translate-x-full '
    >
      <CloseButton className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
        <span className='sr-only'>Close panel</span>
        <XIcon className='h-6 w-6' aria-hidden='true' />
      </CloseButton>
      <DialogTitle className='heading-3xl-semibold'>{title}</DialogTitle>
      <div className='relative mt-6 flex-1'>
        {ptContent ? (
          <>
            <PortableText value={ptContent} components={reducedPortableTextComponents} />
            <div>{children}</div>
          </>
        ) : (
          { children }
        )}
      </div>
    </DialogPanel>
  );
}
