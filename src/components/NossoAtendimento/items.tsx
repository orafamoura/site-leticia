interface nossoAtendimentoProps {
    nossoAtendimentoIcon: string,
    nossoAtendimentoTitulo: string,
    nossoAtendimentoTexto: string
}

export default function NossoAtendimentoItem({nossoAtendimentoIcon, nossoAtendimentoTitulo, nossoAtendimentoTexto}: nossoAtendimentoProps) {
    return (
        <div className="max-w-[320px] lg:size-80 border rounded-lg lg:rounded-full place-items-center text-center content-center">
            <img className="mb-3" src={nossoAtendimentoIcon} alt="" />
            <div className="mx-4">
                <p className="text-lg">{nossoAtendimentoTitulo}</p>
                <p className="text-sm">{nossoAtendimentoTexto}</p> 
            </div>
        </div>
    )
}