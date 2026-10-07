import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormLivro from "./components/FormLivro";
import NavBar from "./components/NavBar";
import TabelaAcervo from "./components/TabelaAcervo";

export default function App() {
  const [livros, setLivros] = useState([]);
  const [pagina, setPagina] = useState("págin a"); // "matricula" | "alunos" | "livros" | "acervo"

  return (
    <div className="container py-5">
      <header>
        <NavBar paginaAtual={pagina} onMudarPagina={setPagina} />
      </header>
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