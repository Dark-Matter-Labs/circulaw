export default {
    title: 'EU Europe tab',
    name: 'euEuropeTab',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            initialValue: 'Europe Tab'

        },
        {
            title: 'EU Law',
            name: 'euLawReference',
            type: 'reference',
            to: [{type: 'euLaw'}]
        },
        {
            name: 'europeContent',
            type: 'array',
            title: 'Europe Content',
            of: [{ type: 'euLawSection' }],
          },
          
    ],
    initialValue: {
        title: 'EU Europe Tab'
      }
}