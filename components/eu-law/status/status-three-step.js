import Image from 'next/image'

// import desktop svgs
import desktopStep1 from '@/public/eu-status/desktop-three-step/desktop-three-step-1.svg'
import desktopStep2 from '@/public/eu-status/desktop-three-step/desktop-three-step-2.svg'
import desktopStep3 from '@/public/eu-status/desktop-three-step/desktop-three-step-3.svg'
import desktopStep4 from '@/public/eu-status/desktop-three-step/desktop-three-step-4.svg'
import desktopStep5 from '@/public/eu-status/desktop-three-step/desktop-three-step-5.svg'
import desktopStep6 from '@/public/eu-status/desktop-three-step/desktop-three-step-6.svg'

// import mobile svgs
import mobileStep1 from '@/public/eu-status/mobile-three-step/mobile-three-step-1.svg'
import mobileStep2 from '@/public/eu-status/mobile-three-step/mobile-three-step-2.svg'
import mobileStep3 from '@/public/eu-status/mobile-three-step/mobile-three-step-3.svg'
import mobileStep4 from '@/public/eu-status/mobile-three-step/mobile-three-step-4.svg'
import mobileStep5 from '@/public/eu-status/mobile-three-step/mobile-three-step-5.svg'
import mobileStep6 from '@/public/eu-status/mobile-three-step/mobile-three-step-6.svg'



export default function StatusThreeStep({ status }) {
    if (status === 'In negotiations A') {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep1} alt='' />
        <Image className='block sm:hidden' src={mobileStep1} alt=''/>
        </>

      )
    } else if (status === 'In negotiations B') {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep2} alt='' />
        <Image className='block sm:hidden' src={mobileStep2} alt=''/>
        </>
      )
    } else if (status === 'Adopted A') {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep3} alt='' />
        <Image className='block sm:hidden' src={mobileStep3} alt=''/>
        </>
      )
    } else if (status === 'Adopted B') {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep4} alt='' />
        <Image className='block sm:hidden' src={mobileStep4} alt=''/>
        </>
      )
    } else if (status === 'Transposed A') {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep5} alt='' />
        <Image className='block sm:hidden' src={mobileStep5} alt=''/>
        </>
      )
    } else {
      return (
        <>       
        <Image className='hidden sm:block' src={desktopStep6} alt='' />
        <Image className='block sm:hidden' src={mobileStep6} alt=''/>
        </>
      )
    }
  }
  