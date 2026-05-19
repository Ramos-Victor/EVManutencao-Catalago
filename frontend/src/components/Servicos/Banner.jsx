import bannerImg from "../../assets/imagens/banner.png";

function Banner() {
  return (
    <section className="servicos-banner">
      <div className="container servicos-banner-content">
        <div className="servicos-banner-copy">
          <span className="servicos-tag">Serviços</span>
          <h1>
            Atendimento especializado para{" "}
            <span style={{ color: "#00a8ff" }}>Ar</span>-Condicionados
          </h1>
          <p>
            Conheça nossos serviços pensados para instalação, manutenção e
            revisão do seu Ar-Condicionado. Tudo com qualidade, segurança e
            agilidade.
          </p>
        </div>

        <div className="servicos-banner-image">
          <div className="servicos-banner-card"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
