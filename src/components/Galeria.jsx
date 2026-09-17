//Primeira forma de construir
/*
function Galeria() {
  // array só para não repetir o JSX seis vezes
  const cores = [
    "bg-primary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-dark",
  ];

  return (
    <div className="container py-4">
      <div className="row g-3">
        {cores.map((cor, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div className={`${cor} rounded p-5 text-white text-center`}>
              Bloco {i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
//Segunda forma de construir
function Galeria() {
  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-primary rounded p-5 text-white text-center">Bloco 1</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-success rounded p-5 text-white text-center">Bloco 2</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-danger rounded p-5 text-white text-center">Bloco 3</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-warning rounded p-5 text-white text-center">Bloco 4</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-info rounded p-5 text-white text-center">Bloco 5</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-dark rounded p-5 text-white text-center">Bloco 6</div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;