import Image from 'next/image';
import { notFound } from 'next/navigation';

import AreaPlanningLayout from '@/components/layouts/area-planning';
import Header from '@/components/headers';

export default function AreaPlanning({ params }) {
  if (params.productChain === 'bouw') {
    return (
      <>
      <Header title='Stimuleer houtbouw in circulaire gebiedsontwikkeling' bgColor='bg-green-500'/>
        <div className='relative my-5 w-full items-center md:hidden'>
          <Image
            src='/area-planning-mob.png'
            alt='Visual waarin de fases van de gebiedsontwikkeling te zien zijn'
            width={900}
            height={900 * (380 / 1160)}
            sizes='
                              (max-width: 768px) 95vw,
                              (max-width: 1200px) 60vw,
                              40vw'
            className='w-full'
          />
        </div>
        <AreaPlanningLayout />
      </>
    );
  } else return notFound();
}
