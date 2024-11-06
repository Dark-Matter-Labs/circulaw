import { IconAdjustments } from '@tabler/icons-react';

export default function FilterModalButton() {
  return (
    <div className='relative px-4 my-6 w-[90vw] inline-flex items-center justify-center bg-green-50 h-[60px] p-2 border-gray-800 rounded-cl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:hidden'>
      <span className='sr-only'>Open sidebar</span>
      <span className='p-base-bold mr-3'>Filter</span>
      <IconAdjustments className='h-8 w-8 -rotate-90' aria-hidden='true' />
    </div>
  );
}
