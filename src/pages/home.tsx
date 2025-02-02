import CaseStudies from "../components/case";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Technology from "../components/pageComponents/technology";
import Process from "../components/process";
import Services from "../components/services";
import Team from "../components/team";

const home = () => {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
        <Process />
      </section>

      <section className="bg-white">
        <Services />
      </section>

      <div>
        <Technology />
      </div>

      <section className="py-12">
        <CaseStudies />
      </section>

      <section className="py-12 ">
        <Team />
      </section>

      <section className="bg-white">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default home;
