function TabelaAcervo({ livros }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((l, i) => (
            <tr key={i}>
              <td>{l.titulo}</td>
              <td>{l.autor}</td>
              <td>{l.categoria}</td>
              <td>{l.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaAcervo;