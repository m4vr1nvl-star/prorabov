import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

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

  useEffect(() => {
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
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const handleCallClick = () => {
    const phone = "+79138907262";
    window.location.href = `tel:${phone}`;
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
              aria-hidden={!mobileMenuOpen}
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
                    onClick={() => setMobileMenuOpen(false)}
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
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
