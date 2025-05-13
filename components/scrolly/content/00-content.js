import dynamic from 'next/dynamic';

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((module) => module.Player),
  { ssr: false },
);

export default function ContentZero({ screenHeight }) {
  return (
    <div className='flex max-w-[290px] flex-col gap-y-6 text-green-500'>
      <h1 className='heading-3xl-semibold'>Modelteksten voor een omgevingsplan</h1>

      <div
        className={`${
          screenHeight < 934 ? 'h-80' : 'h-[450px]'
        } mt-10 flex w-full flex-col items-center justify-end rounded-cl bg-gradient-to-b from-[#F6FEFB30]/20 to-[#D3F3E8]/20 pb-4`}
      >
        <PlayerWithNoSSR
          autoplay
          keepLastFrame
          style={{ width: 24, height: 32 }}
          loop
          src={'/mouse.json'}
        />

        <p className='p-base-semibold mt-4 px-6 text-center'>Scroll verder voor het hele verhaal</p>
      </div>
    </div>
  );
}
