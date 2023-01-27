import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Layout from '/components/layouts/templayout';
import launchImage from '../public/launch.png';

export default function TempIndex() {
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 py-10'>
        <div className='global-margin'>
          <a href='https://circl.nl/programma/circulaw-regelgeving-voor-een-circulaire-economie'>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-x-8 gap-y-4'>
              <div>
                <Image src={launchImage} width={556} alt='image for wat circulaw' />
              </div>
              <div>
                <h2 className='mobile sm:desktop'>Het event</h2>
                <p className=' p-lg py-5 max-w-4xl'>
                  Met experts vanuit overheid, bedrijfsleven en kennisinstituten gaan we rond de
                  tafel om te praten over de cruciale rol van ‘activerende regelgeving’ in de
                  transitie naar een circulaire economie. En over CircuLaw, het kennisplatform dat
                  inzicht en handelingsperspectief biedt in wet-en regelgeving zodat
                  beleidsmedewerkers ermee aan de slag kunnen. We nodigen jou uit om dat gesprek
                  online bij te wonen, op 8 februari van 10 tot 11.30 uur.
                </p>
                <span className='text-green-500  link-lg'>
                  Ja, ik wil dit event bijwonen{' '}
                  <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
