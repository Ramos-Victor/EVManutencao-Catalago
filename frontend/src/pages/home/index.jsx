import Loader from "../../components/Loader";
import WhatsappFloat from "../../components/WhatsappFloat";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Differentials from "../../components/Differentials";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export function Home() {
  return (
    <>
      <Loader />

      <WhatsappFloat />

      <Header />

      <Hero />

      <About />

      <Services />

      <Differentials />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}
