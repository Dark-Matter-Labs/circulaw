import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '@/components/custom-button';
import Partners from '@/components/nav/partners';
import FooterLinkBlock from './footer-link-block';
import ORicon from '@/public/icons/openResearch.svg'; // TODO: get this icon from Icon library
import { ArrowUpIcon } from '@heroicons/react/outline';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import JaIcon from '@/public/icons/ja-icon.svg'; // TODO: get this icon from Icon library
import NeeIcon from '@/public/icons/nee-icon.svg'; // TODO: get this icon from Icon library
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
                    <ArrowUpIcon className='h-4 w-4 inline-block ml-1' />
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
                    <Image
                      className='inline-block h-5 w-5 hover:text-green-300 mr-1'
                      alt='Open Research icon'
                      src={JaIcon}
                      width={6}
                      height={6}
                    />
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
                    <Image
                      className='inline-block h-5 w-5 hover:text-green-300 mr-1'
                      alt='Open Research icon'
                      src={NeeIcon}
                      width={6}
                      height={6}
                    />
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
                          <Link href='https://www.linkedin.com/company/circulaw/' target='_blank' aria-label='link to CircuLaw LinkedIn'>
                            <RiLinkedinFill className='inline-block ml-3 h-6 w-6 hover:text-green-300 mb-1.5' />
                          </Link>
                          <Link href='https://github.com/Dark-Matter-Labs/circulaw' target='_blank' aria-label='link to CircuLaw github'>
                            <AiFillGithub className='inline-block ml-3 h-6 w-6 hover:text-green-300 mb-1.5' />
                          </Link>
                          <Link
                            href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                            target='_blank'
                            aria-label='linke to CircuLaw open research'
                          >
                            <Image
                              className='inline-block ml-3 h-6 w-6 hover:text-green-300 mb-1.5'
                              alt='Open Research icon'
                              src={ORicon}
                              width={6}
                              height={6}
                            />
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
                              <RiLinkedinFill className='inline-block ml-3 h-6 w-6 hover:text-green-200 mb-1.5' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op GitHub' className='tooltip p-base z-30'>
                            <Link
                              href='https://github.com/Dark-Matter-Labs/circulaw'
                              target='_blank'
                            >
                              <AiFillGithub className='inline-block ml-3 h-6 w-6 hover:text-green-200 mb-1.5' />
                            </Link>
                          </span>
                          <span data-text='Volg ons op OpenResearch' className='tooltip p-base'>
                            <Link
                              href='https://openresearch.amsterdam/nl/page/89270/circulaw---circulaire-regelgevingstool'
                              target='_blank'
                            >
                              <svg
                                width='107'
                                height='107'
                                viewBox='0 0 107 107'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                                className='inline-block ml-3 h-6 w-6 hover:text-green-200 mb-1.5 fill-white'
                              >
                                <circle cx='53.5' cy='53.5' r='53.5' fill='currentColor' />
                                <path
                                  d='M50.9122 69.8655L50.917 69.8726L50.9219 69.8796L66.1768 92.0049C66.6993 92.7721 67.5373 93.1525 68.349 93.1525H68.3573C68.9399 93.1525 69.4374 92.9556 69.8128 92.7111L69.854 92.6843L69.8939 92.6555C71.075 91.8008 71.3275 90.1798 70.5349 89.0087L70.5301 89.0016L70.5252 88.9945L55.266 66.863L55.26 66.8544L55.254 66.8458C54.4111 65.6504 52.7733 65.3707 51.5846 66.1964L51.5688 66.2074L51.5532 66.2187C50.3721 67.0734 50.1196 68.6944 50.9122 69.8655Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M54.8459 27.8317C55.969 25.6451 55.1118 22.9211 52.7659 22.1869C48.8069 20.9478 44.5869 20.6676 40.4599 21.3995C34.8635 22.3919 29.7465 25.1909 25.8921 29.368C22.0377 33.545 19.6582 38.87 19.1178 44.528C18.5774 50.1859 19.9059 55.8651 22.8999 60.6963C25.894 65.5274 30.3886 69.2444 35.696 71.2783C41.0033 73.3122 46.8309 73.5509 52.2868 71.958C57.7427 70.3651 62.5264 67.0283 65.9056 62.4582C68.3976 59.0881 70.0245 55.1843 70.6767 51.0875C71.0632 48.6599 69.0051 46.6801 66.5472 46.7128V46.7128C64.0893 46.7456 62.1804 48.7967 61.5794 51.1803C61.038 53.3273 60.0813 55.3627 58.7481 57.1657C56.5258 60.1711 53.3799 62.3655 49.792 63.413C46.204 64.4606 42.3717 64.3036 38.8814 62.966C35.3912 61.6285 32.4354 59.1841 30.4664 56.007C28.4975 52.8299 27.6238 49.0952 27.9792 45.3743C28.3346 41.6535 29.8994 38.1517 32.4342 35.4047C34.9689 32.6578 38.334 30.8171 42.0143 30.1644C44.2223 29.7728 46.4708 29.8218 48.6344 30.2924C51.0364 30.8149 53.7227 30.0182 54.8459 27.8317V27.8317Z'
                                  fill='#035E46'
                                />
                                <path
                                  d='M44.6648 49.2166C46.7642 50.381 49.4188 49.6206 50.5832 47.5213C51.7477 45.4219 50.9873 42.7673 48.8879 41.6029C46.7886 40.4384 44.134 41.1988 42.9695 43.2981C41.8051 45.3975 42.5655 48.0521 44.6648 49.2166ZM45.6123 47.5203C44.449 46.875 44.0284 45.4068 44.6737 44.2434C45.319 43.08 46.7872 42.6595 47.9506 43.3047C49.1139 43.95 49.5345 45.4183 48.8892 46.5816C48.2439 47.745 46.7757 48.1656 45.6123 47.5203Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                />
                                <path
                                  d='M77.2158 22.9749C79.3152 24.1394 81.9698 23.379 83.1342 21.2796C84.2987 19.1803 83.5383 16.5257 81.4389 15.3612C79.3396 14.1968 76.685 14.9572 75.5205 17.0565C74.3561 19.1559 75.1165 21.8105 77.2158 22.9749ZM78.1633 21.2787C77 20.6334 76.5794 19.1651 77.2247 18.0018C77.87 16.8384 79.3382 16.4178 80.5016 17.0631C81.665 17.7084 82.0855 19.1766 81.4403 20.34C80.795 21.5034 79.3267 21.924 78.1633 21.2787Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                />
                                <path
                                  d='M87.0381 47.3741C89.1374 48.5386 91.792 47.7782 92.9565 45.6788C94.1209 43.5795 93.3606 40.9249 91.2612 39.7604C89.1619 38.596 86.5072 39.3564 85.3428 41.4557C84.1783 43.5551 84.9387 46.2097 87.0381 47.3741ZM87.9856 45.6779C86.8222 45.0326 86.4017 43.5644 87.047 42.401C87.6923 41.2376 89.1605 40.817 90.3239 41.4623C91.4872 42.1076 91.9078 43.5759 91.2625 44.7392C90.6172 45.9026 89.149 46.3232 87.9856 45.6779Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                />
                                <path
                                  d='M51.2896 44.9999L77.7542 22.5353C78.1372 22.2102 78.3346 21.5776 77.9353 21.1072C77.5361 20.6369 76.8798 20.7289 76.4968 21.0541L50.0322 43.5187C49.6492 43.8438 49.4518 44.4764 49.851 44.9467C50.2503 45.4171 50.9065 45.3251 51.2896 44.9999Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                />
                                <path
                                  d='M65.0884 33.1214L86.2445 42.0946C86.7846 42.3237 87.2622 41.9288 87.4268 41.5408C87.5914 41.1529 87.5432 40.535 87.0032 40.3059L65.8471 31.3327C65.307 31.1037 64.8294 31.4985 64.6648 31.8865C64.5002 32.2745 64.5484 32.8924 65.0884 33.1214Z'
                                  fill='#035E46'
                                  stroke='#035E46'
                                />
                              </svg>
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
