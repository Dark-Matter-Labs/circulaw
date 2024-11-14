'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Playground() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define thresholds for the scroll position to control when the transition happens
  const thresholdStart = 100; // start the transition
  const thresholdEnd = 400; // complete the transition

  // Calculate the interpolation value
  const progress = Math.min(
    Math.max((scrollPosition - thresholdStart) / (thresholdEnd - thresholdStart), 0),
    1,
  );

  // Use CSS transformations to create a 3D effect
  const transformStyle = {
    transform: `rotateX(${progress * 90}deg)  scale(${1 + progress * 0.2})`,
    transition: 'transform 0.1s ease-out',
  };

  const getImageToShow = () => {
    if (scrollPosition < 400) {
      return (
        <div className='mt-[-120px] ease-in-out' style={{ perspective: '1000px' }}>
          <Image
            src='/base.svg' // Change to the path of your SVG in the public folder
            alt='2D to 3D transition'
            style={transformStyle}
            className='test mt-10'
            width={501}
            height={501}
          />
        </div>
      );
    } else if (scrollPosition >= 400 && scrollPosition < 500) {
      return (
        <Image
          src='/cone-base.svg'
          alt='Base of cone'
          width={423}
          height={579}
          className='mt-40 ease-in-out'
        />
      );
    } else if (scrollPosition >= 500 && scrollPosition < 600) {
      return (
        <>
          <Image
            src='/cone-2.svg'
            alt='Base of cone'
            width={272}
            height={170}
            className=' ml-[70px] ease-in-out'
          />
          <Image
            src='/cone-base.svg'
            alt='Base of cone'
            width={423}
            height={166.5}
            className=' ease-in-out'
          />
        </>
      );
    } else if (scrollPosition >= 600 && scrollPosition < 700) {
      return (
        <>
          <Image
            src='/cone-3.svg'
            alt='Base of cone'
            width={146}
            height={87}
            className='mb-2 ml-[130px] ease-in-out'
          />
          <Image
            src='/cone-2-2.svg'
            alt='Base of cone'
            width={272}
            height={102}
            className=' ml-[70px] ease-in-out'
          />
          <Image
            src='/cone-2-1.svg'
            alt='Base of cone'
            width={423}
            height={166.5}
            className=' ease-in-out'
          />
        </>
      );
    } else {
      return (
        <Image
          src='/final.svg'
          alt='Final cone'
          width={423}
          height={309.5}
          className=' ease-in-out'
        />
      );
    }
  };

  return (
    <div className='overflow-y-scroll '>
      <div className='pt-20' style={{ height: '200vh', position: 'relative' }}>
        <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translateX(-50%)' }}>
          {getImageToShow()}
        </div>
      </div>
    </div>
  );
}
