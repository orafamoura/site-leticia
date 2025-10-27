import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string,
    carrosselTags: string[]
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg, carrosselTags}: carrosselItemProps){
    return (
        <div className="max-w-[300px] sm:max-w-[380px] min-w-[300px] border-transparent bg-azul-base rounded-lg flex flex-col justify-center">
            <img className="w-full h-[140px] rounded-t-lg object-cover" src={carrosselImg} alt="" />
            <div className="mx-4 my-2">
                <a className="w-full">
                    <h5 className="text-white text-lg sm:text-2xl font-extrabold">{carrosselTitulo}</h5>
                    <p className="my-2 w-full max-w-3xs h-[2px] bg-dourado-base"></p>
                </a>
                <p className="text-white">{carrosselTexto}</p>
                <ul className="flex gap-2">
                    {carrosselTags.map(tag => <li className="px-3 my-2 text-white border rounded-4xl inline-block" key={tag}>{tag}</li>)}
                </ul>
            </div>
            <div className="flex justify-center my-2.5">
            <Button className="bg-white text-azul-base hover:bg-[#f7f7f7]">SAIBA MAIS</Button>
            </div>
        </div>

    )
}