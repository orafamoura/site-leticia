import QuemSomosItems from "./items";

export default function QuemSomos() {

    const quemSomosCard = [
        {
            id: 1,
            nome: "Ângela Maria Sacramento",
            imagem:"/public/fotoSocias/fotoAngela.png",
            texto: ["Possui 14 anos de experiência na Rede Sarah, atuando com reabilitação neurológica e reabilitação cognitiva.",
                "Formação internacional em PEI e em curso de avaliação e reabilitação cognitiva.",
                "Atua na SES/DF, na área da Saúde da Pessoa Idosa; é conselheira do Conselho dos Direitos do Idoso/DF; instrutora"+
                " de cursos como Intervenção Cognitiva, Reabilitação Neurológica, Prescrição e Adaptação de Cadeiras de Rodas e"+
                " Tecnologia Assistiva; e sócia-fundadora do Instituto Inclusio – Reabilitação Neurocognitiva."
            ],
            tags:["Terapeuta Ocupacional - UFSCar",
                "Mestre e Doutora em Gerontologia - UCB",
                "Especializada em Terapia Ocupacional em Reabilitação - Unicamp"
            ]
        },
        {
            id: 2,
            nome: "Letícia Dantas",
            imagem:"/public/fotoSocias/fotoLeticia.png",
            texto: ["Possui formação em cursos voltados à promoção da saúde, Terapia Ocular Complementar, Prescrição e Adaptação de Cadeiras de Rodas e Reabilitação Cognitiva.",
                "Membro colaboradora da Liga Acadêmica de Terapia Ocupacional em Contextos Hospitalares e Cuidados Paliativos da Universidade de Brasília.",
                "Experiência em atendimento domiciliar e clínico com a população idosa. Sócia-fundadora e responsável técnica do Instituto Inclusio – Reabilitação Neurocognitiva."
            ],
            tags:["Especialista em Gerontologia pela Fundação de Ensino e Pesquisa em Ciências da Saúde - FEPECS",
                "Terapeuta Ocupacional formada pela Universidade de Brasília - UnB"
            ]
        }
    ]

    return(
        <div className="w-full flex flex-col text-white bg-azul-base items-center px-4">
            <div className="w-full md:w-xl lg:w-4xl">
                <div className="w-full mt-10 flex items-center
                 justify-center lg:justify-normal">
                    <p className="lg:mx-15 text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-center lg:text-right font-extrabold leading-[0.9]">QUEM<br/> SOMOS</p>
                    <p className="hidden lg:block text-md leading-5">
                        Instituto Inclusio, um centro de excelência em reabilitação neurológica e cognitiva em Brasília,
                        especializado no atendimento humanizado e qualificado para adultos e idosos. Somos referência em
                        Terapia Ocupacional e Reabilitação Neurocognitiva, com uma abordagem centrada no paciente e na 
                        promoção da autonomia e qualidade de vida. Nossos serviços promovem independência e autonomia por 
                        meio de estimulação cognitiva.
                    </p>
                </div>
                <div className="w-auto flex flex-col content-around gap-40 lg:gap-8 my-20 mt-30 lg:mt-10">
                    {quemSomosCard.map(function (item) {
                        return (
                            <div className="w-auto h-auto lg:h-full relative flex flex-col justify-center lg:justify-normal lg:flex-row  items-center border rounded-xl lg:rounded-full border-white">
                                <QuemSomosItems 
                                    quemSomosImg={item.imagem} 
                                    quemSomosNome={item.nome} 
                                    quemSomosTexto={item.texto} 
                                    quemSomosTags={item.tags}>
                                </QuemSomosItems>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}