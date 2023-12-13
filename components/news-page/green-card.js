
import Tag from '../tag'

// if image make col span two. 
// if featured make h-80 if not make height auto

export default function GreenCard() {
    return (
        <div className='h-80 col-span-1 rounded-cl bg-green-500 flex flex-col gap-3 justify-between items-start px-8 py-6'>
            <div>
            <div className='flex grow-0'>
            <Tag classes='text-white bg-green-800'>Tag</Tag>
            </div>
            <div className='p-4xl-semibold text-white py-0.5'>
            Artikel over CircuLaw op Dark Matter Lab

            </div>
            <div className='p-xs-semibold'>
                    16 dec 2022
            </div>
            </div>
            <div className='p-base text-green-800 line-clamp-4'>
            Lees het artikel wat geschreven is op de website van partnerorganisatei Dark Matter Lab. We zijn super excited om hier mee aan de slag te gaan!
            </div>
            <div className='self-end p-lg-semibold'>
                button {'>'}
            </div>
        </div>
    )
}