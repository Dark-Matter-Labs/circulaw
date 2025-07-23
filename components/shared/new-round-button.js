import { IconArrowRight } from '@tabler/icons-react';

const varientStyles = {
  orange: 'border-orange-300 text-orange-300',
  green: 'border-green-500 text-green-500',
  white: 'border-cl-black text-cl-black',
};

export default function NewRoundButton({ variant }) {
  return (
    <div
      className={`${varientStyles[variant]} flex h-12 w-12 items-center justify-center self-end rounded-full border-2 bg-transparent`}
    >
      <IconArrowRight className='inline-block h-6 w-6' aria-hidden='true' />
    </div>
  );
}
