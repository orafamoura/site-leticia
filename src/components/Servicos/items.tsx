interface servicoProps { 
    servicoTitulo: string,
    servicoTexto: string,
    servicoImg: string
}

export default function ItemsServico({servicoTitulo, servicoTexto, servicoImg}: servicoProps) {
    return (
        <div className="w-auto max-w-[600px] min-h-[320px] lg:bg-[#d9d9d920] m-4 sm:text-center relative rounded-xl">
            <div className="flex items-center justify-center size-20 p-4 absolute inset-x-0 top-[-40px] left-1/2 -translate-x-1/2 rounded-full bg-white">
                <img className="w-[45px] h-[45px]" src={servicoImg}></img>
            </div>
            <div className="pt-8">
                <div className="m-4 text-white text-left">
                    <h3 className="font-bold my-2 text-titulo-cards leading-5">{servicoTitulo}</h3>
                    <p className="text-cards">{servicoTexto}</p>
                </div>
            </div>
        </div>


    )
}