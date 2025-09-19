import Button from "../Button";

export default function QuemSomos() {

    return(
        <div className="w-full flex flex-col lg:grid lg:grid-cols-4 xl:flex xl:flex-row gap-5 justify-center items-center my-25 lg:px-6">
            <p className="order-1 lg:col-start-2 lg:col-span-2 xl:order-2 text-5xl xl:text-8xl max-w-[400px] font-bold leading-4.5 lg:leading-10 xl:leading-15 2xl:leading-20 text-center ">QUEM SOMOS</p>
            <div className="w-full min-h-[300px] md:min-h-100 max-w-[450px] lg:col-start-0 lg:col-span-2 flex flex-row border-2 overflow-hidden order-3 self-start sm:self-center ml-0 lg:ml-0 sm:ml-40 rounded-r-[100px] border-l-2">
                <div className="w-full min-w-[175px] bg-cover bg-top block order-2 bg-[url('/images/sociaLeticia.webp')]"></div>
                <div className="flex flex-col items-center self-center">
                    <div className="flex flex-col text-right m-4">
                        <h4 className="text-dourado-base">Leticia Dantas</h4>
                        <p className="text-white text-sm">Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em Reabilitação Neurológica. 
                            Atua com foco em autonomia, qualidade de vida e cuidado humanizado.</p>
                        <div className="flex flex-col">
                            <p>Especialista em Neuro</p>
                            <p>Reabilitação Neurológica</p>
                        </div>
                    </div>
                    <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR</Button>
                </div>
            </div>             
            <div className="min-h-[300px] md:min-h-100 max-w-[450px] lg:col-start-1 lg:col-end-3 flex flex-row border-2 overflow-hidden order-1 self-end sm:self-center mr-0 lg:mr-0 sm:mr-40 rounded-l-[100px] border-r-2">
                <div className="w-full min-w-[175px] bg-cover bg-top block bg-[url('/images/sociaAngela.webp')]"></div>
                <div className="flex flex-col items-center self-center">
                    <div className="flex flex-col text-left m-4">
                        <h4 className="text-dourado-base">Angela Dantas</h4>
                        <p className="text-white text-sm">Cofundadora do Instituto Inclusio, Terapeuta Ocupacional especializada em Reabilitação Neurológica. 
                            Atua com foco em autonomia, qualidade de vida e cuidado humanizado.</p>
                        <div className="flex flex-col">
                            <p>Especialista em Neuro</p>
                            <p>Reabilitação Neurológica</p>
                        </div>
                    </div>
                    <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR</Button>
                </div>
            </div>             
        </div>
    )
}