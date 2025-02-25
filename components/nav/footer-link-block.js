import Link from 'next/link';

import { IconArrowRight } from '@tabler/icons-react';

import CustomButton from '../custom-button';

export default function FooterLinkBlock(props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='heading-xl-semibold text-green-300'>{props.title}</h3>
        <div className=''>
          <div>
            <div className='p-base mt-2 max-w-xl text-gray-100'>{props.paragraph}</div>
          </div>
          <div className='mt-5'>
            <Link href={props.buttonLink}>
              <CustomButton color='home'>
                {props.buttonText}&nbsp;
                <IconArrowRight className='mt-0.5 inline-block h-5 w-5' aria-hidden='true' />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
