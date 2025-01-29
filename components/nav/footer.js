import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import CustomButton from '@/components/custom-button';
import Partners from '@/components/nav/partners';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import {
  IconArrowUp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileSearch,
  IconThumbDown,
  IconThumbUp,
} from '@tabler/icons-react';

import FooterLinkBlock from './footer-link-block';

const navigation = {
  other: [
    { name: 'Contact', href: '/contact', className: '' },
    { name: 'Disclaimer/Beta', href: '/beta', className: '' },
    { name: 'Privacy', href: '/privacy-policy', className: '' },
    { name: 'Cookies', href: '/cookie-info', className: '' },
  ],
  thema: [
    { name: 'Bouw', slug: '/bouw' },
    { name: 'Consumptiegoederen', slug: '/consumptiegoederen' },
    { name: 'Biomassa en Voedsel', slug: '/biomassa-en-voedsel' },
    { name: 'Maakindustrie', slug: '/maakindustrie' },
    { name: 'Kunststoffen', slug: '/kunststoffen' },
  ],
};

export default function Footer({ vraagSlug, aboutSlugs, footerText, partnerLogos }) {
  const { CustomEvent } = usePiwikPro();
  const [moreInfoOpen, setMoreInfoOpen] = useState('hidden');
  const [successMessage, setSuccessMessage] = useState('hidden');
  const [jeeNee, setJeeNee] = useState('');
  const [feedbackState, setFeedBackState] = useState('');
  const [feedback, setFeedback] = useState('');

  const pathname = usePathname();
  return (
    <>
      <footer className='' aria-labelledby='footer-heading'>
        {pathname !== '/en' && (
          <div>
            <div className='flex w-full items-center justify-center border-y-2 border-gray-100 bg-green-800 py-8 lgNav:hidden'>
              <CustomButton color='home'>
                <ScrollLink to='top' smooth={true}>
                  <span>
                    Top
                    <IconArrowUp className='ml-1 inline-block h-5 w-5' />
                  </span>
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='global-margin border-t border-t-green-600 py-10'>
              <div className={`flex items-center justify-center ${jeeNee}`}>
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold pr-8 text-green-600'>
                  Vond je deze pagina nuttig?
                </h3>
                <div className='mr-4'>
                  <CustomButton
                    color='whiteBackground'
                    id='je'
                    onClick={() => {
                      setFeedback('');
                      setFeedBackState('Ja');
                      CustomEvent.trackEvent('Footer Feedback Ja', pathname);
                      setMoreInfoOpen('block');
                    }}
                  >
                    {' '}
                    <IconThumbUp className='mr-1 h-6 w-6' />
                    Ja
                  </CustomButton>
                </div>
                <div>
                  <CustomButton
                    color='whiteBackground'
                    id='nee'
                    onClick={() => {
                      setFeedback('');
                      setFeedBackState('Nee');
                      CustomEvent.trackEvent('Footer Feedback Nee', pathname);
                      setMoreInfoOpen(true);
                    }}
                  >
                    {' '}
                    <IconThumbDown className='mr-1 h-6 w-6' />
                    Nee
                  </CustomButton>
                </div>
              </div>
              <div className={moreInfoOpen}>
                <div className='mt-3 sm:mt-5'>
                  {feedbackState === 'Ja' ? (
                    <h5 className='p-base leading-6 text-gray-900'>
                      Fijn! Laat ons kort weten waarom.
                    </h5>
                  ) : (
                    <h5 className='p-base leading-6 text-gray-900'>
                      Jammer, vertel ons waarom niet, zodat we onze website kunnen verbeteren.
                    </h5>
                  )}

                  <div className='mt-2'>
                    <textarea
                      id='message'
                      name='message'
                      rows={2}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className='block w-3/4 rounded-cl border border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    />
                  </div>
                </div>

                <div className='mt-5 sm:mt-6'>
                  <CustomButton
                    color='whiteBackground'
                    id='moreFeedback'
                    onClick={() => {
                      CustomEvent.trackEvent(
                        'Footer Feedback More Info',
                        pathname,
                        feedback + ' ,state:' + feedbackState,
                      );
                      setMoreInfoOpen('hidden');
                      setJeeNee('hidden');
                      setSuccessMessage('block');
                    }}
                  >
                    Versturen
                  </CustomButton>
                </div>
              </div>
              <div className={`success-message max-w-sm px-4 py-4 ${successMessage}`}>
                <p className='p-base mx-auto leading-6 text-gray-900'>Bedankt voor je reactie!</p>
              </div>
            </div>
            <div className='bg-green-600'>
              <div className='global-margin pt-8 lg:px-8 lg:pt-16'>
                <div className='pb-20'>
                  <div className=''>
                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-4 sm:gap-8'>
                      <div className='block border-b border-gray-100 pb-4 sm:hidden'>
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
                        <div className='p-base block pt-6 text-gray-100 sm:hidden'>
                          <h3 className='heading-xl-semibold sm:heading-2xl-semibold inline-block'>
                            Volg ons op:
                          </h3>
                          <Link
                            href='https://www.linkedin.com/company/circulaw/'
                            target='_blank'
                            aria-label='link to CircuLaw LinkedIn'
                          >
                            <IconBrandLinkedin className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-300' />
                          </Link>
                          <Link
                            href='https://github.com/Dark-Matter-Labs/circulaw'
                            target='_blank'
                            aria-label='link to CircuLaw github'
                          >
                            <IconBrandGithub className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-300' />
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
                      <div className='border-b border-gray-100 py-2 sm:border-0 sm:py-0'>
                        <h4 className='heading-xl-semibold text-green-200'>Productketens</h4>
                        <div className='grid grid-cols-1 gap-8 py-2 sm:py-0'>
                          <ul role='list' className='mt-4 space-y-4'>
                            {navigation.thema?.map((thema) => (
                              <li key={thema.name}>
                                <a href={thema.slug} className='p-base text-gray-100'>
                                  <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                    {thema.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='border-b border-gray-100 py-2 sm:border-0 sm:py-0'>
                        <h4 className='heading-xl-semibold text-green-200'>Over CircuLaw</h4>
                        <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                          {' '}
                          <ul role='list' className='mt-4 space-y-4'>
                            {aboutSlugs &&
                              aboutSlugs?.map((slug, id) => (
                                <li key={id}>
                                  <a
                                    href={`/over/${encodeURIComponent(slug.slug)}`}
                                    className='p-base text-gray-100'
                                  >
                                    <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                      {slug.pageTitle.replaceAll('-', ' ')}
                                    </span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <div className='py-2 sm:py-0'>
                        <ul role='list' className='space-y-4'>
                          <li>
                            <a className='p-base link-interaction text-gray-100' href={vraagSlug}>
                              <span className='link-interaction-light-green-bg inline-block first-letter:uppercase'>
                                Vraag en antwoord
                              </span>
                            </a>
                          </li>
                          {navigation.other.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className='p-base link-interaction-light-green-bg'
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
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
                        <div className='p-base relative z-0 flex items-center justify-center py-6 text-gray-100 sm:block'>
                          <h3 className='heading-xl-semibold sm:heading-2xl-semibold inline-block'>
                            Volg ons op:
                          </h3>
                          <span data-text='Volg ons op LinkedIn' className='tooltip p-base z-40'>
                            <Link href='https://www.linkedin.com/company/circulaw/' target='_blank'>
                              <IconBrandLinkedin className='mb-1.5 ml-3 inline-block h-7 w-7 hover:text-green-200' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op GitHub' className='tooltip p-base z-30'>
                            <Link
                              href='https://github.com/Dark-Matter-Labs/circulaw'
                              target='_blank'
                            >
                              <IconBrandGithub className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-200' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op OpenResearch' className='tooltip p-base'>
                            <Link
                              href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                              target='_blank'
                            >
                              <IconFileSearch className='mb-1.5 ml-3 inline-block h-6 w-6 hover:text-green-200' />
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
        )}
        <Partners footerText={footerText} partnerLogos={partnerLogos} />
      </footer>
    </>
  );
}
