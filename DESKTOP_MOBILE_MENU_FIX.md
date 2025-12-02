# Исправление меню и кнопок для desktop и mobile версий

## Дата: 14 декабря 2024

## Проблема
Меню и кнопки не работали в компьютерной версии сайта. Навигационные ссылки и кнопки были некликабельны.

## Причина
1. **JavaScript логика применялась неправильно**: Обработчики событий для мобильного меню срабатывали и на desktop версии
2. **Отсутствие определения типа устройства**: Код не различал desktop и mobile устройства
3. **Конфликт обработчиков**: onClick на ссылках всегда закрывал "мобильное меню", даже на desktop

## Решение

### 1. Добавлена проверка типа устройства (_app.js)
```javascript
const [isMobile, setIsMobile] = useState(false);

// Определяем, мобильное ли устройство
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 900);
  };
  
  checkMobile();
  window.addEventListener("resize", checkMobile);
  
  return () => {
    window.removeEventListener("resize", checkMobile);
  };
}, []);
```

### 2. Условная логика для мобильного меню (_app.js)
```javascript
// Обработчики для мобильного меню
useEffect(() => {
  if (!isMobile) {
    // На desktop всегда закрываем мобильное меню и разрешаем скролл
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
    return;
  }

  // Мобильная логика только для mobile устройств
  // ...
}, [mobileMenuOpen, isMobile]);
```

### 3. Оптимизированный обработчик кликов по ссылкам (_app.js)
```javascript
const handleLinkClick = () => {
  // Закрываем меню только на мобильных
  if (isMobile) {
    setMobileMenuOpen(false);
  }
};
```

### 4. Улучшенная кнопка вызова (_app.js)
```javascript
const handleCallClick = (e) => {
  e.preventDefault();
  const phone = "+79138907262";
  window.location.href = `tel:${phone}`;
};
```

### 5. CSS улучшения (globals.css)

#### Desktop меню
```css
.nav-center {
  display: flex;
  gap: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-700);
  justify-content: center;
  flex: 1;
  align-items: center; /* добавлено */
}

.nav-center a {
  color: var(--color-gray-700);
  position: relative;
  padding-bottom: 4px;
  transition: color var(--transition-base);
  cursor: pointer; /* добавлено */
  text-decoration: none; /* добавлено */
  white-space: nowrap; /* добавлено */
}
```

#### Кнопки
```css
.btn-primary,
.btn-secondary,
.btn-nav-cta {
  /* ... существующие стили ... */
  pointer-events: auto; /* добавлено */
  position: relative; /* добавлено */
}
```

#### Header и Nav
```css
.header {
  /* ... существующие стили ... */
  pointer-events: auto; /* добавлено */
}

.nav {
  /* ... существующие стили ... */
  pointer-events: auto; /* добавлено */
}
```

## Результаты

### Desktop (> 900px)
✅ Меню всегда видимо в горизонтальной раскладке
✅ Все ссылки кликабельны
✅ Hover эффекты работают (оранжевое подчеркивание)
✅ Активная страница подсвечена оранжевым
✅ Кнопка "Заказать звонок" работает
✅ Hamburger кнопка скрыта

### Mobile (≤ 900px)
✅ Hamburger кнопка видна и работает (☰ → ✕)
✅ Меню раскрывается вниз с анимацией
✅ Клик по ссылке закрывает меню и переходит на страницу
✅ Клик вне меню закрывает меню
✅ ESC закрывает меню
✅ Скролл body блокируется при открытом меню
✅ Смена маршрута закрывает меню

## Технические детали

### Breakpoint
- **Desktop**: > 900px
- **Mobile**: ≤ 900px

### useEffect хуки (оптимизация)
1. **Первый useEffect**: Определение типа устройства и resize listener
2. **Второй useEffect**: Обработчики для мобильного меню (только на mobile)
3. **Третий useEffect**: Закрытие меню при смене маршрута (только на mobile)

### aria-атрибуты
- `aria-hidden={isMobile && !mobileMenuOpen}` - меню скрыто только на mobile когда закрыто
- `aria-label` и `aria-expanded` для кнопки hamburger
- `aria-controls` связывает кнопку с меню

## Тестирование

### Desktop
1. Открыть сайт на экране > 900px
2. Кликнуть по любой ссылке в меню → переход должен работать
3. Навести на ссылку → появляется оранжевое подчеркивание
4. Кликнуть "Заказать звонок" → должен открыться tel: протокол

### Mobile
1. Открыть сайт на экране ≤ 900px
2. Кликнуть hamburger (☰) → меню раскрывается
3. Кликнуть по ссылке → меню закрывается, переход происходит
4. Открыть меню и кликнуть вне → меню закрывается
5. Открыть меню и нажать ESC → меню закрывается
6. При открытом меню скролл страницы заблокирован

## Совместимость
- ✅ Chrome/Edge/Brave (Chromium)
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ✅ Samsung Internet
- ✅ Touch устройства (планшеты)

## Дополнительная информация

### Почему использован breakpoint 900px?
Это оптимальная точка для перехода между desktop и mobile навигацией для данного дизайна. При 8 пунктах меню и текущих отступах, меню начинает "ломаться" на экранах < 900px.

### Почему не используется `matchMedia`?
`window.innerWidth` с resize listener - это более простое и надежное решение для данного кейса. `matchMedia` имеет свои преимущества, но для данной задачи достаточно текущего подхода.

### Почему `pointer-events: auto`?
Это явное указание браузеру, что элемент должен реагировать на клики. В некоторых случаях (особенно при сложных z-index или позиционировании) это может решить проблемы с кликабельностью.
