import Image from 'next/image';
import linkIcon from '../public/icons/link-icon.svg';

const sizes = {
  mob: 'relative',
  desktop: 'relative',
};

export default function LinkIcon({ size }) {
  let sizeClasses = sizes[size];
  return (
    <span className={`pl-0.5 inline-block h-6 w-6 -mb-1 relative ${sizeClasses}`}>
      <Image className='' alt='new tab' src={linkIcon} width={30} height={10} />
    </span>
  );
}
