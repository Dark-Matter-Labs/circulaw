import Link from 'next/link';

export default function SamenhangSingleInstrument({ law, index }) {
  return (
    <div key={index} className='w-full h-12 border flex justify-between items-center'>
      <Link href={`/bouw/houtbouw-stimuleren/instruments/${law.slug}`}>
        <h4 className='mobile sm:desktop link-interaction pl-2'>{law.titel}</h4>
      </Link>
      <div className='flex items-center justify-center'>
        {law.overheidslaag.includes('Nationaal') && (
          <div className='rounded-full h-8 w-8 mx-1 bg-green-200 flex items-center justify-center'>
            N
          </div>
        )}
        {law.overheidslaag.includes('Provinciaal') && (
          <div className='rounded-full h-8 w-8 mx-1 bg-green-300 flex items-center justify-center'>
            P
          </div>
        )}
        {law.overheidslaag.includes('Gemeentelijk') && (
          <div className='rounded-full h-8 w-8 mx-1 bg-green-400 flex items-center justify-center'>
            G
          </div>
        )}
      </div>
    </div>
  );
}
