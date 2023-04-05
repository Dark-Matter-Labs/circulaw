import { useRouter } from 'next/router';
import Link from 'next/link';
import NieuwTooltip from '../components/nieuw-tooltip';
import ActionPanel from '../components/section-action-panel';
import Partners from './partners';

const navigation = {
  // FAQ href is linked to CMS.
  other: [
    { name: 'Contact', href: '/contact', className: '' },
    { name: 'Disclaimer/Beta', href: '/beta', className: '' },
    { name: 'Privacy', href: '/privacy-policy', className: '' },
    { name: 'Cookies', href: '/cookie-info', className: '' },
  ],
};

export default function Footer(props) {
  let themaSlugs = [];
  if (props.themaSlugs) {
    themaSlugs = props.themaSlugs;
  }

  let aboutSlugs = [];
  if (props.aboutSlugs) {
    aboutSlugs = props.aboutSlugs.aboutNavItems;
  }

  let FAQslug = [];
  if (props.vraagSlug) {
    FAQslug = props.vraagSlug;
  }

  const router = useRouter();
  return (
    <footer className='' aria-labelledby='footer-heading'>
      {router.pathname !== '/en' && (
        <div className='bg-green-600'>
          <div className='global-margin pt-12 lg:pt-16 lg:px-8'>
            <div className='pb-20'>
              <div className=''>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8'>
                  <div className='sm:hidden block border-b border-black-white-200 pb-4'>
                    <ActionPanel
                      title='Doe met ons mee'
                      paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                      buttonText='Neem contact op'
                      buttonLink='/contact'
                    />
                  </div>
                  <div className=' border-b border-black-white-200 sm:border-0 py-2 sm:py-0'>
                    <h4 className='text-green-300 mobile sm:desktop uppercase'>THEMA’S</h4>
                    <div className='grid grid-cols-1 gap-8 py-2 sm:py-0'>
                      <ul role='list' className='mt-4 space-y-4'>
                        {themaSlugs?.map((slug) => (
                          <li key={slug}>
                            <a
                              href={`/${encodeURIComponent(slug)}`}
                              className='p-base hover:text-green-400 text-black-white-200'
                            >
                              <span className='inline-block first-letter:uppercase'>
                                {slug.replaceAll('-', ' ')}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className=' border-b border-black-white-200 sm:border-0 py-2 sm:py-0'>
                    <h4 className='text-green-300 mobile sm:desktop uppercase'>OVER CIRCULAW</h4>
                    <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                      {' '}
                      <ul role='list' className='mt-4 space-y-4'>
                      {aboutSlugs && 
                        aboutSlugs?.map((slug) => (
                          <li key={slug.slug}>
                            <a
                              href={`/about/${encodeURIComponent(slug.slug)}`}
                              className=' p-base hover:text-green-400 text-black-white-200'
                            >
                              <span className='inline-block first-letter:uppercase'>
                                {slug.title.replaceAll('-', ' ')}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='py-2 sm:py-0'>
                    <NieuwTooltip />
                    <ul role='list' className='mt-4 space-y-4'>
                      <li>
                        <a
                          className='p-base text-black-white-200 hover:text-green-400'
                          href={`/${encodeURIComponent(FAQslug)}`}
                        >
                          {FAQslug.length > 0 && (
                            <span className='inline-block first-letter:uppercase'>
                              {FAQslug.replaceAll('-', ' ')}
                            </span>
                          )}
                        </a>
                      </li>
                      {navigation.other.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className=' p-base text-black-white-200 hover:text-green-400'
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                      <li className='flex justify-start text-black-white-200 items-center'>
                        <span
                          className={`hover:underline ${
                            router.pathname === '/en' ? '' : 'font-semibold'
                          }`}
                        >
                          <Link href='/'>NL</Link>
                        </span>
                        <span className='px-1 enLink'>|</span>
                        <span
                          className={`hover:underline ${
                            router.pathname === '/en' ? 'font-semibold' : ''
                          }`}
                        >
                          <Link href='/en'>EN</Link>
                        </span>{' '}
                      </li>
                    </ul>
                  </div>
                  <div className='hidden sm:block'>
                    <ActionPanel
                      title='Doe met ons mee'
                      paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                      buttonText='Neem contact op'
                      buttonLink='/contact'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Partners />
    </footer>
  );
}
