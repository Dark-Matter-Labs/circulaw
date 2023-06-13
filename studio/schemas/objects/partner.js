export default {
  name: 'partner',
  title: 'Partner',
  type: 'object',
  fields: [
    {
      name: 'partnerName',
      type: 'string',
      title: 'Naam partner-organisatie',
    },
    {
      name: 'partnerLink',
      type: 'url',
      title: 'Naam partner-organisatie',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Partner logo',
      description: 'Hier het logo van de partnerorganisatie uploaden',
    },
  ],
};
