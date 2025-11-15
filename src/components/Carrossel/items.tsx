import Button from "../Button";
declare module '*.css';

interface carrosselItemProps {
    carrosselTitulo: string[],
    carrosselTexto: string,
    carrosselImg: string,
    carrosselTags: string[]
}

export default function CarrosselItem({carrosselTitulo, carrosselTexto, carrosselImg, carrosselTags}: carrosselItemProps){
    return (
        <div className="max-w-[300px] sm:max-w-[380px] min-w-[300px] h-full min-h-[483px] border-transparent bg-azul-base rounded-2xl flex flex-col justify-between">
            <img className="w-full h-[140px] rounded-t-2xl object-cover" src={carrosselImg} alt="" />
            <div className="mx-4 my-2 flex-1 flex flex-col">
                <a className="w-full">
                    <h5 className="text-white text-lg sm:text-2xl font-extrabold">
                        {carrosselTitulo.map(function(item, index) {
                            if(index % 2 === 0){
                                return (
                                    <p className="mt-1 font-bold text-sm md:text-normal tracking-wider" key={index}>{item}</p>
                                )
                            } else {
                                return (
                                    <p className="font-bold text-base md:text-lg tracking-wider" key={index}>{item}</p>
                                )
                            }
                        })}
                    </h5>
                    <p className="my-4 w-full max-w-3xs h-[1px] bg-dourado-base"></p>
                </a>
                <p className="mb-7 text-white text-sm md:text-normal">{carrosselTexto}</p>
                <ul className="my-2 flex flex-wrap gap-x-2 gap-y-0 mb-10">
                    {carrosselTags.map(tag => <li className="mx-1 my-1 px-4 border rounded-4xl inline-block text-white text-normal" key={tag}>{tag}</li>)}
                </ul>
            </div>
            <div className="flex justify-center my-2.5">
            <Button className="mb-3 bg-white text-azul-base hover:bg-[#f7f7f7]">SAIBA MAIS</Button>
            </div>
        </div>
    )
}