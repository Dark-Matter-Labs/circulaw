import { useState } from 'react';
import Link from 'next/link';
import CustomButton from '@/components/custom-button';
import Partners from '@/components/nav/partners';
import FooterLinkBlock from './footer-link-block';
import { IconBrandGithub, IconArrowUp, IconThumbUp, IconThumbDown, IconBrandLinkedin, IconFileSearch } from '@tabler/icons-react';
import { Link as ScrollLink } from 'react-scroll';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import { usePathname } from 'next/navigation';

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
            <div className='flex lgNav:hidden w-full items-center justify-center py-8 bg-green-800 border-y-2 border-gray-100 '>
              <CustomButton color='home'>
                <ScrollLink to='top' smooth={true}>
                  <span>
                    Top
                    <IconArrowUp className='h-5 w-5 inline-block ml-1' />
                  </span>
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='global-margin py-10 border-t border-t-green-600'>
              <div className={`flex justify-center items-center ${jeeNee}`}>
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold text-green-600 pr-8'>
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
                   <IconThumbUp className='h-6 w-6 mr-1'/>

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
                    <IconThumbDown className='h-6 w-6 mr-1'/>
                    Nee
                  </CustomButton>
                </div>
              </div>
              <div className={moreInfoOpen}>
                <div className='mt-3  sm:mt-5'>
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
                      className='py-3 px-4 block w-3/4 shadow-sm focus:ring-green-600 focus:border-green-600 border border-gray-300 rounded-cl'
                    />
                  </div>
                </div>

                <div className='mt-5 sm:mt-6 '>
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
              <div className={`success-message py-4 max-w-sm px-4 ${successMessage}`}>
                <p className='p-base leading-6 text-gray-900 mx-auto '>Bedankt voor je reactie!</p>
              </div>
            </div>
            <div className='bg-green-600'>
              <div className='global-margin pt-8 lg:pt-16 lg:px-8'>
                <div className='pb-20'>
                  <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8'>
                      <div className='sm:hidden block border-b border-gray-100 pb-4'>
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
                        <div className='block sm:hidden pt-6 p-base text-gray-100 '>
                          <h3 className='heading-xl-semibold sm:heading-2xl-semibold inline-block'>
                            Volg ons op:
                          </h3>
                          <Link
                            href='https://www.linkedin.com/company/circulaw/'
                            target='_blank'
                            aria-label='link to CircuLaw LinkedIn'
                          >
                            <IconBrandLinkedin className='inline-block ml-3 h-6 w-6 hover:text-green-300 mb-1.5' />
                          </Link>
                          <Link
                            href='https://github.com/Dark-Matter-Labs/circulaw'
                            target='_blank'
                            aria-label='link to CircuLaw github'
                          >
                            <IconBrandGithub className='inline-block ml-3 h-6 w-6 hover:text-green-300 mb-1.5' />
                          </Link>
                          <Link
                            href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                            target='_blank'
                            aria-label='linke to CircuLaw open research'
                          >
                         <IconFileSearch className='w-6 h-6 inline-block mb-1.5 ml-3'/>
                          </Link>
                        </div>
                      </div>
                      <div className=' border-b border-gray-100 sm:border-0 py-2 sm:py-0'>
                        <h4 className='text-green-200 heading-xl-semibold'>Productketens</h4>
                        <div className='grid grid-cols-1 gap-8 py-2 sm:py-0'>
                          <ul role='list' className='mt-4 space-y-4'>
                            {navigation.thema?.map((thema) => (
                              <li key={thema.name}>
                                <a href={thema.slug} className='p-base text-gray-100'>
                                  <span className='inline-block first-letter:uppercase link-interaction-light-green-bg'>
                                    {thema.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='border-b border-gray-100 sm:border-0 py-2 sm:py-0'>
                        <h4 className='text-green-200 heading-xl-semibold'>Over CircuLaw</h4>
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
                                    <span className='inline-block first-letter:uppercase link-interaction-light-green-bg'>
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
                            <a className='p-base text-gray-100 link-interaction' href={vraagSlug}>
                              <span className='inline-block first-letter:uppercase link-interaction-light-green-bg'>
                                Vraag en antwoord
                              </span>
                            </a>
                          </li>
                          {navigation.other.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className=' p-base link-interaction-light-green-bg'
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
                        <div className='flex sm:block py-6 p-base text-gray-100 items-center justify-center z-0 relative'>
                          <h3 className='inline-block heading-xl-semibold sm:heading-2xl-semibold'>
                            Volg ons op:
                          </h3>
                          <span data-text='Volg ons op LinkedIn' className='tooltip p-base z-40'>
                            <Link href='https://www.linkedin.com/company/circulaw/' target='_blank'>
                              <IconBrandLinkedin className='inline-block ml-3 h-7 w-7 hover:text-green-200 mb-1.5' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op GitHub' className='tooltip p-base z-30'>
                            <Link
                              href='https://github.com/Dark-Matter-Labs/circulaw'
                              target='_blank'
                            >
                              <IconBrandGithub className='inline-block ml-3 h-6 w-6 hover:text-green-200 mb-1.5' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op OpenResearch' className='tooltip p-base'>
                            <Link
                              href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                              target='_blank'
                            >
                             <IconFileSearch className='inline-block h-6 w-6 ml-3 mb-1.5 hover:text-green-200'/>
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
