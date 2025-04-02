'use client';

import { useEffect, useRef, useState } from 'react';

import Header from '../headers';
import Tabs from './tabs';

export default function EULawHeader({ summaryData, initialTab }) {
  const headerRef = useRef();
  const tabsRef = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(98); // Default to 98px
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  // Adjust the position of the tabs based on the header's height
  const adjustTabsPosition = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  // Adjust navbar height
  const adjustNavbarHeight = () => {
    if (window.innerWidth < 990) {
      setNavbarHeight(70);
    } else {
      setNavbarHeight(98);
    }
  };

  // Check when the user has scrolled past the header and the navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Detect scroll direction
    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }

    // Add a slight threshold for a smoother effect
    const stickyThreshold = headerHeight + navbarHeight - (scrollDirection === 'up' ? -100 : 0);

    if (currentScrollY > stickyThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    setLastScrollY(currentScrollY);
  };

  // Set the correct position when the component mounts or window is resized
  useEffect(() => {
    adjustNavbarHeight();
    adjustTabsPosition();
    window.addEventListener('resize', adjustNavbarHeight);
    window.addEventListener('resize', adjustTabsPosition);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', adjustNavbarHeight);
      window.removeEventListener('resize', adjustTabsPosition);
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [headerHeight, navbarHeight, lastScrollY]);

  return (
    <>
      <Header
        title={summaryData?.title}
        bgColor='bg-green-500'
        pageType='euLaw'
        imageURL='/big-decoration.png'
        headerRef={headerRef}
      />
      <Tabs
        summaryData={summaryData}
        initialTab={initialTab}
        tabsRef={tabsRef}
        isSticky={isSticky}
        navbarHeight={navbarHeight}
      />
    </>
  );
}
