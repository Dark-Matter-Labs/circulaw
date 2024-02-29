import Image from 'next/image';

export default function HighlightCard({ text, number, circleText, icon }) {
  return (
    <>
      <div className='w-full flex sm:hidden shadow-sm flex-col items-center justify-between bg-white rounded-cl p-4'>
        <div className='w-full flex items-center justify-center text-center'>
          <div className='p-base-semibold mb-4'>{text}</div>
        </div>
        <div className=''>
          <div className='rounded-full bg-[#D1F9EB] border-[12px] border-grey-150 h-36 w-36 flex flex-col items-center justify-center'>
            {number && (
              <>
                <div className='text-center p-5xl-semibold text-green-600'> {number}</div>
                <div className='text-center p-base-semibold text-green-600 max-w-[90px]'>
                  {circleText}
                </div>
              </>
            )}
            {icon && <Image src={icon} alt={text} className='w-[75px] h-[75px]' />}
          </div>
        </div>
      </div>
      <div className='h-[172px] w-auto hidden sm:flex border shadow-sm hover:shadow-md flex-row transition-shadow duration-150 items-center justify-between bg-white rounded-cl'>
        <div className='max-w-[60%]'>
          <div className='w-full mx-4 p-base-semibold'>{text}</div>
        </div>
        <div className=''>
          <div className='mx-4 rounded-full bg-[#D1F9EB] border-[12px] border-grey-150 h-36 w-36 flex flex-col items-center justify-center'>
            {number && (
              <>
                <div className='text-center p-5xl-semibold text-green-600'> {number}</div>
                <div className='text-center p-base-semibold text-green-600 max-w-[90px]'>
                  {circleText}
                </div>
              </>
            )}
            {icon && <Image src={icon} alt={text} className='w-[75px] h-[75px]' />}
          </div>
        </div>
      </div>
    </>
  );
}
