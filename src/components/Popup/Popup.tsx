import type { Product } from "../../types/Product";
import { formatPrice } from "../../utils/formatPrice";
import "./Popup.scss";

interface PopupProps {
    product: Product;
    onClose: () => void;
}

export const Popup = ({ product, onClose }: PopupProps) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}>X</button>

                <img src={product.photo} alt={product.productName} />

                <h2>{product.productName}</h2>
                <p>{product.descriptionShort}</p>

                <strong>
                    {formatPrice(product.price)}
                </strong>

                <button>COMPRAR</button>
            </div>
        </div>
    );
};