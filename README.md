# CircuLaw

#### CircuLaw is a knowledge platform dedicated to enabling the transition to a circular economy by identifying opportunities in current law to support a circular future.

Amidst the escalating climate crisis, the global community is under significant pressure to transition towards a more sustainable and circular economy. With the European Union’s Circular Economy Action Plan and the Dutch government's commitment to a 50% reduction in the use of primary raw materials by 2030, formal commitment to this transition is taking shape. CircuLaw identifies opportunities in current law to support this circular future.

The City of Amsterdam, Dark Matter Labs and a growing coalition of knowledge and funding partners (https://circulaw-staging.vercel.app/about/Wie-maken-CircuLaw) have been working to accelerate the transition to a circular economy by identifying opportunities within existing laws and regulations.

This collaborative effort is aimed at making relevant and innovative legal information more accessible to policymakers so that they can adequately support the circular transition through policy intervention. This is done through research, exploration and creating of multiple services, culminating in the creation of this legal knowledge platform, circulaw.nl.

# Circulaw in the Dutch context
Circulaw is mentioned as an example of local and regional efforts towards acheiving circularity in the National Circular Economy Program 2023 - 2030 which is available in Dutch (https://www.rijksoverheid.nl/documenten/beleidsnotas/2023/02/03/nationaal-programma-circulaire-economie-2023-2030). CircuLaw is also mentioned in the The Integrated Circular Economy Report (ICER 2023) which outlines the progress of the transition to a circular economy in the Netherlands. The inclusion of CircuLaw in these reports by national government departments demonstrates that the use of current laws to stimulate the circular economy at a local and regional level is of national importance. 

# How to contribute
If you would like to contribute to the code base you can create a github Issue. Internally, we use a project management software to manage the workflow and prioritise the tasks that are in the backlog. We aim to make this process more transparent in the coming months. 

If you have any questions about contributing please get in touch with is via the contact form on the CircuLaw website (https://circulaw-staging.vercel.app/contact).

# The platform

This is a [Next.js](https://nextjs.org/) project hosted on [Vercel](https://vercel.com) and data is created and hosted using [Sanity](https://www.sanity.io/).

## Status

CircuLaw is currently in beta stage. 

## Getting Started

You can get started by installing the dependencies by running:

```
yarn
```

Then run and watch the dev environment with:

```
yarn dev:staging
```

For cleaning up the code run:

```
yarn clean
```

For running Sanity CMS locally along with dev build:

```
yarn cms:staging
```

## Vercel Overview

Vercel picks up and builds `main` and `staging` branches automatically, please make a pull request to deploy any changes.

## Sanity Overview

Navigate to /studio folder and run `sanity deploy` to deploy changes to CMS system. This will only work if you have the needed authentication token.


## Languages & tools

### JavaScript

- [Next.js](https://nextjs.org) is used app rendering and links.
- [React](http://facebook.github.io/react) is used for interactive UI.

### CSS and UI

- [Tailwind](https://tailwindui.com/) is used to write styles and create the design system
- [HeadlessUI](https://headlessui.com/) is used for UI components

### Analytics

- [SimpleAnalytics](https://www.simpleanalytics.com/) for basic privacy centric analytics
- [Hotjar](https://www.hotjar.com/) for more detailed testing for the beta

## License

GPLv3 license

## Learn More

To learn more about the project take a look at the following resources:

- [Dm project page](https://darkmatterlabs.org/CircuLaw)
