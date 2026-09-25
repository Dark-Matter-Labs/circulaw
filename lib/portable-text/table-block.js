// Renders the `tableBlock` portable text type (see studio/schemas/objects/portable-text/table-block.js).
// The first row of the table holds the column headers.

// In the cards layout, a column whose values all stay within this length is shown
// as compact labels at the bottom of each card (e.g. "Toepasbaarheid: Mogelijk")
// instead of full paragraphs. Decided per column so every card looks the same.
const SHORT_VALUE_MAX_LENGTH = 45;

function splitRows(table) {
  const [header, ...body] = table?.rows ?? [];
  return {
    header: header?.cells ?? [],
    body: body.map((row) => ({ key: row._key, cells: row.cells ?? [] })),
  };
}

function yearStatus(text) {
  const year = Number(text?.match(/\b(20\d{2})\b/)?.[1]);
  if (!year) return 'future';
  const currentYear = new Date().getFullYear();
  if (year < currentYear) return 'past';
  if (year === currentYear) return 'current';
  return 'future';
}

const dotStyles = {
  past: 'border-green-500 bg-green-500',
  current: 'border-green-500 bg-green-500 ring-4 ring-green-200',
  future: 'border-green-500 bg-white',
};

function shortColumns(header, body) {
  return header.map((_, col) =>
    body.every(({ cells }) => (cells[col] ?? '').length <= SHORT_VALUE_MAX_LENGTH),
  );
}

function Cards({ header, body }) {
  const isShort = shortColumns(header, body);
  return (
    <ul className='flex flex-col gap-y-4'>
      {body.map(({ key, cells }) => {
        const [title, ...values] = cells;
        const fields = values
          .map((value, i) => ({ label: header[i + 1], value, short: isShort[i + 1] }))
          .filter((f) => f.value);
        const long = fields.filter((f) => !f.short);
        const short = fields.filter((f) => f.short);
        return (
          <li key={key} className='rounded-cl border border-green-200 bg-green-100 p-5 sm:p-6'>
            <h4 className='heading-xl-semibold text-green-500'>{title}</h4>
            {long.length > 0 && (
              <dl className='mt-3 flex flex-col gap-y-3'>
                {long.map(({ label, value }) => (
                  <div key={label}>
                    <dt className='p-2xs-semibold text-cl-dark-grey tracking-wide uppercase'>
                      {label}
                    </dt>
                    <dd className='p-base text-cl-black mt-1'>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {short.length > 0 && (
              <dl className='mt-4 flex flex-wrap gap-2 border-t border-green-200 pt-4'>
                {short.map(({ label, value }) => (
                  <div
                    key={label}
                    className='rounded-cl inline-flex flex-wrap items-baseline gap-x-1.5 bg-green-200 px-3 py-1.5'
                  >
                    <dt className='p-2xs text-cl-black'>{label}:</dt>
                    <dd className='p-2xs-semibold text-cl-black'>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Table({ header, body }) {
  return (
    <>
      <div className='rounded-cl hidden overflow-x-auto border border-green-200 sm:block'>
        <table className='w-full border-collapse text-left'>
          <thead className='bg-green-500 text-white'>
            <tr>
              {header.map((label) => (
                <th key={label} scope='col' className='p-xs-semibold px-4 py-3 align-bottom'>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map(({ key, cells }) => (
              <tr key={key} className='border-t border-green-200 align-top even:bg-green-100'>
                {cells.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope='row' className='p-xs-semibold text-cl-black px-4 py-3'>
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className='p-xs text-cl-black px-4 py-3'>
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='sm:hidden'>
        <Cards header={header} body={body} />
      </div>
    </>
  );
}

function Timeline({ body }) {
  return (
    <ol className='mt-2'>
      {body.map(({ key, cells }) => {
        const [date, title, description] = cells;
        return (
          <li key={key} className='group flex gap-x-5'>
            <div className='flex flex-col items-center' aria-hidden='true'>
              <span
                className={`mt-1 size-4 shrink-0 rounded-full border-2 ${dotStyles[yearStatus(date)]}`}
              />
              <span className='w-0.5 grow bg-green-300 group-last:hidden' />
            </div>
            <div className='pb-8 group-last:pb-0'>
              <p className='p-xs-semibold text-green-500'>{date}</p>
              {title && <h4 className='heading-xl-semibold text-cl-black mt-1'>{title}</h4>}
              {description && <p className='p-base text-cl-dark-grey mt-1'>{description}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const layouts = { table: Table, cards: Cards, timeline: Timeline };

export const tableBlockComponent = ({ value }) => {
  const { header, body } = splitRows(value?.table);
  if (body.length === 0) return null;
  const Layout = layouts[value?.layout] ?? Table;

  return (
    <figure className='my-8'>
      {value?.title && (
        <figcaption className='heading-xl-semibold text-cl-black mb-4'>{value.title}</figcaption>
      )}
      <Layout header={header} body={body} />
      {value?.note && <p className='p-xs text-cl-dark-grey mt-3'>{value.note}</p>}
    </figure>
  );
};
