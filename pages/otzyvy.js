import Head from "next/head";

export default function OtzyvyPage() {
  return (
    <>
      <Head>
        <title>Отзывы клиентов — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Отзывы клиентов о сервисе Разнорабочие Сочи: частные клиенты и бизнес о погрузочных работах, подсобниках и помощи на объектах."
        />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Отзывы клиентов</h1>
          <p className="section-subtitle">
            Здесь собраны отзывы клиентов, которые уже заказывали у нас
            разнорабочих для задач в Сочи и окрестностях.
          </p>
        </section>

        <section className="section">
          <div className="grid">
            <div className="card">
              <h2 className="card-title">Алексей, Сочи</h2>
              <p className="card-tagline">Частный клиент, переезд квартиры.</p>
              <p className="card-tagline">
                «Нужно было быстро вывезти старую мебель и занести новую. Ребята
                приехали вовремя, аккуратно всё вынесли и подняли без лишнего
                шума. По деньгам вышло ровно как договаривались.»
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Марина, Адлер</h2>
              <p className="card-tagline">Частный клиент, ремонт в апартаментах.</p>
              <p className="card-tagline">
                «Заказывали подсобников на время ремонта — подача материалов,
                уборка и вынос мусора. Удобно, что цена за смену фиксированная и
                можно заранее посчитать бюджет.»
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Строительная компания, Красная Поляна</h2>
              <p className="card-tagline">Юрлицо, подсобные работы на объекте.</p>
              <p className="card-tagline">
                «Нужны были дополнительные рабочие на пик работ. Подобрали людей
                быстро, работали по договору и с закрывающими документами. Удобно
                для объектов в горах.»
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Отель, Имеретинская низменность</h2>
              <p className="card-tagline">Юрлицо, сезонные работы.</p>
              <p className="card-tagline">
                «Привлекали разнорабочих для подготовки отеля к сезону: перенос
                мебели, уборка, подсобные работы. Всё сделали в срок, будем
                обращаться ещё.»
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Нужны разнорабочие в Сочи?</h2>
          <p className="section-subtitle">
            Оставьте заявку — подберём рабочих под вашу задачу и согласуем
            удобное время.
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
              <label className="label" htmlFor="task">
                Какие работы нужны
              </label>
              <input
                className="input"
                id="task"
                placeholder="Погрузка, подсобные работы, помощь на стройке..."
              />
            </div>
            <button className="btn-primary" type="button">
              Оставить заявку
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
