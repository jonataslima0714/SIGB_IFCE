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

export default function ConsultarLivros({ selectedLivroId, onNavigate }) {
  const [busca, setBusca] = useState("");
  const [livroSelecionadoInterno, setLivroSelecionadoInterno] = useState(null);
  const [activeTab, setActiveTab] = useState("sinopse");

  const selectedLivro = bancoDeLivros.find(
    (livro) => livro.id === selectedLivroId,
  );
  const livroSelecionado = selectedLivro || livroSelecionadoInterno;

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
    setLivroSelecionadoInterno(livro);
    setActiveTab("sinopse");
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
            onClick={() => {
              setLivroSelecionadoInterno(null);
              onNavigate("consultar");
            }}
            className="btn-voltar"
          >
            ← Voltar para a busca
          </button>

          <div className="detalhes-layout">
            <aside className="detalhes-left">
              <div className="capa-large">
                <img
                  src={livroSelecionado.imagem}
                  alt={livroSelecionado.titulo}
                />
              </div>

              <div className="detalhes-actions">
                <button className="btn-action">♡ Favoritar</button>
                <button className="btn-action">🔗 Compartilhar</button>
              </div>
            </aside>

            <section className="detalhes-right">
              <div className="detalhes-head">
                <h1 className="detalhes-titulo">{livroSelecionado.titulo}</h1>
                <p className="detalhes-autor">por {livroSelecionado.autor}</p>

                <div className="detalhes-tags">
                  <span className="tag">Fantasia</span>
                  <span className="tag">Aventura</span>
                  <span className="tag">Clássico</span>
                  <span className="tag">Literatura Britânica</span>
                </div>
              </div>

              <div className="availability-card">
                <div className="availability-info">
                  <div className="availability-status">
                    ✓ Disponível para Empréstimo
                  </div>
                  <div className="availability-meta">
                    {livroSelecionado.exemplares} exemplares físicos disponíveis
                    no momento.
                    <br />
                    Localização: <strong>{livroSelecionado.localizacao}</strong>
                  </div>
                </div>

                <div className="availability-action">
                  <button
                    className="btn-reserva"
                    onClick={() =>
                      handleSolicitarEmprestimo(livroSelecionado.titulo)
                    }
                  >
                    Solicitar Reserva
                  </button>
                </div>
              </div>

              <div className="detalhes-tabs">
                <nav className="tabs-nav">
                  <button
                    className={activeTab === "sinopse" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("sinopse")}
                  >
                    Sinopse
                  </button>
                  <button
                    className={activeTab === "ficha" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("ficha")}
                  >
                    Ficha Catalográfica
                  </button>
                </nav>

                <div className="tab-content">
                  {activeTab === "sinopse" && (
                    <div>
                      <p className="sinopse-paragraph">
                        {livroSelecionado.sinopse}
                      </p>
                      <p className="sinopse-paragraph">
                        Criado em {livroSelecionado.ano}, '
                        {livroSelecionado.titulo}' é referência na sua categoria
                        e contribui para a formação de leitores com repertório
                        crítico.
                      </p>
                    </div>
                  )}

                  {activeTab === "ficha" && (
                    <div className="ficha">
                      <p>
                        <strong>Autor:</strong> {livroSelecionado.autor}
                      </p>
                      <p>
                        <strong>Ano:</strong> {livroSelecionado.ano}
                      </p>
                      <p>
                        <strong>ISBN:</strong> {livroSelecionado.isbn}
                      </p>
                      <p>
                        <strong>Localização:</strong>{" "}
                        {livroSelecionado.localizacao}
                      </p>
                      <p>
                        <strong>Exemplares:</strong>{" "}
                        {livroSelecionado.exemplares}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
