'use client';
import { Dialog, DialogBackdrop } from '@headlessui/react';
import { useState } from 'react';

// the modal takes a react component as the prop Button
export default function Modal({ Button, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>{Button}</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed z-120 inset-0 flex w-screen items-center justify-end'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition duration-500 ease-out data-[closed]:opacity-0'
        />
        {children}
      </Dialog>
    </>
  );
}
