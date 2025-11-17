interface servicoProps { 
    servicoTitulo: string [],
    servicoTexto: string,
    servicoImg: string
}

export default function ItemsServico({servicoTitulo, servicoTexto, servicoImg}: servicoProps) {
    return (
        <div className="w-auto max-w-[600px] min-h-[320px] flex-1 lg:bg-[#d9d9d920] m-4 sm:text-center relative rounded-xl">
            <div className="md:flex items-center justify-center size-20 p-4 md:absolute inset-x-0 top-[-40px] left-1/2 -translate-x-1/2 rounded-full bg-white hidden">
                <img className="w-[45px] h-[45px]" src={servicoImg}></img>
            </div>
            <div className="w-auto md:pt-8">
                <div className="m-4 text-white text-left">
                    <div className="flex gap-3">
                        <img className="md:hidden w-[45px] h-[45px]" src={servicoImg}></img>
                        <h3 className="my-2 mb-5 font-bold text-titulo-cards leading-5">
                            {servicoTitulo.map(titulo => <p key={titulo} className="">{titulo}</p>)}
                        </h3>
                    </div>
                    <p className="text-normal text-wrap">{servicoTexto}</p>
                </div>
            </div>
        </div>


    )
}