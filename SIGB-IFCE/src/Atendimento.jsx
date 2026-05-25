import { useState } from "react";
import "./Atendimento.css";

export default function Atendimento() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !data || !email || !mensagem) {
      alert("Preencha todos os campos para enviar sua mensagem.");
      return;
    }

    setEnviado(true);
    setNome("");
    setData("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="atendimento-container">
      <div className="atendimento-card">
        <h2>Atendimento ao Aluno</h2>
        <p>
          Use o formulário abaixo para enviar sua dúvida ou sugestão ao IFCE. A
          resposta será encaminhada para o seu e-mail.
        </p>

        {enviado && (
          <div className="atendimento-alert">
            Sua mensagem foi enviada com sucesso! Aguarde a resposta no e-mail
            informado.
          </div>
        )}

        <form className="atendimento-form" onSubmit={handleSubmit}>
          <label>
            Nome completo
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
            />
          </label>

          <label>
            Data
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </label>

          <label>
            Mensagem
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Explique sua dúvida ou solicitação"
              rows={6}
            />
          </label>

          <button type="submit" className="btn-enviar">
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
