import Button from "../Button";

interface quemSomosProps {
    quemSomosCss: string,
    quemSomosImg: string,
    quemSomosTitulo: string, 
    quemSomosTexto: string, 
    quemSomosItem1: string, 
    quemSomosItem2: string
}

export default function ItemsQuemSomos({quemSomosImg, quemSomosTitulo, quemSomosTexto, quemSomosItem1, quemSomosItem2, quemSomosCss}: quemSomosProps) {
    return(
        <div className={`min-h-[430px] max-w-[450px] flex flex-row border-2 overflow-hidden ${quemSomosCss}`}>
            <div className={`min-w-[175px] bg-center bg-cover block ${quemSomosImg}`}></div>
            <div className="flex flex-col items-center self-center">
                <div className="flex flex-col">
                    <h4 className="text-dourado-base">{quemSomosTitulo}</h4>
                    <p className="text-white text-sm">{quemSomosTexto}</p>
                    <div className="flex flex-col">
                        <p>{quemSomosItem1}</p>
                        <p>{quemSomosItem2}</p>
                    </div>
                </div>
                <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR</Button>
            </div>
        </div> 
    )
}