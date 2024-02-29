import HighlightCard from './highlight-card'


export default function Highlights({law}) {
    if (law === 'EED') {
        return (
            <>
        <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-4'>Title 1</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lgNav:grid-cols-3 gap-10 mb-6'>
            <HighlightCard text='Een jaarlijkse omzet van meer dan:' number='€50' circleText='miljoen'/>
            <HighlightCard text='Een balanstotaal van meer dan:' number='€25' circleText='miljoen'/>
            <HighlightCard text='Bedrijven met meer dan:' number='250' circleText='mede-werkers'/>
          </div>
          <h2 className='text-green-800 p-6xl-semibold mb-4'>Title 2</h2>
          <p className='mb-6 max-w-xl'>paragraph text not too long. paragraph text not too long.paragraph text not too long.paragraph text not too long.paragraph text not too long.</p>

          <div className=''>some cards and stats here</div>
        </div>
            </>
        )
    } else if (law === 'SUP') {
        return (
            <>
              <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 1</h2>
          <div className='h-32'>some cards and stats here</div>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 2</h2>
          <div className='h-32'>some cards and stats here</div>
        </div>
            </>
        )
    } else {
        return (
            <>
            <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 1</h2>
          <div className='h-32'>some cards and stats here</div>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 2</h2>
          <div className='h-32'>some cards and stats here</div>
        </div>
            </>
        )
    }
}