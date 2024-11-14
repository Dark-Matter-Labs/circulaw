'use client';
import { useState, useEffect, useRef } from 'react';
import ContentOne from './content/01-content';
import ContentTwo from './content/02-content';
import ContentThree from './content/03-content';
import ContentFour from './content/04-content';
import ContentFive from './content/05-content';
import ContentSix from './content/06-content';

export default function V2() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [activeContent, setActiveContent] = useState('c1');
  const [animationStage, setAnimationStage] = useState(0);

  const contentRefs = {
    c1: useRef(),
    c2: useRef(),
    c3: useRef(),
    c4: useRef(),
    c5: useRef(),
    c6: useRef(),
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    if (scrollPosition < 910) {
      setActiveNav(0);
    } else if (scrollPosition > 910 && scrollPosition < 3450) {
      setActiveNav(1);
    } else if (scrollPosition > 3450 && scrollPosition < 5850) {
      setActiveNav(2);
    } else if (scrollPosition > 5850 && scrollPosition < 7800) {
      setActiveNav(3);
    }

    if (scrollPosition < 455) {
      setActiveContent('c1');
    } else if (scrollPosition > 455 && scrollPosition < 910) {
      setActiveContent('c2');
    } else if (scrollPosition > 910 && scrollPosition < 1540) {
      setActiveContent('c3');
    } else if (scrollPosition > 1540 && scrollPosition < 1995) {
      setActiveContent('c4');
    } else if (scrollPosition > 1995 && scrollPosition < 2730) {
      setActiveContent('c5');
    } else if (scrollPosition > 2730 && scrollPosition < 3290) {
      setActiveContent('c6');
    }

    if (scrollPosition > 3850) {
      setAnimationStage(1);
    } else {
      setAnimationStage(0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  // Radii and circumferences for circles
  const radius1 = 185;
  const circumference1 = 2 * Math.PI * radius1;
  const radius2 = 135;
  const circumference2 = 2 * Math.PI * radius2;
  const radius3 = 85;
  const circumference3 = 2 * Math.PI * radius3;

  // Define unique scroll ranges for each circle
  const scrollStartOuter = 875; // Start point for the outer circle
  const scrollEndOuter = 3850;  // End point for the outer circle
  const scrollStartMiddle = 1260; // Start point for the middle circle
  const scrollEndMiddle = 3675; // End point for the middle circle
  const scrollStartInner = 1540; // Start point for the inner circle
  const scrollEndInner = 3500; // End point for the inner circle

  // Function to calculate progress based on custom start and end points
  const calculateProgress = (scrollPosition, start, end) => {
    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return 1;
    return (scrollPosition - start) / (end - start);
  };

  // Calculate the progress for each circle based on its unique scroll range
  const progressOuter = calculateProgress(scrollPosition, scrollStartOuter, scrollEndOuter);
  const progressMiddle = calculateProgress(scrollPosition, scrollStartMiddle, scrollEndMiddle);
  const progressInner = calculateProgress(scrollPosition, scrollStartInner, scrollEndInner);

  // Calculate strokeDashoffset for each circle based on progress
  const calculateOffset = (progress, circumference) => {
    return circumference * (1 - progress);
  };

  // Calculate strokeDashoffset for each circle based on its progress
  const offsetOuter = calculateOffset(progressOuter, circumference1);
  const offsetMiddle = calculateOffset(progressMiddle, circumference2);
  const offsetInner = calculateOffset(progressInner, circumference3);

  // Starting rotations for each circle to achieve specific starting points on the circumference
  const rotation1 = 54.8;
  const rotation2 = 116.8;
  const rotation3 = 185;

  // Calculate the angle shift to move each bar 17 pixels backward along the circumference
  const angleShift1 = (22 / circumference1) * 360;
  const angleShift2 = (22 / circumference2) * 360;
  const angleShift3 = (22 / circumference3) * 360;

  // Adjusted starting angles for each bar
  const barRotation1 = rotation1 - angleShift1;
  const barRotation2 = rotation2 - angleShift2;
  const barRotation3 = rotation3 - angleShift3;

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

  const opacityOuterWords = Math.min(Math.max(scrollPosition / 250, 0), 1);
  const opacity = scrollPosition < 250 ? 0 : Math.min((scrollPosition - 250) / 400, 1);
  const opacity2 = Math.min(Math.max((scrollPosition - 650) / 650, 0), 1); // From 1950 to 3900px, opacity2 goes from 0 to 1

  // Define thresholds for the scroll position to control when the transition happens
  const thresholdStart = 3400; // start the transition
  const thresholdEnd = 3850; // complete the transition

  // Calculate the interpolation value
  const progress = Math.min(
    Math.max((scrollPosition - thresholdStart) / (thresholdEnd - thresholdStart), 0),
    1,
  );

  const transformStyle = {
    transform: `rotateX(${progress * 90}deg)  scale(${1 + progress * 0.2})`,
    transition: 'transform 0.1s ease-out',
  };

  // Define growth parameters
  const maxHeight = 110; // Maximum height of the cone is now 190px
  const layers = 200; // Number of ellipse layers for smoother transition
  const coneHeight = Math.min((scrollPosition - 3450) / 5, maxHeight);

  return (
    <>
      <div className='fixed bottom-8 right-8 text-red-700 heading-2xl-semibold'>
        {scrollPosition}
      </div>
      <div className='sticky top-44 mt-10 flex items-start justify-center w-full'>
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
              activeContent === 'c1'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-[300px]'
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
          <div
            ref={contentRefs.c5}
            data-id='c5'
            className={`${
              activeContent === 'c5'
                ? 'opacity-100 translate-y-0'
                : activeContent === 'c4'
                ? 'opacity-0 translate-y-[300px]'
                : 'opacity-0 -translate-y-[300px]'
            } transition-all duration-500 absolute top-0 left-0`}
          >
            <ContentFive />
          </div>
          <div
            ref={contentRefs.c6}
            data-id='c6'
            className={`${
              activeContent === 'c6'
                ? 'opacity-100 translate-y-0'
                : activeContent === 'c5'
                ? 'opacity-0 translate-y-[300px]'
                : 'opacity-0 -translate-y-[300px]'
            } transition-all duration-500 absolute top-0 left-0`}
          >
            <ContentSix />
          </div>
        </div>
        {animationStage === 0 ? (
          <div
            className='flex items-center justify-center w-[635px] h-[635px]'
            style={{ perspective: '1000px' }}
          >
            <div className=' h-full w-full' style={transformStyle}>
              <div className='w-full h-full flex items-center justify-center'>
                <svg className='svg' height='635' width='635' xmlns='http://www.w3.org/2000/svg'>
                  {/* Outer Outer Circle */}
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r='225'
                    stroke='#F8FBF8'
                    strokeWidth='40'
                    fill='none'
                  />

                  {/* Path for 45° */}
                  <path
                    id='path45'
                    d={`M ${317.5 - 220} 317.5 a 220 220 0 1 1 ${2 * 220} 0 a 220 220 0 1 1 ${
                      -2 * 220
                    } 0`}
                    fill='none'
                    transform='rotate(45, 317.5, 317.5)'
                  />

                  {/* Path for 135° with slightly reduced radius */}
                  <path
                    id='path135'
                    d={`M ${317.5 - 220} 317.5 a 220 220 0 1 1 ${2 * 220} 0 a 220 220 0 1 1 ${
                      -2 * 220
                    } 0`}
                    fill='none'
                    transform='rotate(135, 317.5, 317.5)'
                  />

                  {/* Path for 225° with slightly reduced radius */}
                  <path
                    id='path225'
                    d={`M ${317.5 - 220} 317.5 a 220 220 0 1 1 ${2 * 220} 0 a 220 220 0 1 1 ${
                      -2 * 220
                    } 0`}
                    fill='none'
                    transform='rotate(225, 317.5, 317.5)'
                  />

                  {/* Path for 315° with slightly reduced radius */}
                  <path
                    id='path315'
                    d={`M ${317.5 - 220} 317.5 a 220 220 0 1 1 ${2 * 220} 0 a 220 220 0 1 1 ${
                      -2 * 220
                    } 0`}
                    fill='none'
                    transform='rotate(315, 317.5, 317.5)'
                  />

                  {/* Texts along each path */}
                  <text
                    fill='#035e46'
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#path45' startOffset='50%'>
                      Ontwikkeling
                    </textPath>
                  </text>

                  <text
                    fill='#035e46'
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#path135' startOffset='50%'>
                      Doorwerking
                    </textPath>
                  </text>

                  <text
                    fill='#035e46'
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#path225' startOffset='50%'>
                      Uitvoering
                    </textPath>
                  </text>

                  <text
                    fill='#035e46'
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#path315' startOffset='50%'>
                      Terugkoppeling
                    </textPath>
                  </text>

                  {/* Outer Circle */}
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius1}
                    stroke='#F6F6F6'
                    strokeWidth='40'
                    fill='none'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius1}
                    stroke='#E6FBF3'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius1}
                    stroke='#F6FEFB'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity2, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius1}
                    stroke='#D1F9EB'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={circumference1}
                    strokeDashoffset={offsetOuter}
                    transform={`rotate(${rotation1} 317.5 317.5)`}
                    strokeLinecap='round'
                  />
                  {/* Path for the text, with radius reduced to move text inward */}
                  <path
                    id='textPathCircle'
                    d={`
                M ${317.5 - (radius1 - 20)} 317.5
                a ${radius1 - 20} ${radius1 - 20} 0 1 1 ${2 * (radius1 - 12)} 0
                a ${radius1 - 20} ${radius1 - 20} 0 1 1 ${-2 * (radius1 - 12)} 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-bold uppercase tracking-[0.2rem]'
                    style={{
                      fillOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#textPathCircle' startOffset='50%'>
                      Visie
                    </textPath>
                  </text>

                  {/* Middle Circle */}

                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius2}
                    stroke='#F6F6F6'
                    strokeWidth='40'
                    fill='none'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius2}
                    stroke='#E6FBF3'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius2}
                    stroke='#E6FBF3'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity2, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius2}
                    stroke='#84E9C5'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={circumference2}
                    strokeDashoffset={offsetMiddle}
                    transform={`rotate(${rotation2} 317.5 317.5)`}
                    strokeLinecap='round'
                  />
                  <path
                    id='textPathMiddle'
                    d={`
                M ${317.5 - (radius2 - 20)} 317.5
                a ${radius2 - 20} ${radius2 - 20} 0 1 1 ${2 * (radius2 - 12)} 0
                a ${radius2 - 20} ${radius2 - 20} 0 1 1 ${-2 * (radius2 - 12)} 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#textPathMiddle' startOffset='50%'>
                      Programma&apos;s
                    </textPath>
                  </text>

                  {/* Inner Circle */}
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius3}
                    stroke='#F6F6F6'
                    strokeWidth='40'
                    fill='none'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius3}
                    stroke='#E6FBF3'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius3}
                    stroke='#D3F3E8'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: opacity2, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={radius3}
                    stroke='#25C38B'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={circumference3}
                    strokeDashoffset={offsetInner}
                    transform={`rotate(${rotation3} 317.5 317.5)`}
                    strokeLinecap='round'
                  />
                  <path
                    id='textPathInner'
                    d={`
                M ${317.5 - (radius3 - 20)} 317.5
                a ${radius3 - 20} ${radius3 - 20} 0 1 1 ${2 * (radius3 - 12)} 0
                a ${radius3 - 20} ${radius3 - 20} 0 1 1 ${-2 * (radius3 - 12)} 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                    }}
                  >
                    <textPath href='#textPathInner' startOffset='50%'>
                      Plan
                    </textPath>
                  </text>

                  {/* Outer Tapered Bar */}
                  <path
                    d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                    fill='#84E9C5'
                    transform={`translate(${barPosition1.x}, ${barPosition1.y}) rotate(${
                      barRotation1 + 90
                    }) scale(1, -1)`}
                    style={{
                      opacity: opacity2,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />

                  {/* Middle Tapered Bar */}
                  <path
                    d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                    fill='#25C38B'
                    transform={`translate(${barPosition2.x}, ${barPosition2.y}) rotate(${
                      barRotation2 + 90
                    }) scale(1, -1)`}
                    style={{
                      opacity: opacity2,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />

                  {/* Inner Tapered Bar */}
                  <path
                    d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                    fill='#07B071'
                    transform={`translate(${barPosition3.x}, ${barPosition3.y}) rotate(${
                      barRotation3 + 90
                    }) scale(1, -1)`}
                    style={{
                      opacity: opacity2,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center w-[635px] h-[635px] pb-[300px]'>
            <svg width='450' height='400' viewBox='0 0 450 400' className='overflow-visible'>
              {/* Outer Red Circle (Flat Disc) - stays visible */}
              <ellipse
                cx='225'
                cy='350'
                rx='225' // Radius of outer red circle
                ry='50'
                fill='#7CE1BD'
              />
              {/* Cone Layers */}
              {Array.from({ length: layers }).map((_, i) => {
                const progress = i / (layers - 1); // Calculate progress for each layer
                const layerHeight = 350 - progress * coneHeight; // Adjust layer height
                const layerRx = 185 - progress * 50; // Gradually reduce x-radius for 3D effect
                const layerRy = 38.5 - progress * 10; // Gradually reduce y-radius for depth effect

                // Set the color of the top layer to blue
                const fillColor = i === layers - 1 ? 'gray' : '#7CE1BD';
                return (
                  <ellipse
                    key={i}
                    cx='225'
                    cy={layerHeight}
                    rx={layerRx}
                    ry={layerRy}
                    fill={fillColor}
                    opacity={1} // Full opacity to avoid blurriness
                  />
                );
              })}
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
