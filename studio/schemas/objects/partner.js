export default {
    name: 'partner',
    title: 'Partner',
    type: 'object',
    fields: [
      {
        name: 'partnerName',
        type: 'string',
        title: 'Partner Name',
      },
      {
        name: 'partnerLink',
        type: 'url',
        title: 'Partner Link',
        validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),

      },
      {
        name: 'logo',
        type: 'image',
        title: 'Partner Image',
      },
    ],  
  };
  