import Button from "../Button"
import ItemsServico from "./items"

export default function Servicos() {
    
    const itemsServico = [
        {
            "servicoImg":"/public/icons/servicoCabeca.svg",
            "servicoTitulo":"Reabilitação Neurológica Ocupacional",
            "servicoTexto":"Acompanhamento feito por profissional especializado para avaliar e "+
            "melhorar as funções neurológicas e o desempenho no dia a dia, com um plano de tratamento "+
            "personalizado utilizando testes e instrumentos padronizados para avaliar o aspecto neurológico, "+
            "funcionalidade e desempenho ocupacional, com Plano Terapêutico Singular (PTS) e intervenções personalizadas."
        },
        {
            "servicoImg":"/public/icons/servicoMao.svg",
            "servicoTitulo":"Reabilitação Cognitiva Ocupacional",
            "servicoTexto":"Atendimento para trabalhar memória, atenção e percepção, usando testes e atividades específicas,"+
            " com um plano de tratamento adaptado para cada pessoa com uso de instrumentos para avaliar memória, atenção, percepção "+
            " e desempenho ocupacional, com elaboração de PTS e intervenções personalizadas para maior efetividade."
        },
        {
            "servicoImg":"/public/icons/servicoCasa.svg",
            "servicoTitulo":"Atendimento em grupo",
            "servicoTexto":"Atendimento para trabalhar memória, atenção e percepção, usando testes e atividades específicas, com um "+
            " plano de tratamento adaptado para cada pessoa com uso de instrumentos para avaliar memória, atenção, percepção e desempenho"+
            " ocupacional, com elaboração de PTS e intervenções personalizadas para maior efetividade."
        },
    ]
    
    return (
        <div className="flex-col text-center">
            <div className="mt-4 w-full h-auto min-h-[400px] min-w-[320px] flex flex-col lg:flex-row lg:justify-center">
                {itemsServico.map(function(item){
                    return (
                        <ItemsServico servicoImg={item.servicoImg} servicoTexto={item.servicoTexto} servicoTitulo={item.servicoTitulo}></ItemsServico>
                    )
                })}
            </div>
            <Button className="mt-8 mb-18 bg-dourado-base hover:bg-[#c5913e] text-white px-35">SAIBA MAIS</Button>
        </div>
    )
}