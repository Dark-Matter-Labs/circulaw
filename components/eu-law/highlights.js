import HighlightCard from './highlight-card';
import HighlightsSmallCard from './highlights-small-card';
import cpr1 from '@/public/eu-crp-icons/cpr-1.svg';
import cpr2 from '@/public/eu-crp-icons/cpr-2.svg';
import cpr3 from '@/public/eu-crp-icons/cpr-3.svg';
import cpr4 from '@/public/eu-crp-icons/cpr-4.svg';
import espr from '@/public/eu-espr-icons/espr-0.svg';
import espr1 from '@/public/eu-espr-icons/espr-1.svg';
import espr2 from '@/public/eu-espr-icons/espr-2.svg';
import espr3 from '@/public/eu-espr-icons/espr-3.svg';
import espr4 from '@/public/eu-espr-icons/espr-4.svg';
import espr5 from '@/public/eu-espr-icons/espr-5.svg';
import espr6 from '@/public/eu-espr-icons/espr-6.svg';
import espr7 from '@/public/eu-espr-icons/espr-7.svg';
import espr8 from '@/public/eu-espr-icons/espr-8.svg';
import sup1 from '@/public/eu-sup-icons/sup-1.svg';
import sup2 from '@/public/eu-sup-icons/sup-2.svg';
import sup3 from '@/public/eu-sup-icons/sup-3.svg';
import sup4 from '@/public/eu-sup-icons/sup-4.svg';
import sup5 from '@/public/eu-sup-icons/sup-5.svg';
import sup6 from '@/public/eu-sup-icons/sup-6.svg';
import sup7 from '@/public/eu-sup-icons/sup-7.svg';
import sup8 from '@/public/eu-sup-icons/sup-8.svg';
import sup9 from '@/public/eu-sup-icons/sup-9.svg';
import sup10 from '@/public/eu-sup-icons/sup-10.svg';

export default function Highlights({ law }) {
  if (law === 'CSRD') {
    return (
      <>
        <div className='global-margin'>
          <h2 className='text-green-800 heading-3xl-semibold mb-4'>CSRD Highlights</h2>
          <p className='mb-16 max-w-xl'>
            De CSRD is per boekjaar 2024 van toepassing op bedrijven die voldoen aan ten minste twee
            van de volgende criteria:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
            <HighlightCard
              text='Een jaarlijkse omzet van meer dan:'
              number='€50'
              circleText='miljoen'
            />
            <HighlightCard
              text='Een balanstotaal van meer dan:'
              number='€25'
              circleText='miljoen'
            />
            <HighlightCard text='Bedrijven met meer dan:' number='250' circleText='mede-werkers' />
          </div>
        </div>
      </>
    );
  } else if (law === 'Energy Efficiency Directive') {
    return (
      <>
        <div className='global-margin'>
          <h2 className='text-green-800 heading-3xl-semibold mb-4'>EED Highlights</h2>
          <p className='mb-16 max-w-xl'>2030 EU Energy Efficiency-doelen</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-12'>
            <HighlightCard
              text='Bindende opgave voor uiteindelijke energiebesparing:'
              number='11.7%'
              circleText=''
            />
            <HighlightCard
              text='Niet-bindende opgave voor primaire energieconsumptie van minder dan:'
              number='992.5'
              circleText='Mtoe'
            />
          </div>
          <p className='my-16 max-w-xl'>Tussentijds, verplichte besparingsdoelen</p>

          <div className='sm:max-w-3xl'>
            <div className='grid grid-cols-2 md:grid-cols-4 mb-6 gap-6 items-start justify-start'>
              <HighlightsSmallCard date='2024-2025' number='1.3%' />
              <HighlightsSmallCard date='2026-2027' number='1.5%' />
              <HighlightsSmallCard date='2028-2030' number='1.9%' />
              <HighlightsSmallCard date='2030-2040' number='1.9%' />
            </div>
          </div>
        </div>
      </>
    );
  } else if (law === 'Single-Use Plastics Directive (SUP)') {
    return (
      <>
        <div className='global-margin'>
          <h2 className='text-green-800 heading-3xl-semibold mb-4'>SUP Highlights</h2>
          <p className='mb-16 max-w-xl'>De SUP richt zich op dit moment op 10 productgroepen:</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
            <HighlightCard text='Wattenstaafjes' icon={sup1} />
            <HighlightCard text='Bestek, borden, rietjes en roerstaafjes' icon={sup2} />
            <HighlightCard text='Ballonnen en stokjes voor ballonnen' icon={sup3} />
            <HighlightCard
              text='Bekers en voedselcontainers van geschuimd polystyreen'
              icon={sup4}
            />
            <HighlightCard text='Kartonnen bekers (vanaf 2024)' icon={sup5} />
            <HighlightCard
              text='Bekers en voedselcontainers van oxo-degradeerbaar plastic'
              icon={sup6}
            />
            <HighlightCard text='Sigarettenpeuken' icon={sup7} />
            <HighlightCard text='Plastic zakken' icon={sup8} />
            <HighlightCard text='Zakjes en wikkels' icon={sup9} />
            <HighlightCard text='Vistuig' icon={sup10} />
          </div>
        </div>
      </>
    );
  } else if (law === 'Construction Products Regulation (CPR)') {
    return (
      <div className='global-margin'>
        <h2 className='text-green-800 heading-3xl-semibold mb-4'>CRP Highlights</h2>
        <p className='mb-12 max-w-xl'>
          De CPR stelt eisen aan de functionaliteit, veiligheid en milieuvriendelijkheid van
          bouwproducten. Zo wordt circulariteit in de bouw gestimuleerd:
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
          <HighlightCard
            text='Voorschriften voor duurzaamheid en milieuvriendelijkheid'
            icon={cpr1}
          />
          <HighlightCard text='Digitaal productpaspoort' icon={cpr2} />
          <HighlightCard text='Standaardisatie van bouwproducten' icon={cpr3} />
          <HighlightCard text='Hergebruik en herfabricage van bouwproducten' icon={cpr4} />
        </div>
      </div>
    );
  } else if (law === 'Ecodesign for Sustainable Products Regulation (ESPR)') {
    return (
      <div className='global-margin'>
        <h2 className='text-green-800 heading-3xl-semibold mb-4'>ESPR Highlights</h2>

        <p className='mb-12 max-w-xl'>
          Op basis van de ESPR worden producteisen gesteld op het gebied van onder andere de
          volgende aspecten.
        </p>
        <div className='max-w-2xl sm:gap-10 mb-12'>
          <HighlightCard
            text='Duurzaamheid, herbruikbaarheid, op waardeerbaarheidrepareerbaarheid, recyclebaarheid, aandeel gerecycled materiaal, energieverbruik en energie-efficiëntie, grondstoffengebruik en grondstoffen-efficiëntie'
            icon={espr}
          />
        </div>
        <p className='my-16 max-w-xl'>
          De producteisen gaan in elk geval gelden voor de volgende productgroepen.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
          <HighlightCard text='Kleding en schoenen' icon={espr1} />
          <HighlightCard text='Meubels' icon={espr2} />
          <HighlightCard text='Banden' icon={espr3} />
          <HighlightCard text='Wasmiddelen' icon={espr4} />
          <HighlightCard text='Verfproducten' icon={espr5} />
          <HighlightCard text='Chemicaliën' icon={espr6} />
          <HighlightCard text='ICT producten' icon={espr7} />
          <HighlightCard text='Electronica' icon={espr8} />
        </div>
      </div>
    );
  }
}
