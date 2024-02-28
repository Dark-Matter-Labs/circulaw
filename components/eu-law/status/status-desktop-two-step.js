import proposedA from '@/public/eu-status/desktop/proposedA.svg';
import proposedB from '@/public/eu-status/desktop/proposedB.svg';
import negotiationA from '@/public/eu-status/desktop/negotiationA.svg';
import negotiationB from '@/public/eu-status/desktop/negotiationB.svg';

import Image from 'next/image';

export default function StatusDesktop({ status }) {
  return (
    <>
      {status === 'Proposed A' && (
        <div>
          <Image src={proposedA} alt='Status of european law is proposed A' />
        </div>
      )}
      {status === 'Proposed B' && (
        <div>
          <Image src={proposedB} alt='Status of european law is proposed B' />
        </div>
      )}
      {status === 'In negotiations A' && (
        <div>
          <Image src={negotiationA} alt='Status of european law is In negotiations A' />
        </div>
      )}
      {status === 'In negotiations B' && (
        <div>
          <Image src={negotiationB} alt='Status of european law is In negotiations B' />
        </div>
      )}
    </>
  );
}

{
  /*

          { title: 'Proposed A', value: 'Proposed A' },
          { title: 'Proposed B', value: 'Proposed B' },
          { title: 'In negotiations A', value: 'In negotiations A' },
          { title: 'In negotiations B', value: 'In negotiations B' },
          { title: 'Adopted A', value: 'Adopted A' },
          { title: 'Adopted B', value: 'Adopted B' },
          { title: 'Transposed A', value: 'Transposed A' },
          { title: 'Transposed B', value: 'Transposed B' },

*/
}
