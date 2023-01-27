import Image from 'next/image';
import Link from 'next/link';
import logo1 from '../public/logo_partners/CircuLawPartners-01.svg';
import logo2 from '../public/logo_partners/CircuLawPartners-02.svg';
import logo3 from '../public/logo_partners/CircuLawPartners-03.svg';
import logo4 from '../public/logo_partners/CircuLawPartners-04.svg';
import logo5 from '../public/logo_partners/CircuLawPartners-05.svg';
import logo6 from '../public/logo_partners/CircuLawPartners-06.svg';
import logo7 from '../public/logo_partners/CircuLawPartners-07.svg';
import logo8 from '../public/logo_partners/CircuLawPartners-08.svg';
import logo9 from '../public/logo_partners/CircuLawPartners-09.svg';
import logo10 from '../public/logo_partners/CircuLawPartners-10.svg';
import logo11 from '../public/logo_partners/CircuLawPartners-15.svg';
import logo12 from '../public/logo_partners/CircuLawPartners-11.svg';
import logo13 from '../public/logo_partners/CircuLawPartners-12.svg';
import logo14 from '../public/logo_partners/CircuLawPartners-13.svg';
import logo15 from '../public/logo_partners/CircuLawPartners-14.svg';

export default function FooterTemp() {
  return (
    <footer className='' aria-labelledby='footer-heading'>
      <div className='bg-green-800 pt-10 pb-2'>
        {/* TODO: add image alt tags */}
        <div className='global-margin pb-12 px-4 lg:pb-16'>
          <div className='grid grid-cols-3 gap-x-0.5 gap-y-4 lg:grid-cols-5'>
            <div className='col-span-1 flex justify-center  py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://www.amsterdam.nl/' rel='noopener noreferrer'>
                <Image src={logo1} alt='Gemeente Amsterdam logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://darkmatterlabs.org/' rel='noopener noreferrer'>
                <Image src={logo2} alt='Dark Matter Labs logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 lg:border-r border-black-white-200'>
              <a target='_blank' href='https://www.climate-kic.org/' rel='noopener noreferrer'>
                <Image src={logo3} alt='Climate-KIC logo' />
              </a>
            </div>
            <div className='col-span-3 block lg:hidden'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://builtbn.org/' rel='noopener noreferrer'>
                <Image src={logo4} alt='Built by Nature logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200 lg:border-0'>
              <a target='_blank' href='https://www.ams-institute.org/' rel='noopener noreferrer'>
                <Image
                  src={logo5}
                  alt='Amsterdam Institute for Advanced Metropolitan Solutions logo'
                />
              </a>
            </div>
            <div className='col-span-5  hidden lg:block'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-centerpy-4 px-4 lg:py-8 lg:px-8 lg:border-r border-black-white-200'>
              <a
                target='_blank'
                href='https://circulairebouweconomie.nl/'
                rel='noopener noreferrer'
              >
                <Image src={logo6} alt='De Circulaire Bouweconomie logo' />
              </a>
            </div>
            <div className='col-span-3 block lg:hidden'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://www.noord-holland.nl/' rel='noopener noreferrer'>
                <Image src={logo7} alt='Provincie Noord-Holland logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://www.flevoland.nl/' rel='noopener noreferrer'>
                <Image src={logo8} alt='Provincie Flevoland logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 lg:border-r border-black-white-200'>
              <a target='_blank' href='https://www.rvo.nl/' rel='noopener noreferrer'>
                <Image src={logo9} alt='Rijksdienst voor Ondernemend logo' />
              </a>
            </div>
            <div className='col-span-3 block lg:hidden'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200 lg:border-0'>
              <a
                target='_blank'
                href='https://www.rijksoverheid.nl/ministeries/ministerie-van-financien'
                rel='noopener noreferrer'
              >
                <Image src={logo10} alt='Ministerie van Financiën logo' />
              </a>
            </div>
            <div className='col-span-5 hidden lg:block'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a
                target='_blank'
                href='https://vu.nl/nl '
                rel='noopener noreferrer'
              >
                <Image src={logo11} alt='Wageningen University & Research logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 lg:border-r border-black-white-200'>
              <a target='_blank' href='https://www.uva.nl/' rel='noopener noreferrer'>
                <Image src={logo12} alt='TU Delft logo' />
              </a>
            </div>
            <div className='col-span-3 block lg:hidden'>
              <hr className='border-black-white-200' />
            </div>
            <div className='col-span-1 flex justify-centerpy-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='https://www.wur.nl/nl/wageningen-university.htm' rel='noopener noreferrer'>
                <Image src={logo13} alt='Erasmus Universiteit Rotterdam logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200'>
              <a target='_blank' href='http://tudelft.nl/' rel='noopener noreferrer'>
                <Image src={logo14} alt='Vrije Universiteit Amsterdam logo' />
              </a>
            </div>
            <div className='col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 '>
              <a target='_blank' href='https://www.eur.nl/' rel='noopener noreferrer'>
                <Image src={logo15} alt='Universiteit van Amsterdam logo' />
              </a>
            </div>
          </div>
        </div>
        <div className='global-margin pb-2 text-black-white-200  p-lg'>
          <p className='pb-8'>
            Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
            techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
            incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
            rechten kunnen worden ontleend. We horen graag wat je ervan vindt, wat je anders zou
            willen, wat je mist en natuurlijk horen we ook graag waar je blij van wordt.{' '}
            <Link href='/contact'>
              <span className='underline'>Stuur je feedback op deze testversie.</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
