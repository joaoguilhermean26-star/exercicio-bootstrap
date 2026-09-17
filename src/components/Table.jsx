// src/components/TabelaAlunos.jsx

// dados de exemplo, só para visualizar a tabela funcionando
const alunosExemplo = [
  { id: 1, nome: "Maria Silva", nota: 8.5 },
  { id: 2, nome: "João Pereira", nota: 6.2 },
  { id: 3, nome: "Ana Costa", nota: 9.8 },
];

function TabelaAlunos({ alunos = alunosExemplo }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>Aluno</th>
            <th className="text-end">Email</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((a) => (
            <tr key={a.id}>
              <td>{a.nome}</td>
              <td className="text-end">{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaAlunos;