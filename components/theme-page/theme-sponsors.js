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
      <div className='h-auto bg-gray-100'>
        <div className='global-margin flex flex-col items-center justify-center'>
          <div className='heading-xl-semibold mb-10 mt-20 flex flex-row items-center text-green-500'>
            <div className='h-11 w-1.5 bg-green-500'></div>
            <div className='ml-4'>Het thema &apos;{thema}&apos; is mede mogelijk gemaakt door:</div>
          </div>
          <ul
            ref={ref}
            className='mb-16 flex flex-row flex-wrap items-center justify-center sm:gap-x-8'
          >
            {sponsors?.map((sponsor, id) => (
              <li
                key={id}
                className={`${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'
                } tranistion-opactiy duration-[800ms] ease-in-out delay-[${
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
