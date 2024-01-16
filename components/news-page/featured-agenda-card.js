import Link from 'next/link';
import Tag from '../tag';

export default function FeaturedAgendaCard({ data }) {
  // seperate date
  const event = new Date(data.newsDate);
  const day = {
    day: 'numeric',
  };
  const month = {
    month: 'long',
  };
  const year = {
    year: 'numeric',
  };
  return (
    <>
      {data.link && (
        <Link href={data.link}>
          <div className='col-span-1 sm:h-80 bg-green-800 rounded-cl flex flex-col justify-between items-center'>
            <div className='px-8 py-6 h-full w-full flex flex-col justify-between gap-y-4 sm:gap-y-0'>
              <div className='w-auto'>
                <div className='flex flex-col justify-between'>
                  <div className='flex grow-0 pb-3'>
                    <Tag classes='text-green-300 border border-green-300'>Agenda</Tag>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-4'>
                    <div className='p-7xl-bold text-green-200'>
                      {event.toLocaleDateString('de-DE', day)}
                    </div>
                    <div className='flex flex-col items-start justify-between'>
                      <div className='p-6xl-bold text-green-200'>
                        {event.toLocaleDateString('de-DE', month)}
                      </div>
                      <div className='p-5xl-bold text-green-300'>
                        {event.toLocaleDateString('de-DE', year)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='border-green-200 ' />
              <div className='p-4xl-semibold text-white'>{data.newsTitle}</div>
            </div>
          </div>
        </Link>
      )}

      {!data.link && (
        <div className='col-span-1 sm:h-80 bg-green-800 rounded-cl flex flex-col justify-between items-center'>
          <div className='px-8 py-6 h-full w-full flex flex-col justify-between gap-y-4 sm:gap-y-0'>
            <div className='w-auto'>
              <div className='flex flex-col justify-between'>
                <div className='flex grow-0 pb-3'>
                  <Tag classes='text-green-300 border border-green-300'>Agenda</Tag>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                  <div className='p-7xl-bold text-green-200'>
                    {event.toLocaleDateString('de-DE', day)}
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='p-6xl-bold text-green-200'>
                      {event.toLocaleDateString('de-DE', month)}
                    </div>
                    <div className='p-5xl-bold text-green-300'>
                      {event.toLocaleDateString('de-DE', year)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='border-green-200 ' />
            <div className='p-4xl-semibold text-white'>{data.newsTitle}</div>
          </div>
        </div>
      )}
    </>
  );
}
