import NossoAtendimentoItem from "./items"

export default function NossoAtendimento() {

    const nossoAtendimentoItems = [
        {
            "nossoAtendimentoIcon":"/public/icons/telefone.svg",
            "nossoAtendimentoTitulo":"1º - Agende a Consulta",
            "nossoAtendimentoTexto":"Ao falar conosco esclareceremos todas suas dúvidas, enviaremos o orçamento e marcaremos a consulta no dia e horário que melhor se adequar a você.",
        },
        {
            "nossoAtendimentoIcon":"/public/icons/calendario.svg",
            "nossoAtendimentoTitulo":"2º - Agende a Consulta",
            "nossoAtendimentoTexto":"Ao falar conosco esclareceremos todas suas dúvidas, enviaremos o orçamento e marcaremos a consulta no dia e horário que melhor se adequar a você.",
        },
        {
            "nossoAtendimentoIcon":"/public/icons/pessoa.svg",
            "nossoAtendimentoTitulo":"3º - Agende a Consulta",
            "nossoAtendimentoTexto":"Ao falar conosco esclareceremos todas suas dúvidas, enviaremos o orçamento e marcaremos a consulta no dia e horário que melhor se adequar a você.",
        },       
    ]

    return (
        <div className="relative flex flex-col lg:flex-row gap-5">
            <div className="absolute right-[50%] lg:right-0 top-[-2%] lg:top-[50%] w-[2px] h-full lg:w-full lg:h-[2px] bg-azul-base"></div>
            {nossoAtendimentoItems.map(function(item){
                return (
                    <NossoAtendimentoItem 
                        nossoAtendimentoIcon={item.nossoAtendimentoIcon} 
                        nossoAtendimentoTitulo={item.nossoAtendimentoTitulo}
                        nossoAtendimentoTexto={item.nossoAtendimentoTexto}></NossoAtendimentoItem>
                )
            })}
        </div>
    )
}