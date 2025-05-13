import Image from 'next/image';

export default function HighlightCard({ text, number, circleText, icon }) {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-between rounded-cl bg-green-100 p-4 shadow-sm sm:hidden'>
        <div className='flex w-full items-center justify-center text-center'>
          <div className='p-base-semibold mb-4'>{text}</div>
        </div>
        <div className=''>
          <div className='flex h-36 w-36 flex-col items-center justify-center rounded-full border-[12px] border-green-100 bg-[#D1F9EB]'>
            {number && (
              <>
                <div className='heading-2xl-semibold text-center text-green-500'> {number}</div>
                <div className='p-base-semibold max-w-[90px] text-center text-green-500'>
                  {circleText}
                </div>
              </>
            )}
            {icon && <Image src={icon} alt={text} className='h-[75px] w-[75px]' />}
          </div>
        </div>
      </div>
      <div className='hidden h-[172px] w-auto flex-row items-center justify-between rounded-cl border bg-green-100 shadow-sm transition-shadow duration-150 sm:flex'>
        <div className='max-w-[60%]'>
          <div className='p-base-semibold mx-4 w-full'>{text}</div>
        </div>
        <div className=''>
          <div className='mx-4 flex h-36 w-36 flex-col items-center justify-center rounded-full border-[12px] border-green-100 bg-[#D1F9EB]'>
            {number && (
              <>
                <div className='heading-2xl-semibold text-center text-green-500'> {number}</div>
                <div className='p-base-semibold max-w-[90px] text-center text-green-500'>
                  {circleText}
                </div>
              </>
            )}
            {icon && <Image src={icon} alt={text} className='h-[75px] w-[75px]' />}
          </div>
        </div>
      </div>
    </>
  );
}
