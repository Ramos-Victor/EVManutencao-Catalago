function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            <span>EV</span> Manutenção
          </div>
          <p>Especialistas em climatização, elétrica e instalações em geral.</p>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <div className="socials">
            <a href="https://www.instagram.com/ev.manutencao/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/5512988576544?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 EV Manutenção — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
