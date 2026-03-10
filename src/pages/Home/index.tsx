import Button from "../../components/Button";
import Carrossel from "../../components/Carrossel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modalidades from "../../components/Modalidades";
import NossoAtendimento from "../../components/NossoAtendimento";
import NossoDiferencial from "../../components/NossoDiferencial";
import NossoEspaco from "../../components/NossoEspaco";
import PerguntasFrequentes from "../../components/PerguntasFrequentes";
import QuemSomos from "../../components/QuemSomos";
import Servicos from "../../components/Servicos";

export default function Home(){
    return (
        <div className="font-montserrat max-w-[1920px] 3xl:justify-self-center" id="section-principal">
            <Header></Header>
            <div className=" flex flex-col gap-6">
                <section className="w-full h-[calc(100lvh-100px)] min-h-[calc(100svh-90px)] max-h-[calc(100lvh-90px)]">
                    <div className="w-auto relative h-full overflow-hidden">
                        <img className="w-full h-lvh max-h-[480px] sm:max-h-[650px] object-cover object-top sm:object-top" src="/imgs/marca/foto-socias-principal.webp" alt="foto" />
                        <div className=" absolute inset-0 bottom-0 bg-gradient-to-t from-degrade-cinza from-50% sm:from-30% via-degrade-cinza-transparente via-60% sm:via-45% to-transparent to-70% sm:to-65%"></div>
                        <div className="flex flex-col pb-5 md:pb-10 absolute inset-x-0 bottom-10 gap-5 items-center mx-4 md:mx-0">
                            <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:gap-9 gap-1">
                                <div className="rounded-full bg-white p-4">
                                    <img className="size-30 md:size-40 h-auto pb-1 p-2 mb:pb-3 py-1" src="/imgs/marca/LogoVerticalColorida.svg" alt=" Logo Vertical da empresa"/>
                                </div>
                                <div className="w-auto flex flex-col gap-1 text-white items-center md:items-start text-center md:text-start ">
                                    <h1 className="md:max-w-2xl max-w-100 whitespace-normal text-normal leading-4.5 sm:leading-5 md:leading-5 font-bold text-balance">TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA</h1>
                                        <div className="w-full md:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left tracking-wide text-dourado-base font-extrabold">
                                            <p className="text-lg leading-4.5 md:text-destaque sm:leading-6 md:leading-7">
                                                ESTIMULE A SUA AUTONOMIA,
                                            </p>
                                            <p className="px-4 md:px-0 text-[1.6rem] md:text-destaque leading-[.9] md:mb-2">
                                                INDEPENDÊNCIA E QUALIDADE DE VIDA
                                            </p>
                                        </div>
                                    <p className="md:max-w-none max-w-80 px-2 py-1 mt-3 md:my-3 text-normal text-center text-balance leading-[1] border rounded-4xl border-dourado-base ">Especializada para Adultos e Idosos em Brasilia</p>
                                </div>
                            </div>
                            <Button className="bg-botao-wpp hover:bg-[#099656] text-white">AGENDAR AVALIAÇÃO</Button>                            
                        </div>
                        <div className="absolute bottom-0 inset-x-0 left-0 right-0 w-full overflow-hidden leading-none">
                            <svg
                                className="relative block w-full h-12"
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
                    <div className="relative">
                        <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 translate-y-full" >
                            <img className="w-[40px] h-[40px] rounded-full bg-dourado-base p-1" src="/imgs/icons/seta-para-baixo.svg" alt=" Logo Vertical da empresa"/>
                        </div>
                    </div>
                </section>
                <section id="nossosPacientes" className="w-full my-10 h-auto flex flex-col gap-2 items-center">
                    <div className="mx-5 md:flex flex-col items-center">
                        <h2 className="pb-2 md:max-w-2xl max-w-lg text-destaque leading-[1] font-extrabold text-azul-base text-left md:text-center text-balance"><strong className="font-extrabold md:text-destaque text-[2.6rem]">PARA QUEM É</strong> A TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA:</h2>
                        <p className="md:max-w-xl max-w-lg whitespace-normal text-normal leading-[1.1] md:text-center text-balance lg:text-pretty "><strong>População Adulta e idosa que enfrentam dificuldades cognitivas e funcionais</strong> decorrentes de condições neurológicas como Doença de Alzheimer, outras demências, Acidente Vascular Encefálico (AVE) e lesões cerebrais</p>
                    </div>
                    <Carrossel></Carrossel>
                </section>
                <section className="w-full">
                    <div className="relative mb-15 w-full left-1/2 -translate-x-1/2">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-azul-base" />
                            <div className="relative flex justify-center">
                                <span className="bg-white px-3 md:text-normal font-bold md:tracking-[0.2em] text-dourado-base">
                                CADERNOS DE ESTIMULAÇÃO COGNITIVA
                                </span>
                            </div>
                    </div>
                    <div className="px-4 flex flex-col items-center">
                        <p className="pb-2 md:max-w-4xl max-w-3xl text-destaque leading-[1] font-extrabold text-azul-base text-center text-balance uppercase">Estimulação diária, acessível e pensada para fortalecer as habilidades do paciente</p>
                        <div className="flex flex-col md:flex-row justify-center">
                            <img className="w-auto md:w-2/5 m-5 inset-y-0 top-[-110px] lg:static" src="/imgs/produtos/caderno.png" alt="Caderno Inclusio" />
                            <div className="md:w-2/6 flex flex-col justify-evenly text-normal">
                                <p className="text-balance">Nossos cadernos fazem parte do Método Inclusio e reúnem atividades simples, 
                                    variadas e eficazes para estimular memória, atenção, linguagem, raciocínio e 
                                    funções executivas. Cada exercício foi desenvolvido para apoiar o paciente de 
                                    forma prática, promover autonomia e facilitar a participação da família no cuidado.</p>
                                <ul className="list-disc marker:text-xs">O que os torna especiais:
                                    <li className="ml-7">Conteúdo claro e acolhedor, ideal para pacientes e seus familiares.</li>
                                    <li className="ml-7">Atividades diversificadas que mantêm o cérebro ativo todos os dias.</li>
                                    <li className="ml-7">Material estruturado para integrar casa e tratamento, reforçando a rotina cognitiva.</li>
                                </ul>
                                <p className="text-center text-azul-base font-extrabold text-pretty">Design organizado, com exercícios que favorecem foco, engajamento e independência.</p>
                            </div>
                        </div>
                        <Button className="mt-5 bg-dourado-base text-white hover:bg-[#bb8e47]">QUERO SABER MAIS</Button>
                    </div>
                </section>
                <section id="nossosServicos" className="w-full relative">
                    <div className="top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 20"
                        preserveAspectRatio="none"
                        className="w-full h-16 block -translate-y-[-1px]"
                        >
                        <path d="M0 20 L50 0 L100 20 Z" fill="#577585" />
                        </svg>
                    </div>
                    <div className=" h-[70%] flex flex-col items-center bg-degrade-cinza">
                        <img className="w-full max-w-[390px] h-[140px] self-center block bg-no-repeat bg-center bg-contain sm:bg-auto bg-[url(/imgs/marca/nossos-servicos.png)]"></img>
                        <div>
                            <Servicos></Servicos>
                        </div>
                        <div className="top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 20"
                            preserveAspectRatio="none"
                            className="w-full h-16 block -translate-y-[-1px]">
                                <path d="M0 20 L50 0 L100 20 Z" fill="#0088b6" />
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="-mt-6">
                    <div className="bg-azul-base text-center flex flex-col gap-10">
                        <p className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold">MODALIDADES</p>
                        <Modalidades></Modalidades>
                    </div>
                </section>
                <section>
                    <NossoDiferencial></NossoDiferencial>
                    <div className="mt-7 relative w-full h-full min-h-[140px] content-center self-center block bg-[url('/imgs/marca/agendamento.webp')] bg-no-repeat bg-center bg-cover sm:bg-auto">
                        <div className="absolute inset-0 bg-[#584525] opacity-40 z-0"></div>
                        <div className="my-2 w-full h-full text-white md:max-w-7/10 lg:max-w-6/10 xl:max-w-4/10 relative flex flex-col gap-3 items-center text-center justify-self-center z-10">
                            <p className="text-normal mx-6 xs:mx-25 font-bold leading-[1.1] tracking-wider text-center">AGENDE UMA AVALIAÇÃO E DESCUBRA COMO A TERAPIA OCUPACIONAL PODE TRANSFORMAR SUA VIDA!</p>
                            <Button className="bg-botao-wpp hover:bg-[#099656] text-white text-xs">AGENDAR AVALIAÇÃO</Button>
                        </div>                        
                    </div>
                </section>
                <section id="comoFunciona" className="w-full h-auto md:mt-20 ">
                    <div className="flex flex-col items-center gap-5">
                        <p className="max-w-[400px] text-destaque font-extrabold leading-4.5 sm:leading-5 md:leading-8 text-center text-azul-base text-balance">COMO FUNCIONA NOSSO ATENDIMENTO</p>
                        <NossoAtendimento></NossoAtendimento>
                        <Button className="mt-5 bg-dourado-base text-white hover:bg-[#bb8e47]">QUERO SABER MAIS</Button>
                    </div>
                </section>
                <section id="quemSomos" className="w-full relative bg-[#0085b3] shadow-[inset_0_18px_28px_-14px_rgba(0,0,0,0.28)]">
                    <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none">
                        <svg
                            className="relative block w-full h-12"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                            d="M0,0 V40 C300,80 900,80 1200,40 V0 Z"
                            className="fill-white"
                            />
                        </svg>
                    </div>
                    <QuemSomos></QuemSomos>
                </section>
                <section>
                    <PerguntasFrequentes></PerguntasFrequentes>
                </section>
                <section className="w-full">
                    <NossoEspaco></NossoEspaco>
                </section>
            </div>
            <div id="localizacao">
               <Footer></Footer>  
            </div>
        </div>
    )
}