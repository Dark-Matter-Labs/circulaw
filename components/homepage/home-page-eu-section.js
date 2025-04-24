import ImageComponent from '../image-component';
import NewButton from '../shared/new-button';
import TitleDecorator from '../title-decorator';

export default function HomePageEUSection({ euData }) {
  return (
    <div className='flex flex-col items-center justify-between gap-x-20 gap-y-16 sm:flex-row'>
      <div className='relative basis-1/2'>
        <ImageComponent image={euData?.image} caption='' />
      </div>
      <div className='flex w-full basis-1/2 flex-col'>
        <h2 className='heading-3xl-semibold sm:heading-5xl-semibold sm:heading-5xl-semibold text-green-500'>
          EU wetgeving
        </h2>
        <TitleDecorator width='w-1/4' />
        <div className='heading-xl pb-8 pt-10'>
          <p>{euData.euLaw}</p>
        </div>
        <NewButton variant='primaryDark' icon='arrowRight' href='/eu-wetgeving'>
          Bekijk de EU wetgeving
        </NewButton>
      </div>
    </div>
  );
}
