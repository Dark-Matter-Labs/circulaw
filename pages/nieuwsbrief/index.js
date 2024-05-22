import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomButton from '@/components/custom-button';
import Layout from '@/components/layouts/layout';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/raeqmmza';

export default function Newsletter() {
  const router = useRouter();
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout title='Newsletter' pageUrl={router.asPath}>
      <div className='global-margin'>
        {!formStatus ? (
          <>
            <h1 className='mobile sm:desktop text-green-600 pt-10'>Nieuwsbrief</h1>
            <div className='mt-8 max-w-3xl mb-20'>
              <form
                acceptCharset='UTF-8'
                method='POST'
                encType='multipart/form-data'
                id='ajaxForm'
                onSubmit={handleSubmit}
                className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              >
                <div>
                  <label htmlFor='first-name' className='block text-grey-800'>
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
                  <label htmlFor='email' className='block  text-grey-800'>
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

                <div className='mt-1 flex items-baseline'>
                  <input type='hidden' name='subscribe' value='yes' />
                  <input
                    type='checkbox'
                    name='subscribe'
                    value='yes'
                    checked
                    onChange={handleChange()}
                  />
                  <label className='block text-grey-800 pl-2'>Abonneren op de nieuwsbrief</label>
                </div>
                <div className='sm:col-span-2'>
                  <label htmlFor='company' className='block  text-grey-800'>
                    Voor welke organisatie werk je?
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
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label htmlFor='role' className='block  text-grey-800'>
                    Functie/rol?
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
                    />
                  </div>
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
              <h4 className='pt-8 mobile sm:desktop text-green-400'>* dit veld is verplicht</h4>
            </div>
          </>
        ) : (
          <>
            <h1 className='mobile sm:desktop text-green-600 pt-10'>Bedankt!</h1>
            <p className=' p-lg py-10 max-w-2xl text-grey-800'>
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
    </Layout>
  );
}
