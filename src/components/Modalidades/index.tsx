import Button from "../Button"
import ItemsModalidades from "./items"

export default function Modalidades() {
    
    const itemsModalidade = [
        {
            modalidadeImg:"/imgs/icons/presencial.svg",
            modalidadeTitulo:"Atendimento Presencial",
            modalidadeTexto:[
            <>
                <strong>Cuidado próximo, completo e pensado para o bem-estar do paciente.</strong>
                <br></br>
                No atendimento presencial, o paciente é recebido em um <strong>ambiente seguro, equipado e preparado</strong> para 
                estimular suas habilidades cognitivas, motoras e funcionais. Aqui, ele conta com o suporte direto 
                da terapeuta ocupacional, acompanhamento constante e atividades que fortalecem autonomia e qualidade de vida.
            </>,
            <>
                <strong>Para quem é ideal:</strong> pacientes que se beneficiam do contato direto, de um espaço estruturado e de rotinas terapêuticas regulares.
            </>  
            ]
        },
        {
            modalidadeImg:"/imgs/icons/grupo.svg",
            modalidadeTitulo:"Atendimento em Grupo",
            modalidadeTexto:[
            <>
                <strong>Os atendimentos em grupo da clínica são estruturados para promover estimulação cognitiva, funcionalidade e participação 
                social em um ambiente terapêutico acolhedor e estrategicamente planejado.</strong>
                <br></br>
                A dinâmica em grupo potencializa os resultados terapêuticos ao <strong>incentivar a interação social, fortalecer vínculos e ampliar
                 o engajamento dos participantes nas atividades propostas.</strong> Se você busca uma abordagem terapêutica estruturada para apoiar 
                 a saúde cognitiva e funcional de um familiar, entre em contato com nossa equipe e conheça os grupos disponíveis.
            </>,
            <>
                <strong>Para quem é ideal:</strong> quem busca participação social em um ambiente terapêutico acolhedor e estrategicamente planejado.
            </>  
            ]
        },
        {
            modalidadeImg:"/imgs/icons/casa.svg",
            modalidadeTitulo:"Atendimento Domiciliar",
            modalidadeTexto:[
            <>
                <strong>O cuidado vai até você — conforto, segurança e rotina preservada.</strong>
                <br></br>
                No atendimento domiciliar, levamos a terapia ocupacional <strong>diretamente para dentro da casa do paciente
                 com os mesmos materiais e qualidades dos nossos atendimentos presenciais.</strong> Trabalhamos com o que ele 
                 vive no dia a dia: organização da rotina, prevenção de quedas, orientação à família e adaptação do 
                 ambiente para torná-lo mais seguro e funcional.
            </>,
            <>
                <strong>Para quem é ideal:</strong> pacientes com dificuldade de locomoção, famílias que buscam praticidade e quem precisa de apoio no próprio ambiente de vida.
            </>  
            ]
        },
        {
            modalidadeImg:"/imgs/icons/computer.svg",
            modalidadeTitulo:"Atendimento Online",
            modalidadeTexto:[
            <>
                <strong>Acompanhamento de qualquer lugar, com praticidade e continuidade do cuidado.</strong>
                <br></br>
                O atendimento online permite que o paciente e sua família recebam<strong> orientações, exercícios, avaliações e 
                acompanhamento</strong> de forma simples e acessível. É uma forma prática de manter o tratamento ativo, mesmo em 
                viagens, mudanças temporárias ou quando a rotina está mais corrida.
            </>,
            <>
                <strong>Para quem é ideal:</strong> quem busca flexibilidade, mora longe ou precisa manter o cuidado sem deslocamentos.
            </>  
            ]
        }
    ]
    return (
        <div className="w-full">
            <div className="w-full h-auto min-h-[400px] min-w-[320px] flex flex-col gap-4 items-center">
                {itemsModalidade.map(function(item, key){
                    return (
                        <ItemsModalidades key={key} modalidadeImg={item.modalidadeImg} modalidadeTexto={item.modalidadeTexto} modalidadeTitulo={item.modalidadeTitulo}></ItemsModalidades>
                    )
                })}
            </div>
            <Button className="mt-5 mb-15 bg-dourado-base hover:bg-[#c5913e] text-button text-white px-15 md:px-25">SAIBA MAIS</Button>
        </div>
    )
}