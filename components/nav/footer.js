import Link from 'next/link';

import Partners from '@/components/nav/partners';
import { IconBrandGithub, IconBrandLinkedin, IconFileSearch } from '@tabler/icons-react';

import NewButton from '../shared/new-button';
import FooterLinkBlock from './footer-link-block';

const navigation = {
  thema: [
    { name: 'Bouw', slug: '/bouw' },
    { name: 'Consumptiegoederen', slug: '/consumptiegoederen' },
    { name: 'Biomassa en Voedsel', slug: '/biomassa-en-voedsel' },
    { name: 'Maakindustrie', slug: '/maakindustrie' },
    { name: 'Kunststoffen', slug: '/kunststoffen' },
  ],
};
export default function Footer({ aboutSlugs, footerText, partnerLogos }) {
  return (
    <>
      <footer className='' aria-labelledby='footer-heading'>
        <div>
          <div className='flex w-full items-center justify-center border-t border-green-500 bg-green-100 py-8 lgNav:hidden'>
            <NewButton variant='secondaryDark' icon='arrowUp' scrollTo='top'>
              Top
            </NewButton>
          </div>
          <div className='bg-green-500'>
            <div className='global-margin pt-8 lg:pt-16'>
              <div className='pb-20'>
                <div className=''>
                  <div className='grid grid-cols-1 gap-2 sm:grid-cols-4 sm:gap-8'>
                    <div className='block border-b border-white pb-4 sm:hidden'>
                      <FooterLinkBlock
                        title='Schrijf je in voor onze CircuLaw Nieuwsbrief'
                        paragraph='Zo ben je altijd op de hoogte van het laatste CircuLaw-nieuws. '
                        buttonText='Aanmelden'
                        buttonLink='/nieuwsbrief'
                      />
                      <div className='py-4'></div>
                      <FooterLinkBlock
                        title='Doe met ons mee'
                        paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                        buttonText='Neem contact op'
                        buttonLink='/contact'
                      />
                      <div className='py-4'></div>
                      <FooterLinkBlock
                        title='Impact report 2024'
                        paragraph='Circulaw heeft stevige circulaire intenties, maar maken we ook echt circulaire impact? Dat hebben we voor je uitgezocht. Download nu ons impact report!'
                        buttonText='Download report'
                        buttonLink='/CircuLaw_Impact_Report_2024_NLversie.pdf'
                        isImpactReport={true}
                      />
                      <div className='p-base block pt-6 text-white sm:hidden'>
                        <h3 className='heading-xl-semibold sm:heading-2xl-semibold inline-block'>
                          Volg ons op:
                        </h3>
                        <Link
                          href='https://www.linkedin.com/company/circulaw/'
                          target='_blank'
                          aria-label='link to CircuLaw LinkedIn'
                        >
                          <IconBrandLinkedin className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-400' />
                        </Link>
                        <Link
                          href='https://github.com/Dark-Matter-Labs/circulaw'
                          target='_blank'
                          aria-label='link to CircuLaw github'
                        >
                          <IconBrandGithub className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-400' />
                        </Link>
                        <Link
                          href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                          target='_blank'
                          aria-label='linke to CircuLaw open research'
                        >
                          <IconFileSearch className='mb-1.5 ml-3 inline-block h-6 w-6' />
                        </Link>
                      </div>
                    </div>

                    <div className='border-b border-green-100 py-2 sm:border-0 sm:py-0'>
                      <h4 className='heading-2xl-semibold text-cl-black'>Productketens</h4>
                      <div className='grid grid-cols-1 gap-8 py-2 sm:py-0'>
                        <ul role='list' className='mt-4 space-y-4'>
                          {navigation.thema?.map((thema) => (
                            <li key={thema.name}>
                              <Link href={thema.slug} className='p-base-semibold text-white'>
                                <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                  {thema.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className='border-b border-white py-2 sm:border-0 sm:py-0'>
                      <h4 className='heading-2xl-semibold text-cl-black'>Over CircuLaw</h4>
                      <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                        {' '}
                        <ul role='list' className='mt-4 space-y-4'>
                          {aboutSlugs &&
                            aboutSlugs?.map((slug, id) => (
                              <li key={id}>
                                <Link
                                  href={`/over/${encodeURIComponent(slug.slug)}`}
                                  className='p-base-semibold text-white'
                                >
                                  <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                    {slug.pageTitle.replaceAll('-', ' ')}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          <li>
                            <Link
                              className='p-base-semibold link-interaction text-white'
                              href='/vraag-en-antwoord'
                            >
                              <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                Vraag en antwoord
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='hidden sm:block'>
                      <FooterLinkBlock
                        title='Impact report 2024'
                        paragraph='Circulaw heeft stevige circulaire intenties, maar maken we ook echt circulaire impact? Dat hebben we voor je uitgezocht. Download nu ons impact report!'
                        buttonText='Download report'
                        buttonLink='/CircuLaw_Impact_Report_2024_NLversie.pdf'
                        isImpactReport={true}
                      />
                    </div>
                    <div className='hidden sm:block'>
                      <FooterLinkBlock
                        title='Schrijf je in voor onze CircuLaw Nieuwsbrief'
                        paragraph='Zo ben je altijd op de hoogte van het laatste CircuLaw-nieuws. '
                        buttonText='Aanmelden'
                        buttonLink='/nieuwsbrief'
                      />
                      <div className='py-4'></div>
                      <FooterLinkBlock
                        title='Doe met ons mee'
                        paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                        buttonText='Neem contact op'
                        buttonLink='/contact'
                      />
                      <div className='p-base relative z-0 flex items-center justify-center py-6 text-white sm:block'>
                        <h3 className='heading-xl-semibold sm:heading-2xl-semibold inline-block'>
                          Volg ons op:
                        </h3>
                        <span data-text='Volg ons op LinkedIn' className='tooltip p-base z-40'>
                          <Link href='https://www.linkedin.com/company/circulaw/' target='_blank'>
                            <IconBrandLinkedin className='mb-1.5 ml-3 inline-block h-7 w-7 hover:text-green-300' />
                          </Link>
                        </span>
                        <span data-text='Volg ons op GitHub' className='tooltip p-base z-30'>
                          <Link href='https://github.com/Dark-Matter-Labs/circulaw' target='_blank'>
                            <IconBrandGithub className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-300' />
                          </Link>
                        </span>
                        <span data-text='Volg ons op OpenResearch' className='tooltip p-base'>
                          <Link
                            href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                            target='_blank'
                          >
                            <IconFileSearch className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-300' />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Partners footerText={footerText} partnerLogos={partnerLogos} />
      </footer>
    </>
  );
}
