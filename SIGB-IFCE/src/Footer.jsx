import "./Footer.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-info">
          © {anoAtual} Instituto Federal de Educação, Ciência e Tecnologia do
          Ceará
        </p>
        <p>Portal Biblioteca IFCE — Campus Acopiara</p>

        <div className="footer-links">
          <a href="https://ifce.edu.br" target="_blank" rel="noreferrer">
            Site Oficial
          </a>
          <a href="#atendimento">Suporte ao Aluno</a>
          <a href="#politicas">Termos de Uso</a>
        </div>

        <p className="footer-credits">
          Desenvolvido para o sistema de gestão de acervo bibliotecário escolar.
        </p>
      </div>
    </footer>
  );
}
