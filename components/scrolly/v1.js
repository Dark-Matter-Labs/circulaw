'use client';
import { useState, useEffect } from 'react';

export default function AnimatedCone() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define growth parameters
  const maxHeight = 110; // Maximum height of the cone is now 190px
  const layers = 200; // Number of ellipse layers for smoother transition
  const coneHeight = Math.min(scrollPosition / 5, maxHeight);

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <svg width='450' height='400' viewBox='0 0 450 400' className='overflow-visible'>
        {/* Outer Red Circle (Flat Disc) - stays visible */}
        <ellipse
          cx='225'
          cy='350'
          rx='225' // Radius of outer red circle
          ry='50'
          fill='red'
        />
        {/* Cone Layers */}
        {Array.from({ length: layers }).map((_, i) => {
          const progress = i / (layers - 1); // Calculate progress for each layer
          const layerHeight = 350 - progress * coneHeight; // Adjust layer height
          const layerRx = 185 - progress * 50; // Gradually reduce x-radius for 3D effect
          const layerRy = 38.5 - progress * 10; // Gradually reduce y-radius for depth effect

          // Set the color of the top layer to blue
          const fillColor = i === layers - 1 ? 'blue' : '#7CE1BD';
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
  );
}
