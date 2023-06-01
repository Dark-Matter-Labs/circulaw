import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { SocialIcon } from 'react-social-icons';
import { LinkIcon } from '@heroicons/react/outline';

export default function SocialButtons({ title }) {
  const { asPath } = useRouter();
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  let url = 'https://circulaw-staging.vercel.app';

  if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
  } else {
    url = 'https://circulaw.nl';
  }

  return (
    <div className='flex flex-row justify-center items-center pb-2'>
      <span className='p-lg text-black-white-500 pr-2'>Delen: </span>
      <span className='pr-2 test' title='Share link on LinkedIn'>
        <LinkedinShareButton
          url={url + asPath}
          title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + title}
        >
          <SocialIcon
            url={url + asPath}
            network='linkedin'
            style={{ height: 32, width: 32 }}
            bgColor='#A2A3A2'
            fgColor='#F8FAF8'
          />
        </LinkedinShareButton>
      </span>
      <span className='pr-2' title='Share link on Twitter'>
        <TwitterShareButton url={'https://circulaw-staging.vercel.app' + asPath} title={'' + title}>
          <SocialIcon
            url={'https://circulaw-staging.vercel.app' + asPath}
            network='twitter'
            style={{ height: 32, width: 32 }}
            bgColor='#A2A3A2'
            fgColor='#F8FAF8'
          />
        </TwitterShareButton>
      </span>
      <span className='pr-2' title='Share link on Whatsapp'>
        <WhatsappShareButton
          url={'https://circulaw-staging.vercel.app' + asPath}
          title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + title}
          separator=':: '
        >
          <SocialIcon
            url={'https://circulaw-staging.vercel.app' + asPath}
            network='whatsapp'
            style={{ height: 32, width: 32 }}
            bgColor='#A2A3A2'
            fgColor='#F8FAF8'
          />
        </WhatsappShareButton>
      </span>
      <span className='pr-2' title='Share link as email'>
        <EmailShareButton
          url={'https://circulaw-staging.vercel.app' + asPath}
          subject={'Graag deel ik met jou deze informatie van CircuLaw.nl'}
          title={'Voeg eigen boodschap toe. ' + title}
        >
          <SocialIcon
            url={'https://circulaw-staging.vercel.app' + asPath}
            network='email'
            style={{ height: 32, width: 32 }}
            bgColor='#A2A3A2'
            fgColor='#F8FAF8'
          />
        </EmailShareButton>
      </span>
      <span className='pr-2' title='Copy link to clipboard'>
        <LinkIcon
          className='inline-block p-1 h-8 w-8 bg-black-white-500 rounded-full text-white hover:cursor-pointer hover:bg-green-300'
          onClick={() => {
            navigator.clipboard.writeText('https://circulaw-staging.vercel.app' + asPath);
            setShowLinkCopied(true);
            setTimeout(() => {
              setShowLinkCopied(false);
            }, 2000);
          }}
        />
      </span>
      {showLinkCopied && <p>Link gekopieerd!</p>}
    </div>
  );
}
