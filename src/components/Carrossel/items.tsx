import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="max-w-[300px] sm:max-w-[380px] min-w-[300px] border-transparent bg-azul-base rounded-lg flex flex-col justify-center">
            <img className="w-full h-[140px] rounded-t-lg object-cover" src={carrosselImg} alt="" />
            <div className="mx-4 my-2">
                <a className="w-full">
                    <h5 className="text-white text-xl sm:text-2xl font-bold">{carrosselTitulo}</h5>
                    <p className="my-2 w-full max-w-3xs h-[2px] bg-dourado-base"></p>
                </a>
                <p className="text-white">{carrosselTexto}</p>
            </div>
            <div className="flex justify-center my-2.5">
            <Button className="">SAIBA MAIS</Button>
            </div>
        </div>

    )
}