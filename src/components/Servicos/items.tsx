interface servicoProps { 
    servicoTitulo: string,
    servicoTexto: string
}

export default function ItemsServico({servicoTitulo, servicoTexto}: servicoProps) {
    return (
        <div className="m-4 text-white">
            <h3>{servicoTitulo}</h3>
            <p>{servicoTexto}</p>
        </div>
    )
}