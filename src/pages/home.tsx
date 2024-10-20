/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Pricing from "../components/pricing";

const home = () => {
  const [activeNav, setActiveNav] = useState<
    "home" | "about" | "pricing" | "contact"
  >("home");

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Get the positions of each section
      // const headerSection = document.getElementById("home")?.offsetTop || 0;
      const aboutSection = document.getElementById("about")?.offsetTop || 0;
      const pricingSection = document.getElementById("pricing")?.offsetTop || 0;
      const contactSection = document.getElementById("contact")?.offsetTop || 0;

      // Determine which section is active based on scroll position
      if (scrollPosition >= contactSection - 100) {
        setActiveNav("contact");
      } else if (scrollPosition >= pricingSection - 100) {
        setActiveNav("pricing");
      } else if (scrollPosition >= aboutSection - 100) {
        setActiveNav("about");
      } else {
        setActiveNav("home");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navigation activeNav={activeNav} isAuthenticated={false} />

      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default home;
