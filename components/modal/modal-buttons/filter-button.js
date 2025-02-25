import { IconAdjustments } from '@tabler/icons-react';

export default function FilterModalButton() {
  return (
    <div className='relative my-6 inline-flex h-[60px] w-[95vw] items-center justify-center rounded-cl border-cl-black bg-green-100 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 sm:hidden'>
      <span className='sr-only'>Open sidebar</span>
      <span className='p-base-bold mr-3'>Filter</span>
      <IconAdjustments className='h-8 w-8 -rotate-90' aria-hidden='true' />
    </div>
  );
}
