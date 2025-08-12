import Layout from "../components/Layout";

export default function AboutEN() {
  return (
    <Layout lang="en">
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-4">
          ClickPort is an AI communications studio specializing in creating and
          integrating intelligent Telegram bots for businesses.
        </p>
        <p className="text-lg">
          We help companies automate sales, improve customer service, and boost efficiency
          through modern technology.
        </p>
      </section>
    </Layout>
  );
}
