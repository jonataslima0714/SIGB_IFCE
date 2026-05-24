import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import ConsultarLivros from "./ConsultarLivros";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedBookForConsult, setSelectedBookForConsult] = useState(null);

  const handleVerLivroNoDashboard = (livro) => {
    setSelectedBookForConsult(livro);
    setCurrentPage("consultar");
  };

  const handleClearSelectedBook = () => {
    setSelectedBookForConsult(null);
  };

  return (
    <div
      className="app-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar
        onNavigate={(page) => {
          setCurrentPage(page);
          if (page !== "consultar") handleClearSelectedBook();
        }}
        currentPage={currentPage}
      />

      <main style={{ flex: 1 }}>
        {currentPage === "dashboard" && (
          <Dashboard onVerLivro={handleVerLivroNoDashboard} />
        )}

        {currentPage === "consultar" && (
          <ConsultarLivros
            bookFromDashboard={selectedBookForConsult}
            onClearBookFromDashboard={handleClearSelectedBook}
          />
        )}

        {currentPage === "meus-emprestimos" && (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>
              Histórico de Empréstimos e Devoluções
            </h3>
            <p style={{ color: "#555" }}>
              Página em desenvolvimento. Aqui o aluno poderá consultar prazos e
              realizar renovações.
            </p>
          </div>
        )}

        {currentPage === "atendimento" && (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>
              Atendimento Online
            </h3>
            <p style={{ color: "#555" }}>
              Página em desenvolvimento. Canal direto para falar com os
              bibliotecários do IFCE.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
