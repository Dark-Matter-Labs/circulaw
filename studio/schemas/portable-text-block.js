export default {
    title: 'Copy Block',
    name: 'copyBlock',
    type: 'object',
    fields: [
        {
            title: 'Text Block Title',
            name: 'blockTitle',
            type: 'string',
        },
        {
            title: 'Copy Text',
            name: 'copyText',
            type: 'array',
            of: [{type: 'block'}]
        },

    ]
}