import Button from "../Button";

interface carrosselItemProps {
    carrosselTitulo: string,
    carrosselTexto: string,
    carrosselImg: string
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg}: carrosselItemProps){
    return (
        <div className="max-w-sm bg-white shadow-sm overflow-hidden">
            <a>
                <img className="" src={carrosselImg} alt="" />
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