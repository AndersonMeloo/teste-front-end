import { useRef } from "react";
import type { Product } from "../../types/Product";
import { formatPrice } from "../../utils/formatPrice";
import "./Produtos.scss";

type ProdutosProps = {
  produtos: Product[];
  onBuy: (product: Product) => void;
};

function Produtos({ produtos, onBuy }: ProdutosProps) {
  
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
              {formatPrice(produto.price * 1.1)}
            </p>

            <p className="precoDesconto">{formatPrice(produto.price)}</p>

            <p className="parcelamento">
              ou 2x de {formatPrice(produto.price / 2)} sem juros
            </p>

            <p className="freteGratis">Frete grátis</p>

            <button className="comprarButton" onClick={() => onBuy(produto)}>
              COMPRAR
            </button>
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