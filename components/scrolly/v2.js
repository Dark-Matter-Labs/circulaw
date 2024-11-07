'use client';
import { useState, useEffect } from 'react';

export default function V2() {
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

  // Radii and circumferences for circles
  const radius1 = 182;
  const circumference1 = 2 * Math.PI * radius1;
  const radius2 = 133;
  const circumference2 = 2 * Math.PI * radius2;
  const radius3 = 84;
  const circumference3 = 2 * Math.PI * radius3;

  // Scroll segments
  const scrollStart1 = 0;
  const scrollEnd1 = 1800;

  // Milestones based on progress percentages
  const startMiddleCircleAt = scrollEnd1 * 0.2;
  const startInnerCircleAt = scrollEnd1 * 0.3;
  const stopMiddleCircleAt = scrollEnd1 + scrollEnd1 * 0.25;

  // Starting rotations for each circle to achieve specific starting points on the circumference
  const rotation1 = 64.8;
  const rotation2 = 136.8;
  const rotation3 = 180;

  // Calculate the angle shift to move each bar 17 pixels backward along the circumference
  const angleShift1 = (22 / circumference1) * 360;
  const angleShift2 = (22 / circumference2) * 360;
  const angleShift3 = (22 / circumference3) * 360;

  // Adjusted starting angles for each bar
  const barRotation1 = rotation1 - angleShift1;
  const barRotation2 = rotation2 - angleShift2;
  const barRotation3 = rotation3 - angleShift3;

  // Calculate the progress for each circle based on segments
  const calculateProgress = (start, end) => {
    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return 1;
    return (scrollPosition - start) / (end - start);
  };

  // Outer circle progress
  const progress1 = calculateProgress(scrollStart1, scrollEnd1);

  // Middle circle progress
  const progress2 = scrollPosition >= startMiddleCircleAt
    ? calculateProgress(startMiddleCircleAt, stopMiddleCircleAt)
    : 0;

  // Inner circle progress
  const progress3 = scrollPosition >= startInnerCircleAt
    ? calculateProgress(startInnerCircleAt, scrollEnd1 * 1.5)
    : 0;

  // Calculate strokeDashoffset for each circle based on progress
  const calculateOffset = (progress, circumference) => {
    return circumference * (1 - progress);
  };

  // Calculate the position for each bar, moving it slightly inward to align the thicker edge with the circumference
  const barOffset = 24; // Adjust this value to control how far the bar sits from the circle edge
  const barPosition1 = {
    x: 317.5 + (radius1 - barOffset) * Math.cos((barRotation1 * Math.PI) / 180),
    y: 317.5 + (radius1 - barOffset) * Math.sin((barRotation1 * Math.PI) / 180),
  };
  const barPosition2 = {
    x: 317.5 + (radius2 - barOffset) * Math.cos((barRotation2 * Math.PI) / 180),
    y: 317.5 + (radius2 - barOffset) * Math.sin((barRotation2 * Math.PI) / 180),
  };
  const barPosition3 = {
    x: 317.5 + (radius3 - barOffset) * Math.cos((barRotation3 * Math.PI) / 180),
    y: 317.5 + (radius3 - barOffset) * Math.sin((barRotation3 * Math.PI) / 180),
  };

  return (
    <div className='fixed mt-10 flex items-start justify-center w-full h-full'>
      <div className='w-48 h-full relative'>
        <ul className='sticky'>
          <li className='flex flex-row'>
            <div className='h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center p-2xs'>
              1
            </div>
            <p className='text-green-600 p-xs ml-2 max-w-[90px]'>
              Circulair bouwen meer effect met mix van instrumenten
            </p>
          </li>
          <li className='flex flex-row'>
            <div className='h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center p-2xs'>
              2
            </div>
            <p className='text-green-600 p-xs ml-2 max-w-[90px]'>
              Gemeentelijke beleidscyclus
            </p>
          </li>
          <li className='flex flex-row'>
            <div className='h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center p-2xs'>
              3
            </div>
            <p className='text-green-600 p-xs ml-2 max-w-[90px]'>
              Omgevingsvisie, Omgevingsprogramma, Omgevingsplan
            </p>
          </li>
          <li className='flex flex-row'>
            <div className='h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center p-2xs'>
              4
            </div>
            <p className='text-green-600 p-xs ml-2 max-w-[90px]'>
              Planregels uit het omgevingsplan
            </p>
          </li>
        </ul>
      </div>
      <div className='w-72 h-full'>content</div>

      <div className='flex items-center justify-center w-[635px] h-[635px] relative'>
        <div className='bg-scroll-circles h-full w-full'>
          <div className='w-full h-full flex items-center justify-center'>
            <svg className='svg' height='635' width='635'>

              {/* Outer Circle */}
              <circle
                cx="317.5"
                cy="317.5"
                r={radius1}
                stroke="#D1F9EB"
                strokeWidth="39"
                fill="none"
                strokeDasharray={circumference1}
                strokeDashoffset={calculateOffset(progress1, circumference1)}
                transform={`rotate(${rotation1} 317.5 317.5)`}
                strokeLinecap="round"
              />

              {/* Middle Circle */}
              <circle
                cx="317.5"
                cy="317.5"
                r={radius2}
                stroke="#84E9C5"
                strokeWidth="41"
                fill="none"
                strokeDasharray={circumference2}
                strokeDashoffset={calculateOffset(progress2, circumference2)}
                transform={`rotate(${rotation2} 317.5 317.5)`}
                strokeLinecap="round"
              />

              {/* Inner Circle */}
              <circle
                cx="317.5"
                cy="317.5"
                r={radius3}
                stroke="#25C38B"
                strokeWidth="40"
                fill="none"
                strokeDasharray={circumference3}
                strokeDashoffset={calculateOffset(progress3, circumference3)}
                transform={`rotate(${rotation3} 317.5 317.5)`}
                strokeLinecap="round"
              />

              {/* Outer Tapered Bar */}
              <path
                d="M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z"
                fill="#84E9C5"
                transform={`translate(${barPosition1.x}, ${barPosition1.y}) rotate(${barRotation1 + 90}) scale(1, -1)`}
              />

              {/* Middle Tapered Bar */}
              <path
                d="M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z"
                fill="#25C38B"
                transform={`translate(${barPosition2.x}, ${barPosition2.y}) rotate(${barRotation2 + 90}) scale(1, -1)`}
              />

              {/* Inner Tapered Bar */}
              <path
                d="M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z"
                fill="#07B071"
                transform={`translate(${barPosition3.x}, ${barPosition3.y}) rotate(${barRotation3 + 90}) scale(1, -1)`}
              />

            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
