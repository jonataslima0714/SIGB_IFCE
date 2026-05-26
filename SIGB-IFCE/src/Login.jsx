import { useState } from "react";
import "./Login.css";

export default function Login({ onNavigate }) {
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
      </header>

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