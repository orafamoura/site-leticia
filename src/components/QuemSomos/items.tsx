import Button from "../Button"

interface quemSomosItemsProps {
    quemSomosNome: string,
    quemSomosImg: string,
    quemSomosTexto: string[],
    quemSomosTags: string[]
}

export default function QuemSomosItems({quemSomosNome, quemSomosImg, quemSomosTexto, quemSomosTags}: quemSomosItemsProps) {
    return (
        <>
            <img className="w-30 lg:w-60 m-5 absolute inset-y-0 top-[-110px] lg:static rounded-full " src={quemSomosImg} alt="" />
            <div className="w-auto mx-5 lg:mx-10">
                <p className="my-2 mt-7 text-dourado-base text-xl font-bold">{quemSomosNome}</p>
                {quemSomosTexto.map(texto => <p className="w-auto text-sm md:text-sm lg:text-xs text-pretty" key={texto}>{texto}</p>)}
                <ul className="my-2 flex flex-wrap gap-x-2 gap-y-0 mb-10">
                    {quemSomosTags.map(tag => <li className="mx-1 my-1 px-4 border rounded-4xl inline-block text-xs text-white" key={tag}>{tag}</li>)}
                </ul>
                <Button className="w-50 absolute left-1/2 -translate-x-1/2 bottom-[-20px] bg-botao-wpp">AGENDAR</Button> 
            </div>
        </>
    )
}