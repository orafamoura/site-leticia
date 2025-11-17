interface nossoAtendimentoProps {
    nossoAtendimentoIcon: string,
    nossoAtendimentoTitulo: string,
    nossoAtendimentoTexto: string
}

export default function NossoAtendimentoItem({nossoAtendimentoIcon, nossoAtendimentoTitulo, nossoAtendimentoTexto}: nossoAtendimentoProps) {
    return (
        <div className="max-w-[380px] min-h-[150px] p-3 lg:size-80 flex lg:flex-col border-2 border-azul-base bg-white z-10 rounded-lg lg:rounded-full text-left sm:text-center items-center justify-center pb-6">
            <img className="w-[200px] md:w-[70px]" src={nossoAtendimentoIcon} alt="" />
            <div className="mx-3">
                <p className="text-titulo-cards font-bold text-dourado-base">{nossoAtendimentoTitulo}</p>
                <p className="text-sm text-balance">{nossoAtendimentoTexto}</p> 
            </div>
        </div>
    )
}