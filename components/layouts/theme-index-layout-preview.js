import { usePreview } from '@/lib/sanity.preview';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import ThemePageHeader from '../theme-page/theme-page-header';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import CustomButton from '../custom-button';
import ThemeBottomSection from '../theme-page/section-bottom-theme-index';
import waarvoor from '@/public/thema-card-background/waarvoor.svg';
import samenhang from '@/public/thema-card-background/samenhang.svg';
import list from '@/public/thema-card-background/list.svg';
import Tag from '../tag';
import InstrumentMetaData from '../instrument/instrument-metadata';

export default function ThemeLayoutPreview({ query, queryParams }) {
  const data = usePreview(null, query, queryParams);

  if (data.thema._type === 'thema') {
    return (
      <div>
        {/* HEADER DESKTOP */}
        <ThemePageHeader themaData={data.thema} />
        {/* HEADER MOBILE */}

        <ThemePageHeaderMobile themaData={data.thema} />

        {/* CARDS */}
        <div className='bg-gradient-to-b from-[#F8FAF8] to-[#F8FAF8]'>
          <div className='global-margin pb-16 sm:pb-20'>
            <div className='pt-14 pb-10'>
              <h2 className='p-3xl-semibold sm:p-5xl-semibold'>{data?.thema?.overviewsTitle}</h2>
            </div>
            {/* Desktop Cards */}
            <ul
              className='hidden sm:grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 max-w-8xl relative z-0'
              role='list'
            >
              <Link
                href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug?.current}/categorie`}
              >
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      <Image
                        src={samenhang}
                        alt='vector image for categorie page'
                        className='h-full w-full'
                      />
                    </div>
                  </div>

                  <div className='border border-grey-400 bg-grey-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{data?.thema?.samenhangTitle}</div>
                      <div className='p-base'>{data?.thema?.samenhangText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                      Bekijk jouw categorie
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>
                </li>
              </Link>
              <Link
                href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug.current}/instrumenten/`}
              >
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      <Image src={list} alt='' className='h-full w-full' />
                    </div>
                  </div>
                  <div className='border border-grey-400 bg-grey-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{`Lijst van ${data?.length} instrumenten`}</div>
                      <div className='p-base'>{data?.thema?.listText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                      Naar de lijst
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>{' '}
                </li>
              </Link>
              <Link
                href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug?.current}/overheidsbevoegdheid`}
              >
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      {' '}
                      <Image src={waarvoor} alt='' className='h-full w-full' />
                    </div>
                  </div>
                  <div className='border border-grey-400 bg-grey-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{data?.thema?.welkeTitle}</div>
                      <div className='p-base'>{data?.thema?.welkeText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                      Bekijk de bevoegdheden
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>{' '}
                </li>
              </Link>
            </ul>
            {/* Mobile Cards */}
            <ul className='sm:hidden max-w-sm'>
              <li>
                <Link
                  href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug?.current}/categorie`}
                >
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow mb-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={samenhang}
                          alt='vector image for categorie page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>Instrumenten per categorie</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600 mt-1'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug?.current}/instrumenten/`}
                >
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow my-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={list}
                          alt='vector image for list page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>{`Lijst van ${data?.length} instrumenten`}</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${data?.thema?.transitionAgenda}/${data?.thema?.slug?.current}/overheidsbevoegdheid`}
                >
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow mt-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={waarvoor}
                          alt='vector image for waarvoor page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>{data?.thema?.welkeTitle}</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600 mt-1'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='bg-grey-200'>
            <ThemeBottomSection featuredLaws={data?.featured} thema={data?.thema} />
          </div>
        </div>
        <Link
          className='bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0'
          href='/api/exit-preview'
        >
          Exit Preview
        </Link>
      </div>
    );
  } else {
    return (
      <>
        {/* HEADER DESKTOP */}
        <ThemePageHeader themaData={data.thema} />
        {/* HEADER MOBILE */}
        <ThemePageHeaderMobile themaData={data.thema} />

        <div className='global-margin'>
          <div className='max-w-[830px] mb-10'>
            <h2 className='p-5xl-semibold pb-4 pt-7'>
              Eerste {data.length} {data.thema.introTextTitle}
            </h2>
            <p>{data.thema?.introText}</p>
          </div>
          <div className='max-w-7xl flex pb-10'>
            <div className='w-5 sm:w-2 bg-gradient-to-b from-[#25C38B] to-[#035E46] mr-4 rounded-full mb-10'></div>
            <div>
              {/* This can be a component - policy list, theme bottom section + here */}
              {data.instruments.map((instrument) => (
                <Link
                  href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                  key={instrument.titel}
                >
                  <div className='block mb-14 sm:mb-10 md:min-w-[760px]'>
                    <div className='flex justify-start items-center -ml-1'>
                      {/* Expertise Tag */}
                      {instrument?.beleid === true && (
                        <Tag classes='bg-green-500 text-grey-100'>Beleid</Tag>
                      )}
                      {instrument?.inkoop === true && (
                        <Tag classes='bg-green-500 text-grey-100'>Inkoop</Tag>
                      )}
                      {instrument?.grondpositie === true && (
                        <Tag classes='bg-green-500 text-grey-100'>Grondpositie</Tag>
                      )}
                      {instrument?.subsidie === true && (
                        <Tag classes='bg-green-500 text-grey-100'>Subsidie</Tag>
                      )}
                      {instrument?.fiscaal === true && (
                        <Tag classes='bg-green-500 text-grey-100'>Fiscaal</Tag>
                      )}
                    </div>

                    <div className='block mt-2'>
                      <div className=' mb-2'>
                        <h3 className='p-4xl-semibold sm:max-w-[650px] text-grey-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                          {instrument.titel}{' '}
                        </h3>
                      </div>

                      <div className='block newlineDisplay p-md text-grey-800 mt-2 pb-2'>
                        <p className='p-base sm:max-w-[650px]'>{instrument.introText}</p>
                      </div>
                      <InstrumentMetaData data={instrument} borders={true} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
