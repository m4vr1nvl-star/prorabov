import Head from "next/head";

export default function CenyPage() {
  return (
    <>
      <Head>
        <title>Цены на услуги разнорабочих в Сочи — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Фиксированная цена на услуги разнорабочих в Сочи — 4500 ₽ за 8 часов работы одного рабочего. Что входит в стоимость, доплаты и условия для юридических лиц."
        />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Цены на услуги разнорабочих в Сочи</h1>
          <p className="section-subtitle">
            Прозрачный тариф без скрытых доплат: вы заранее понимаете, во сколько
            обойдётся смена рабочих на объекте.
          </p>
        </section>

        <section className="section">
          <div className="grid">
            <div className="hero-card" style={{ gridColumn: "span 2" }}>
              <div className="hero-price">
                4500 ₽ <span>за 8 часов работы одного разнорабочего</span>
              </div>
              <p className="hero-meta">
                Минимальный заказ — 1 смена. Цена фиксированная: вы заранее знаете
                бюджет на день.
              </p>
              <ul className="hero-list">
                <li>Работа одного разнорабочего в течение 8 часов.</li>
                <li>Выезд в пределах Большого Сочи (по согласованию).</li>
                <li>Базовые подсобные работы, погрузка и разгрузка, помощь на объекте.</li>
              </ul>
              <p className="hero-contact">
                Нужно больше людей или несколько смен подряд? Напишите нам —
                сделаем расчёт под ваш объект.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Что входит в стоимость смены</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Работа в течение 8 часов</h3>
              <p className="card-tagline">
                Полноценная смена одного разнорабочего на вашем объекте.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Типы работ</h3>
              <p className="card-tagline">
                Погрузка и разгрузка, подсобные работы, помощь на стройке и при
                ремонте, работы для частных клиентов.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">География</h3>
              <p className="card-tagline">
                Большой Сочи: Сочи, Адлер, Дагомыс, Красная Поляна, Хоста и другие
                районы.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Дополнительные условия</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Переработка</h3>
              <p className="card-tagline">
                Если работы выходят за пределы 8 часов, можно продлить смену по
                согласованному тарифу.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Ночные смены и выходные</h3>
              <p className="card-tagline">
                Для ночных работ и выходных дней возможен повышенный коэффициент —
                обсуждается заранее.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Сложные объекты</h3>
              <p className="card-tagline">
                Если нужны специальные условия (допуск, особые требования по
                безопасности), обсудим условия отдельно.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Для юридических лиц</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Работа по договору</h3>
              <p className="card-tagline">
                Подготавливаем договор и необходимые документы под ваш объект.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Безналичный расчёт</h3>
              <p className="card-tagline">
                Оплата по безналу, закрывающие документы по итогам работ.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Гибкий подбор бригад</h3>
              <p className="card-tagline">
                Можно оперативно усиливать объект дополнительными рабочими на пик
                нагрузки.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Рассчитать стоимость под вашу задачу</h2>
          <p className="section-subtitle">
            Расскажите, сколько людей вам нужно и на какой срок — мы предложим
            оптимальный вариант и подтвердим стоимость.
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
              <label className="label" htmlFor="workers">
                Количество рабочих и смен
              </label>
              <input
                className="input"
                id="workers"
                placeholder="Например: 2 разнорабочих на 3 смены"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="district">
                Район и тип объекта
              </label>
              <input
                className="input"
                id="district"
                placeholder="Адлер, склад / Сочи, квартира / Красная Поляна, отель..."
              />
            </div>
            <button className="btn-primary" type="button">
              Рассчитать стоимость
            </button>
            <p className="hero-note" style={{ marginTop: 8 }}>
              Свяжемся с вами в течение 15–30 минут и подтвердим цену под ваш объект.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
