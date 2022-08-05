# CircuLaw

A project for exploring circular economy laws in the Netherlands.

## Branching and Links

main/

preview/

### Creating new Branches

New branches should use the `FirstName/Task` structure and when merged should like back to the [trello board ticket](https://trello.com/c/rjQCtTNQ/).

## Getting Started

Where are using [Next.js](https://nextjs.org) as our JS framework and out CSS library is [Tailwind](https://tailwindui.com/). The project is hosted on [Vercel](https://vercel.com) at the moment and all of the data is currently being stored in a static JSON file called `/data.js`

You can get started by installing the dependencies by running:

```
yarn
```

Than run and watch the dev environment with:

```
yarn dev
```

For cleaning up the code run:

```
yarn clean
```

## Vercel Overview

To publish or test any code you can push directly to vercel by running and following the flow in terminal.

```
Vercel link
```

## ENV

Added temp auth variables for testing

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_USERNAME=darkmatter
NEXTAUTH_PASSWORD="circular"
```

---

## Languages & tools

### JavaScript

- [Next.js](https://nextjs.org) is used app rendering and links.
- [React](http://facebook.github.io/react) is used for interactive UI.

### CSS

- [Tailwind](https://tailwindui.com/) is used to write futureproof CSS for CSS vendor prefix under the hood).
