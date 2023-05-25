import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import CustomButton from '../../components/custom-button';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/a53bd6aa-495c-416a-b8ec-2b36b6be1af9';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    org: '',
    email: '',
    message: '',
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
          email: '',
          message: '',
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className='global-margin'>
        {!formStatus ? (
          <>
            <h1 className='text-green-600 pt-10 mobile sm:desktop'>Contact</h1>

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
                  <label htmlFor='first-name' className='block text-black-white-800'>
                    Wat is je naam?
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
                  <label htmlFor='company' className='block  text-black-white-800'>
                    Voor welke organisatie werk je? (niet verplicht)
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
                  <label htmlFor='email' className='block  text-black-white-800'>
                    Op welk e-mailadres kunnen we je bereiken?
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
                  <label htmlFor='message' className='block text-black-white-800'>
                    Wat is je vraag of opmerking?
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-gray-300 rounded-cl'
                      required
                      value={query.message}
                      onChange={handleChange()}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className=''>
                    <p className='text-gray-500'>
                      Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                      hebben of je op de hoogte willen houden van je vraag of opmerking. Je gegevens
                      zullen nooit gebruikt worden voor andere doeleinden. Lees onz{' '}
                      <Link href='/privacy-policy'>
                        <span className='text-green-500'>privacy verklaring.</span>
                      </Link>
                    </p>
                  </div>
                </div>
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
            </div>
          </>
        ) : (
          <>
            <h1 className='text-green-600 pt-10 mobile sm:desktop'>Bedankt!</h1>
            <p className=' p-lg py-10 max-w-2xl text-black-white-800'>
              Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
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
