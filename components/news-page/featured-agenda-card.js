import Tag from '@/components/tag';
import Link from 'next/link';

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
        <Link href={data.link} target='_blank' className='group'>
          <div className='col-span-1 sm:h-80 bg-green-800 rounded-cl flex flex-col justify-between items-center'>
            <div className='px-8 py-6 h-full w-full flex flex-col justify-between gap-y-4 sm:gap-y-0'>
              <div className='w-auto'>
                <div className='flex flex-col justify-between'>
                  <div className='flex grow-0 pb-3'>
                    <Tag classes='text-green-300 border border-green-300'>Agenda</Tag>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div className='p-agenda-card-day text-green-200 mr-2'>
                      {event.toLocaleDateString('nl-NL', day)}
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <div className='p-agenda-card-month text-green-200 tracking-wider ml-0.5'>
                        {event.toLocaleDateString('nl-NL', month)}
                      </div>
                      <div className='p-agenda-card-year text-green-400 tracking-tighter'>
                        {event.toLocaleDateString('nl-NL', year)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='border-green-200 ' />
              <div className='heading-2xl-semibold text-white group-hover:text-green-200 group-hover:underline'>
                {data.newsTitle}
              </div>
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
                <div className='flex flex-row items-center'>
                  <div className='p-agenda-card-day text-green-200 mr-2'>
                    {event.toLocaleDateString('nl-NL', day)}
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <div className='p-agenda-card-month text-green-200 tracking-wider ml-0.5'>
                      {event.toLocaleDateString('nl-NL', month)}
                    </div>
                    <div className='p-agenda-card-year text-green-400 tracking-tighter'>
                      {event.toLocaleDateString('nl-NL', year)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='border-green-200 ' />
            <div className='heading-2xl-semibold text-white '>{data.newsTitle}</div>
          </div>
        </div>
      )}
    </>
  );
}
