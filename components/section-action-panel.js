import CustomButton from './custom-button';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function ActionPanel(props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='p-2xl-semibold text-green-200'>{props.title}</h3>
        <div className=''>
          <div>
            <div className='mt-2 max-w-xl  p-md text-grey-100'>{props.paragraph}</div>
          </div>
          <div className='mt-5'>
            <Link href={props.buttonLink}>
              <CustomButton color='home'>
                {props.buttonText}&nbsp;
                <ArrowRightIcon className='inline-block mt-0.5 h-4 w-4' aria-hidden='true' />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
