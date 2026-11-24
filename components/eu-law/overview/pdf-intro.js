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
    <>
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
      <div className='sm:w-2/5'>
        <NewButton icon='download' variant='secondaryDark' href={FALLBACK_PDF_URL} newTab={true}>
          Download PDF
        </NewButton>
      </div>
    </>
  );
}

function VersionCard({ version, isCurrent }) {
  return (
    <div
      className={`${
        isCurrent ? 'bg-green-500 text-white' : 'border-2 border-green-500 bg-white text-green-500'
      } flex h-full flex-col gap-y-4 rounded-cl p-6 shadow-cl1`}
    >
      <Badge variant={isCurrent ? 'white' : 'green'}>
        {isCurrent ? 'Nieuwste versie' : 'Vorige versie'}
      </Badge>
      <div>
        {version.label && <h3 className='heading-2xl-semibold'>{version.label}</h3>}
        {version.updatedAt && (
          <p className='p-base'>Bijgewerkt op {formatDate(version.updatedAt)}</p>
        )}
      </div>
      <div className='mt-auto'>
        <NewButton
          icon='download'
          variant={isCurrent ? 'primaryLight' : 'secondaryDark'}
          href={version.url}
          newTab={true}
        >
          Download PDF
        </NewButton>
      </div>
    </div>
  );
}

function PdfVersions({ data }) {
  const current = data.currentPdf?.url ? data.currentPdf : { url: FALLBACK_PDF_URL };
  const [previous, ...older] = data.previousPdfs?.filter((pdf) => pdf.url) ?? [];

  return (
    <section className='mt-16 sm:mt-24' aria-labelledby='pdf-versions-title'>
      <h2 id='pdf-versions-title' className='heading-2xl-semibold mb-8'>
        Download het overzicht
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <VersionCard version={current} isCurrent={true} />
        {previous && <VersionCard version={previous} isCurrent={false} />}
      </div>
      {(older.length > 0 || data.spreadsheetUrl) && (
        <div className='mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between'>
          {older.length > 0 ? (
            <div>
              <h3 className='p-base-semibold mb-2'>Oudere versies</h3>
              <ul className='flex flex-col gap-y-1'>
                {older.map((pdf) => (
                  <li key={pdf._key}>
                    <a
                      href={pdf.url}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-x-1 text-green-500 underline hover:text-green-300'
                    >
                      {pdf.label ?? 'Versie'} van {formatDate(pdf.updatedAt)}
                      <IconFileDownload className='size-5' aria-hidden='true' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div />
          )}
          {data.spreadsheetUrl && (
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
      )}
      {data.changesText && (
        <div className='p-base mt-8 rounded-cl bg-green-100 p-6 sm:p-10'>
          <h3 className='heading-xl-semibold mb-4 text-green-500'>Wat is er veranderd?</h3>
          <div className='max-w-3xl'>
            <PortableText
              value={data.changesText}
              components={aboutPageReducedPortableTextComponents}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default function PdfIntro({ data }) {
  const pdfUrl = data?.currentPdf?.url ?? FALLBACK_PDF_URL;

  return (
    <>
      <section className='mt-10 flex flex-col sm:flex-row' aria-labelledby='green-deal-intro'>
        <div className='p-base mr-8 flex basis-1/2 flex-col justify-start'>
          <h2 id='green-deal-intro' className='heading-2xl-semibold mb-8'>
            {data?.introTitle ?? 'Wat is de Green Deal?'}
          </h2>
          {data?.introText ? (
            <PortableText
              value={data.introText}
              components={aboutPageReducedPortableTextComponents}
            />
          ) : (
            <FallbackIntro />
          )}
        </div>
        <div className='mt-8 w-full basis-1/2 sm:sticky sm:top-32 sm:mt-0 sm:self-start'>
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
      {data && <PdfVersions data={data} />}
    </>
  );
}
