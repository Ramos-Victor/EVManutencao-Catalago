import Reveal from "./Reveal";

const differentials = [
  {
    icon: "fas fa-stopwatch",
    title: "Atendimento Rápido",
  },

  {
    icon: "fas fa-file-signature",
    title: "Orçamento sem Compromisso",
  },

  {
    icon: "fas fa-user-gear",
    title: "Equipe Especializada",
  },

  {
    icon: "fas fa-award",
    title: "Serviço com Garantia",
  },

  {
    icon: "fas fa-building",
    title: "Residencial e Comercial",
  },
];

function Differentials() {
  return (
    <section className="differentials section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Diferenciais</span>

            <h2>Por que escolher a EV Manutenção?</h2>
          </div>
        </Reveal>

        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <Reveal key={index}>
              <div className="diff-card">
                <i className={item.icon}></i>

                <h3>{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
