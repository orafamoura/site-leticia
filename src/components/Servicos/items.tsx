interface servicoProps { 
    servicoTitulo: string [],
    servicoTexto: React.ReactNode[],
    servicoImg: string
}

export default function ItemsServico({servicoTitulo, servicoTexto, servicoImg}: servicoProps) {
    return (
        <div className="w-auto flex-1 m-4 sm:text-center relative">
            <div className="w-auto md:pt-4">
                <div className="m-2 text-white text-left">
                    <div className="flex gap-2">
                        <img className="w-[45px] h-[45px]" src={servicoImg}></img>
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