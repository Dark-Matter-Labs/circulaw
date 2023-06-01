/* eslint-disable */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const image = fetch(new URL('../../public/Circulaw_logotype_home.png', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(request) {
  const imageData = await image;
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'CircuLaw - Regelgeving voor een circulaire economie';
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
            <img width='674.79' height='357.84' src={imageData} />
          </div>
          <div
            style={{
              fontSize: 40,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
