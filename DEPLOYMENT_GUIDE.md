# Руководство по деплою на prorabov.ru

## Что уже настроено ✅

1. **Все URL обновлены на prorabov.ru:**
   - Канонические ссылки на всех страницах
   - Sitemap.xml
   - Robots.txt
   - Open Graph метатеги
   - JSON-LD структурированные данные

2. **Next.js конфигурация:**
   - Добавлены security headers
   - Настроена компрессия
   - Убран заголовок X-Powered-By
   - Настроены redirects (в vercel.json)

3. **Переменные окружения:**
   - `.env.production` создан с правильным URL
   - `.env.local.example` для локальной разработки

## Шаги для деплоя

### Вариант 1: Vercel (Рекомендуется)

Vercel - это платформа от создателей Next.js, идеально подходит для Next.js приложений.

#### 1. Подготовка

```bash
# Установите Vercel CLI глобально
npm i -g vercel

# Войдите в аккаунт Vercel
vercel login
```

#### 2. Первый деплой

```bash
# Запустите деплой из корня проекта
vercel

# Следуйте инструкциям:
# - Set up and deploy "~/project"? [Y/n]: Y
# - Which scope?: выберите ваш аккаунт
# - Link to existing project? [y/N]: N
# - What's your project's name?: raznorabochie-sochi
# - In which directory is your code located?: ./
```

#### 3. Настройка домена prorabov.ru

1. Зайдите в панель управления Vercel: https://vercel.com/dashboard
2. Выберите ваш проект
3. Перейдите в Settings → Domains
4. Добавьте домен `prorabov.ru`
5. Vercel покажет DNS записи, которые нужно добавить у вашего регистратора:

**Для основного домена (prorabov.ru):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Для www поддомена (www.prorabov.ru):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 4. Настройка DNS у регистратора

Зайдите в панель управления вашего регистратора домена (например, reg.ru, Cloudflare, GoDaddy) и добавьте указанные DNS записи.

⏰ **Важно:** Изменения DNS могут занять от 15 минут до 48 часов для полного распространения.

#### 5. Проверка

После настройки DNS проверьте:
```bash
# Проверка DNS записей
nslookup prorabov.ru

# Проверка доступности
curl -I https://prorabov.ru
```

#### 6. Продакшн деплой

```bash
# Деплой в продакшн
vercel --prod
```

### Вариант 2: Другой хостинг (VPS, shared hosting)

Если вы используете собственный сервер или хостинг:

#### 1. Сборка проекта

```bash
# Установите зависимости
npm install

# Соберите проект
npm run build
```

#### 2. Настройка на сервере

```bash
# Скопируйте файлы на сервер
rsync -avz --exclude 'node_modules' ./ user@your-server:/path/to/app/

# На сервере установите зависимости
cd /path/to/app
npm install --production

# Запустите приложение
npm start
```

#### 3. Настройка Nginx (рекомендуется)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name prorabov.ru www.prorabov.ru;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name prorabov.ru www.prorabov.ru;

    # SSL сертификаты (используйте Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/prorabov.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prorabov.ru/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 4. Установка SSL сертификата

```bash
# Установите Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Получите SSL сертификат
sudo certbot --nginx -d prorabov.ru -d www.prorabov.ru
```

#### 5. Настройка автозапуска с PM2

```bash
# Установите PM2 глобально
npm install -g pm2

# Запустите приложение
pm2 start npm --name "prorabov-ru" -- start

# Настройте автозапуск при перезагрузке
pm2 startup
pm2 save
```

## Проверка после деплоя

### 1. Проверьте основные страницы:

- https://prorabov.ru/
- https://prorabov.ru/uslugi
- https://prorabov.ru/ceny
- https://prorabov.ru/kontakty
- https://prorabov.ru/o-nas
- https://prorabov.ru/portfolio
- https://prorabov.ru/otzyvy
- https://prorabov.ru/blog

### 2. Проверьте SEO:

```bash
# Проверьте robots.txt
curl https://prorabov.ru/robots.txt

# Проверьте sitemap.xml
curl https://prorabov.ru/sitemap.xml

# Проверьте meta теги
curl -s https://prorabov.ru | grep -i "<meta"
```

### 3. Проверьте адаптивность:

Откройте сайт на разных устройствах:
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Tablet

### 4. Проверьте формы:

- Попробуйте отправить форму на главной странице
- Проверьте, что WhatsApp открывается корректно
- Убедитесь, что валидация работает

### 5. Проверьте производительность:

Используйте инструменты:
- https://pagespeed.web.dev/
- https://www.webpagetest.org/
- Chrome DevTools Lighthouse

## Troubleshooting

### Проблема: Сайт не открывается

**Решение:**
1. Проверьте DNS записи: `nslookup prorabov.ru`
2. Подождите распространения DNS (до 48 часов)
3. Очистите DNS кэш:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Linux: `sudo systemd-resolve --flush-caches`

### Проблема: Сайт открывается, но стили не загружаются

**Решение:**
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что `.next` папка собрана: `npm run build`
3. Проверьте права доступа к файлам на сервере

### Проблема: SSL сертификат не работает

**Решение:**
1. Убедитесь, что DNS записи указывают на правильный сервер
2. Перезапустите Certbot: `sudo certbot renew --dry-run`
3. Проверьте конфигурацию Nginx: `sudo nginx -t`

### Проблема: Формы не отправляются

**Решение:**
1. Проверьте консоль браузера на ошибки JavaScript
2. Убедитесь, что WhatsApp установлен на мобильном устройстве
3. Проверьте, что номер телефона правильный: +79138907262

## Мониторинг и поддержка

### Настройте мониторинг uptime:

- **UptimeRobot**: https://uptimerobot.com/ (бесплатно)
- **Pingdom**: https://www.pingdom.com/
- **StatusCake**: https://www.statuscake.com/

### Настройте аналитику:

1. **Яндекс.Метрика** (рекомендуется для РФ)
2. **Google Analytics**
3. **Vercel Analytics** (если используете Vercel)

## Обновления сайта

### Для Vercel:

```bash
# Просто запустите
vercel --prod
```

### Для собственного сервера:

```bash
# 1. Обновите код
git pull origin main

# 2. Установите зависимости (если обновлялись)
npm install

# 3. Соберите проект
npm run build

# 4. Перезапустите приложение
pm2 restart prorabov-ru
```

## Контрольный список после деплоя ✅

- [ ] Сайт открывается по адресу https://prorabov.ru
- [ ] SSL сертификат установлен и работает
- [ ] Все страницы загружаются корректно
- [ ] Формы отправляются в WhatsApp
- [ ] Мобильное меню работает
- [ ] Телефон кликабелен на мобильных
- [ ] Robots.txt доступен
- [ ] Sitemap.xml доступен
- [ ] Meta теги корректны (проверить через View Source)
- [ ] Сайт адаптивен на всех устройствах
- [ ] Настроена аналитика (опционально)
- [ ] Настроен мониторинг uptime (опционально)

## Полезные ссылки

- [Next.js документация](https://nextjs.org/docs)
- [Vercel документация](https://vercel.com/docs)
- [Let's Encrypt](https://letsencrypt.org/)
- [PM2 документация](https://pm2.keymetrics.io/)
- [Nginx документация](https://nginx.org/ru/docs/)
