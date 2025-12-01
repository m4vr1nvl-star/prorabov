import Head from "next/head";

export default function BlogIndexPage() {
  return (
    <>
      <Head>
        <title>Блог — Разнорабочие Сочи</title>
        <meta
          name="description"
          content="Статьи о том, как выбрать разнорабочих в Сочи, сколько стоит рабочий на день и какие задачи удобнее поручить подсобникам."
        />
        <meta property="og:title" content="Блог — Разнорабочие Сочи" />
        <meta property="og:description" content="Статьи о том, как выбрать разнорабочих в Сочи." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prorabov.ru/blog" />
      </Head>
      <div className="container">
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-title">Блог</h1>
          <p className="section-subtitle">
            Небольшие материалы о том, как эффективно использовать труд
            разнорабочих и планировать работы в Сочи.
          </p>
        </section>

        <section className="section">
          <div className="grid">
            <div className="card">
              <h2 className="card-title">
                Как выбрать разнорабочих в Сочи и не пожалеть
              </h2>
              <p className="card-tagline">
                На что смотреть при выборе рабочих на день: опыт, пунктуальность,
                цена и формат работы.
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">
                Сколько стоит рабочий на день в Сочи: от чего зависит цена
              </h2>
              <p className="card-tagline">
                Какие факторы влияют на стоимость смены: тип работ, район, сроки и
                дополнительные условия.
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">
                5 задач, которые лучше поручить разнорабочему, а не делать самому
              </h2>
              <p className="card-tagline">
                Где имеет смысл вызвать помощников, чтобы сэкономить время и силы:
                погрузка, вынос мусора, подсобные работы и не только.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
