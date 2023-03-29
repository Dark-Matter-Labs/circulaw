import { client } from '../../lib/sanity'
import { FAQPageQuery } from '../../lib/queries'
import FAQPageComponent from '../../components/faq-page'
import Layout from '../../components/layouts/layout'

export default function FAQ({FAQ}) {
    return (
        <Layout>
            <FAQPageComponent data ={FAQ}/>
        </Layout>
    )
}

export async function getStaticProps() {
    const FAQ = await client.fetch(FAQPageQuery)    
    return {
        props: {
            FAQ,
        }, 
        revalidate:1}
}