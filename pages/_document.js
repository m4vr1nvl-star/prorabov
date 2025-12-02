import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://t.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://t.me" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
