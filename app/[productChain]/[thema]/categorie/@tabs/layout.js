import { TabGroup, Tab, TabList, TabPanels } from '@headlessui/react';
import Link from 'next/link';


const tabs = [
    { name: 'Beleid', value: 'beleid' },
    { name: 'Inkoop', value: 'inkoop' },
    { name: 'Grondpositie', value: 'grondpositie' },
    { name: 'Subsidie', value: 'subsidie' },
    { name: 'Fiscaal', value: 'fiscaal' },
  ];
  

export default function Layout({children}) {
  console.log(children.props.template, 'rendered on categorie')
    return (
        <>
        <TabGroup className='max-w-[1280px] pb-10 global-margin'>
        <TabList className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5 overflow-scroll no-scrollbar'>
          {tabs.map((tab) => (
            <Link href = {`/bouw/houtbouw/categorie/${tab.value}`} key={tab.name}>
            <Tab
              disabled={tab.number === 0}
              
              className='disabled:opacity-50 heading-xl-semibold sm:heading-2xl-semibold first-letter:capitalize group overflow-hidden p-3 text-gray-100 bg-green-500 rounded-t-cl flex flex-row items-baseline data-[selected]:bg-gray-100 data-[selected]:text-green-500'
            >
              {tab.name}
              <span className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px] pl-1'>
                ({tab.number})
              </span>
            </Tab>
            </Link>
          ))}
        </TabList>
        <TabPanels>
          <div id='hello'>
          {children}
          </div>
            
        </TabPanels>
        </TabGroup>
        </>
    )
}