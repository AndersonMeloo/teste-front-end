import './Categorias.scss'

type ProdutosProps = {
    imageSrc: string;
    text: string;
}

function Categoria({ imageSrc, text }: ProdutosProps) {

    return (

        <div className="categoriaWrapper">
            <div className="containerCategoria">
                <img src={imageSrc} alt={`Categoria ${text}`} className="produtoImagem" loading="lazy" decoding="async" />
            </div>
            <p className="categoriaTextoFora">{text}</p>
        </div>
    );
}

export default Categoria;