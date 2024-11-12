'use client';
import { useState, useEffect, useRef } from 'react';
import ContentOne from './content/01-content';
import ContentTwo from './content/02-content';
import ContentThree from './content/03-content';
import ContentFour from './content/04-content';

export default function V2() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [activeContent, setActiveContent] = useState('c1');

  const contentRefs = {
    c1: useRef(),
    c2: useRef(),
    c3: useRef(),
    c4: useRef(),
  };

  useEffect(() => {
    // Function to handle setting active content based on intersection
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveContent(entry.target.dataset.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each content section
    Object.values(contentRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Cleanup the observer on component unmount
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    if (scrollPosition < 1300) {
      setActiveNav(0);
    } else if (scrollPosition > 1300 && scrollPosition < 2600) {
      setActiveNav(1);
    } else if (scrollPosition > 2600 && scrollPosition < 3900) {
      setActiveNav(2);
    } else if (scrollPosition > 3900 && scrollPosition < 5200) {
      setActiveNav(3);
    }

    if (scrollPosition < 650) {
      setActiveContent('c1');
    } else if (scrollPosition > 650 && scrollPosition < 1300) {
      setActiveContent('c2');
    } else if (scrollPosition > 1300 && scrollPosition < 1950) {
      setActiveContent('c3');
    } else if (scrollPosition > 1950 && scrollPosition < 2600) {
      setActiveContent('c4');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  console.log(scrollPosition);

  // Radii and circumferences for circles
  const radius1 = 182;
  const circumference1 = 2 * Math.PI * radius1;
  const radius2 = 133;
  const circumference2 = 2 * Math.PI * radius2;
  const radius3 = 84;
  const circumference3 = 2 * Math.PI * radius3;

  // Scroll segments
  const scrollStart1 = 0;
  const scrollEnd1 = 4000;

  // Milestones based on progress percentages
  const startMiddleCircleAt = scrollEnd1 * 0.2;
  const startInnerCircleAt = scrollEnd1 * 0.3;
  const stopMiddleCircleAt = scrollEnd1 + scrollEnd1 * 0.25;

  console.log(stopMiddleCircleAt);

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
  const progress2 =
    scrollPosition >= startMiddleCircleAt
      ? calculateProgress(startMiddleCircleAt, stopMiddleCircleAt)
      : 0;

  // Inner circle progress
  const progress3 =
    scrollPosition >= startInnerCircleAt
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
    <div className='fixed mt-10 flex items-start justify-center w-full'>
      <div className='w-48 h-full relative mr-6'>
        <div className='sticky h-[700px] grow flex flex-col gap-y-6'>
          <button
            className={`${
              activeNav === 0 ? 'translate-y-0' : ''
            } flex flex-row text-green-600 text-left`}
            id='nav1'
            onClick={() =>
              window.scrollTo({
                top: 1,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <div
              className={`${
                activeNav === 0 ? 'p-2xs-semibold' : 'p-2xs'
              } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
            >
              1
            </div>
            <p className={`${activeNav === 0 ? 'p-xs-semibold' : 'p-xs'} ml-2 max-w-[90px]`}>
              Circulair bouwen meer effect met mix van instrumenten
            </p>
          </button>
          <button
            className={`${
              activeNav > 0 ? 'translate-y-0' : 'translate-y-[300px]'
            } transition-all duration-400 flex flex-row text-green-600 text-left`}
            id='nav2'
            onClick={() =>
              window.scrollTo({
                top: 1301,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <div
              className={`${
                activeNav === 1 ? 'p-2xs-semibold' : 'p-2xs'
              } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
            >
              2
            </div>
            <p className={`${activeNav === 1 ? 'p-xs-semibold' : 'p-xs'} ml-2 max-w-[90px]`}>
              De plaats van instrumenten in de beleidscyclus
            </p>
          </button>
          <button
            className={`${
              activeNav > 1 ? 'translate-y-0' : 'translate-y-[300px]'
            } transition-all duration-400 flex flex-row text-green-600 text-left`}
            id='nav3'
            onClick={() =>
              window.scrollTo({
                top: 2601,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <div
              className={`${
                activeNav === 2 ? 'p-2xs-semibold' : 'p-2xs'
              } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
            >
              3
            </div>
            <p className={`${activeNav === 2 ? 'p-xs-semibold' : 'p-xs'} ml-2 max-w-[90px]`}>
              Omgevingsvisie, Omgevingsprogramma, Omgevingsplan
            </p>
          </button>
          <button
            className={`${
              activeNav > 2 ? 'translate-y-0' : 'translate-y-[300px]'
            } transition-all duration-400 flex flex-row text-green-600 text-left`}
            id='nav4'
            onClick={() =>
              window.scrollTo({
                top: 3901,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <div
              className={`${
                activeNav === 3 ? 'p-2xs-semibold' : 'p-2xs'
              } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
            >
              4
            </div>
            <p className={`${activeNav === 3 ? 'p-xs-semibold' : 'p-xs'} ml-2 max-w-[90px]`}>
              Planregels uit het omgevingsplan
            </p>
          </button>
        </div>
      </div>
      <div className='flex flex-col relative min-w-[280px]'>
        <div
          ref={contentRefs.c1}
          data-id='c1'
          className={`${
            activeContent === 'c1' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[300px]'
          } transition-all duration-500 absolute top-0 left-0`}
        >
          <ContentOne />
        </div>
        <div
          ref={contentRefs.c2}
          data-id='c2'
          className={`${
            activeContent === 'c2'
              ? 'opacity-100 translate-y-0'
              : activeContent === 'c1'
              ? 'opacity-0 translate-y-[300px]'
              : 'opacity-0 -translate-y-[300px]'
          } transition-all duration-500 absolute top-0 left-0`}
        >
          <ContentTwo />
        </div>
        <div
          ref={contentRefs.c3}
          data-id='c3'
          className={`${
            activeContent === 'c3'
              ? 'opacity-100 translate-y-0'
              : activeContent === 'c2'
              ? 'opacity-0 translate-y-[300px]'
              : 'opacity-0 -translate-y-[300px]'
          } transition-all duration-500 absolute top-0 left-0`}
        >
          <ContentThree />
        </div>
        <div
          ref={contentRefs.c4}
          data-id='c4'
          className={`${
            activeContent === 'c4'
              ? 'opacity-100 translate-y-0'
              : activeContent === 'c3'
              ? 'opacity-0 translate-y-[300px]'
              : 'opacity-0 -translate-y-[300px]'
          } transition-all duration-500 absolute top-0 left-0`}
        >
          <ContentFour />
        </div>
      </div>
      <div className='flex items-center justify-center w-[635px] h-[635px]'>
        <div className='bg-scroll-circles h-full w-full'>
          <div className='w-full h-full flex items-center justify-center'>
            <svg className='svg' height='635' width='635'>
              {/* Outer Circle */}
              <circle
                cx='317.5'
                cy='317.5'
                r={radius1}
                stroke='#D1F9EB'
                strokeWidth='39'
                fill='none'
                strokeDasharray={circumference1}
                strokeDashoffset={calculateOffset(progress1, circumference1)}
                transform={`rotate(${rotation1} 317.5 317.5)`}
                strokeLinecap='round'
              />

              {/* Middle Circle */}
              <circle
                cx='317.5'
                cy='317.5'
                r={radius2}
                stroke='#84E9C5'
                strokeWidth='41'
                fill='none'
                strokeDasharray={circumference2}
                strokeDashoffset={calculateOffset(progress2, circumference2)}
                transform={`rotate(${rotation2} 317.5 317.5)`}
                strokeLinecap='round'
              />

              {/* Inner Circle */}
              <circle
                cx='317.5'
                cy='317.5'
                r={radius3}
                stroke='#25C38B'
                strokeWidth='40'
                fill='none'
                strokeDasharray={circumference3}
                strokeDashoffset={calculateOffset(progress3, circumference3)}
                transform={`rotate(${rotation3} 317.5 317.5)`}
                strokeLinecap='round'
              />

              {/* Outer Tapered Bar */}
              <path
                d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                fill='#84E9C5'
                transform={`translate(${barPosition1.x}, ${barPosition1.y}) rotate(${
                  barRotation1 + 90
                }) scale(1, -1)`}
              />

              {/* Middle Tapered Bar */}
              <path
                d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                fill='#25C38B'
                transform={`translate(${barPosition2.x}, ${barPosition2.y}) rotate(${
                  barRotation2 + 90
                }) scale(1, -1)`}
              />

              {/* Inner Tapered Bar */}
              <path
                d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                fill='#07B071'
                transform={`translate(${barPosition3.x}, ${barPosition3.y}) rotate(${
                  barRotation3 + 90
                }) scale(1, -1)`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
