import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Разнорабочие Сочи — разнорабочие на день в Сочи</title>
        <meta
          name="description"
          content="Разнорабочие на день в Сочи по фиксированной цене — 4500 ₽ за 8 часов работы. Погрузка, разгрузка, подсобные работы, помощь при ремонте и на участке по всему Большому Сочи."
        />
      </Head>
      <div className="container">
      <section className="hero">
        <div>
          <h1 className="hero-heading">Разнорабочие в Сочи — быстро, честно и по делу</h1>
          <p className="hero-subtitle">
            Ищете надёжных разнорабочих в Сочи? Мы предоставляем рабочих на стройку,
            склад, погрузку, уборку, земляные и монтажные работы. Вы получаете
            исполнителей без задержек и лишних разговоров — приехали, сделали, сдали.
          </p>

          <div className="hero-badges">
            <span className="badge">Подбор рабочих за 15–30 минут</span>
            <span className="badge badge-geo">Работаем по всему Большому Сочи</span>
          </div>

          <div className="hero-cta">
            <button className="btn-primary">Заказать разнорабочих</button>
            <button className="btn-secondary">Написать в WhatsApp</button>
          </div>

          <p className="hero-note">
            Расскажите кратко задачу — мы предложим решение и подтвердим стоимость.
          </p>
        </div>

        <aside className="hero-card">
          <div className="form-card" style={{ maxWidth: "100%", boxShadow: "none", margin: 0 }}>
            <div className="form-group">
              <label className="label" htmlFor="hero-name">
                Имя
              </label>
              <input className="input" id="hero-name" placeholder="Как к вам обращаться" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="hero-phone">
                Телефон
              </label>
              <input className="input" id="hero-phone" placeholder="Ваш номер телефона" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="hero-district">
                Район
              </label>
              <input
                className="input"
                id="hero-district"
                placeholder="Сочи, Адлер, Дагомыс, Красная Поляна..."
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="hero-task">
                Какие работы нужны
              </label>
              <input
                className="input"
                id="hero-task"
                placeholder="Погрузка, подсобные работы, помощь на стройке..."
              />
            </div>
            <button className="btn-primary" type="button">
              Оставить заявку
            </button>
            <p className="hero-note" style={{ marginTop: 8 }}>
              Свяжемся с вами в течение 15–30 минут и подберём рабочих под задачу.
            </p>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2 className="section-title">Какие работы выполняем</h2>
        <p className="section-subtitle">
          Закрываем самые частые задачи по дому, ремонту и стройке в Сочи.
        </p>
        <div className="grid">
          <div className="card">
            <h3 className="card-title">Погрузочно-разгрузочные работы</h3>
            <p className="card-tagline">
              Перенос мебели, техники, материалов, разгрузка фур и машин.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Подсобные работы на стройке</h3>
            <p className="card-tagline">
              Помощь бригадам, подача материалов, уборка и черновые работы.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Работы при ремонте и на участке</h3>
            <p className="card-tagline">
              Демонтаж, вынос мусора, помощь на даче и в частном доме.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Как всё происходит</h2>
        <p className="section-subtitle">
          Простой и понятный процесс — без лишней бюрократии и долгих согласований.
        </p>
        <div className="grid steps-grid">
          <div className="card step-card">
            <h3 className="card-title">
              <span className="step-badge">1</span>
              Заявка или звонок
            </h3>
            <p className="card-tagline">
              Оставляете заявку на сайте или звоните нам напрямую.
            </p>
          </div>
          <div className="card step-card">
            <h3 className="card-title">
              <span className="step-badge">2</span>
              Подбор рабочих
            </h3>
            <p className="card-tagline">
              Подбираем людей под вашу задачу и уточняем детали по времени.
            </p>
          </div>
          <div className="card step-card">
            <h3 className="card-title">
              <span className="step-badge">3</span>
              Выезд и работа
            </h3>
            <p className="card-tagline">
              Рабочие приезжают в нужное время и выполняют задачи на объекте.
            </p>
          </div>
          <div className="card step-card">
            <h3 className="card-title">
              <span className="step-badge">4</span>
              Оплата по факту
            </h3>
            <p className="card-tagline">
              Вы принимаете работу и оплачиваете смену по фиксированной цене.
            </p>
          </div>
        </div>
      </section>

      <section className="section geo-section">
        <h2 className="section-title">Где работаем</h2>
        <p className="section-subtitle">
          Работаем по всему Большому Сочи: от Дагомыса до Красной Поляны. Если не
          нашли свой район на карте — просто напишите нам.
        </p>
        <div className="geo-layout">
          <div className="geo-map">
            <div className="geo-map-highlight" />
            <div className="geo-map-label geo-map-label-main">Большой Сочи</div>
            <div className="geo-marker geo-marker-sochi">
              <span className="geo-marker-dot" />
              <span className="geo-marker-text">Сочи и Хоста</span>
            </div>
            <div className="geo-marker geo-marker-adler">
              <span className="geo-marker-dot" />
              <span className="geo-marker-text">Адлер и Имеретинка</span>
            </div>
            <div className="geo-marker geo-marker-dagomys">
              <span className="geo-marker-dot" />
              <span className="geo-marker-text">Дагомыс и пригород</span>
            </div>
            <div className="geo-marker geo-marker-polyana">
              <span className="geo-marker-dot" />
              <span className="geo-marker-text">Красная Поляна</span>
            </div>
          </div>
          <div className="geo-legend">
            <div className="geo-legend-card">
              <h3 className="card-title">Сочи и Хоста</h3>
              <p className="card-tagline">Центр Сочи, Хоста и ближайшие районы.</p>
            </div>
            <div className="geo-legend-card">
              <h3 className="card-title">Адлер и Имеретинка</h3>
              <p className="card-tagline">
                Частные дома, отели, апартаменты под аренду.
              </p>
            </div>
            <div className="geo-legend-card">
              <h3 className="card-title">Дагомыс и пригород</h3>
              <p className="card-tagline">Квартиры, коттеджи, дачные участки.</p>
            </div>
            <div className="geo-legend-card">
              <h3 className="card-title">Красная Поляна</h3>
              <p className="card-tagline">
                Объекты в горах, гостиницы, базы отдыха и стройки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Почему нас выбирают</h2>
        <p className="section-subtitle">
          Мы не просто объявления с рабочими, а сервис, который берёт ответственность на себя.
        </p>
        <div className="grid">
          <div className="card">
            <h3 className="card-title">Фиксированная цена за смену</h3>
            <p className="card-tagline">
              Вы заранее понимаете бюджет — без неожиданных доплат.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Проверенные рабочие</h3>
            <p className="card-tagline">
              Берём людей с опытом и следим за дисциплиной.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Быстрый выезд</h3>
            <p className="card-tagline">
              В большинстве случаев подбираем рабочих в течение 15–30 минут.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Частники и бизнес</h3>
            <p className="card-tagline">
              Работаем и с частными клиентами, и с юридическими лицами.
            </p>
          </div>
        </div>
      </section>

      
      </div>
    </>
  );
}
