import { useState } from "react"
import Button from "../Button"
import PerguntasFrequentesItem from "./items"

export default function PerguntasFrequentes() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const perguntas = [
        {
            pergunta: "Quanto custa o atendimento?",
            resposta: ["Os atendimentos têm duração média de 50 minutos, com valores entre R$ 200 e R$ 300, variando conforme a modalidade (presencial, domiciliar ou online).",
                "Um diferencial da clínica é que o paciente recebe atividades personalizadas para fazer em casa, reforçando a estimulação cognitiva e ampliando os resultados terapêuticos."
            ]
        },
        {
            pergunta: "O que é a reabilitação cognitiva?",
            resposta: ["É um processo terapêutico que trabalha memória, atenção, linguagem, raciocínio e funções executivas, ajudando o paciente a recuperar ou fortalecer habilidades importantes para o dia a dia.",
                "Indicado para idosos com demências, sequelas neurológicas, TCE, AVC, depressão ou para quem deseja envelhecer com mais autonomia.",
                "O tratamento é totalmente personalizado, com participação ativa do paciente e orientação à família."
            ]
        },
        {
            pergunta: "O que é terapia ocupacional?",
            resposta: ["É uma área da saúde que promove autonomia, funcionalidade e qualidade de vida, ajudando o paciente a realizar atividades importantes da rotina — desde autocuidado até participação social.",
                "O terapeuta ocupacional avalia necessidades, adapta ambientes e cria estratégias que facilitam o dia a dia do paciente."
            ]
        },
        {
            pergunta: "Os filhos podem ajudar no processo?",
            resposta: ["Sim. O paciente é o protagonista da terapia, mas a participação dos filhos e cuidadores é essencial para reforçar as estratégias no cotidiano.",
                "A clínica orienta toda a família para garantir segurança, apoio adequado e continuidade das atividades em casa."
            ]
        },
        {
            pergunta: "Como funciona o acompanhamento?",
            resposta: ["Tudo começa com uma Avaliação Terapêutica Ocupacional, que identifica as necessidades do paciente.",
                "A partir dela, é criado um Plano Terapêutico Singular (PTS), definindo objetivos e estratégias personalizadas.",
                "Os atendimentos seguem com exercícios, atividades e orientações que fortalecem as áreas comprometidas e ampliam a participação nas atividades do dia a dia — sempre com acompanhamento e orientação contínua aos familiares."
            ]
        },
    ]

  return (
    <section className="text-azul-base flex flex-col items-center">
      <div className="md:w-4xl container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="w-auto flex flex-col text-5xl text-left font-extrabold ">
          <p className="text-[2.5rem] sm:text-4xl leading-[.8]">PERGUNTAS</p>
          <p className="mb-12 text-[2.5rem] sm:text-4xl">FREQUENTES</p>
        </div>

        <div className="flex flex-col ">
          {perguntas.map((item, index) => (
            <PerguntasFrequentesItem
              key={index}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={activeIndex === index}
              onToggle={() =>
                setActiveIndex((prev) => (prev === index ? null : index))
              }
            />
          ))}
        </div>
      </div>

      <Button className="uppercase bg-dourado-base text-white w-50 mt-3">
        Mais dúvidas?
      </Button>
    </section>
  )
}
