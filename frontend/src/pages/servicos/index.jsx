import { useEffect } from "react";
import Loader from "../../components/UI/Loader";
import Header from "../../components/Home/Header";
import WhatsappFloat from "../../components/UI/WhatsappFloat";

export function Servicos() {
  useEffect(() => {
    async function buscarServicos() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/servicos`,
        );

        const data = await response.json();

        console.log(data["data"]);
      } catch (err) {
        console.error(err);
      }
    }

    buscarServicos();
  }, []);

  return (
    <>
      <Loader />
      <WhatsappFloat />
      <Header />
    </>
  );
}
