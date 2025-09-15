import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconExternalLink } from '@tabler/icons-react';

import Header from '../headers';
import Modal from '../modal/modal';
import ModalContent from '../modal/modal-content';
import ThemaCard from '../product-chain-page/thema-cards';
import NewButton from '../shared/new-button';

const callToActions = [
  {
    title: 'Planregels: modelteksten voor het omgevingsplan',
    text: 'Samen met de omgevingsvisie en omgevingsprogramma is het omgevingsplan een van de instrumenten om circulair bouwen te bevorderen',
    buttonText: 'Meer over het omgevingsplan',
    link: '/bouw/planregels',
  },
  {
    title: 'E-learning Circulaire houtbouw onder de Omgevingswet',
    text: 'Hoe gebruik je de instrumenten van de Omgevingswet om houtbouw te verankeren in beleid? Dat leer je in onze e-learning: "Circulaire houtbouw onder de Omgevingswet".',
    buttonText: 'Lees verder',
    link: '/training',
  },
  {
    title: 'Veranker houtbouw in gebiedsontwikkeling',
    text: 'Samen met de omgevingsvisie en omgevingsprogramma is het omgevingsplan een van de instrumenten om circulair bouwen te bevorderen',
    buttonText: 'Lees verder',
    link: '/bouw/gebiedsontwikkeling',
  },
];

export default function PCLayout({ ...props }) {
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <Header
          title={props?.productChainData?.pcName}
          imageURL='/big-decoration.png'
          bgColor='bg-green-500'
          pageType='productChain'
          subtitle='Productketen'
          thema={props?.thema}
          productChain={props.productChain}
        />
        <div className=''>
          <div className='global-margin pb-12 sm:pb-20'>
            <div className='pb-0 pt-14 sm:pb-10'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-8 text-cl-black'>
                Thema’s en juridische instrumenten
              </h2>
              <p className='p-base max-w-2xl pb-5'>
                {props?.productChainData?.introOne} <b>{props?.totalInstruments} instrumenten</b>{' '}
                {props?.productChainData?.introTwo}
              </p>
            </div>
            <div className='-z-20'>
              <ThemaCard
                themaCards={props?.themaList}
                transitionAgenda={props.productChainData.pcName}
              />
            </div>
            <div>
              {props.productChainData.pcName === 'Bouw' && (
                <div className='max-w-8xl relative z-0 mt-20 grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
                  {callToActions.map((cta, id) => (
                    <CallToAction
                      key={id}
                      title={cta.title}
                      text={cta.text}
                      buttonText={cta.buttonText}
                      link={cta.link}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className='global-margin'>
            <div className='pb-14 pt-10'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold max-w-3xl pb-14 text-cl-black'>
                {props?.productChainData?.impactTitle}
              </h2>
              <div className='grid grid-cols-1 justify-items-center gap-20 sm:flex sm:justify-center'>
                {props?.impactList?.map((impact) => (
                  <div
                    className='flex max-w-xs flex-col items-center justify-between text-center'
                    key={impact.detail}
                  >
                    <div>
                      {impact?.image && (
                        <Image
                          className='mb-6 h-28 w-28 rounded-cl'
                          src={urlFor(impact?.image).url()}
                          alt='impact image'
                          height={112}
                          width={112}
                          placeholder='blur'
                          blurDataURL={impact?.metadata.lqip}
                        />
                      )}
                    </div>
                    <div className='flex h-full items-start'>
                      <p className='p-base'>{impact.detail}</p>
                    </div>
                    <Modal
                      Button={
                        <p className='p-base-bold border-b border-cl-black pb-1 pt-8 text-cl-black'>
                          {impact.question}
                        </p>
                      }
                    >
                      <ModalContent
                        title={impact.disclosureTitle}
                        ptContent={impact.disclosureContent}
                      ></ModalContent>
                    </Modal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin pt-14'>
          <div className='max-w-4xl'>
            <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-14 text-cl-black'>
              {props?.productChainData?.ambitionTitle}
            </h2>
            {props?.ambitionList?.map((ambition, index) =>
              index % 2 == 0 ? (
                <div key={index} className='grid grid-cols-1 gap-x-[80px] pb-28 sm:grid-cols-2'>
                  <div className='mb-6 block sm:hidden'>
                    {ambition?.image && (
                      <Image
                        src={urlFor(ambition?.image).url()}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-500'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold mt-2 text-cl-black'>
                      {ambition.title}
                    </h4>
                    <p className='p-base max-w-xl pb-4 pt-4'>{ambition.detail}</p>
                    {ambition.buttonText && (
                      <NewButton variant='primaryDark' href={ambition.buttonLink} icon='arrowRight'>
                        {ambition.buttonText}
                      </NewButton>
                    )}
                  </div>
                  <div className='hidden sm:block'>
                    {ambition?.image && (
                      <Image
                        src={urlFor(ambition?.image).url()}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={ambition.title}
                  className='grid grid-cols-1 gap-x-[80px] pb-28 sm:grid-cols-2'
                >
                  <div>
                    {ambition?.image && (
                      <Image
                        src={ambition.image}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        className='mb-6'
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-500'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold mt-2 text-cl-black'>
                      {ambition.title}
                    </h4>
                    <p className='p-base max-w-xl pb-4 pt-4'>{ambition.detail}</p>
                    {ambition.buttonText && (
                      <NewButton variant='primaryDark' href={ambition.buttonLink} icon='arrowRight'>
                        {ambition.buttonText}
                      </NewButton>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        {props.links && (
          <div className='pb-10 pt-14'>
            <div className='global-margin'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-14 text-cl-black'>
                Duik nog dieper in de materie <IconExternalLink className='inline-block' />
              </h2>
              <div className='newlineDisplay p-base -mt-2 mb-6'>
                <ul className='p-base list-disc pl-6'>
                  {props?.links?.map((link, id) => (
                    <li className='py-0.5' key={id}>
                      <a
                        className='link-interaction inline text-green-500'
                        href={link.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span className='link-base link-interaction'>{link.linkText}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function CallToAction({ title, text, buttonText, link }) {
  return (
    <div className='group w-full rounded-cl border border-green-100 bg-green-100'>
      <Link href={link} className='h-full w-full'>
        <div className='flex h-full w-full flex-grow flex-col justify-between gap-y-6 p-6'>
          <h3 className='heading-2xl-semibold text-green-500'>{title}</h3>
          <div>
            <p className='p-base pt-4 text-cl-black'>{text}</p>
          </div>
          <div className='flex justify-start'>
            <NewButton variant='secondaryDark' icon='arrowRight'>
              {buttonText}
            </NewButton>
          </div>
        </div>
      </Link>
    </div>
  );
}
