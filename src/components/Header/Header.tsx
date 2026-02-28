import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import "./Header.scss";
import BlackFridayPromo from "../BlackFridayPromo/BlackFridayPromo";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setMenuOpen(prev => !prev);
    };

    return (

        <header className="containerHeader">

            <div className="containerTopBar">
                <p>
                    <img src="/iconsHeader/ShieldCheck.png" alt="Icon ShieldCheck" />
                    Compra <span>100% segura</span>
                </p>

                <p>
                    <img src="/iconsHeader/Truck.png" alt="Logo" />
                    <span>Frete grátis</span> acima de R$ 200
                </p>
                <p>
                    <img src="/iconsHeader/CreditCard.png" alt="Icon CreditCard" />
                    <span>Parcele</span> suas compras</p>
            </div>

            <div className="containerMainHeader">
                <div className="logo">
                    <img src="/Logo.png" alt="Econverse" />
                </div>

                <div className="containerSearch">
                    <label htmlFor="busca" className="sr-only">Buscar produtos</label>
                    <input id="busca" type="text" placeholder="O que você está buscando?" />
                    <button type="button" aria-label="Buscar produtos">
                        <FiSearch size={18} color="#9F9F9F" />
                    </button>
                </div>

                <div className="containerIcons">
                    <img src="/iconsHeader/Group.png" alt="Icon Group" />
                    <img src="/iconsHeader/Heart.png" alt="Icon Heart" />
                    <img src="/iconsHeader/UserCircle.png" alt="Icon UserCircle" />
                    <img src="/iconsHeader/ShoppingCart.png" alt="Icon ShoppingCart" />
                    {menuOpen ? (
                        <FiX className="menu-mobile" onClick={toggleMenu} aria-label="Fechar menu" role="button" tabIndex={0} />
                    ) : (
                        <FiMenu className="menu-mobile" onClick={toggleMenu} aria-label="Abrir menu" role="button" tabIndex={0} />
                    )}
                </div>
            </div>

            <nav className={`categories ${menuOpen ? "active" : ""}`} aria-label="Categorias principais">
                <a href="/?categoria=todas">Todas categorias</a>
                <a href="/?categoria=supermercado">Supermercado</a>
                <a href="/?categoria=livros">Livros</a>
                <a href="/?categoria=moda">Moda</a>
                <a href="/?categoria=lancamentos">Lançamentos</a>
                <a href="/?categoria=ofertas" className="off">Ofertas do dia</a>

                <a href="/?categoria=assinatura">
                    <img src="/iconsHeader/CrownSimple.png" alt="Ícone assinatura" />
                    Assinatura
                </a>
            </nav>

            <BlackFridayPromo imageSrc="/iconsHeader/BlackFriday/BlackFriday.jpg" />

        </header>
    );
}