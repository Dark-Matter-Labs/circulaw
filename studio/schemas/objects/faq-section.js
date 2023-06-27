export default {
    title: 'FAQ Section',
    name: 'faqSection',
    type: 'object',
    fields: [
        {
            title: 'Section Title',
            name: 'sectionTitle',
            type: 'text',
            validation: (Rule) => Rule.required().max(100),
        }
    ]
}