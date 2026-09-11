import Image from 'next/image';
import { notFound } from 'next/navigation';

import Header from '@/components/headers';
import AreaPlanningLayout from '@/components/layouts/area-planning';

// These pages only ever render for the 'bouw' product chain and notFound() for
// anything else, so the path set is knowable at build time. Declaring it lets the
// route prerender instead of being server-rendered on every request.
export async function generateStaticParams() {
  return [{ productChain: 'bouw' }];
}

export const dynamicParams = false;

export default async function AreaPlanning(props) {
  const params = await props.params;
  if (params.productChain === 'bouw') {
    return (
      <>
        <Header
          title='Stimuleer houtbouw in circulaire gebiedsontwikkeling'
          bgColor='bg-green-500'
          imageURL='/big-decoration.png'
        />
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
