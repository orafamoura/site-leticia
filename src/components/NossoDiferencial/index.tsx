export default function NossoDiferencial() {

    const nossoDiferencialTexto = [
        {texto:
            [
                <>Oferecemos um atendimento personalizado e centrado no paciente, com resultados que impactam a rotina de forma concreta.</>,
                <>Cada pessoa recebe <strong>atividades planejadas para realizar em casa</strong>, ampliando a estimulação cognitiva, a neuroplasticidade e a continuidade da reabilitação.
                Também desenvolvemos recursos terapêuticos próprios, como jogos, exercícios cognitivos, planners e cadernos específicos para adultos e idosos.</>
            ]
        }
    ]

    return (
        <div className="w-full px-4 md:my-25 justify-center flex">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch border-azul-base rounded-t-full md:rounded-xl border-2 overflow-hidden">
                <div className="w-full md:w-5/12 min-h-[260px] md:min-h-0">
                    <img className="" src="/public/imgs/social/foto-socias.png" alt="" />
                </div>
                <div className="p-4 px-9 w-full md:w-7/12 md:px-5 flex gap-3 md:gap-7 flex-col justify-center leading-5">
                    <p className="w-55 sm:w-65 md:w-85 text-3xl sm:text-4xl md:text-5xl text-azul-base font-black justify-center leading-[.8] bg-white text-balance"> NOSSO DIFERENCIAL</p>
                    {nossoDiferencialTexto[0].texto.map((item, index) => (
                        index === 0
                        ? <p className="text-titulo-cards md:text-[1.4rem] text-azul-base leading-[.9] font-extrabold"key={index}>{item}</p>
                        : <p className="text-normal md:text-[1.1rem] text-balance font-medium" key={index}>{item}</p>
                    ))}
                </div> 
            </div>
        </div>
    )
}