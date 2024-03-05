import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import EULawCard from '@/components/eu-law/eu-law-card';
import bannerImage from '@/public/banner.png';

const euLawsQuery = `
*[_type == "euLaw"]{...}
`;

export default function EULaw({ laws }) {
  return (
    <Layout title='EU wetgeving'>
      <div className='h-[200px] bg-green-800 pt-3 overflow-hidden'>
        <div className='relative object-cover w-full h-[102%]'>
          <Image src={bannerImage} alt={'hero image'} fill className='z-0 bg-cover' priority />

          <div className='flex flex-col justify-between global-margin h-full relative z-10'>
            <div className='pt-6'>
              <Link
                href='/'
                type='button'
                className='rounded-clSm bg-white pl-2 pr-3 py-1.5 p-2xs-bold text-green-600'
              >
                <span className='link-interaction '>
                  Home <span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
            <h1 className='mb-8 p-5xl-semibold sm:p-7xl-bold text-grey-100'>Eu wetgeving</h1>
          </div>
        </div>
      </div>
      <div className='global-margin'>
        <div className='flex flex-col max-w-2xl'>
          <div className='mb-4 mt-10'>
          De Europese Unie ontwikkelt continu wetten en richtlijnen met het oog op de verduurzaming van onze maatschappij en de bescherming van onze natuur. In veel gevallen zijn die wetten en richtlijnen ook toepasbaar op de circulaire economie. In deze sectie van CircuLaw verzamelen we zulke wetten en richtlijnen, en vertellen we je hoe je ze ook in jouw gemeente of provincie van toepassing zijn. Op die manier vormen ze een waardevolle aanvulling op alle andere instrumenten binnen CircuLaw.
          </div>
          <div>
          De wetten en richtlijnen die we hier bespreken veranderen regelmatig. Sommige zijn al vastgesteld, sommige zijn nog in ontwikkeling, sommige worden – of zijn - herzien. Wij houden continu de status bij – en alle wijzigingen, nieuwe ontwikkelingen en nieuwe relevante wetten en richtlijnen voegen we hier toe. Neem dus regelmatig even een kijkje! 

          </div>
        </div>
      </div>
      <div className=' grid grid-cols-1 lgNav:grid-cols-2 gap-y-4 gap-x-8 global-margin my-12 relative min-h-screen'>
        {laws?.map((law, id) => (
          <EULawCard law={law} key={id} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // const laws = client.fetch(euLawsQuery)
  const laws = await client.fetch(euLawsQuery);

  return {
    props: {
      laws,
    },
  };
}
