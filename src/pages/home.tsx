import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Technology from "../components/pageComponents/technology";
import Service from "../components/service"
import Team from "../components/team";

const home = () => {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
     <div className="mt-auto flex justify-center">
     <Technology />
     </div>
      <Service />
      </section>
{/* 
      <section className="bg-white">
        <Services />
      </section>

  

      <section className="py-12">
        <CaseStudies />
      </section> */}

      <section className="py-12 bg-white ">
        <Team />
      </section>

      <section className="">
        <Contact />
      </section>

      <section className="bg-black">
        <Footer />
      </section>
    </div>
  );
};

export default home;
