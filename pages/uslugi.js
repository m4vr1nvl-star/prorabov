import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function UslugiPage() {
  return (
    <>
      <Head>
        <title>Услуги разнорабочих в Сочи — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Услуги разнорабочих в Сочи для частных и юридических лиц: погрузка и разгрузка, подсобные работы на стройке, монолит, демонтаж, вынос мусора, помощь на участке. Фиксированная цена за смену."
        />
        <meta property="og:title" content="Услуги разнорабочих в Сочи — Разнорабочие Сочи" />
        <meta property="og:description" content="Услуги разнорабочих в Сочи для частных и юридических лиц. Фиксированная цена за смену." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://raznorabochie-sochi.ru/uslugi" />
      </Head>

      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Услуги разнорабочих в Сочи</h1>
          <p className="section-subtitle">
            Помогаем с самыми разными задачами на стройке, при ремонте и в быту.
            Работаем по всему Большому Сочи, с частными клиентами и организациями.
          </p>
          <p className="section-subtitle">
            Вы можете заказать одного или нескольких разнорабочих на смену: от
            погрузки и разгрузки до подсобных работ на объекте.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Основные направления работ</h2>
          <p className="section-subtitle">
            Ниже — ключевые виды работ, которые закрывают 90% запросов наших клиентов.
          </p>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Монолитные и бетонные работы</h3>
              <p className="card-tagline">
                Подсобники на монолит, бетон, армирование, подача и уборка материалов.
              </p>
              <ul className="card-list">
                <li>Поднос арматуры, бетона, блоков.</li>
                <li>Уборка после заливки и черновые работы.</li>
                <li>Помощь бригадам на строительстве.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Сварка и металлоконструкции</h3>
              <p className="card-tagline">
                Помощь сварщикам и бригадам при работе с металлоконструкциями.
              </p>
              <ul className="card-list">
                <li>Погрузка и подача металла.</li>
                <li>Держать, фиксировать, помогать при монтаже.</li>
                <li>Уборка и вынос мусора после работ.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Погрузочно-разгрузочные работы</h3>
              <p className="card-tagline">
                Разгрузка фур и машин, перенос мебели, техники и материалов.
              </p>
              <ul className="card-list">
                <li>Переезды квартир и домов.</li>
                <li>Разгрузка стройматериалов на объект.</li>
                <li>Работа на складах и в доставке.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Монтаж гипсокартона и черновые работы</h3>
              <p className="card-tagline">
                Помощь мастерам при монтаже ГКЛ и других черновых работах.
              </p>
              <ul className="card-list">
                <li>Подача листов и профилей.</li>
                <li>Демонтаж старых конструкций.</li>
                <li>Уборка и вынос мусора после работ.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Подсобные работы на стройке и при ремонте</h3>
              <p className="card-tagline">
                Универсальные подсобники на любые объекты в Сочи.
              </p>
              <ul className="card-list">
                <li>Подача и перемещение материалов.</li>
                <li>Очистка помещений и территорий.</li>
                <li>Выполнение простых поручений мастеров.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card-title">Работы для частных клиентов</h3>
              <p className="card-tagline">
                Помощь по дому, на даче и участке «по вызову».
              </p>
              <ul className="card-list">
                <li>Перенос и сборка мебели.</li>
                <li>Вынос и вывоз строймусора.</li>
                <li>Работы на участке и в подсобных помещениях.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Как заказать разнорабочих</h2>
          <p className="section-subtitle">
            Расскажите, какие работы нужны и в каком районе Сочи находится объект —
            мы подберём подходящих людей и согласуем время.
          </p>

          <ContactForm variant="services" />
        </section>
      </div>
    </>
  );
}
