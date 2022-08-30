import Link from 'next/link';
export default function ActionPanel(props) {
  return (
    <div className='bg-green3 py-10'>
      <div className='mx-7 sm:mx-20 py-5'>
        <h2 className='mobile sm:main'>{props.title}</h2>
        <div className='sm:flex sm:items-start sm:justify-between'>
          <div>
            <div className='mt-2 max-w-xl body-text-mobile sm:body-text '>{props.paragraph}</div>
          </div>
          <div className='mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center'>
            <Link href={props.buttonLink}>
              <a>
                <button
                  type='button'
                  className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-greenLink focus:outline-none'
                >
                  {props.buttonText} →
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
