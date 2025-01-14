import CustomButton from '@/components/custom-button';
import Link from 'next/link';

export default function LearningLandingPage() {
  return (
    <div className=''>
      <div className='bg-green-600 h-72 my-3'>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <div className='bg-gray-100 h-6 mt-6 flex items-center rounded-clSm'>
            <Link
              href='/'
              className='p-2xs-bold flex pl-2 flex-row items-center text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold text-green-600 px-2'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-100 heading-2xl-semibold sm:heading-5xl-semibold'>
              Learning is so much FUN!
            </h1>
          </div>
        </div>
      </div>
      <div className='min-h-60 global-margin'>
        <div className='max-w-[700px]'>
          <h2 className='heading-3xl-semibold my-10'>Come learn about round laws</h2>
          <p className='p-base mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare enim enim,
            eu sodales ex pulvinar venenatis. Maecenas non urna et diam lacinia dignissim nec sed
            leo. Quisque at aliquet diam, sed tristique turpis. Curabitur nec tristique quam, id
            vulputate nunc. Ut lobortis vitae nulla sed maximus. Nunc dignissim sollicitudin massa.
            Quisque faucibus viverra elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce vitae purus quis lacus volutpat bibendum. Morbi nisl augue, iaculis ac
            viverra nec, posuere ac metus. Mauris laoreet purus eros. Donec porttitor lorem nisi,
            sed euismod magna egestas id. Aliquam ut orci vitae metus imperdiet posuere vitae
            dapibus orci. Morbi faucibus rutrum sem sit amet posuere.
          </p>
          <p className='p-base mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare enim enim,
            eu sodales ex pulvinar venenatis. Maecenas non urna et diam lacinia dignissim nec sed
            leo. Quisque at aliquet diam, sed tristique turpis. Curabitur nec tristique quam, id
            vulputate nunc. Ut lobortis vitae nulla sed maximus. Nunc dignissim sollicitudin massa.
            Quisque faucibus viverra elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce vitae purus quis lacus volutpat bibendum. Morbi nisl augue, iaculis ac
            viverra nec, posuere ac metus. Mauris laoreet purus eros. Donec porttitor lorem nisi,
            sed euismod magna egestas id. Aliquam ut orci vitae metus imperdiet posuere vitae
            dapibus orci. Morbi faucibus rutrum sem sit amet posuere.
          </p>
          <div className='my-12'>
            <CustomButton color='whiteBackground'>
              <Link href='/training/aanmelden'>CTA to fill in form</Link>
            </CustomButton>
          </div>

          <button></button>
        </div>
      </div>
    </div>
  );
}
