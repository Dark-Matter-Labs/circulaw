import Image from 'next/image';
import linkIcon from '../public/icons/Vectorlink-icon.svg';

// this should work but only after next 12.2
const sizes = {
  mob: 'h-2 w-2',
  desktop: 'h-4 w-4',
};

export default function LinkIcon({ size }) {
  let sizeClasses = sizes[size];
  return (
    <span className={`pl-0.5  ${sizeClasses}`}>
      <Image className='' alt='new tab' src={linkIcon} height={24} width={24} />
    </span>
  );
}
