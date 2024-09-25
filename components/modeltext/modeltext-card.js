import { IconArrowRight } from '@tabler/icons-react';

export default function ModelTextCard({ text }) {
  return (
    <div
      key={text.title}
      className='w-[396px] h-full basis-1/3 rounded-cl bg-green-50 shadow-card p-6 flex flex-col justify-between group cursor-pointer text-left'
    >
      <div className='p-2xs px-2 py-1 border border-green-800 w-min rounded-cl mb-6'>
        Omgevingsplan
      </div>
      <h4 className='heading-2xl-semibold mb-8 text-start'>{text.title}</h4>
      <h5 className='heading-xl-semibold'>Toelichting:</h5>
      <p className='line-clamp-3 mb-8 text-start'>{text.descriptionPT}</p>
      <div className='p-base-semibold flex flex-row items-center justify-start group-hover:text-green-300 link-interaction'>
        Modeltekst bekijken <IconArrowRight className='h-5 w-5 ml-2' />
      </div>
    </div>
  );
}
