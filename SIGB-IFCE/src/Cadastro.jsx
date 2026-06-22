import { useState } from "react";
import "./Cadastro.css";

export default function Cadastro({ onNavigate }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !email || !senha || !confirmacao) {
      alert("Preencha todos os campos para continuar.");
      return;
    }

    if (senha !== confirmacao) {
      alert("As senhas não coincidem. Verifique e tente novamente.");
      return;
    }

    setEnviado(true);
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmacao("");
  };

  return (
    <div className="cadastro-page-body">
      <header className="cadastro-header">
        <div
          className="cadastro-logo-area"
          onClick={() => onNavigate("login")}
          style={{ cursor: "pointer" }}
        >
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
          <span className="logo-text">Cadastro</span>
        </div>
      </header>

      <main className="cadastro-main">
        <div className="cadastro-container">
          <div className="cadastro-title-area">
            <h2>Crie sua conta</h2>
            <p>
              Para acessar o portal, cadastre-se abaixo. Para testes, use dados
              fictícios.
            </p>
          </div>

          {enviado && (
            <div className="cadastro-alert">
              Cadastro realizado com sucesso! Você pode voltar ao login.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Crie uma senha"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmacao">Confirme a senha</label>
              <input
                type="password"
                id="confirmacao"
                value={confirmacao}
                onChange={(e) => setConfirmacao(e.target.value)}
                placeholder="Digite a senha novamente"
                required
              />
            </div>

            <div className="login-actions">
              <button type="submit" className="btn-submit">
                Cadastrar
              </button>
              <button
                type="button"
                className="cadastro-login-link"
                onClick={() => onNavigate("login")}
              >
                Já possui conta? Fazer login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
