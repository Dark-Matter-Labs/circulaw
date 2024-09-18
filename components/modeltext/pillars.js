'use client';
import { useState } from 'react';

export default function Pillars({ pillars, modelTexts }) {
  const [selectedPillar, setSelectedPillar] = useState('Materialenkringloop');
  const [hovered, setHovered] = useState();
    console.log(hovered)
  return (
    <>
      <div>
        <ul className='bg-green-50 rounded-cl flex flex-row p-4 mt-14 gap-x-2.5 justify-between'>
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onMouseEnter={() => setHovered(p.title)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedPillar(p.title)}
                className={`${
                  selectedPillar === p.title ? 'p-base-semibold underline' : 'p-base'
                } text-green-600 p-2`}
              >
                {p.title} {'('}
                {modelTexts.filter((text) => text.pillar === p.title).length}
                {')'}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {pillars.map((p) => (
            <>
              {p.title === selectedPillar && (
                <>
                  <h3 className='heading-xl-semibold mt-8 mb-2'>{p.title}</h3>
                  <p className='p-xs max-w-[700px]'>{p.description}</p>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
