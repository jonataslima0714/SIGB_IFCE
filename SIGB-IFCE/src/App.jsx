import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import ConsultarLivros from "./ConsultarLivros";
import Atendimento from "./Atendimento";
import Login from "./Login";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [livroSelecionadoId, setLivroSelecionadoId] = useState(null);

  const handleNavigate = (page, options = {}) => {
    setCurrentPage(page);
    if (page !== "consultar" || !options.preserveSelected) {
      setLivroSelecionadoId(null);
    }
  };

  const handleVerLivro = (livroId) => {
    setLivroSelecionadoId(livroId);
    setCurrentPage("consultar");
  };

  if (currentPage === "login") {
    return <Login onNavigate={handleNavigate} />;
  }

  return (
    <div className="main-layout-container">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="main-content">
        {currentPage === "dashboard" && (
          <Dashboard onVerLivro={handleVerLivro} />
        )}
        {currentPage === "consultar" && (
          <ConsultarLivros
            selectedLivroId={livroSelecionadoId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === "atendimento" && <Atendimento />}

        {currentPage === "meus-emprestimos" && (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Meus Empréstimos</h2>
            <p>Página em desenvolvimento.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
