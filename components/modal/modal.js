import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

export default function Modal({ Button, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button>{Button}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        {children}
      </Dialog>
    </>
  );
}

function ModalContent({ title, children }) {
  return (
    <DialogPanel>
      <DialogTitle>{title}</DialogTitle>
      <div>{children}</div>
    </DialogPanel>
  );
}

Modal.Content = ModalContent;
