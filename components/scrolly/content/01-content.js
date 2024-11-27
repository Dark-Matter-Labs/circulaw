import dynamic from 'next/dynamic';
const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((module) => module.Player),
  { ssr: false },
);

export default function ContentOne({ screenHeight }) {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[290px]'>
      <h2 className='heading-4xl-semibold text-nowrap -mt-20'>
        Modelteksten voor een omgevingsplan
      </h2>
      <h3 className='heading-2xl-semibold'>
        Circulair bouwen: meer effect met een mix van instrumenten
      </h3>
      <p className='p-base'>
        Wil je werkelijk <span className='p-base-semibold'>impact</span> maken? Zet dan een{' '}
        <span className='p-base-semibold'>mix van instrumenten</span> in.
      </p>
      <p className='p-base'>
        De instrumenten van de Omgevingswet staan niet op zichzelf, maar maken onderdeel uit van een{' '}
        <span className='p-base-semibold'>beleidscyclus.</span>
      </p>
      <div
        className={`${
          screenHeight < 934 ? 'h-44' : 'h-72'
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
