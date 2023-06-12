import { GrNavigate } from 'react-icons/gr';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      description: 'Titel is alleen zichtbaar in Sanity.',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigatielinks',
      description:
        'Lijst met links is zichtbaar in de navigatie op de website. Volgorde is gelijk aan volgorde op de site. Links zijn gelijk aan titel. Klik op toevoegen om een link toe te voegen.',
      of: [{ type: 'navigationItem' }],
    },
  ],
};
