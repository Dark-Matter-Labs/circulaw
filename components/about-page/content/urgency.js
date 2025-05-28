import { PortableText } from 'next-sanity';
import Image from 'next/image';

import { aboutPageReducedPortableTextComponents } from '../../../lib/portable-text/pt-components';

export default function Urgency({ data }) {
  console.log('Urgency data:', data);
  return (
    <div className='mb-[60px] flex flex-col sm:mb-[120px]'>
      <div className='mb-10 ml-auto flex basis-2/3'>
        <video
          className='h-[300px] w-full rounded-cl object-cover sm:h-[500px]'
          autoPlay
          loop
          muted
          playsInline
          src='/urgnecyImage.mp4'
        />
      </div>
      <div className='flex gap-x-10'>
        <div className='rounded-cl bg-green-200 px-20 py-8'>
          <h3 className='heading-3xl-semibold mb-2 text-green-500'>{data?.title}</h3>
          <PortableText value={data?.content} components={aboutPageReducedPortableTextComponents} />
        </div>
        <div className='flex min-w-[85px] flex-col justify-between'>
          <Image src='/urgencyIcon1.svg' width={85} height={89} alt='Urgency Icon 1' />
          <Image src='/urgencyIcon2.svg' width={85} height={89} alt='Urgency Icon 1' />{' '}
          <Image src='/urgencyIcon3.svg' width={85} height={89} alt='Urgency Icon 1' />
        </div>
      </div>
    </div>
  );
}
