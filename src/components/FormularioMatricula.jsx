import { useState } from "react";

// estado inicial em um só objeto
const vazio = { nome: "", email: "", curso: "" };

export default function FormularioMatricula({ onEnviar }) {
  const [dados, setDados] = useState(vazio);
  const [erros, setErros] = useState({});
  const [ok, setOk] = useState(false);

  // um único onChange atende todos os campos
  function handleChange(e) {
    const { name, value } = e.target;   // name = chave
    setDados((atual) => ({ ...atual, [name]: value }));
  }
  function validar() {
    const novos = {};
    if (dados.nome.trim().length < 3) novos.nome = "Nome curto";
    if (!dados.email.includes("@")) novos.email = "E-mail inválido"; 
    if (!dados.curso) novos.curso = "Escolha um curso";
    return novos;
}

  function handleSubmit(e) {
        e.preventDefault();
        const novos = validar();
        console.log("Erros de validação:", novos); // ← adicione temporariamente
        setErros(novos);
        if (Object.keys(novos).length > 0) return;
        onEnviar(dados);
        setDados(vazio);
        setOk(true);
    } 
  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          id="nome"
          name="nome"
          className={`form-control ${erros.nome ? "is-invalid" : ""}`}
          value={dados.nome}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{erros.nome}</div>
      </div>

      <div className="col-md-6">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
                id="email"
                name="email"
                type="email"
                className={`form-control ${erros.email ? "is-invalid" : ""}`}
                value={dados.email}
                onChange={handleChange}
                placeholder="seu@email.com"
            />
            <div className="invalid-feedback">{erros.email}</div>
        </div>
            <div className="col-md-6">
        <label htmlFor="curso" className="form-label">Curso</label>
        <select
          id="curso" name="curso" value={dados.curso} onChange={handleChange}
          className={`form-select ${erros.curso ? "is-invalid" : ""}`}
        >
          <option value="">Selecione…</option>
          <option value="ADS">ADS</option>
          <option value="MEI">MEI</option>
        </select>
        <div className="invalid-feedback">{erros.curso}</div>
      </div>

      <div className="col-12 d-flex gap-3">
        <button className="btn btn-secondary rounded-pill px-3">Enviar</button>
        {ok && <span className="text-success">Enviada!</span>}
      </div>
    </form>
  );
}