This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The purpose of this app is to showcase an opinionated way to handle SSR form requests with zero frontend JS.

Following the GDS best practise around progressive enhancement[^1], and minimising the JS *required* to render an effective page.

This is inspired by a recent blog post[^2] I read about citizens using old devices which lack the ability to run JS, or render complex stylesheets.

[^1]: [Using Progressive Enhancement - GDS Service Manual](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
[^2]: [The unreasonable effectiveness of simple HTML - Terence Eden](https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/)
## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
