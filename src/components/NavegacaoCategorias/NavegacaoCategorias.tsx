import "./NavegacaoCategorias.scss";

function NavegacaoCategorias() {

  const categorias = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS"
  ];

  return (

    <nav className="navegacaoCategorias">
      <ul>
        {categorias.map((item, index) => (
          <li
            key={index}
            className={`item-categoria ${index === 0 ? "ativo" : ""}`}
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavegacaoCategorias;