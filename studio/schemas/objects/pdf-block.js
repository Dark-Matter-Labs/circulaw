// this is just a test block as we actually need to create an object called file and reference it to the pdf Box
export default {
  title: 'Leidraad',
  name: 'pdfBlock',
  type: 'file',
  validation: (rule) =>
  rule.custom((value) => {
    console.log(value)
    if (!value.asset) {
      return 'You must add a pdf in order to publish'
    }
    return true}),
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
