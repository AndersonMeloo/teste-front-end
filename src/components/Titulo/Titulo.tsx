type TituloProps = {
    title: string;
    text?: string;
}

function Titulo({ title, text }: TituloProps) {

    return (

        <>
            <div>
                <h2>{title}</h2>
                <p className="containerTexto">{text}</p>
            </div>
        </>
    );
}

export default Titulo;
