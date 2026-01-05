export default function NossoDiferencial() {

    const nossoDiferencialTexto = [
        {texto:
            [
                "Oferecemos um atendimento personalizado e centrado no paciente, com resultados que impactam a rotina de forma concreta.",
                "Cada pessoa recebe atividades planejadas para realizar em casa, ampliando a estimulação cognitiva, a neuroplasticidade e a continuidade da reabilitação.",
                "Também desenvolvemos recursos terapêuticos próprios, como jogos, exercícios cognitivos, planners e cadernos específicos para adultos e idosos."
            ]
        }
    ]

    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-center md:my-25">
            <div className="w-full md:w-auto">
                <img className="md:rounded-l-full rounded-t-full md:rounded-t-none w-full md:w-[360px] h-70 md:h-auto object-cover object-center md:object-left md:object-cover" src="/public/nossoDiferencialFoto/fotoSocias.png" alt="" />
            </div>
            <div className="md:w-lg xl:w-3xl relative border-2 border-azul-base rounded-xl m-9 md:m-0 py-4">
                <p className="w-55 sm:w-65 md:w-85 flex items-center text-3xl sm:text-4xl md:text-5xl text-azul-base font-black justify-center absolute top-[-30px] md:top-[-50px] left-[15px] sm:left-[30px] leading-[.8] bg-white"> NOSSO DIFERENCIAL</p>
                <div className="h-auto p-5 mt-3 md:mt-0 max-h-[450px] flex gap-4 flex-col justify-evenly leading-5 overflow-y-scroll xl:overflow-visible ">
                    {nossoDiferencialTexto[0].texto.map((item, index) => (
                        index === 1
                        ? <p className="text-xl text-azul-base leading-[.9] uppercase font-extrabold text-balance"key={index}>{item}</p>
                        : <p className="text-normal" key={index}>{item}</p>
                    ))}
                </div> 
            </div>
        </div>
    )
}