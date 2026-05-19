import Loader from "../../components/UI/Loader";
import WhatsappFloat from "../../components/UI/WhatsappFloat";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import Services from "../../components/Home/Services";
import Differentials from "../../components/Home/Differentials";
import Testimonials from "../../components/Home/Testimonials";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";

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
