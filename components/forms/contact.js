'use client';

import { useState } from 'react';

import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import { scrollToTop } from '@/utils/scroll-to-top';
import axios from 'axios';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/a53bd6aa-495c-416a-b8ec-2b36b6be1af9';

export default function ContactPageComponent() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
    message: '',
    subscribe: 'no',
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, { headers: { Accept: 'application/json' } })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: '',
          org: '',
          role: '',
          email: '',
          message: '',
          subscribe: 'no',
        });
        console.log(response);
        scrollToTop();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='global-margin'>
      {!formStatus ? (
        <>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pt-10 text-green-600'>
            Contact
          </h1>
          <div className='mb-20 mt-8 max-w-3xl'>
            <form
              acceptCharset='UTF-8'
              method='POST'
              encType='multipart/form-data'
              id='ajaxForm'
              onSubmit={handleSubmit}
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label htmlFor='first-name' className='block text-gray-800'>
                  Wat is je naam? <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-cl border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    value={query.name}
                    onChange={handleChange()}
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='company' className='block text-gray-800'>
                  Voor welke organisatie werk je?
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='org'
                    id='company'
                    autoComplete='organization'
                    className='block w-full rounded-cl border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    value={query.org}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='role' className='block text-gray-800'>
                  Wat is je functie/rol?
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='role'
                    id='role'
                    autoComplete='role'
                    className='block w-full rounded-cl border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    value={query.role}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-gray-800'>
                  Op welk e-mailadres kunnen we je bereiken?{' '}
                  <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-cl border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    aria-describedby='emailHelp'
                    required
                    value={query.email}
                    onChange={handleChange()}
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-gray-800'>
                  Wat is je vraag of opmerking? <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='block w-full rounded-cl border border-gray-300 px-4 py-3 shadow-sm focus:border-green-600 focus:ring-green-600'
                    required
                    value={query.message}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='mt-1 flex items-baseline'>
                <input type='hidden' name='subscribe' value='no' />
                <input type='checkbox' name='subscribe' value='yes' onChange={handleChange()} />
                <label className='block pl-2 text-gray-800'>Abonneren op de nieuwsbrief</label>
              </div>
              <div className='sm:col-span-2'>
                <div className=''>
                  <p className='text-gray-500'>
                    Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                    hebben of je op de hoogte willen houden van je vraag of opmerking. Je gegevens
                    zullen nooit gebruikt worden voor andere doeleinden. Lees onze{' '}
                    <Link href='/privacy-policy' className='link-interaction'>
                      <span className='text-green-500 hover:text-green-300 focus:text-green-200 focus:ring-2 focus:ring-white active:text-green-800'>
                        privacy verklaring.
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <input type='hidden' name='_gotcha' className='hidden' />
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className={
                    'button inline-flex items-center rounded-full border-2 border-green-600 bg-transparent px-4 py-2 text-green-600 hover:bg-green-200 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-300'
                  }
                >
                  Verzenden &rarr;
                </button>
              </div>
            </form>
            <h4 className='p-base-semibold sm:headling-xl-semibold pt-8 text-green-400'>
              * dit veld is verplicht
            </h4>
          </div>
        </>
      ) : (
        <>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pt-10 text-green-600'>
            Bedankt!
          </h1>
          <p className='p-base max-w-2xl py-10 text-gray-800'>
            Dank voor je bericht! Je hoort van ons.
          </p>
          <div className='pb-20 sm:col-span-2'>
            <Link href='/'>
              <CustomButton color='whiteBackground'>Naar de homepage &rarr;</CustomButton>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
