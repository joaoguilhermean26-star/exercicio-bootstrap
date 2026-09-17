import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ paginaAtual, onMudarPagina }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              active={paginaAtual === "matricula"}
              onClick={() => onMudarPagina("matricula")}
            >
              Matrícula
            </Nav.Link>
            <Nav.Link
              active={paginaAtual === "alunos"}
              onClick={() => onMudarPagina("alunos")}
            >
              Alunos
            </Nav.Link>
            <Nav.Link
              active={paginaAtual === "livros"}
              onClick={() => onMudarPagina("livros")}
            >
              Cadastro
            </Nav.Link>
            <Nav.Link
              active={paginaAtual === "acervo"}
              onClick={() => onMudarPagina("acervo")}
            >
              Acervo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;