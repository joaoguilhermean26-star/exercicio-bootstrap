import { useState } from "react";

export default function FormMatricula({ onEnviar }) {
  // um useState separado para cada campo, em vez de um objeto único
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  // states de controle da UI (erros de validação e feedback de envio)
  const [erros, setErros] = useState({});
  const [ok, setOk] = useState(false);

  // valida os três campos e retorna um objeto só com as mensagens de erro
  function validar() {
    const novos = {};
    if (nome.trim().length < 3) novos.nome = "Nome curto";
    if (!email.includes("@")) novos.email = "E-mail inválido";
    if (!curso) novos.curso = "Escolha um curso";
    return novos;
  }

  function handleSubmit(e) {
    e.preventDefault(); // não recarrega a página

    const novos = validar();
    setErros(novos);

    // se existe pelo menos uma chave de erro, interrompe o envio
    if (Object.keys(novos).length > 0) return;

    // monta o objeto de dados só na hora de entregar ao componente pai
    onEnviar({ nome, email, curso });

    // limpa cada campo individualmente
    setNome("");
    setEmail("");
    setCurso("");
    setOk(true);
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>

      {/* campo Nome */}
      <div className="col-md-6">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          id="nome"
          name="nome"
          className={`form-control ${erros.nome ? "is-invalid" : ""}`}
          value={nome}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setNome(e.target.value)}
        />
        <div className="invalid-feedback">{erros.nome}</div>
      </div>

      {/* campo E-mail */}
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${erros.email ? "is-invalid" : ""}`}
          value={email}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
        />
        <div className="invalid-feedback">{erros.email}</div>
      </div>

      {/* campo Curso */}
      <div className="col-md-6">
        <label htmlFor="curso" className="form-label">Curso</label>
        <select
          id="curso"
          name="curso"
          value={curso}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setCurso(e.target.value)}
          className={`form-select ${erros.curso ? "is-invalid" : ""}`}
        >
          <option value="">Selecione…</option>
          <option value="ADS">ADS</option>
          <option value="MEI">MEI</option>
        </select>
        <div className="invalid-feedback">{erros.curso}</div>
      </div>

      {/* botão de envio + feedback de sucesso */}
      <div className="col-12 d-flex gap-3">
        <button className="btn btn-secondary rounded-pill px-3">Enviar</button>
        {ok && <span className="text-success">Enviada!</span>}
      </div>
    </form>
  );
}