'use client';
import ImageComponent from '../image-component';
import Link from 'next/link';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

function useMenuAnimation(isInView) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'li',
      isInView
        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
        : { opacity: 0, y: 100, filter: 'blur(20px)' },
      {
        duration: 0.3,
        delay: isInView ? staggerMenuItems : 0,
      },
    );
  }, [isInView, animate]);

  return scope;
}

export default function ThemeSponsors({ thema, sponsors }) {
  const [isInView, setIsInView] = useState(false);

  const scope = useMenuAnimation(isInView);

  return (
    <div className='bg-gray-100 h-auto'>
      <div className='global-margin flex flex-col items-center justify-center'>
        <div className='mt-20 mb-10 heading-xl-semibold text-green-500 flex flex-row items-center'>
          <div className='h-11 w-1.5 bg-green-500'></div>
          <div className='ml-4'>Het thema &apos;{thema}&apos; is mede mogelijk gemaakt door:</div>
        </div>
        <motion.ul
          ref={scope}
          whileInView={() => setIsInView(true)}
          className='mb-16 flex flex-row flex-wrap sm:gap-x-8 items-center justify-center'
        >
          {sponsors?.map((sponsor, id) => (
            <li key={id} className='relative h-28 w-52'>
              <Link href={sponsor.partnerLink}>
                <ImageComponent image={sponsor.logo} />
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
