import Link from 'next/link';

export default function ForumPage() {
  return (
    <div>
      <div className='bg-green-600 h-72 my-3'>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <div className='bg-gray-100 h-6 mt-6 flex items-center rounded-clSm'>
            <Link
              href='/'
              className='p-2xs-bold flex pl-2 flex-row items-center text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold text-green-600 px-2'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-100 heading-2xl-semibold sm:heading-5xl-semibold'>
              lets talk about what we learnt! 
            </h1>
          </div>
        </div>
      </div>
      <div className='min-h-60 global-margin'>
      <div className='max-w-[700px]'>
      <h2 className='heading-3xl-semibold my-10'>Come talk about round laws</h2></div>

      </div>
    </div>
  );
}
