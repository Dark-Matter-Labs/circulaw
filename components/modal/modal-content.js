import { DialogPanel, DialogTitle } from '@headlessui/react';

export default function ModalContent({ title, children }) {
  return (
    <DialogPanel
      transition
      className='w-full max-w-md min-h-screen bg-white p-12 z-130 duration-500 ease-out data-[closed]:translate-x-full'
    >
      <DialogTitle>{title}</DialogTitle>
      <div>{children}</div>
    </DialogPanel>
  );
}
