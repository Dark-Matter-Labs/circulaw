import TitleDecorator from '@/components/title-decorator';

export default function Testimonials({ data }) {
  return (
    <div className='mb-[60px] sm:mb-[120px]'>
      <ul className='flex flex-col gap-y-10'>
        {data?.testimonials.map((testimonial, index) => (
          <li
            key={index}
            className='grid grid-cols-1 items-center justify-between gap-y-8 rounded-cl border border-green-400 p-8 sm:grid-cols-2 sm:gap-20 lg:gap-40'
          >
            <div className='relative'>
              <div className='absolute -top-0 left-2 font-jakarta text-[40px] font-bold leading-none text-green-600 sm:left-1 sm:text-[50px]'>
                &quot;
              </div>
              <div className='pl-8'>
                <p className='heading-xl sm:heading-2xl leading-relaxed'>
                  {testimonial.content}
                  <span className='ml-1 inline-block align-top leading-none'>
                    <span className='block font-jakarta text-[40px] font-bold leading-[1] text-green-600 sm:text-[50px]'>
                      &quot;
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className='pl-8 sm:pl-0'>
              <h3 className='heading-3xl-semibold mb-2 text-green-500'>{testimonial.name}</h3>
              <h4 className='heading-xl text-cl-dark-grey'>{testimonial.role}</h4>
              <TitleDecorator width='w-1/3' colour='bg-green-500' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
