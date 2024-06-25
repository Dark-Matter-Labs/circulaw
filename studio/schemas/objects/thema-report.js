

export default {
    title: 'Theme Page Report',
    name: 'themePageReport',
    type: 'file',
    validation: (rule) =>
        rule.custom((value) => {
          if (!value.asset) {
            return 'You must add a pdf in order to publish';
          }
          return true;
        }),
    fields: [
        {
            title: 'Report Title',
            name: 'reportTitle',
            type: 'string',
            validation: (Rule) => Rule.required().max(250),
        },
        {
            title: 'Report Description',
            name: 'reportDescription',
            type: 'string',
            validation: (Rule) => Rule.required().max(250),
        },
    ]
}