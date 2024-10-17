import { TabGroup, TabList, TabPanels, TabPanel, Tab } from '@headlessui/react';
import TabContent from './tab-content';

const tabs = [
  { name: 'Beleid', value: 'beleid' },
  { name: 'Inkoop', value: 'inkoop' },
  { name: 'Grondpositie', value: 'grondpositie' },
  { name: 'Subsidie', value: 'subsidie' },
  { name: 'Fiscaal', value: 'fiscaal' },
];

function mergeData(obj, tabs) {
  return tabs.map(tab => ({
    name: tab.name,
    value: tab.value,
    number: obj[tab.value] || 0
  }));
}

export default function TabGroupComponent(props) {
  const finalTabs = mergeData(props.numberOfInstruments, tabs)
  return (
    <>
     <TabGroup className='max-w-[1280px] pb-10 global-margin'>
        <TabList className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5 overflow-scroll no-scrollbar'>
          {finalTabs.map((tab) => (
            <Tab
              disabled={tab.number === 0}
              key={tab.name}
              className='disabled:opacity-50 heading-xl-semibold sm:heading-2xl-semibold first-letter:capitalize group overflow-hidden p-3 text-gray-100 bg-green-500 rounded-t-cl flex flex-row items-baseline data-[selected]:bg-gray-100 data-[selected]:text-green-500'
            >
              {tab.name}
              <span className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px] pl-1'>
                ({tab.number})
              </span>
            </Tab>
          ))}
        </TabList>
        <TabPanels className='w-full'>
          {finalTabs.map((tab) => (
            <TabPanel key={tab.name}>
              <TabContent
                tabValue={tab.value}
                thema={props.thema}
                transitionAgenda={props.transitionAgenda}
              />
            </TabPanel>
          ))}
        </TabPanels>
        </TabGroup>
    </>
  );
}
