// siteConfig is actually labeled as Home Page in the CMS however in the code it will remain siteConfig.
// we could write a patch to update the name of the schema in the code to make it correspond with Home Page.

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Home Page',
  groups: [
    {
      name: 'aboutPage',
      title: 'About Page',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'siteSettings',
      title: 'Site Settings',
    },
  ],
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
      group: 'siteSettings',
    },
    {
      title: 'About Section Title',
      name: 'aboutSectionTitle',
      type: 'string',
      description: 'The title of the about section on the home page',
      group: 'aboutPage',
    },
    {
      title: 'About Section Text',
      name: 'aboutSectionText',
      type: 'text',
      group: 'aboutPage',
    },
    {
      title: 'About Section Mobile Text',
      name: 'aboutSectionMobileText',
      type: 'text',
      group: 'aboutPage',
    },
    {
      title: 'About Section Page',
      name: 'aboutSectionPage',
      type: 'reference',
      to: [{ type: 'aboutPage' }],
      group: 'aboutPage',
    },
    {
      title: 'Header Text',
      name: 'headerText',
      type: 'string',
      group: 'header',
    },
    {
      title: 'Sub Header Text',
      name: 'subHeader',
      type: 'string',
      group: 'header',
    },
    {
      title: 'Footer Text',
      name: 'footerText',
      type: 'text',
      group: 'footer',
    },
    {
      title: 'Footer link text',
      name: 'footerLinkText',
      description: 'this will link to the contact page on the website.',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'euLaw',
      title: 'Eu Law text',
      type: 'text',
    },
    {
      name: 'euLawImage',
      title: 'EU Law Image',
      type: 'image',
    },
  ],
};
