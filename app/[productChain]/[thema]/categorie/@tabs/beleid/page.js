import { TabPanel } from '@headlessui/react'
import TabContent from '@/components/eu-law/tab-content'
import { sanityFetch } from '@/lib/sanity';


const CATEGORIE_INSTRUMENTS_QUERY = `
*[_type == 'instrument' && thema->slug.current == $thema && 'beleid' == true]{
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
`;

export default async function Beleid() {
    const instruments = await sanityFetch({
        query: CATEGORIE_INSTRUMENTS_QUERY, 
        tags: ['instrument']
    })

    const theme = instruments[0].thema
    const transitionAgenda = instruments[0].transitionAgenda
    return (
        <TabPanel>
            <TabContent
                tabValue='beleid'
                thema={theme}
                transitionAgenda={transitionAgenda}
                instruments = {instruments}
              />
        </TabPanel>
    )
}