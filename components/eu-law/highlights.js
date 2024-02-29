import HighlightCard from './highlight-card'
import HighlightsSmallCard from './highlights-small-card'
import sup1 from '@/public/eu-sup-icons/sup-1.svg'
import sup2 from '@/public/eu-sup-icons/sup-2.svg'
import sup3 from '@/public/eu-sup-icons/sup-3.svg'
import sup4 from '@/public/eu-sup-icons/sup-4.svg'
import sup5 from '@/public/eu-sup-icons/sup-5.svg'
import sup6 from '@/public/eu-sup-icons/sup-6.svg'
import sup7 from '@/public/eu-sup-icons/sup-7.svg'
import sup8 from '@/public/eu-sup-icons/sup-8.svg'
import sup9 from '@/public/eu-sup-icons/sup-9.svg'
import sup10 from '@/public/eu-sup-icons/sup-10.svg'


export default function Highlights({law}) {
    if (law === 'CSRD') {
        return (
            <>
        <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-4'>CSRD Highlights</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
            <HighlightCard text='Een jaarlijkse omzet van meer dan:' number='€50' circleText='miljoen'/>
            <HighlightCard text='Een balanstotaal van meer dan:' number='€25' circleText='miljoen'/>
            <HighlightCard text='Bedrijven met meer dan:' number='250' circleText='mede-werkers'/>
          </div>
          </div>
            </>
        )
    } else if (law === 'EED') {
        return (
            <>
              <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>EED Highlights 1</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
            <HighlightCard text='Bindende opgave voor uiteindelijke energiebesparing:' number='11.7%' circleText=''/>
            <HighlightCard text='Niet-bindende opgave voor primaire energieconsumptie van minder dan:' number='992.5' circleText='Mtoe'/>
          </div>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>EED Highlights 2</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>

          <div className='sm:max-w-3xl'>
            <div className='grid grid-cols-2 md:grid-cols-4 mb-6 gap-6 items-start justify-start'>
               <HighlightsSmallCard date='2024-2025' number ='1.3%' />
               <HighlightsSmallCard date='2026-2027' number ='1.5%' />
               <HighlightsSmallCard date='2028-2030' number ='1.9%' />
               <HighlightsSmallCard date='2030-2040' number ='1.9%' />
            </div>
          </div>
        </div>
            </>
        )
    } else {
        return (
            <>
            <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>SUP Highlights</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-6 sm:gap-10 mb-6'>
          <HighlightCard text='Wattenstaafjes' icon={sup1}/>
          <HighlightCard text='Bestek, borden, rietjes en roerstaafjes' icon={sup2}/>
          <HighlightCard text='Ballonnen en stokjes voor ballonnen' icon={sup3}/>
          <HighlightCard text='Bekers en voedselcontainers van geschuimd polystyreen' icon={sup4}/>
          <HighlightCard text='Kartonnen bekers (vanaf 2024)' icon={sup5}/>
          <HighlightCard text='Bekers en voedselcontainers van oxo-degradeerbaar plastic' icon={sup6}/>
          <HighlightCard text='Sigarettenpeuken' icon={sup7}/>
          <HighlightCard text='Plastic zakken' icon={sup8}/>
          <HighlightCard text='Zakjes en wikkels' icon={sup9}/>
          <HighlightCard text='Vistuig' icon={sup10}/>

          </div>
        
        </div>
            </>
        )
    }
}