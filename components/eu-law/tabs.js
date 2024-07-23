'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function Tabs({summaryData}) {
    const searchParams = useSearchParams() 
    let selectedTab = searchParams.get('tab')
    if (!selectedTab) {
        selectedTab = 'overzicht'
    } 

    

    return (
        <div className='sticky top-16 lgNav:top-24 shadow-lg z-50'>
        <div className='bg-green-800 -mt-12 sm:-mt-[72px] flex overflow-x-scroll snap-x snap-mandatory no-scrollbar lgNav:block pt-4'>
          <div className='global-margin'>
            <div className='flex flex-row gap-x-2 justify-start heading-xl-semibold text-green-500 h-[72px] max-w-3xl'>
              <Link
                className={`${
                  selectedTab === 'overzicht'
                    ? 'bg-gray-100 text-green-500'
                    : 'bg-green-500 text-white'
                }  h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[105px]`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'overzicht' },
                }}
              >
                Overzicht
              </Link>
              <Link
                className={`${
                  selectedTab === 'verplichtingen-voor-europese-lidstaten'
                    ? 'bg-gray-100 text-green-500'
                    : 'bg-green-500 text-white'
                } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[200px]`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'verplichtingen-voor-europese-lidstaten' },
                }}
              >
                Verplichtingen voor Europese lidstaten
              </Link>
              <Link
                className={`${
                  selectedTab === 'relevantie-voor-regionale-en-lokale-overheden'
                    ? 'bg-gray-100 text-green-500'
                    : 'bg-green-500 text-white'
                } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[250px]`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' },
                }}
              >
                Relevantie voor regionale en lokale overheden{' '}
              </Link>
              <Link
                className={`${
                  selectedTab === 'relevantie-voor-de-circulaire-economie'
                    ? 'bg-gray-100 text-green-500'
                    : 'bg-green-500 text-white'
                } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[200px]`}
                href={{
                  pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                  query: { tab: 'relevantie-voor-de-circulaire-economie' },
                }}
              >
                Relevantie voor de circulaire economie
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}