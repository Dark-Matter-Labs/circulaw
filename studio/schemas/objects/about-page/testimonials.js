export default {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [{ type: 'testimonial' }],
      validation: (Rule) => Rule.required().min(1).error('At least one testimonial is required.'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
      };
    },
  },
};
