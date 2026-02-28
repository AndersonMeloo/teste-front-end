import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Categoria from "../components/Categorias/Categorias";
import Produtos from "../components/Produtos/Produtos";
import Titulo from "../components/Titulo/Titulo";
import NavegacaoCategorias from "../components/NavegacaoCategorias/NavegacaoCategorias";
import Parceiros from "../components/Parceiros/Parceiros";
import Marcas from "../components/Marcas/Marcas";
import Footer from "../components/Footer/Footer";

type ProdutoProps = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
};

type ApiResponse = {
    success: boolean;
    products: ProdutoProps[];
};

function Home() {
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

            <div className="containerHomeCategorias">
                <Categoria imageSrc="/imagensCategorias/Tecnologia.png" text="Tecnologia" />
                <Categoria imageSrc="/imagensCategorias/SuperMercado.png" text="Supermercado" />
                <Categoria imageSrc="/imagensCategorias/whiskey.png" text="Bebidas" />
                <Categoria imageSrc="/imagensCategorias/ferramentas.png" text="Ferramentas" />
                <Categoria imageSrc="/imagensCategorias/cuidados-de-saude.png" text="Saúde" />
                <Categoria imageSrc="/imagensCategorias/corrida.png" text="Esportes e Fitness" />
                <Categoria imageSrc="/imagensCategorias/moda.png" text="Moda" />
            </div>

            <div className="containerTitulo">
                <Titulo title="Produtos Relacionados" />
            </div>
            <NavegacaoCategorias />
            <Produtos produtos={produtos.slice(0, 4)} />
            <Parceiros />

            <div className="containerTitulo">
                <Titulo title="Produtos Relacionados" />
            </div>
            <p className="containerTexto">Ver todos</p>
            <Produtos produtos={produtos.slice(4, 8)} />
            <Parceiros />

            <Marcas />
            <div className="containerTitulo">
                <Titulo title="Produtos Relacionados" />
            </div>
            <p className="containerTexto">Ver todos</p>
            <Produtos produtos={produtos.slice(6, 10)} />

            <Footer />
        </>
    );
}

export default Home;