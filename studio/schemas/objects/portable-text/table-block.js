import { TfiLayoutGrid3 } from 'react-icons/tfi';

export const TABLE_LAYOUTS = [
  { title: 'Tabel', value: 'table' },
  { title: 'Kaarten', value: 'cards' },
  { title: 'Tijdlijn', value: 'timeline' },
];

export default {
  title: 'Tabel',
  name: 'tableBlock',
  type: 'object',
  icon: TfiLayoutGrid3,
  fields: [
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
      description: 'Optioneel. Wordt boven de tabel getoond.',
    },
    {
      title: 'Weergave',
      name: 'layout',
      type: 'string',
      description:
        'Tabel: klassieke tabel (kaarten op mobiel). Kaarten: elke rij als kaart, handig bij lange teksten. Tijdlijn: kolommen datum, mijlpaal, toelichting.',
      options: { list: TABLE_LAYOUTS, layout: 'radio', direction: 'horizontal' },
      initialValue: 'table',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tabel',
      name: 'table',
      type: 'table',
      description: 'De eerste rij wordt gebruikt als kolomkoppen.',
      validation: (Rule) =>
        Rule.custom((table) =>
          table?.rows?.length > 1 ? true : 'Voeg een koprij en minstens één rij toe',
        ),
    },
    {
      title: 'Voetnoot',
      name: 'note',
      type: 'text',
      rows: 2,
      description: 'Optioneel. Kleine toelichting onder de tabel.',
    },
  ],
  preview: {
    select: { title: 'title', layout: 'layout', rows: 'table.rows' },
    prepare({ title, layout, rows }) {
      const layoutTitle = TABLE_LAYOUTS.find((l) => l.value === layout)?.title ?? 'Tabel';
      const rowCount = Math.max((rows?.length ?? 1) - 1, 0);
      return {
        title: title || 'Tabel',
        subtitle: `${layoutTitle} · ${rowCount} rijen`,
      };
    },
  },
};
