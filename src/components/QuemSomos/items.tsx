import Button from "../Button";

interface quemSomosProps {
    quemSomosImg: string,
    quemSomosTitulo: string, 
    quemSomosTexto: string, 
    quemSomosItem1: string, 
    quemSomosItem2: string
}

export default function ItemsQuemSomos({quemSomosImg, quemSomosTitulo, quemSomosTexto, quemSomosItem1, quemSomosItem2}: quemSomosProps) {
    return(
        <div className="flex flex-row border-2 rounded-l-4xl border-r-0">
            <img className="max-h-[430px] max-w-[175px] rounded-l-4xl bg-center bg-contain block" src={quemSomosImg} alt="Foto das Socias" />
            <div className="flex flex-col items-center">
                <div className="flex flex-col">
                    <h4 className="text-dourado-base">{quemSomosTitulo}</h4>
                    <p className="text-white">{quemSomosTexto}</p>
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