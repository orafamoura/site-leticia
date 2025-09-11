import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="max-w-[380px] min-w-[340px]">
            <img className="w-full h-[140px] rounded-t-lg" src={carrosselImg} alt="" />
            <div className="border-transparent bg-azul-base">
                <a>
                    <h5 className="">{carrosselTitulo}</h5>
                </a>
                <p className="">{carrosselTexto}</p>
                <Button>Saiba Mais</Button>
            </div>
        </div>

    )
}