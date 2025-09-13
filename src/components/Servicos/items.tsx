interface servicoProps { 
    servicoTitulo: string,
    servicoTexto: string
}

export default function ItemsServico({servicoTitulo, servicoTexto}: servicoProps) {
    return (
        <div className=" max-w-[600px] min-h-[320px] lg:bg-[#d9d9d920] m-4 sm:text-center">
            <div className="m-4 text-white">
                <h3 className="md:px-8 lg:px-9 font-bold my-2 text-titulo-cards leading-5">{servicoTitulo}</h3>
                <p className="text-cards">{servicoTexto}</p>
            </div>
        </div>

    )
}