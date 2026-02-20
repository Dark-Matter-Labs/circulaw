'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function YTPlayerClient({ url, className = 'react-player' }) {
  return (
    <div className='player-wrapper'>
      <ReactPlayer className={className} url={url} width='100%' height='100%' />
    </div>
  );
}
