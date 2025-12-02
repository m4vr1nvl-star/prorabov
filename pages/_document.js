import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://t.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://mc.yandex.ru" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105619758"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
