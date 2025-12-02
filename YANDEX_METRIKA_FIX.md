# Исправление подключения Яндекс.Метрики

**Дата**: 14 декабря 2024  
**Проблема**: Счетчик Яндекс.Метрики не отображался на сайте

## Причина проблемы

Яндекс.Метрика была подключена в `/pages/_document.js` через inline скрипт в `<Head>`. При Server-Side Rendering (SSR) в Next.js объект `document` недоступен на сервере, что приводило к ошибкам при выполнении кода с проверкой `document.scripts`.

## Решение

### 1. Удалена инициализация из `_document.js`

**Было** в `/pages/_document.js`:
```javascript
<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105619758', 'ym');

      ym(105619758, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    `,
  }}
/>
```

**Стало** в `/pages/_document.js`:
- Оставлены только preconnect/dns-prefetch для оптимизации
- Оставлен noscript fallback для пользователей без JavaScript

```javascript
<Head>
  <link rel="preconnect" href="https://mc.yandex.ru" crossOrigin="anonymous" />
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
```

### 2. Добавлена правильная инициализация в `_app.js`

В `/pages/_app.js` добавлены два `useEffect` хука:

#### useEffect #1: Инициализация счетчика (один раз при монтировании)

```javascript
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Инициализация Яндекс.Метрики
  useEffect(() => {
    // Загружаем скрипт Яндекс.Метрики
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t);
      a=e.getElementsByTagName(t)[0];
      k.async=1;
      k.src=r;
      a.parentNode.insertBefore(k,a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Инициализируем счетчик
    window.ym = window.ym || function() {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = 1 * new Date();

    window.ym(105619758, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer"
    });
  }, []);

  // ... остальной код
}
```

#### useEffect #2: Отслеживание переходов между страницами

```javascript
// Отслеживание переходов между страницами
useEffect(() => {
  const handleRouteChange = (url) => {
    if (typeof window.ym !== 'undefined') {
      window.ym(105619758, 'hit', url);
    }
  };

  router.events.on('routeChangeComplete', handleRouteChange);

  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, [router.events]);
```

## Преимущества решения

1. **✅ SSR-совместимость**: `useEffect` выполняется только на клиенте после монтирования компонента
2. **✅ Гарантия доступности DOM**: `document` и `window` доступны при выполнении кода
3. **✅ Автоматическое отслеживание**: При переходах между страницами автоматически отправляется hit
4. **✅ Проверка безопасности**: `typeof window.ym !== 'undefined'` предотвращает ошибки
5. **✅ Оптимизация**: Preconnect ускоряет загрузку скриптов метрики
6. **✅ Fallback**: Noscript тег обеспечивает базовую аналитику даже без JavaScript

## Проверка работы

После деплоя счетчик должен:
1. Загружаться на всех страницах сайта
2. Отправлять события при переходах между страницами (SPA навигация)
3. Отображаться в панели Яндекс.Метрики с зеленым индикатором
4. Корректно работать webvisor, clickmap, accurateTrackBounce

## Тестирование

### В браузере (DevTools Console):
```javascript
// Проверить наличие счетчика
console.log(typeof window.ym); // должно быть "function"

// Проверить версию
window.ym(105619758, 'getClientID');

// Отправить тестовое событие
window.ym(105619758, 'reachGoal', 'test-event');
```

### В Яндекс.Метрике:
1. Перейти на https://metrika.yandex.ru/dashboard?id=105619758
2. Проверить "Онлайн" посетителей (должны появиться в течение минуты)
3. Проверить индикатор установки счетчика (должен быть зеленым)

## Важные замечания

- Удалён параметр `ssr: true` из init - он не нужен при клиентской инициализации
- ID счетчика: **105619758**
- Все функции включены: webvisor, clickmap, accurateTrackBounce, trackLinks, ecommerce
- Счетчик загружается асинхронно и не блокирует рендеринг страницы

## Связанные файлы

- `/pages/_app.js` - основная инициализация
- `/pages/_document.js` - preconnect и noscript fallback
- `/styles/globals.css` - стили (без изменений)

## Дальнейшие улучшения

Возможные дополнения в будущем:
- Добавить цели (goals) для отслеживания конверсий
- Настроить e-commerce tracking для форм заявок
- Добавить пользовательские параметры визитов
- Интегрировать с другими аналитическими системами (Google Analytics)
