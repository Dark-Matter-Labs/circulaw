'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Tag from '@/components/tag';

import SocialButtons from '../social-buttons';
import InstrumentMetaData from './instrument-metadata';

export default function InstrumentHeader({ data }) {
  const router = useRouter();
  // eslint-disable-next-line
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.length > 0) {
      let selected = localStorage.getItem('selectedTab');
      let keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      setSelectedTab(selected);
    }
  }, []);

  function setCategorie(value) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedTab', value);
      setSelectedTab(value);
    }
  }

  return (
    <>
      {/* Not sticky */}
      <div className='-top-[304px] z-20 bg-green-500 bg-gradient-to-b from-[#042D36] to-[#22532200] pt-3 sm:sticky lgNav:-top-[277px]'>
        <div className='global-margin flex h-auto flex-col justify-between sm:h-[360px]'>
          <div className='flex max-w-[800px] items-center justify-between pb-6 pt-6 sm:pb-0'>
            <button
              type='button'
              onClick={() => router.back()}
              className='p-2xs-bold rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 text-green-500'
            >
              <span className='link-interaction'>
                {' '}
                <span className='mr-2'>{'<'}</span>Terug
              </span>
            </button>
            <div className='float-right'>
              <SocialButtons title={data?.titel} viewport='desktop' />
            </div>
          </div>
          <div className='mb-6 h-auto'>
            <div className='flex w-full'>
              <Link
                href={`/${data?.transitionAgenda}/${data?.thema?.toLowerCase().replace(/ /g, '-')}`}
                className=''
              >
                <Tag classes='border border-green-100 hover:border-green-300 active:border-green-400 text-green-100 mr-2 hover:text-green-300 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white'>
                  {data?.thema?.replace('-', ' ')}
                </Tag>
              </Link>

              {data?.beleid === true && data?.themaType === 'thema' && (
                <Link
                  href={`/${data?.transitionAgenda}/${data?.thema}/categorie`}
                  onClick={() => setCategorie('beleid')}
                >
                  <Tag classes='bg-green-400 text-cl-black hover:text-green-100 hover:border hover:border-green-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white mr-2'>
                    Beleid
                  </Tag>
                </Link>
              )}
              {data?.beleid === true && data?.themaType !== 'thema' && (
                <Tag classes='bg-green-400 text-cl-black mr-2'>Beleid</Tag>
              )}
              {data?.inkoop === true && data?.themaType === 'thema' && (
                <Link
                  href={`/${data?.transitionAgenda}/${data?.thema}/categorie`}
                  onClick={() => setCategorie('inkoop')}
                >
                  <Tag classes='bg-green-400 text-cl-black hover:text-green-100 hover:border hover:border-green-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white mr-2'>
                    Inkoop
                  </Tag>
                </Link>
              )}
              {data?.inkoop === true && data?.themaType !== 'thema' && (
                <Tag classes='bg-green-400 text-cl-black mr-2'>Inkoop</Tag>
              )}

              {data?.grondpositie === true && data?.themaType === 'thema' && (
                <Link
                  href={`/${data?.transitionAgenda}/${data?.thema}/categorie`}
                  onClick={() => setCategorie('grondpositie')}
                >
                  <Tag classes='bg-green-400 text-cl-black hover:text-green-100 hover:border hover:border-green-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white mr-2'>
                    Grondpositie
                  </Tag>
                </Link>
              )}
              {data?.grondpositie === true && data?.themaType !== 'thema' && (
                <Tag classes='bg-green-400 text-cl-black mr-2'>Grondpositie</Tag>
              )}

              {data?.subsidie === true && data?.themaType === 'thema' && (
                <Link
                  href={`/${data?.transitionAgenda}/${data?.thema}/categorie`}
                  onClick={() => setCategorie('subsidie')}
                >
                  <Tag classes='bg-green-400 text-cl-black hover:text-green-100 hover:border hover:border-green-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white mr-2'>
                    Subsidie
                  </Tag>
                </Link>
              )}
              {data?.subsidie === true && data?.themaType !== 'thema' && (
                <Tag classes='bg-green-400 text-cl-black mr-2'>Subsidie</Tag>
              )}
              {data?.fiscaal === true && data?.themaType === 'thema' && (
                <Link
                  href={`/${data?.transitionAgenda}/${data?.thema}/categorie`}
                  onClick={() => setCategorie('fiscaal')}
                >
                  <Tag classes='bg-green-400 text-cl-black hover:text-green-100 hover:border hover:border-green-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-200 focus:right-2 focus:ring-white mr-2'>
                    Fiscaal
                  </Tag>
                </Link>
              )}
              {data?.fiscaal === true && data?.themaType !== 'thema' && (
                <Tag classes='bg-green-400 text-cl-black mr-2'>Fiscaal</Tag>
              )}
            </div>
            <div className='flex max-w-4xl justify-start overflow-hidden'>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold mt-1 justify-self-start pb-1 text-green-100 lg:block'>
                {data?.titel}
              </h1>
            </div>
          </div>
        </div>
        {/* Metadata */}
        <div className='flex w-full justify-items-start bg-green-100 sm:border-b sm:border-cl-grey'>
          <div className='global-margin w-full'>
            <div className='grid-col-1 grid w-full max-w-4xl'>
              <InstrumentMetaData data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
