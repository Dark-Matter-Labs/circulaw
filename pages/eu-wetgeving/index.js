import EULawCard from '@/components/eu-law/eu-law-card';
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import bannerImage from '@/public/banner.png';
import Image from 'next/image';
import Link from 'next/link';

// refactor
const euLawsQuery = `
*[_type == "euLaw"]{
  slug, 
  title, 
  introText,
  statusStep,
  statusTwoStep, 
  statusThreeStep, 
}
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
            <h1 className='mb-8 p-5xl-semibold sm:p-7xl-bold text-grey-100'>EU wetgeving</h1>
          </div>
        </div>
      </div>
      <div className='global-margin'>
        <div className='flex flex-col max-w-2xl p-base'>
          <p className='mb-4 mt-10'>
            Er komt een &apos;storm&apos; aan Europese wet- en regelgeving op ons af, gericht op het
            verduurzamen van onze maatschappij en de circulaire economie. Veel hiervan valt onder de
            &apos;Green Deal&apos; en Fit for 55, maar ook buiten de Green Deal wordt wet- en
            regelgeving aangepast. Veel decentrale overheden hebben geen zicht op de verplichtingen
            en kansen die voortvloeien uit al deze Europese wet- en regelgeving. Deze ontwikkeling
            brengt zowel beperkingen als kansen om de transitie naar circulariteit te versnellen.
          </p>
          <p>
            Een deel van de wetten die we hier bespreken hebben nog de status &apos;in
            onderhandeling&apos;. Zij veranderen regelmatig totdat het wetgevingsproces is
            doorlopen. Wij houden continu de status bij. Neem dus regelmatig even een kijkje!
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 lgNav:grid-cols-2 gap-y-4 gap-x-8 global-margin my-12 relative min-h-screen'>
        {laws?.map((law, id) => (
          <div key={id} className='md:min-h-[453px] md:max-h-[550px]'>
            <EULawCard law={law} />
          </div>
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
      revalidate: 1,
    },
  };
}
