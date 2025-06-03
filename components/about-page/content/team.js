'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { IconBrandLinkedinFilled, IconMinus, IconPlus } from '@tabler/icons-react';

export default function Team({ data }) {
  const [showTeamMembers, setShowTeamMembers] = useState('');
  const legal = data.teamMembers.filter((member) => member.department === 'legal');
  const developers = data.teamMembers.filter((member) => member.department === 'developers');
  const strategy = data.teamMembers.filter((member) => member.department === 'strategy');

  function handleClick(department) {
    if (department === showTeamMembers) {
      setShowTeamMembers('');
    } else {
      setShowTeamMembers(department);
    }
  }

  return (
    <div className='relative mb-[60px] flex w-full flex-col rounded-cl bg-green-100 p-6 sm:mb-[120px]'>
      <div className='mb-6'>
        <p className='p-xs-semibold sm:p-base-semibold mb-4'>Multidisciplinaire teams</p>
        <h3 className='heading-3xl-semibold sm:heading-5xl-semibold'>Maak kennis met ons</h3>
      </div>
      <div className='relative flex w-full items-center justify-center py-32 sm:py-40'>
        <Image src='/circles.png' alt='circle decoration' width={600} height={600} />
        {showTeamMembers === '' && (
          <Image
            src='/team.png' // replace with your image path
            alt='another decoration'
            width={600}
            height={600}
            className='absolute inset-0 m-auto'
          />
        )}
        {showTeamMembers === 'legal' && (
          <div className='no-scrollbar absolute inset-0 m-auto flex h-[190px] w-[200px] flex-col gap-y-4 overflow-y-scroll sm:h-[440px] sm:w-[300px]'>
            {legal.map((member) => (
              <div
                key={member._key}
                className='flex w-full flex-col gap-y-2 rounded-cl border border-green-300 p-4 sm:min-h-32'
              >
                <Link href={member.linkedIn} target='_blank'>
                  <IconBrandLinkedinFilled className='size-8 text-green-300 hover:text-green-500' />
                </Link>
                <div>
                  <h3 className='heading-2xl-semibold text-green-500'>{member.name}</h3>
                  <p className='p-base text-green-500'>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {showTeamMembers === 'developers' && (
          <div className='no-scrollbar absolute inset-0 m-auto flex h-[190px] w-[200px] flex-col gap-y-4 overflow-y-scroll sm:h-[440px] sm:w-[300px]'>
            {developers.map((member) => (
              <div
                key={member._key}
                className='flex w-full flex-col gap-y-2 rounded-cl border border-green-300 p-4 sm:min-h-32'
              >
                <Link href={member.linkedIn} target='_blank'>
                  <IconBrandLinkedinFilled className='size-8 text-green-300 hover:text-green-500' />
                </Link>
                <div>
                  <h3 className='heading-2xl-semibold text-green-500'>{member.name}</h3>
                  <p className='p-base text-green-500'>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {showTeamMembers === 'strategy' && (
          <div className='no-scrollbar absolute inset-0 m-auto flex h-[190px] w-[200px] flex-col gap-y-4 overflow-y-scroll sm:h-[440px] sm:w-[300px]'>
            {strategy.map((member) => (
              <div
                key={member._key}
                className='flex w-full flex-col gap-y-2 rounded-cl border border-green-300 p-4 sm:min-h-32'
              >
                <Link href={member.linkedIn} target='_blank'>
                  <IconBrandLinkedinFilled className='size-8 text-green-300 hover:text-green-500' />
                </Link>
                <div>
                  <h3 className='heading-2xl-semibold text-green-500'>{member.name}</h3>

                  <p className='p-base text-green-500'>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='heading-2xl sm:heading-4xl absolute left-6 top-44 max-w-[120px] text-green-500 sm:left-40 sm:top-56 sm:max-w-none'>
        Onze juristen
        <button
          onClick={() => handleClick('legal')}
          className='mr-10 mt-3 flex size-10 items-center justify-center place-self-end rounded-full bg-orange-100'
        >
          {showTeamMembers !== 'legal' ? (
            <IconPlus className='text-orange-300' />
          ) : (
            <IconMinus className='text-orange-300' />
          )}
        </button>
      </div>
      <div className='heading-2xl sm:heading-4xl absolute right-10 top-40 max-w-[120px] text-green-500 sm:right-28 sm:top-52 sm:max-w-none'>
        Onze ontwikkelaars
        <button
          onClick={() => handleClick('developers')}
          className='ml-10 mt-3 flex size-10 items-center justify-center place-self-start rounded-full bg-orange-100'
        >
          {showTeamMembers !== 'developers' ? (
            <IconPlus className='text-orange-300' />
          ) : (
            <IconMinus className='text-orange-300' />
          )}
        </button>
      </div>
      <div className='heading-2xl sm:heading-4xl absolute bottom-10 left-10 max-w-[190px] text-green-500 sm:bottom-20 sm:left-32 sm:max-w-none'>
        <button
          onClick={() => handleClick('strategy')}
          className='mr-20 mt-3 flex size-10 items-center justify-center place-self-end rounded-full bg-orange-100'
        >
          {showTeamMembers !== 'strategy' ? (
            <IconPlus className='text-orange-300' />
          ) : (
            <IconMinus className='text-orange-300' />
          )}
        </button>
        Het strategische team
      </div>
    </div>
  );
}
