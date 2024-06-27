import InstrumentCard from '../instrument/instrument-card';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import ThemePageHeader from '@/components/theme-page/theme-page-header';

export default function SimpleThemaLayout({ instruments, numberOfLaws, ...props }) {
  const themaData = props.thema;
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
    </>
  );
}
