import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

import CustomButton from '@/components/custom-button';
import PageHeader from '@/components/product-chain-page/product-chain-header';
import MobilePageHeader from '@/components/product-chain-page/product-chain-header-mobile';
// import ThemaList from '@/components/thema-list';
import PCTooltip from '../tooltips/product-chain-tooltip';
import ThemaCard from '../thema-cards';

export default function ThemeLayout({ ...props }) {
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <PageHeader pageTitle={props.title} />
        {/* HEADER MOBILE */}
        <MobilePageHeader pageTitle={props.title} />

        <div className='bg-grey-150'>
          <div className='global-margin pb-12 sm:pb-20'>
            <div className='pt-14 pb-0 sm:pb-10'>
              <h2 className='p-6xl-semibold text-green-800 pb-8'>
                Thema’s en juridische instrumenten
              </h2>
              <p className='pb-5 p-base max-w-2xl'>
                Duik gelijk in de juridische materie. Hieronder staan{' '}
                <b>{props.totalInstruments} instrumenten</b> die te maken hebben met voedsel. We
                hebben ze onderverdeeld in categorieen zodat je direct kunt beginnen waar het voor
                jou het beste past.
              </p>
            </div>

            <div className='-z-20'>
              <ThemaCard themaCards={props.themaList} />
            </div>

            <div className='pt-12 sm:pt-20'>
              <h2 className='p-3xl-semibold sm:p-6xl-semibold text-green-800 pb-8'>
                Impact voedselsyteem op het klimaat en de natuur{' '}
              </h2>
              <div className='grid grid-cols-1 justify-items-center sm:flex sm:justify-center gap-20'>
                {props.impactList.map((impact) => (
                  <div
                    className='grid grid-cols-1 justify-items-center content-between text-center max-w-xs'
                    key={impact.detail}
                  >
                    <div>
                      <Image
                        className='w-40 h-40'
                        src={urlFor(impact?.image).url()}
                        alt='impact image'
                        height={40}
                        width={40}
                      />
                    </div>
                    <div>
                      <p className='pt-4 p-base'>{impact.detail}</p>
                    </div>
                    <PCTooltip>
                      <p className='pt-8 p-base-bold  text-green-800'>{impact.question}</p>
                    </PCTooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin pt-14  bg-white'>
          <h2 className='p-6xl-semibold text-green-800 pb-10'>
            De voedsel-ambities in nederland
          </h2>
          {props.ambitionList.map((ambition, index) =>
            index % 2 == 0 ? (
              <div key={index} className='grid grid-cols-1 sm:grid-cols-2 pb-20'>
                   <div className='block mb-6 sm:hidden'>
                  <Image
                    src={urlFor(ambition?.image).url()}
                    alt='ambition illustration'
                    height={356}
                    width={542}
                  />
                  </div>
                <div>
                  <h4 className='p-2xl-semibold sm:3xl-semibold text-green-800'>{ambition.title}</h4>
                  <p className='p-xl pt-4 max-w-xl pb-4'>{ambition.detail}</p>
                  <CustomButton color='lightGreenBackground'>
                    Deze instrumenten helpen hierbij
                  </CustomButton>
                </div>
                <div className='hidden sm:block'>
                  <Image
                    src={urlFor(ambition?.image).url()}
                    alt='ambition illustration'
                    height={356}
                    width={542}
                  />
                </div>
              </div>
            ) : (
              <div key={ambition.title} className='grid grid-cols-1 sm:grid-cols-2 pb-20'>
                <div>
                  <Image src={ambition.image} alt='ambition illustration' height={356}
                    width={542} className='mb-6'/>
                </div>
                <div>
                  <h4 className='p-2xl-semibold sm:3xl-semibold text-green-800'>{ambition.title}</h4>
                  <p className='p-xl pt-4 max-w-xl pb-4'>{ambition.detail}</p>
                  <CustomButton color='lightGreenBackground'>
                    Deze instrumenten helpen hierbij
                  </CustomButton>
                </div>
              </div>
            ),
          )}
        </div>
        <div className='pt-14 pb-10 bg-grey-150'>
          <div className='global-margin'>
            <h2 className='p-6xl-semibold text-green-800 pb-10'>
              Duik nog dieper in de materie
            </h2>
            <div className='newlineDisplay p-base -mt-2 mb-6'>
              <ul className='list-disc pl-6 p-base'>
                <li className='py-0.5'>
                  <a
                    className='text-green-500 inline link-interaction'
                    href='https://www.rijksoverheid.nl/documenten/kamerstukken/2022/12/23/kamerbrief-over-beleidsagenda-normeren-en-stimuleren-circulair-bouwen'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='link-base link-interaction'>
                      Kamerbrief over beleidsagenda normeren en stimuleren circulair bouwen
                    </span>
                  </a>
                </li>
                <li className='py-0.5'>
                  <a
                    className='text-green-500 inline link-interaction'
                    href='https://www.ipo.nl/media/qv2cq1gp/ambitiebepaling-provinciale-klimaatneutrale-en-circulaire-infrastructuur-pkci.pdf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='link-base link-interaction'>
                      Ambitiebepaling Provinciale Klimaatneutrale en Circulaire Infrastructuur
                      (PKCI)
                    </span>
                  </a>
                </li>
                <li className='py-0.5'>
                  <a
                    className='text-green-500 inline link-interaction'
                    href='https://tki-bouwentechniek.nl/wp-content/uploads/MMIP_Circulaire-bouw-en-infrastructuur_v1.pdf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='link-base link-interaction'>
                      Meerjarig Missiegedreven Innovatieprogramma Bouw en Infrastructuur (MMIP)
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
