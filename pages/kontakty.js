import Head from "next/head";

export default function KontaktyPage() {
  return (
    <>
      <Head>
        <title>Контакты — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Контакты сервиса Разнорабочие Сочи: телефон, мессенджеры, время работы и форма обратной связи. Работаем по всему Большому Сочи — от Дагомыса до Красной Поляны."
        />
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
                  <a href="tel:+7XXXXXXXXXX">+7 (XXX) XXX-XX-XX</a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Мессенджеры</h2>
              <p className="card-tagline">Удобно отправить адрес, фото и задачу.</p>
              <ul className="card-list">
                <li>
                  <a href="#">WhatsApp</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
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

          <div className="form-card">
            <div className="form-group">
              <label className="label" htmlFor="name">
                Имя
              </label>
              <input className="input" id="name" placeholder="Как к вам обращаться" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Телефон
              </label>
              <input className="input" id="phone" placeholder="Ваш номер телефона" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="district">
                Район
              </label>
              <input className="input" id="district" placeholder="Сочи, Адлер, Дагомыс, Красная Поляна..." />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="message">
                Кратко опишите задачу
              </label>
              <textarea
                className="textarea"
                id="message"
                placeholder="Например: нужны 2 разнорабочих на погрузку строительных материалов завтра к 10:00"
              />
            </div>
            <button className="btn-primary" type="button">
              Отправить
            </button>
            <p className="hero-note" style={{ marginTop: 8 }}>
              Свяжемся с вами в течение 15–30 минут в рабочее время.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
