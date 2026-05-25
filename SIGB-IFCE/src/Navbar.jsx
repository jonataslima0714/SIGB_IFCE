import logoIFCE from "../src/assets/Images/IFCE logo.png";
import "./Navbar.css";

export default function Navbar({ onNavigate, currentPage }) {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div
          className="navbar-logo-container"
          onClick={() => onNavigate("dashboard")}
          style={{ cursor: "pointer" }}
        >
          <img src={logoIFCE} alt="Logo IFCE" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span>Portal Biblioteca</span>
            <small>Campus Acopiara</small>
          </div>
        </div>

        <nav className="navbar-menu">
          <button
            className={`nav-link ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={() => onNavigate("dashboard")}
          >
            Início
          </button>
          <button
            className={`nav-link ${currentPage === "consultar" ? "active" : ""}`}
            onClick={() => onNavigate("consultar")}
          >
            Consultar Livros
          </button>
          <button
            className={`nav-link ${currentPage === "meus-emprestimos" ? "active" : ""}`}
            onClick={() => onNavigate("meus-emprestimos")}
          >
            Meus Empréstimos
          </button>
          <button
            className={`nav-link ${currentPage === "atendimento" ? "active" : ""}`}
            onClick={() => onNavigate("atendimento")}
          >
            Atendimento
          </button>
        </nav>
      </div>
    </header>
  );
}
