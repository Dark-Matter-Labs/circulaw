
import Tag from '../tag'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
// if image make col span two. 
// if featured make h-80 if not make height auto

export default function GreenCard({data}) {
    
    return (
        <div className={`${data.image ? 'col-span-2 flex-cols-2 px-6' : 'col-span-1 flex-col px-8 gap-3'} h-80  rounded-cl bg-green-500 flex   justify-between items-start  py-6`}>
           <div className={`${data.image ? 'mr-2' : ''} w-full`}>
            <div className=''>
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
            {data.image && 
            <div className='w-full h-80 pl-12 -my-6 -mr-6  relative object-cover rounded-r-cl'>
                <Image 
                    src={urlFor(data?.image)?.url()}
                    alt={data?.newsTitle + 'image'}
                    fill
                    className='w-full h-full absolute rounded-r-cl '
                />
            </div>}
        </div>
    )
}