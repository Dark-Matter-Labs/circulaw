'use client';

import Image from 'next/image';

import { IconArrowDown } from '@tabler/icons-react';

import CustomButton from '../custom-button';
import ScrollButton from '../scroll-button';
import Badge from '../shared/new-badge';
import Tag from '../shared/new-tag';
import Breadcrumb from './breadcrumbs';

export default function Header({ imageURL, bgColor, title, pageType, subtitle, ...props }) {
  console.log(props.data);
  return (
    <>
      <div
        className={`${bgColor} global-margin mt-20 ${pageType === 'categorie' || pageType === 'euLaw' ? 'rounded-t-cl' : 'rounded-cl'}`}
      >
        <div className='relative h-full w-full object-cover px-16 py-10'>
          {imageURL && (
            <>
              <Image
                src={imageURL}
                alt='homepage decoration'
                fill
                sizes='100vw'
                className='rounded-cl object-cover'
                priority={true}
                quality={100}
              />
              <div className='absolute left-0 top-0 z-0 h-full w-full rounded-cl bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>{' '}
            </>
          )}
          <div className='z-5 relative flex flex-col justify-between'>
            <div
              className={`${pageType === 'categorie' || pageType === 'instrumentOverview' || pageType === 'euLaw' ? 'mb-12' : 'mb-20'} flex flex-row justify-between`}
            >
              <Breadcrumb pageType={pageType} />
            </div>
            <div className=''>
              {pageType === 'instrument' && (
                <div className='flex flex-row gap-x-3'>
                  <Tag href={`/${props.data.transitionAgenda}/${props.data.thema}`} variant='white'>
                    {props.data.thema}
                  </Tag>
                  {props.data.beleid && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='beleid'
                    >
                      Beleid
                    </Tag>
                  )}
                  {props.data.fiscaal && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='fiscaal'
                    >
                      Fiscaal
                    </Tag>
                  )}
                  {props.data.inkoop && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='inkoop'
                    >
                      Inkoop
                    </Tag>
                  )}
                  {props.data.grondpositie && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='grondpositie'
                    >
                      Grondpositie
                    </Tag>
                  )}
                  {props.data.subsidie && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='subsidie'
                    >
                      Subsidie
                    </Tag>
                  )}
                </div>
              )}
              {pageType === 'news' && <Badge variant='black'>{props.newsData.category}</Badge>}
              {pageType === 'productChain' && (
                <div className='p-base sm:heading-2xl-semibold text-green-400'>{subtitle}</div>
              )}
              <h1
                className={`heading-3xl-semibold sm:heading-5xl-semibold inline-block ${pageType === 'news' ? 'text-cl-black' : 'text-green-100'}`}
              >
                {title}
              </h1>
              {(pageType === 'thema' || pageType === 'euOverview') && (
                <p className='p-base max-w-3xl pt-2 text-green-100'>{subtitle} </p>
              )}
              {pageType === 'news' && (
                <p className='p-base max-w-3xl pt-2 text-cl-black'>{props.newsData.newsDate} </p>
              )}
              {pageType === 'euOverview' && (
                <>
                  <p className='p-base mt-4 max-w-xl text-white'>
                    CircuLaw laat je zien hoe je deze verordeningen en richtlijnen kunt toepassen op
                    de circulaire doelen van jouw gemeente of provincie.
                  </p>
                  <div className='mt-8'>
                    <ScrollButton to='laws' offset={-140}>
                      <CustomButton color='euPage'>
                        Bekijk de {props?.length} wetten{' '}
                        <IconArrowDown className='ml-3 h-5 w-5 text-green-100' />
                      </CustomButton>
                    </ScrollButton>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
