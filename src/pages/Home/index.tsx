import Button from "../../components/Button";
import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";

export default function Home(){
    return (
        <div className="font-montserrat">
            <Header></Header>
            <section className="w-full">
                <div className="w-auto relative">
                    <img className="block w-full h-[350px] sm:h-[860px] object-cover object-center sm:object-top" src="/images/fotoPrincipal.webp" alt="foto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-degrade-cinza from-20% via-degrade-cinza-transparente via-40% to-transparent to-65%"></div>
                    <div className="flex flex-col absolute inset-x-0 bottom-0 md:mb-30 gap-5 items-center mx-4 md:mx-0">
                        <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:gap-9 gap-1">
                            <img className="w-40 sm:w-40 md:w-45 lg:w-50 h-auto" src="/images/logoVertical.webp" alt=" Logo Vertical da empresa"/>
                            <a className="md:border-2 h-0 md:h-70 border-white"></a>
                            <div className="w-auto max-w-170 flex flex-col gap-3 text-white items-center md:items-start text-center md:text-start">
                                <h1 className="md:max-w-90 max-w-100 whitespace-normal text-base sm:text-lg md:text-xl lg:text-lg leading-5 sm:leading-6 font-bold">TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA</h1>
                                <p className="md:max-w-130 max-w-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-5 sm:leading-8 font-bold text-dourado-base md:mb-4"> RECUPERE A QUALIDADE DE VIDA E AUTONOMIA</p>
                                <h2 className="md:max-w-none max-w-100 text-xs sm:text-base lg:text-lg border rounded-4xl text-center border-dourado-base px-1">Especializada para Adultos e Idosos em Brasilia</h2>
                            </div>
                        </div>
                        <Button className="">Agendar Avaliacao</Button>
                    </div>
                    <div className="w-full h-50 sm:h-20 bg-degrade-cinza"></div>
                </div>
                <div className="w-full h-[30px] sm:h-[80px] bg-degrade-cinza [clip-path:polygon(0_0,100%_0,60%_80%,50%_100%,0_0%)]"></div>
            </section>
            <Carrossel></Carrossel>
        </div>
    )
}