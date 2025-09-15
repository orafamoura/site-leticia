interface nossoAtendimentoProps {
    nossoAtendimentoIcon: string,
    nossoAtendimentoTitulo: string,
    nossoAtendimentoTexto: string
}

export default function NossoAtendimentoItem({nossoAtendimentoIcon, nossoAtendimentoTitulo, nossoAtendimentoTexto}: nossoAtendimentoProps) {
    return (
        <div className="max-w-[380px] p-3 lg:size-80 flex lg:flex-col border-2 border-azul-base bg-white z-10 rounded-lg lg:rounded-full place-items-center text-left sm:text-center justify-center">
            <img className="mb-3" src={nossoAtendimentoIcon} alt="" />
            <div className="mx-4">
                <p className="text-titulo-cards font-bold text-dourado-base">{nossoAtendimentoTitulo}</p>
                <p className="text-sm">{nossoAtendimentoTexto}</p> 
            </div>
        </div>
    )
}