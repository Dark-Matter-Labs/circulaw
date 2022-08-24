import Image from 'next/image';
import amsLogo from '../public/logo_partners/gasd_sponsor_cmyk_wit.svg';
import climateKICLogo from '../public/EIT-CKIC-Logo_White_Standard.png';
import provinceNord from '../public/logo_partners/PNH_RGB_wit_trans.png';
import provinceFlevLogo from '../public/logo_partners/Provincie-Flevoland_wit.png';
import nlLogo from '../public/logo_partners/logo-nl-nowhitespace.svg';
import dmLogo from '../public/logo_partners/DML_Logo_white@2000x.png';

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
      name: 'Status en ambities',
      href: '/status-en-ambities',
      className: 'text-white1',
    },
    {
      name: 'Wetsanalyse met circulaire blik',
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
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
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
      <div className='mx-5 sm:mx-10'>
        <div className='py-12 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-6 justify-evenly justify-items-center flex items-baseline'>
            <div className=''>
              <a href='https://www.amsterdam.nl/' target='_blank' rel='noopener noreferrer'>
                <Image layout='fixed' height={57} width={182} src={amsLogo} alt='Amsterdam logo' />
              </a>
            </div>
            <div className=''>
              <a href='https://www.climate-kic.org/' target='_blank' rel='noopener noreferrer'>
                <Image
                  layout='fixed'
                  height={75}
                  width={135}
                  src={climateKICLogo}
                  alt='EIT Climate KIC logo'
                />
              </a>
            </div>
            <div className=''>
              <a href='https://www.flevoland.nl/' target='_blank' rel='noopener noreferrer'>
                <Image
                  layout='fixed'
                  height={100}
                  width={200}
                  src={provinceFlevLogo}
                  alt='Flovoland logo'
                />
              </a>
            </div>
            <div className=''>
              <a href='https://www.noord-holland.nl/' target='_blank' rel='noopener noreferrer'>
                <Image
                  layout='fixed'
                  height={39}
                  width={200}
                  src={provinceNord}
                  alt='Noord Holland logo'
                />
              </a>
            </div>
            <div className=''>
              <a href='https://www.rvo.nl/' target='_blank' rel='noopener noreferrer'>
                <Image layout='fixed' height={100} width={200} src={nlLogo} alt='RVO logo' />
              </a>
            </div>
            <div className=''>
              <a href='https://darkmatterlabs.org/' target='_blank' rel='noopener noreferrer'>
                <Image
                  layout='fixed'
                  height={85}
                  width={85}
                  src={dmLogo}
                  alt='Dark Matter Labs logo'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-5 sm:mx-10 pb-10 text-white1'>
        <p>
          Welkom bij CircuLaw. Deze website is volop in ontwikkeling en in deze versie testen we dan
          ook de techniek, opzet en inhoud van de site. Wat betreft de inhoud zijn sommige
          onderdelen in deze versie nog niet beschikbaar. Ook is het mogelijk dat de inhoud van de
          site incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site
          geen rechten kunnen worden ontleend. We horen graag wat je ervan vindt, wat je anders zou
          willen, wat je mist en natuurlijk horen we ook graag waar je blij van wordt. Stuur ons een
          bericht via info@circulaw.nl.
        </p>
      </div>
    </footer>
  );
}
