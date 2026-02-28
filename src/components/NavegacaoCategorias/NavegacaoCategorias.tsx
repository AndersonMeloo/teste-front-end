import "./NavegacaoCategorias.scss";

function NavegacaoCategorias() {

  const categorias = [
    { label: "CELULAR", href: "/?categoria=celular" },
    { label: "ACESSÓRIOS", href: "/?categoria=acessorios" },
    { label: "TABLETS", href: "/?categoria=tablets" },
    { label: "NOTEBOOKS", href: "/?categoria=notebooks" },
    { label: "TVS", href: "/?categoria=tvs" },
    { label: "VER TODOS", href: "/?categoria=todos" }
  ];

  return (

    <nav className="navegacaoCategorias">
      <ul>
        {categorias.map((item, index) => (
          <li
            key={item.label}
            className={`item-categoria ${index === 0 ? "ativo" : ""}`}
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavegacaoCategorias;