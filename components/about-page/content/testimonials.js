import TitleDecorator from '@/components/title-decorator';
import { IconQuoteFilled } from '@tabler/icons-react';

export default function Testimonials({ data }) {
    return (
        <div className='mb-[60px] sm:mb-[120px]'>
            <ul className='flex flex-col gap-y-10'>
                {data?.testimonials.map((testimonial, index) => (
                    <li key={index} className='grid grid-cols-2 gap-40 justify-between items-center border border-green-400 p-8 rounded-cl'>
                        <div className='relative'>
                            <IconQuoteFilled className='size-10 text-green-500 mb-4 rotate-180 absolute -top-5 -left-10' />
                             <p className='heading-2xl max-w-[500px]'>{testimonial.content}</p>
                            <IconQuoteFilled className='size-10 text-green-500 mb-4 absolute -bottom-5 -right-3' />
                        </div>
                         <div>
                        <h3 className='heading-3xl-semibold text-green-500'>{testimonial.name}</h3>
                        <h4 className="heading-xl text-cl-dark-grey">{testimonial.role}</h4>
                        <TitleDecorator width='w-1/3' colour='bg-green-500' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
