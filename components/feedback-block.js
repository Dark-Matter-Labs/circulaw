import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

import CustomButton from '../components/custom-button';

export default function FeedbackBlock({ title }) {
  return (
    <div className='bg-gradient-to-t from-[#C7D3C700] to-[#CBE0CB] rounded-cl pb-10 mx-auto md:max-w-sm'>
      <div className='pt-4 px-8 pb-10 sm:pb-0 py-6 block'>
        <h3 className='mobile sm:desktop text-green-800 pb-4'>Help ons CircuLaw te verbeteren</h3>
        <p className='p-base'>Deel met ons: </p>
        <ul className='pb-10'>
          <li>- voorbeelden uit jouw praktijk</li>
          <li>- je tips om toepassing makkelijker te maken</li>
          <li>- de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
        </ul>
        <Link href={{ pathname: '/feedback', query: { instrument: title } }}>
          <CustomButton color='greenBackground'>
            Ik deel mijn kennis{' '}
            <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
