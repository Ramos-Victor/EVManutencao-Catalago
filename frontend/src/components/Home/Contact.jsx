import Reveal from "../UI/Reveal";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag"> Contato </span>
            <h2> Fale com a gente! </h2>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <div className="info-card">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>(12) 98857-6544</p>
                </div>
              </div>
              <div className="info-card">
                <i className="fas fa-location-dot"></i>
                <div>
                  <h4>Localização</h4>
                  <p>São José dos Campos - SP</p>
                </div>
              </div>
              <div className="info-card">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Horário</h4>
                  <p>Segunda à Sexta</p>
                </div>
              </div>
              <div className="contact-highlight">
                <h3>CONFIANÇA QUE REFRESCA, QUALIDADE QUE VOCÊ INDICA!</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
