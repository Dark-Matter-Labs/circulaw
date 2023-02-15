// this is just a test block as we actually need to create an object called file and reference it to the pdf Box
export default {
  title: 'Leidraad',
  name: 'pdfBlock',
  type: 'file',
  fields: [
    {
      title: 'Leidraad Titel',
      name: 'pdfTitle',
      type: 'string',
    },
    {
      title: 'Leidraad Text',
      name: 'pdfText',
      type: 'text',
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
    },
  ],
};
