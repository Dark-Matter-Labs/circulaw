import Image from 'next/image';

import { urlFor } from '@/lib/sanity';
import { getImageDimensions } from '@sanity/asset-utils';

export default function ImageComponent({ image, caption }) {
  const { width, height } = getImageDimensions(image);
  return (
    <div className='relative'>
      <Image
        className='w-full object-cover'
        src={urlFor(image).auto('format').fit('max').url()}
        alt={caption || 'No alt-tag provided'}
        width={900}
        height={900 * (height / width)}
        sizes='
              (max-width: 768px) 95vw,
              (max-width: 1200px) 60vw,
              40vw'
      />
    </div>
  );
}
