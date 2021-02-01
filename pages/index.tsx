import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo SSR</title>
      </Head>

      <main>
        <h1>
          Welcome to Todo SSR
        </h1>

      </main>

      <footer>
        <p>
          A demonstration SSR todo app.
        </p>
      </footer>
    </div>
  )
}
