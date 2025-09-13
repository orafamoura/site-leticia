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
        <div className="flex flex-col lg:flex-row gap-5">
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