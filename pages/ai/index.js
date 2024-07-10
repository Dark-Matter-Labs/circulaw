import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import CustomButton from '@/components/custom-button';
import Layout from '@/components/layouts/layout';
import aiImage from '@/public/lawren.png';
import aiIcon1 from '@/public/aiIcon1.png';
import aiIcon2 from '@/public/aiIcon2.png';
import aiIcon3 from '@/public/aiIcon3.png';

export default function AI() {
  return (
    <Layout title='AI' pageUrl='ai'>
      <div className='global-margin my-20 text-center flex flex-col justify-center'>
        <span className='border border-black p-2xs-semibold rounded-full px-4 py-2 mx-auto mb-4'>
          introducing
        </span>
        <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-gray-800 pb-2'>
          CircuLaw AI playground
        </h1>
        <p className=' p-base text-gray-800 max-w-xl mx-auto py-5'>
          Discover the power of AI in simplifying circular legislation. Our innovative open-source
          chat agent is designed to make complex circularity laws accessible to everyone. Whether
          you’re a business owner, policymaker, or curious citizen, this intelligent assistant is
          here to guide you.
        </p>
        <Image src={aiImage} width={500} alt='AI assistant' className='mx-auto' />
        <div className='bg-[#F5F5F5] py-10 w-[500px] mx-auto max-w-xl'>
          <h2 className='heading-xl-semibold sm:heading-3xl-semibold text-gray-800 pb-2 m'>
            Hello I’m Lawren!
          </h2>
          <p className=' p-xs text-gray-800 max-w-xl mx-auto py-5 px-5'>
            I’m your AI assistant for circular legislation. I’ve been designed to help make complex
            circularity laws and regulations more accessible and understandable. Whether you’re a
            business owner, policymaker, or simply interested in sustainability, I’m here to assist
            you. Just tell me about your role and what you’d like to know, and I’ll do my best to
            provide clear, relevant information on circular economy regulations. My goal is to
            simplify your journey through the world of circular legislation.
          </p>
          <a href='https://circulai.wolk.run/'>
            <CustomButton color='greenBackground'>
              Ask LawrenAI a question{' '}
              <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
            </CustomButton>
          </a>
        </div>

        <div className='py-10 mx-auto max-w-xl '>
          <h3 className=' heading-xl-semibold sm:heading-2xl-semibold text-gray-800 max-w-xl mx-auto py-5'>
            You should keep a few things in mind:
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 text-left place-items-center gap-10'>
            <div>
              <Image src={aiIcon1} width={100} alt='microscope icon' />
            </div>
            <div className='sm:col-span-2'>
              <p className=' p-base text-gray-800 max-w-2xl mx-auto '>
                Lawren may occasionally produce answers that could be misleading. Be sure to always
                check the results.
              </p>
            </div>

            <div>
              <Image src={aiIcon2} width={100} alt='document icon' />
            </div>
            <div className='sm:col-span-2'>
              <p className=' p-base text-gray-800 max-w-2xl mx-auto '>
                Lawren is not intended to give advice. Its purpose is to make information on
                circulaw.nl more accessible. Check the source links in the answers for more details.
              </p>
            </div>

            <div>
              <Image src={aiIcon3} width={100} alt='stacks icon' />
            </div>
            <div className='sm:col-span-2'>
              <p className=' p-base text-gray-800 max-w-2xl mx-auto '>
                Lawren runs on an open source model trained with specific data regarding circular
                law. It is limited and will therefore not be able to answer questions outside its
                knowledge base.
              </p>
            </div>
          </div>
        </div>
        <div className='py-10 mx-auto max-w-xl '>
          <h3 className=' heading-xl-semibold sm:heading-2xl-semibold text-gray-800 max-w-xl mx-auto py-5'>
            Your feedback is very valuable to us!
          </h3>
          <a href='https://limelights.typeform.com/circulaw'>
            <CustomButton color='greenBackground'>
              Fill in the short survey (3 min){' '}
              <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
            </CustomButton>
          </a>
        </div>
      </div>
    </Layout>
  );
}
