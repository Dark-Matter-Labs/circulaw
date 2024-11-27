import { IconDotsVertical, IconMouse } from '@tabler/icons-react';

export default function ContentOne({screenHeight}) {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[290px]'>
      <h3 className='heading-2xl-semibold'>
        1.1 Circulair bouwen: meer effect met een mix van instrumenten
      </h3>
      <p className='p-base'>
        Wil je werkelijk <span className='p-base-semibold'>impact</span> maken? Zet dan een{' '}
        <span className='p-base-semibold'>mix van instrumenten</span> in.
      </p>
      <p className='p-base'>
        De instrumenten van de Omgevingswet staan niet op zichzelf, maar maken onderdeel uit van een{' '}
        <span className='p-base-semibold'>beleidscyclus.</span>
      </p>
      <div className={`${screenHeight < 1080 ? 'h-44' : 'h-72'} w-full flex flex-col items-center justify-end pb-4 mt-10 bg-gradient-to-b from-[#F6FEFB30]/20 to-[#D3F3E8]/20 rounded-cl`}>
        <IconMouse className='h-8 w-8' />
        <IconDotsVertical className='h-6 w-6 mb-4' />
        <p className='p-base-semibold text-center px-6'>
         Scroll verder voor het hele verhaal
        </p>
      </div>
    </div>
  );
}
