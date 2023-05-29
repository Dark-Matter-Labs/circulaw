import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ArrowRightIcon, LinkIcon } from '@heroicons/react/outline';
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { SocialIcon } from 'react-social-icons';

import IconWood from '../public/icons/woodIcon.svg';
import WindmillIcon from '../public/icons/windmill.png';
import MatrassenIcon from '../public/icons/matressIcon.svg';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';
import CustomButton from '../components/custom-button';

const viewportType = {
  mobile: 'block sm:hidden pb-12 my-4 ',
  desktop: 'hidden sm:block mb-20 ',
};

export default function MeasureOverview({ viewport, children, data }) {
  const { asPath } = useRouter();
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  let viewportClasses = viewportType[viewport];

  return (
    <div className={`${viewportClasses}`}>
      <div className='bg-black-white-200  rounded-cl'>
        <div className='px-8 pb-10 sm:pb-0 py-6 block h-[26rem]'>
          {children}
          <div className='container pb-12 sm:pb-1 flex justify-between'>
            <div className=''>
              <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()} passHref>
                <h2 className='link-base text-green-500 first-letter:uppercase block underline link-interaction'>
                  {data?.measure?.thema.replace('-', ' ')}
                </h2>
              </Link>
            </div>
            {data?.measure?.thema === 'houtbouw-stimuleren' && (
              <div className='container-image h-10 w-10'>
                <Image src={IconWood} alt='Icon of a Wood Log' />
              </div>
            )}
            {data?.measure?.thema === 'circulaire-windturbines' && (
              <div className='container-image h-10 w-10'>
                <Image src={WindmillIcon} alt='Icon of a Wood Log' />
              </div>
            )}
            {data?.measure?.thema === 'circulaire-matrasketen' && (
              <div className='container-image h-10 w-10'>
                <Image src={MatrassenIcon} alt='Icon of a Wood Log' />
              </div>
            )}
          </div>
          <div className='-mt-8 sm:mt-0 pt-2 pb-1 border-t border-black-white-600'>
            <div className='flex pb-2 justify-between items-center'>
              <div className='flex justify-left items-center'>
                <h5 className='text-black-white-500 pr-3 mobile sm:desktop'>R-ladder</h5>
                <RTooltip>
                  <svg
                    width='24'
                    height='30'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#1F2223'
                    />
                  </svg>
                </RTooltip>
              </div>
            </div>
            <span className='block-inline grid grid-rows-1 grid-cols-6 w-5/6 sm:w-full lg:w-5/6'>
              {data?.measure?.rLadder.map((rValue) => (
                <h5
                  key={rValue}
                  className='bg-green-500 text-black-white-200 mr-2 rounded-full p-1 h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center mobile sm:desktop'
                >
                  {rValue}
                </h5>
              ))}
            </span>
          </div>

          <div className='pt-2 pb-1'>
            <div className='relative border-t border-black-white-600 '>
              <h5 className='text-black-white-500 mobile sm:desktop py-2'>Subrechtsgebied</h5>
            </div>

            <div className='p-lg pb-2 first-letter:capitalize flex items-center justify-start'>
              <h5 className='px-2 mobile sm:desktoop border rounded-md border-black-white-300 bg-black-white-300 text-black-white-800'>
                {data?.measure?.subrechtsgebied}
              </h5>
            </div>
          </div>

          <div className=' pb-1'>
            <div className='relative flex justify-between border-t border-black-white-600'>
              <div className='flex'>
                <h5 className='text-black-white-500 mobile sm:desktop py-2 pr-3'>Invloed</h5>
                <JITooltip data={data}>
                  <svg
                    width='24'
                    height='30'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#1F2223'
                    />
                  </svg>
                </JITooltip>
              </div>
            </div>

            <div className='flex items-center'>
              <h4 className='mobile sm:desktop text-green-500 uppercase'>
                {data?.measure?.juridischInvloed}
              </h4>
            </div>
          </div>

          <div className='pb-1 border-b border-black-white-600'>
            <div className='relative flex justify-between border-t border-black-white-600'>
              <div className='flex'>
                <h5 className='text-black-white-500 mobile sm:desktop py-2 pr-3'>
                  Juridische haalbaarheid
                </h5>
                <JHTooltip data={data}>
                  <svg
                    width='24'
                    height='30'
                    viewBox='0 0 24 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='15' r='12' fill='#BFC0BF' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#1F2223'
                    />
                  </svg>
                </JHTooltip>
              </div>
            </div>
            <div className='flex items-center w-10/12'>
              <h4 className='mobile sm:desktop text-green-500 uppercase'>
                {data?.measure?.juridischeHaalbaarheid}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-t from-[#C7D3C700] to-[#CBE0CB] rounded-cl mt-10 pb-10'>
        <div className='pt-4 px-8 pb-10 sm:pb-0 py-6 block'>
          <h3 className='mobile sm:desktop text-green-800 pb-4'>Help ons CircuLaw te verbeteren</h3>
          <p className='p-base'>Deel met ons: </p>
          <ul className='pb-10'>
            <li>- voorbeelden uit jouw praktijk</li>
            <li>- je tips om toepassing makkelijker te maken</li>
            <li>- de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
          </ul>
          <Link href={{ pathname: '/feedback', query: { instrument: data?.measure?.titel } }}>
            <CustomButton color='greenBackground'>
              Ik deel mijn kennis{' '}
              <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
            </CustomButton>
          </Link>
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-center items-center pb-2'>
          <span className='p-lg text-black-white-500 pr-2'>Delen: </span>
          <span className='pr-2 test' title='Share link on LinkedIn'>
            <LinkedinShareButton
              url={'https://circulaw-staging.vercel.app' + asPath}
              title={
                'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel
              }
            >
              <SocialIcon
                url={'https://circulaw-staging.vercel.app' + asPath}
                network='linkedin'
                style={{ height: 32, width: 32 }}
                bgColor='#A2A3A2'
                fgColor='#F8FAF8'
              />
            </LinkedinShareButton>
          </span>
          <span className='pr-2' title='Share link on Twitter'>
            <TwitterShareButton
              url={'https://circulaw-staging.vercel.app' + asPath}
              title={
                'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel
              }
            >
              <SocialIcon
                url={'https://circulaw-staging.vercel.app' + asPath}
                network='twitter'
                style={{ height: 32, width: 32 }}
                bgColor='#A2A3A2'
                fgColor='#F8FAF8'
              />
            </TwitterShareButton>
          </span>
          <span className='pr-2' title='Share link on Whatsapp'>
            <WhatsappShareButton
              url={'https://circulaw-staging.vercel.app' + asPath}
              title={
                'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel
              }
              separator=':: '
            >
              <SocialIcon
                url={'https://circulaw-staging.vercel.app' + asPath}
                network='whatsapp'
                style={{ height: 32, width: 32 }}
                bgColor='#A2A3A2'
                fgColor='#F8FAF8'
              />
            </WhatsappShareButton>
          </span>
          <span className='pr-2' title='Share link as email'>
            <EmailShareButton
              url={'https://circulaw-staging.vercel.app' + asPath}
              subject={'Graag deel ik met jou deze informatie van CircuLaw.nl'}
              title={'Voeg eigen boodschap toe. ' + data?.measure?.titel}
            >
              <SocialIcon
                url={'https://circulaw-staging.vercel.app' + asPath}
                network='email'
                style={{ height: 32, width: 32 }}
                bgColor='#A2A3A2'
                fgColor='#F8FAF8'
              />
            </EmailShareButton>
          </span>
          <span className='pr-2' title='Copy link to clipboard'>
            <LinkIcon
              className='inline-block p-1 h-8 w-8 bg-black-white-500 rounded-full text-white hover:cursor-pointer hover:bg-green-300'
              onClick={() => {
                navigator.clipboard.writeText('https://circulaw-staging.vercel.app' + asPath);
                setShowLinkCopied(true);
                setTimeout(() => {
                  setShowLinkCopied(false);
                }, 2000);
              }}
            />
          </span>
        </div>
        {showLinkCopied && <p>Link copied!</p>}
      </div>
    </div>
  );
}
