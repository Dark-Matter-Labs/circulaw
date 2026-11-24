import { PortableText } from 'next-sanity';
import Image from 'next/image';

import NewButton from '@/components/shared/new-button';
import { aboutPageReducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { IconFileDownload } from '@tabler/icons-react';

import Badge from '../../shared/new-badge';

// Shown until the EU Overview Page document is filled in Sanity.
const FALLBACK_PDF_URL = '/European_green_deal.pdf';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

function FallbackIntro() {
  return (
    <div className='mb-8'>
      <p className='mb-2'>
        De Europese Unie wil in 2050 klimaatneutraal zijn: een ambitie die bekend staat als de
        &apos;Green Deal&apos;. In het kader van de Green Deal worden continu nieuwe wetten
        voorgesteld, behandeld en aangenomen, of worden bestaande herzien.
      </p>
      <p>
        Met al deze richtlijnen en verordeningen wil de EU vanuit verschillende perspectieven
        bijdragen aan klimaatneutraliteit. Hiernaast zie je een overzicht, inclusief de huidige
        status van elk voorstel en het toepassingsgebied.
      </p>
    </div>
  );
}

export default function PdfIntro({ data }) {
  const pdfUrl = data?.currentPdf?.url ?? FALLBACK_PDF_URL;
  const previousPdfs = data?.previousPdfs?.filter((pdf) => pdf.url) ?? [];

  return (
    <section className='mt-10 flex flex-col sm:flex-row' aria-labelledby='green-deal-intro'>
      <div className='p-base mr-8 flex basis-1/2 flex-col justify-start'>
        <h2 id='green-deal-intro' className='heading-2xl-semibold mb-8'>
          {data?.introTitle ?? 'Wat is de Green Deal?'}
        </h2>
        {data?.introText ? (
          <div className='mb-8'>
            <PortableText
              value={data.introText}
              components={aboutPageReducedPortableTextComponents}
            />
          </div>
        ) : (
          <FallbackIntro />
        )}
        {data?.currentPdf?.updatedAt && (
          <div className='mb-4'>
            <Badge variant='green'>Bijgewerkt op {formatDate(data.currentPdf.updatedAt)}</Badge>
          </div>
        )}
        <div className='flex flex-wrap gap-4'>
          <NewButton icon='download' variant='secondaryDark' href={pdfUrl} newTab={true}>
            Download PDF
          </NewButton>
          {data?.spreadsheetUrl && (
            <NewButton
              icon='arrowRight'
              variant='secondaryDark'
              href={data.spreadsheetUrl}
              newTab={true}
            >
              Bekijk de spreadsheet
            </NewButton>
          )}
        </div>
        {previousPdfs.length > 0 && (
          <div className='mt-8'>
            <h3 className='p-base-semibold mb-2'>Eerdere versies</h3>
            <ul className='flex flex-col gap-y-1'>
              {previousPdfs.map((pdf) => (
                <li key={pdf._key}>
                  <a
                    href={pdf.url}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-x-1 text-green-500 underline hover:text-green-300'
                  >
                    Versie van {formatDate(pdf.updatedAt)}
                    <IconFileDownload className='size-5' aria-hidden='true' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='mt-8 h-full w-full basis-1/2 sm:mt-0'>
        <a href={pdfUrl} target='_blank' rel='noreferrer'>
          <Image
            src={data?.previewImage?.url ?? '/green_deal.jpg'}
            alt={data?.previewImage?.altText ?? 'Screenshot van de Green Deal PDF'}
            width={data?.previewImage?.metadata?.dimensions?.width ?? 588.5}
            height={data?.previewImage?.metadata?.dimensions?.height ?? 328}
            className='h-auto w-full'
          />
        </a>
      </div>
    </section>
  );
}
