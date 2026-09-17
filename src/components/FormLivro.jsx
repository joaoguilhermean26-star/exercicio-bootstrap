import { useState } from "react";


export default function FormLivro({ onEnviar}) {

const [titulo, setTitulo] = useState("");
const [autor, setAutor] = useState("");
const [categoria, setCategoria] = useState("");
const [ano, setAno] = useState("");

const [erros, setErros] = useState({});
const [ok, setOk] = useState(false);


function validar(){
    if (titulo.trim().length < 3) novos.titulo = "Titulo Curto";
    if (autor.trim().length < 3) novos.autor = "Nome Autor Curto";
    if(categoria.trim().length < 3) novos.categoria = "Escolha uma Categoria";

    const novos = {};
    const anoAtual = new Date().getFullYear();
    const anoNum = Number (ano);

    if (!ano || anoNum <= 1900 || anoNum > anoAtual) {
        novos.ano = "Ano Inválido";
    }
        return novos;
    }
    function handleSubmit (e){
        e.preventDefault(); 

        const novos = validar();
        setErros(novos);

        if (Object.keys(novos).length > 0) return;

        onEnviar({ titulo, autor, categoria, ano });


        setTitulo("");
        setAutor("");
        setCategoria("");
        setAno("");
        setOk(true);
    
    }

    return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>

    {/* campo Titulo */}
      <div className="col-md-6">
        <label htmlFor="titulo" className="form-label">Titulo</label>
        <input
          id="titulo"
          name="titulo"
          className={`form-control ${erros.titulo ? "is-invalid" : ""}`}
          value={titulo}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setTitulo(e.target.value)}
        />
        <div className="invalid-feedback">{erros.titulo}</div>
      </div>

      {/* campo Autor */}
      <div className="col-md-6">
        <label htmlFor="autor" className="form-label">Autor</label>
        <input
          id="autor"
          name="autor"
          className={`form-control ${erros.autor ? "is-invalid" : ""}`}
          value={autor}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setAutor(e.target.value)}
        />
        <div className="invalid-feedback">{erros.autor}</div>
      </div>

      {/* campo Categoria */}
      <div className="col-md-6">
        <label htmlFor="categoria" className="form-label">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setCategoria(e.target.value)}
          className={`form-select ${erros.categoria ? "is-invalid" : ""}`}
        >
          <option value="">Selecione…</option>
          <option value="romance">Romance</option>
          <option value="tecnico">Técnico</option>
          <option value="infantil">Infantil</option>
          <option value="biografia">Biografia</option>
        </select>
        <div className="invalid-feedback">{erros.categoria}</div>
      </div>

        {/* campo Ano */}
      <div className="col-md-6">
        <label htmlFor="autor" className="form-label">Ano</label>
        <input
          id="ano"
          name="ano"
          type="number"
          className={`form-control ${erros.ano ? "is-invalid" : ""}`}
          value={ano}
          // onChange inline: atualiza direto o state desse campo
          onChange={(e) => setAno(e.target.value)}
        />
        <div className="invalid-feedback">{erros.ano}</div>

        {/* botão de envio + feedback de sucesso */}
      <div className="col-12 d-flex gap-3">
        <button className="btn btn-secondary rounded-pill px-3">Enviar</button>
        {ok && <span className="text-success">Enviada!</span>}

      </div>

      </div>

    </form>

    );
      

}