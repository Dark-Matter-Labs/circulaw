'use client';

import { useState } from 'react';

import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import { scrollToTop } from '@/utils/scroll-to-top';
import axios from 'axios';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/raeqmmza';

export default function NewsLetterComponent() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
    message: '',
    subscribe: 'yes',
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
          subscribe: 'yes',
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
          <h1 className='heading-3xl-semibold sm:heading-5xl-semibold pt-10 text-green-500'>
            Nieuwsbrief
          </h1>

          <div className='mb-20 mt-8 max-w-3xl'>
            <div className='pb-8 sm:col-span-2'>
              <div className=''>
                <p className='text-cl-black'>
                  Fijn dat je geïnteresseerd bent in CircuLaw-nieuws. Onze nieuwsbrief sturen we
                  alleen als we echt wat te melden hebben. Je hoeft dus niet bang te zijn voor een
                  overdaad aan berichten van ons.
                </p>
              </div>
            </div>
            <form
              acceptCharset='UTF-8'
              method='POST'
              encType='multipart/form-data'
              id='ajaxForm'
              onSubmit={handleSubmit}
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label htmlFor='first-name' className='block text-cl-black'>
                  Wat is je naam? <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-cl border-cl-grey px-4 py-3 shadow-sm focus:border-green-500 focus:ring-green-500'
                    value={query.name}
                    onChange={handleChange()}
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-cl-black'>
                  Op welk e-mailadres kunnen we je bereiken?{' '}
                  <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-cl border-cl-grey px-4 py-3 shadow-sm focus:border-green-500 focus:ring-green-500'
                    aria-describedby='emailHelp'
                    required
                    value={query.email}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='company' className='block text-cl-black'>
                  Voor welke organisatie werk je?
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='org'
                    id='company'
                    autoComplete='organization'
                    className='block w-full rounded-cl border-cl-grey px-4 py-3 shadow-sm focus:border-green-500 focus:ring-green-500'
                    value={query.org}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='role' className='block text-cl-black'>
                  Wat is je functie/rol?
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='role'
                    id='role'
                    autoComplete='role'
                    className='block w-full rounded-cl border-cl-grey px-4 py-3 shadow-sm focus:border-green-500 focus:ring-green-500'
                    value={query.role}
                    onChange={handleChange()}
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <div className=''>
                  <p className='text-cl-grey'>
                    We slaan je persoonsgegevens op en gebruiken deze alleen voor het toezenden van
                    nieuwsbrieven. Wil je geen nieuwsbrieven meer ontvangen? Onder aan iedere
                    nieuwsbrief vind je de mogelijkheid je af te melden. Zie verder onze{' '}
                    <Link href='/privacy-policy' className='link-interaction'>
                      <span className='text-green-500 hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'>
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
                    'button inline-flex items-center rounded-full border-2 border-green-500 bg-transparent px-4 py-2 text-green-500 hover:bg-green-300 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400'
                  }
                >
                  Verzenden &rarr;
                </button>
              </div>
            </form>
            <h4 className='p-base-semibold pt-8 text-green-400'>* dit veld is verplicht</h4>
          </div>
        </>
      ) : (
        <>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pt-10 text-green-500'>
            Bedankt!
          </h1>
          <p className='p-lg max-w-2xl py-10 text-cl-black'>
            Bedankt voor je aanmelding voor onze nieuwsbrief!
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
