# Исправление мобильного меню

## Проблемы, которые были исправлены

### 1. **Управление Event Listeners**
- ✅ Разделили useEffect на два независимых хука
- ✅ Первый useEffect управляет меню (клики вне, Escape, блокировка скролла)
- ✅ Второй useEffect управляет router events (закрытие при навигации)
- ✅ Убрали зависимость router.events из первого useEffect

### 2. **Блокировка скролла страницы**
- ✅ Добавлена блокировка `body { overflow: hidden }` когда меню открыто
- ✅ Скролл восстанавливается при закрытии меню или размонтировании компонента

### 3. **Улучшенная анимация**
- ✅ Добавлено свойство `visibility` для предотвращения ghost clicks
- ✅ Улучшены timing functions: `cubic-bezier(0.4, 0, 0.2, 1)`
- ✅ Плавные переходы для всех свойств
- ✅ `max-height` динамически рассчитывается: `calc(100vh - 70px)`

### 4. **Overflow и скроллинг**
- ✅ `overflow-y: auto` для поддержки длинных меню
- ✅ `overflow-x: hidden` для предотвращения горизонтального скролла

### 5. **Z-index управление**
- ✅ `z-index: 51` для кнопки гамбургера
- ✅ `z-index: 40` для меню
- ✅ Кнопка всегда доступна над меню

### 6. **Доступность (Accessibility)**
- ✅ Добавлены aria-атрибуты:
  - `aria-expanded` на кнопке
  - `aria-controls` связывает кнопку с меню
  - `aria-hidden` на меню
  - `aria-label` для кнопки (динамический)
- ✅ Добавлен `id="mobile-navigation"` для связи с aria-controls

## Технические детали

### JavaScript (_app.js)
```javascript
// Отдельные useEffect для независимых операций
useEffect(() => {
  // Управление меню: клики, Escape, блокировка скролла
  if (mobileMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden"; // Блокировка скролла
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    // Cleanup
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);

useEffect(() => {
  // Управление router events
  const handleRouteChange = () => setMobileMenuOpen(false);
  router.events.on("routeChangeStart", handleRouteChange);
  return () => router.events.off("routeChangeStart", handleRouteChange);
}, [router.events]);
```

### CSS (globals.css)
```css
.nav-center {
  position: absolute;
  top: 100%;
  max-height: 0;
  overflow-y: auto; /* Скроллинг для длинных меню */
  overflow-x: hidden;
  opacity: 0;
  visibility: hidden; /* Предотвращает ghost clicks */
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              padding 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0s linear 0.3s; /* Задержка для visibility */
  z-index: 40;
}

.nav-center-open {
  max-height: calc(100vh - 70px); /* Динамический расчет */
  opacity: 1;
  visibility: visible;
  padding: 16px;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              padding 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0s linear 0s; /* Без задержки при открытии */
}
```

## Поведение меню

### Открытие меню
- ✅ Клик по кнопке гамбургера (☰ → ✕)
- ✅ Плавная анимация с max-height, opacity, padding
- ✅ Блокируется скролл страницы

### Закрытие меню
- ✅ Клик по кнопке гамбургера (✕ → ☰)
- ✅ Клик вне меню (mousedown/touchstart)
- ✅ Нажатие клавиши Escape
- ✅ Клик по ссылке в меню
- ✅ Переход на другую страницу (router event)
- ✅ Восстановление скролла страницы

## Тестирование

### Desktop (> 900px)
- ✅ Мобильное меню скрыто
- ✅ Горизонтальная навигация видна

### Tablet/Mobile (≤ 900px)
- ✅ Кнопка гамбургера видна
- ✅ Меню открывается плавно
- ✅ Скролл страницы блокируется
- ✅ Меню закрывается всеми способами
- ✅ Активная ссылка подсвечена оранжевым + серым фоном
- ✅ Touch-оптимизация (min-height: 48px)

## Совместимость

- ✅ iOS Safari (touch events + overflow hidden)
- ✅ Android Chrome (touch events + tap highlight)
- ✅ Desktop browsers (mouse events + keyboard)
- ✅ Screen readers (ARIA атрибуты)

## Файлы изменены

1. `/pages/_app.js` - логика мобильного меню
2. `/styles/globals.css` - стили мобильного меню
