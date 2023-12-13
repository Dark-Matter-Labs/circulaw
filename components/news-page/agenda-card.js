import Tag from '../tag';

// add featured prop to change the design depending on if it is featured. 

export default function AgendaCard() {
  return (
    <>
      <div className='col-span-1 h-80 bg-green-800 rounded-cl flex flex-col justify-between items-center'>
        <div className='px-8 py-6 h-full w-full flex flex-col justify-between'>
          <div className='w-auto'>
            <div className='flex flex-col justify-between'>
                <div className='flex grow-0 pb-3'>
              <Tag classes='text-green-300 border border-green-300'>Agenda</Tag>
              </div>
              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='p-7xl-bold text-green-200'>24</div>
                <div className='flex flex-col items-start justify-between'>
                  <div className='p-6xl-bold text-green-200'>august</div>
                  <div className='p-5xl-bold text-green-300'>2024</div>
                </div>
              </div>
            </div>
          </div>
          <hr className='border-green-200 ' />
          <div className='p-4xl-semibold text-white'>
            CircuLaw presenteert op het jaarevent van C-creators
          </div>
        </div>
      </div>
    </>
  );
}
