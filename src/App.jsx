import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormMatricula from "./components/FormMatricula";
import FormLivro from "./components/FormLivro";
import NavBar from "./components/NavBar";
import TabelaAlunos from "./components/Table";
import TabelaAcervo from "./components/TabelaAcervo";

export default function App() {
  const [matriculas, setMatriculas] = useState([]);
  const [livros, setLivros] = useState([]);
  const [pagina, setPagina] = useState("página"); // "matricula" | "alunos" | "livros" | "acervo"

  return (
    <div className="container py-5">
      <header>
        <NavBar paginaAtual={pagina} onMudarPagina={setPagina} />
      </header>

      {pagina === "matricula" && (
        <>
          <h1 className="h3 mb-4">Matrículas ({matriculas.length})</h1>
          <FormMatricula
            onEnviar={(dados) => setMatriculas((a) => [...a, dados])}
          />
        </>
      )}

      {pagina === "alunos" && (
        <>
          <h1 className="h3 mb-4">Lista de Alunos</h1>
          <TabelaAlunos alunos={matriculas} />
        </>
      )}

      {pagina === "livros" && (
        <>
          <h1 className="h3 mb-4">Cadastro de Livros ({livros.length})</h1>
          <FormLivro
            onEnviar={(dados) => setLivros((a) => [...a, dados])}
          />
        </>
      )}

      {pagina === "acervo" && (
        <>
          <h1 className="h3 mb-4">Acervo</h1>
          <TabelaAcervo livros={livros} />
        </>
      )}
    </div>
  );
}