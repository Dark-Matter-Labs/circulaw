'use client';

import { useState } from 'react';

import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import { scrollToTop } from '@/utils/scroll-to-top';
import axios from 'axios';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/aroovgvb';

export default function ElearnignLiveEvent() {
  const [hasCompleted, setHasCompleted] = useState(undefined);

  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
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
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold max-w-4xl pt-10 text-green-500'>
            Livesessie: Circulaire houtbouw onder de Omgevingswet
          </h1>
          <div className='mb-20 mt-8 max-w-3xl'>
            <p className='pb-6 text-cl-black sm:col-span-2'>
              Wat fijn dat je de e-learning over circulaire houtbouw onder de Omgevingswet hebt
              afgerond! En wat leuk dat je interesse hebt in de verdiepende livesessie, op{' '}
              <span className='p-base-semibold'>8 april in het AMS Institute, Amsterdam.</span>
            </p>
            <p className='pb-6 text-cl-black'>
              Als je hieronder je gegevens invult, dan laten we je snel weten of je wordt
              uitgenodigd. Je ontvangt dan ook alle details over het programma.
            </p>
            <p className='pb-6 text-cl-black'>
              Er is een beperkt aantal plekken. We maken een selectie op basis van je rol en je
              profiel.
            </p>
            <p className='text-cl-black'>Misschien tot snel,</p>
            <p className='pb-8 text-cl-black'>Team Circulaw</p>

            <h3 className='heading-3xl-semibold mt-6'>Ik wil me aanmelden voor de livesessie</h3>

            <div className='mt-12 sm:col-span-2'>
              <label
                htmlFor='isElearningFinished'
                className='heading-xl-semibold sm:heading-2xl-semibold mb-2 block text-cl-black'
              >
                Heb je de e-learning afgerond?
              </label>
              <div className='mb-6 mt-1 flex items-baseline'>
                {/* Radio button for "Nee" (false) */}

                {/* Radio button for "Ja" (true) */}
                <input
                  type='radio'
                  name='isElearningFinished'
                  value='true'
                  checked={hasCompleted}
                  onChange={() => setHasCompleted(true)}
                  className='text-cl-black checked:bg-cl-black'
                />
                <label className='block pl-2 pr-4 text-cl-black'>Ja</label>

                <input
                  type='radio'
                  name='isElearningFinished'
                  value='false'
                  checked={hasCompleted === false}
                  onChange={() => setHasCompleted(false)}
                  className='text-cl-black checked:bg-cl-black'
                />
                <label className='block pl-2 text-cl-black'>Nee</label>
              </div>
            </div>

            {hasCompleted === true && (
              <>
                <form
                  acceptCharset='UTF-8'
                  method='POST'
                  encType='multipart/form-data'
                  id='ajaxForm'
                  onSubmit={handleSubmit}
                  className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div>
                    <label
                      htmlFor='first-name'
                      className='heading-xl-semibold sm:heading-2xl-semibold block text-cl-black'
                    >
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
                    <label
                      htmlFor='company'
                      className='heading-xl-semibold sm:heading-2xl-semibold block text-cl-black'
                    >
                      Voor welke organisatie werk je? <span className='text-green-400'>*</span>
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
                        required
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='role'
                      className='heading-xl-semibold sm:heading-2xl-semibold block text-cl-black'
                    >
                      Wat is je functie/rol? <span className='text-green-400'>*</span>
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
                        required
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='email'
                      className='heading-xl-semibold sm:heading-2xl-semibold block text-cl-black'
                    >
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
                  <div className='mt-1 flex items-baseline'>
                    <input type='hidden' name='subscribe' value='no' />
                    <input type='checkbox' name='subscribe' value='yes' onChange={handleChange()} />
                    <label className='heading-xl-semibold sm:heading-2xl-semibold block pl-2 text-cl-black'>
                      Abonneren op de nieuwsbrief
                    </label>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className=''>
                      <p className='text-cl-grey'>
                        Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                        hebben of je op de hoogte willen houden van je vraag of opmerking. Je
                        gegevens zullen nooit gebruikt worden voor andere doeleinden. Lees onze{' '}
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
                        'button inline-flex items-center rounded-full border-2 border-green-500 bg-transparent px-4 py-2 text-green-500 hover:bg-green-300 focus:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400'
                      }
                    >
                      Verzenden &rarr;
                    </button>
                  </div>
                </form>
                <h4 className='p-base-semibold sm:headling-xl-semibold pt-8 text-green-400'>
                  * dit veld is verplicht
                </h4>
              </>
            )}
            {hasCompleted === false && (
              <p className='mt-2 pb-6 text-cl-black'>
                Heb je de e-learning Circulaire Houtbouw nog niet gedaan?{' '}
                <Link
                  className='link-base link-interaction'
                  href='https://training.circulaw.nl/register/a6d26a79-e6b1-42d6-9499-1dbe196fc693'
                  target='_blank'
                >
                  Klik dan hier om je aan te melden!
                </Link>
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pt-10 text-green-500'>
            Bedankt!
          </h1>
          <p className='p-base max-w-2xl py-10 text-cl-black'>
            Dank voor je interesse! Je hoort van ons
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
