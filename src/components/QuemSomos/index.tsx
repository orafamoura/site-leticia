import ItemsQuemSomos from "./items";

export default function QuemSomos() {

    const quemSomosItems = [
        {
            "quemSomosImg":"/public/images/sociaLeticia.webp",        
            "quemSomosTitulo":"Leticia Dantas",
            "quemSomosTexto":"Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em "+
                " Reabilitação Neurológica. Atua com foco em autonomia, qualidade de vida e cuidado humanizado.",
            "quemSomosItem1":"Especialista em Neuro",
            "quemSomosItem2":"Reabilitação Neurológica",
        },
        {
            "quemSomosImg":"/public/images/sociaAngela.webp",        
            "quemSomosTitulo":"Angela Dantas",
            "quemSomosTexto":"Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em "+
                " Reabilitação Neurológica. Atua com foco em autonomia, qualidade de vida e cuidado humanizado.",
            "quemSomosItem1":"Especialista em Neuro",
            "quemSomosItem2":"Reabilitação Neurológica",
        },
    ]
    return(
        <div className="grid grid-col-3 gap-2">
            <p className="col-start-1">QUEM SOMOS</p>
            {quemSomosItems.map(function(item){
                return (
                    <ItemsQuemSomos 
                        quemSomosImg={item.quemSomosImg} 
                        quemSomosTitulo={item.quemSomosTitulo}
                        quemSomosTexto={item.quemSomosTexto}
                        quemSomosItem1={item.quemSomosItem1}
                        quemSomosItem2={item.quemSomosItem2}>
                    </ItemsQuemSomos>
                )
            })}
        </div>
    )
}