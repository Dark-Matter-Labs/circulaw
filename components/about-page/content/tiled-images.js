import ImageComponent from '@/components/image-component';

export default function TiledImages({ data }) {
  return (
    <ul className='mb-[60px] grid grid-cols-1 gap-2 sm:mb-[120px] sm:grid-cols-3 sm:gap-4'>
      {data.images.map((image, index) => (
        <li
          key={index}
          className={`${index === 1 ? '' : 'flex-col-reverse'} flex flex-col gap-y-2`}
        >
          <ImageComponent
            image={image}
            alt={image.caption}
            className='h-full w-full object-cover'
            width={500}
            height={500}
          />
          <p className='heading-2xl h-full rounded-cl bg-green-100 p-6'>{image.caption}</p>
        </li>
      ))}
    </ul>
  );
}
