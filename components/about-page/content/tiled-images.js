import ImageComponent from '@/components/image-component';


export default function TiledImages({ data }) {
    return (
        <ul className="mb-[60px] sm:mb-[120px] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
            {data.images.map((image, index) => (
                <li key={index} className={`${index === 1 ? '' : 'flex-col-reverse'} flex flex-col gap-y-2`}>
                    <ImageComponent 
                        image={image}
                        alt={image.caption}
                        className="h-full w-full object-cover"
                        width={500}
                        height={500}
                    />
                    <p className='h-full bg-green-100 rounded-cl p-6 heading-2xl '>
                        {image.caption}
                    </p>
                </li>
            ))}
        </ul>
    )
}