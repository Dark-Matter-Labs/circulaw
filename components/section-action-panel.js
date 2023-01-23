import Link from 'next/link';
import CustomButton from './custom-button';

export default function ActionPanel(props) {
  return (
    <div className=''>
      <div className=''>
        <h4 className='mobile sm:desktop text-black-white-200'>{props.title}</h4>
        <div className=''>
          <div>
            <div className='mt-2 max-w-xl p-mobile-md sm:p-desktop-md text-black-white-200'>
              {props.paragraph}
            </div>
          </div>
          <div className='mt-5'>
            <Link href={props.buttonLink}>
              <CustomButton color='home'>{props.buttonText} →</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
