import { TabGroup, TabList, TabPanels, TabPanel, Tab } from '@headlessui/react';
import TabItem from './tab-item';
import TabContent from './tab-content';

const tabs = [
  { name: 'Beleid', value: 'beleid' },
  { name: 'Inkoop', value: 'inkoop' },
  { name: 'Grondpositie', value: 'grondpositie' },
  { name: 'Subsidie', value: 'subsidie' },
  { name: 'Fiscaal', value: 'fiscaal' },
];

export default function TabGroupComponent(props) {
  return (
    <>
      <TabGroup defaultIndex={0} className='max-w-[1280px] pb-10 global-margin'>
        <TabList className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5 overflow-scroll no-scrollbar'>
          {tabs.map((tab) => (
            <Tab key={tab.name}>
              <TabItem tabValue={tab.value} thema={props.thema} tabName={tab.name} />
            </Tab>
          ))}
        </TabList>
        <TabPanels className='w-full'>
          {tabs.map((tab) => (
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
