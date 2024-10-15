import { TabPanel } from '@headlessui/react';
import ExplinationText from './explination-text';
import { sanityFetch } from '@/lib/sanity';
import TabLayout from './tab-layout';

export default async function TabContent({tabValue, thema, transitionAgenda}) {
    // TODO: make this a function and move it to queries.js
    const CATEGORIE_INSTRUMENTS_QUERY=`
    *[_type == 'instrument' && thema->slug.current == $thema && ${tabValue} == true]{
            "slug": slug.current, 
            "transitionAgenda": transitionAgenda->.slug.current,
            "thema": thema->.slug.current,
            'themaName': thema->.themaName,
            titel,
            "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
            beleid,
            beleidSubCategory,
            inkoop,
            inkoopSubCategory,
            grondpositie,
            grondpositieSubCategory,
            subsidie,
            fiscaal,
            "slug": slug.current,
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
            <TabLayout instruments={instruments} selected={tabValue} transitionAgenda={transitionAgenda}/>
        </TabPanel>
    )
}