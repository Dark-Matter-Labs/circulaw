import Link from "next/link";

export default function Nav() {
  return (
    <div className=''>
      <div className='p-5'>Digitale tool Juridisch Landschap</div>
      <div className='bg-black text-white flex justify-between space-x-4 py-3'>
        <Link href='/laws'>
          <a className='px-5 font-bold'>Home</a>
        </Link>

        <div className='justify-between px-5'>
          <Link href='/laws'>
            <a className='px-3'>Maatregelen</a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Voorbeelprojecten </a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Juridische kaart</a>
          </Link>
        </div>

        <div className='justify-between px-5'>
          <Link href='/laws'>
            <a className='px-3'>Over ons</a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Contact </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
