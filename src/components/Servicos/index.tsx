import ItemsServico from "./items"

export default function Servicos() {
    
    const itemsServico = [
        {
            "servicoTitulo":"Atendimento em grupo",
            "servicoTexto":"Acompanhamento feito por profissional especializado para avaliar e "+
            "melhorar as funções neurológicas e o desempenho no dia a dia, com um plano de tratamento "+
            "personalizado utilizando testes e instrumentos padronizados para avaliar o aspecto neurológico, "+
            "funcionalidade e desempenho ocupacional, com Plano Terapêutico Singular (PTS) e intervenções personalizadas."
        },
        {
            "servicoTitulo":"Atendimento em grupo",
            "servicoTexto":"Acompanhamento feito por profissional especializado para avaliar e "+
            "melhorar as funções neurológicas e o desempenho no dia a dia, com um plano de tratamento "+
            "personalizado utilizando testes e instrumentos padronizados para avaliar o aspecto neurológico, "+
            "funcionalidade e desempenho ocupacional, com Plano Terapêutico Singular (PTS) e intervenções personalizadas."
        },
        {
            "servicoTitulo":"Atendimento em grupo",
            "servicoTexto":"Acompanhamento feito por profissional especializado para avaliar e "+
            "melhorar as funções neurológicas e o desempenho no dia a dia, com um plano de tratamento "+
            "personalizado utilizando testes e instrumentos padronizados para avaliar o aspecto neurológico, "+
            "funcionalidade e desempenho ocupacional, com Plano Terapêutico Singular (PTS) e intervenções personalizadas."
        },
    ]
    
    return (
        <div>
            {itemsServico.map(function(item){
                return (
                    <ItemsServico servicoTexto={item.servicoTexto} servicoTitulo={item.servicoTitulo}></ItemsServico>
                )
            })}
        </div>
    )
}