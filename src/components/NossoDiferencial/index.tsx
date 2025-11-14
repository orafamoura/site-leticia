export default function NossoDiferencial() {

    const nossoDiferencialTexto = [
        {texto:
            [
                "Oferecer tratamento personalizado, humanizado com resultados concretos"+
                " que fazem a diferença no seu dia a dia. Trabalhamos para aumentar sua participação "+
                "ativa e engajamento em cada atividade do cotidiano, proporcionando mais autonomia e qualidade de vida.",
                "Cada etapa do nosso trabalho é focada em transformar o potencial de cada pessoa em conquistas reais.",
                "Cada paciente tem acompanhamento personalizado e recebe atividades planejadas, "+
                " desenvolvida pela equipe, para realizar no domicílio. Isso favorece a continuidade"+
                " da estimulação cognitiva, enriquecimento ambiental, a neuroplasticidade e o processo da reabilitação.",
                "Desenvolvemos recursos terapêutico específicos para a reabilitação da população adulta"+
                " e idosa como: jogos direcionados, exercícios cognitivos, planers, cadernos de exercícios"+
                " cognitivos e uso de tecnologias assistivas, com objetivo de aprimorar as habilidades cognitivas.",
                " Além do atendimento em Terapia Ocupacional, oferecemos qualificação profissional para cuidadores,"+
                " profissionais da saúde e educação, com cursos, workshops e mentorias especializadas."
            ]
        }
    ]

    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-center md:my-10">
            <div className="w-full md:w-auto">
                <img className="md:rounded-l-full rounded-t-full md:rounded-t-none w-full md:w-[360px] h-70 md:h-auto object-cover object-center md:object-left md:object-cover" src="/public/nossoDiferencialFoto/fotoSocias.png" alt="" />
            </div>
            <div className="md:w-lg xl:w-3xl relative border-2 border-azul-base rounded-xl m-9 md:m-0 py-4">
                <p className="w-60 flex items-center text-4xl text-azul-base font-black justify-center absolute top-[-35px] left-[20px] leading-7 bg-white"> NOSSO DIFERENCIAL</p>
                <div className="h-auto p-5 max-h-[450px] flex gap-4 flex-col justify-evenly leading-5 overflow-y-scroll xl:overflow-visible ">
                    {nossoDiferencialTexto[0].texto.map((item, index) => (
                        index === 1
                        ? <p className="text-2xl text-azul-base leading-6 uppercase font-bold"key={index}>{item}</p>
                        : <p className="text-cards" key={index}>{item}</p>
                    ))}
                </div> 
            </div>
        </div>
    )
}