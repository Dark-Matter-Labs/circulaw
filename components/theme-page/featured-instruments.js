'use client';

import { useEffect, useState } from 'react';

import InstrumentCard from '../instrument/instrument-card';

export default function FeaturedInstruments({ featuredLaws, thema }) {
  const [images, setImages] = useState();
  useEffect(() => {
    if (
      featuredLaws[0]?.featuredImage === null ||
      featuredLaws[1]?.featuredImage === null ||
      featuredLaws[2]?.featuredImage === null
    ) {
      setImages(false);
    } else {
      setImages(true);
    }
  }, [featuredLaws]);

  return (
    <>
      <div className=''>
        <div className='global-margin py-8'>
          <h3 className='heading-2xl-semibold sm:heading-3xl-semibold pb-4 lowercase first-letter:uppercase'>
            {thema?.featuredInstrumentTitle}
          </h3>
          <p className='p-base max-w-[830px] pb-10'>{thema?.featureInstrumentSubtitle}</p>

          <div className=''>
            {images === true ? (
              <>
                {featuredLaws?.map((instrument, index) => (
                  <InstrumentCard key={index} instrument={instrument} images={images} />
                ))}
              </>
            ) : (
              <>
                <div className='flex max-w-7xl pb-10'>
                  <div className='mb-10 mr-4 w-5 rounded-full bg-gradient-to-b from-[#25C38B] to-[#035E46] sm:w-2'></div>
                  <div>
                    {/* This can be a component - policy list, theme bottom section + here */}
                    {featuredLaws?.map((instrument, index) => (
                      <InstrumentCard key={index} instrument={instrument} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
