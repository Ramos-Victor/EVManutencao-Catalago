import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav-container">
        <div className="logo">
          <span>EV</span> Manutenção
        </div>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home">Início</a>

          <a href="#about">Quem Somos</a>

          <a href="#services">Serviços</a>

          <a href="#contact">Contato</a>

          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="dropdown-btn">
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
        </nav>

        <a
          href="https://wa.me/5512988576544?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento!"
          className="btn btn-primary nav-btn"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar Orçamento
        </a>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
