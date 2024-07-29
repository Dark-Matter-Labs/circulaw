import { client } from '@/lib/sanity'
import { FAQ_PAGE_QUERY } from '@/lib/queries'
import FAQPageComponent from '@/components/faq-page'

async function getFAQData() {
    const FAQData = await client.fetch(FAQ_PAGE_QUERY)

    if (!FAQData) {
        throw new Error('could not get FAQData')
    }
    return FAQData
}

export default async function VraagAndAntwoordPage() {
    const FAWContent = await getFAQData()
    return  <FAQPageComponent data={FAWContent} />
}