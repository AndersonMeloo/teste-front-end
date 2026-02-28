import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Categoria from "../components/Categorias/Categorias";
import Produtos from "../components/Produtos/Produtos";
import Titulo from "../components/Titulo/Titulo";
import NavegacaoCategorias from "../components/NavegacaoCategorias/NavegacaoCategorias";
import Parceiros from "../components/Parceiros/Parceiros";
import Marcas from "../components/Marcas/Marcas";
import Footer from "../components/Footer/Footer";
import { Popup } from "../components/Popup/Popup";
import type { Product } from "../types/Product";

type ApiResponse = {
    success: boolean;
    products: Product[];
};

function Home() {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleBuyClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        fetch("/data/produtos.json")
            .then((res) => {
                if (!res.ok) throw new Error("Erro ao carregar os produtos");
                return res.json();
            })
            .then((data: ApiResponse) => {
                if (data.success) {
                    setProdutos(data.products);
                } else {
                    setError("Falha na resposta da API");
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            <Header />

            <main>
                <h1 className="sr-only">Econverse - Loja online com produtos, categorias e ofertas</h1>

                <section aria-labelledby="categorias-em-destaque">
                    <h2 id="categorias-em-destaque" className="sr-only">Categorias em destaque</h2>
                    <div className="containerHomeCategorias">
                        <Categoria imageSrc="/imagensCategorias/Tecnologia.png" text="Tecnologia" />
                        <Categoria imageSrc="/imagensCategorias/SuperMercado.png" text="Supermercado" />
                        <Categoria imageSrc="/imagensCategorias/whiskey.png" text="Bebidas" />
                        <Categoria imageSrc="/imagensCategorias/ferramentas.png" text="Ferramentas" />
                        <Categoria imageSrc="/imagensCategorias/cuidados-de-saude.png" text="Saúde" />
                        <Categoria imageSrc="/imagensCategorias/corrida.png" text="Esportes e Fitness" />
                        <Categoria imageSrc="/imagensCategorias/moda.png" text="Moda" />
                    </div>
                </section>

                <section id="produtos-relacionados-1" aria-labelledby="titulo-produtos-relacionados-1">
                    <div className="containerTitulo" id="titulo-produtos-relacionados-1">
                        <Titulo title="Produtos Relacionados" />
                    </div>
                    <NavegacaoCategorias />
                    <Produtos produtos={produtos.slice(0, 4)} onBuy={handleBuyClick} />
                </section>

                <Parceiros />

                <section id="produtos-relacionados-2" aria-labelledby="titulo-produtos-relacionados-2">
                    <div className="containerTitulo" id="titulo-produtos-relacionados-2">
                        <Titulo title="Produtos Relacionados" />
                    </div>
                    <p className="containerTexto">Ver todos</p>
                    <Produtos produtos={produtos.slice(4, 8)} onBuy={handleBuyClick} />
                </section>

                <Parceiros />

                <Marcas />
                <section id="produtos-relacionados-3" aria-labelledby="titulo-produtos-relacionados-3">
                    <div className="containerTitulo" id="titulo-produtos-relacionados-3">
                        <Titulo title="Produtos Relacionados" />
                    </div>
                    <p className="containerTexto">Ver todos</p>
                    <Produtos produtos={produtos.slice(6, 10)} onBuy={handleBuyClick} />
                </section>

                {selectedProduct && (
                    <Popup product={selectedProduct} onClose={handleClosePopup} />
                )}

                <Footer />
            </main>

        </>
    );
}

export default Home;