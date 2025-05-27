

export default {
    name: 'testimonial',
    type: 'object',
    title: 'Testimonial',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Name of the person giving the testimonial',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role',
            description: 'Role or position of the person giving the testimonial',
            validation: (Rule) => Rule.required(),

        },
        {
            name: 'content',
            type: 'text',
            title: 'Content',
            description: 'The testimonial content itself',
            validation: (Rule) => Rule.required().min(10).error('Testimonial content must be at least 10 characters long.'),
        },
    ],
}