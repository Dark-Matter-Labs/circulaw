export default function TooltipJuridischeInvloedContent({ invloedTooltipText }) {
  return (
    <div className='absolute inset-0'>
      {invloedTooltipText && <p className='p-base'>{invloedTooltipText}</p>}
      <div className='mt-6 bg-green-100'>
        <p className='p-base'>
          Met ‘invloed’ bedoelen wij de invloed van het instrument in de praktijk. We kijken
          hiervoor onder andere naar:
        </p>
        <ul className='p-base list-disc pl-6'>
          <li>de afdwingbaarheid,</li>
          <li>hoeveel dírecte invloed het instrument heeft,</li>
          <li>hoe lang het doorwerkt,</li>
          <li>op hoeveel personen het betrekking heeft.</li>
        </ul>
        <br />
        <p className='p-base'>
          We maken hiervan een globale inschatting: 1: beperkt, 2: gemiddeld, 3: hoog.
        </p>
      </div>
    </div>
  );
}
