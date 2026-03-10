import Button from "../Button"

interface quemSomosItemsProps {
    quemSomosNome: string,
    quemSomosImg: string,
    quemSomosTexto: string[],
    quemSomosTags: string[],
    crefito: string
}

export default function QuemSomosItems({quemSomosNome, quemSomosImg, quemSomosTexto, quemSomosTags, crefito}: quemSomosItemsProps) {
    return (
        <>
            <img className="w-30 lg:w-60 m-5 absolute inset-y-0 top-[-110px] lg:static rounded-full " src={quemSomosImg} alt="" />
            <div className="w-auto mx-5 lg:mx-10">
                <p className="my-2 mt-7 text-dourado-base text-2xl font-bold">{quemSomosNome}</p>
                {quemSomosTexto.map(texto => <p className="w-auto text-sm md:text-sm lg:text-xs text-balance leading-[1.1]" key={texto}>{texto}</p>)}
                <p className="my-1 text-dourado-base text-sm font-semibold">{crefito}</p>
                <ul className="my-2 flex flex-wrap gap-x-.5 gap-y-0 items-center mb-10">
                    {quemSomosTags.map(tag => <li className="mx-1 my-1 px-4 border rounded-4xl inline-block text-xs text-white text-center" key={tag}>{tag}</li>)}
                </ul>
                <Button className="w-50 absolute left-1/2 -translate-x-1/2 bottom-[-20px] bg-botao-wpp hover:bg-[#099656]">AGENDAR</Button> 
            </div>
        </>
    )
}