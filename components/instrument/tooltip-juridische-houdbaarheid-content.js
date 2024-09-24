export default function TooltipJuridischeHoudbaarheidContent({ JHTooltipText }) {
  return (
    <div className='absolute inset-0'>
      {JHTooltipText && <p className='p-base'>{JHTooltipText}</p>}
      <div className='bg-gray-100 mt-6 p-6'>
        <p className='p-base'>
          Met de waardering ‘Juridische houdbaarheid laten we zien hoe risicovol een instrument is:
          wat is het afbreukrisico of de kans dat het instrument onderuit gaat bij de rechter.
        </p>
        <br />
        <p className='p-base'>
          We maken hiervan een globale inschatting, 1: beperkt, 2: gemiddeld, 3: hoog.
        </p>
      </div>
    </div>
  );
}
