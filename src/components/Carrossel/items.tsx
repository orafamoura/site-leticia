import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="w-full h-auto max-w-sm bg-azul-base shadow-sm rounded-t-lg">
            <img className="w-full h-auto max-h-[150px] block  rounded-t-lg" src={carrosselImg} alt="" />
            <div className="p-5">
                <a>
                    <h5 className="text-xs sm:text-sm md:text-md lg:text-xl leading-5 sm:leading-8 mb-2 font-bold tracking-tight text-white">{carrosselTitulo}</h5>
                </a>
                <p className="mb-3 text-xs sm:text-sm md:text-md lg:text-xl text-white">{carrosselTexto}</p>
                <Button>Saiba Mais</Button>
            </div>
        </div>
    )
}