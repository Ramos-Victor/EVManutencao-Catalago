import backgroundHero from "../../assets/imagens/bakcgroundteste.png";
import Reveal from "../UI/Reveal";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        background: `
          url(${backgroundHero}) center/cover no-repeat
        `,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <Reveal>
          <span className="hero-badge">
            Especialistas em Climatização e Elétrica
          </span>
        </Reveal>

        <Reveal>
          <h1>
            AR-CONDICIONADO EM BOAS MÃOS,
            <span> CONFORTO GARANTIDO!</span>
          </h1>
        </Reveal>

        <Reveal>
          <p>
            Instalação, manutenção, higienização e serviços elétricos com
            qualidade, rapidez e garantia para residências e empresas.
          </p>
        </Reveal>

        <Reveal>
          <div className="hero-buttons">
            <a
              href="https://wa.me/5512988576544?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-whatsapp"></i>
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="hero-info">
            <div className="hero-card">
              <i className="fas fa-snowflake"></i>
              <span>Ar Condicionado</span>
            </div>

            <div className="hero-card">
              <i className="fas fa-bolt"></i>
              <span>Elétrica Geral</span>
            </div>

            <div className="hero-card">
              <i className="fas fa-tools"></i>
              <span>Instalações</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
