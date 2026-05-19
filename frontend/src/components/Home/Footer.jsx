import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Footer() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <h4>Links Rápidos</h4>

          <ul>
            <li>
              <a href="/#home">Início</a>
            </li>
            <li>
              <a href="/#about">Quem Somos</a>
            </li>
            <li>
              <a href="/#services">Serviços</a>
            </li>
            <li>
              <a href="/#contact">Contato</a>
            </li>
          </ul>
          <div
            className="dropdown"
            style={{ color: "#cbd5e1" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="dropdown-btn" style={{ color: "#cbd5e1" }}>
              Catálogo
              <ChevronDown
                size={18}
                className={`dropdown-icon ${dropdownOpen ? "rotate" : ""}`}
              />
            </button>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <a href="/servicos">Serviços</a>

              <a href="/produtos">Produtos</a>
            </div>
          </div>
        </div>

        <div>
          <h4>Redes Sociais</h4>

          <div className="socials">
            <a href="https://www.instagram.com/ev.manutencao/">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://wa.me/5512988576544">
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
