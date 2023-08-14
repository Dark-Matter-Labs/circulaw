export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'partners',
      type: 'array',
      title: 'Partnerlijst',
      description:
        'De lijst van partners is in dezelfde volgorde zichtbaar op de website. Klik op toevoegen om nieuwe partner toe te voegen. Max 20 partners mogelijk.',
      of: [{ type: 'partner' }],
    },
  ],
};
