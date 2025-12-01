import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function ONasPage() {
  return (
    <>
      <Head>
        <title>О сервисе «Разнорабочие Сочи»</title>
        <meta
          name="description"
          content="Кто стоит за сервисом Разнорабочие Сочи: опыт в стройке и ремонте, подход к работе и принципы сервиса разнорабочих на день."
        />
        <meta property="og:title" content="О сервисе «Разнорабочие Сочи»" />
        <meta property="og:description" content="Кто стоит за сервисом Разнорабочие Сочи: опыт в стройке и ремонте, подход к работе." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prorabov.ru/o-nas" />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">О сервисе «Разнорабочие Сочи»</h1>
          <p className="section-subtitle">
            Мы помогаем быстро находить надёжных разнорабочих на день для задач в
            Сочи и окрестностях: от простых погрузочных работ до подсобных работ на
            стройке.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Почему появился этот сервис</h2>
          <p className="section-subtitle">
            В Сочи постоянно что-то строится, ремонтируется и переезжает. Но
            каждый раз, когда нужны рабочие «на один день», люди сталкиваются с
            одними и теми же проблемами: долгий поиск, срывы и непонятные цены.
          </p>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Проблема с надёжностью</h3>
              <p className="card-tagline">
                Объявлений много, но сложно понять, кто действительно выйдет на
                объект и сделает работу до конца.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Нет прозрачных цен</h3>
              <p className="card-tagline">
                В процессе часто появляются «доплаты» и новые условия, о которых
                не договаривались.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Сложно управлять процессом</h3>
              <p className="card-tagline">
                Нужно самому искать людей, созваниваться, объяснять задачу и
                контролировать всё вручную.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Наш подход</h2>
          <p className="section-subtitle">
            «Разнорабочие Сочи» — это сервис, который берёт организацию на себя и
            даёт понятные условия по фиксированной цене.
          </p>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Фикс за смену</h3>
              <p className="card-tagline">
                Чёткая цена за 8 часов работы одного разнорабочего — вы заранее
                понимаете бюджет.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Подбор под задачу</h3>
              <p className="card-tagline">
                Учитываем тип работ, район и сроки — подбираем рабочих под ваш
                конкретный объект.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Ответственность за результат</h3>
              <p className="card-tagline">
                Мы заинтересованы, чтобы работы были выполнены в срок и без лишних
                вопросов с вашей стороны.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Для кого мы работаем</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Частные клиенты</h3>
              <p className="card-tagline">
                Владельцы квартир, домов, дач и апартаментов под аренду.
              </p>
              <ul className="card-list">
                <li>Переезды и перенос мебели.</li>
                <li>Помощь при ремонте и на участке.</li>
                <li>Вынос и вывоз строительного мусора.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Бизнес и стройка</h3>
              <p className="card-tagline">
                Строительные компании, отели, склады, управляющие компании.
              </p>
              <ul className="card-list">
                <li>Подсобные рабочие на объект «под пик».</li>
                <li>Разгрузка фур и работа на складах.</li>
                <li>Временное усиление бригад.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Наши принципы</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Не бросаем клиентов</h3>
              <p className="card-tagline">
                Если взялись за задачу — доводим её до конца и не исчезаем в
                процессе.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Честно говорим о сроках</h3>
              <p className="card-tagline">
                Сразу обозначаем реальные сроки и возможности, без «волшебных»
                обещаний.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Держим слово по цене</h3>
              <p className="card-tagline">
                Фиксированная стоимость смены — без неожиданных доплат после
                выполнения работ.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Нужны рабочие на объект?</h2>
          <p className="section-subtitle">
            Оставьте заявку — подберём рабочих под вашу задачу в Сочи и согласуем
            удобное время.
          </p>

          <ContactForm />
        </section>
      </div>
    </>
  );
}
