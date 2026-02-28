import { useState } from "react";
import type { Product } from "../../types/Product";
import { formatPrice } from "../../utils/formatPrice";
import "./Popup.scss";

interface PopupProps {
  product: Product;
  onClose: () => void;
}

export const Popup = ({ product, onClose }: PopupProps) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="sobreposicao-popup" onClick={onClose}>
      <div className="container-popup" onClick={(e) => e.stopPropagation()}>
        <button className="botao-fechar-popup" onClick={onClose}>
          ✕
        </button>

        <div className="conteudo-popup">
          <div className="imagem-popup">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="informacoes-popup">
            <h2>{product.productName}</h2>

            <strong className="preco-popup">
              {formatPrice(product.price)}
            </strong>

            <p className="descricao-popup">{product.descriptionShort}</p>

            <a href="">Veja mais detalhes do produto</a>

            <div className="acoes-popup">
              <div className="quantidade-popup">
                <button onClick={decrease}>-</button>
                <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={increase}>+</button>
              </div>

              <button className="botao-comprar-popup">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};