import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="max-w-full bg-white shadow-sm">
            <a className="">
                <img className="max-w-full h-auto block" src={carrosselImg} alt="" />
            </a>
            <div className="p-5">
                <a>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{carrosselTitulo}</h5>
                </a>
                <p className="mb-3 font-normal text-lg text-gray-700 ">{carrosselTexto}</p>
                <Button></Button>
            </div>
        </div>

    )
}