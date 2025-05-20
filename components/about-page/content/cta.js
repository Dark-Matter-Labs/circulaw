import NewButton from '@/components/shared/new-button';
import TitleDecorator from '@/components/title-decorator';

export default function Cta({ data }) {
  return (
    <div className='mb-[60px] sm:mb-[120px] flex flex-col sm:flex-row gap-x-[160px] rounded-cl bg-green-100 px-6 sm:px-16 py-[40px] sm:py-14'>
      <div className='max-w-[350px] mb-4 sm:mb-0'>
        <h3 className='heading-3xl-semibold sm:heading-5xl-semibold text-green-500'>{data?.title}</h3>
        <div className='mb-2'>
          <TitleDecorator width='w-1/4' colour='bg-green-500' />
        </div>
      </div>
      <div className='flex max-w-[500px] flex-col'>
        <p className='heading-xl sm:heading-2xl mb-10 text-green-500'>{data?.ctaText}</p>
        <NewButton href='/' variant='primaryDark' icon='arrowRight'>
          {data?.linkText}
        </NewButton>
      </div>
    </div>
  );
}
