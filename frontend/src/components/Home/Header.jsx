import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav-container">
        <div className="logo">
          <span>EV</span> Manutenção
        </div>
        <nav className={`navbar ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Início
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Quem Somos
          </a>
          <a href="#Atendimentos  " onClick={() => setMenuOpen(false)}>
            Atendimentos
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
          <div
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropdown-btn" onClick={handleClick}>
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
          className="btn btn-primary nav-btn btnorcamento"
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
