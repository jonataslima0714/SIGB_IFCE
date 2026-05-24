import { useState } from "react";
import "./ConsultarLivros.css";
import capaCapitaes from "../src/assets/Images/Capitaes da Areia.webp";
import capaDracula from "../src/assets/Images/Dracula.webp";
import capaHobbit from "../src/assets/Images/O Hobbit.jpg";
import capaArvores from "../src/assets/Images/Onde as arvores cantam.jpg";
import capaCrime from "../src/assets/Images/Crime e Castigo.jpg";
const bancoDeLivros = [
  {
    id: 1,
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    ano: 1937,
    isbn: "9788811668732",
    sinopse:
      "A vida dos meninos de rua em Salvador, lutando pela sobrevivência e liberdade em um trapiche baiano.",
    localizacao: "Estante 05, Prateleira B (Literatura Brasileira)",
    exemplares: 13,
    status: "DISPONÍVEL PARA EMPRÉSTIMO",
    imagem: capaCapitaes,
  },
  {
    id: 2,
    titulo: "Drácula",
    autor: "Bram Stoker",
    ano: 1897,
    isbn: "9788537004456",
    sinopse:
      "O clássico romance epistolar que deu origem ao mito moderno dos vampiros através da jornada do Conde da Transilvânia.",
    localizacao: "Estante 02, Prateleira A (Literatura Estrangeira)",
    exemplares: 4,
    status: "DISPONÍVEL PARA EMPRÉSTIMO",
    imagem: capaDracula,
  },
  {
    id: 3,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    isbn: "9788595084742",
    sinopse:
      "Bilbo Bolseiro é arrastado de sua vida pacata por Gandalf e um grupo de anões em uma missão para recuperar a Montanha Solitária do dragão Smaug.",
    localizacao: "Estante 03, Prateleira D (Fantasia)",
    exemplares: 6,
    status: "DISPONÍVEL PARA EMPRÉSTIMO",
    imagem: capaHobbit,
  },
  {
    id: 4,
    titulo: "Onde as Árvores Cantam",
    autor: "Laura Gallego",
    ano: 2011,
    isbn: "9788594530233",
    sinopse:
      "Viana, uma jovem nobre, vê seu world desmoronar após a invasão de bárbaros, encontrando refúgio e segredos na Grande Floresta Verde.",
    localizacao: "Estante 04, Prateleira C (Ficção Juvenil)",
    exemplares: 3,
    status: "DISPONÍVEL PARA EMPRÉSTIMO",
    imagem: capaArvores,
  },
  {
    id: 5,
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    ano: 1866,
    isbn: "9788573262650",
    sinopse:
      "O tormento psicológico e a busca por redenção do jovem estudante Raskólnikov após cometer um duplo homicídio em São Petersburgo.",
    localizacao: "Estante 01, Prateleira F (Clássicos da Literatura)",
    exemplares: 5,
    status: "DISPONÍVEL PARA EMPRÉSTIMO",
    imagem: capaCrime,
  },
];

export default function ConsultarLivros() {
  const [busca, setBusca] = useState("");
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [mostrarSinopse, setMostrarSinopse] = useState(false);

  const livrosFiltrados = bancoDeLivros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(busca.toLowerCase()),
  );

  const handleSolicitarEmprestimo = (titulo) => {
    alert(
      `Empréstimo do livro "${titulo}" solicitado! Retire no balcão da biblioteca do IFCE.`,
    );
  };

  const handleVerLivro = (livro) => {
    setLivroSelecionado(livro);
    setMostrarSinopse(false);
  };

  return (
    <div>
      {!livroSelecionado ? (
        <>
          <h2 className="consulta-titulo">Consultar Acervo Bibliotecário</h2>
          <input
            type="text"
            placeholder="Digite o título ou autor do livro..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="busca-input"
          />

          <div className="lista-livros">
            {livrosFiltrados.map((livro) => (
              <div
                key={livro.id}
                onClick={() => handleVerLivro(livro)}
                className="livro-item"
              >
                <img
                  src={livro.imagem}
                  alt={livro.titulo}
                  className="livro-item-capa"
                />
                <div className="livro-item-info">
                  <h3>{livro.titulo}</h3>
                  <p>Autor: {livro.autor}</p>
                  <small>
                    {livro.exemplares} Exemplar(es) no Campus | ISBN:{" "}
                    {livro.isbn}
                  </small>
                </div>
              </div>
            ))}
            {livrosFiltrados.length === 0 && (
              <p style={{ color: "#666" }}>
                Nenhum livro encontrado para essa busca.
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="detalhes-container">
          <button
            onClick={() => setLivroSelecionado(null)}
            className="btn-voltar"
          >
            ← Voltar para a busca
          </button>

          <div className="detalhes-content">
            <img
              src={livroSelecionado.imagem}
              alt={livroSelecionado.titulo}
              className="detalhes-capa"
            />

            <div style={{ flex: 1 }}>
              <span className="status-badge">• {livroSelecionado.status}</span>
              <h2 style={{ marginTop: "10px" }}>{livroSelecionado.titulo}</h2>
              <p>
                <strong>Autor:</strong> {livroSelecionado.autor} |{" "}
                <strong>Ano:</strong> {livroSelecionado.ano}
              </p>

              {mostrarSinopse && (
                <div className="detalhes-sinopse">
                  "{livroSelecionado.sinopse}"
                </div>
              )}

              <p style={{ marginBottom: "5px", marginTop: "15px" }}>
                <strong>Localização:</strong> {livroSelecionado.localizacao}
              </p>
              <p>
                <strong>ISBN:</strong> {livroSelecionado.isbn}
              </p>

              <div>
                <button
                  className="btn-sinopse"
                  onClick={() => setMostrarSinopse(!mostrarSinopse)}
                >
                  {mostrarSinopse ? "OCULTAR SINOPSE" : "LER SINOPSE"}
                </button>

                <button
                  className="btn-emprestimo"
                  onClick={() =>
                    handleSolicitarEmprestimo(livroSelecionado.titulo)
                  }
                >
                  SOLICITAR EMPRÉSTIMO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
