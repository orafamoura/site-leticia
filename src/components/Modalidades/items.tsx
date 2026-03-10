interface modalidadeProps { 
    modalidadeTitulo: string,
    modalidadeTexto: React.ReactNode[];
    modalidadeImg: string
}

export default function ItemsModalidades({modalidadeTitulo, modalidadeTexto, modalidadeImg}: modalidadeProps) {
    return (
        <div className="container max-w-[900px] w-auto flex-1 m-2 px-2 md:px-10 mb-10 sm:text-center relative border-white border-1 rounded-xl">
            <div className="flex items-center justify-center size-18 p-4 absolute inset-x-0 top-[-40px] left-1/2 -translate-x-1/2 rounded-full bg-white ring-8 ring-azul-base">
                <img className="w-[50px] h-[50px]" src={modalidadeImg}></img>
            </div>
            <div className="w-auto pt-8">
                <div className="m-4 text-white text-left">
                    <div className="">
                        <h3 className="my-2 mb-5 font-bold text-[1.4rem] leading-5">
                            <p>{modalidadeTitulo}</p>
                        </h3>
                    </div>
                    {modalidadeTexto.map((texto, index) => (
                        <p key={index} className="pb-3 pr-2 text-[.9rem] text-pretty">{texto}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}