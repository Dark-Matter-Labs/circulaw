'use client';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CustomButton from '@/components/custom-button';
import { scrollToTop } from '@/utils/scroll-to-top';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/adrrqlja';

export default function ElearnignLiveEvent() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
    how: '',
    howOther: '',
    isElearningFinished: '',
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
            Livesessie: Circulaire houtbouw onder de Omgevingswet
          </h1>
          <div className='mt-8 max-w-3xl mb-20'>
            <p className='text-gray-800 pb-6 sm:col-span-2'>
              Wat fijn dat je de e-learning over circulaire houtbouw onder de Omgevingswet hebt
              afgerond! En wat leuk dat je interesse hebt in de verdiepende livesessie, op{' '}
              <span className='p-base-semibold'>
                4 maart in Gebouw 027W van het AMS Institute, Kattenburgerstraat 5, Amsterdam
              </span>
              .
            </p>
            <p className='text-gray-800 pb-6'>
              Als je hieronder je gegevens invult, dan laten we je snel weten of je wordt
              uitgenodigd. Je ontvangt dan ook alle details over het programma.
            </p>
            <p className='text-gray-800 pb-6'>
              Er is een beperkt aantal plekken. We maken een selectie op basis van je rol en je
              profiel.
            </p>
            <p className='text-gray-800'>Misschien tot snel,</p>
            <p className='text-gray-800 pb-8'>Team Circulaw</p>
            <p className='text-gray-800 pb-8'>
              Ik meld me aan voor de livesessie Houtbouw, op 4 maart in Amsterdam.
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
                  Did you finish the e learning?{' '}
                </label>
                <div className='mt-1 flex items-baseline'>
                  <input
                    type='radio'
                    name='isElearningFinished'
                    value='no'
                    onChange={handleChange()}
                    className='checked:bg-green-800 text-green-800'
                  />
                  <label className='block text-gray-800 pl-2 pr-4'>Nee</label>
                  <input
                    type='radio'
                    name='isElearningFinished'
                    value='yes'
                    onChange={handleChange()}
                    className='checked:bg-green-800 text-green-800'
                  />
                  <label className='block text-gray-800 pl-2'>Jaa</label>
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
