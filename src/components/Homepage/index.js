import "./Home.css";
import Header from "../Header";
import Footer from "../Footer";
import CallToAction from "../CallToAction";
import Specials from "../Specials";
import CustomersSay from "../CustomersSay";
import Chicago from "../Chicago";

function Home() {
  return (
    <>
      <Header />
      <h1>Little Lemon Restaurant</h1>
      <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
      <Footer />
    </>
  );
}

export default Home;
