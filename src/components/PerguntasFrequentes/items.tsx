
interface perguntasFrequentesProps {
    pergunta: string,
    resposta: string []
}

export default function PerguntasFrequentesItem({pergunta, resposta}: perguntasFrequentesProps) {
    return (
        <details className="group border-2 rounded-full open:rounded-4xl my-0.5 open:bg-azul-base open:text-white">
            <summary className="flex min-h-[60px] mx-5 gap-7 items-center py-3 outline-none cursor-pointer focus:underline font-bold md:tracking-wider leading-[1] text-balance">
            <svg className="max-w-[15px] bg-center bg-no-repeat transition-transform duration-300 group-open:rotate-45 fill-azul-base group-open:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 717 715"><path d="M438 279h279v159H438v277H279V438H0V279h279V0h159v279z"/></svg>
                {pergunta}
            </summary>
            <div className="px-5 pb-4 flex-col text-wrap">
                {resposta.map(resp => <p className="" key={resp}>{resp}</p>)}
            </div>
        </details>
    )
}