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
    if (window.scrollY > headerHeight + navbarHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Set the correct position when the component mounts or window is resized
  useEffect(() => {
    adjustNavbarHeight();
    adjustTabsPosition();
    window.addEventListener('resize', () => {
      adjustNavbarHeight();
      adjustTabsPosition();
    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', () => {
        adjustNavbarHeight();
        adjustTabsPosition();
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight, isSticky]);

  return (
    <>
      <Header
        title={summaryData?.title}
        bgColor='bg-cl-black'
        pageType='euLaw'
        headerRef={headerRef}
      />
      <Tabs
        summaryData={summaryData}
        initialTab={initialTab}
        tabsRef={tabsRef}
        headerHeight={headerHeight}
        isSticky={isSticky}
        navbarHeight={navbarHeight}
      />
    </>
  );
}
