'use client';

import Image from 'next/image';

import Badge from '../shared/new-badge';
import NewButton from '../shared/new-button';
import Tag from '../shared/new-tag';
import Breadcrumb from './breadcrumbs';

export default function Header({
  imageURL,
  bgColor,
  title,
  pageType,
  subtitle,
  headerRef,
  ...props
}) {
  return (
    <>
      <div
        id='header'
        ref={headerRef}
        className={`${bgColor} global-margin mt-10 sm:mt-20 ${pageType === 'euLaw' ? 'rounded-t-cl' : 'rounded-cl'}`}
      >
        <div
          className={`${pageType === 'categorie' ? 'pb-[116px] sm:pt-10' : ''} relative h-full w-full overflow-hidden p-6 sm:px-16`}
        >
          {imageURL && (
            <>
              <Image
                src={imageURL}
                alt='homepage decoration'
                fill
                sizes='100vw'
                className={`${pageType === 'thema' ? 'object-cover' : '!h-auto !w-auto origin-top'} rounded-cl`}
                priority={true}
                quality={100}
              />
              {pageType === 'thema' && (
                <div className='absolute left-0 top-0 z-0 h-full w-full rounded-cl bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>
              )}
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
                      themaType={props.data.themaType}
                    >
                      Beleid
                    </Tag>
                  )}
                  {props.data.fiscaal && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='fiscaal'
                      themaType={props.data.themaType}
                    >
                      Fiscaal
                    </Tag>
                  )}
                  {props.data.inkoop && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='inkoop'
                      themaType={props.data.themaType}
                    >
                      Inkoop
                    </Tag>
                  )}
                  {props.data.grondpositie && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='grondpositie'
                      themaType={props.data.themaType}
                    >
                      Grondpositie
                    </Tag>
                  )}
                  {props.data.subsidie && (
                    <Tag
                      variant='black'
                      href={`/${props.data.transitionAgenda}/${props.data.thema}/categorie`}
                      category='subsidie'
                      themaType={props.data.themaType}
                    >
                      Subsidie
                    </Tag>
                  )}
                </div>
              )}
              {pageType === 'news' && <Badge variant='white'>{props.newsData.category}</Badge>}
              {pageType === 'productChain' && (
                <div className='p-base sm:heading-2xl-semibold text-green-300'>{subtitle}</div>
              )}
              <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-green-100'>
                {title}
              </h1>
              {(pageType === 'thema' || pageType === 'euOverview') && (
                <p className='p-base max-w-3xl pt-2 text-green-100'>{subtitle} </p>
              )}
              {pageType === 'news' && (
                <p className='heading-2xl-semibold max-w-3xl pt-2 text-green-100'>
                  {props.newsData.newsDate}{' '}
                </p>
              )}
              {pageType === 'euOverview' && (
                <>
                  <p className='p-base mt-4 max-w-xl text-white'>
                    CircuLaw laat je zien hoe je deze verordeningen en richtlijnen kunt toepassen op
                    de circulaire doelen van jouw gemeente of provincie.
                  </p>
                  <div className='mt-8'>
                    <NewButton icon='arrowDown' scrollTo='laws' variant='secondaryLight'>
                      Bekijk de {props?.length} wetten{' '}
                    </NewButton>
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
