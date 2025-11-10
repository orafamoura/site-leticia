import ItemsServico from "./items"

export default function Servicos() {
    
    const itemsServico = [
        {
            "servicoTitulo":"Reabilitação Neurológica Ocupacional",
            "servicoTexto":"Acompanhamento feito por profissional especializado para avaliar e "+
            "melhorar as funções neurológicas e o desempenho no dia a dia, com um plano de tratamento "+
            "personalizado utilizando testes e instrumentos padronizados para avaliar o aspecto neurológico, "+
            "funcionalidade e desempenho ocupacional, com Plano Terapêutico Singular (PTS) e intervenções personalizadas."
        },
        {
            "servicoTitulo":"Reabilitação Cognitiva Ocupacional",
            "servicoTexto":"Atendimento para trabalhar memória, atenção e percepção, usando testes e atividades específicas,"+
            " com um plano de tratamento adaptado para cada pessoa com uso de instrumentos para avaliar memória, atenção, percepção "+
            " e desempenho ocupacional, com elaboração de PTS e intervenções personalizadas para maior efetividade."
        },
        {
            "servicoTitulo":"Atendimento em grupo",
            "servicoTexto":"Atendimento para trabalhar memória, atenção e percepção, usando testes e atividades específicas, com um "+
            " plano de tratamento adaptado para cada pessoa com uso de instrumentos para avaliar memória, atenção, percepção e desempenho"+
            " ocupacional, com elaboração de PTS e intervenções personalizadas para maior efetividade."
        },
    ]
    
    return (
        <div className="w-full h-auto min-h-[400px] min-w-[320px] flex flex-col lg:flex-row lg:justify-center items-center">
            {itemsServico.map(function(item){
                return (
                    <ItemsServico servicoTexto={item.servicoTexto} servicoTitulo={item.servicoTitulo}></ItemsServico>
                )
            })}
        </div>
    )
}