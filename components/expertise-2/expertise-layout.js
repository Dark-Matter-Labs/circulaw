import { TabGroup, TabList } from '@headlessui/react'
import OverviewPageHeader from '../theme-page/overview-page-header'
import TabItem from './tab'


const tabs = [
    {name: 'Beleid', value: 'beleid'},
    {name: 'Inkoop', value: 'inkoop'},
    {name: 'Grondpositie', value: 'grondpositie'},
    {name: 'Subsidie', value: 'subsidie'},
    {name: 'Fiscaal', value: 'fiscaal'},
]

export default function ExpertiseLayout2(props) {
    

    return (
        <div className='sm:bg-gradient-to-t sm:from-[#F8FAF8] sm:to-[#F8FAF8]'>
        <div className='-mt-10'>
          <div className='h-[310px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
            <OverviewPageHeader
              thema={props.thema}
              productChain={props.transitionAgenda}
              title={props.title}
              page='samenhang'
            />

            <TabGroup>
            <div className='hidden sm:flex max-w-[1280px] pb-10 global-margin'>
                <TabList className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5'>
                    {tabs.map((tab) => (
                        <TabItem key={tab.name} tabValue={tab.value} thema={props.thema}>
                            {tab.name}
                        </TabItem>
                    ))}
                </TabList>
                </div>
            </TabGroup>
          </div>
          </div>
          </div>
    )
}