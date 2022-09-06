import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Link from 'next/link';
import Layout from '../../components/layout';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <Layout>
      <div className='mx-7 sm:mx-auto max-w-7xl'>
        <h1 className='text-green1 pt-10 mobile sm:main'>Contact</h1>
        <p className='body-text-mobile sm:body-text py-10 max-w-2xl'>
          Heb je een vraag of opmerking over de site of het project? Vul dan je gegevens in. Na
          verzending nemen we zo snel mogelijk contact met je op.
        </p>
        <div className='mt-8 max-w-3xl mb-20'>
          <form
            action='#'
            method='POST'
            className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
          >
            <div>
              <label
                htmlFor='first-name'
                className='block text-lg font-semibold font-manrope text-black'
              >
                Wat is je naam? (niet verplicht)
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-green1 focus:border-green1 border-gray-300 rounded-md'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-lg font-semibold font-manrope text-black'
              >
                Voor welke organisatie werk je? (niet verplicht)
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='organization'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-green1 focus:border-green1 border-gray-300 rounded-md'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-lg font-semibold font-manrope text-black'
              >
                Op welk e-mailadres kunnen we je bereiken?
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-green1 focus:border-green1 border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-lg font-semibold font-manrope text-black'
              >
                Wat is je vraag of opmerking?
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='py-3 px-4 block w-full shadow-sm focus:ring-green1 focus:border-green1 border border-gray-300 rounded-md'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                    )}
                  >
                    <span className='sr-only'>Agree to policies</span>
                    <span
                      aria-hidden='true'
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      )}
                    />
                  </Switch>
                </div>
                <div className='ml-3'>
                  <p className='text-base text-gray-500'>
                    Ik ga akkoord met de{' '}
                    <Link href='/privacy-policy'>
                      <a href='#' className='font-medium text-greenLink font-manrope'>
                        privacy verklaring
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <button
                type='submit'
                className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-white hover:bg-greenLink focus:outline-none'
              >
                Verzenden &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
