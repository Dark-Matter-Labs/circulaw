'use client';
import { useState, useEffect } from 'react';

export default function V1() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateOffset = (speed, circumference) => {
    const progress = Math.min(scrollPosition * speed, circumference);
    return circumference - progress;
  };

  const radius1 = 160;
  const circumference1 = 2 * Math.PI * radius1;
  const radius2 = 120;
  const circumference2 = 2 * Math.PI * radius2;
  const radius3 = 80;
  const circumference3 = 2 * Math.PI * radius3;

  return (
    <div className='flex items-start justify-center w-full'>
      <div className='w-72'>Nav</div>
      <div className='w-72'>content</div>

      <div className='flex items-center justify-center'>
        <div className="bg-[url('/bg.svg')] bg-cover w-full bg-no-repeat">
          <div className='container'>
            <svg className='svg' height='400' width='400'>
              <circle
                cx='200'
                cy='200'
                r={radius1}
                stroke='#D1F9EB'
                strokeWidth='20'
                fill='none'
                strokeDasharray={circumference1}
                strokeDashoffset={calculateOffset(0.5, circumference1)}
              />
              <circle
                cx='200'
                cy='200'
                r={radius2}
                stroke='#84E9C5'
                strokeWidth='16'
                fill='none'
                strokeDasharray={circumference2}
                strokeDashoffset={calculateOffset(0.3, circumference2)}
              />
              <circle
                cx='200'
                cy='200'
                r={radius3}
                stroke='#25C38B'
                strokeWidth='8'
                fill='none'
                strokeDasharray={circumference3}
                strokeDashoffset={calculateOffset(0.1, circumference3)}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
