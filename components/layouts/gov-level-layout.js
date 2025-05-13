'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconArrowRight, IconInfoSquareRoundedFilled } from '@tabler/icons-react';
import Header from '../headers';

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
    <div>
      <div className=''>
        <Header
          thema={props.thema}
          productChain={props.transitionAgenda}
          title={props.title}
          page='welke'
          bgColor='bg-green-500'
          imageURL='/big-decoration.png'
          pageType='instrumentOverview'
        />

        {/* DYNAMIC IMAGE */}
        <div className='global-margin mb-20 mt-5 hidden sm:mt-20 sm:block'>
          <div className=''>
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
        <div className='flex my-16 global-margin'>
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

