import CustomButton from '@/components/custom-button';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function ContentEleven({ scrollPosition }) {
  return (
    <div
      className={`${
        scrollPosition < 11000 ? 'hidden' : ''
      } text-green-600 flex flex-col gap-y-6 max-w-[290px]`}
    >
      <h3 className='heading-2xl-semibold'>Modelteksten voor een omgevingsplan</h3>
      <p className='p-base'>
        Voor een omgevingsplan heeft CircuLaw kant en klare teksten opgesteld die de gebruikers
        kunnen overnemen: de planregels.
      </p>
      <p className='p-base'>Dit zijn dus modelteksten voor een omgevingplan.</p>
      <Link href='/bouw/planregels/modelteksten'>
        <CustomButton color='whiteBackground'>
          Bekijk de modelteksten <IconArrowRight />
        </CustomButton>
      </Link>
    </div>
  );
}
