This is a demo repository of https://github.com/vercel/next.js/issues/53724 issue with a minimal example.

## Reproduction

```
npm install
npm run dev
```

Test Pages Router:

1. Visit http://localhost:3000/, works as expected
2. Visit http://localhost:3000/pl, works as expected

Test App Router:

1. Visit http://localhost:3000/en/about, returns 404, should return the `app/[lang]/about/page.jsx` page
1. Visit http://localhost:3000/pl/about, returns 404, should return the `app/[lang]/about/page.jsx` page
1. Visit http://localhost:3000/asdf/about, returns the `app/[lang]/about/page.jsx` page (`asdf` is not a defined locale in `next.config.js`)

Now, remove the `i18n` key from `next.config.js`. The App Router will start working, however the Pages Router will stop working.

## Expected behaviour

It should be possible to adopt App Router incrementally alongside Pages Router for multi-language pages. The mere existence of `i18n` configuration in `next.config.js` shouldn't affect the App Router.
