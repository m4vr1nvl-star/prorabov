import Head from "next/head";
import ContactForm from "../components/ContactForm";
import JsonLd from "../components/JsonLd";

export default function KontaktyPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Разнорабочие Сочи",
    "telephone": "+79138907262",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Ленина, 129",
      "addressLocality": "Адлер",
      "addressRegion": "Краснодарский край",
      "addressCountry": "RU"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  const handleWhatsAppClick = () => {
    const phone = "+79138907262";
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}`, "_blank");
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/+79138907262`, "_blank");
  };

  return (
    <>
      <Head>
        <title>Контакты — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Контакты сервиса Разнорабочие Сочи: телефон +7 (913) 890-72-62, адрес ул. Ленина 129, Адлер. Работаем ежедневно с 9:00 до 20:00 по всему Большому Сочи."
        />
        <meta property="og:title" content="Контакты — Разнорабочие Сочи" />
        <meta property="og:description" content="Контакты сервиса Разнорабочие Сочи: телефон +7 (913) 890-72-62, адрес ул. Ленина 129, Адлер." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prorabov.ru/kontakty" />
        <JsonLd data={contactSchema} />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Контакты</h1>
          <p className="section-subtitle">
            Свяжитесь с нами любым удобным способом — подскажем по условиям и
            подберём рабочих под вашу задачу.
          </p>
        </section>

        <section className="section">
          <div className="grid">
            <div className="card">
              <h2 className="card-title">Телефон</h2>
              <p className="card-tagline">Для быстрых вопросов и срочных заявок.</p>
              <ul className="card-list">
                <li>
                  <a href="tel:+79138907262">+7 (913) 890-72-62</a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Мессенджеры</h2>
              <p className="card-tagline">Удобно отправить адрес, фото и задачу.</p>
              <ul className="card-list">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }} style={{ cursor: 'pointer', color: 'var(--accent)' }}>WhatsApp</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleTelegramClick(); }} style={{ cursor: 'pointer', color: 'var(--accent)' }}>Telegram</a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Время работы</h2>
              <p className="card-tagline">Принимаем заявки и выезжаем ежедневно.</p>
              <ul className="card-list">
                <li>Ежедневно с 9:00 до 20:00</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Адрес офиса</h2>
              <p className="card-tagline">
                Приходите к нам для личной консультации.
              </p>
              <ul className="card-list">
                <li>ул. Ленина, 129, Адлер</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">География</h2>
              <p className="card-tagline">
                Работаем по всему Большому Сочи: от моря до гор.
              </p>
              <ul className="card-list">
                <li>Сочи, Хоста</li>
                <li>Адлер, Имеретинка</li>
                <li>Дагомыс и пригород</li>
                <li>Красная Поляна и окрестности</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Отправить заявку или вопрос</h2>
          <p className="section-subtitle">
            Укажите, какие работы нужны и когда — мы свяжемся с вами, уточним
            детали и предложим решение под ваш объект.
          </p>

          <ContactForm variant="contact" />
        </section>
      </div>
    </>
  );
}
