'use client'
import { useRef, useState, useEffect } from 'react';
import ImageComponent from '../image-component';
import Link from 'next/link';

export default function ThemeSponsors({ thema, sponsors }) {
  const ref = useRef()  
  const [inView, setInView] = useState()
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${inView ? 'bg-gray-100' : 'bg-red-400'} h-auto`} ref={ref}>
      <div className='global-margin flex flex-col items-center justify-center'>
        <div className='mt-20 mb-10 heading-xl-semibold text-green-500 flex flex-row items-center'>
          <div className='h-11 w-1.5 bg-green-500'></div>
          <div className='ml-4'>Het thema &apos;{thema}&apos; is mede mogelijk gemaakt door:</div>
        </div>
        <ul className='mb-16 flex flex-row flex-wrap sm:gap-x-8 items-center justify-center'>
          {sponsors?.map((sponsor, id) => (
            <li key={id} className='relative h-28 w-52'>
              <Link href={sponsor.partnerLink}>
                <ImageComponent image={sponsor.logo} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
