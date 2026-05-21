import { useEffect, useState, useRef } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
          <a href="/#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/produtos" onClick={() => setMenuOpen(false)}>
            Produtos
          </a>
        </nav>

        <a
          href="https://wa.me/5512988576544?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento!"
          className="btn-orcamento btn btn-primary nav-btn "
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
