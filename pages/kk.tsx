import Layout from "../components/Layout";

export default function HomeKK() {
  return (
    <Layout lang="kk">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Бизнеске арналған ақылды чат-боттар
        </h1>
        <p className="text-lg md:text-xl mb-6">
          24/7 сататын, қызмет көрсететін және клиенттермен жұмыс істейтін жасанды интеллект негізіндегі Telegram-боттар әзірлейміз және біріктіреміз.
        </p>
        <a
          href="https://t.me/danil_tylevich"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Telegram-да хабарласыңыз
        </a>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Біз CRM-мен біріктірілген, жасанды интеллектті пайдаланатын және күнделікті операцияларды автоматтандыратын ақылды, жекелендірілген боттар жасаймыз.
        </p>
        <p className="text-lg">
          Жеке көзқарас, қысқа мерзімдер және икемді бағалар.
        </p>
      </section>

      {/* What Bots Do */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Боттарымыздың мүмкіндіктері:</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "📩", text: "Сату процестерін автоматтандыру" },
            { icon: "🎯", text: "Лидтер генерациялау және білікті ету" },
            { icon: "🤖", text: "Тәулік бойы қолдау көрсету" },
            { icon: "📊", text: "CRM және аналитикамен толық интеграция" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Қалай жұмыс істейміз</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Тапсырманы талдау" },
            { step: "2", title: "Әзірлеу" },
            { step: "3", title: "Іске қосу және үздіксіз қолдау" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100"
            >
              <div className="text-2xl font-bold text-indigo-600 mb-2">{item.step}</div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Placeholder */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Демо және мысалдар</h2>
        <p className="mb-6">
          Боттар жұмысының бейне мысалдары жақын арада болады. Жаңалықтарды жіберіп алмау үшін жазылыңыз.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-6 shadow text-gray-400">
              Видео {n} — жақында
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Жобаңызды талқылайық</h2>
        <a
          href="https://t.me/danil_tylevich"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
        >
          Telegram-да жазыңыз
        </a>
      </section>
    </Layout>
  );
}
