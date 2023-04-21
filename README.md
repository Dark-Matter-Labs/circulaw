# CircuLaw

Unlocking regulatory innovation for the circular economy transition

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
