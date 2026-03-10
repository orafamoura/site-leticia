import QuemSomosItems from "./items";

export default function QuemSomos() {

    const quemSomosCard = [
        {
            id: 1,
            nome: "Angela Maria Sacramento",
            imagem:"/public/imgs/social/individual-angela.png",
            texto: ["Possui 14 anos de experiência na Rede Sarah, atuando com reabilitação neurológica e reabilitação cognitiva.",
                "Formação internacional em PEI e em curso de avaliação e reabilitação cognitiva.",
                "Atua na SES/DF, na área da Saúde da Pessoa Idosa; é conselheira do Conselho dos Direitos do Idoso/DF; instrutora"+
                " de cursos como Intervenção Cognitiva, Reabilitação Neurológica, Prescrição e Adaptação de Cadeiras de Rodas e"+
                " Tecnologia Assistiva; e sócia-fundadora do Instituto Inclusio – Reabilitação Neurocognitiva."
            ],
            crefito: "Angela: 4287 - TO",
            tags:["Terapeuta Ocupacional - UFSCar",
                "Mestre e Doutora em Gerontologia - UCB",
                "Especializada em Terapia Ocupacional em Reabilitação - Unicamp"
            ]
        },
        {
            id: 2,
            nome: "Letícia Dantas",
            imagem:"/public/imgs/social/individual-leticia.png",
            texto: ["Possui formação em cursos voltados à promoção da saúde, Terapia Ocular Complementar, Prescrição e Adaptação de Cadeiras de Rodas e Reabilitação Cognitiva.",
                "Membro colaboradora da Liga Acadêmica de Terapia Ocupacional em Contextos Hospitalares e Cuidados Paliativos da Universidade de Brasília.",
                "Experiência em atendimento domiciliar e clínico com a população idosa. Sócia-fundadora e responsável técnica do Instituto Inclusio – Reabilitação Neurocognitiva."
            ],
            crefito: "Letícia: 23477 - TO",
            tags:["Especialista em Gerontologia pela Fundação de Ensino e Pesquisa em Ciências da Saúde - FEPECS",
                "Terapeuta Ocupacional formada pela Universidade de Brasília - UnB"
            ]
        },
        {
            id: 3,
            nome: "Andreza de Siqueira Cabral",
            imagem:"/public/imgs/social/individual-andreza.png",
            texto: [" Terapeuta Ocupacional formada pela Universidade de Brasília (UnB) e integra a equipe da clínica atuando principalmente nos atendimentos domiciliares, oferecendo um cuidado personalizado e centrado na funcionalidade do paciente em seu próprio ambiente.",
                "Com formação complementar em patologias neurológicas do adulto e idoso, terapia de mão e abordagem domiciliar em cuidados paliativos, Andreza contribui para ampliar a capacidade funcional e a qualidade de vida dos pacientes acompanhados pela clínica.",
                "Nos atendimentos domiciliares, sua atuação estratégica permite adaptar rotinas, orientar familiares e implementar intervenções que favoreçam segurança, independência e participação nas atividades do dia a dia."
            ],
            crefito: "Andreza: 26749 - TO",
            tags:["Especialista em Gerontologia pela Fundação de Ensino e Pesquisa em Ciências da Saúde - FEPECS",
                "Terapeuta Ocupacional formada pela Universidade de Brasília - UnB"
            ]
        }
    ]

    return(
        <div className="w-full flex flex-col text-white items-center px-4">
            <div className="w-full md:w-xl lg:w-5xl">
                <div className="w-full mt-10 flex items-center justify-center lg:justify-normal">
                    <p className="lg:mx-15 text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-center lg:text-right font-extrabold leading-[0.9]">QUEM<br/> SOMOS</p>
                    <p className="hidden lg:block text-md leading-5 tracking-wide">
                        Somos o Instituto Inclusio, um centro especializado em reabilitação neurológica e cognitiva para adultos e idosos em Brasília. 
                        Atuamos com Terapia Ocupacional baseada em cuidado humanizado, avaliação qualificada e intervenções que promovem autonomia, 
                        funcionalidade e qualidade de vida.
                    </p>
                </div>
                <div className="w-auto flex flex-col content-around gap-40 lg:gap-8 my-20 mt-30 lg:mt-10">
                    {quemSomosCard.map(function (item, key) {
                        return (
                            <div key={key} className="w-auto h-auto lg:h-full relative flex flex-col justify-center lg:justify-normal lg:flex-row  items-center border rounded-4xl lg:rounded-full border-white">
                                <QuemSomosItems 
                                    quemSomosImg={item.imagem} 
                                    quemSomosNome={item.nome} 
                                    quemSomosTexto={item.texto} 
                                    crefito={item.crefito}
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