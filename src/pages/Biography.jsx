import Header from "../components/Header";
import Footer from "../components/Footer";

const Biography = () => {
  return (
    <>
      <Header />
      <main className="container fs-4">
        <h1 className="display-2">Biography</h1>
        <p>
          Virat Kohli (born November 5, 1988, Delhi, India) is an Indian
          international cricketer considered by many as one of the greatest
          batsmen in the history of the game. Kohli plays for (and previously
          captained) the Royal Challengers Bangalore (RCB) in the Indian Premier
          League (IPL). He is also a former captain of the Indian cricket team
          in all three international formats—Test cricket, one-day
          internationals (ODIs), and Twenty20 internationals (T20I)—making him
          one of India’s most successful captains.
        </p>
        <p>
          {" "}
          Kohli has earned praise for his discipline and commitment from
          teammates, opponents, and cricket veterans alike. “He has changed the
          face of cricket and how you prepare for the game. The discipline that
          he has stands out, always,” cricketing great Brian Lara said of Kohli
          after Kohli was named Player of the Tournament for the 2023 Cricket
          World Cup.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Biography;
