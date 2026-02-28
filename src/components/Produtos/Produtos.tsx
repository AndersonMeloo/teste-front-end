import { useRef } from "react";
import "./Produtos.scss";

type ProdutoProps = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProdutosProps = {
  produtos: ProdutoProps[];
};

function Produtos({ produtos }: ProdutosProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;

    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  if (produtos.length === 0) return null;

  return (

    <div className="carrosselWrapper">
      <button
        className="carrosselBtn left"
        onClick={() => scroll("left")}
      >
        &#10094;
      </button>

      <div className="produtosContainer" ref={containerRef}>
        {produtos.map((produto, index) => (
          <div key={`${produto.productName}-${index}`} className="produtoCard">
            <img
              src={produto.photo}
              alt={produto.productName}
              className="produtoImagem"
            />

            <h3 className="produtoNome">{produto.productName}</h3>

            <p className="precoOriginal">
              {(produto.price * 1.1 / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="precoDesconto">
              {(produto.price / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="parcelamento">
              ou 2x de {(produto.price / 200).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })} sem juros
            </p>

            <p className="freteGratis">Frete grátis</p>

            <button className="comprarButton">COMPRAR</button>
          </div>
        ))}
      </div>

      <button
        className="carrosselBtn right"
        onClick={() => scroll("right")}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Produtos;