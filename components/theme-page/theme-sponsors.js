'use client';
import ImageComponent from '../image-component';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ThemeSponsors({ thema, sponsors }) {
  const scope = useMotionTimeline(
    [
      ['#list0', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list1', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list2', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list3', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list4', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list0', { opacity: 0, y: -200 }, { ease: 'linear' }],
      ['#list1', { opacity: 0, y: -200 }, { ease: 'linear' }],
      ['#list2', { opacity: 0, y: -200 }, { ease: 'linear' }],
      ['#list3', { opacity: 0, y: -200 }, { ease: 'linear' }],
      ['#list4', { opacity: 0, y: -200 }, { ease: 'linear' }],
      [
        ['#list0', { opacity: 0, y: 100 }, { ease: 'linear' }],
        ['#list1', { opacity: 0, y: 100 }, { ease: 'linear' }],
        ['#list2', { opacity: 0, y: 100 }, { ease: 'linear' }],
        ['#list3', { opacity: 0, y: 100 }, { ease: 'linear' }],
        ['#list4', { opacity: 0, y: 100 }, { ease: 'linear' }],
      ],

      ['#list5', { opacity: 1, y: -100 }, { ease: 'linear' }],
      ['#list5', { opacity: 0, y: -200 }, { ease: 'linear', delay: 1.3 }],
      [['#list5', { opacity: 0, y: 100 }, { ease: 'linear' }]],
    ],
    Infinity,
  );

  return (
    <div className='bg-gray-100 h-auto'>
      <div className='global-margin flex flex-col items-center justify-center'>
        <div className='mt-20 mb-10 heading-xl-semibold text-green-500 flex flex-row items-center'>
          <div className='h-11 w-1.5 bg-green-500'></div>
          <div className='ml-4'>Het thema &apos;{thema}&apos; is mede mogelijk gemaakt door:</div>
        </div>
        <motion.ul
          ref={scope}
          className='mb-16 flex flex-row flex-wrap sm:gap-x-8 items-center justify-center'
        >
          {sponsors?.map((sponsor, id) => (
            <li id={`list${id}`} key={id} className='relative h-28 w-52'>
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

const useMotionTimeline = (keyframes, count) => {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, []);

  const processAnimation = async (animation) => {
    // If list of animations, run all concurrently
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a);
        }),
      );
    } else {
      // Else run the single animation
      await animate(...animation);
    }
  };

  const handleAnimate = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  };

  return scope;
};
