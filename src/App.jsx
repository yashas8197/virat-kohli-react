import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-2">Overview</h1>
        <img
          src="https://www.mykhel.com/img/2023/05/virat-kohli-100-1684438599.jpg"
          className="img-fluid rounded"
        />
        <section className="py-3">
          <p className="fs-5">
            Virat Kohli (born 5 November 1988) is an Indian international
            cricketer and the former captain of the Indian national cricket
            team. He is a right-handed batsman and an occasional medium-fast
            bowler.
          </p>
          <p className="fs-5">
            {" "}
            He currently represents Royal Challengers Bengaluru in the IPL and
            Delhi in domestic cricket. Kohli is widely regarded as one of the
            greatest batsmen of all time. He holds the record as the highest
            run-scorer in T20I and IPL, ranks third in ODI, and stands as the
            fourth-highest in international cricket. He also holds the record
            for scoring the most centuries in ODI cricket and stands second in
            the list of most international centuries scored.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
