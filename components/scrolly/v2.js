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

  const [isVisible, setIsVisible] = useState(false);
  const [isReduced, setIsReduced] = useState(false);

  const [thirdVisible, setThirdVisible] = useState(false);

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
    } else if (scrollPosition > 910 && scrollPosition < 1440) {
      setActiveContent('c3');
    } else if (scrollPosition > 1440 && scrollPosition < 1995) {
      setActiveContent('c4');
    } else if (scrollPosition > 1995 && scrollPosition < 2630) {
      setActiveContent('c5');
    } else if (scrollPosition > 2630 && scrollPosition < 3450) {
      setActiveContent('c6');
    } else if (scrollPosition > 3450 && scrollPosition < 4000) {
      setActiveContent('c7');
    }

    if (scrollPosition > 3850 && scrollPosition <= 4600) {
      setAnimationStage(1);

      if (scrollPosition > 4000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollPosition > 4400) {
        setThirdVisible(true);
      } else {
        setThirdVisible(false);
      }

      if (scrollPosition > 4400) {
        setIsReduced(true);
      } else {
        setIsReduced(false);
      }
    } else if (scrollPosition > 4600) {
      setAnimationStage(2);
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
  const scrollEndOuter = 3850; // End point for the outer circle
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
  const rotation1 = 50;
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
  const opacity2 = Math.min(Math.max((scrollPosition - 650) / 200, 0), 1);

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
                    fill={activeContent === 'c3' ? '#07B071' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords,
                      transition:
                        'fill-opacity 0.2s ease-in-out, filter 0.3s ease-in-out, fill 0.3s ease-in-out', // Smooth transition for opacity, color, and filter
                      filter:
                        activeContent === 'c3'
                          ? 'drop-shadow(0px 0px 10px #84E9C5) drop-shadow(0px 0px 10px #84E9C5)'
                          : 'none', // Enhanced glow effect with a matching bright color
                    }}
                  >
                    <textPath href='#path45' startOffset='50%'>
                      Ontwikkeling
                    </textPath>
                  </text>

                  <text
                    fill={activeContent === 'c4' ? '#07B071' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords,
                      transition:
                        'fill-opacity 0.2s ease-in-out, filter 0.3s ease-in-out, fill 0.3s ease-in-out', // Smooth transition for opacity, color, and filter
                      filter:
                        activeContent === 'c4'
                          ? 'drop-shadow(0px 0px 10px #84E9C5) drop-shadow(0px 0px 10px #84E9C5)'
                          : 'none', // Enhanced glow effect with a matching bright color
                    }}
                  >
                    <textPath href='#path135' startOffset='50%'>
                      Doorwerking
                    </textPath>
                  </text>
                  <text
                    fill={activeContent === 'c5' ? '#07B071' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords,
                      transition:
                        'fill-opacity 0.2s ease-in-out, filter 0.3s ease-in-out, fill 0.3s ease-in-out', // Smooth transition for opacity, color, and filter
                      filter:
                        activeContent === 'c5'
                          ? 'drop-shadow(0px 0px 10px #84E9C5) drop-shadow(0px 0px 10px #84E9C5)'
                          : 'none', // Enhanced glow effect with a matching bright color
                    }}
                  >
                    <textPath href='#path225' startOffset='50%'>
                      Uitvoering
                    </textPath>
                  </text>
                  <text
                    fill={activeContent === 'c6' ? '#07B071' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: opacityOuterWords,
                      transition:
                        'fill-opacity 0.2s ease-in-out, filter 0.3s ease-in-out, fill 0.3s ease-in-out', // Smooth transition for opacity, color, and filter
                      filter:
                        activeContent === 'c6'
                          ? 'drop-shadow(0px 0px 10px #84E9C5) drop-shadow(0px 0px 10px #84E9C5)'
                          : 'none', // Enhanced glow effect with a matching bright color
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
        ) 
        :
        animationStage === 1 ?
        (
          <div className='flex justify-center items-center w-[635px] h-[635px] pb-[100px]'>
            <div
              style={{
                position: 'fixed',
                bottom: thirdVisible ? '60%' : '-400px', // Start from bottom, move to middle
                transition: 'bottom 0.5s ease',
              }}
            >
              <svg
                width='146'
                height='87'
                viewBox='0 0 146 87'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 85.0819L18 19C60.6945 21.9505 81.6466 22.0014 125.5 19L146 84.3988C146 84.3988 101.567 86.8681 72.7712 86.9945C44.2454 87.1196 0 85.0819 0 85.0819Z'
                  fill='#25C38B'
                />
                <ellipse cx='72' cy='16' rx='54' ry='16' fill='#25C38B' />
              </svg>
            </div>
            <div
              style={{
                position: 'fixed',
                bottom: isVisible ? '45%' : '-400px', // Start from bottom, move to middle
                transition: 'bottom 0.5s ease',
              }}
            >
              {isReduced ? (
                <svg
                  width='272'
                  height='102'
                  viewBox='0 0 272 102'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M212.522 11.6115C206.028 12.1923 195.355 13.0986 183.245 13.9357L178.893 99.9201C191.562 98.9724 204.732 97.7977 217.042 96.608L212.522 11.6115ZM223.014 96.0234C250.314 93.317 272 90.7131 272 90.7131L219.138 11C219.138 11 218.917 11.0215 218.495 11.0618L223.014 96.0234ZM141.002 15.933C152.383 15.754 165.257 15.107 177.222 14.3377L172.869 100.356C161.257 101.166 150.268 101.749 141.002 101.936V15.933ZM135.002 15.9821C127.985 15.9813 120.154 15.7558 112.172 15.4012L90.2185 99.8194C106.934 101.104 122.91 101.998 135.002 102V15.9821ZM77.5788 13.2645C86.237 13.921 96.1973 14.5987 106.18 15.1132L84.2738 99.3491C71.692 98.3262 58.9041 97.1189 47.2188 95.9362L77.5788 13.2645ZM71.6165 12.8003C59.3802 11.8232 50.9399 11 50.9399 11L0 90.7131C0 90.7131 17.7544 92.8894 41.3084 95.3308L71.6165 12.8003Z'
                    fill='#84E9C5'
                  />
                  <ellipse cx='135.5' cy='12.5' rx='85.5' ry='12.5' fill='#84E9C5' />
                </svg>
              ) : (
                <svg
                  width='272'
                  height='170'
                  viewBox='0 0 272 170'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M212.522 13.0617C206.028 14.0701 195.356 15.6437 183.245 17.0972L178.893 166.389C191.562 164.743 204.732 162.704 217.042 160.638L212.522 13.0617ZM223.014 159.623C250.314 154.924 272 150.403 272 150.403L219.138 12C219.138 12 218.917 12.0374 218.495 12.1072L223.014 159.623ZM141.002 20.5649C152.383 20.2542 165.257 19.1308 177.222 17.7951L172.869 167.145C161.257 168.551 150.268 169.565 141.002 169.889V20.5649ZM135.002 20.6502C127.985 20.6488 120.154 20.2573 112.171 19.6416L90.2183 166.214C106.934 168.444 122.91 169.997 135.002 170V20.6502ZM77.5788 15.9318C86.237 17.0717 96.1972 18.2484 106.179 19.1415L84.2737 165.397C71.6919 163.621 58.904 161.525 47.2189 159.472L77.5788 15.9318ZM71.6166 15.1258C59.3802 13.4292 50.9399 12 50.9399 12L0 150.403C0 150.403 17.7545 154.182 41.3085 158.42L71.6166 15.1258Z'
                    fill='#84E9C5'
                  />
                  <ellipse cx='135' cy='12.5' rx='84' ry='12.5' fill='#7EDEBC' />
                </svg>
              )}
            </div>
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
        )
      :
      (
        <div className='flex justify-center items-center w-[635px] h-[635px] pb-[100px]'>
          <svg width="423" height="310" viewBox="0 0 423 310" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="211.5" cy="271" rx="211.5" ry="38.5" fill="#D0FDED"/>
<path d="M401 275.236L369 173C335 186.395 266.5 187.761 214.5 187.761C162.5 187.761 99 183.934 60 176.827L19 275.236C19 275.236 139.712 289.76 214.5 289.997C291.59 290.241 401 275.236 401 275.236Z" fill="#D1F9EB"/>
<ellipse cx="213.5" cy="173" rx="153.5" ry="30" fill="#7CE1BD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M290.522 105.612C284.028 106.192 273.355 107.099 261.245 107.936L256.893 193.92C269.562 192.972 282.732 191.798 295.042 190.608L290.522 105.612ZM301.014 190.023C328.314 187.317 350 184.713 350 184.713L297.138 105C297.138 105 296.917 105.022 296.495 105.062L301.014 190.023ZM219.002 109.933C230.383 109.754 243.257 109.107 255.222 108.338L250.869 194.356C239.257 195.166 228.268 195.749 219.002 195.936V109.933ZM213.002 109.982C205.985 109.981 198.154 109.756 190.172 109.401L168.218 193.819C184.934 195.104 200.91 195.998 213.002 196V109.982ZM155.579 107.264C164.237 107.921 174.197 108.599 184.18 109.113L162.274 193.349C149.692 192.326 136.904 191.119 125.219 189.936L155.579 107.264ZM149.617 106.8C137.38 105.823 128.94 105 128.94 105L78 184.713C78 184.713 95.7544 186.889 119.308 189.331L149.617 106.8Z" fill="#84E9C5"/>
<ellipse cx="215.5" cy="105.5" rx="85.5" ry="12.5" fill="#15B67D"/>
<path d="M143 104.49L161 18C203.695 21.8617 224.647 21.9283 268.5 18L289 103.596C289 103.596 244.567 106.827 215.771 106.993C187.245 107.157 143 104.49 143 104.49Z" fill="#25C38B"/>
<ellipse cx="215" cy="16" rx="54" ry="16" fill="#0CA56F"/>
</svg>

          </div>
      )
      }
      </div>
    </>
  );
}
