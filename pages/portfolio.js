import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Портфолио работ — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Примеры работ сервиса Разнорабочие Сочи: погрузка, разгрузка, подсобные работы и помощь на объектах в Сочи, Адлере, Дагомысе и Красной Поляне."
        />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Портфолио работ</h1>
          <p className="section-subtitle">
            Здесь — примеры типичных задач, которые мы выполняем для клиентов в
            разных районах Сочи.
          </p>
        </section>

        <section className="section">
          <div className="grid">
            <div className="card">
              <h2 className="card-title">Адлер — погрузка стройматериалов</h2>
              <p className="card-tagline">Частный дом, подготовка к ремонту.</p>
              <ul className="card-list">
                <li>2 разнорабочих на 1 смену.</li>
                <li>Разгрузка фуры с материалами и перенос на участок.</li>
                <li>Сортировка и аккуратная укладка по зонам.</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Сочи — подсобные работы на ремонте квартиры</h2>
              <p className="card-tagline">Квартира под сдачу в центре города.</p>
              <ul className="card-list">
                <li>1–2 разнорабочих в течение нескольких смен.</li>
                <li>Подача материалов, уборка и вынос мусора.</li>
                <li>Помощь мастерам при черновых работах.</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Дагомыс — вынос строительного мусора</h2>
              <p className="card-tagline">Частный дом после капитального ремонта.</p>
              <ul className="card-list">
                <li>2 разнорабочих на 1 смену.</li>
                <li>Сбор и вынос тяжелых мешков и остатков материалов.</li>
                <li>Погрузка в контейнер для вывоза.</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="card-title">Красная Поляна — помощь на объекте отеля</h2>
              <p className="card-tagline">Отель в горах, сезонные работы.</p>
              <ul className="card-list">
                <li>Группа разнорабочих на несколько смен.</li>
                <li>Погрузка и разгрузка, перемещение инвентаря.</li>
                <li>Подсобные работы внутри и на территории.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Хотите похожий результат?</h2>
          <p className="section-subtitle">
            Опишите свой объект и задачу — подберём рабочих и предложим решение под
            ваш район Сочи.
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
                Кратко опишите задачу
              </label>
              <input
                className="input"
                id="task"
                placeholder="Например: нужна бригада на разгрузку и подсобные работы"
              />
            </div>
            <button className="btn-primary" type="button">
              Оставить заявку
            </button>
            <p className="hero-note" style={{ marginTop: 8 }}>
              Свяжемся с вами в течение 15–30 минут и обсудим детали.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
