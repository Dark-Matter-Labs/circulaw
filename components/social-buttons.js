import { LinkIcon } from '@heroicons/react/outline';
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const viewportType = {
  mobile: 'flex flex-row justify-between items-center px-2',
  desktop: 'flex flex-row justify-center items-center',
};

export default function SocialButtons({ title, viewport }) {
  const { asPath } = useRouter();
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
          url={url + asPath}
          title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + title}
        >
          <SocialIcon
            url={url + asPath}
            network='linkedin'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </LinkedinShareButton>
      </span>
      <span className='pr-2' title='Share link on Twitter'>
        <TwitterShareButton url={url + asPath} title={'' + title}>
          <SocialIcon
            url={url + asPath}
            network='x'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </TwitterShareButton>
      </span>
      <span className='pr-2' title='Share link on Whatsapp'>
        <WhatsappShareButton url={url + asPath} title={'' + title} separator=':: '>
          <SocialIcon
            url={url + asPath}
            network='whatsapp'
            style={{ height: 24, width: 24 }}
            bgColor='#FDFDFD'
            fgColor='#A2A3A2'
          />
        </WhatsappShareButton>
      </span>
      <span className='pr-2' title='Share link as email'>
        <EmailShareButton
          url={url + asPath}
          subject={'Graag deel ik met jou deze informatie van CircuLaw.nl'}
          title={'Voeg eigen boodschap toe. ' + title}
        >
          <SocialIcon
            url={url + asPath}
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
            navigator.clipboard.writeText(url + asPath);
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
