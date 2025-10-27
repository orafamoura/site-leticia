import Button from "../../components/Button";
import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";
import NossoAtendimento from "../../components/NossoAtendimento";
import NossoEspaco from "../../components/NossoEspaco";
import QuemSomos from "../../components/QuemSomos";
import Servicos from "../../components/Servicos";

export default function Home(){
    return (
        <div className="font-montserrat">
            <Header></Header>
            <div className=" flex flex-col gap-6 max-w-[1920px] 3xl:justify-self-center">
                <section className="w-full h-lvh min-h-svh max-h-lvh">
                    <div className="w-auto relative h-full overflow-hidden">
                        <img className="w-full h-lvh max-h-[480px] sm:max-h-[650px] object-cover object-top sm:object-top" src="/images/fotoPrincipal.webp" alt="foto" />
                        <div className=" absolute inset-0 bottom-0 bg-gradient-to-t from-degrade-cinza from-50% sm:from-30% via-degrade-cinza-transparente via-60% sm:via-45% to-transparent to-70% sm:to-65%"></div>
                        <div className="flex flex-col pb-10 absolute inset-x-0 bottom-10 gap-5 items-center mx-4 md:mx-0">
                            <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:gap-9 gap-1">
                                <img className="w-40 md:w-45 h-auto" src="/images/LogoVerticalColorida.svg" alt=" Logo Vertical da empresa"/>
                                <a className="md:border-1 h-0 md:h-50 border-white"></a>
                                <div className="w-auto max-w-170 flex flex-col gap-3 text-white items-center md:items-start text-center md:text-start ">
                                    <h1 className="md:max-w-sm max-w-100 whitespace-normal text-cards leading-4.5 sm:leading-5 md:leading-5 font-bold">TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA</h1>
                                    <p className="md:max-w-lg max-w-100 text-medio leading-4.5 sm:leading-6 md:leading-7 font-bold text-dourado-base md:mb-4"> ESTIMULE A SUA AUTONOMIA, INDEPENDENCIA E QUALIDADE DE VIDA</p>
                                    <p className="md:max-w-none max-w-100 text-xs sm:text-base lg:text-lg border rounded-4xl text-center border-dourado-base px-2">Especializada para Adultos e Idosos em Brasilia</p>
                                </div>
                            </div>
                            <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR AVALIACAO</Button>                            
                        </div>
                        <div className="absolute bottom-0 inset-x-0 left-0 right-0 w-full overflow-hidden leading-none">
                            <svg
                                className="relative block w-full h-7 md:h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                            <path
                                d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z"
                                fill="#ffffff"
                            />
                            </svg>
                    </div>
                    </div>
                </section>
                <section className="w-full h-auto flex flex-col gap-5 items-center ">
                    <h2 className="md:max-w-2xl max-w-lg text-medio leading-4.5 sm:leading-5 md:leading-8 font-bold text-azul-base md:mb-4 text-center">PARA QUEM É A TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA:</h2>
                    <p className="md:max-w-4xl max-w-lg whitespace-normal text-cards leading-5 sm:leading-6 text-center">População <strong>Adulta e idosa</strong> que enfrentam dificuldades cognitivas e funcionais, decorrentes de condições neurológicas como Doença de Alzheimer, outras demências, Acidente Vascular Encefálico (AVE) e lesões cerebrais</p>
                    <Carrossel></Carrossel>
                </section>
                <section className="w-full ">
                    <div className=" h-[70%] flex flex-col bg-degrade-cinza">
                        <img className="w-full max-w-[380px] h-[130px] my-4 self-center block bg-no-repeat bg-center bg-contain sm:bg-auto bg-[url(/images/nossosServicos.webp)]"></img>
                        <div>
                            <Servicos></Servicos>
                        </div>
                    </div>
                    <div className="relative w-full h-[170px] content-center self-center block bg-[url('/images/agendamento.webp')] bg-no-repeat bg-center bg-cover sm:bg-auto">
                        <div className="absolute inset-0 bg-[rgba(207,163,91,1)] opacity-60 z-0"></div>
                        <div className="w-full text-white md:max-w-7/10 lg:max-w-6/10 xl:max-w-4/10 relative flex flex-col gap-3 items-center text-center justify-self-center z-10">
                            <p className="text-cards mx-8 xs:mx-11 font-bold">AGENDE UMA AVALIAÇÃO E DESCUBRA COMO A TERAPIA OCUPACIONAL PODE TRANSFORMAR SUA VIDA!</p>
                            <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR AVALIACAO</Button>
                        </div>                        
                    </div>
                </section>
                <section className="w-full">
                    <div className="flex flex-col items-center gap-5">
                        <p className="max-w-[450px] text-medio font-bold leading-4.5 sm:leading-5 md:leading-8 text-center text-azul-base">COMO FUNCIONA NOSSO ATENDIMENTO</p>
                        <NossoAtendimento></NossoAtendimento>
                        <Button className="bg-dourado-base text-white hover:bg-[#bb8e47]">QUERO SABER MAIS</Button>
                    </div>
                </section>
                <section className="w-full bg-azul-base">
                    <QuemSomos></QuemSomos>
                </section>
                <section className="w-full">
                    <NossoEspaco></NossoEspaco>
                </section>
            </div>
        </div>
    )
}