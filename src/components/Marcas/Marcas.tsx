import "./Marcas.scss";

function Marcas() {

  return (

    <section className="marcas">

      <h2 className="marcasTitulo">Navegue por marcas</h2>

      <div className="marcasContainer">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="marcaCard" aria-label={`Marca ${i + 1}`}>
            <img src="/Logo.png" alt="Logo" />
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Marcas;