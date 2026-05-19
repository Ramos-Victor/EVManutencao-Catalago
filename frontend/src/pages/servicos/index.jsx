import Loader from "../../components/UI/Loader";
import WhatsappFloat from "../../components/UI/WhatsappFloat";
import Header from "../../components/Servicos/Header";
import Footer from "../../components/Servicos/Footer";
import Banner from "../../components/Servicos/Banner";
import ServicosList from "../../components/Servicos/ServicosList";
import "../../styles/servicos.css";

export function Servicos() {
  return (
    <>
      <Loader />
      <WhatsappFloat />
      <Header />
      <main className="servicos-page">
        <Banner />
        <ServicosList />
      </main>
      <Footer />
    </>
  );
}
