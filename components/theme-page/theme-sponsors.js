'use client';
import { useRef, useState, useEffect } from 'react';
import ImageComponent from '../image-component';
import Link from 'next/link';

export default function ThemeSponsors({ thema, sponsors }) {
  const ref = useRef();

  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      });

      observer.observe(ref.current);
    }, [ref]);

    return isIntersecting;
  }

  const isVisible = useIsVisible(ref);

  return (
    <>
      <div className='bg-gray-100 h-auto'>
        <div className='global-margin flex flex-col items-center justify-center'>
          <div className='mt-20 mb-10 heading-xl-semibold text-green-500 flex flex-row items-center'>
            <div className='h-11 w-1.5 bg-green-500'></div>
            <div className='ml-4'>Het thema &apos;{thema}&apos; is mede mogelijk gemaakt door:</div>
          </div>
          <ul
            ref={ref}
            className='mb-16 flex flex-row flex-wrap sm:gap-x-8 items-center justify-center'
          >
            {sponsors?.map((sponsor, id) => (
              <li
                key={id}
                className={`${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'
                } tranistion-opactiy ease-in-out duration-[800ms] delay-[${
                  id * 250
                }ms] relative h-28 w-52 basis-1/2 sm:basis-auto`}
              >
                <Link href={sponsor.partnerLink} target='_blank'>
                  <ImageComponent image={sponsor.logo} caption={sponsor.partnerName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
