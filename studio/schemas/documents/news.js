// title
// text
// date date created? date published?
// image
// link - internal/external
// button

export default {
    title: 'News Item',
    name: 'newsItem',
    type: 'document',
    fields: [
        {
            title:'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title:'Text Content',
            name: 'text',
            type: 'text',
        },
        {
            title:'External Link',
            name: 'externalLink',
            type: 'url',
            // validation
        },
        {
            title:'Internal Link',
            name: 'internalLink',
            type: 'ref',
            // do we want to ref this?
        },
        {
            title:'Image',
            name: 'image',
            type: 'image',
        },
        {
            title:'Date',
            name: 'date',
            type: 'date',
            description: 'Date that will be displayed on the card. This will not affect the order of the card'
        },
    ]
}