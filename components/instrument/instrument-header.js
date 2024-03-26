import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SocialButtons from '../social-buttons';
import InstrumentMetaData from './instrument-metadata';
import Tag from '../tag';

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
      <div className='sm:sticky -top-[304px] lgNav:-top-[277px] z-20 bg-gradient-to-b from-[#042D36] to-[#22532200] bg-green-500 pt-3'>
        <div className='h-auto sm:h-[360px] flex flex-col global-margin justify-between'>
          <div className='max-w-[800px] pt-6 pb-6 sm:pb-0 flex justify-between items-center'>
            <button
              type='button'
              onClick={() => router.back()}
              className='rounded-clSm bg-white pl-2 pr-3 py-1.5 p-2xs-bold text-green-600'
            >
              <span className='link-interaction '>
                {' '}
                <span className='mr-2'>{'<'}</span>Terug
              </span>
            </button>
            <div className='float-right'>
              <SocialButtons title={data?.instrument?.titel} viewport='desktop' />
            </div>
          </div>
          <div className='mb-6 h-auto'>
            <div className='w-full flex'>
              <Link
                href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema
                  ?.toLowerCase()
                  .replace(/ /g, '-')}`}
                className=''
              >
                <Tag classes='border border-gray-100 hover:border-green-200 active:border-green-400 text-gray-100 mr-2 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white'>
                  {data?.instrument?.thema?.replace('-', ' ')}
                </Tag>
              </Link>

              {data?.instrument?.beleid === true && data?.instrument?.themaType === 'thema' && (
                <Link
                  href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema}/categorie`}
                  onClick={() => setCategorie('beleid')}
                >
                  <Tag classes='bg-green-300 text-green-800 hover:text-gray-100 hover:border hover:border-gray-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white mr-2'>
                    Beleid
                  </Tag>
                </Link>
              )}
              {data?.instrument?.beleid === true && data?.instrument?.themaType !== 'thema' && (
                <Tag classes='bg-green-300 text-green-800 mr-2'>Beleid</Tag>
              )}
              {data?.instrument?.inkoop === true && data?.instrument?.themaType === 'thema' && (
                <Link
                  href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema}/categorie`}
                  onClick={() => setCategorie('inkoop')}
                >
                  <Tag classes='bg-green-300 text-green-800 hover:text-gray-100 hover:border hover:border-gray-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white mr-2'>
                    Inkoop
                  </Tag>
                </Link>
              )}
              {data?.instrument?.inkoop === true && data?.instrument?.themaType !== 'thema' && (
                <Tag classes='bg-green-300 text-green-800 mr-2'>Inkoop</Tag>
              )}

              {data?.instrument?.grondpositie === true && data?.instrument?.themaType === 'thema' && (
                <Link
                  href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema}/categorie`}
                  onClick={() => setCategorie('grondpositie')}
                >
                  <Tag classes='bg-green-300 text-green-800 hover:text-gray-100 hover:border hover:border-gray-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white mr-2'>
                    Grondpositie
                  </Tag>
                </Link>
              )}
              {data?.instrument?.grondpositie === true &&
                data?.instrument?.themaType !== 'thema' && (
                  <Tag classes='bg-green-300 text-green-800 mr-2'>Grondpositie</Tag>
                )}

              {data?.instrument?.subsidie === true && data?.instrument?.themaType === 'thema' && (
                <Link
                  href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema}/categorie`}
                  onClick={() => setCategorie('subsidie')}
                >
                  <Tag classes='bg-green-300 text-green-800 hover:text-gray-100 hover:border hover:border-gray-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white mr-2'>
                    Subsidie
                  </Tag>
                </Link>
              )}
              {data?.instrument?.subsidie === true && data?.instrument?.themaType !== 'thema' && (
                <Tag classes='bg-green-300 text-green-800 mr-2'>Subsidie</Tag>
              )}
              {data?.instrument?.fiscaal === true && data?.instrument?.themaType === 'thema' && (
                <Link
                  href={`/${data?.instrument?.transitionAgenda}/${data?.instrument?.thema}/categorie`}
                  onClick={() => setCategorie('fiscaal')}
                >
                  <Tag classes='bg-green-300 text-green-800 hover:text-gray-100 hover:border hover:border-gray-100 hover:bg-transparent active:border-green-400 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white mr-2'>
                    Fiscaal
                  </Tag>
                </Link>
              )}
              {data?.instrument?.fiscaal === true && data?.instrument?.themaType !== 'thema' && (
                <Tag classes='bg-green-300 text-green-800 mr-2'>Fiscaal</Tag>
              )}
            </div>
            <div className='max-w-4xl flex justify-start overflow-hidden'>
              <h1 className='justify-self-start p-5xl-semibold sm:p-7xl-bold lg:block mt-1 text-gray-100 pb-1'>
                {data?.instrument?.titel}
              </h1>
            </div>
          </div>
        </div>
        {/* Metadata */}
        <div className='bg-gray-100 w-full flex justify-items-start sm:border-b sm:border-gray-300'>
          <div className='global-margin w-full'>
            <div className='grid grid-col-1 w-full max-w-4xl'>
              <InstrumentMetaData data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
