import CustomButton from '../custom-button';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function FooterLinkBlock(props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='heading-xl-semibold text-green-200'>{props.title}</h3>
        <div className=''>
          <div>
            <div className='mt-2 max-w-xl p-base text-gray-100'>{props.paragraph}</div>
          </div>
          <div className='mt-5'>
            <Link href={props.buttonLink}>
              <CustomButton color='home'>
                {props.buttonText}&nbsp;
                <IconArrowRight className='inline-block mt-0.5 h-5 w-5' aria-hidden='true' />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
