import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

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

  return (
    <div className="main-layout">
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <div className="nav-logo">Разнорабочие Сочи</div>
            <div className="nav-tagline">Разнорабочие на день по фиксированной цене</div>
          </div>
          <div className="nav-center">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href);

              return (
                <Link key={link.href} href={link.href} legacyBehavior>
                  <a className={isActive ? "nav-link-active" : undefined}>{link.label}</a>
                </Link>
              );
            })}
          </div>
          <div className="nav-right">
            <a className="nav-phone" href="tel:+7XXXXXXXXXX">
              +7 (XXX) XXX-XX-XX
            </a>
            <button className="btn-nav-cta" type="button">
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
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
