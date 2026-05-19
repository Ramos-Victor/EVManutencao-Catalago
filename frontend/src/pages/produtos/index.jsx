import Loader from "../../components/UI/Loader";
import WhatsappFloat from "../../components/UI/WhatsappFloat";
import Header from "../../components/Produtos/Header";
import Footer from "../../components/Produtos/Footer";
import Banner from "../../components/Produtos/Banner";
import ProdutosList from "../../components/Produtos/ProdutosList";
import "../../styles/produtos.css";

export function Produtos() {
  return (
    <>
      <Loader />
      <WhatsappFloat />
      <Header />
      <main className="produtos-page">
        <Banner />
        <ProdutosList />
      </main>
      <Footer />
    </>
  );
}
