import ParnerSectionAboutPage from './partners-section-about-page';

export default function Partners({ data }) {
  return (
    <div className='mb-[60px] flex flex-col gap-y-6 sm:mb-[120px]'>
      <ParnerSectionAboutPage
        partners={data?.partnersData.developingPartners}
        partnerType='Ontwikkelpartners'
      />
      <ParnerSectionAboutPage partners={data?.partnersData.partners} partnerType='Kennispartners' />
      <ParnerSectionAboutPage
        partners={data?.partnersData.financingPartners}
        partnerType='Financieringspartners'
      />
    </div>
  );
}
