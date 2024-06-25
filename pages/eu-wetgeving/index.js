import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EULawCard from '@/components/eu-law/eu-law-card';
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import bannerImage from '@/public/banner.png';

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
  const router = useRouter();
  return (
    <Layout title='EU wetgeving' pageUrl={router.asPath}>
      <div className='h-[200px] bg-green-800 pt-3 overflow-hidden'>
        <div className='relative object-cover w-full h-[102%]'>
          <Image src={bannerImage} alt={'hero image'} fill className='z-0 bg-cover' priority />

          <div className='flex flex-col justify-between global-margin h-full relative z-10'>
            <div className='pt-6'>
              <Link
                href='/'
                type='button'
                className='rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 p-2xs-bold text-green-600'
              >
                <span className='link-interaction '>
                  Home <span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
            <h1 className='mb-8 heading-4xl-semibold sm:heading-5xl-semibold text-gray-100'>
              EU wetgeving
            </h1>
          </div>
        </div>
      </div>
      <div className='global-margin'>
        <div className='flex flex-col max-w-2xl p-base'>
          <p className='mb-4 mt-10'>
            Er komt een &apos;storm&apos; aan Europese wet- en regelgeving op ons af, gericht op het
            verduurzamen van onze maatschappij en de circulaire economie. Veel hiervan valt onder de
            &apos;Green Deal&apos; en Fit for 55, maar ook daarbuiten wordt wet- en regelgeving
            aangepast. Omdat decentrale overheden vaak geen zicht hebben op de verplichtingen en
            kansen die voortvloeien uit alle Europese wet- en regelgeving, hebben we alvast 5 wetten
            geanalyseerd.
          </p>
          <p>
            Een aantal hiervan heeft nog de status &apos;in onderhandeling&apos;. De inhoud wijzigt
            regelmatig tijdens het wetgevingsproces. Wij houden continu de status bij. Op basis van
            jullie feedback zullen we ook nieuwe wetten uitwerken en nieuwe informatie toevoegen.
            Neem dus regelmatig even een kijkje!
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lgNav:grid-cols-3 gap-y-4 gap-x-8 global-margin my-12 relative'>
        {laws?.map((law, id) => (
          <div key={id} className=''>
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
