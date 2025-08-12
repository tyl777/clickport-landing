import Layout from "../components/Layout";

export default function AboutRU() {
  return (
    <Layout lang="ru">
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">О нас</h2>
        <p className="text-lg mb-4">
          ClickPort — мастерская ИИ коммуникаций, специализирующаяся на разработке
          и интеграции умных чат-ботов для бизнеса.
        </p>
        <p className="text-lg">
          Мы помогаем компаниям автоматизировать продажи, улучшать клиентский сервис
          и повышать эффективность работы с помощью современных технологий.
        </p>
      </section>
    </Layout>
  );
}
