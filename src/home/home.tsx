import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Pricing from "../components/pricing";

const home = () => {
  return (
    <div>
      <Navigation />

      <Header />

      <About />

      <Pricing/>

      <Contact/>

      <Footer/>
    </div>
  );
};

export default home;
