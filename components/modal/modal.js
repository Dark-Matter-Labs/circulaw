'use client';

import { useState } from 'react';

import { Dialog, DialogBackdrop } from '@headlessui/react';

// the modal takes a react component as the prop Button
export default function Modal({ Button, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className='w-auto' onClick={() => setIsOpen(true)}>
        {Button}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 z-120 flex w-screen items-center justify-end'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition duration-500 ease-out data-[closed]:opacity-0'
        />
        <div className='fixed inset-0 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-end'>{children}</div>
        </div>
      </Dialog>
    </>
  );
}
