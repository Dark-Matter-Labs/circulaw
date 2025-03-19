'use client';

import { useEffect, useRef, useState } from 'react';

export function MasonryGrid({ children, className }) {
  const [columnCount, setColumnCount] = useState(1);
  const containerRef = useRef(null);

  // Update column count based on screen size with custom breakpoints
  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;

      // Custom breakpoints: 350: 1, 640: 2, 1024: 3
      if (width >= 1024) {
        setColumnCount(3);
      } else if (width >= 350) {
        setColumnCount(2);
      } else {
        setColumnCount(1);
      }
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  // Distribute children into columns
  const childrenArray = Array.isArray(children) ? children : [children];
  const columnsArray = Array.from({ length: columnCount }, () => []);

  // Distribute items to columns (simple approach)
  childrenArray.forEach((child, index) => {
    const columnIndex = index % columnCount;
    columnsArray[columnIndex].push(child);
  });

  return (
    <div
      ref={containerRef}
      className={className ? `grid ${className}` : 'grid'}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: '24px',
      }}
    >
      {columnsArray.map((column, columnIndex) => (
        <div key={columnIndex} className='flex flex-col space-y-6'>
          {column.map((child, childIndex) => (
            <div key={childIndex}>{child}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
