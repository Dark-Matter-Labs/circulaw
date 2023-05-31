import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import Layout from '../../components/layouts/layout';
import CustomButton from '../../components/custom-button';

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/929e2e8c-bdf9-4c5f-a293-699dd63de422';

export default function Feedback() {
  const router = useRouter();
  const hiddenFileInput = useRef(null);
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    message: '',
    files: '',
    name: '',
    email: '',
    org: '',
    role: '',
    instrument: router.query.instrument,
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = () => (e) => {
    setQuery((prevState) => ({
      ...prevState,
      files: e.target.files[0],
    }));
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, { headers: { Accept: 'application/json' } })
      .then(function () {
        setFormStatus(true);
        setQuery({
          message: '',
          file: '',
          name: '',
          email: '',
          org: '',
          role: '',
          instrument: router.query.instrument,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className=' bg-black-white-200'>
        <div className='global-margin'>
          {!formStatus ? (
            <>
              <button type='button' onClick={() => router.back()}>
                <span className='pt-10 breadcrumb flex justify-center items-center hover:underline'>
                  <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
                </span>{' '}
              </button>
              <h1 className='text-black-white-800 pt-10 mobile sm:desktop'>
                Met jouw hulp maken we CircuLaw beter
              </h1>
              <p className='p-xl pt-8 max-w-3xl'>
                Ook bezig met{' '}
                <span className='font-semibold'>{`‘${router.query.instrument}’`}</span>?
              </p>
              <p className='p-xl pt-4 max-w-3xl'>Deel met ons:</p>
              <ul className='p-xl max-w-3xl'>
                <li>- voorbeelden uit jouw praktijk</li>
                <li>- voorbeelden uit jouw praktijk</li>
                <li>- de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
              </ul>
              <div className='mt-20 max-w-3xl mb-20'>
                <form
                  acceptCharset='UTF-8'
                  method='POST'
                  encType='multipart/form-data'
                  id='ajaxForm'
                  onSubmit={handleSubmit}
                  className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block text-black-white-800'>
                      <h3 className='mobile sm:desktop'>Tip, voorbeeld, vraag *</h3>
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows={8}
                        className='py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-gray-300 rounded-cl'
                        required
                        value={query.message}
                        onChange={handleChange()}
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='file' className='block text-black-white-800'>
                      <h3 className='mobile sm:desktop pb-2'>Bijlagen</h3>
                    </label>
                    <CustomButton color='greenBackground' onClick={handleClick}>
                      Upload bestand
                    </CustomButton>
                    {query.files !== '' && <p>{query.files.name}</p>}
                    <input
                      className='hidden'
                      ref={hiddenFileInput}
                      type='file'
                      name='file'
                      accept='.png,.jpg,.jpeg,.gif,.pdf'
                      onChange={handleFileChange()}
                    />
                    <p className='text-gray-500'>
                      Voeg eventueel een document (PNG, JPG, GIF, PDF) toe om je tip of voorbeeld te
                      illustreren
                    </p>
                  </div>
                  <div>
                    <label htmlFor='first-name' className='block text-black-white-800'>
                      <h3 className='mobile sm:desktop'>Je voor- en achternaam *</h3>
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
                    <label htmlFor='email' className='block  text-black-white-800'>
                      <h3 className='mobile sm:desktop'>Je e-mail *</h3>
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
                      <p className='text-gray-500'>
                        Zodat we contact met je kunnen opnemen voor vragen
                      </p>
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='company' className='block  text-black-white-800'>
                      <h3 className='mobile sm:desktop'>Je organisatie / bedrijf *</h3>
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
                    <label htmlFor='company' className='block  text-black-white-800'>
                      <h3 className='mobile sm:desktop'>Je functie / rol *</h3>
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
                    <div className=''>
                      <p className='text-gray-500'>
                        Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                        hebben of je op de hoogte willen houden van dit instrument. Je gegevens
                        zullen nooit gebruikt worden voor andere doeleinden. Lees onze{' '}
                        <Link href='/privacy-policy'>
                          <span className='text-green-500'>privacy verklaring.</span>
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
              </div>
            </>
          ) : (
            <>
              <h1 className='text-green-600 pt-10 mobile sm:desktop'>Dank voor je feedback!</h1>
              <p className=' p-lg py-10 max-w-2xl text-black-white-800'>
                Samen met jou kunnen we CircuLaw blijven verbeteren, en dat is hard nodig! We gaan
                je feedback bekijken en zullen je eventueel benaderen als we nog vragen hebben of
                antwoorden op jouw vraag. Wil je op de hoogte blijven van CircuLaw?{' '}
                <span className='link-lg text-green-500'>Volg on das op LinkedIn</span>
              </p>
              <div className='sm:col-span-2 pb-20'>
                <Link href='/'>
                  <CustomButton color='whiteBackground'>Naar de homepage &rarr;</CustomButton>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}