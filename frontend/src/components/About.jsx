import equipe from "../assets/imagens/equipetrabalhando.jpeg";
import Reveal from "./Reveal";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Quem Somos</span>

            <h2>Qualidade, confiança e excelência em cada serviço.</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>
                A <strong>EV Manutenção</strong> é especializada em serviços de
                ar condicionado, elétrica e instalações em geral. Trabalhamos
                com compromisso, organização e atendimento rápido para garantir
                conforto e segurança aos nossos clientes.
              </p>

              <p>
                Nossa missão é entregar soluções modernas e eficientes,
                utilizando materiais de qualidade e mão de obra especializada
                para residências, comércios e empresas.
              </p>

              <div className="about-benefits">
                <div className="benefit-card">
                  <i className="fas fa-clock"></i>

                  <h4>Atendimento Rápido</h4>
                </div>

                <div className="benefit-card">
                  <i className="fas fa-user-check"></i>

                  <h4>Equipe Qualificada</h4>
                </div>

                <div className="benefit-card">
                  <i className="fas fa-shield-alt"></i>

                  <h4>Garantia de Serviço</h4>
                </div>

                <div className="benefit-card">
                  <i className="fas fa-headset"></i>

                  <h4>Suporte Especializado</h4>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="about-image">
              <img src={equipe} alt="Equipe técnica trabalhando" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
