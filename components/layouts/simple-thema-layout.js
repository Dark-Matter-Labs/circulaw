import InstrumentCard from '../instrument/instrument-card';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import ThemePageHeader from '@/components/theme-page/theme-page-header';
import ThemeSponsors from '../theme-page/theme-sponsors';

// TODO: See what we could move to a layout.js file instead of having everything in components.
export default function SimpleThemaLayout({ instruments, numberOfLaws, ...props }) {
  const themaData = props.thema;
  return (
    <>
      {/* HEADER DESKTOP */}
      <ThemePageHeader themaData={themaData} />
      {/* HEADER MOBILE */}
      <ThemePageHeaderMobile themaData={themaData} />

      <div className='global-margin'>
        <div className='mb-10 max-w-[830px]'>
          <h2 className='heading-2xl-semibold pb-4 pt-7'>
            Eerste {numberOfLaws} {themaData.introTextTitle}
          </h2>
          <p>{themaData?.introText}</p>
        </div>
        <div className='flex max-w-7xl pb-10'>
          <div className='mb-10 mr-4 w-5 rounded-full bg-gradient-to-b from-[#25C38B] to-[#035E46] sm:w-2'></div>
          <div>
            {/* This can be a component - policy list, theme bottom section + here */}
            {instruments.map((instrument, index) => (
              <InstrumentCard key={index} instrument={instrument} />
            ))}
          </div>
        </div>
      </div>
      {props?.thema?.themeSponsors?.length > 0 && (
        <ThemeSponsors sponsors={props?.thema?.themeSponsors} thema={props?.thema?.themaName} />
      )}
    </>
  );
}
