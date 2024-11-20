'use client';
import { useState, useEffect, useRef } from 'react';
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
import ContentTwelve from './content/12-content';

export default function V5() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [activeContent, setActiveContent] = useState('c1');
  const [activeCone, setActiveCone] = useState();
  const [animationStage, setAnimationStage] = useState(0);

  const navItems = [
    { id: 0, label: 'Circulair bouwen meer effect met mix van instrumenten', scrollTo: 1 },
    { id: 1, label: 'De plaats van instrumenten in de beleidscyclus', scrollTo: 1301 },
    { id: 2, label: 'Omgevingsvisie, Omgevingsprogramma, Omgevingsplan', scrollTo: 2601 },
    { id: 3, label: 'Planregels uit het omgevingsplan', scrollTo: 3901 },
  ];

  const contentComponents = [
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
    ContentTwelve,
  ];

  const contentRefs = {
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

  const coneContentRefs = {
    cone1: useRef(),
    cone2: useRef(),
    cone3: useRef(),
  };

  useEffect(() => {
    // Define scroll thresholds for navigation and content
    const scrollThresholds = {
      nav: [
        { start: 0, end: 910, value: 0 },
        { start: 910, end: 4000, value: 1 },
        { start: 4000, end: 9800, value: 2 },
        { start: 9800, end: 12000, value: 3 },
      ],
      content: [
        // first svg
        { start: 0, end: 455, value: 'c1' },
        { start: 455, end: 910, value: 'c2' },
        { start: 910, end: 1440, value: 'c3' },
        { start: 1440, end: 1995, value: 'c4' },
        { start: 1995, end: 2630, value: 'c5' },
        { start: 2630, end: 4000, value: 'c6' }, // can add more time as there is a long scroll from c5 to c6
        // second svg
        { start: 4000, end: 5200, value: 'c7' },
        { start: 5200, end: 7000, value: 'c8' },
        { start: 7000, end: 8800, value: 'c9' },
        { start: 8800, end: 9800, value: 'c10' },
        // { start: 5600, end: 6000, value: 'c11' },
       //  { start: 6000, end: 6400, value: 'c12' },
      ],
      cone: [
        { start: 4000, value: 'cone1' },
        { start: 5400, value: 'cone2' },
        { start: 7200, value: 'cone3' },
      ],
    };

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
      setActiveContent(activeContentValue ?? 'c1');

      // Set activeCone
      const activeConeValue = scrollThresholds.cone.find((range) => position >= range.start)?.value;
      setActiveCone(activeConeValue ?? '');

      // Set animationStage
      setAnimationStage(position > 3850 ? 1 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // First SVG
  // Radii and circumferences for circles
  const outerCircleRadius = 185;
  const outerCircleCircumference = 2 * Math.PI * outerCircleRadius;
  const middleCircleRadius = 135;
  const middleCircleCircumference = 2 * Math.PI * middleCircleRadius;
  const innerCircleRadius = 85;
  const innerCircleCircumference = 2 * Math.PI * innerCircleRadius;

  // Define unique scroll ranges for each circle being drawn
  const scrollStartOuter = 875; // Start point for the outer circle
  const scrollEndOuter = 3850; // End point for the outer circle
  const scrollStartMiddle = 1260; // Start point for the middle circle
  const scrollEndMiddle = 3675; // End point for the middle circle
  const scrollStartInner = 1540; // Start point for the inner circle
  const scrollEndInner = 3500; // End point for the inner circle

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
  const outerCircleRotation = 50;
  const middleCircleRotation = 116.8;
  const innerCircleRotation = 185;

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

  const opacityOuterWords = Math.min(Math.max(scrollPosition / 250, 0), 1);
  const circleOneOpacity = scrollPosition < 250 ? 0 : Math.min((scrollPosition - 250) / 400, 1);
  const circleTwoOpacity = Math.min(Math.max((scrollPosition - 650) / 200, 0), 1);

  // Define thresholds for the scroll position to control when the transition happens
  const startSVGTransition = 3400; // start the transition
  const endSVGTransition = 3850; // complete the transition

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

  const secondConeStart = 5400;

  // Define growth parameters
  const maxConeHeight = 300; // Maximum height of the cone is now 190px

  const layersConeOneAndThree = 200; // Number of ellipse layers for smoother transition
  const layersConeTwo = 250;
  const coneHeight = Math.min((scrollPosition - 3850) / 5, maxConeHeight);
  const coneHeight2 = Math.min((scrollPosition - 5400) / 5, maxConeHeight);
  const coneHeight3 = Math.min((scrollPosition - 7200) / 5, maxConeHeight);

  // Set the scroll positions and max offset
  const maxCYOffset = 350; // Maximum offset to add to `cy`

  const coneOneVerticalShiftStart = 5200; // Replace with the desired start scroll position
  const coneOneVerticalShiftEnd = 5400; // Replace with the desired end scroll position

  const coneTwoVerticalShiftStart = 7000; // Replace with the desired start scroll position
  const coneTwoVerticalShiftEnd = 7200; // Replace with the desired end scroll position

  function calculateCY(scrollPosition, start, end, maxOffset) {
    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return maxOffset;

    // Calculate the progress based on scroll position between start and end
    const CYprogress = (scrollPosition - start) / (end - start);

    // Return the calculated offset for the `cy` value
    return CYprogress * maxOffset;
  }

  const cyOffset = calculateCY(
    scrollPosition,
    coneOneVerticalShiftStart,
    coneOneVerticalShiftEnd,
    maxCYOffset,
  );
  const cyOffset2 = calculateCY(
    scrollPosition,
    coneTwoVerticalShiftStart,
    coneTwoVerticalShiftEnd,
    maxCYOffset,
  );

  return (
    <>
      <div className='fixed bottom-8 right-8 text-red-700 heading-2xl-semibold'>
        {scrollPosition}
      </div>
      <div className='sticky top-44 mt-10 xl:-ml-10 flex items-start justify-start w-full'>
        <div className='w-48 h-full relative mr-6'>
          <div className='sticky h-[700px] grow flex flex-col gap-y-6'>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${
                  activeNav >= item.id ? 'translate-y-0' : 'translate-y-[300px]'
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
                    activeNav === item.id ? 'p-2xs-semibold' : 'p-2xs'
                  } h-5 w-5 mt-1 border border-green-600 rounded-full flex items-center justify-center`}
                >
                  {item.id + 1}
                </div>
                <p
                  className={`${
                    activeNav === item.id ? 'p-xs-semibold' : 'p-xs'
                  } ml-2 max-w-[90px]`}
                >
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col relative min-w-[280px]'>
          {contentComponents.map((Content, index) => {
            const contentId = `c${index + 1}`; // Generate IDs like c1, c2, ...
            const isActive = activeContent === contentId;
            const prevActive = activeContent === `c${index}`;
            const nextActive = activeContent === `c${index + 2}`;

            return (
              <div
                key={contentId}
                ref={contentRefs[contentId]}
                data-id={contentId}
                className={`${
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : prevActive
                    ? 'opacity-0 translate-y-[300px]'
                    : nextActive
                    ? 'opacity-0 -translate-y-[300px]'
                    : 'opacity-0 -translate-y-[300px]'
                } transition-all duration-500 absolute top-0 left-0`}
              >
                <Content />
              </div>
            );
          })}
        </div>
        <div
          className='flex items-center justify-center w-[600px] h-[635px] -ml-4'
          style={{ perspective: '1000px' }}
        >
          <div className=' h-full w-full' style={transformSVGStyle}>
            <div className='w-full h-full flex items-center justify-center'>
              <svg
                className='svg'
                height='635'
                width='635'
                xmlns='http://www.w3.org/2000/svg'
                style={{ opacity: svgOpacity, transition: 'opacity 0.2s ease-out' }}
              >
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
                  r={outerCircleRadius}
                  stroke='#F6F6F6'
                  strokeWidth='40'
                  fill='none'
                />
                <circle
                  cx='317.5'
                  cy='317.5'
                  r={outerCircleRadius}
                  stroke='#E6FBF3'
                  strokeWidth='40'
                  fill='none'
                  style={{
                    strokeOpacity: circleOneOpacity, // Opacity increases from 0 to 1
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                  }}
                  className='duration-200 ease-in-out'
                />
                <circle
                  cx='317.5'
                  cy='317.5'
                  r={outerCircleRadius}
                  stroke='#F6FEFB'
                  strokeWidth='40'
                  fill='none'
                  style={{
                    strokeOpacity: circleTwoOpacity, // Opacity increases from 0 to 1
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                  }}
                  className='duration-200 ease-in-out'
                />
                <circle
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
                  className='p-2xs-bold uppercase tracking-[0.2rem]'
                  style={{
                    fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
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
                  r={middleCircleRadius}
                  stroke='#F6F6F6'
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
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                  }}
                  className='duration-200 ease-in-out'
                />
                <circle
                  cx='317.5'
                  cy='317.5'
                  r={middleCircleRadius}
                  stroke='#E6FBF3'
                  strokeWidth='40'
                  fill='none'
                  style={{
                    strokeOpacity: circleTwoOpacity, // Opacity increases from 0 to 1
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
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
                  className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                  style={{
                    fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
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
                  r={innerCircleRadius}
                  stroke='#F6F6F6'
                  strokeWidth='40'
                  fill='none'
                />
                <circle
                  cx='317.5'
                  cy='317.5'
                  r={innerCircleRadius}
                  stroke='#E6FBF3'
                  strokeWidth='40'
                  fill='none'
                  style={{
                    strokeOpacity: circleTwoOpacity, // Opacity increases from 0 to 1
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
                  }}
                  className='duration-200 ease-in-out'
                />
                <circle
                  cx='317.5'
                  cy='317.5'
                  r={innerCircleRadius}
                  stroke='#D3F3E8'
                  strokeWidth='40'
                  fill='none'
                  style={{
                    strokeOpacity: circleTwoOpacity, // Opacity increases from 0 to 1
                    transition: 'stroke-opacity 0.2s ease-in-out', // Smooth transition
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
                  className='p-2xs-bold uppercase tracking-[0.2rem] duration-200 ease-in-out'
                  style={{
                    fillOpacity: circleOneOpacity, // Opacity increases from 0 to 1
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
              </svg>
            </div>
          </div>
          {animationStage === 1 && (
            <svg
              width='635'
              height='635'
              viewBox='0 0 635 635'
              className='overflow-visible absolute'
              style={{ opacity: secondSvgOpacity, transition: 'opacity 0.2s ease-out' }}
            >
              <circle
                cx='317.5'
                cy={317.5 + cyOffset + cyOffset2}
                r='205'
                fill='none'
                stroke='#D1F9EB'
                strokeWidth={40}
                transform-origin='317.5 340'
                transform='scale(1.12, 0.3)'
              />

              {/* First Cone Layers */}
              {Array.from({ length: layersConeOneAndThree }).map((_, i) => {
                const progress = i / (layersConeOneAndThree - 1);
                const layerHeight = 317.5 - progress * coneHeight;
                const layerRadius = 185 - progress * 50;
                const fillColor = i === layersConeOneAndThree - 1 ? '#7CE1BD' : '#D1F9EB';

                return (
                  <circle
                    key={i}
                    cx='317.5'
                    cy={layerHeight + cyOffset + cyOffset2}
                    r={layerRadius + 10}
                    stroke={fillColor}
                    strokeWidth={40}
                    fill='none'
                    opacity={1}
                    transform-origin='317.5 335'
                    transform='scale(1.12, 0.3)'
                  />
                );
              })}

              {scrollPosition > 5200 && (
                <circle
                  cx='317.5'
                  cy={37.5 + cyOffset2}
                  r='145'
                  fill='none'
                  stroke='#7CE1BD'
                  strokeWidth={40}
                  transform-origin='317.5 340'
                  transform='scale(1.12, 0.3)'
                />
              )}

              {secondConeStart < scrollPosition && (
                <>
                  {/* Dashed Circles for the Second Cone with Alternating Colors */}
                  {Array.from({ length: layersConeTwo - 1 }).map((_, i) => {
                    const progress2 = i / (layersConeTwo - 1);
                    const layerHeight = 236 - progress2 * coneHeight2;
                    const layerRadius = 145 - progress2 * 50;
                    // Calcul ate circumference and dash length/gap
                    const circumference = 2 * Math.PI * layerRadius;
                    const dashLength = (circumference * 0.75) / 6;
                    const gapLength = circumference / 25;
                    return (
                      <>
                        {/* Green dashes */}
                        <circle
                          key={`dashed-green-${i}`}
                          cx='317.5'
                          cy={layerHeight + cyOffset2}
                          r={layerRadius}
                          fill='none'
                          stroke='#07B071'
                          strokeWidth={40}
                          strokeDasharray={`${dashLength}, ${gapLength}`}
                          opacity={1}
                          transform-origin='317.5 254'
                          transform='scale(1.12, 0.3)'
                        />
                        {/* Blue dashes with offset to alternate */}
                        <circle
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
                          transform-origin='317.5 254'
                          transform='scale(1.12, 0.3)'
                        />
                      </>
                    );
                  })}
                  {scrollPosition > 7000 && (
                    <>
                      <circle
                        cx='317.5'
                        cy={-264}
                        r='95'
                        fill='none'
                        stroke='#25C38B'
                        strokeWidth={40}
                        transform-origin='317.5 340'
                        transform='scale(1.12, 0.3)'
                      />
                      {scrollPosition > 7200 && (
                        <>
                          {Array.from({ length: layersConeOneAndThree }).map((_, i) => {
                            const progress3 = i / (layersConeOneAndThree - 1);
                            const layerHeight = -254 - progress3 * coneHeight3;
                            const layerRadius = 85 - progress3 * 50;
                            const fillColor =
                              i === layersConeOneAndThree - 1 ? '#07B071' : '#25C38B';
                            return (
                              <circle
                                key={i}
                                cx='317.5'
                                cy={layerHeight}
                                r={layerRadius + 10}
                                stroke={fillColor}
                                strokeWidth={40}
                                fill='none'
                                opacity={1}
                                transform-origin='317.5 335'
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
            </svg>
          )}
        </div>

        <div
          ref={coneContentRefs.cone1}
          data-id='cone1'
          style={{
            transform: `translateY(${cyOffset}px)`,
          }}
          className={`${
            activeCone === 'cone1' ? 'opacity-100 -translate-y-[350px] ' : 'opacity-0 translate-y-0'
          } w-[250px] absolute bottom-0 right-0 flex items-start justify-start transition-all duration-500`}
        >
          <div className='w-1 rounded-full h-[44px] mr-4 bg-green-600 mt-2'></div>
          <div>
            <h3 className='heading-xl-semibold text-green-600'>Omgevingsvisie</h3>
            <p className='heading-xl text-green-600'>Langetermijnvisie voor fysieke leefomgeving</p>
          </div>
        </div>
        <div className='w-[250px] absolute bottom-[350px] right-0 items-start justify-start hidden'>
          <div className='w-1 rounded-full h-[44px] mr-4 bg-green-600 mt-2'></div>
          <div>
            <h3 className='heading-xl-semibold text-green-600'>Omgevingsprogramma&apos;s</h3>
            <p className='heading-xl text-green-600'>Uitwerking beleidsdoelen voor korte-/middellange termijn</p>
          </div>
        </div>
        <div className='w-[250px] absolute bottom-[350px] right-0 items-start justify-start hidden'>
          <div className='w-1 rounded-full h-[44px] mr-4 bg-green-600 mt-2'></div>
          <div>
            <h3 className='heading-xl-semibold text-green-600'>Omgevingsplan</h3>
            <p className='heading-xl text-green-600'>Juridisch bindende regels</p>
          </div>
        </div>
      </div>
    </>
  );
}
