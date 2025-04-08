import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { CloseButton, DialogPanel, DialogTitle } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import { IconX } from '@tabler/icons-react';

export default function ModalContent({ title, children, ptContent }) {
  return (
    <DialogPanel
      transition
      className='z-130 ml-10 min-h-[101vh] w-full max-w-md bg-white p-8 pt-10 duration-500 ease-out data-[closed]:translate-x-[28rem] overflow-scroll'
    >
      <CloseButton className='absolute right-0 top-0 float-right flex pr-8 pt-4 sm:-ml-10'>
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
