import Image from 'next/image';
import Link from 'next/link';
import logo1 from '../public/logo_partners/CircuLawPartners-01.png';
import logo2 from '../public/logo_partners/CircuLawPartners-02.png';
import logo3 from '../public/logo_partners/CircuLawPartners-03.png';
import logo4 from '../public/logo_partners/CircuLawPartners-04.png';
import logo5 from '../public/logo_partners/CircuLawPartners-05.png';
import logo6 from '../public/logo_partners/CircuLawPartners-06.png';
import logo7 from '../public/logo_partners/CircuLawPartners-07.png';
import logo8 from '../public/logo_partners/CircuLawPartners-08.png';
import logo9 from '../public/logo_partners/CircuLawPartners-09.png';
import logo10 from '../public/logo_partners/CircuLawPartners-10.png';
import logo11 from '../public/logo_partners/CircuLawPartners-15.png';
import logo12 from '../public/logo_partners/CircuLawPartners-11.png';
import logo13 from '../public/logo_partners/CircuLawPartners-12.png';
import logo14 from '../public/logo_partners/CircuLawPartners-13.png';
import logo15 from '../public/logo_partners/CircuLawPartners-14.png';

const navigation = {
  WAARDEKETENS: [
    { name: 'Houtbouw', href: '/houtbouw', className: 'text-white1' },
    {
      name: 'Circulaire windturbines',
      href: '/circulaire-windturbines',
      className: 'text-white1',
    },
  ],
  OVER: [
    {
      name: 'Waarom CircuLaw?',
      href: '/waarom-circulaw',
      className: 'text-white1',
    },
    {
      name: 'Wat is CircuLaw?',
      href: '/wat-is-circulaw',
      className: 'text-white1',
    },
    {
      name: 'Wat vind je nu op CircuLaw?',
      href: '/status-en-ambities',
      className: 'text-white1',
    },
    {
      name: 'Wetsanalyse vanuit circulaire blik',
      href: '/wetsanalyse-met-circulaire-blik',
      className: 'text-white1',
    },
    {
      name: 'Wie maken CircuLaw?',
      href: '/wie-maken-circulaw',
      className: 'text-white1',
    },
  ],

  other: [
    { name: 'Veel gestelde vragen', href: '/hoe-het-werkt', className: '' },
    { name: 'Contact', href: '/contact', className: '' },
    { name: 'Disclaimer/Alpha', href: '/alpha', className: '' },
    { name: 'Privacy', href: '/privacy-policy', className: '' },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-green1' aria-labelledby='footer-heading'>
      <div className='global-margin pt-12 lg:pt-16 lg:px-8'>
        <div className='pb-8'>
          <div className='grid grid-cols-1 gap-8 sm:col-span-3'>
            <div className='sm:grid sm:grid-cols-4 md:gap-8'>
              <div className=''>
                <p className='text-sm text-green3 font-publicSans font-bold tracking-wider uppercase pb-4 sm:pb-0 '>
                  THEMA’S
                </p>
                <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.WAARDEKETENS.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`text-base hover:text-green3 ${item.className}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className=''>
                <p className='text-sm text-green3 font-publicSans font-bold tracking-wider uppercase pb-4 sm:pb-0'>
                  OVER CIRCULAW
                </p>
                <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.OVER.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`text-base hover:text-green3 ${item.className}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='mt-5'>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.other.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className='text-base text-white hover:text-green3'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: add image alt tags */}
      <div className='global-margin pb-12 px-4 lg:pb-16'>
        <div className='grid grid-cols-2 gap-0.5 md:grid-cols-5 '>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo1} alt='Gemeente Amsterdam logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo2} alt='Dark Matter Labs logo' />
          </div>
          <div className='col-span-1 flex justify-center py-4 px-8 lg:py-2 '>
            <Image src={logo3} alt='Climate-KIC logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo4} alt='Built by Nature logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo5} alt='Amsterdam Institute for Advanced Metropolitan Solutions logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo6} alt='De Circulaire Bouweconomie logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo7} alt='Provincie Noord-Holland logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo8} alt='Provincie Flevoland logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo9} alt='Rijksdienst voor Ondernemend logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo10} alt='Ministerie van Financiën logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo11} alt='Wageningen University & Research logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo12} alt='TU Delft logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo13} alt='Erasmus Universiteit Rotterdam logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo14} alt='Vrije Universiteit Amsterdam logo' />
          </div>
          <div className='col-span-1 flex justify-center py-8 px-8 '>
            <Image src={logo15} alt='Universiteit van Amsterdam logo' />
          </div>
        </div>
      </div>
      <div className='global-margin pb-10 text-white1 text-sm'>
        <p>
          Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
          techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
          incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
          rechten kunnen worden ontleend. We horen graag wat je ervan vindt, wat je anders zou
          willen, wat je mist en natuurlijk horen we ook graag waar je blij van wordt.{' '}
          <Link href='/contact'>
            <a className='font-bold underline text-blush1'>Stuur je feedback op deze testversie.</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
