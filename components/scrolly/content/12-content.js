import CustomButton from '@/components/custom-button';
import { IconArrowRight } from '@tabler/icons-react';

export default function ContentTwelve() {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[270px]'>
      <h3 className='heading-2xl-semibold'>4.1 Modelteksten voor een omgevingsplan</h3>
      <p className='p-base'>
      Voor een omgevingsplan heeft CircuLaw kant en klare teksten opgesteld die de gebruikers kunnen overnemen: de planregels. 
      </p>
      <p className='p-base'>
      Dit zijn dus modelteksten voor een omgevingplan.
      </p>
      <CustomButton color='whiteBackground'>
      Bekijk de modelteksten <IconArrowRight />
      </CustomButton>
    </div>
  );
}
