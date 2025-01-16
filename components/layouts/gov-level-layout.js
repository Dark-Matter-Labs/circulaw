'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OverviewPageHeader from '../theme-page/overview-page-header';
import { IconArrowRight, IconInfoSquareRoundedFilled } from '@tabler/icons-react';

export default function GovLevelLayout({ ...props }) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;
  const [selected, setSelected] = useState('none');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.length > 0) {
      let selected = localStorage.getItem('selectedGovLevel');
      let keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      setSelected(selected);
    }
  }, []);

  const handleSelected = (value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedGovLevel', value);
      setSelected(value);
    }
  };

  return (
    <div className=''>
      <div className='h-[300px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600  sm:mx-0'>
        <OverviewPageHeader
          thema={props.thema}
          productChain={props.transitionAgenda}
          title={props.title}
          page='welke'
        />
      </div>

      <div className='global-margin flex flex-col justify-center'>
        
   

        <div className='flex flex-col sm:flex-row my-16 w-full max-w-[1160px] bg-grey-100 border rounded-cl shadow-card px-6 sm:px-20 py-12 justify-between items-center relative'>
        
        
          <div className='hidden sm:flex items-center relative'>
         
            <div
              className={`${
                selected === 'nationaal'
                  ? 'bg-green-400 text-green-50'
                  : 'bg-green-50 text-green-500'
              } rounded-full shadow-card size-[332px] absolute left-0 -z-10`}
            >
              <h3 className='heading-2xl-semibold absolute left-20 top-6'>Nationaal</h3>
              <div className='absolute top-20 left-12'>
                <NormalDistributionCircles laws={natLaws} isSelected={selected === 'nationaal'} />
              </div>
            </div>
            <div
              className={`${
                selected === 'provinciaal'
                  ? 'bg-green-400 text-green-50'
                  : 'bg-green-50 text-green-500'
              } rounded-full shadow-card size-[265px] absolute left-[132px] z-20`}
            >
              <h3 className='heading-2xl-semibold absolute left-14 top-6'>Provinciaal</h3>
              <div className='absolute top-20 left-12'>
                <NormalDistributionCircles
                  laws={provLaws}
                  isSelected={selected === 'provinciaal'}
                />
              </div>
            </div>
            <div
              className={`${
                selected === 'gemeentelijk'
                  ? 'bg-green-400 text-green-50'
                  : 'bg-green-50 text-green-500'
              } rounded-full shadow-card size-[220px] absolute left-[290px] z-30`}
            >
              <h3 className='heading-2xl-semibold absolute left-8 top-6'>Gemeentelijk</h3>
              <div className='absolute top-20 left-12'>
                <NormalDistributionCircles
                  laws={gemLaws}
                  isSelected={selected === 'gemeentelijk'}
                />
              </div>
            </div>
          </div>

          <div className='max-w-[300px]'>
            <div className='flex flex-row items-start'>
              <IconInfoSquareRoundedFilled className='size-8 mr-3 text-green-500' />
              <p className='p-base-semibold text-green-500 '>
                Klik op de cirkels of de titels hieronder om te filteren
              </p>
            </div>
            <ul className='flex flex-col'>
              <li
                className={`${
                  selected === 'alle' ? 'bg-green-100 text-green-500' : 'bg-green-50 text-gray-500'
                } py-2 px-4 rounded-cl my-2 text-nowrap w-min heading-2xl-semibold`}
              >
                <button onClick={() => handleSelected('alle')}>
                  Alle overheidslagen {allRegionLaws.length}
                </button>
              </li>
              <li
                className={`${
                  selected === 'nationaal'
                    ? 'bg-green-100 text-green-500'
                    : 'bg-green-50 text-gray-500'
                } py-2 px-4 rounded-cl my-2 text-nowrap w-min heading-2xl-semibold`}
              >
                <button onClick={() => handleSelected('nationaal')}>
                  Nationaal {natLaws.length}
                </button>
              </li>
              <li
                className={`${
                  selected === 'provinciaal'
                    ? 'bg-green-100 text-green-500'
                    : 'bg-green-50 text-gray-500'
                } py-2 px-4 rounded-cl my-2 text-nowrap w-min heading-2xl-semibold`}
              >
                <button onClick={() => handleSelected('provinciaal')}>
                  Provinciaal {provLaws.length}
                </button>
              </li>
              <li
                className={`${
                  selected === 'gemeentelijk'
                    ? 'bg-green-100 text-green-500'
                    : 'bg-green-50 text-gray-500'
                } py-2 px-4 rounded-cl my-2 text-nowrap w-min heading-2xl-semibold`}
              >
                <button onClick={() => handleSelected('gemeentelijk')}>
                  Gemeentelijk {gemLaws.length}
                </button>
              </li>

              <li
                className={`${
                  selected === 'none' ? 'text-green-500' : 'text-gray-500'
                } rounded-cl my-2 text-nowrap w-min p-base-semibold`}
              >
                <button onClick={() => handleSelected('none')}>Toon alle instrumenten</button>
              </li>
            </ul>
          </div>
          <div className='h-64 flex sm:hidden'>Mobile version:</div>
        </div>
        <div className='flex my-16'>
          <div className='flex-col items-center hidden sm:flex'>
            <div className='[writing-mode:vertical-rl] rotate-180 mb-6 heading-3xl-semibold text-green-500'>
              Instrumentn
            </div>
            <div className='bg-green-300 rounded-full h-full w-2' />
          </div>
          <div className='min-h-96 flex flex-col sm:flex-row gap-x-10 w-full ml-0 sm:ml-16'>
            {allRegionLaws.length && (selected === 'alle' || selected === 'none') > 0 && (
              <div className='sm:basis-1/2'>
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Alle overheidslagen {allRegionLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4 sm:mb-0'>
                    {allRegionLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start '>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              </div>
            )}

            <div className='sm:basis-1/2 flex flex-col'>
              {natLaws.length > 0 && (selected === 'nationaal' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Nationaal {natLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4'>
                    {natLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {provLaws.length > 0 && (selected === 'provinciaal' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Provinciaal {provLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4'>
                    {provLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {gemLaws.length > 0 && (selected === 'gemeentelijk' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Gemeentelijk {gemLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800'>
                    {gemLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NormalDistributionCircles = ({ laws, isSelected }) => {
  // const ROWS = 5; // Fixed number of rows

  // Define the relative weights for a rotated normal distribution
  const distributionPattern = [1, 3, 5, 3, 1];
  const totalWeight = distributionPattern.reduce((sum, weight) => sum + weight, 0);

  // Calculate the exact number of items per row
  let itemsPerRow = distributionPattern.map((weight) =>
    Math.floor((weight / totalWeight) * laws.length),
  );

  // Distribute any remaining items (due to rounding errors)
  let remainingItems = laws.length - itemsPerRow.reduce((sum, count) => sum + count, 0);
  for (let i = 0; remainingItems > 0; i++) {
    itemsPerRow[2 - Math.abs(2 - i)]++; // Start filling from the middle row outward
    remainingItems--;
  }

  // Split the `gemLaws` array into rows based on the calculated distribution
  let currentIndex = 0;
  const rows = itemsPerRow.map((count) => {
    const rowItems = laws.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return rowItems;
  });

  return (
    <div className='flex flex-col space-y-2'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='flex space-x-2'>
          {row.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`${
                isSelected ? 'bg-green-50' : 'bg-green-400'
              } size-4  rounded-full w-5 h-5`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

{/*
  Path of the first circle... not sure if this is a good way to go about it. 
   <svg width="332" height="332" viewBox="1.5 0.5 332 332">
            <path
            className='shadow-card'
            d="M265,33 
            A165.5,165.5 0 1 0 265,300"
            fill="#f8fbf8"
            stroke="#f8fbf8"
            />
            </svg>
  */}