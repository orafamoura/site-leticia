import ItemsQuemSomos from "./items";

export default function QuemSomos() {

    const quemSomosItems = [
        {
            "quemSomosCss":"order-2 rounded-r-[100px] border-l-2",
            "quemSomosImg":"order-2 bg-[url('/images/sociaLeticia.webp')]",        
            "quemSomosTitulo":"Leticia Dantas",
            "quemSomosTexto":"Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em "+
                " Reabilitação Neurológica. Atua com foco em autonomia, qualidade de vida e cuidado humanizado.",
            "quemSomosItem1":"Especialista em Neuro",
            "quemSomosItem2":"Reabilitação Neurológica",
        },
        {
            "quemSomosCss":"order-1 rounded-l-[100px] border-r-2",
            "quemSomosImg":"bg-[url('/images/sociaAngela.webp')]",        
            "quemSomosTitulo":"Angela Dantas",
            "quemSomosTexto":"Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em "+
                " Reabilitação Neurológica. Atua com foco em autonomia, qualidade de vida e cuidado humanizado.",
            "quemSomosItem1":"Especialista em Neuro",
            "quemSomosItem2":"Reabilitação Neurológica",
        },
    ]
    return(
        <div className="flex flex-row justify-evenly items-center my-25">
            <p className="order-2 xl:text-7xl 2xl:text-8xl max-w-[400px] font-bold leading-4.5 xl:leading-15 2xl:leading-20 text-center ">QUEM SOMOS</p>
            {quemSomosItems.map(function(item){
                return (
                    <ItemsQuemSomos
                        quemSomosCss={item.quemSomosCss} 
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