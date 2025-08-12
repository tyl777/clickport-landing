import Layout from "../components/Layout";

export default function HomeEN() {
  return (
    <Layout lang="en">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Intelligent Chatbots for Business
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We design and integrate AI-powered Telegram bots that sell, support, and engage customers 24/7.
        </p>
        <a
          href="https://t.me/danil_tylevich"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Let's Connect on Telegram
        </a>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          We build smart, custom bots that integrate with your CRM, leverage AI, and automate your daily operations.
        </p>
        <p className="text-lg">
          Personalized service, fast delivery, and flexible pricing.
        </p>
      </section>

      {/* What Bots Do */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Bots Can Do for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "📩", text: "Automate sales processes" },
            { icon: "🎯", text: "Generate and qualify leads" },
            { icon: "🤖", text: "Provide round-the-clock support" },
            { icon: "📊", text: "Integrate seamlessly with CRM and analytics" }
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
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Task analysis" },
            { step: "2", title: "Development" },
            { step: "3", title: "Launch & ongoing support" }
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
        <h2 className="text-3xl font-bold mb-8">Examples & Demos</h2>
        <p className="mb-6">
          Video examples of our bots in action are coming soon. Subscribe to stay updated.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-6 shadow text-gray-400">
              Video {n} — coming soon
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
        <a
          href="https://t.me/danil_tylevich"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
        >
          Write us on Telegram
        </a>
      </section>
    </Layout>
  );
}
