import InlineExternalLink from '../shared/inline-external-link';

export default function RladderTooltipContent() {
  return (
    <div className='mb-10'>
      <p className='p-base'>
        Met de R-ladder geven we per instrument een schatting van de mate van circulariteit aan. De
        R-ladder heeft 6 tredes (R1 tot en met R6) die verschillende strategieën van circulariteit
        weergeven. Strategieën hoger op de ladder besparen meer grondstoffen. R1 is de hoogste
        trede. De strategieën kunnen samengaan met innovaties in de vorm van vernieuwende
        productontwerpen, technologieën of businessmodellen.
      </p>
      <p className='p-base py-6'>
        De 6 tredes zijn:
        <ul className='list-disc pl-6 pt-2'>
          <li>R1. Refuse en rethink: afzien van producten of producten intensiever gebruiken</li>
          <li>R2. Reduce: producten efficiënter fabriceren of efficiënter maken in het gebruik</li>
          <li>R3. Reuse: hergebruik van een product</li>
          <li>
            R4. Repair, refurbish, remanufacturing en repurpose: reparatie en hergebruik van
            productonderdelen
          </li>
          <li>R5. Recycling: verwerken en hergebruiken van materialen</li>
          <li>R6. Recover: energie terugwinnen uit materialen</li>
        </ul>
      </p>
      <span className='p-base py-2'>
        Bron en meer over de de R-ladder op de{' '}
        <InlineExternalLink href='https://www.rvo.nl/onderwerpen/r-ladder' size='5'>
          website van RVO
        </InlineExternalLink>
      </span>
    </div>
  );
}
