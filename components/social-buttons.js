'use client'
import { LinkIcon } from '@heroicons/react/outline';
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const viewportType = {
  mobile: 'flex flex-row justify-between items-center px-2',
  desktop: 'flex flex-row justify-center items-center',
};

export default function SocialButtons({ title, viewport }) {
  const pathname = usePathname();
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  let viewportClasses = viewportType[viewport];

  let url = 'https://circulaw-staging.vercel.app';

  if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
  } else {
    url = 'https://www.circulaw.nl';
  }

  return (
    <div className={`${viewportClasses}`}>
      <span className='p-base text-gray-100 pr-2'>Delen: </span>
      <span className='pr-2 test' title='Share link on LinkedIn'>
        <LinkedinShareButton
          url={url + pathname}
          title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + title}
        >
          <SocialIcon
            url={url + pathname}
            network='linkedin'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </LinkedinShareButton>
      </span>
      <span className='pr-2' title='Share link on Twitter'>
        <TwitterShareButton url={url + pathname} title={'' + title}>
          <SocialIcon
            url={url + pathname}
            network='x'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </TwitterShareButton>
      </span>
      <span className='pr-2' title='Share link on Whatsapp'>
        <WhatsappShareButton url={url + pathname} title={'' + title} separator=':: '>
          <SocialIcon
            url={url + pathname}
            network='whatsapp'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </WhatsappShareButton>
      </span>
      <span className='pr-2' title='Share link as email'>
        <EmailShareButton
          url={url + pathname}
          subject={'Graag deel ik met jou deze informatie van CircuLaw.nl'}
          title={'Voeg eigen boodschap toe. ' + title}
        >
          <SocialIcon
            url={url + pathname}
            network='email'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </EmailShareButton>
      </span>
      <span className='pr-2' title='Copy link to clipboard'>
        <LinkIcon
          className='inline-block p-1 h-6 w-6 bg-gray-100 rounded-full text-[#A2A3A2] hover:cursor-pointer hover:bg-green-300'
          onClick={() => {
            navigator.clipboard.writeText(url + pathname);
            setShowLinkCopied(true);
            setTimeout(() => {
              setShowLinkCopied(false);
            }, 2000);
          }}
        />
      </span>
      {showLinkCopied && <p className='p-base text-gray-100'>Link gekopieerd!</p>}
    </div>
  );
}
