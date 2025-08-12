import Layout from "../components/Layout";

export default function AboutKK() {
  return (
    <Layout lang="kk">
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Біз туралы</h2>
        <p className="text-lg mb-4">
          ClickPort — бизнеске арналған ақылды чат-боттарды әзірлеу және
          біріктірумен айналысатын ЖИ коммуникациялар студиясы.
        </p>
        <p className="text-lg">
          Біз компанияларға сатуды автоматтандыруға, клиенттерге қызмет көрсетуді
          жақсартуға және заманауи технологиялар арқылы тиімділікті арттыруға көмектесеміз.
        </p>
      </section>
    </Layout>
  );
}
