import { IconArrowDown, IconArrowRight, IconFileDownload, IconPdf } from '@tabler/icons-react';

export default function NewButton({ type, icon, children }) {
  return (
    <button
      className={`${type === 'primary' ? 'bg-green-500 text-gray-100 hover:bg-green-200 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-800 active:text-gray-100' : ''} button p-base-semibold inline-flex items-center justify-center rounded-full px-4 py-2`}
    >
      {children}
      {icon === 'pdf' && <IconPdf className='ml-2 size-5' />}
      {icon === 'arrowRight' && <IconArrowDown className='ml-2 size-5' />}
      {icon === 'arrowDown' && <IconArrowRight className='ml-2 size-5' />}
      {icon === 'download' && <IconFileDownload className='ml-2 size-5' />}
    </button>
  );
}
