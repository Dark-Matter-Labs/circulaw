import Link from 'next/link';
import CustomButton from './custom-button';

export default function ActionPanel(props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='mobile sm:desktop text-black-white-200'>{props.title}</h3>
        <div className=''>
          <div>
            <div className='mt-2 max-w-xl  p-base text-black-white-200'>{props.paragraph}</div>
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
