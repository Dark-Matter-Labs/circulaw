import dynamic from 'next/dynamic';
const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((module) => module.Player),
  { ssr: false },
);

export default function ContentZero({ screenHeight }) {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[290px]'>
      <h1 className='heading-3xl-semibold'>Modelteksten voor een omgevingsplan</h1>

      <div
        className={`${
          screenHeight < 934 ? 'h-80' : 'h-[450px]'
        } w-full flex flex-col items-center justify-end pb-4 mt-10 bg-gradient-to-b from-[#F6FEFB30]/20 to-[#D3F3E8]/20 rounded-cl`}
      >
        <PlayerWithNoSSR
          autoplay
          keepLastFrame
          style={{ width: 24, height: 32 }}
          loop
          src={'/mouse.json'}
        />

        <p className='p-base-semibold text-center px-6 mt-4'>Scroll verder voor het hele verhaal</p>
      </div>
    </div>
  );
}
