import { CloseButton, DialogPanel, DialogTitle } from '@headlessui/react';
import { IconX } from '@tabler/icons-react';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';

export default function ModalContent({ title, children, ptContent }) {
  return (
    <DialogPanel
      transition
      className='w-full max-w-md ml-10 min-h-[101vh] bg-white p-8 pt-10 z-130 duration-500 ease-out data-[closed]:translate-x-[28rem] '
    >
      <CloseButton className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
        <span className='sr-only'>Close panel</span>
        <IconX className='h-8 w-8' aria-hidden='true' />
      </CloseButton>
      <DialogTitle className='heading-3xl-semibold'>{title}</DialogTitle>
      <div className='relative mt-6 flex-1'>
        {ptContent && <PortableText value={ptContent} components={reducedPortableTextComponents} />}
        <div>{children}</div>
      </div>
    </DialogPanel>
  );
}
