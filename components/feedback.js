'use client'
import { useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { scrollToTop } from '@/utils/scroll-to-top';
import CustomButton from './custom-button';
import Link from 'next/link';


const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/929e2e8c-bdf9-4c5f-a293-699dd63de422';

export default function FeedbackComponent() {
  const searchParams = useSearchParams()
  const instrument = searchParams.get('instrument')
  const router = useRouter()
  const hiddenFileInput = useRef(null);
  const [formStatus, setFormStatus] = useState(false);

  const [query, setQuery] = useState({
    message: '',
    files: '',
    name: '',
    email: '',
    org: '',
    role: '',
    instrument: instrument,
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
          instrument: instrument,
          subscribe: 'no',
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
    return (
        <div className='bg-gray-100'>
        <div className='global-margin'>
          {!formStatus ? (
            <>
              <button
                type='button'
                onClick={() => router.back()}
                className='mt-12 p-2xs-bold text-green-600 bg-gray-100 pl-2 pr-3 py-1.5 rounded-clSm'
              >
                <span className='  '>Terug</span>
                <span className='ml-2'>{'>'}</span>
              </button>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-gray-800 pt-10'>
                Met jouw hulp maken we CircuLaw beter
              </h1>
              <p className='heading-2xl pt-8 max-w-3xl'>
                Ook bezig met{' '}
                <span className='font-semibold'>{`‘${instrument}’`}</span>?
              </p>
              <p className='heading-2xl pt-4 max-w-3xl'>Deel met ons:</p>
              <ul className='heading-2xl max-w-3xl'>
                <li>- voorbeelden uit jouw praktijk</li>
                <li>- je tips om toepassing makkelijker te maken</li>
                <li>- de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
              </ul>
              <div className='mt-20 max-w-3xl pb-20'>
                <form
                  acceptCharset='UTF-8'
                  method='POST'
                  encType='multipart/form-data'
                  id='ajaxForm'
                  onSubmit={handleSubmit}
                  className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold'>
                        Tip, voorbeeld, vraag <span className='text-green-400'>*</span>
                      </h3>
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
                    <label htmlFor='file' className='block text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold pb-2'>Bijlagen</h3>
                    </label>
                    <CustomButton color='greenBackgroundLessRound' onClick={handleClick}>
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
                    <label htmlFor='first-name' className='block text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold'>
                        Je voor- en achternaam <span className='text-green-400'>*</span>
                      </h3>
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
                    <label htmlFor='email' className='block  text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold'>
                        Je e-mail <span className='text-green-400'>*</span>
                      </h3>
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
                    <label htmlFor='company' className='block  text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold'>
                        Je organisatie / bedrijf <span className='text-green-400'>*</span>
                      </h3>
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
                    <label htmlFor='company' className='block  text-gray-800'>
                      <h3 className='heading-xl-semibold sm:heading-2xl-semibold'>
                        Je functie / rol <span className='text-green-400'>*</span>
                      </h3>
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
                  <div className='mt-1 flex items-baseline'>
                    <input type='hidden' name='subscribe' value='no' />
                    <input type='checkbox' name='subscribe' value='yes' onChange={handleChange()} />
                    <h3 className='heading-xl-semibold sm:heading-2xl-semibold pl-2'>
                      Abonneren op de nieuwsbrief
                    </h3>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className=''>
                      <p className='text-gray-500'>
                        Door verzenden geef je akkoord dat we je mogen benaderen als we meer vragen
                        hebben of je op de hoogte willen houden van dit instrument. Je gegevens
                        zullen nooit gebruikt worden voor andere doeleinden. Lees onze{' '}
                        <Link href='/privacy-policy'>
                          <span className='link-interaction text-green-500 hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
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
                      onClick={scrollToTop}
                      className={
                        'bg-green-600 hover:bg-green-200 hover:text-green-600 text-gray-100 active:bg-green-800 active:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white rounded-full inline-flex items-center px-4 py-2 button '
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
                Dank voor je feedback!
              </h1>
              <p className=' p-base py-10 max-w-2xl text-gray-800'>
                Samen met jou kunnen we CircuLaw blijven verbeteren, en dat is hard nodig! We gaan
                je feedback bekijken en zullen je eventueel benaderen als we nog vragen hebben of
                antwoorden op jouw vraag. Wil je op de hoogte blijven van CircuLaw?{' '}
                <span className='link-lg text-green-500'>
                  <a
                    href='https://www.linkedin.com/company/circulaw/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Volg ons dan op LinkedIn
                  </a>
                </span>
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
    )
}