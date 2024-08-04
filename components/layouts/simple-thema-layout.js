import InstrumentCard from '../instrument/instrument-card';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import ThemePageHeader from '@/components/theme-page/theme-page-header';
import ImageComponent from '../image-component';
import Link from 'next/link';

// TODO: See what we could move to a layout.js file instead of having everything in components.
export default function SimpleThemaLayout({ instruments, numberOfLaws, ...props }) {
  const themaData = props.thema;
  console.log()
  return (
    <>
      {/* HEADER DESKTOP */}
      <ThemePageHeader themaData={themaData} />
      {/* HEADER MOBILE */}
      <ThemePageHeaderMobile themaData={themaData} />

      <div className='global-margin'>
        <div className='max-w-[830px] mb-10'>
          <h2 className='heading-2xl-semibold pb-4 pt-7'>
            Eerste {numberOfLaws} {themaData.introTextTitle}
          </h2>
          <p>{themaData?.introText}</p>
        </div>
        <div className='max-w-7xl flex pb-10'>
          <div className='w-5 sm:w-2 bg-gradient-to-b from-[#25C38B] to-[#035E46] mr-4 rounded-full mb-10'></div>
          <div>
            {/* This can be a component - policy list, theme bottom section + here */}
            {instruments.map((instrument, index) => (
              <InstrumentCard key={index} instrument={instrument} />
            ))}
          </div>
        </div>
      </div>
      {props?.thema?.themeSponsors?.length > 0 && 
          <div className='bg-gray-100 h-auto'>
            <div className='global-margin flex flex-col items-center justify-center'>
              <div className='mt-20 mb-10 heading-xl-semibold text-green-500 flex flex-row items-center'>
                  <div className='h-11 w-1.5 bg-green-500'>
                    
                  </div>
                  <div className='ml-4'>
                  Het thema ‘Voedselverspilling’ is mede mogelijk gemaakt door:
                  </div>
                
              </div>
              <ul className='mb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-x-8'>
            {props?.thema?.themeSponsors?.map((sponsor, id) => (
              <li key={id} className='relative h-28 w-52'>
                <Link href={sponsor.partnerLink}>
                  <ImageComponent image={sponsor.logo}/>       
                </Link>
              </li>
            ))}
            </ul>
            </div>
          </div>}
    </>
  );
}
