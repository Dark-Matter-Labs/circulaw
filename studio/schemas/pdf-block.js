// this is just a test block as we actually need to create an object called file and reference it to the pdf Box
export default {
    title: 'PDF Block',
    name: 'pdfBlock',
    type: 'object',
    fields: [
        {
            title: 'PDF Title',
            name: 'pdfTitle',
            type: 'string',
        },
        {
            title: 'PDF Text',
            name: 'pdfText',
            type: 'text',
        },
        {
            title: 'PDF URL',
            name: 'pdfUrl',
            type: 'url',
        },{
            title: 'PDF Button Text',
            name: 'pdfButtonText',
            type: 'string',
        },

    ]
}
