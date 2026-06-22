import { useState } from "react";
import logoIFCE from "../src/assets/Images/IFCE logo.png";
import "./Navbar.css";

export default function Navbar({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          type="button"
        >
          ☰
        </button>
        <div
          className="navbar-logo-container"
          onClick={() => handleNavigate("dashboard")}
          style={{ cursor: "pointer" }}
        >
          <img src={logoIFCE} alt="Logo IFCE" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span>Portal Biblioteca</span>
            <small>Campus Acopiara</small>
          </div>
        </div>

        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <button
            className={`nav-link ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={() => handleNavigate("dashboard")}
          >
            Início
          </button>
          <button
            className={`nav-link ${currentPage === "consultar" ? "active" : ""}`}
            onClick={() => handleNavigate("consultar")}
          >
            Consultar Livros
          </button>
          <button
            className={`nav-link ${currentPage === "meus-emprestimos" ? "active" : ""}`}
            onClick={() => handleNavigate("meus-emprestimos")}
          >
            Meus Empréstimos
          </button>
          <button
            className={`nav-link ${currentPage === "atendimento" ? "active" : ""}`}
            onClick={() => handleNavigate("atendimento")}
          >
            Atendimento
          </button>
        </nav>
      </div>
    </header>
  );
}
