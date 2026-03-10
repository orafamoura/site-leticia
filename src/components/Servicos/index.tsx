import ItemsServico from "./items"

export default function Servicos() {
    
    const itemsServico = [
        {
            servicoImg:"/imgs/icons/cabeca.svg",
            servicoTitulo:["Reabilitação","Neurológica Ocupacional"],
            servicoTexto:[
                <>
                Acompanhamento integral realizado por profissional qualificado para o uso de testes e 
                instrumentos padronizados no aspecto neurológico, no desempenho ocupacional, na 
                funcionalidade, elaboração do Plano Terapêutico Singular (PTS) e intervenções 
                personalizadas para a necessidade de cada paciente e família. 
                </>
            ]
        },
        {
            servicoImg:"/imgs/icons/mao.svg",
            servicoTitulo:["Reabilitação","Cognitiva Ocupacional"],
            servicoTexto: [
                <>
                Atendimento realizado por terapeuta ocupacional especializado para o uso de instrumentos específicos 
                para a avaliação cognitiva (rastreio cognitivos, testes específicos para avaliar a memória, atenção, 
                percepção), instrumentos para avaliar desempenho ocupacional, elaboração do Plano Terapêutico Singular 
                (PTS) e intervenções personalizadas, proporcionando maior resolutividade nas intervenções.
                </>
            ]
        }
    ]
    
    return (
        <div className="w-full flex-col text-center">
            <div className="w-full lg:w-3xl mt-1 h-auto min-h-[330px] flex flex-col lg:flex-row lg:justify-center">
                {itemsServico.map(function(item, key){
                    return (
                        <ItemsServico key={key} servicoImg={item.servicoImg} servicoTexto={item.servicoTexto} servicoTitulo={item.servicoTitulo}></ItemsServico>
                    )
                })}
            </div>
        </div>
    )
}