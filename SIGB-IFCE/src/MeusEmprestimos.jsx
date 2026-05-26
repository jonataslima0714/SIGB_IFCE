import { useState, useEffect } from "react";
import "./MeusEmprestimos.css";
import capaCapitaes from "../src/assets/Images/Capitaes da Areia.webp";
import capaDracula from "../src/assets/Images/Dracula.webp";
import capaHobbit from "../src/assets/Images/O Hobbit.jpg";
import capaArvores from "../src/assets/Images/Onde as arvores cantam.jpg";
import capaCrime from "../src/assets/Images/Crime e Castigo.jpg";

const meusEmprestimos = [
  {
    id: 1,
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    imagem: capaCapitaes,
    dataSolicitacao: "2026-05-10",
    dataEsperada: "2026-06-10",
    status: "ativo",
  },
  {
    id: 2,
    titulo: "Drácula",
    autor: "Bram Stoker",
    imagem: capaDracula,
    dataSolicitacao: "2026-05-15",
    dataEsperada: "2026-06-15",
    status: "ativo",
  },
  {
    id: 3,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    imagem: capaHobbit,
    dataSolicitacao: "2026-05-20",
    dataEsperada: "2026-06-20",
    status: "ativo",
  },
  {
    id: 4,
    titulo: "Onde as Árvores Cantam",
    autor: "Laura Gallego",
    imagem: capaArvores,
    dataSolicitacao: "2026-04-25",
    dataEsperada: "2026-05-25",
    status: "vencido",
  },
  {
    id: 5,
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    imagem: capaCrime,
    dataSolicitacao: "2026-05-05",
    dataEsperada: "2026-06-05",
    status: "ativo",
  },
];

export default function MeusEmprestimos() {
  const [cancelados, setCancelados] = useState(() => {
    const salvos = localStorage.getItem("emprestimos_cancelados");
    return salvos ? JSON.parse(salvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("emprestimos_cancelados", JSON.stringify(cancelados));
  }, [cancelados]);

  const emprestimosFiltrados = meusEmprestimos.filter(
    (emp) => !cancelados.includes(emp.id),
  );
  const emprestimoAtivos = emprestimosFiltrados.filter(
    (emp) => emp.status === "ativo",
  );
  const emprestimoVencidos = emprestimosFiltrados.filter(
    (emp) => emp.status === "vencido",
  );

  const handleCancelarEmprestimo = (id) => {
    if (window.confirm("Tem certeza que deseja cancelar este empréstimo?")) {
      setCancelados([...cancelados, id]);
    }
  };

  const handleDevolverLivro = (id) => {
    if (window.confirm("Confirmar devolução deste livro?")) {
      setCancelados([...cancelados, id]);
    }
  };

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const calcularDiasRestantes = (dataEsperada) => {
    const hoje = new Date();
    const data = new Date(dataEsperada);
    const diff = data - hoje;
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return dias;
  };

  return (
    <div className="meus-emprestimos-container">
      <div className="meus-emprestimos-header">
        <h2>Meus Empréstimos</h2>
        <p className="total-emprestimos">
          Total: {emprestimosFiltrados.length} livro(s)
        </p>
      </div>

      {emprestimoAtivos.length > 0 && (
        <div className="emprestimos-section">
          <h3 className="section-title">
            Empréstimos Ativos ({emprestimoAtivos.length})
          </h3>
          <div className="emprestimos-grid">
            {emprestimoAtivos.map((emprestimo) => {
              const diasRestantes = calcularDiasRestantes(
                emprestimo.dataEsperada,
              );
              return (
                <div key={emprestimo.id} className="emprestimo-card">
                  <div className="card-image">
                    <img
                      src={emprestimo.imagem}
                      alt={emprestimo.titulo}
                      className="livro-capa"
                    />
                    <span
                      className={`status-badge status-${emprestimo.status}`}
                    >
                      Ativo
                    </span>
                  </div>

                  <div className="card-content">
                    <h4 className="livro-titulo">{emprestimo.titulo}</h4>
                    <p className="livro-autor">{emprestimo.autor}</p>

                    <div className="emprestimo-info">
                      <div className="info-item">
                        <span className="info-label">Solicitado em:</span>
                        <span className="info-value">
                          {formatarData(emprestimo.dataSolicitacao)}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Devolução prevista:</span>
                        <span className="info-value">
                          {formatarData(emprestimo.dataEsperada)}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Dias restantes:</span>
                        <span
                          className={`info-value dias-restantes ${
                            diasRestantes <= 5 ? "aviso" : ""
                          }`}
                        >
                          {diasRestantes} dia(s)
                        </span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <button className="btn-renovar">
                        Renovar Empréstimo
                      </button>
                      <button
                        className="btn-cancelar"
                        onClick={() => handleCancelarEmprestimo(emprestimo.id)}
                      >
                        Cancelar Empréstimo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {emprestimoVencidos.length > 0 && (
        <div className="emprestimos-section">
          <h3 className="section-title vencido-title">
            Empréstimos Vencidos ({emprestimoVencidos.length})
          </h3>
          <div className="emprestimos-grid">
            {emprestimoVencidos.map((emprestimo) => {
              const diasVencidos = Math.abs(
                calcularDiasRestantes(emprestimo.dataEsperada),
              );
              return (
                <div key={emprestimo.id} className="emprestimo-card vencido">
                  <div className="card-image">
                    <img
                      src={emprestimo.imagem}
                      alt={emprestimo.titulo}
                      className="livro-capa"
                    />
                    <span className="status-badge status-vencido">Vencido</span>
                  </div>

                  <div className="card-content">
                    <h4 className="livro-titulo">{emprestimo.titulo}</h4>
                    <p className="livro-autor">{emprestimo.autor}</p>

                    <div className="emprestimo-info">
                      <div className="info-item">
                        <span className="info-label">Solicitado em:</span>
                        <span className="info-value">
                          {formatarData(emprestimo.dataSolicitacao)}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Devolução prevista:</span>
                        <span className="info-value">
                          {formatarData(emprestimo.dataEsperada)}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Dias vencidos:</span>
                        <span className="info-value dias-vencidos">
                          {diasVencidos} dia(s)
                        </span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <button
                        className="btn-devolver"
                        onClick={() => handleDevolverLivro(emprestimo.id)}
                      >
                        Devolver Livro
                      </button>
                      <button
                        className="btn-cancelar"
                        onClick={() => handleCancelarEmprestimo(emprestimo.id)}
                      >
                        Cancelar Empréstimo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {emprestimosFiltrados.length === 0 && (
        <div className="vazio-message">
          <i className="fas fa-book"></i>
          <p>Você não possui empréstimos no momento.</p>
        </div>
      )}
    </div>
  );
}
