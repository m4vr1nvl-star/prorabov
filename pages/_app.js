import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/ceny", label: "Цены" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/o-nas", label: "О нас" },
  { href: "/kontakty", label: "Контакты" },
  { href: "/blog", label: "Блог" },
];

function Layout({ children }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
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

  // Обработчики для мобильного меню
  useEffect(() => {
    if (!isMobile) {
      // На desktop всегда закрываем мобильное меню и разрешаем скролл
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
      return;
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isMobile]);

  // Закрываем меню при смене маршрута
  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, isMobile]);

  const handleCallClick = (e) => {
    e.preventDefault();
    const phone = "+79138907262";
    window.location.href = `tel:${phone}`;
  };

  const handleLinkClick = () => {
    // Закрываем меню только на мобильных
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className="main-layout">
        <header className="header">
          <nav className="nav" ref={navRef}>
            <div className="nav-left">
              <Link href="/" className="nav-logo-link">
                <div className="nav-logo">Разнорабочие Сочи</div>
                <div className="nav-tagline">Разнорабочие на день по фиксированной цене</div>
              </Link>
            </div>
            <button 
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
            <div 
              id="mobile-navigation"
              className={`nav-center ${mobileMenuOpen ? "nav-center-open" : ""}`}
              aria-hidden={isMobile && !mobileMenuOpen}
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.href);

                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={isActive ? "nav-link-active" : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="nav-right">
              <a className="nav-phone" href="tel:+79138907262">
                +7 (913) 890-72-62
              </a>
              <button className="btn-nav-cta" type="button" onClick={handleCallClick}>
                Заказать звонок
              </button>
            </div>
          </nav>
        </header>

        <main className="page-root">{children}</main>

        <footer className="footer">
          Разнорабочие Сочи — разнорабочие на день по фиксированной цене. Работаем по
          всему Большому Сочи: от Дагомыса до Красной Поляны.
        </footer>
      </div>
    </>
  );
}

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

  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
