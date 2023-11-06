

export default function ExpertisePageInstrument({instrument}) {
    return (
        <>
       <li className='flex flex-row justify-between first:border-t-0 border-b hover:bg-green-100'>
                  <div className='py-3 border-black basis-1/2 ml-3'>{instrument.titel}</div>
                  <div className='flex flex-row items-center justify-between p-md basis-1/2 mr-3'>
                    <div className='w-[60px] mr-4'></div>
                    <div className='w-[115px] mr-4'>
                    {instrument.overheidslaag.includes('Gemeentelijk') && 
                    <div className='h-4 w-4 bg-green-600 rounded-full'></div>}
                    </div>
                    <div className='w-[100px] mr-4'>
                     {instrument.overheidslaag.includes('Provinciaal') && 
                    <div className='h-4 w-4 bg-green-400 rounded-full'></div>}
                    </div>
                    <div className='w-[90px]'>
                    {instrument.overheidslaag.includes('Nationaal') && 
                    <div className='h-4 w-4 bg-green-200 rounded-full'></div>}
                    </div>
                  </div>
                </li>
        </>
    )
}