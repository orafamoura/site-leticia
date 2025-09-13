import Button from "../../components/Button";
import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";
import NossoAtendimento from "../../components/NossoAtendimento";
import Servicos from "../../components/Servicos";

export default function Home(){
    return (
        <div className="font-montserrat">
            <Header></Header>
            <div className=" flex flex-col gap-6 max-w-[1920px] 3xl:justify-self-center">
                <section className="w-full">
                    <div className="w-auto relative">
                        <img className="block w-full h-[350px] sm:h-[860px] object-cover object-center sm:object-top" src="/images/fotoPrincipal.webp" alt="foto" />
                        <div className="absolute inset-0 bg-gradient-to-t from-degrade-cinza from-20% via-degrade-cinza-transparente via-40% to-transparent to-65%"></div>
                        <div className="flex flex-col absolute inset-x-0 bottom-0 md:mb-30 gap-5 items-center mx-4 md:mx-0">
                            <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:gap-9 gap-1">
                                <img className="w-40 sm:w-40 md:w-45 lg:w-50 h-auto" src="/images/logoVertical.webp" alt=" Logo Vertical da empresa"/>
                                <a className="md:border-2 h-0 md:h-70 border-white"></a>
                                <div className="w-auto max-w-170 flex flex-col gap-3 text-white items-center md:items-start text-center md:text-start">
                                    <h1 className="md:max-w-90 max-w-100 whitespace-normal text-cards leading-4.5 sm:leading-5 md:leading-5 font-bold">TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA</h1>
                                    <p className="md:max-w-130 max-w-100 text-medio leading-4.5 sm:leading-5 md:leading-8 font-bold text-dourado-base md:mb-4"> RECUPERE A QUALIDADE DE VIDA E AUTONOMIA</p>
                                    <p className="md:max-w-none max-w-100 text-xs sm:text-base lg:text-lg border rounded-4xl text-center border-dourado-base px-1">Especializada para Adultos e Idosos em Brasilia</p>
                                </div>
                            </div>
                            <Button className="">Agendar Avaliacao</Button>
                        </div>
                        <div className="w-full h-50 sm:h-20 bg-degrade-cinza"></div>
                    </div>
                    <div className="w-full h-[30px] sm:h-[80px] bg-degrade-cinza [clip-path:polygon(0_0,100%_0,60%_80%,50%_100%,0_0%)]"></div>
                </section>
                <section className="w-full h-auto flex flex-col gap-5 items-center ">
                    <h2 className="md:max-w-200 max-w-100 text-medio leading-4.5 sm:leading-5 md:leading-8 font-bold text-azul-base md:mb-4 text-center">PARA QUEM É A TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA:</h2>
                    <p className="md:max-w-200 max-w-100 whitespace-normal text-cards leading-5 sm:leading-6 text-center">No Instituto Inclusio, atendemos <strong>adultos e idosos</strong> que querem manter a mente ativa, preservar a autonomia e viver com mais qualidade de vida por meio de Terapia Ocupacional e Reabilitação Neurocognitiva personalizada.</p>
                    <Carrossel></Carrossel>
                </section>
                <section className="w-full ">
                    <div className=" h-[70%] flex flex-col bg-degrade-cinza">
                        <img className="w-full max-w-[380px] h-[130px] my-4 self-center block bg-no-repeat bg-center bg-contain sm:bg-auto bg-[url(/images/nossosServicos.webp)]"></img>
                        <div>
                            <Servicos></Servicos>
                        </div>
                    </div>
                    <div className="relative w-full h-[130px] content-center self-center block bg-[url('/images/agendamento.webp')] bg-no-repeat bg-center bg-cover sm:bg-auto">
                        <div className="absolute inset-0 bg-[rgba(207,163,91,1)] opacity-60 z-0"></div>
                        <div className="w-full text-white md:max-w-7/10 lg:max-w-6/10 xl:max-w-4/10 relative flex flex-col gap-3 items-center text-center justify-self-center z-10">
                            <p className="text-xs xs:text-sm mx-8 xs:mx-11 font-bold">AGENDE UMA AVALIAÇÃO E DESCUBRA COMO A TERAPIA OCUPACIONAL PODE TRANSFORMAR SUA VIDA!</p>
                            <Button className="">Agendar Avaliacao</Button>
                        </div>                        
                    </div>
                </section>
                <section className="w-full">
                    <div className="flex flex-row md:flex-row justify-center">
                        <div className="">
                            <NossoAtendimento></NossoAtendimento>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}