import Reveal from "./Reveal";

const services = [
  {
    icon: "fas fa-fan",
    title: "Instalação de Ar",
    description:
      "Instalação profissional de ar condicionado residencial e comercial.",
  },

  {
    icon: "fas fa-screwdriver-wrench",
    title: "Manutenção Preventiva",
    description: "Evite falhas e aumente a vida útil do equipamento.",
  },

  {
    icon: "fas fa-wind",
    title: "Higienização",
    description: "Eliminação de fungos, poeira, ácaros e bactérias.",
  },

  {
    icon: "fas fa-gauge-high",
    title: "Recarga de Gás",
    description: "Mais eficiência e melhor desempenho do equipamento.",
  },

  {
    icon: "fas fa-bolt",
    title: "Elétrica Residencial",
    description: "Instalações seguras e manutenção elétrica completa.",
  },

  {
    icon: "fas fa-lightbulb",
    title: "Instalações Elétricas",
    description: "Tomadas, iluminação, interruptores e quadros.",
  },

  {
    icon: "fas fa-plug-circle-bolt",
    title: "Troca de Disjuntores",
    description: "Segurança e proteção para sua instalação elétrica.",
  },

  {
    icon: "fas fa-toolbox",
    title: "Manutenção Geral",
    description: "Soluções práticas para residências e empresas.",
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Serviços</span>

            <h2>Serviços completos para você!</h2>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="service-card">
                <i className={service.icon}></i>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact">Saiba Mais</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
