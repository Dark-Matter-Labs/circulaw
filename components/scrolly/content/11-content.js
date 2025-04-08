
import NewButton from '@/components/shared/new-button';

export default function ContentEleven({ scrollPosition }) {
  return (
    <div
      className={`${
        scrollPosition < 11000 ? 'hidden' : ''
      } flex max-w-[290px] flex-col gap-y-6 text-green-500`}
    >
      <h3 className='heading-2xl-semibold'>Modelteksten voor een omgevingsplan</h3>
      <p className='p-base'>
        Voor een omgevingsplan heeft CircuLaw kant en klare teksten opgesteld die de gebruikers
        kunnen overnemen: de planregels.
      </p>
      <p className='p-base'>Dit zijn dus modelteksten voor een omgevingplan.</p>
      <NewButton variant='secondaryDark' href='/bouw/planregels/modelteksten' icon='arrowRight'>
      Bekijk de modelteksten
      </NewButton>
   
    </div>
  );
}
