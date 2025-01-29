import { IconArrowRight } from '@tabler/icons-react';

export default function ModelTextCard({ text }) {
  return (
    <div
      key={text.title}
      className='group flex h-full w-[366px] flex-grow basis-1/3 cursor-pointer flex-col rounded-cl bg-green-50 p-6 text-left shadow-card'
    >
      <div className='p-2xs-semibold mb-6 w-min rounded-cl border border-green-800 px-2 py-1'>
        Omgevingsplan
      </div>
      <h4 className='heading-2xl-semibold mb-6 min-h-[68px] text-start'>{text.title}</h4>
      <h5 className='heading-xl-semibold'>Toelichting:</h5>
      <p className='mb-6 line-clamp-3 min-h-[72px] text-start'>{text.descriptionPT}</p>
      <div className='p-base-semibold link-interaction flex flex-row items-center justify-start group-hover:text-green-300'>
        Modeltekst bekijken <IconArrowRight className='ml-0.5 h-5 w-5' />
      </div>
    </div>
  );
}
