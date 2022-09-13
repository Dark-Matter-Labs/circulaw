import Link from 'next/link';
import Image from 'next/image';

import IconWood from '../public/icons/wood.svg';
import WindmillIcon from '../public/windmill.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      <div className=''>
        {lawData.map((lawData, lawDataIdx) => {
          const {
            id,
            titel,
            casus,
            subrechtsgebied,
            is_er_een_praktijk_voorbeeld,
            europees,
            nationaal,
            provinciaal,
            waterschappen,
            gemeentelijk,
            introductie_juridische_maatregel,
            juridische_invloed,
            juridische_houdbaarheid,
            R1,
            R2,
            R3,
            R4,
            R5,
            R6,
          } = lawData;
          return (
            <div
              key={lawDataIdx}
              className='block max-w-lg sm:max-w-5xl sm:ml-0 lg:ml-40 pb-8 sm:pb-10'
            >
              <div className=''>
                <div className='inline-block'>
                  {casus === 'Houtbouw' ? (
                    <Image width='20' height='20' src={IconWood} alt='Icon of Wood' />
                  ) : (
                    <Image width='20' height='20' src={WindmillIcon} alt='Icon of Wood' />
                  )}
                </div>
                <span className='inline-block pl-4 font-openSans casus'>{casus}</span>
                {is_er_een_praktijk_voorbeeld && (
                  <span className='ml-2 p-1 text-normal rounded font-semibold text-sm bg-green2 text-white no-underline'>
                    Voorbeeld
                  </span>
                )}
              </div>
              <div className='block my-1'>
                {(function () {
                  if (titel === 'Sloopmelding') {
                    return (
                      <Link href='/houtbouw/sloopmelding/' key={lawDataIdx}>
                        <a className='underline text-lg font-semibold no-underline hover:text-greenLink'>
                          <h3>{titel} </h3>
                        </a>
                      </Link>
                    );
                  } else if (
                    titel === 'Houtbouw een plek geven in de gemeentelijke omgevingsvisie'
                  ) {
                    return (
                      <Link href='/houtbouw/gemeentelijke-omgevingsvisie/' key={lawDataIdx}>
                        <a className='underline text-lg font-semibold no-underline hover:text-greenLink'>
                          <h3>{titel} </h3>
                        </a>
                      </Link>
                    );
                  } else if (titel === 'MPG als subselectiecriterium bij gronduitgifte') {
                    return (
                      <Link
                        href='/houtbouw/mpg-als-subselectiecriterium-bij-gronduitgifte/'
                        key={lawDataIdx}
                      >
                        <a className='underline text-lg font-semibold no-underline hover:text-greenLink'>
                          <h3>{titel} </h3>
                        </a>
                      </Link>
                    );
                  } else {
                    return (
                      <Link href={'/measures/' + id} key={lawDataIdx}>
                        <a className='underline text-lg font-semibold no-underline hover:text-greenLink'>
                          <h3>{titel} </h3>
                        </a>
                      </Link>
                    );
                  }
                })()}
              </div>
              <div className='block font-manrope font-bold text-xs pb-1'>
                {europees && <span>Europees - </span>}
                {nationaal && <span>Nationaal - </span>}
                {provinciaal && <span>Provinciaal - </span>}
                {waterschappen && <span>Waterschappen - </span>}
                {gemeentelijk && <span>Gemeentelijk</span>}
              </div>
              <div className='block newlineDisplay twoLines font-manrope font-normal font-base mb-4'>
                <Link href={'/measures/' + id} key={lawDataIdx}>
                  <a>
                    <p className='max-w-xs sm:max-w-5xl'>{introductie_juridische_maatregel}</p>
                  </a>
                </Link>
              </div>

              <div className='grid grid-cols-1 sm:flex space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 py-2 sm:py-0'>
                <div className='flex-2 mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400 '>
                  <span className='block-inline flex items-center'>
                    Juridische invloed:{' '}
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <div
                        key={rating}
                        className={classNames(
                          juridische_invloed > rating ? 'score-true' : 'score-false',
                          'mx-1 h-4 w-4 flex-shrink-0 rounded-full',
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </span>
                </div>

                <div className='flex-2 mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400'>
                  <span className='block-inline flex items-center'>
                    Juridische houdbaarheid:{' '}
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <div
                        key={rating}
                        className={classNames(
                          juridische_houdbaarheid > rating ? 'score-true' : 'score-false',
                          'mx-1 h-4 w-4 flex-shrink-0 rounded-full',
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </span>
                </div>
                <div className='flex-2 mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400 '>
                  R-ladder:{' '}
                  <span className='block-inline text-gray-900 r-category'>
                    {R1 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1 </span>}
                    {R2 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2 </span>}
                    {R3 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R3 </span>}
                    {R4 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R4 </span>}
                    {R5 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5 </span>}
                    {R6 && <span className='bg-green2 text-white rounded-full p-1 mr-2'>R6</span>}
                  </span>
                </div>
              </div>

              <div className='flex space-x-8'>
                <div className='p-1 subrecht-text rounded text-sm font-openSans bg-grey3 bg-opacity-50 '>
                  {subrechtsgebied}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
