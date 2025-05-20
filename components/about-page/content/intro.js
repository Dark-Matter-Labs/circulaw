import { PortableText } from 'next-sanity';

export default function Intro({ data }) {
  return (
    <div className='mb-[120px]'>
    <PortableText
      value={data.introText}
      components={{
        block: {
          normal: ({ children }) => <p className='heading-3xl'>{children}</p>,
        },
        marks: {
          highlight: ({ children }) => <span className='text-green-400'>{children}</span>,
        },
      }}
    />
    </div>
  );
}
