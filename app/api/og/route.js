/* eslint-disable */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const image = fetch(new URL('@/public/circulaw_logotype_home2.png', import.meta.url)).then((res) =>
  res.arrayBuffer(),
);

export async function GET() {
  const imageData = await image;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#035E46',
          backgroundSize: '150px 150px',
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img width='674.79' height='357.84' src={imageData} alt='CircuLaw' />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
