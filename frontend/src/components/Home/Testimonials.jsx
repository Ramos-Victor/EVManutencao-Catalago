import Reveal from "../UI/Reveal";

const testimonials = [
  {
    name: "Mariana Costa",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Atendimento excelente.",
  },

  {
    name: "Carlos Henrique",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Equipe rápida e organizada.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Depoimentos</span>

            <h2>O que nossos clientes dizem</h2>
          </div>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal key={index}>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <div className="stars">★★★★★</div>

                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
