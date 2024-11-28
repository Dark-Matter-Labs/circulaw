'use client';
import { useState, useEffect, useRef } from 'react';
import { animated } from '@react-spring/web';
import ContentZero from './content/00-content';
import ContentOne from './content/01-content';
import ContentTwo from './content/02-content';
import ContentThree from './content/03-content';
import ContentFour from './content/04-content';
import ContentFive from './content/05-content';
import ContentSix from './content/06-content';
import ContentSeven from './content/07-content';
import ContentEight from './content/08-content';
import ContentNine from './content/09-content';
import ContentTen from './content/10-content';
import ContentEleven from './content/11-content';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function ScrollyTellingAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [activeContent, setActiveContent] = useState('c1');
  const [animationStage, setAnimationStage] = useState(0);
  const [screenHeight, setScreenHeight] = useState();

  const navItems = [
    { id: 0, label: 'Circulair bouwen meer effect met mix van instrumenten', scrollTo: 1 },
    { id: 1, label: 'De plaats van instrumenten in de beleidscyclus', scrollTo: 1411 },
    { id: 2, label: 'Samenhang tussen omgevingsvisie, -programma en -plan', scrollTo: 5501 },
    { id: 3, label: 'Modelteksten voor een omgevingsplan', scrollTo: 11301 },
  ];

  // Define scroll thresholds for navigation and content
  const scrollThresholds = {
    nav: [
      { start: 0, end: 1410, value: 0 },
      { start: 1410, end: 5500, value: 1 },
      { start: 5500, end: 11300, value: 2 },
      { start: 11300, end: 15300, value: 3 },
    ],
    content: [
      // first svg
      // nav 1
      { start: 0, end: 380, value: 'c0' },
      { start: 380, end: 955, value: 'c1' }, // 1,1
      { start: 955, end: 1410, value: 'c2' }, // 1,2
      // nav 2
      { start: 1410, end: 1940, value: 'c3' }, // 2.1
      { start: 1940, end: 2495, value: 'c4' }, // 2.2
      { start: 2495, end: 3130, value: 'c5' }, // 2.3
      { start: 3130, end: 5500, value: 'c6' }, // can add more time as there is a long scroll from c5 to c6
      // second svg
      // nav 3
      { start: 5500, end: 7000, value: 'c7' },
      { start: 7000, end: 8800, value: 'c8' },
      { start: 8800, end: 10300, value: 'c9' },
      { start: 10300, end: 11300, value: 'c10' },
      // nav 4
      { start: 11300, end: 15300, value: 'c11' },
    ],
  };

  const contentComponents = [
    ContentZero,
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
    ContentFive,
    ContentSix,
    ContentSeven,
    ContentEight,
    ContentNine,
    ContentTen,
    ContentEleven,
  ];

  const contentRefs = {
    c0: useRef(),
    c1: useRef(),
    c2: useRef(),
    c3: useRef(),
    c4: useRef(),
    c5: useRef(),
    c6: useRef(),
    c7: useRef(),
    c8: useRef(),
    c9: useRef(),
    c10: useRef(),
    c11: useRef(),
    c12: useRef(),
  };

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Set activeNav
      const activeNavValue = scrollThresholds.nav.find(
        (range) => position >= range.start && position < range.end,
      )?.value;
      setActiveNav(activeNavValue ?? 0);

      // Set activeContent
      const activeContentValue = scrollThresholds.content.find(
        (range) => position >= range.start && position < range.end,
      )?.value;
      setActiveContent(activeContentValue ?? 'c0');

      // Set animationStage
      setAnimationStage(position > 5500 ? 1 : 0);
    };

    // Handle resize event

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenHeight(window.innerHeight);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollThresholds.content, scrollThresholds.nav, screenHeight]);

  // First SVG
  // Radii and circumferences for circles
  const outerCircleRadius = 185;
  const outerCircleCircumference = 2 * Math.PI * outerCircleRadius;
  const middleCircleRadius = 135;
  const middleCircleCircumference = 2 * Math.PI * middleCircleRadius;
  const innerCircleRadius = 85;
  const innerCircleCircumference = 2 * Math.PI * innerCircleRadius;

  // Define unique scroll ranges for each circle being drawn
  const scrollStartOuter = 1420; // Start point for the outer circle
  const scrollEndOuter = 3850; // End point for the outer circle
  const scrollStartMiddle = 1860; // Start point for the middle circle
  const scrollEndMiddle = 4350 + 235; // End point for the middle circle
  const scrollStartInner = 2495; // Start point for the inner circle
  const scrollEndInner = 4350 + 1000; // End point for the inner circle

  // Function to calculate progress based on custom start and end points
  const calculateCircleDrawProgress = (scrollPosition, start, end) => {
    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return 1;
    return (scrollPosition - start) / (end - start);
  };

  // Calculate the progress of each circle being drawn
  const outerCircleDrawProgress = calculateCircleDrawProgress(
    scrollPosition,
    scrollStartOuter,
    scrollEndOuter,
  );
  const middleCircleDrawProgress = calculateCircleDrawProgress(
    scrollPosition,
    scrollStartMiddle,
    scrollEndMiddle,
  );
  const innerCircleDrawProgress = calculateCircleDrawProgress(
    scrollPosition,
    scrollStartInner,
    scrollEndInner,
  );

  // Function to calculate stroke offset for drawing the circle
  const calculateStrokeOffset = (progress, circumference) => {
    return circumference * (1 - progress);
  };

  // Calculate stroke offsets for each circle based on progress
  const outerCircleDrawOffset = calculateStrokeOffset(
    outerCircleDrawProgress,
    outerCircleCircumference,
  );
  const middleCircleDrawOffset = calculateStrokeOffset(
    middleCircleDrawProgress,
    middleCircleCircumference,
  );
  const innerCircleDrawOffset = calculateStrokeOffset(
    innerCircleDrawProgress,
    innerCircleCircumference,
  );

  // Starting rotations for each circle to achieve specific starting points on the circumference
  const outerCircleRotation = 20;
  const middleCircleRotation = 90;
  const innerCircleRotation = 175;

  // Calculate the angle shift to move each bar 17 pixels backward along the circumference
  const outerCircleAngleShift = (22 / outerCircleCircumference) * 360;
  const middleCircleAngleShift = (22 / middleCircleCircumference) * 360;
  const innerCircleAngleShift = (22 / innerCircleCircumference) * 360;

  // Adjusted starting angles for each bar
  const outerCircleBarRotation = outerCircleRotation - outerCircleAngleShift;
  const middleCircleBarRotation = middleCircleRotation - middleCircleAngleShift;
  const innerCircleBarRotation = innerCircleRotation - innerCircleAngleShift;

  // Calculate the position for each bar, moving it slightly inward to align the thicker edge with the circumference
  const barOffset = 24; // Adjust this value to control how far the bar sits from the circle edge
  const outerCircleBarPosition = {
    x: 317.5 + (outerCircleRadius - barOffset) * Math.cos((outerCircleBarRotation * Math.PI) / 180),
    y: 317.5 + (outerCircleRadius - barOffset) * Math.sin((outerCircleBarRotation * Math.PI) / 180),
  };
  const middleCircleBarPosition = {
    x:
      317.5 +
      (middleCircleRadius - barOffset) * Math.cos((middleCircleBarRotation * Math.PI) / 180),
    y:
      317.5 +
      (middleCircleRadius - barOffset) * Math.sin((middleCircleBarRotation * Math.PI) / 180),
  };
  const innerCircleBarPosition = {
    x: 317.5 + (innerCircleRadius - barOffset) * Math.cos((innerCircleBarRotation * Math.PI) / 180),
    y: 317.5 + (innerCircleRadius - barOffset) * Math.sin((innerCircleBarRotation * Math.PI) / 180),
  };

  const circleOneOpacity = scrollPosition < 655 ? 0 : Math.min((scrollPosition - 655) / 500, 1);
  const circleTwoOpacity = Math.min(Math.max((scrollPosition - 900) / 300, 0), 1);
  console.log(scrollPosition);

  // Define thresholds for the scroll position to control when the transition happens
  const startSVGTransition = 5100; // start the transition
  const endSVGTransition = 5550; // complete the transition

  const SVGfadeStart = startSVGTransition + 100; // Start fading out 100px after startSVGTransition
  const SFGfadeEnd = endSVGTransition + 200; // Finish fading out 100px after endSVGTransition

  // Calculate the interpolation value
  const maxCircleRotation = 75;

  // Calculate the interpolation value
  const SVGTransitionProgress = Math.min(
    Math.max((scrollPosition - startSVGTransition) / (endSVGTransition - startSVGTransition), 0),
    1,
  );

  // Use the maxCircleRotation angle instead of 90 in the transform
  const transformSVGStyle = {
    transform: `rotateX(${SVGTransitionProgress * maxCircleRotation}deg) scale(${
      1 + SVGTransitionProgress * 0.2
    })`,
    transition: 'transform 0.1s ease-out',
  };

  const svgOpacity =
    scrollPosition < SVGfadeStart
      ? 1
      : scrollPosition > SFGfadeEnd
      ? 0
      : 1 - (scrollPosition - SVGfadeStart) / (SFGfadeEnd - SVGfadeStart);

  const fadeInSVGTwoStart = endSVGTransition; // Start fading in 100px after endSVGTransition
  const fadeInSVGTwoEnd = fadeInSVGTwoStart + 200;

  const secondSvgOpacity =
    scrollPosition < fadeInSVGTwoStart
      ? 0
      : scrollPosition > fadeInSVGTwoEnd
      ? 1
      : (scrollPosition - fadeInSVGTwoStart) / (fadeInSVGTwoEnd - fadeInSVGTwoStart);

  const secondConeStart = 7300;

  // Define growth parameters
  const maxConeHeight = 300; // Maximum height of the cone is now 190px

  const layersConeOneAndThree = 100; // Number of ellipse layers for smoother transition
  const layersConeTwo = 180;
  const coneHeight = Math.min((scrollPosition - 5500) / 5, maxConeHeight);
  const coneHeight2 = Math.min((scrollPosition - 7300) / 5, maxConeHeight);
  const coneHeight3 = Math.min((scrollPosition - 9000) / 5, maxConeHeight);

  // Set the scroll positions and max offset
  const maxCYOffset = 350; // Maximum offset to add to `cy`

  const coneOneVerticalShiftStart = 7000; // Replace with the desired start scroll position
  const coneOneVerticalShiftEnd = 7400; // Replace with the desired end scroll position

  const coneTwoVerticalShiftStart = 8800; // Replace with the desired start scroll position
  const coneTwoVerticalShiftEnd = 9000; // Replace with the desired end scroll position

  const mergeConesStart = 10300;
  const mergeConesFinish = 11300;

  function calculateCY(scrollPosition, start, end, maxOffset) {
    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return maxOffset;

    // Calculate the progress based on scroll position between start and end
    const CYprogress = (scrollPosition - start) / (end - start);

    // Return the calculated offset for the `cy` value
    return CYprogress * maxOffset;
  }

  // move first cone down
  const cyOffset = calculateCY(
    scrollPosition,
    coneOneVerticalShiftStart,
    coneOneVerticalShiftEnd,
    maxCYOffset,
  );

  // move second cone down
  const cyOffset2 = calculateCY(
    scrollPosition,
    coneTwoVerticalShiftStart,
    coneTwoVerticalShiftEnd,
    maxCYOffset,
  );

  // move top cone down and bottom cone up
  const cyOffset3 = calculateCY(scrollPosition, mergeConesStart, mergeConesFinish, maxCYOffset);
  // move coneLabelOne down
  const coneLabelOneOffset = calculateCY(
    scrollPosition,
    coneOneVerticalShiftStart,
    coneOneVerticalShiftEnd,
    100,
  );

  const coneLabelTwoOffset = calculateCY(
    scrollPosition,
    coneTwoVerticalShiftStart,
    coneTwoVerticalShiftEnd,
    100,
  );

  const topAndBottomConeOffset = calculateCY(scrollPosition, mergeConesStart, mergeConesFinish, 80);

  return (
    <>
      <div className='sticky top-32 w-full max-w-[1312px]'>
        <div className='w-full flex items-center justify-start mb-12'>
          <div className='rounded-clSm bg-green-5 border border-green-600 px-2 text-green-600 py-1 flex flex-row items-center justify-center'>
            <Link className='inline-flex flex-row items-center justify-center h-full' href='/'>
              <span className='p-2xs-bold hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
            <Link
              className='ml-3 inline-flex flex-row items-center justify-center h-full'
              href='/bouw'
            >
              <span className='p-2xs-bold align-middle hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                {' '}
                Bouw <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>
        </div>
        <div className='flex items-start justify-start w-full'>
          <div className='w-48 h-full relative mr-6'>
            <div className='sticky h-[700px] grow flex flex-col gap-y-6 w-full'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`${
                    activeNav >= item.id
                      ? 'translate-y-0'
                      : screenHeight < 934
                      ? 'translate-y-[150px]'
                      : 'translate-y-[280px]'
                  } transition-all duration-400 flex flex-row text-green-600 text-left`}
                  id={`nav${item.id + 1}`}
                  onClick={() =>
                    window.scrollTo({
                      top: item.scrollTo,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }
                >
                  <div
                    className={`${
                      activeNav === item.id ? 'p-3xs-semibold' : 'p-3xs'
                    } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
                  >
                    {item.id + 1}
                  </div>
                  <p
                    className={`${
                      activeNav === item.id ? 'p-2xs-semibold' : 'p-2xs'
                    } ml-2 max-w-[120px]`}
                  >
                    {item.label}
                  </p>
                </button>
              ))}
              {scrollPosition < 11300 && (
                <Link
                  href='/bouw/planregels/modelteksten'
                  className={`${
                    screenHeight < 934 ? 'bottom-52' : 'bottom-[110px]'
                  } flex flex-row items-center justify-center text-green-600 hover:text-green-300 p-2xs-semibold absolute left-0`}
                >
                  Bekijk modelteksten <IconArrowRight className='h-4 w-4 ml-1' />
                </Link>
              )}
            </div>
          </div>

          <div className='relative w-[300px] h-full mr-6'>
            {contentComponents.map((Content, index) => {
              const contentId = `c${index}`; // Generate IDs like c1, c2, ...
              const isActive = activeContent === contentId;
              const prevActive = activeContent === `c${index - 1}`;
              const nextActive = activeContent === `c${index + 1}`;
              return (
                <div
                  key={contentId}
                  ref={contentRefs[contentId]}
                  data-id={contentId}
                  className={`${
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : prevActive
                      ? 'opacity-0 translate-y-[200px]'
                      : nextActive
                      ? 'opacity-0 -translate-y-[200px]'
                      : 'opacity-0 -translate-y-[200px]'
                  } transition-all duration-500 absolute top-0 left-0`}
                >
                  <Content scrollPosition={scrollPosition} screenHeight={screenHeight} />
                </div>
              );
            })}
          </div>
          <div
            className={`${
              screenHeight < 934 ? '-mt-12' : ''
            } flex items-center justify-center w-[600px] h-[635px] -ml-4`}
            style={{ perspective: '1000px' }}
          >
            <div className=' h-full w-full' style={transformSVGStyle}>
              <div className='w-full h-full flex items-center justify-center'>
                <animated.svg
                  className='svg'
                  height='635'
                  width='635'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ opacity: svgOpacity, transition: 'opacity 0.2s ease-out' }}
                >
                  {/* Outer Outer Circle */}
                  <animated.circle
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
                    fill={activeContent === 'c3' ? '#028352' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-semibold uppercase tracking-[0.2rem]'
                    style={{
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
                    fill={activeContent === 'c4' ? '#028352' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-semibold uppercase tracking-[0.2rem]'
                    style={{
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
                    fill={activeContent === 'c5' ? '#028352' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-semibold uppercase tracking-[0.2rem]'
                    style={{
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
                    fill={activeContent === 'c6' ? '#028352' : '#035e46'} // Bright green for active content
                    textAnchor='middle'
                    className='p-2xs-semibold uppercase tracking-[0.2rem]'
                    style={{
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

                  <animated.circle
                    cx='317.5'
                    cy='317.5'
                    r={outerCircleRadius}
                    stroke='#FDFDFD'
                    strokeWidth='40'
                    fill='none'
                  />

                  <animated.circle
                    cx='317.5'
                    cy='317.5'
                    r={outerCircleRadius}
                    stroke='#F6FEFB'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <animated.circle
                    cx='317.5'
                    cy='317.5'
                    r={outerCircleRadius}
                    stroke='#D1F9EB'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={outerCircleCircumference}
                    strokeDashoffset={outerCircleDrawOffset}
                    transform={`rotate(${outerCircleRotation} 317.5 317.5)`}
                    strokeLinecap='round'
                  />

                  {/* Path for the text, with radius reduced to move text inward */}
                  <path
                    id='textPathCircle'
                    d={`
                M ${317.5 - (outerCircleRadius - 20)} 317.5
                a ${outerCircleRadius - 20} ${outerCircleRadius - 20} 0 1 1 ${
                      2 * (outerCircleRadius - 12)
                    } 0
                a ${outerCircleRadius - 20} ${outerCircleRadius - 20} 0 1 1 ${
                      -2 * (outerCircleRadius - 12)
                    } 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-extrabold uppercase tracking-[0.2rem]'
                    style={{
                      fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
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
                    r={middleCircleRadius}
                    stroke='#FDFDFD'
                    strokeWidth='40'
                    fill='none'
                  />

                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={middleCircleRadius}
                    stroke='#E6FBF3'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={middleCircleRadius}
                    stroke='#84E9C5'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={middleCircleCircumference}
                    strokeDashoffset={middleCircleDrawOffset}
                    transform={`rotate(${middleCircleRotation} 317.5 317.5)`}
                    strokeLinecap='round'
                  />
                  <path
                    id='textPathMiddle'
                    d={`
                M ${317.5 - (middleCircleRadius - 20)} 317.5
                a ${middleCircleRadius - 20} ${middleCircleRadius - 20} 0 1 1 ${
                      2 * (middleCircleRadius - 12)
                    } 0
                a ${middleCircleRadius - 20} ${middleCircleRadius - 20} 0 1 1 ${
                      -2 * (middleCircleRadius - 12)
                    } 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-extrabold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
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
                    r={innerCircleRadius}
                    stroke='#FDFDFD'
                    strokeWidth='40'
                    fill='none'
                  />

                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={innerCircleRadius}
                    stroke='#D3F3E8'
                    strokeWidth='40'
                    fill='none'
                    style={{
                      strokeOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
                    }}
                    className='duration-200 ease-in-out'
                  />
                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={innerCircleRadius}
                    stroke='#25C38B'
                    strokeWidth='40'
                    fill='none'
                    strokeDasharray={innerCircleCircumference}
                    strokeDashoffset={innerCircleDrawOffset}
                    transform={`rotate(${innerCircleRotation} 317.5 317.5)`}
                    strokeLinecap='round'
                  />

                  <path
                    id='textPathInner'
                    d={`
                M ${317.5 - (innerCircleRadius - 20)} 317.5
                a ${innerCircleRadius - 20} ${innerCircleRadius - 20} 0 1 1 ${
                      2 * (innerCircleRadius - 12)
                    } 0
                a ${innerCircleRadius - 20} ${innerCircleRadius - 20} 0 1 1 ${
                      -2 * (innerCircleRadius - 12)
                    } 0
              `}
                    fill='none'
                  />
                  {/* Text along the path */}
                  <text
                    textAnchor='middle'
                    fill='#035e46'
                    className='p-2xs-extrabold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                    style={{
                      fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                      transition: 'stroke-opacity 0.4s ease-in-out', // Smooth transition
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
                    transform={`translate(${outerCircleBarPosition.x}, ${
                      outerCircleBarPosition.y
                    }) rotate(${outerCircleBarRotation + 90}) scale(1, -1)`}
                    style={{
                      opacity: circleTwoOpacity,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />

                  {/* Middle Tapered Bar */}
                  <path
                    d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                    fill='#25C38B'
                    transform={`translate(${middleCircleBarPosition.x}, ${
                      middleCircleBarPosition.y
                    }) rotate(${middleCircleBarRotation + 90}) scale(1, -1)`}
                    style={{
                      opacity: circleTwoOpacity,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />

                  {/* Inner Tapered Bar */}
                  <path
                    d='M21.9607 34.9614C22.8069 41.7146 18.009 47.9518 11.2032 47.9976V47.9976C4.39739 48.0434 -0.483942 41.8713 0.271307 35.1074L3.37455 7.31502C3.78967 3.59723 7.14572 0.96199 10.8865 0.936819V0.936819C14.6273 0.911649 18.0185 3.50149 18.4837 7.21335L21.9607 34.9614Z'
                    fill='#07B071'
                    transform={`translate(${innerCircleBarPosition.x}, ${
                      innerCircleBarPosition.y
                    }) rotate(${innerCircleBarRotation + 90}) scale(1, -1)`}
                    style={{
                      opacity: circleTwoOpacity,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    className='duration-200 ease-in-out'
                  />

                  <circle
                    cx='317.5'
                    cy='317.5'
                    r={outerCircleRadius - 10}
                    stroke='#F8FBF8'
                    fill='#F8FBF8'
                    strokeWidth='40'
                    style={{
                      opacity: Math.max(1 - scrollPosition / 300, 0), // Calculate opacity dynamically
                      transition: 'opacity 0.1s ease-out', // Smooth transition
                    }}
                  />
                </animated.svg>
              </div>
            </div>
            {animationStage === 1 && (
              <animated.svg
                viewBox='0 0 635 635'
                className='overflow-hidden absolute'
                style={{ opacity: secondSvgOpacity, transition: 'opacity 0.2s ease-out' }}
              >
                {cyOffset3 === 0 && (
                  <circle
                    cx='317.5'
                    cy={317.5 + cyOffset + cyOffset2}
                    r='205'
                    fill='none'
                    stroke='#D1F9EB'
                    strokeWidth={40}
                    transformOrigin='317.5 340'
                    transform='scale(1.12, 0.3)'
                  />
                )}

                {/* First Cone Layers */}
                {Array.from({ length: layersConeOneAndThree }).map((_, i) => {
                  const progress = i / (layersConeOneAndThree - 1);
                  const layerHeight = 317.5 - progress * coneHeight;
                  const layerRadius = 205 - progress * 50;
                  const fillColor = i === layersConeOneAndThree - 1 ? '#B4F1DC' : '#D1F9EB';

                  return (
                    <animated.circle
                      key={i}
                      cx='317.5'
                      cy={layerHeight + cyOffset + cyOffset2 - cyOffset3 + 22} // this seems odd to just add more here.
                      r={layerRadius}
                      stroke={fillColor}
                      strokeWidth={40}
                      fill='none'
                      opacity={1}
                      transformOrigin='317.5 335'
                      transform='scale(1.12, 0.3)'
                    />
                  );
                })}

                {scrollPosition > 7000 && (
                  <animated.circle
                    cx='317.5'
                    cy={37.5 + cyOffset2}
                    r='155'
                    fill='none'
                    stroke='#7CE1BD'
                    strokeWidth={40}
                    transformOrigin='317.5 340'
                    transform='scale(1.12, 0.3)'
                  />
                )}

                {secondConeStart < scrollPosition && (
                  <>
                    {/* Dashed Circles for the Second Cone with Alternating Colors */}
                    {Array.from({ length: layersConeTwo - 1 }).map((_, i) => {
                      const progress2 = i / (layersConeTwo - 1);
                      const layerHeight = 236 - progress2 * coneHeight2;
                      const layerRadius = 155 - progress2 * 50;
                      // Calculate circumference and dash length/gap
                      const circumference = 2 * Math.PI * layerRadius;
                      const dashLength = (circumference * 0.75) / 6;
                      const gapLength = circumference / 25;
                      return (
                        <>
                          <animated.circle
                            key={`dashed-blue-${i}`}
                            cx='317.5'
                            cy={layerHeight + cyOffset2}
                            r={layerRadius}
                            fill='#D1F9EB' // can change this to white for a different look.
                            stroke='#7CE1BD'
                            strokeWidth={40}
                            strokeDasharray={`${dashLength}, ${gapLength}`}
                            strokeDashoffset={dashLength + gapLength} // Offset to alternate colors
                            opacity={1}
                            transformOrigin='317.5 254'
                            transform='scale(1.12, 0.3)'
                          />
                        </>
                      );
                    })}
                    {scrollPosition > 8800 && (
                      <>
                        {cyOffset3 === 0 && (
                          <animated.circle
                            cx='317.5'
                            cy={-264}
                            r='105'
                            fill='none'
                            stroke='#25C38B'
                            strokeWidth={40}
                            transformOrigin='317.5 340'
                            transform='scale(1.12, 0.3)'
                          />
                        )}
                        {scrollPosition > 9000 && (
                          <>
                            {Array.from({ length: layersConeOneAndThree }).map((_, i) => {
                              const progress3 = i / (layersConeOneAndThree - 1);
                              const layerHeight = -254 - progress3 * coneHeight3;
                              const layerRadius = 105 - progress3 * 50;

                              // Interpolate color based on scroll position
                              const colorProgress = Math.min(
                                Math.max((scrollPosition - 11400) / 300, 0),
                                1,
                              );
                              // const startColor = '#07B071'; // Starting color at 11000
                              const endColor = '#035E46'; // Ending color at 11300

                              // Linear interpolation between two colors
                              const interpolateColor = (start, end, progress) => {
                                const startRGB = start.match(/\w\w/g).map((x) => parseInt(x, 16));
                                const endRGB = end.match(/\w\w/g).map((x) => parseInt(x, 16));
                                const resultRGB = startRGB.map((start, idx) =>
                                  Math.round(start + (endRGB[idx] - start) * progress),
                                );
                                return `#${resultRGB
                                  .map((x) => x.toString(16).padStart(2, '0'))
                                  .join('')}`;
                              };

                              const fillColor =
                                i === layersConeOneAndThree - 1
                                  ? interpolateColor('#07B071', endColor, colorProgress)
                                  : interpolateColor('#25C38B', endColor, colorProgress);

                              return (
                                <animated.circle
                                  key={i}
                                  cx='317.5'
                                  cy={layerHeight + cyOffset3}
                                  r={layerRadius}
                                  stroke={fillColor}
                                  strokeWidth={40}
                                  fill='none'
                                  opacity={1}
                                  transformOrigin='317.5 335'
                                  transform='scale(1.12, 0.3)'
                                />
                              );
                            })}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </animated.svg>
            )}
          </div>
          <div className='w-[216px] h-full'>
            <div
              style={{
                transform: `translateY(${
                  coneLabelOneOffset + coneLabelTwoOffset - topAndBottomConeOffset
                }px)`,
              }}
              className={`${
                scrollPosition > 5500 ? 'opacity-100' : 'opacity-0'
              } w-[216px] absolute ${
                screenHeight < 934 ? 'bottom-[426px]' : 'bottom-[378px]'
              } flex items-center justify-start transition-opacity duration-500`}
            >
              <div className='min-w-[2.5px] rounded-full h-[58px] mr-4 bg-green-600'></div>
              <div>
                <h3 className='p-xs-semibold text-green-600'>Omgevingsvisie</h3>
                <p className='p-xs text-green-600'>Langetermijnvisie voor fysieke leefomgeving</p>
              </div>
            </div>
            <div
              style={{
                transform: `translateY(${coneLabelTwoOffset}px)`,
              }}
              id='coneTwoLabel'
              className={`${
                scrollPosition > 7300 ? 'opacity-100' : 'opacity-0'
              } w-[216px] absolute ${
                screenHeight < 934 ? 'bottom-[498px]' : 'bottom-[450px]'
              } flex items-center justify-start transition-opacity duration-500`}
            >
              <div className='min-w-[2.5px] rounded-full h-[80px] mr-4 bg-green-600'></div>
              <div>
                <h3 className='p-xs-semibold text-green-600'>Omgevingsprogramma&apos;s</h3>
                <p className='p-xs text-green-600'>
                  Uitwerking beleidsdoelen voor korte-/middellange termijn
                </p>
              </div>
            </div>
            <div
              style={{
                transform: `translateY(${topAndBottomConeOffset}px)`,
              }}
              className={`${
                scrollPosition > 9000 ? 'opacity-100' : 'opacity-0'
              } w-[216px] absolute ${
                screenHeight < 934 ? 'bottom-[598px]' : 'bottom-[550px]'
              } flex items-center justify-start transition-opacity duration-500`}
              id='coneThreeLabel'
            >
              <div className='min-w-[2.5px] max-w-[2.5] rounded-full h-[34px] mr-4 bg-green-600'></div>
              <div>
                <h3 className='p-xs-semibold text-green-600'>Omgevingsplan</h3>
                <p className='p-xs text-green-600'>Juridisch bindende regels</p>
              </div>
            </div>
            <div
              className={`${
                scrollPosition < 5000 ? 'opacity-100' : 'opacity-0'
              } w-[216px] absolute ${
                screenHeight < 934 ? 'bottom-[426px]' : 'bottom-[378px]'
              } flex items-center justify-start transition-opacity duration-500`}
              id='coneThreeLabel'
              style={{
                left: `${725 + Math.min((scrollPosition / 300) * 300, 380)}px`, // Calculate `right` dynamically
              }}
            >
              <div
                className={`${
                  scrollPosition > 380 ? 'opacity-100' : 'opacity-0'
                } min-w-[2.5px] rounded-full h-[44px] mr-4 bg-green-600`}
              ></div>
              <div>
                <h3 className='heading-xl-semibold text-green-600'>Beleidscyclus</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
