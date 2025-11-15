import Button from "../Button"
import ItemsServico from "./items"

export default function Servicos() {
    
    const itemsServico = [
        {
            "servicoImg":"/public/icons/servicoCabeca.svg",
            "servicoTitulo":["Reabilitação","Neurológica Ocupacional"],
            "servicoTexto":"Acompanhamento integral realizado por profissional qualificado, utilizando testes e instrumentos"+
            " padronizados nos aspectos neurológicos, no desempenho ocupacional, na funcionalidade, na elaboração do Plano Terapêutico"+
            " Singular (PTS) e em intervenções personalizadas conforme as necessidades de cada paciente e sua família."
        },
        {
            "servicoImg":"/public/icons/servicoMao.svg",
            "servicoTitulo":["Reabilitação","Cognitiva Ocupacional"],
            "servicoTexto":"Acompanhamento integral realizado por profissional qualificado, utilizando testes e instrumentos"+
            " padronizados nos aspectos neurológicos, no desempenho ocupacional, na funcionalidade, na elaboração do Plano"+
            " Terapêutico Singular (PTS) e em intervenções personalizadas conforme as necessidades de cada paciente e sua família."
        },
        {
            "servicoImg":"/public/icons/servicoCasa.svg",
            "servicoTitulo":["Atendimento Domiciliar e","em ILPI (casa de repouso)"],
            "servicoTexto":"O atendimento acontece no domicílio com o objetivo de propiciar maior comodidade e segurança, "+
            " além de favorecer a compreensão do cotidiano do paciente e de seus familiares, proporcionando maior eficácia nas intervenções."
        },
    ]
    
    return (
        <div className="w-6xl flex-col text-center">
            <div className="mt-4 w-full h-auto min-h-[400px] min-w-[320px] flex flex-col lg:flex-row lg:justify-center">
                {itemsServico.map(function(item, key){
                    return (
                        <ItemsServico key={key} servicoImg={item.servicoImg} servicoTexto={item.servicoTexto} servicoTitulo={item.servicoTitulo}></ItemsServico>
                    )
                })}
            </div>
            <Button className="my-10 bg-dourado-base hover:bg-[#c5913e] text-white px-15">SAIBA MAIS</Button>
        </div>
    )
}