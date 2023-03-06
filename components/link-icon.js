import Image from 'next/image';
import linkIcon from '../public/icons/link-icon.svg';

export default function LinkIcon() {
  return (
    <span className='pl-0.5 inline-block h-5 w-5 sm:h-6 sm:w-6 -mb-1 relative'>
      <Image className='' alt='new tab' src={linkIcon} width={30} height={10} />
    </span>
  );
}
