'use client';
import { useEffect, useState } from 'react';
import InstrumentCard from '../instrument/instrument-card';

export default function ThemeBottomSection({ featuredLaws, thema }) {
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
      <div className='bg-gray-200'>
        <div className='py-8 global-margin'>
          <h3 className='heading-2xl-semibold sm:heading-3xl-semibold pb-4 lowercase first-letter:uppercase'>
            {thema?.featuredInstrumentTitle}
          </h3>
          <p className='pb-10 p-base max-w-[830px]'>{thema?.featureInstrumentSubtitle}</p>

          <div className=''>
            {images === true ? (
              <>
                {featuredLaws?.map((instrument, index) => (
                  <InstrumentCard key={index} instrument={instrument} images={images} />
                ))}
              </>
            ) : (
              <>
                <div className='max-w-7xl flex pb-10'>
                  <div className='w-5 sm:w-2 bg-gradient-to-b from-[#25C38B] to-[#035E46] mr-4 rounded-full mb-10'></div>
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
