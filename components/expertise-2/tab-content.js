import { TabPanel } from '@headlessui/react';
import ExplinationText from '../expertise-page/explination-text';
import { sanityFetch } from '@/lib/sanity';
import DisplayInstruments from './display-instruments';

export default async function TabContent({tabValue, thema}) {
    const CATEGORIE_INSTRUMENTS_QUERY=`
    *[_type == 'instrument' && thema->slug.current == $thema && ${tabValue} == true]{
    ...,
    "thema": thema->slug.current,
    "transitionAgenda": transitionAgenda->slug.current,
    "slug": slug.current
    }
    `
    const instruments = await sanityFetch({
        query: CATEGORIE_INSTRUMENTS_QUERY, 
        qParams: {thema: thema},
        tags: ['instruments', 'thema']
    })
    return (
        <TabPanel>
            <ExplinationText selected ={tabValue}/>
            <DisplayInstruments instruments={instruments}/>
        </TabPanel>
    )
}