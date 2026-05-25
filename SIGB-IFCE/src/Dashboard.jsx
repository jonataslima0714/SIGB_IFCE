import "./Dashboard.css";
import capaCapitaes from "../src/assets/Images/Capitaes da Areia.webp";
import capaDracula from "../src/assets/Images/Dracula.webp";
import capaHobbit from "../src/assets/Images/O Hobbit.jpg";
import capaArvores from "../src/assets/Images/Onde as arvores cantam.jpg";
import capaCrime from "../src/assets/Images/Crime e Castigo.jpg";

const ultimosLivros = [
  {
    id: 1,
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    imagem: capaCapitaes,
  },
  { id: 2, titulo: "Drácula", autor: "Bram Stoker", imagem: capaDracula },
  { id: 3, titulo: "O Hobbit", autor: "J.R.R. Tolkien", imagem: capaHobbit },
  {
    id: 4,
    titulo: "Onde as Árvores Cantam",
    autor: "Laura Gallego",
    imagem: capaArvores,
  },
  {
    id: 5,
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    imagem: capaCrime,
  },
];

export default function Dashboard({ onVerLivro }) {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Últimos livros adicionados:</h2>

      <div className="livros-grid">
        {ultimosLivros.map((livro) => (
          <div key={livro.id} className="livro-card">
            <div className="livro-card-info">
              <img
                src={livro.imagem}
                alt={livro.titulo}
                className="livro-capa"
              />
              <h4 className="livro-titulo">{livro.titulo}</h4>
              <p className="livro-autor">{livro.autor}</p>
            </div>

            <button
              onClick={() => onVerLivro(livro.id)}
              className="btn-detalhes"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
