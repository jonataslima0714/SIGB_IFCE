import { useState } from "react";
import "./Login.css";

export default function Login({ onNavigate }) {
  const [menuActive, setMenuActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate("dashboard");
  };

  return (
    <div className="login-page-body">
      <header className="login-header">
        <div className="logo-area" onClick={() => onNavigate("dashboard")} style={{ cursor: "pointer" }}>
          <div className="if-logo">
            <span className="red"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="logo-text">Login</span>
        </div>
        
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>

        <div className="header-right">
          <button className="menu-btn" onClick={() => setMenuActive(true)} title="Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <nav className={`sidebar ${menuActive ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuActive(false)}>
          <i className="fas fa-times"></i>
        </button>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setMenuActive(false); onNavigate("dashboard"); }}>Dashboard</a></li>
          <li><a href="#" className="active" onClick={(e) => e.preventDefault()}>Login</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setMenuActive(false); onNavigate("meus-emprestimos"); }}><strong>Meus Empréstimos</strong></a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setMenuActive(false); onNavigate("consultar"); }}>Consultar Livros</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setMenuActive(false); onNavigate("atendimento"); }}>Atendimento</a></li>
        </ul>
      </nav>

      <main className="login-main">
        <div className="login-container">
          <div className="login-title-area">
            <i className="fas fa-user-circle avatar-icon"></i>
            <h2>Área de Login</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="usuario">Usuário:</label>
              <input 
                type="text" 
                id="usuario" 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required 
                autoComplete="username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="senha">Senha:</label>
              <div className="input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="senha" 
                  className="password-field" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required 
                  autoComplete="current-password"
                />
                <button 
                  type="button" 
                  className="toggle-password" 
                  onClick={() => setShowPassword(!showPassword)}
                  title="Mostrar/Esconder senha"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>
            
            <div className="login-actions">
              <a href="#" className="forgot-password" onClick={(e) => e.preventDefault()}>Esqueceu a senha?</a>
              <button type="submit" className="btn-submit">Entrar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}