import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Footer() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile()) setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile()) setDropdownOpen(false);
  };
  const handleClick = () => {
    if (isMobile()) setDropdownOpen((prev) => !prev);
  };

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
              <a href="/#Atendimentos">Atendimentos</a>
            </li>
            <li>
              <a href="/#contact">Contato</a>
            </li>
          </ul>
          <div
            className="dropdown"
            ref={dropdownRef}
            style={{ color: "#cbd5e1" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="dropdown-btn"
              style={{ color: "#cbd5e1" }}
              onClick={handleClick}
            >
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
