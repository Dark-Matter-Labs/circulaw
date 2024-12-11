'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CustomButton from '@/components/custom-button';
import { scrollToTop } from '@/utils/scroll-to-top';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/adrrqlja';

export default function ELearningRegisterComponent() {
  const [formStatus, setFormStatus] = useState(false);
  const [howOther, setHowOther] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
    how: '',
    howOther: '',
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

  useEffect(() => {
    if (query.how === 'Ander') {
      setHowOther(true);
    } else {
      setHowOther(false);
    }
  }, [query]);

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
          how: '',
          howOther: '',
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
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 pt-10'>
            Schrijf je in voor de e-learning Houtbouw
          </h1>
          <div className='mt-8 max-w-3xl mb-20'>
            <p className='text-gray-800 pb-8 sm:col-span-2'>
              Hoe zet je bestaande regelgeving in om houtbouw te verankeren in beleid, en zo de
              circulaire economie te versnellen? Dat leer je in de e-learning Houtbouw van CircuLaw.
              Schrijf je nu vast in! Je ontvangt dan medio januari de link naar de e-learning.
            </p>
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
                    className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border-gray-300 rounded-cl'
                    value={query.name}
                    onChange={handleChange()}
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='company' className='block  text-gray-800'>
                  Voor welke organisatie werk je? <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='org'
                    id='company'
                    autoComplete='organization'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border-gray-300 rounded-cl'
                    value={query.org}
                    onChange={handleChange()}
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='role' className='block text-gray-800'>
                  Wat is je functie/rol? <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='role'
                    id='role'
                    autoComplete='role'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border-gray-300 rounded-cl'
                    value={query.role}
                    onChange={handleChange()}
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block  text-gray-800'>
                  Op welk e-mailadres kunnen we je bereiken?{' '}
                  <span className='text-green-400'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border-gray-300 rounded-cl'
                    aria-describedby='emailHelp'
                    required
                    value={query.email}
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='how' className='block  text-gray-800'>
                  Waar heb je over deze e-learning gehoord?
                </label>
                <div className='mt-1 mb-4'>
                  <select
                    name='how'
                    value={query.how}
                    className='rounded-xl border-green-600 '
                    onChange={handleChange()}
                  >
                    <option value='LinkedIn'>CircuLaw LinkedIn</option>
                    <option value='Website'>CircuLaw Website</option>
                    <option value='Nieuwbrief'>CircuLaw Nieuwsbrief</option>
                    <option value='Binnenlands Bestuur<'>Binnenlands Bestuur</option>
                    <option value='Ikwilcirculairinkopen.nl'>Ikwilcirculairinkopen.nl</option>
                    <option value='Ander'>Ander</option>
                  </select>
                  {howOther && (
                    <div className='mt-2'>
                      <input
                        id='howOther'
                        name='howOther'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border-gray-300 rounded-cl'
                        aria-describedby='howOther'
                        value={query.howOther}
                        onChange={handleChange()}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className='mt-1 flex items-baseline'>
                <input type='hidden' name='subscribe' value='no' />
                <input type='checkbox' name='subscribe' value='yes' onChange={handleChange()} />
                <label className='block text-gray-800 pl-2'>Abonneren op de nieuwsbrief</label>
              </div>
              <div className='sm:col-span-2'>
                <div className=''>
                  <p className='text-gray-500'>
                    Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                    hebben of je op de hoogte willen houden van je vraag of opmerking. Je gegevens
                    zullen nooit gebruikt worden voor andere doeleinden. Lees onze{' '}
                    <Link href='/privacy-policy' className='link-interaction'>
                      <span className='text-green-500 hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
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
                    'inline-flex rounded-full items-center px-4 py-2 button border-2 border-green-600 bg-transparent hover:bg-green-200 text-green-600 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white'
                  }
                >
                  Verzenden &rarr;
                </button>
              </div>
            </form>
            <h4 className='pt-8 p-base-semibold sm:headling-xl-semibold text-green-400'>
              * dit veld is verplicht
            </h4>
          </div>
        </>
      ) : (
        <>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 pt-10'>
            Bedankt!
          </h1>
          <p className='p-base py-10 max-w-2xl text-gray-800'>
            Dank voor je bericht! Je hoort van ons.
          </p>
          <div className='sm:col-span-2 pb-20'>
            <Link href='/'>
              <CustomButton color='whiteBackground'>Naar de homepage &rarr;</CustomButton>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
