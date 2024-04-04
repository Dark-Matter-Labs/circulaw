// import desktop svgs
import desktopStep1 from '@/public/eu-status/desktop-two-step/desktop-two-step-1.svg';
import desktopStep2 from '@/public/eu-status/desktop-two-step/desktop-two-step-2.svg';
import desktopStep3 from '@/public/eu-status/desktop-two-step/desktop-two-step-3.svg';
import desktopStep4 from '@/public/eu-status/desktop-two-step/desktop-two-step-4.svg';
// import mobile svgs
import mobileStep1 from '@/public/eu-status/mobile-two-step/mobile-two-step-1.svg';
import mobileStep2 from '@/public/eu-status/mobile-two-step/mobile-two-step-2.svg';
import mobileStep3 from '@/public/eu-status/mobile-two-step/mobile-two-step-3.svg';
import mobileStep4 from '@/public/eu-status/mobile-two-step/mobile-two-step-4.svg';
import Image from 'next/image';

export default function StatusTwoStep({ status }) {
  if (status === 'In negotiations A') {
    return (
      <>
        <Image className='hidden sm:block' src={desktopStep1} alt='' />
        <Image className='block sm:hidden' src={mobileStep1} alt='' />
      </>
    );
  } else if (status === 'In negotiations B') {
    return (
      <>
        <Image className='hidden sm:block' src={desktopStep2} alt='' />
        <Image className='block sm:hidden' src={mobileStep2} alt='' />
      </>
    );
  } else if (status === 'Adopted A') {
    return (
      <>
        <Image className='hidden sm:block' src={desktopStep3} alt='' />
        <Image className='block sm:hidden' src={mobileStep3} alt='' />
      </>
    );
  } else {
    return (
      <>
        <Image className='hidden sm:block' src={desktopStep4} alt='' />
        <Image className='block sm:hidden' src={mobileStep4} alt='' />
      </>
    );
  }
}
