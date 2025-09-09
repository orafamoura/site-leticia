import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="max-w-full bg-azul-base shadow-sm  rounded-t-lg">
            <img className="w-full h-auto block rounded-t-lg" src={carrosselImg} alt="" />
            <div className="p-5">
                <a>
                    <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-5 sm:leading-8 mb-2 font-bold tracking-tight text-white">{carrosselTitulo}</h5>
                </a>
                <p className="mb-3 font-normal text-lg text-white ">{carrosselTexto}</p>
                <Button></Button>
            </div>
        </div>
    )
}